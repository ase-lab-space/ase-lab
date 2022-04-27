<template>
  <router-link
    class="nav-link tilt-on-hover"
    :to="path"
    @mouseenter="className = 'nav-border__active'"
    @mouseleave="
      className = router.currentRoute.value.path.startsWith(path)
        ? 'nav-border__active'
        : ''
    "
  >
    {{ text }}
    <div class="nav-border" :class="className" />
  </router-link>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  props: {
    text: {
      type: String,
      required: true,
    },
    path: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const className = ref('');

    const router = useRouter();
    router.afterEach(() => {
      if (router.currentRoute.value.path.startsWith(props.path)) {
        console.log(`${router.currentRoute.value.path}!`);
        className.value = 'nav-border__active';
      } else {
        className.value = '';
      }
    });

    return {
      router,
      className,
    };
  },
});
</script>

<style lang="scss" scoped>
.nav-link {
  color: black;
  font-size: 1rem;
  font-weight: 400;
  text-decoration: none;
  position: relative;
  padding: 4px 4px;
  letter-spacing: 2px;
}

.nav-border {
  height: 1px;
  background-color: black;
  transition: all 0.3s;
  width: 0;

  &__active {
    width: 100%;
  }
}
</style>
