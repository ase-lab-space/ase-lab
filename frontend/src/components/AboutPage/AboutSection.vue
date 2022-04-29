<template>
  <slide-in>
    <h2 class="title">{{ title }}</h2>
  </slide-in>
  <div class="paragraph">
    <slide-in v-for="paragraph in paragraphs" :key="paragraph">
      <p>{{ paragraph }}</p>
    </slide-in>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import SlideIn from '../Common/Transition/SlideIn.vue';

export default defineComponent({
  components: {
    SlideIn,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    paragraphs: {
      type: Array as PropType<string[]>,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
.title {
  font-size: 1.5rem;
  font-weight: 700;
  color: rgb(82, 82, 82);
  margin-bottom: 48px;
  margin-top: 64px;
}
.paragraph {
  max-width: 750px;
}
p {
  font-size: 1rem;
  letter-spacing: 3px;
  line-height: 2rem;
  margin-bottom: 32px;
}
</style>
