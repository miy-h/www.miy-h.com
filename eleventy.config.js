import { EleventyI18nPlugin } from "@11ty/eleventy";

function fullUrl(url, base = "https://www.miy-h.com/") {
  return new URL(url, base).href;
}

export default async function(eleventyConfig) {
  eleventyConfig.addGlobalData("layout", "layout.njk");
  eleventyConfig.addFilter("fullUrl", fullUrl);
	eleventyConfig.addPlugin(EleventyI18nPlugin, {
    defaultLanguage: "en"
  });
};

export const config = {
  dir: {
    input: "src"
  }
};
