<template>
  <router-link :to="to" class="link">
    <div class="link-text">
      {{ label }}
    </div>
  </router-link>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    label: {
      type: String,
      required: true,
    },
    to: {
      type: String,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
.link {
  display: inline-block;
  position: relative;
  text-decoration: none;
  border: 1px solid $primary;
  border-radius: 14px;
  padding: 10px 32px;
  overflow: hidden;
  color: $primary;

  transition: ease-out 0.3s;

  &:hover {
    background-color: #e6dcff;
  }
}

.link-text {
  font-size: 0.85rem;
  font-weight: 700;
}
</style>
