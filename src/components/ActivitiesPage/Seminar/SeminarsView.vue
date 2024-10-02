<i18n lang="yaml">
en:
  heading:
    subtitle: Self-Initiated Study Groups
    description: Seminars are the main activity of ASE-Lab. These are organized by members who want to experience the deeper content of science and engineering, which we can’t learn in school education.
  seminar:
    show-all-seminars: Show all seminars
    restore-the-display: Restore the display
  guidebook:
    title: ASE-Lab. Seminar Guidebook
    description-1: In ASE-Lab., you can not only participate in existing seminars, but also organize new seminars by yourself. In other words, seminar management at ASE-Lab. is left to the initiative of all members.
    description-2: However, we understand that at first it might be difficult to know how to hold such seminars. That is why we have created this "ASE-Lab. Seminar Guidebook". This book is intended to serve as a guideline for members who want to hold and participate in seminars when setting up a seminar. Please take a moment to read it.
    view-guidebook: View Guide Book (only available in Japanese)
    url: /pdf/ASE-Lab. ガイドブック.pdf
    thumbnail-url: /img/seminar-guide-book-thumbnail-en.webp

ja:
  heading:
    subtitle: 自主ゼミ
    description: ASE-Lab. のメイン活動。 学校で学ぶ教養だけでは物足りない。そんな理学や工学の一歩先を味わいたいメンバー同士で企画される、宇宙の勉強会です。
  seminar:
    show-all-seminars: 全てのゼミをみる
    restore-the-display: 表示を元に戻す
  guidebook:
    title: ASE-Lab. ゼミガイドブック
    description-1: ASE-Lab.では既存のゼミに参加するだけでなく、自分で新しくゼミを開催することもできます。 また、ASE-Lab.のゼミは、ゼミに所属するすべてのメンバーの主体性にゆだねられています。
    description-2: しかし、最初は開催するにもやり方がわからないこともあると思います。そのような方々のために、ASE-Lab.はこの「ASE-Lab. ゼミガイドブック」を作成し公開しています。 ゼミの開催と参加を担うメンバーの方々がゼミを立てる際の指針となることを目的としています。是非ご一読ください。
    view-guidebook: ガイドブックを見る
    url: /pdf/ASE-Lab. ガイドブック.pdf
    thumbnail-url: /img/seminar-guide-book-thumbnail-ja.webp
</i18n>

<template>
  <section>
    <slide-in :delay="500">
      <heading-view
        title="Seminars"
        :subtitle="t('heading.subtitle')"
        :description="t('heading.description')"
        class="heading"
      />
    </slide-in>
    <div class="row q-col-gutter-lg justify-center">
      <slide-in
        v-for="(seminar, index) in filteredSeminars"
        :key="index"
        class="col-3 seminar-card-container"
      >
        <seminar-card :seminar="seminar" class="seminar-card" />
      </slide-in>
    </div>

    <div class="row justify-end">
      <q-btn
        :label="
          showAllSeminars
            ? t('seminar.restore-the-display')
            : t('seminar.show-all-seminars')
        "
        flat
        color="primary"
        @click="showAllSeminars = !showAllSeminars"
      />
    </div>

    <slide-in class="row justify-center items-center guide-book-section">
      <div class="col-xs-12 col-md-6">
        <div class="guide-book-section-title">{{ t('guidebook.title') }}</div>
        <p>{{ t('guidebook.description-1') }}</p>
        <p>{{ t('guidebook.description-2') }}</p>
        <single-line-link
          target="_blank"
          :use-anchor-tag="true"
          :label="t('guidebook.view-guidebook')"
          :to="t('guidebook.url')"
        />
      </div>
      <a :href="t('guidebook.url')" target="_blank">
        <img
          :src="t('guidebook.thumbnail-url')"
          class="book-thumbnail shadow-2"
          alt="ASE-Lab. Seminar Guidebook"
        />
      </a>
    </slide-in>
  </section>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, computed } from 'vue';
import HeadingView from '../HeadingView.vue';
import SeminarCard from './SeminarCard.vue';
import SlideIn from '../../Common/Transition/SlideIn.vue';
import SingleLineLink from '../../Common/Button/SingleLineLink.vue';
import { MicroCMSRepository, type SeminarsProps } from 'src/repositories/microcms_repository';
import { useI18n } from 'vue-i18n';

export default defineComponent({
  components: {
    HeadingView,
    SeminarCard,
    SlideIn,
    SingleLineLink,
  },

  setup() {
    const showAllSeminars = ref(false);
    const { t } = useI18n();
    const seminars = ref<SeminarsProps[]>([]);
    const microCMSRepository = new MicroCMSRepository();

    onMounted(async () => {
      try {
        const data = await microCMSRepository.getSeminars({
          queries: {
            orders: '-date',
          },
        });
        seminars.value = data;
      } catch (error) {
        console.error('Error fetching seminars:', error);
      }
    });

    const filteredSeminars = computed(() => {
      if (showAllSeminars.value) {
        return seminars.value;
      }
      return seminars.value.slice(0, 4);
    });

    return {
      showAllSeminars,
      t,
      filteredSeminars,
    };
  },
  });
  </script>
<style lang="scss" scoped>
// $
@import 'assets/mq.scss';

.heading {
  margin-bottom: 64px;
}
.seminar-card {
  margin-bottom: 32px;
}
.seminar-card-container {
  min-width: 220px;
}
.book-thumbnail {
  height: 250px;
  margin-left: 30px;

  @include mq(md) {
    margin-left: 0;
    margin-top: 30px;
  }
}
.guide-book-section {
  margin-top: 64px;
  &-title {
    font-size: 1.2rem;
    font-weight: 700;
    margin-bottom: 24px;
  }
}
</style>