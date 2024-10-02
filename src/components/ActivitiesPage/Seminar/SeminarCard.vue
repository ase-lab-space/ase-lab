<template>
  <q-card class="shadow-2 col-12 seminar-card">
    <img
      :src="seminar.image.url"
      :alt="`${seminar.name}の本`"
      class="q-mx-auto book-image"
    />
    <div v-if="seminar.status[0]" class="badge shadow-18" :class="`badge-${seminar.status[0]}`">
      {{ STATUS[seminar.status[0]][locale] }}
    </div>
    <hr />
    <q-card-section>
      <div class="name">{{ seminar.name[locale] }}</div>
      <div class="text-caption text-center">
        {{ seminar.span[locale] }}
      </div>
    </q-card-section>
  </q-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';
import { STATUS, STATUS_COLOR } from 'src/models/seminars';

export default defineComponent({
  props: {
    seminar: {
      type: Object,
      required: true,
    },
  },
  setup() {
    const { locale } = useI18n();
    return {
      STATUS,
      STATUS_COLOR,
      locale,
    };
  },
});
</script>

<style lang="scss" scoped>
.seminar-card {
  width: 200px;
}
.book-image {
  max-width: 100%;
  height: 200px;
  object-fit: contain;
}
.name {
  font-size: 1rem;
  text-align: center;
}
.badge {
  position: absolute;
  top: 190px;
  right: 20px;
  border-radius: 10px !important;
  color: white;
  padding: 2px 8px;
  z-index: 101;
  font-size: 0.8rem;
  font-weight: 500;
  background-color: red !important;
}

.badge-募集中 {
  background-color: red !important;
}

.badge-進行中 {
  background-color: green !important;
}

.badge-終了済み {
  background-color: blue !important;
}

.q-card > .badge {
  box-shadow: inherit !important;
}

hr {
  margin: 0;
}
</style>
