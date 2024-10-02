<i18n lang="yaml">
en:
  section-title1: Seminars in progress
  section-title2: Seminars in preparation
  label: Show more seminars →
ja:
  section-title1: 実施中のゼミ
  section-title2: 企画中のゼミ
  label: もっと見る →
</i18n>

<template>
  <section class="row section-container" :class="q.screen.gt.sm ? ['q-col-gutter-xl'] : []">
    <div class="col-xs-12 col-md-6 column">
      <div class="col row justify-between items-end section-title-container">
        <h4 class="section-title">{{ t('section-title1') }}</h4>
        <single-line-link to="/activities" :label="t('label')" class="single-line-link" />
      </div>

      <slide-in v-for="seminar in inProgressSeminars" :key="seminar.id">
        <seminar-card
          class="seminar-card"
          :seminar="seminar"
        />
      </slide-in>
    </div>

    <div class="col-xs-12 col-md-6 column justify-start preparing-container">
      <div class="col row justify-between items-end section-title-container">
        <h4 class="section-title">{{ t('section-title2') }}</h4>
        <single-line-link to="/activities" :label="t('label')" class="single-line-link" />
      </div>

      <slide-in v-for="seminar in preparingSeminars" :key="seminar.id">
        <seminar-card
          class="seminar-card"
          :seminar="seminar"
        />
      </slide-in>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import { useQuasar } from 'quasar';
import { useI18n } from 'vue-i18n';
import SingleLineLink from '../Common/Button/SingleLineLink.vue';
import SlideIn from '../Common/Transition/SlideIn.vue';
import SeminarCard from './Seminar/SeminarCard.vue';
import { MicroCMSRepository, SeminarsProps } from 'src/repositories/microcms_repository';

export default defineComponent({
  components: {
    SingleLineLink,
    SeminarCard,
    SlideIn,
  },
  setup() {
  const q = useQuasar();
  const { t, locale } = useI18n();
  const microCMSRepository = new MicroCMSRepository();
  const seminars = ref<SeminarsProps[]>([]);
  const inProgressSeminars = ref<SeminarsProps[]>([]);
  const preparingSeminars = ref<SeminarsProps[]>([]);

  onMounted(async () => {
  const data = await microCMSRepository.getSeminars();
  seminars.value = data;

  inProgressSeminars.value = seminars.value
    .filter(seminar => seminar.status.includes('進行中'))
    .slice(0, 4);

  preparingSeminars.value = seminars.value
    .filter(seminar => seminar.status.includes('募集中'))
    .slice(0, 4);
});

    return {
      q,
      t,
      locale,
      inProgressSeminars,
      preparingSeminars,
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
}

.single-line-link {
  margin-bottom: 4px;
}

.preparing-container {
  margin-top: 64px;
}
</style>
