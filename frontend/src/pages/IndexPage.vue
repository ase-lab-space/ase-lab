<template>
  <q-page class="row items-center justify-evenly">
    <main-view />
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MainView from 'src/components/IndexPage/MainView.vue';

export default defineComponent({
  name: 'IndexPage',
  components: {
    MainView,
  },

  setup() {
    return;
  },
});
</script>
