<i18n lang="yaml">
en:
  news: Here is a list of past News.
ja:
  news: 過去のお知らせ一覧です。
</i18n>

<template>
  <q-page class="column past-news-container">
    <page-title title="NEWS" :description="t('news')" class="title-container" />

    <div>
      <slide-in v-for="(item, i) in sortedNews" :key="i" class="row news-container">
        <div class="date">
          {{ item.date }}
        </div>

        <div class="tag">
          <q-chip
            :label="TAG[item.tag]"
            size="sm"
            text-color="white"
            :color="NEWS_TAG_COLOR[item.tag]"
          />
        </div>

        <div class="news-title">
          <a v-if="item.url" :href="item.url" target="_blank">{{
            item.title
          }}</a>
          <div v-else>
            {{ item.title }}
          </div>
        </div>

        <div v-if="i !== sortedNews.length - 1" class="divider" />
      </slide-in>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';
import PageTitle from 'src/components/Common/PageTitle.vue';
import SlideIn from 'src/components/Common/Transition/SlideIn.vue';
import { NEWS_TAG_COLOR, news, TAG } from 'src/models/news';
import { useI18n } from 'vue-i18n';

export default defineComponent({
  components: {
    PageTitle,
    SlideIn,
  },

  setup() {
    const { t } = useI18n();
    return {
      NEWS_TAG_COLOR,
      TAG,
      t,
    };
  },

  computed: {
    sortedNews() {
      return [...news].sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      );
    },
  },
});
</script>

<style lang="scss" scoped>
// $
@import 'assets/mq.scss';

.news-container {
  margin: 10px;
}

.title-container {
  margin-bottom: 60px;
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
</style>
