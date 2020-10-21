<template>
  <section
    class="time-line droppable"
    @dragover.prevent
    @dragenter.prevent="onDragHover"
    @dragleave.prevent="onDragHover"
    @drop="onDrop($event)"
    :class="{hovered: isHover}"
  >
    <div class="wrap">
      <img
        class="draggable"
        v-for="img in stackImages"
        :key="img.id"
        :src="img.url"
        alt=""
        @click.right="removeImg(img.id)"
        @contextmenu.prevent
      >
    </div>
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
    align-items: center;
    padding: 0 20px;

    overflow-x: hidden;
    border: 1px solid $colorBorder;
    transition: all 0.3s ease;
  }

  .wrap {
    display: inline-flex;
    align-items: center;
    height: 100%;

    overflow-x: scroll;
  }

  .draggable {
    width: 150px;
    height: 125px;
    border: 2px solid $colorBorder;
    margin-right: 20px;
  }

  .hovered {
    box-shadow: 0 0 5px 5px $colorBorder;
  }
</style>
