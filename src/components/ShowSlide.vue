<template>
  <section class="carusel-slide">
    <div class="wraper" >
      <div
        class="carusel-slide__image"
        :style="positionSlide"
      >
        <Slide
          v-for="item in stackImages"
          :key="item.id"
          :itemData="item"
        />
      </div>
    </div>
    <div class="carusel-slide__controle">
      <button
        :class="[{'btn--active': stackImages.length >= 0},'carusel-slide__play', 'btn']"
        @click="playSlide"
        :disabled="stackImages.length <= 0"
      >
        Play
      </button>
      <button
        class="carusel-slide__stop btn btn--active"
        @click="stopSlide"
      >
        Stop
      </button>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import Slide from '@/components/Slide.vue';

export default {
  data() {
    return {
      isPlay: false,
      timing: null,
      lengthStack: null,
    };
  },
  components: {
    Slide,
  },
  methods: {
    ...mapMutations(['updateSlideIndex']),
    playSlide() {
      if (!this.isPlay && this.stackImages.length > 0) {
        this.isPlay = true;
        this.timing = setInterval(() => {
          this.updateSlideIndex();
        }, 3000);
      }
    },
    stopSlide() {
      this.isPlay = false;
      clearInterval(this.timing);
    },
  },
  computed: {
    ...mapGetters(['stackImages', 'slideIndex']),
    positionSlide() {
      return {
        transition: 'all 1s ease',
        transform: `translateX(-${100 * this.slideIndex}%)`,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
  .carusel-slide {
    display: grid;
    grid-template-rows: 1fr 50px;

    &__image {
      display: flex;
      height: 100%;

      background-color: $colorMain;
    }

    &__controle {
      display: grid;
      grid-template-columns: repeat(2, 70px);
      height: 100%;
      grid-column-gap: 10px;
      align-items: center;
      padding-left: 10px;

      border: 1px solid $colorBorder;
    }
  }

  .btn {
    position: relative;
    cursor: pointer;
    height: 70%;
    border-radius: 5px;

    background-color: $colorBorder;
    transition: all 0.3s ease;

    &--active:hover{
      transform: scale(1.1);
    }
  }

  .wraper {
    overflow: hidden;
  }
</style>
