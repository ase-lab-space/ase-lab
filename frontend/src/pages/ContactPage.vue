<template>
  <contact-form />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ContactForm from 'src/components/ContactPage/ContactForm.vue';

export default defineComponent({
  components: {
    ContactForm,
  },
  setup() {
    return;
  },
});
</script>
