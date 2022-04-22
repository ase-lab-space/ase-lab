<template>
  <div ref="target" class="slidein">
    <slot />
  </div>
</template>

<script lang="ts">
import anime from 'animejs';
import { defineComponent, onMounted, ref } from 'vue';

export default defineComponent({
  setup() {
    let eased = false;
    const target = ref<HTMLElement>();

    onMounted(() => {
      const options: IntersectionObserverInit = {
        rootMargin: '-100px',
      };
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !eased) {
            anime({
              targets: target.value,
              duration: 1500,
              translateY: [40, 0],
              opacity: 1,
              easing: 'easeOutExpo',
            });
            eased = true;
          }
        });
      }, options);

      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      observer.observe(target.value!);
    });

    return {
      target,
    };
  },
});
</script>

<style lang="scss" scoped>
.slidein {
  opacity: 0;
  transform: translateY(40px);
}
</style>
