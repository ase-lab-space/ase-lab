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

        <div v-if="i !== news.length - 1" class="divider" />
      </div>
    </div>
  </section>
</template>

<script>
import { defineComponent } from 'vue';
import { NEWS_TAG_COLOR, news, TAG } from 'src/models/news';

export default defineComponent({
  setup() {
    return {
      news,
      NEWS_TAG_COLOR,
      TAG,
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
</style>
