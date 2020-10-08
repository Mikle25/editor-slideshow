export default {
  state: {
    libraryImages: [],
    stackImages: [],
  },
  mutations: {
    updateImages(state, imgs) {
      state.libraryImages = imgs.filter((_, i) => i < 30);
    },
    addImag(state, id) {
      const item = state.libraryImages.filter((elem) => elem.id === +id);

      if (state.stackImages.length < 10) {
        state.libraryImages.filter((elem, i) => (elem.id === +id
          ? state.libraryImages.splice(i, 1)
          : null));
        state.stackImages.push(...item);
      }
    },
    removeImag(state, id) {
      const item = state.stackImages.filter((elem) => elem.id === +id);

      state.libraryImages.push(...item);
      state.stackImages.filter((elem, i) => (elem.id === +id
        ? state.stackImages.splice(i, 1)
        : null));
    },
  },
  actions: {
    async fetchImages(ctx, limit = 15) {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/photos?_limit=${limit}`,
      );
      const imgs = await res.json();
      ctx.commit('updateImages', imgs);
    },
  },
  getters: {
    images(state) {
      return state.libraryImages;
    },
    stackImages(state) {
      return state.stackImages;
    },
  },
};
