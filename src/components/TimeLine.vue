<template>
  <section
    class="time-line droppable"
    @dragover.prevent
    @dragenter.prevent="onDragHover"
    @dragleave.prevent="onDragHover"
    @drop="onDrop($event)"
    :class="{hovered: isHover}"
  >
  <img
      class="draggable"
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
  data() {
    return {
      isHover: false,
    };
  },
  computed: {
    ...mapGetters(['stackImages']),
  },
  methods: {
    removeImg(id) {
      this.removeImag(id);
    },
    onDrop(e) {
      const id = e.dataTransfer.getData('itemId');
      this.addImag(id);
      this.isHover = false;
    },
    onDragHover() {
      if (!this.isHover) {
        this.isHover = true;
      } else {
        this.isHover = false;
      }
    },
    ...mapMutations(['addImag']),
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
    transition: all 0.3s ease;
  }

  .draggable {
    width: 150px;
    height: 125px;
    border: 2px solid #808080;
    margin-right: 5px;

  }

  .hovered {
    box-shadow: 0 0 5px 5px #808080;
  }
</style>
