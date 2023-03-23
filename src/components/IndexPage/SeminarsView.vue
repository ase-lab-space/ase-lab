<i18n lang="yaml">
en:
  section-title1: Seminars in progress
  section-title2: Seminars in preparation
  label: Show more seminars  →
ja:
  section-title1: 実施中のゼミ
  section-title2: 企画中のゼミ
  label: もっと見る →
</i18n>

<template>
  <section
    class="row section-container"
    :class="q.screen.gt.sm ? ['q-col-gutter-xl'] : []"
  >
    <div class="col-xs-12 col-md-6 column">
      <div class="col row justify-between items-end section-title-container">
        <h4 class="section-title">{{ t('section-title1') }}</h4>

        <single-line-link
          to="/activities"
          :label="t('label')"
          class="single-line-link"
        />
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

    <div class="col-xs-12 col-md-6 column justify-start preparing-container">
      <div class="col row justify-between items-end section-title-container">
        <h4 class="section-title">{{ t('section-title2') }}</h4>

        <single-line-link
          to="/activities"
          :label="t('label')"
          class="single-line-link"
        />
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
import { StatusType, seminars as _seminars } from 'src/models/seminars';
import { useQuasar } from 'quasar';
import { useI18n } from 'vue-i18n';

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
    const q = useQuasar();
    const { t } = useI18n();

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
      q,
      inProgressSeminars: seminars
        .filter((seminar) => seminar.status === 'in-progress')
        .slice(0, 3),
      preparingSeminars: seminars
        .filter((seminar) => ['preparing', 'wanted'].includes(seminar.status))
        .slice(0, 3),
      t,
    };
  },
});
</script>

<style lang="scss" scoped>
// $
@import 'assets/mq.scss';

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
}

.single-line-link {
  margin-bottom: 4px;
}

.preparing-container {
  margin-top: 64px;
}
</style>
