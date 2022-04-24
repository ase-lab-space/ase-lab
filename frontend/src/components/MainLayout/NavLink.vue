<template>
  <router-link class="link tilt-on-hover" :to="path">
    {{ text }}
  </router-link>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: ['text', 'path'],
});
</script>

<style lang="scss" scoped>
.link {
  color: black;
  font-size: 1rem;
  font-weight: 400;
  text-decoration: none;
  position: relative;
  padding: 4px 4px;
  letter-spacing: 2px;

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    height: 1px;
    width: 0;
    background-color: black;
    color: black;
    transition: all 0.3s;
  }

  &:hover::after {
    width: 100%;
  }
}
</style>
