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

export type StatusType = 'wanted' | 'preparing' | 'in-progress' | 'finished';

const STATUS: {
  [key in StatusType]: string;
} = {
  wanted: '募集中',
  preparing: '準備中',
  'in-progress': '進行中',
  finished: '終了済',
} as const;

type StyleType = 'zoom' | 'hybrid' | 'face-to-face';

const STYLE: {
  [key in StyleType]: string;
} = {
  zoom: 'オンライン（Zoom）',
  hybrid: 'ハイブリッド',
  'face-to-face': '対面',
};

export interface ISeminar {
  name: string;
  description?: string;
  status: keyof typeof STATUS;
  url: string;
  span: string;
  style: keyof typeof STYLE;
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
.seminar-card {
  width: 200px;
}
.book-image {
  max-width: 100%;
  height: 170px;
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
  &-preparing {
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
