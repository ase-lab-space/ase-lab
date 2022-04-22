<template>
  <q-page class="row items-center justify-evenly">
    <landing-overlay @finish-animation="startMainViewAnim" />
    <main-view ref="mainView" />
    <about-view />
    <map-view />
    <seminars-view />
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import MainView from 'src/components/IndexPage/MainView.vue';
import LandingOverlay from 'src/components/IndexPage/LandingOverlay.vue';
import AboutView from 'src/components/IndexPage/AboutView.vue';
import MapView from 'src/components/IndexPage/MapView.vue';
import SeminarsView from 'src/components/IndexPage/SeminarsView.vue';

export default defineComponent({
  name: 'IndexPage',
  components: {
    MainView,
    LandingOverlay,
    AboutView,
    MapView,
    SeminarsView,
  },

  setup() {
    const mainView = ref();

    return {
      mainView,
    };
  },

  methods: {
    startMainViewAnim() {
      this.mainView.startAnimation();
    },
  },
});
</script>
