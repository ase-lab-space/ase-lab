<template>
  <section class="row section-container q-col-gutter-xl">
    <div class="col-6 column">
      <div class="col row justify-between items-end section-title-container">
        <h4 class="section-title">実施中のゼミ</h4>

        <single-line-link to="/activities" label="ゼミをもっと見る →" />
      </div>

      <slide-in v-for="seminar in inProgressSeminars" :key="seminar.title">
        <seminar-card
          class="seminar-card"
          :title="seminar.title"
          :description="seminar.description"
          :tags="seminar.tags"
        />
      </slide-in>
    </div>

    <div class="col-6 column justify-start">
      <div class="col row justify-between items-end section-title-container">
        <h4 class="section-title">メンバーが企画中のゼミ</h4>

        <single-line-link to="/activities" label="ゼミをもっと見る →" />
      </div>

      <slide-in v-for="seminar in preparingSeminars" :key="seminar.title">
        <seminar-card
          class="seminar-card"
          :title="seminar.title"
          :description="seminar.description"
          :tags="seminar.tags"
        />
      </slide-in>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SingleLineLink from '../Common/Button/SingleLineLink.vue';
import SlideIn from '../Common/Transition/SlideIn.vue';
import SeminarCard, { ITag, TAG_COLOR } from './Seminar/SeminarCard.vue';
import { hash } from 'src/utils/HashUtil';
import { seminars as _seminars, StatusType } from 'src/models/seminars';

export interface ISeminar {
  title: string;
  description: string;
  status: StatusType;
  tags: ITag[];
}

const TAG_COLOR_KEYS = Object.keys(TAG_COLOR);

const getColor = (s: string) => {
  return TAG_COLOR_KEYS[
    Math.abs(hash(s) % TAG_COLOR_KEYS.length)
  ] as keyof typeof TAG_COLOR;
};

export default defineComponent({
  components: {
    SingleLineLink,
    SeminarCard,
    SlideIn,
  },
  setup() {
    const seminars: ISeminar[] = _seminars
      .filter((seminar) => seminar.description !== undefined)
      .map((seminar) => {
        return {
          title: seminar.name,
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          description: seminar.description!,
          status: seminar.status,
          tags: [
            {
              text: seminar.span,
              color: getColor(seminar.span),
            },
            {
              text: seminar.style,
              color: getColor(seminar.style),
            },
          ],
        };
      });

    return {
      inProgressSeminars: seminars
        .filter((seminar) => seminar.status === 'in-progress')
        .slice(0, 3),
      preparingSeminars: seminars
        // .filter((seminar) => seminar.status in ['preparing', 'wanted'])
        .filter((seminar) => seminar.status === 'in-progress')
        .slice(3, 6),
    };
  },
});
</script>

<style lang="scss" scoped>
.section-title {
  font-size: 1.5rem;
  text-decoration: underline;
  font-weight: 700;
}

.section-title-container {
  margin-bottom: 24px;
}

.seminar-card {
  margin-bottom: 16px;
  width: 90% !important;
}
</style>
