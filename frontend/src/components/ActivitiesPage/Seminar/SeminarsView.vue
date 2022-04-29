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

const seminars: ISeminar[] = [
  {
    name: '衛星データ解析',
    status: 'wanted',
    url: 'https://www.tellusxdp.com/cmn/img/ogp.jpg',
    span: '4月下旬~',
  },
  {
    name: '宇宙工学入門',
    status: 'in-progress',
    url: 'https://images-na.ssl-images-amazon.com/images/I/51rZrV0V8IL._SX357_BO1,204,203,200_.jpg',
    span: '4月中旬~',
  },
  {
    name: '天文学',
    status: 'in-progress',
    url: 'https://upload.wikimedia.org/wikipedia/commons/0/00/Crab_Nebula.jpg',
    span: '4月下旬~',
  },
  {
    name: '物理数学',
    status: 'in-progress',
    url: 'https://images-na.ssl-images-amazon.com/images/I/51oYFb4Ri4L._SX321_BO1,204,203,200_.jpg',
    span: '12月~5月',
  },
  {
    name: '宇宙の物理',
    status: 'in-progress',
    url: 'https://images-na.ssl-images-amazon.com/images/I/81XAjp79rRL.jpg',
    span: '1月~4月',
  },
  {
    name: 'space-english',
    status: 'in-progress',
    url: 'https://image.freepik.com/free-vector/colorful-galaxy-background-with-astronaut_52683-307.jpg',
    span: 'April ~',
  },
  {
    name: '軌道力学2nd',
    status: 'in-progress',
    url: '/img/seminars/kidorikigaku2.jpeg',
    span: '4月~7月',
  },
  {
    name: 'ゼロから始めるCAD',
    status: 'in-progress',
    url: '/img/seminars/zerocad.jpeg',
    span: '4月中旬~',
  },
  {
    name: '流体力学',
    status: 'in-progress',
    url: 'https://shop38-makeshop.akamaized.net/shopimages/jsmebooks/0000000000352.jpg',
    span: '4月中旬~',
  },
  {
    name: '宇宙システム入門',
    status: 'in-progress',
    url: 'https://images-na.ssl-images-amazon.com/images/I/41F1M118NXL._SX337_BO1,204,203,200_.jpg',
    span: '4月中旬~',
  },
  {
    name: '画像処理2nd',
    status: 'preparing',
    url: 'https://images-na.ssl-images-amazon.com/images/I/41FCF736uWL._SX352_BO1,204,203,200_.jpg',
    span: '未定',
  },
  {
    name: '軌道力学',
    status: 'finished',
    url: 'https://www.nippyo.co.jp/shop/img/books/temp/07557.jpg',
    span: '1月~3月',
  },
  {
    name: '画像処理',
    status: 'finished',
    url: 'https://images-na.ssl-images-amazon.com/images/I/41FCF736uWL._SX352_BO1,204,203,200_.jpg',
    span: '1月~4月',
  },
];

export default defineComponent({
  components: {
    HeadingView,
    SeminarCard,
    SlideIn,
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
.heading {
  margin-bottom: 64px;
}
.seminar-card {
  margin-bottom: 32px;
}
</style>
