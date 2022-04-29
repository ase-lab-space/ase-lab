<template>
  <q-card
    :class="seminar.status === 'wanted' ? ['wanted'] : ['in-progress']"
    style="width: 250px"
    class="shadow-7 col-12"
  >
    <img
      :src="seminar.url"
      :alt="`${seminar.name}の本`"
      style="max-width: 100%; height: 208px; object-fit: contain"
      class="q-mx-auto"
    />
    <div class="badge shadow-18" :class="`badge-${seminar.status}`">
      {{ STATUS[seminar.status] }}
    </div>
    <hr class="my-0" />
    <q-card-section>
      <div class="text-h6 text-center">{{ seminar.name }}</div>
      <div class="text-caption text-center">
        {{ seminar.span }}
      </div>
    </q-card-section>
    <!-- <div
      v-if="
        seminar.hovering &&
        (seminar.status === 'wanted' || seminar.status === 'in-progress')
      "
      class="show-detail full-width full-height absolute-full row justify-center items-center"
    >
      <q-btn
        color="primary"
        label="詳細を見る"
      />
    </div> -->
  </q-card>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

type StatusType = 'wanted' | 'preparing' | 'in-progress';

const STATUS: {
  [key in StatusType]: string;
} = {
  wanted: '募集中',
  preparing: '準備中',
  'in-progress': '進行中',
} as const;

export interface ISeminar {
  name: string;
  status: keyof typeof STATUS;
  url: string;
  span: string;
}

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
.badge {
  position: absolute;
  bottom: 70px;
  right: 20px;
  border-radius: 10px !important;
  color: white;
  padding: 2px 8px;
  z-index: 101;
  font-size: 1rem;
  font-weight: 500;

  &-wanted {
    background-color: $secondary;
  }
  &-preparing {
    background-color: $secondary;
  }
  &-in-progress {
    background-color: $secondary;
  }
}
.q-card > .badge {
  box-shadow: inherit !important;
}
</style>
