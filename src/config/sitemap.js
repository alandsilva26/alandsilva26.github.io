// import path from "path";
// import sm from "sitemap";
// import fs from "fs";

import routes from "../data/routes";

// // import config from ".";
// // import data from "../data.json";
// // import {
// //   getAllPostsForListing,
// //   getAllCategoriesForListing,
// // } from "../selectors/data";

// const OUTPUT_FILE = path.resolve(
//   __dirname,
//   "..",
//   "..",
//   "public",
//   "sitemap.xml"
// );

// // const postsUrls = getAllPostsForListing({ data }).map((post) => {
// //   const handle = [
// //     post.handle.substring(0, 4),
// //     post.handle.substring(5, 7),
// //     post.handle.substring(8, 10),
// //     post.handle.substring(11),
// //   ].join("/");
// //   return {
// //     url: `${config.PUBLIC_URL}/${handle}`,
// //     changefreq: "weekly",
// //     priority: 0.8,
// //   };
// // });

// // const categoriesUrls = getAllCategoriesForListing({ data }).map((category) => ({
// //   url: `${config.PUBLIC_URL}/category/${category.handle}`,
// //   changefreq: "weekly",
// //   priority: 0.8,
// // }));

// const sitemap = sm.createSitemap({
//   hostname: "https://alandsilva.netlify.app",
//   cacheTime: 600000, //600 sec (10 min) cache purge period
//   urls: [
//     { url: "/", changefreq: "weekly", priority: 1 },
//     { url: "/projects", changefreq: "weekly", priority: 0.5 },
//     { url: "/about", changefreq: "weekly", priority: 0.5 },
//     // ...postsUrls,
//     // ...categoriesUrls,
//   ],
// });

// fs.writeFileSync(OUTPUT_FILE, sitemap.toString());

// console.log(`Sitemap written at ${OUTPUT_FILE}`);
const { createWriteStream } = require("fs");
const { SitemapStream } = require("sitemap");

// Creates a sitemap object given the input configuration with URLs
const sitemap = new SitemapStream({
  hostname: "http://alandsilva.netlify.app",
});

const writeStream = createWriteStream("./public/sitemap.xml");
sitemap.pipe(writeStream);

["/", "projects", "about"].map((item) => {
  sitemap.write(item);
});

sitemap.end();
