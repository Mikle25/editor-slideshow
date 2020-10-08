<template>
  <section class="time-line">
    <img
      v-for="img in stackImages"
      :key="img.id"
      :src="img.url"
      alt=""
      @click.right="removeImg(img.id)"
      @contextmenu.prevent
    >
  </section>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
  computed: {
    ...mapGetters(['stackImages']),
  },
  methods: {
    removeImg(id) {
      this.removeImag(id);
    },
    ...mapMutations(['removeImag']),
  },
};
</script>

<style lang="scss" scoped>
  .time-line {
    display: flex;
    justify-content: start;
    align-items: center;
    padding: 10px;

    overflow-x: scroll;
    border: 1px solid #808080;
  }

  img {
    cursor: pointer;
    width: 150px;
    height: 125px;

    padding-right: 10px;
  }
</style>
