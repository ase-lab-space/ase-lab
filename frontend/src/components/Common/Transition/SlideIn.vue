<template>
  <div :id="id" class="slidein">
    <slot />
  </div>
</template>

<script lang="ts">
import anime from 'animejs';
import { defineComponent, onMounted } from 'vue';

export default defineComponent({
  props: ['id'],

  setup(props) {
    let eased = false;
    onMounted(() => {
      if (!props.id) {
        console.error("'id' is not specified. Maybe you forgot?");
        return;
      }

      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const target = document.getElementById(props.id)!;

      const options: IntersectionObserverInit = {
        rootMargin: '-100px',
      };
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !eased) {
            anime({
              targets: target,
              duration: 1500,
              translateY: [40, 0],
              opacity: 1,
              easing: 'easeOutExpo',
            });
            eased = true;
          }
        });
      }, options);

      observer.observe(target);
    });
  },
});
</script>

<style lang="scss" scoped>
.slidein {
  opacity: 0;
  transform: translateY(40px);
}
</style>
