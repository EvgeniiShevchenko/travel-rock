const path = require('path');

module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: `
            @import "@/assets/scss/app.scss";
        `
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        '~': path.resolve(__dirname, 'node_modules')
      }
    }
  }
};
