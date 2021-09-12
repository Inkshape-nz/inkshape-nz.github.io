module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('CNAME');

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