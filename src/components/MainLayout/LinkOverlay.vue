<template>
  <div class="overlay" ref="overlay">
    <slide-in
      v-for="(link, i) in links"
      :key="link.path"
      :delay="i * duration"
      force
      class="link-slide-in"
      :class="`link-slide-in-${i}`"
    >
      <router-link @click="$emit('link-clicked')" :to="link.path" class="text">
        <span>
          {{ link.text }}
        </span>
        <div class="underline" :class="`underline${i}`" />

        <div class="description">
          {{ link.description }}
        </div>
      </router-link>
    </slide-in>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import disableScroll from 'disable-scroll';
import { sleep } from 'src/utils/PromiseUtil';
import { links } from 'src/layouts/MainLayout.vue';
import SlideIn from '../Common/Transition/SlideIn.vue';
import anime from 'animejs';

const duration = 200;

export default defineComponent({
  components: {
    SlideIn,
  },
  setup() {
    const overlay = ref<HTMLElement>();

    onMounted(async () => {
      disableScroll.on();
      await sleep(1);
      overlay.value?.classList.add('overlay__visible');

      await sleep(200);

      for (let i = 0; i < links.length; i++) {
        anime({
          targets: `.link-slide-in .underline${i}`,
          delay: i * duration,
          duration: 1000,
          width: document
            .querySelector(`.link-slide-in-${i} a span`)
            ?.getBoundingClientRect().width,
          easing: 'spring(1, 100, 10, 0)',
        });
      }
    });
    return {
      overlay,
      links,
      duration,
    };
  },

  methods: {
    disable() {
      disableScroll.off();
      this.overlay?.classList.remove('overlay__visible');
    },
  },
});
</script>

<style lang="scss" scoped>
.overlay {
  opacity: 0;
  background-color: white;
  z-index: 100;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  transition: all 0.3s;

  padding: 80px 40px;

  &__visible {
    opacity: 1;
  }
}

.link-slide-in {
  margin-bottom: 24px;
}

.text {
  font-size: 2rem;
  font-weight: 700;
  text-decoration: none;
  color: black;
}

.underline {
  height: 1px;
  width: 0;
  background-color: rgb(92, 92, 92);
}

.description {
  font-size: 0.8rem;
  color: rgb(147, 147, 147);
}
</style>
