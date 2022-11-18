<template>
  <q-card class="shadow-2 col-12 seminar-card">
    <img
      :src="seminar.url"
      :alt="`${seminar.name}の本`"
      class="q-mx-auto book-image"
    />
    <div class="badge shadow-18" :class="`badge-${seminar.status}`">
      {{ STATUS[seminar.status] }}
    </div>
    <hr />
    <q-card-section>
      <div class="name">{{ seminar.name }}</div>
      <div class="text-caption text-center">
        {{ seminar.span }}
      </div>
    </q-card-section>
  </q-card>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { ISeminar, STATUS } from 'src/models/seminars';

export default defineComponent({
  props: {
    seminar: {
      type: Object as PropType<ISeminar>,
      required: true,
    },
  },
  setup() {
    return {
      STATUS,
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
  bottom: 63px;
  right: 20px;
  border-radius: 10px !important;
  color: white;
  padding: 2px 8px;
  z-index: 101;
  font-size: 0.8rem;
  font-weight: 500;

  &-wanted {
    background-color: rgb(255, 62, 23);
  }
  &-in-preparation {
    background-color: rgb(89, 89, 89);
  }
  &-in-progress {
    background-color: rgb(16, 154, 53);
  }
  &-finished {
    background-color: rgb(0, 87, 217);
  }
}
.q-card > .badge {
  box-shadow: inherit !important;
}

hr {
  margin: 0;
}
</style>
