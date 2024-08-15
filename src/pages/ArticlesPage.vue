<i18n lang="yaml">
en:
  article: Our members and their activities inside and outside of ASE-Lab. are featured in these blog posts below. We are updating one after another, and stay tuned!
ja:
  article: ASE-Lab. やASE-Lab. メンバーに関するnote記事を書いています。続々更新中なのでお楽しみに。
</i18n>

<template>
  <q-page class="column items-center articles-container">
    <page-title
      title="Articles"
      :description="t('article')"
      class="title-container"
    />
    <div class="row justify-center q-col-gutter-lg">
      <slide-in
        v-for="article in articles"
        :key="article.id"
        :delay="delay"
        class="col-3 article-container"
      >
        <article-card :article="article" />
      </slide-in>
    </div>
  </q-page>
</template>

<script lang="ts">
import { useI18n } from 'vue-i18n';
import { defineComponent, onMounted, ref } from 'vue';
import PageTitle from 'src/components/Common/PageTitle.vue';
import SlideIn from 'src/components/Common/Transition/SlideIn.vue';
import ArticleCard from 'src/components/IndexPage/Article/ArticleCard.vue';
import { sleep } from 'src/utils/PromiseUtil';
import {
  ArticleProps,
  MicroCMSRepository,
} from 'src/repositories/microcms_repository';

export default defineComponent({
  components: {
    PageTitle,
    SlideIn,
    ArticleCard,
  },

  setup() {
    const delay = ref(500);
    const { t } = useI18n();
    const articles = ref<ArticleProps[]>([]);
    const microCMSRepository = new MicroCMSRepository();

    onMounted(async () => {
      await sleep(500);
      delay.value = 0;
    });

    onMounted(async () => {
      articles.value = await microCMSRepository.getArticles({
        queries: {
          orders: '-date',
        },
      });
    });

    return {
      articles,
      delay,
      t,
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
