<i18n lang="yaml">
en:
  subtitle: About us
  section-catch-phrase1: Space×Science, Engineering
  section-catch-phrase2: A Place for Academic Learning
  description1: Currently, there are study groups with educational materials such as space science and space engineering, study groups on mathematics and physics that serve as the basis for these materials, and on liberal arts that are more easily attended.
  description2: ASE-Lab. is open to everyone; science and engineering students, as well as liberal arts students. If you have a desire to deepen your study of space, your title is irrelevant.
  label: Find out more about us →

ja:
  subtitle: ー 私たちについて
  section-catch-phrase1: 宇宙×理学・工学
  section-catch-phrase2: アカデミックな学びの場
  description1: 現在は、宇宙理学や宇宙工学についての教材に取り組む勉強会、その基礎となる数学や物理学に関する勉強会、より気楽に参加できる教養のような勉強会などが企画されています。
  description2: ASE-Lab.には、理学部の学生も工学部の学生も、文系の学生もいます。宇宙への学びを深めたいという思いがあれば、肩書は関係ありません。
  label: 私たちについて詳しく知る →
</i18n>

<template>
  <section class="section-container section-full-size">
    <div class="content-container row justify-between reverse">
      <div class="col-xs-12 col-md-5 column">
        <h2 class="section-title row items-end">
          <div class="title">About</div>
          <div class="subtitle">{{ t('subtitle') }}</div>
        </h2>

        <div class="img-container row items-center justify-center">
          <router-link to="/about" class="row justify-center">
            <img
              src="/img/teaching_max.webp"
              alt="Teaching MAX"
              class="image"
            />
          </router-link>
        </div>
      </div>
      <div class="col-xs-12 col-md-6 column justify-start">
        <div v-if="q.screen.gt.sm" class="col-3" />
        <div class="col-9">
          <slide-in>
            <h3 class="section-catch-phrase">
              {{ t('section-catch-phrase1') }}<br />
              {{ t('section-catch-phrase2') }}
            </h3>
          </slide-in>

          <slide-in>
            <p>
              {{ t('description1') }}
            </p>

            <p>{{ t('description2') }}</p>
          </slide-in>

          <slide-in>
            <double-line-link class="link" to="/about" :label="t('label')" />
          </slide-in>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { useQuasar } from 'quasar';
import { defineComponent } from 'vue';
import DoubleLineLink from '../Common/Button/DoubleLineLink.vue';
import SlideIn from '../Common/Transition/SlideIn.vue';
import { useI18n } from 'vue-i18n';

export default defineComponent({
  components: {
    DoubleLineLink,
    SlideIn,
  },
  setup() {
    const q = useQuasar();
    const { t } = useI18n();
    return {
      q,
      t,
    };
  },
});
</script>

<style lang="scss" scoped>
// $
@import 'assets/mq.scss';

.section-catch-phrase {
  margin-bottom: 48px;
}

.content-container {
  margin: 0 100px;

  @include mq(md) {
    margin: 0;
  }
}

.link {
  margin-top: 48px;
}

.img-container {
  width: 400px;
  height: 380px;
  position: relative;

  .image {
    border-radius: 50%;
    width: 80%;
    transition: all 0.3s;
    cursor: pointer;
    filter: saturate(1.3) drop-shadow(12px 12px 0px #bababa) brightness(1.1);

    @include mq(sm) {
      margin: auto;
    }
  }

  @include mq(md) {
    margin: auto;
  }

  @include mq(sm) {
    width: 100%;
  }
}
</style>
