<template>
  <q-card class="seminar-card" @click="router.push('/activities')">
    <q-card-section class="row items-center">
      <div class="col-12">
        <div class="row items-end">
          <h5 class="title">
            {{ title }}
          </h5>

          <q-chip
            v-for="tag in tags"
            :key="tag.text"
            :label="tag.text"
            size="sm"
            :color="tag.color === undefined ? '' : TAG_COLOR[tag.color]"
            text-color="white"
          />
        </div>

        <div class="description">
          {{ description }}
        </div>
      </div>
    </q-card-section>
  </q-card>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { useRouter } from 'vue-router';

export interface ITag {
  text: string;
  color?: keyof typeof TAG_COLOR;
}

export const TAG_COLOR = {
  green: 'green-14',
  cyan: 'cyan-14',
  orange: 'orange-14',
  red: 'red-14',
};

export default defineComponent({
  props: {
    title: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    tags: {
      type: Array as PropType<ITag[]>,
      required: false,
    },
  },

  setup() {
    return {
      router: useRouter(),
      TAG_COLOR,
    };
  },
});
</script>

<style lang="scss" scoped>
.seminar-card {
  width: 100%;
  transition: all 0.3s;
  cursor: pointer;

  &:hover {
    transform: translateX(10px);
    background-color: #ededed;
  }
}

.title {
  font-weight: 700;
  font-size: 1.1rem;
  margin-right: 16px;
}

.description {
  margin-top: 8px;
  font-weight: 400;
  font-size: 0.8rem;
  -webkit-line-clamp: 2;
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
}

.icon {
  transition: all 0.3s;
}

.icon-hovering {
  transform: translateX(10px);
}
</style>
