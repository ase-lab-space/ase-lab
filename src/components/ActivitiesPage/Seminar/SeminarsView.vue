<template>
  <section>
    <slide-in :delay="500">
      <heading-view
        title="Seminars"
        subtitle="自主ゼミ"
        description="ASE-Lab. のメイン活動。 学校で学ぶ教養だけでは物足りない。そんな理学や工学の一歩先を味わいたいメンバー同士で企画される、宇宙の勉強会です。"
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
        @click="showAllSeminars = !showAllSeminars"
        :label="showAllSeminars ? '表示を元に戻す' : '全てのゼミをみる'"
        flat
        color="primary"
      />
    </div>

    <slide-in class="row justify-center items-center guide-book-section">
      <div class="col-xs-12 col-md-6">
        <div class="guide-book-section-title">ASE-Lab. ゼミガイドブック</div>
        <p>
          ASE-Lab.では既存のゼミに参加するだけでなく、自分で新しくゼミを開催することもできます。
          また、ASE-Lab.のゼミは、ゼミに所属するすべてのメンバーの主体性にゆだねられています。
        </p>
        <p>
          しかし、最初は開催するにもやり方がわからないこともあると思います。そのような方々のために、ASE-Lab.はこの「ASE-Lab.
          ゼミガイドブック」を作成し公開しています。
          ゼミの開催と参加を担うメンバーの方々がゼミを立てる際の指針となることを目的としています。是非ご一読ください。
        </p>
        <single-line-link
          target="_blank"
          :useAnchorTag="true"
          label="ガイドブックを見る"
          to="/pdf/ASE-Lab. ガイドブック.pdf"
        />
      </div>
      <a href="/pdf/ASE-Lab. ガイドブック.pdf" target="_blank">
        <img
          src="/img/seminar-guide-book-thumbnail.webp"
          class="book-thumbnail shadow-2"
          alt=""
        />
      </a>
    </slide-in>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import HeadingView from '../HeadingView.vue';
import SeminarCard from './SeminarCard.vue';
import SlideIn from '../../Common/Transition/SlideIn.vue';
import { seminars, ISeminar } from 'src/models/seminars';
import SingleLineLink from '../../Common/Button/SingleLineLink.vue';

export default defineComponent({
  components: {
    HeadingView,
    SeminarCard,
    SlideIn,
    SingleLineLink,
  },

  setup() {
    const showAllSeminars = ref(false);

    return {
      seminars,
      showAllSeminars,
    };
  },

  computed: {
    filteredSeminars(): ISeminar[] {
      return this.showAllSeminars ? this.seminars : this.seminars.slice(0, 4);
    },
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
