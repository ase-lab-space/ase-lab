<template>
  <div>
    <large-globe />
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
