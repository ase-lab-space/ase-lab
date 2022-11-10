<template>
  <q-page class="column items-center">
    <page-title
      title="Contact" :description="$t('askMe')" />
    <slide-in :delay="500" class="contact-form">
      <contact-form />
    </slide-in>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ContactForm from 'src/components/ContactPage/ContactForm.vue';
import PageTitle from 'src/components/Common/PageTitle.vue';
import SlideIn from 'src/components/Common/Transition/SlideIn.vue';

export default defineComponent({
  components: {
    ContactForm,
    PageTitle,
    SlideIn,
  },
  setup() {
    return;
  },
});
</script>

<style lang="scss" scoped>
.contact-form {
  width: 100%;
}
</style>
