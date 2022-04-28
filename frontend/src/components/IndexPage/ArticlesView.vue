<template>
  <section class="column section-container">
    <div class="col row justify-between section-title-container">
      <h4 class="section-title">メンバーに関する記事</h4>

      <single-line-link to="/articles" label="記事をもっと見る →" />
    </div>

    <div class="col row justify-start q-gutter-md">
      <slide-in v-for="article in articles" :key="article.title">
        <article-card :article="article" />
      </slide-in>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SingleLineLink from '../Common/Button/SingleLineLink.vue';
import SlideIn from '../Common/Transition/SlideIn.vue';
import ArticleCard, { IArticleProps } from './Article/ArticleCard.vue';

export default defineComponent({
  components: {
    ArticleCard,
    SingleLineLink,
    SlideIn,
  },

  setup() {
    const articles: IArticleProps[] = [
      {
        img: '/img/laughing_max.webp',
        title: '【MAX】〜地方メンバーの声（第一回）〜',
        bodyDigest:
          '元々阿部と今運営にいる本田の三人で、大学一年生に入ってから勉強会をする機会があって、その勉強会の延長というか、同じようなことをしていきたいねという風に思って...',
        date: '2022/05/16',
        url: 'https://note.com/ase_lab_/n/nb899b1739d39',
      },
      {
        img: '/img/laughing_max.webp',
        title: '【MAX】〜地方メンバーの声（第一回）〜',
        bodyDigest:
          '元々阿部と今運営にいる本田の三人で、大学一年生に入ってから勉強会をする機会があって、その勉強会の延長というか、同じようなことをしていきたいねという風に思って...',
        date: '2022/05/16',
        url: 'https://note.com/ase_lab_/n/nb899b1739d39',
      },
      {
        img: '/img/laughing_max.webp',
        title: '【MAX】〜地方メンバーの声（第一回）〜',
        bodyDigest:
          '元々阿部と今運営にいる本田の三人で、大学一年生に入ってから勉強会をする機会があって、その勉強会の延長というか、同じようなことをしていきたいねという風に思って...',
        date: '2022/05/16',
        url: 'https://note.com/ase_lab_/n/nb899b1739d39',
      },
    ];
    return {
      articles,
    };
  },
});
</script>

<style lang="scss" scoped>
.section-container {
  padding: 0 24px;
}
.section-title-container {
  margin-bottom: 24px;
}
.section-title {
  font-size: 1.5rem;
  text-decoration: underline;
  font-weight: 700;
}
</style>
