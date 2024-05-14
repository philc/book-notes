#!/usr/bin/env deno run --allow-read --allow-write --allow-env
// This generates the website which displays all of the notes.

import { micromark } from "npm:micromark";
import { gfm, gfmHtml } from "npm:micromark-extension-gfm";
import * as path from "@std/path";
import * as fs from "@std/fs";
import * as mustache from "https://deno.land/x/mustache@v0.3.0/mod.ts";
import { abort, desc, run, task } from "https://deno.land/x/drake@v1.5.1/mod.ts";

const buildDir = "dist";

async function generatePage(path) {
  const bytes = await Deno.readFile(path);
  let str = (new TextDecoder("UTF-8")).decode(bytes);
  // Handle mdashes.
  str = str.replaceAll(" -- ", " &mdash; ");
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

  const resources = ["github.svg"];
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
  await Deno.writeTextFile(path.join(buildDir, "index.html"), htmlStr);
}

desc("Create the website");
task("website", [], async () => {
  // TODO(philc): For now, these are hard-coded. Once I've reviewed all of the notes, just list all
  // files in each category.
  const files = ["lifestyle/what is culture for - school of life.md"];
  await processPages(files);
  await createIndex(files);
});

run();
