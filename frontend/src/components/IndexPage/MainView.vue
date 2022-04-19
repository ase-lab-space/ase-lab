<template>
  <div class="row">
    <large-globe class="col col-7" />

    <div class="col col-5 lp-main">
      <div class="column">
        <p class="col col-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
          quaerat veritatis praesentium libero blanditiis neque iure veniam sint
          voluptatum sed adipisci, nesciunt, accusantium illo tenetur. Id, quo
          dolor. Voluptatem, impedit.
        </p>
        <p class="col col-9">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga tempore
          quisquam doloribus ut omnis temporibus dolor corrupti tenetur ad.
          Illum delectus suscipit nisi distinctio, recusandae impedit numquam
          voluptatem cupiditate incidunt.
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import LargeGlobe from './LargeGlobe.vue';

export default defineComponent({
  components: {
    LargeGlobe,
  },
});
</script>

<style lang="scss" scoped>
.lp-main {
  height: 70vh;
}
</style>
