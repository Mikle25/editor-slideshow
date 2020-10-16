<template>
  <section class="library">
    <h3 class="library__title">Images</h3>
    <div
      class="library__images droppable"
    >
      <img
        v-for="img in images"
        :key="img.id"
        class="draggable"
        :src="img.url"
        alt=""
        @dragstart="onDragStart($event, img.id)"
        draggable="true"
      >
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapGetters(['images']),
  },
  methods: {
    onDragStart(e, item) {
      e.dataTransfer.dropEffect = 'move';
      e.dataTransfer.effectAllowed = 'move';
      e.dataTransfer.setData('itemId', item);
    },
    ...mapActions(['fetchImages']),
  },
  async mounted() {
    this.fetchImages(30);
    console.log(localStorage.length);
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
      padding: 20px 10px 10px;
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
