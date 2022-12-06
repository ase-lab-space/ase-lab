<i18n lang="yaml">
en:
  label: Click here to Join
ja:
  label: 参加はコチラから
</i18n>

<template>
  <q-page class="row items-center justify-evenly">
    <landing-overlay
      v-if="route.query['no-ovl'] !== 't'"
      @finish-animation="mainView?.startAnimation()"
    />
    <main-view ref="mainView" />
    <news-view class="news-view" />
    <about-view />
    <map-view />
    <seminars-view class="seminars-view" />
    <articles-view />
    <border-button
      to="https://docs.google.com/forms/d/1F3E-cEGQr9geMDtjl_xRRLTiMPqgbR5kOUU5-EBzW_I"
      :label="t('label')"
      class="entry-button tilt-on-hover"
    />
  </q-page>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import MainView from 'src/components/IndexPage/MainView.vue';
import LandingOverlay from 'src/components/IndexPage/LandingOverlay.vue';
import AboutView from 'src/components/IndexPage/AboutView.vue';
import MapView from 'src/components/IndexPage/MapView.vue';
import SeminarsView from 'src/components/IndexPage/SeminarsView.vue';
import ArticlesView from 'src/components/IndexPage/ArticlesView.vue';
import BorderButton from 'src/components/Common/Button/BorderButton.vue';
import { sleep } from 'src/utils/PromiseUtil';
import NewsView from 'src/components/IndexPage/NewsView.vue';
import { useI18n } from 'vue-i18n';

export default defineComponent({
  name: 'IndexPage',
  components: {
    MainView,
    LandingOverlay,
    AboutView,
    MapView,
    SeminarsView,
    ArticlesView,
    BorderButton,
    NewsView,
  },

  setup() {
    const route = useRoute();
    const mainView = ref();
    const { t } = useI18n();
    onMounted(async () => {
      if (route.query['no-ovl'] === 't') {
        // onMountedのタイミングで少し待たないといけない
        await sleep(1000);
        mainView?.value.startAnimation();
      }
    });

    return {
      route,
      mainView,
      t,
    };
  },
});
</script>

<style lang="scss" scoped>
.seminars-view {
  margin-top: 100px;
  margin-bottom: 64px;
}

.entry-button {
  margin-top: 64px;
}

.news-view {
  margin-bottom: 100px;
}
</style>
