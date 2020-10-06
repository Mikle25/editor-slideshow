<template>
  <section class="slider">
    <div class="slider__image"></div>
    <div class="slider__controle">
      <button class="slider__play btn">Play</button>
      <button class="slider__stop btn">Stop</button>
    </div>
  </section>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
  .slider {
    display: grid;
    grid-template-rows: 1fr 50px;

    &__image {
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

  .btn {
    cursor: pointer;
    height: 50%;
  }
</style>
