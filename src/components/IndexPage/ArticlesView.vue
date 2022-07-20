<template>
  <section class="column section-container">
    <div class="col row justify-between section-title-container">
      <h4 class="section-title">メンバーに関する記事</h4>

      <single-line-link
        to="/articles"
        label="記事をもっと見る →"
        class="single-line-link"
      />
    </div>

    <slide-in class="col row justify-start">
      <q-scroll-area class="scroll-area">
        <div class="row no-wrap q-gutter-md">
          <article-card
            :article="article"
            v-for="article in articles"
            :key="article.title"
          />
        </div>
      </q-scroll-area>
    </slide-in>
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
// $
@import 'assets/mq.scss';

.section-container {
  padding: 0 24px;

  @include mq(md) {
    padding: 0;
  }
}
.section-title-container {
  margin-bottom: 24px;
}
.section-title {
  font-size: 1.5rem;
  text-decoration: underline;
  font-weight: 700;
}

.single-line-link {
  line-height: 2;
  @include mq(sm) {
    display: none;
  }
}

.scroll-area {
  width: 100%;
  height: 340px;
}
</style>
