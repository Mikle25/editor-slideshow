export default {
  state: {
    libraryImages: [],
    stackImages: [],
    slideIndex: 0,
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
      const item = state.stackImages.find((elem) => elem.id === +id);
      state.stackImages.forEach((elem) => {
        if (elem.id === item.id && state.stackImages.length - 1 === state.slideIndex) {
          state.slideIndex = 0;
        }
      });

      state.libraryImages.push(item);
      state.stackImages.filter((elem, i) => (elem.id === +id
        ? state.stackImages.splice(i, 1)
        : null));
    },
    updateSlideIndex(state) {
      if (state.slideIndex < state.stackImages.length - 1) {
        state.slideIndex += 1;
      } else {
        state.slideIndex = 0;
      }
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
    slideIndex(state) {
      return state.slideIndex;
    },
  },
};
