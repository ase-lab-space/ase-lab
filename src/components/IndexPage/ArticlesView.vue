<i18n lang="yaml">
en:
  section-title: Articles about our members
  label: Show more articles →
ja:
  section-title: メンバーに関する記事
  label: 記事をもっと見る →
</i18n>

<template>
  <section class="column section-container">
    <div class="col row justify-between section-title-container">
      <h4 class="section-title">{{ t('section-title') }}</h4>

      <single-line-link
        to="/articles"
        :label="t('label')"
        class="single-line-link"
      />
    </div>

    <slide-in class="col row justify-start">
      <q-scroll-area class="scroll-area">
        <div class="row no-wrap q-gutter-md">
          <article-card
            v-for="article in articles"
            :key="article.id"
            :article="article"
          />
        </div>
      </q-scroll-area>
    </slide-in>
  </section>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import SingleLineLink from '../Common/Button/SingleLineLink.vue';
import SlideIn from '../Common/Transition/SlideIn.vue';
import ArticleCard from './Article/ArticleCard.vue';
import { useI18n } from 'vue-i18n';
import {
  ArticleProps,
  MicroCMSRepository,
} from 'src/repositories/microcms_repository';

export default defineComponent({
  components: {
    ArticleCard,
    SingleLineLink,
    SlideIn,
  },

  setup() {
    const { t } = useI18n();
    const articles = ref<ArticleProps[]>([]);
    const microCMSRepository = new MicroCMSRepository();

    onMounted(async () => {
      articles.value = await microCMSRepository.getArticles({
        queries: {
          orders: '-date',
        },
      });
    });
    return {
      articles,
      t,
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
