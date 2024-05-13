#!/usr/bin/env deno run --allow-read --allow-write
// This generates the website which displays all of the notes.

import { micromark } from "npm:micromark";
import { gfm, gfmHtml } from "npm:micromark-extension-gfm";
import * as path from "@std/path";
import * as fs from "@std/fs";
import * as mustache from "https://deno.land/x/mustache@v0.3.0/mod.ts";

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
  return filename
    .replaceAll(" - ", "-") // Collapse into one dash
    .replaceAll(" ", "-")
    .replace(".md", ".html");
}

async function processPages() {
  if (!(await fs.exists(buildDir))) {
    await Deno.mkdir(buildDir, { recursive: true });
  }
  const files = ["lifestyle/what is culture for - school of life.md"];
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
    const dest = path.join(buildDir, path.basename(slug(file)));
    await Deno.writeTextFile(dest, html);
  }

  const resources = ["styles.css", "github.svg"];
  for (const file of resources) {
    await Deno.copyFile(path.join("website", file), path.join(buildDir, file));
  }
}

await processPages();
