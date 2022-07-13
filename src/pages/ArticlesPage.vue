<template>
  <q-page class="column items-center articles-container">
    <page-title
      title="Articles"
      description="ASE-Lab. やASE-Lab. メンバーに関するnote記事を書いています。続々更新中なのでお楽しみに。"
      class="title-container"
    />
    <div class="row justify-center q-col-gutter-lg">
      <slide-in
        v-for="article in articles"
        :key="article.title"
        :delay="delay"
        class="col-3 article-container"
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
import { articles } from 'src/models/articles';

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
      articles: articles.concat(articles),
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
.article-container {
  min-width: 260px;
}
.title-container {
  margin-bottom: 60px;
}
</style>
