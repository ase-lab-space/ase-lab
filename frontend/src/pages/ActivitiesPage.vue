<template>
  <q-page class="column items-center">
    <page-title
      title="Activities"
      description="ASE-Lab. のメインの活動となる多種多様なゼミや、ASE-Lab.ならではの企画をご紹介します。"
    />
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PageTitle from 'src/components/Common/PageTitle.vue';

export default defineComponent({
  components: {
    PageTitle,
  },
});
</script>

<style lang="scss"></style>
