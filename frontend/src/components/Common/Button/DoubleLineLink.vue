<template>
  <div>
    <a class="link label tilt-on-hover" :href="href">
      {{ label }}
    </a>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: ['label', 'href'],
});
</script>

<style lang="scss" scoped>
.link {
  color: $primary;
  text-decoration: none;
  padding: 4px 0;
}

.label {
  position: relative;
  display: inline-block;
  &::after {
    content: '';
    background-color: $primary;
    position: absolute;
    right: 0;
    top: 0;
    height: 1px;
    width: 0;
    transition: all 0.3s;
  }

  &:hover::after {
    width: 100%;
  }

  &::before {
    content: '';
    background-color: $primary;
    position: absolute;
    left: 0;
    bottom: 0;
    height: 1px;
    width: 0;
    transition: all 0.3s;
  }

  &:hover::before {
    width: 100%;
  }
}
</style>
