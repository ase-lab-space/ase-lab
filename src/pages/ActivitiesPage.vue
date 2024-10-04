<i18n lang="yaml">
en:
  page-title: Here we introduce our various seminars, and unique projects in ASE-Lab.
ja:
  page-title: ASE-Lab. のメインの活動となる多種多様なゼミや、ASE-Lab.ならではの企画をご紹介します。
</i18n>

<template>
  <q-page class="column items-center activities-container">
    <page-title title="Activities" :description="t('page-title')" />
    <seminars-view class="activity" />
    <ase-talk-view class="activity" />
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PageTitle from 'src/components/Common/PageTitle.vue';
import SeminarsView from 'src/components/ActivitiesPage/Seminar/SeminarsView.vue';
import AseTalkView from 'src/components/ActivitiesPage/AseTalk/AseTalkView.vue';
import { useI18n } from 'vue-i18n';

export default defineComponent({
  components: {
    PageTitle,
    SeminarsView,
    AseTalkView,
  },
  setup() {
    const { t } = useI18n();
    return {
      t,
    };
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