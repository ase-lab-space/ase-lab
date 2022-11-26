<template>
  <div ref="target" class="slidein">
    <slot />
  </div>
</template>

<script lang="ts">
import anime from 'animejs';
import { defineComponent, onMounted, ref } from 'vue';

const animate = (target: HTMLElement | undefined, delay: number) => {
  anime({
    targets: target,
    duration: 1500,
    translateY: [40, 0],
    opacity: 1,
    easing: 'easeOutExpo',
    delay: delay,
  });
};

export default defineComponent({
  props: {
    delay: {
      type: Number,
      default: 0,
    },
    force: Boolean,
  },
  setup(props) {
    let eased = false;
    const target = ref<HTMLElement>();

    onMounted(() => {
      if (props.force) {
        animate(target.value, props.delay);
      } else {
        const options = {
          rootMargin: '-100px',
        };
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !eased) {
              animate(target.value, props.delay);
              eased = true;
            }
          });
        }, options);

        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        observer.observe(target.value!);
      }
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
