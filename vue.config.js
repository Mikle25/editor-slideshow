module.exports = {
  lintOnSave: false,
  publicPath: '/editor-slideshow/',
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "@/assets/styles/styles.scss";',
      },
    },
  },
};
