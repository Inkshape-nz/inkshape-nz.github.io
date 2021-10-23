module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('CNAME');
  eleventyConfig.addWatchTarget("./src/sass/");

  return {
    dir: {
      input: "src",
      output: "dist"
    },
    templateFormats: [
      'html',
      'md',
      'njk',
    ],
  }
};