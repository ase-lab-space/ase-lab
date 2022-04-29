<template>
  <q-page class="column items-center activities-container">
    <page-title
      title="Activities"
      description="ASE-Lab. のメインの活動となる多種多様なゼミや、ASE-Lab.ならではの企画をご紹介します。"
    />
    <seminars-view class="activity" />
    <ase-talks-view class="activity" />
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PageTitle from 'src/components/Common/PageTitle.vue';
import SeminarsView from 'src/components/ActivitiesPage/Seminar/SeminarsView.vue';
import AseTalksView from 'src/components/ActivitiesPage/AseTalks/AseTalksView.vue';

export default defineComponent({
  components: {
    PageTitle,
    SeminarsView,
    AseTalksView,
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

.activity {
  margin-bottom: 100px;
}
</style>
