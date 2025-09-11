#!/usr/bin/env deno run --allow-read --allow-write --allow-env --allow-run
// This generates the website which displays all of the notes.

import { micromark } from "npm:micromark";
import { gfm, gfmHtml } from "npm:micromark-extension-gfm";
import * as path from "@std/path";
import * as fs from "@std/fs";
import * as mustache from "https://deno.land/x/mustache@v0.3.0/mod.ts";
import { abort, desc, run, shCapture, task } from "https://deno.land/x/drake@v1.7.0/mod.ts";

const buildDir = "dist";

async function generatePage(path) {
  const bytes = await Deno.readFile(path);
  let str = (new TextDecoder("UTF-8")).decode(bytes);
  // Handle mdashes.
  str = str.replaceAll(" --", " &mdash;");
  // Handle ellipses.
  str = str.replaceAll("...", "&hellip;");
  const html = micromark(str, {
    extensions: [gfm()],
    htmlExtensions: [gfmHtml()],
  });
  return html;
}

async function wrapInLayout(html, title) {
  return await mustache.renderFile("website/layout.html", { title: title, body: html });
}

function slug(filename) {
  return path.basename(filename)
    .replaceAll(" - ", "-") // Collapse into one dash
    .replaceAll(" ", "-")
    .replace(".md", ".html");
}

async function processPages(files) {
  if (!(await fs.exists(buildDir))) {
    await Deno.mkdir(buildDir, { recursive: true });
  }
  for (const file of files) {
    let html = await generatePage(file);
    const match = html.match(/<h1>(.+)<\/h1>/);
    if (match == null) {
      throw new Error("Title not found in " + file);
    }
    const title = match[1];
    // Remove the title from the HTML so we can treat it separately.
    html = html.replace(match[0], "");
    html = await wrapInLayout(html, title);
    const dest = path.join(buildDir, slug(file));
    await Deno.writeTextFile(dest, html);
  }

  const resources = ["styles.css", "favicon.png", "github.svg"];
  for (const file of resources) {
    await Deno.copyFile(path.join("website", file), path.join(buildDir, file));
  }
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

async function getTitleFromFile(filename) {
  // Pull out the value of the <h1> tag, which will have the proper title capitalization.
  const text = await Deno.readTextFile(path.join(buildDir, filename));
  const match = text.match(/<h1>(.+)<\/h1>/s);
  if (!match || match.length < 2) {
    throw new Error("h1 title not found in " + filename);
  }
  return match[1];
}

async function createIndex(files) {
  if (!(await fs.exists(buildDir))) {
    await Deno.mkdir(buildDir, { recursive: true });
  }

  const filesByCategory = {};
  for (const file of files) {
    const category = file.split("/")[0];
    const list = filesByCategory[category] ?? [];
    list.push(file);
    filesByCategory[category] = list;
  }
  const html = [];
  for (const [category, list] of Object.entries(filesByCategory)) {
    html.push(`<h2>${capitalize(category)}</h2>`);
    html.push("<ul>");
    for (const file of list) {
      const path = slug(file);
      const title = await getTitleFromFile(path);
      html.push(`<li><a href="${path}">${title}</a></li>`);
    }
    html.push("</ul>");
  }
  let htmlStr = html.join("\n");
  htmlStr = await wrapInLayout(htmlStr, "Book Notes");
  // Label this as the index page, so we can style it differently in CSS.
  if (!htmlStr.includes("<body>")) {
    throw new Error("Error styling <body> when bulding the index page.");
  }
  htmlStr = htmlStr.replace("<body>", '<body id="index-page">');
  // Use a plain title without the "- Book Notes" suffix.
  htmlStr = htmlStr.replace(/<title>.+?<\/title>/, "<title>Book Notes</title>");
  await Deno.writeTextFile(path.join(buildDir, "index.html"), htmlStr);
}

desc("Create the website");
task("website", [], async () => {
  // TODO(philc): For now, these are hard-coded. Once I've reviewed all of the notes, just list all
  // files in each category.
  const files = [
    "architecture/suburban nation - andres duany.md",
    "business/7 powers - hamilton helmer.md",
    "business/it doesnt have to be crazy at work - jason fried.md",
    "business/powerful - patty mccord.md",
    "business/radical candor - kim scott.md",
    "business/slack - tom demarco.md",
    "business/zero to one - peter thiel.md",
    "engineering/an elegant puzzle - will larson.md",
    "engineering/how big things get done - bent flyvbjerg.md",
    "engineering/mythical man month - fred brooks.md",
    "engineering/shape up - ryan singer.md",
    "engineering/thinking in systems - donella meadows.md",
    "engineering/working in public - nadia eghbal.md",
    "lifestyle/the dream of solomeo - brunello cucinelli.md",
    "lifestyle/the psychology of money - morgan housel.md",
    "lifestyle/what is culture for - school of life.md",
    "philosophy/a guide to the good life - william irvine.md",
    "psychology/deep work - cal newport.md",
    "psychology/digital minimalism - cal newport.md",
    "psychology/four thousand weeks - oliver burkeman.md",
    "psychology/relentless - tim grover.md",
    "relationships/bringing up bebe - pamela druckerman.md",
    "relationships/the happy sleeper - heather turgeon.md",
  ];
  await processPages(files);
  await createIndex(files);
});

desc("Publish to GitHub Pages");
task("gh-pages", ["website"], async () => {
  const ensure = async (command) => {
    const result = await shCapture(command);
    if (result.code != 0) {
      throw new Error("Command failed: " + command);
    }
    return result;
  };

  let result = await ensure("git status --porcelain");
  if (result.output.trim().length > 0) {
    throw new Error("There are unstaged changes or untracked files in the repo.");
  }

  await ensure("git checkout gh-pages");
  // Preserve the CNAME file that allows this page to be hosted on a custom subdomain.
  await ensure("mv docs/CNAME ./")
  await ensure("rm -f docs/*");
  await ensure("cp dist/* docs/");
  await ensure("mv CNAME docs/")
  await ensure("git add docs");
  await ensure("git commit -a -m 'Update website'");
  await ensure("git push");
  await ensure("git checkout master");
});

run();
