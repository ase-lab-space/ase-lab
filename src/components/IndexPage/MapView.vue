<i18n lang="yaml">
en:
  section-catch-phrase1: Wherever you are in the world,
  section-catch-phrase2: you can find friends
  description1: Currently, there are study groups with educational materials such as space science and space engineering, study groups on mathematics and physics that serve as the basis for these materials, and on liberal arts that are more easily attended.
  description2: ASE-Lab. is open to everyone; science and engineering students, as well as liberal arts students. If you have a desire to deepen your study of space, your title is irrelevant.
  label1: Comments from participants
  label2: Click here to Join
ja:
  section-catch-phrase1: 全国どこにいたって、
  section-catch-phrase2: 仲間は見つかる。
  description1: 現在は、宇宙理学や宇宙工学についての教材に取り組む勉強会、その基礎となる数学や物理学に関する勉強会、より気楽に参加できる教養のような勉強会などが企画されています。
  description2: ASE-Lab.には、理学部の学生も工学部の学生も、文系の学生もいます。宇宙への学びを深めたいという思いがあれば、肩書は関係ありません。
  label1: 参加者の声 →
  label2: 参加はコチラから
</i18n>

<template>
  <section class="section-container section-full-size">
    <div class="content-container row justify-between">
      <div class="col-xs-12 col-md-5 column items-center">
        <slide-in class="img-container row items-center justify-center">
          <router-link to="/about">
            <img src="/img/japanmap.webp" alt="" class="image" />
          </router-link>
        </slide-in>
      </div>

      <div class="col-xs-12 col-md-6 column justify-start">
        <div class="col-9">
          <slide-in>
            <h3 class="section-catch-phrase">
              {{ t('section-catch-phrase1') }}<br />
              {{ t('section-catch-phrase2') }}
            </h3>
          </slide-in>

          <slide-in>
            <p>{{ t('description1') }}</p>

            <p>{{ t('description2') }}</p>
          </slide-in>

          <slide-in>
            <double-line-link
              class="link"
              to="/articles"
              :label="t('label1')"
            />
          </slide-in>
        </div>
      </div>
    </div>

    <slide-in class="row justify-center">
      <border-button
        to="https://docs.google.com/forms/d/e/1FAIpQLSej-A3hZBeFTush1ZCb2uo4PyXELWvXFiqMKnOchCXNKkTobQ/viewform"
        :label="t('label2')"
        class="entry-button"
      />
    </slide-in>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import DoubleLineLink from '../Common/Button/DoubleLineLink.vue';
import SlideIn from '../Common/Transition/SlideIn.vue';
import BorderButton from '../Common/Button/BorderButton.vue';
import { useI18n } from 'vue-i18n';

export default defineComponent({
  components: {
    DoubleLineLink,
    SlideIn,
    BorderButton,
  },
  setup() {
    const { t } = useI18n();
    return {
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
    margin: 100px 0 0 0;
  }
}

.link {
  margin-top: 48px;
}

.img-container {
  width: 400px;
  min-height: 400px;
  position: relative;

  .image {
    width: 80%;
    cursor: pointer;
    filter: saturate(1.5) sepia(0.2);
  }
}
</style>
