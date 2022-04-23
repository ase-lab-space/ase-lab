<template>
  <section class="row section-container q-col-gutter-xl">
    <div class="col-6 column">
      <div class="col row justify-between items-end section-title-container">
        <h4 class="section-title">実施中のゼミ</h4>

        <single-line-link href="/activities" label="ゼミをもっと見る →" />
      </div>

      <slide-in v-for="seminar in seminars" :key="seminar.title">
        <seminar-card
          :title="seminar.title"
          :description="seminar.description"
          :tags="seminar.tags"
        />
      </slide-in>
    </div>

    <div class="col-6 column">
      <div class="col row justify-between items-end section-title-container">
        <h4 class="section-title">メンバーが企画中のゼミ</h4>

        <single-line-link href="/activities" label="ゼミをもっと見る →" />
      </div>

      <slide-in v-for="seminar in seminars" :key="seminar.title">
        <seminar-card
          :title="seminar.title"
          :description="seminar.description"
          :tags="seminar.tags"
        />
      </slide-in>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SingleLineLink from '../Common/Button/SingleLineLink.vue';
import SlideIn from '../Common/Transition/SlideIn.vue';
import SeminarCard from './Seminar/SeminarCard.vue';
import { ITag } from './Seminar/SeminarCard.vue';

export interface ISeminar {
  title: string;
  description: string;
  tags: ITag[];
}

export default defineComponent({
  components: {
    SingleLineLink,
    SeminarCard,
    SlideIn,
  },
  setup() {
    const seminars: ISeminar[] = [
      {
        title: '軌道力学',
        description:
          '円錐曲線の運動から、軌道遷移、簡単なランベルト問題、スイングバイなどまでの基本的な運動を扱うことを一緒に頑張ってくれるメンバーを募集します！',
        tags: [
          {
            text: '1月~3月',
            color: 'cyan',
          },
          {
            text: 'ハイブリッド',
            color: 'orange',
          },
        ],
      },
      {
        title: '軌道力学',
        description:
          '円錐曲線の運動から、軌道遷移、簡単なランベルト問題、スイングバイなどまでの基本的な運動を扱うことを一緒に頑張ってくれるメンバーを募集します！',
        tags: [
          {
            text: '1月~3月',
            color: 'cyan',
          },
          {
            text: 'ハイブリッド',
            color: 'orange',
          },
        ],
      },
      {
        title: '軌道力学',
        description:
          '円錐曲線の運動から、軌道遷移、簡単なランベルト問題、スイングバイなどまでの基本的な運動を扱うことを一緒に頑張ってくれるメンバーを募集します！',
        tags: [
          {
            text: '1月~3月',
            color: 'cyan',
          },
          {
            text: 'ハイブリッド',
            color: 'orange',
          },
        ],
      },
    ];

    return {
      seminars,
    };
  },
});
</script>

<style lang="scss" scoped>
.section-title {
  font-size: 1.5rem;
  text-decoration: underline;
  font-weight: 700;
}

.section-title-container {
  margin-bottom: 24px;
}

.seminar-card {
  margin-bottom: 16px;
}
</style>
