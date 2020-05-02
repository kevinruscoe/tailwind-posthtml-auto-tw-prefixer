module.exports = function () {
    return function tailwindPosthtmlAutoTwPrefixer (tree) {
      var tailwindConfig = require ('./tailwind.config.js');
      var prefix = tailwindConfig.prefix;

      tree.walk(function(node) {
        if(node.tag) {
            if (node.attrs.class) {
                node.attrs.class = node.attrs.class.split(" ").map(c => `${prefix}${c}`).join(" ");
            }
        }

        return node;
      });

      return tree;
    }
  }