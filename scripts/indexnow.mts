#!/usr/bin/env bun
/**
 * Ping IndexNow (Bing, Yandex, Seznam, Naver, and others) with URLs from the live sitemap.
 * Usage: bun scripts/indexnow.mts [url ...]   (no args = every URL in sitemap.xml)
 */
import { readFile } from "node:fs/promises";

const HOST = "www.michaelchurley.com";
const key = (await readFile(new URL("../public/indexnow-key.txt", import.meta.url), "utf8")).trim();

async function sitemapUrls() {
  const xml = await (await fetch(`https://${HOST}/sitemap.xml`)).text();
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1] as string);
}

const urlList = process.argv.length > 2 ? process.argv.slice(2) : await sitemapUrls();
const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({
    host: HOST,
    key,
    keyLocation: `https://${HOST}/indexnow-key.txt`,
    urlList,
  }),
});
console.log(`IndexNow: ${res.status} ${res.statusText} for ${urlList.length} URLs`);
if (!res.ok && res.status !== 202) process.exit(1);
