<i18n lang="yaml">
en:
  askMe: Write to us any questions, opinions cooperation offers. We will get back to you as soon as possible.
ja:
  askMe: 私たちへのご質問・ご意見、コラボレーションのお申し出など何でもお訊ねください。
</i18n>

<template>
  <q-page class="column items-center">
    <page-title title="Contact" :description="t('askMe')" />
    <slide-in :delay="500" class="contact-form">
      <contact-form />
    </slide-in>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';
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
    const { t } = useI18n();
    return {
      t,
    };
  },
});
</script>

<style lang="scss" scoped>
.contact-form {
  width: 100%;
}
</style>
