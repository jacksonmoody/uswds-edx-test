module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("public/assets");
    return {
      dir: {
        input: "public",
      }
    }
  };