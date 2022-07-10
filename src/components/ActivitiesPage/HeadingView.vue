<template>
  <div class="column items-start container">
    <div class="row" :class="[$q.screen.gt.sm ? '': 'justify-center']">
      <h2 class="title">- {{ title }} -</h2>
      <div class="subtitle column justify-center gt-sm">
        {{ subtitle }}
      </div>

      <p class="description">
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
}
.title {
  font-size: 2rem;
  font-weight: 700;
  color: rgb(82, 82, 82);
  letter-spacing: 3px;
}

.subtitle {
  font-size: 1rem;
  font-weight: 700;
  color: rgb(82, 82, 82);
  margin-top: 12px;
  margin-left: 32px;
}

.description {
  margin-top: 24px;
  font-size: 0.9rem;
}
</style>
