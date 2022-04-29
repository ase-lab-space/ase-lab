<template>
  <div class="row section-container">
    <large-globe ref="largeGlobe" class="col col-7" />

    <div class="col col-5 lp-main column">
      <div class="col column reverse">
        <div class="title-underline" />
        <div class="row items-center">
          <img src="/img/logo.png" alt="ASE-Lab. Logo" class="logo" />
          <h1 class="title col">ASE-Lab.</h1>
        </div>
      </div>
      <div class="col-7">
        <h2 class="catch-phrase">
          宇宙好きが集まり、<br />
          思い思いの勉強会を。
        </h2>

        <div class="description">
          ASE-Lab.は宇宙が大好きな人が集まって、勉強会をするコミュニティです。<br />
          自分の好きな本や友達、時には実際に研究やビジネスをしている人たちから学ぶことも。
        </div>

        <border-button
          to="https://docs.google.com/forms/d/1F3E-cEGQr9geMDtjl_xRRLTiMPqgbR5kOUU5-EBzW_I"
          label="参加はコチラから"
          class="entry-button tilt-on-hover"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import LargeGlobe from './LargeGlobe.vue';
import BorderButton from '../Common/Button/BorderButton.vue';
import anime from 'animejs';

export default defineComponent({
  components: {
    LargeGlobe,
    BorderButton,
  },

  setup() {
    const largeGlobe = ref();

    return {
      largeGlobe,
    };
  },

  methods: {
    startAnimation() {
      this.largeGlobe.startAnimation();

      anime({
        targets: '.title-underline',
        delay: 1000,
        duration: 2000,
        width: '+=100%',
        easing: 'spring(1, 100, 10, 0)',
      });
    },
  },
});
</script>

<style lang="scss" scoped>
.lp-main {
  height: 70vh !important;
}

.title {
  text-align: start;
  font-family: $typography-title-font-family;
  font-size: 4rem;
  line-height: 4rem;
  margin-bottom: -6px;
}

.logo {
  width: 3rem;
  height: 3rem;
  margin-right: 16px;
}

.title-underline {
  height: 1px;
  background-color: black;
  width: 0%;
}

.catch-phrase {
  line-height: 2.5rem;
  letter-spacing: 4px;
  font-size: 1.5rem;
  font-weight: 700;
  margin-top: 16px;
}

.description {
  margin-top: 16px;
  font-weight: 700;
  font-size: 0.85rem;
}

.entry-button {
  margin-top: 16px;
}
</style>
