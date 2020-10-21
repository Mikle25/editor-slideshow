<template>
  <div class="editor-slider">
    <ShowSlide  class="slider"/>
    <ImagesLibrary class="library"/>
    <TimeLine class="time-line"/>
  </div>
</template>

<script>
import ShowSlide from '@/components/ShowSlide.vue';
import ImagesLibrary from '@/components/ImagesLibrary.vue';
import TimeLine from '@/components/TimeLine.vue';

export default {
  components: {
    ShowSlide, ImagesLibrary, TimeLine,
  },
};
</script>

<style lang="scss" scoped>
  .editor-slider {
    display: grid;
    grid-template-areas: 'slider library'
                          'time-line time-line';
    grid-template-columns: 600px 1fr;
    grid-template-rows: 400px 175px;
    grid-gap: 10px;
    width: 100%;
    height: 100%;
  }

  .slider {
    grid-area: slider;
  }

  .library {
    grid-area: library;
  }

  .time-line {
    grid-area: time-line;
  }
</style>
