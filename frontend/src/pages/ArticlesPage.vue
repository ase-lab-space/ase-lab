<template>
  <q-page class="column items-center articles-container">
    <page-title
      title="Articles"
      description="ASE-Lab. やASE-Lab. メンバーに関するnote記事を書いています。続々更新中なのでお楽しみに。"
      class="title-container"
    />
    <div class="row justify-start q-col-gutter-xl">
      <slide-in
        v-for="article in articles"
        :key="article.title"
        :delay="delay"
        class="col-3"
      >
        <article-card :article="article" />
      </slide-in>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import PageTitle from 'src/components/Common/PageTitle.vue';
import SlideIn from 'src/components/Common/Transition/SlideIn.vue';
import ArticleCard from 'src/components/IndexPage/Article/ArticleCard.vue';
import { sleep } from 'src/utils/PromiseUtil';
import { IArticleProps } from 'src/components/IndexPage/Article/ArticleCard.vue';

export const articles: IArticleProps[] = [
  {
    img: '/img/laughing_max.webp',
    title: '〜地方メンバーの声　#1（加藤数麻君 編）〜',
    bodyDigest:
      '元々阿部と今運営にいる本田の三人で、大学一年生に入ってから勉強会をする機会があって、その勉強会の延長というか、同じようなことをしていきたいねという風に思って...',
    date: '2022/04/23',
    url: 'https://note.com/ase_lab_/n/nb899b1739d39',
  },
];

export default defineComponent({
  components: {
    PageTitle,
    SlideIn,
    ArticleCard,
  },

  setup() {
    const delay = ref(500);

    onMounted(async () => {
      await sleep(500);
      delay.value = 0;
    });

    return {
      articles,
      delay,
    };
  },
});
</script>

<style lang="scss" scoped>
.articles-container {
  > * {
    width: 100%;
    max-width: 1100px;
  }
}
.title-container {
  margin-bottom: 60px;
}
</style>
