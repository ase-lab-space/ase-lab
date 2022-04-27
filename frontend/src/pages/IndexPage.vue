<template>
  <q-page class="row items-center justify-evenly">
    <landing-overlay
      v-if="route.query['no-ovl'] !== 't'"
      @finish-animation="mainView?.startAnimation()"
    />
    <main-view ref="mainView" />
    <about-view />
    <map-view />
    <seminars-view class="seminars-view" />
    <articles-view />
    <border-button
      to="/contact"
      label="参加はコチラから"
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
  },

  setup() {
    const route = useRoute();
    const mainView = ref();
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
    };
  },
});
</script>

<style lang="scss" scoped>
.seminars-view {
  margin-bottom: 64px;
}

.entry-button {
  margin-top: 64px;
}
</style>
