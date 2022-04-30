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
import ArticleCard from './Article/ArticleCard.vue';
import { articles } from 'src/models/articles';

export default defineComponent({
  components: {
    ArticleCard,
    SingleLineLink,
    SlideIn,
  },

  setup() {
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
