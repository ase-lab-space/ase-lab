<template>
  <q-page class="column items-center">
    <page-title
      title="Articles"
      description="ASE-Lab. やASE-Lab. メンバーに関するnote記事を書いています。続々更新中なのでお楽しみに。"
      class="title-container"
    />
    <div class="row justify-start q-gutter-xl">
      <slide-in v-for="article in articles" :key="article.title" :delay="500">
        <article-card :article="article" />
      </slide-in>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PageTitle from 'src/components/Common/PageTitle.vue';
import SlideIn from 'src/components/Common/Transition/SlideIn.vue';
import ArticleCard from 'src/components/IndexPage/Article/ArticleCard.vue';

export default defineComponent({
  components: {
    PageTitle,
    SlideIn,
    ArticleCard,
  },

  setup() {
    const articles = [
      {
        img: '/img/sleeping_max.jpg',
        title: '【MAX】〜地方メンバーの声（第一回）〜',
        bodyDigest:
          '元々阿部と今運営にいる本田の三人で、大学一年生に入ってから勉強会をする機会があって、その勉強会の延長というか、同じようなことをしていきたいねという風に思って...',
        date: '2022/05/16',
        url: 'https://note.com/ase_lab_/n/nb899b1739d39',
      },
      {
        img: '/img/sleeping_max.jpg',
        title: '【MAX】〜地方メンバーの声（第一回）〜',
        bodyDigest:
          '元々阿部と今運営にいる本田の三人で、大学一年生に入ってから勉強会をする機会があって、その勉強会の延長というか、同じようなことをしていきたいねという風に思って...',
        date: '2022/05/16',
        url: 'https://note.com/ase_lab_/n/nb899b1739d39',
      },
      {
        img: '/img/sleeping_max.jpg',
        title: '【MAX】〜地方メンバーの声（第一回）〜',
        bodyDigest:
          '元々阿部と今運営にいる本田の三人で、大学一年生に入ってから勉強会をする機会があって、その勉強会の延長というか、同じようなことをしていきたいねという風に思って...',
        date: '2022/05/16',
        url: 'https://note.com/ase_lab_/n/nb899b1739d39',
      },
    ];
    return {
      articles: articles.concat(articles),
    };
  },
});
</script>

<style lang="scss" scoped>
.title-container {
  margin-bottom: 60px;
}
</style>
