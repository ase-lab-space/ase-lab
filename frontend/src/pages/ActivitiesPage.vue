<template>
  <q-page class="column items-center activities-container">
    <page-title
      title="Activities"
      description="ASE-Lab. のメインの活動となる多種多様なゼミや、ASE-Lab.ならではの企画をご紹介します。"
    />
    <seminars-view />
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PageTitle from 'src/components/Common/PageTitle.vue';
import SeminarsView from 'src/components/ActivitiesPage/SeminarsView.vue';

export default defineComponent({
  components: {
    PageTitle,
    SeminarsView,
  },
});
</script>

<style lang="scss">
.activities-container {
  > * {
    width: 100%;
    max-width: 900px;
  }
}
</style>
