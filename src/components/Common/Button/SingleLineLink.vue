<template>
  <router-link
    :to="to"
    class="link label tilt-on-hover"
    :class="force || q.screen.lt.md ? ['label__force'] : []"
  >
    {{ label }}
  </router-link>
</template>

<script lang="ts">
import { useQuasar } from 'quasar';
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
    force: Boolean,
  },
  setup() {
    const q = useQuasar();
    return {
      q,
    };
  },
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

  &__force {
    border-bottom: 1px $primary solid;
  }
}
</style>
