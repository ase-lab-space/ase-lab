<template>
  <div class="text-center title-container">
    <slide-in>
      <h1 class="title">- {{ title }} -</h1>
    </slide-in>
    <slide-in :delay="300">
      <p v-if="title" class="description">{{ description }}</p>
    </slide-in>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SlideIn from './Transition/SlideIn.vue';

export default defineComponent({
  components: {
    SlideIn,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
  },
});
</script>

<style lang="scss" scoped>
.title-container {
  color: rgb(63, 63, 63);
}
.title {
  font-size: 3rem;
  font-weight: 700;
  margin-top: 40px;
  margin-bottom: 10px;
  letter-spacing: 4px;
}

.description {
  margin-bottom: 60px;
}
</style>
