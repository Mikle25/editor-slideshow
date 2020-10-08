<template>
  <section class="slider">
    <div class="slider__image">
      <transition>
        <img
        class="slid"
          :src="slid"
          alt=""
        >
      </transition>
    </div>
    <div class="slider__controle">
      <button class="slider__play btn">Play</button>
      <button class="slider__stop btn">Stop</button>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      slid: null,
    };
  },
  computed: {
    ...mapGetters(['stackImages']),
  },
  watch() {
    this.stackImages.forEach((elem) => {
      setInterval(() => {
        this.slid = elem.url;
      }, 2000);
    });
  },
};
</script>

<style lang="scss" scoped>
  .slider {
    display: grid;
    grid-template-rows: 1fr 50px;

    &__image {
      position: relative;

      background-color: #000;
    }

    &__controle {
      display: grid;
      grid-template-columns: repeat(2, 70px);
      height: 100%;
      grid-column-gap: 10px;
      align-items: center;
      padding-left: 10px;

      border: 1px solid #808080;
      border-top: none;
    }
  }

  img {
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 1;
  }

  .btn {
    cursor: pointer;
    height: 50%;
  }
</style>
