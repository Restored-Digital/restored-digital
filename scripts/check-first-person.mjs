// Lists sentences that use first-person singular (I, I'm, I'll, me, my) so they can be reviewed
// against the voice rule: commitments use "we"; "I" belongs only in the About story.
// Usage: node scripts/check-first-person.mjs
// It prints hits for a human to judge. It does not decide, and it always exits 0.

import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const pages = ["index.html", "pricing.html", "privacy.html", "404.html"];
const first = /\b(I|I'm|I'll|I've|I'd|me|my|mine|myself)\b/;

const decode = (t) => t.replace(/&amp;/g, "&").replace(/&rsquo;|&#39;/g, "'").replace(/&nbsp;/g, " ");
let total = 0;

for (const page of pages) {
  let html = readFileSync(join(root, page), "utf8");
  const found = [];

  // Meta descriptions and JSON-LD descriptions
  for (const m of html.matchAll(/<meta[^>]+content="([^"]*)"/g)) found.push(["meta", m[1]]);
  for (const m of html.matchAll(/"description":\s*"([^"]*)"/g)) found.push(["json-ld", m[1]]);

  // Visible text, About section on the home page set aside
  const about = html.match(/<section id="about">[\s\S]*?<\/section>/);
  const aboutText = about ? about[0] : "";
  html = html.replace(aboutText, "").replace(/<script[\s\S]*?<\/script>/g, "").replace(/<!--[\s\S]*?-->/g, "");
  const text = decode(html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " "));
  for (const s of text.split(/(?<=[.!?:])\s+/)) found.push(["page", s.trim()]);

  for (const [where, s] of found) {
    if (first.test(s)) {
      total++;
      console.log(`${page} [${where}] ${s}`);
    }
  }
}
console.log(`\n${total} first-person sentence(s) outside the About section. Review each: commitments must say "we".`);
