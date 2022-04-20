<template>
  <q-page class="row items-center justify-evenly">
    <landing-overlay @finish-animation="startMainViewAnim" />
    <main-view ref="mainView" />
    <about-view />
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import MainView from 'src/components/IndexPage/MainView.vue';
import LandingOverlay from 'src/components/IndexPage/LandingOverlay.vue';
import AboutView from 'src/components/IndexPage/AboutView.vue';

export default defineComponent({
  name: 'IndexPage',
  components: {
    MainView,
    LandingOverlay,
    AboutView,
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
