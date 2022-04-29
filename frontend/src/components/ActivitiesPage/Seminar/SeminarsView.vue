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
    <div class="row q-col-gutter-lg">
      <slide-in
        v-for="(seminar, index) in filteredSeminars"
        :key="index"
        class="col-3"
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
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import HeadingView from '../HeadingView.vue';
import SeminarCard, { ISeminar } from './SeminarCard.vue';
import SlideIn from '../../Common/Transition/SlideIn.vue';

export default defineComponent({
  components: {
    HeadingView,
    SeminarCard,
    SlideIn,
  },

  setup() {
    const showAllSeminars = ref(false);

    const seminars: ISeminar[] = [
      {
        name: '軌道力学',
        status: 'in-progress',
        url: 'https://www.nippyo.co.jp/shop/img/books/temp/07557.jpg',
        span: '1~3月',
      },
      {
        name: '軌道力学',
        status: 'preparing',
        url: 'https://www.nippyo.co.jp/shop/img/books/temp/07557.jpg',
        span: '1~3月',
      },
      {
        name: '軌道力学',
        status: 'wanted',
        url: 'https://www.nippyo.co.jp/shop/img/books/temp/07557.jpg',
        span: '1~3月',
      },
      {
        name: '軌道力学',
        status: 'in-progress',
        url: 'https://www.nippyo.co.jp/shop/img/books/temp/07557.jpg',
        span: '1~3月',
      },
      {
        name: '軌道力学',
        status: 'preparing',
        url: 'https://www.nippyo.co.jp/shop/img/books/temp/07557.jpg',
        span: '1~3月',
      },
      {
        name: '軌道力学',
        status: 'wanted',
        url: 'https://www.nippyo.co.jp/shop/img/books/temp/07557.jpg',
        span: '1~3月',
      },
      {
        name: '軌道力学',
        status: 'wanted',
        url: 'https://www.nippyo.co.jp/shop/img/books/temp/07557.jpg',
        span: '1~3月',
      },
    ];
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
.heading {
  margin-bottom: 64px;
}
.seminar-card {
  margin-bottom: 32px;
}
</style>
