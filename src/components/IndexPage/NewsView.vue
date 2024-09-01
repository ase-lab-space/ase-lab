<i18n lang="yaml">
en:
  label: View list →
ja:
  label: 一覧を見る →
</i18n>

<template>
  <section class="section-container">
    <div class="content-container column justify-between news-container">
      <h2 class="section-title">News</h2>

      <div
        v-for="(item, i) in news"
        :key="i"
        class="row justify-start news-content items-center"
      >
        <div class="date">
          {{ format(parseISO(item.date), 'yyyy.MM.dd') }}
        </div>

        <div class="tag">
          <q-chip
            :label="TAG[item.tag[0]]"
            size="sm"
            text-color="white"
            :color="NEWS_TAG_COLOR[item.tag[0]]"
          />
        </div>

        <div class="news-title">
          <a v-if="item.url" :href="item.url" target="_blank">{{
            item.title[locale]
          }}</a>
          <div v-else>
            {{ item.title[locale] }}
          </div>
        </div>

        <div v-if="i !== news.length - 1" class="divider" />
      </div>
      <div class="button-container">
        <slide-in>
          <double-line-link class="link" to="/news" :label="t('label')" />
        </slide-in>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import DoubleLineLink from '../Common/Button/DoubleLineLink.vue';
import SlideIn from '../Common/Transition/SlideIn.vue';
import { NEWS_TAG_COLOR, TAG } from 'src/models/news';
import {
  MicroCMSRepository,
  type NewsProps,
} from 'src/repositories/microcms_repository';
import { useI18n } from 'vue-i18n';
import { format, parseISO } from 'date-fns';

export default defineComponent({
  components: {
    DoubleLineLink,
    SlideIn,
  },

  setup() {
    const { t, locale } = useI18n();
    const news = ref<NewsProps[]>([]);
    const microCMSRepository = new MicroCMSRepository();

    onMounted(async () => {
      news.value = await microCMSRepository.getNews({
        queries: {
          orders: '-date',
          limit: 4,
        },
      });
    });

    return {
      NEWS_TAG_COLOR,
      TAG,
      news,
      t,
      locale,
      parseISO,
      format,
    };
  },
});
</script>

<style lang="scss" scoped>
// $
@import 'assets/mq.scss';

.content-container {
  margin: 0 100px;

  @include mq(md) {
    margin: 0;
  }
}

.news-container {
  padding: 15px 30px 30px;
  background-color: #f2ecff;
  border-radius: 10px;
}

.section-title {
  font-size: 1.2rem;
  font-weight: 700;
}

.news-content {
  margin: 0 10px;
}

.date {
  margin-right: 10px;
}

.tag {
  margin-right: 20px;
}

.news-title {
  a {
    text-decoration: none;
    color: black;
    position: relative;

    &::after {
      content: '';
      background-color: black;
      position: absolute;
      left: 0;
      bottom: 0;
      height: 1px;
      width: 0;
      transition: all ease-out 0.3s;
    }

    &:hover::after {
      width: 100%;
    }
  }
}

.divider {
  background-color: #cccccc;
  height: 1px;
  width: 100%;
  margin: 7px 0;
}

.button-container {
  margin-left: auto;
  margin-top: 30px;
}
</style>
