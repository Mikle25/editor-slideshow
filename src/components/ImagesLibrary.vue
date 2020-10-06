<template>
  <section class="library">
    <h3 class="library__title">Images</h3>
    <div class="library__images">
      <div>
      </div>
    </div>
  </section>
</template>

<script>
export default {

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
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      grid-auto-rows: 50px;
      grid-gap: 5px;
      padding: 20px 10px;
      overflow-y: scroll;
      border: 1px solid #808080;
    }
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
</style>
