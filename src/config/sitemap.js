const { createWriteStream } = require("fs");
const { SitemapStream } = require("sitemap");

// Creates a sitemap object given the input configuration with URLs
const sitemap = new SitemapStream({
  hostname: "http://alandsilva.netlify.app",
});

const writeStream = createWriteStream("./public/sitemap_index.xml");
sitemap.pipe(writeStream);

["/", "projects", "about"].map((item) => {
  sitemap.write(item);
});

sitemap.end();
