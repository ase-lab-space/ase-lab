<i18n lang="yaml">
en:
  clickHere: Click here to Join
  catchPhrase1: Lorem ipsum
  catchPhrase2: hogehoge
  catchCopy1: ASE-Lab. is like somthing.
ja:
  clickHere: 参加はコチラから
  catchPhrase1: 宇宙好きが集まり、
  catchPhrase2: 思い思いの勉強会を。
  catchCopy1: ASE-Lab.は宇宙が大好きな人が集まって、勉強会をするコミュニティです。
</i18n>

<template>
  <div class="row section-container">
    <large-globe ref="largeGlobe" class="col col-md-7 col-xs-12 large-globe" />

    <div class="col col-xs-12 col-md-5 lp-main column">
      <div class="col column reverse">
        <div class="title-underline" />
        <div class="row items-center">
          <img src="/img/logo.webp" alt="ASE-Lab. Logo" class="logo" />
          <h1 class="title col">ASE-Lab.</h1>
        </div>
      </div>
      <div class="col-7">
        <h2 class="catch-phrase">
          {{ t('catchPhrase1') }}<br />
          {{ t('catchPhrase2') }}
        </h2>

        <div class="description">
          {{ t('catchCopy1') }}<br />
          自分の好きな本や友達、時には実際に研究やビジネスをしている人たちから学ぶことも。
        </div>

        <border-button
          to="https://docs.google.com/forms/d/1F3E-cEGQr9geMDtjl_xRRLTiMPqgbR5kOUU5-EBzW_I"
          :label="t('clickHere')"
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
import { useQuasar } from 'quasar';
import { useI18n } from 'vue-i18n';

export default defineComponent({
  components: {
    LargeGlobe,
    BorderButton,
  },

  setup() {
    const largeGlobe = ref();
    const { t } = useI18n();
    const q = useQuasar();

    return {
      largeGlobe,
      q,
      t,
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
// $
@import 'assets/mq.scss';

.lp-main {
  height: 70vh !important;
  @include mq(md) {
    position: absolute;
  }
  @include mq(sm) {
    position: inherit;
    margin-bottom: 100px;
  }
}

.large-globe {
  @include mq(md) {
    opacity: 0.5;
    filter: blur(3px);
  }
  @include mq(sm) {
    display: none;
  }
}

.title {
  text-align: start;
  font-family: $typography-title-font-family;
  font-size: 4rem;
  line-height: 4rem;
  margin-bottom: -6px;

  @include mq(sm) {
    font-size: 3.5rem;
  }
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
