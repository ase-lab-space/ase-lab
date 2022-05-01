<template>
  <slide-in>
    <h2 class="title">{{ data.title }}</h2>
  </slide-in>
  <div class="paragraph">
    <slide-in v-for="paragraph in data.body" :key="paragraph">
      <p>{{ paragraph }}</p>
    </slide-in>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import SlideIn from '../Common/Transition/SlideIn.vue';
import { AboutSection } from 'src/models/about';

export default defineComponent({
  components: {
    SlideIn,
  },
  props: {
    data: {
      type: Object as PropType<AboutSection>,
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

  p {
    font-size: 1rem;
    letter-spacing: 3px;
    line-height: 2rem;
    margin-bottom: 32px;
    white-space: pre-line;
  }
}
</style>
