<i18n lang="yaml">
en:
  clickHere: Click here to Join
  catch-phrase1: Learn universe together,
  catch-phrase2: with space enthusiasts.
  description1: ASE-Lab. is a community of space enthusiasts who learn from each other by holding independent seminars related to their interests and knowledge.
  description2: We sometimes hold study events with people who are active in the front lines of space business and research, and social gatherings among ASE-Lab. members.
ja:
  clickHere: 参加はコチラから
  catch-phrase1: 宇宙好きが集まり、
  catch-phrase2: 思い思いの勉強会を。
  description1: ASE-Lab.は宇宙が大好きな人が集まって、勉強会をするコミュニティです。
  description2: 自分の好きな本や友達、時には実際に研究やビジネスをしている人たちから学ぶことも。
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
          {{ t('catch-phrase1') }}<br />
          {{ t('catch-phrase2') }}
        </h2>

        <div :class="{ ja: $i18n.locale === 'ja', en: $i18n.locale === 'en' }">
          {{ t('description1') }}<br />
          {{ t('description2') }}
        </div>

        <border-button
          to="https://docs.google.com/forms/d/e/1FAIpQLSeLGWm5rdl1MFwwIkWf5s_LBXlqpbVhInfbSb7PCsAAjS9yaA/viewform?usp=dialog"
          :label="t('clickHere')"
          class="entry-button"
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
  font-size: 0.85rem;
}

.entry-button {
  margin-top: 16px;
}

.ja {
  font-weight: 700px;
}

.en {
  font-weight: 500px;
}
</style>
