<template>
  <section class="library">
    <h3 class="library__title">Images</h3>
    <div class="library__images">
      <img
        v-for="img in images"
        :key="img.id"
        :src="img.url"
        alt=""
        @click="selectImg(img.id)"
      >
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex';

export default {
  computed: {
    ...mapGetters(['images']),
  },
  methods: {
    selectImg(id) {
      this.addImag(id);
    },
    ...mapMutations(['addImag']),
    ...mapActions(['fetchImages']),
  },
  async mounted() {
    this.fetchImages(30);
  },
};
</script>

<style lang="scss" scoped>
  .library {
    display: grid;
    grid-template-rows: 40px 1fr;

    &__title {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 80px;
      margin: 0;

      border: 1px solid #808080;
      background-color: rgba(200, 200, 200, 0.5);
      border-bottom: none;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
    }

    &__images {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-evenly;
      padding: 20px 10px;
      border: 1px solid #808080;
      overflow-y: scroll;
    }
  }

  img {
    cursor: pointer;
    width: 125px;
    padding-bottom: 10px;

    object-fit: contain;
    object-position: center;
  }
</style>
