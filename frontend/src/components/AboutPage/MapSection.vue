<template>
  <div class="row justify-between q-col-gutter-xl">
    <slide-in class="col-6 row justify-end">
      <img src="/img/japanmap.jpeg" alt="Japan simple map" class="image" />
    </slide-in>

    <div class="col-6 column">
      <slide-in>
        <h3>参加人数</h3>
      </slide-in>
      <slide-in :delay="200">
        <div class="participant-number">
          {{ num.value.toFixed(0) }}<span>人</span>
        </div>
      </slide-in>
      <slide-in :delay="500" class="univ-container row q-gutter-sm">
        <div class="univ" v-for="univ in univs" :key="univ">
          {{ univ }}
        </div>
        <div>etc.</div>
      </slide-in>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import anime from 'animejs';
import SlideIn from '../Common/Transition/SlideIn.vue';

const participantNumber = 60;

const univs: string[] = [
  '東京大学',
  '早稲田大学',
  '東北大学',
  '東京工業大学',
  'お茶の水女子大学',
  '慶應大学',
  '明治大学',
  '横浜国立大学',
  '東京理科大学',
  '国際教養大学',
  '名古屋工業大学',
  '京都産業大学',
  '大阪府立大学',
  '帝京大学',
  '岐阜大学',
  '信州大学',
  '弘前大学',
  '日本大学',
  '法政大学',
  '東海大学',
  '鳥取大学',
  '東京学芸大学',
  '九州大学',
  '九州工業大学',
  'トロント大学',
];

export default defineComponent({
  components: {
    SlideIn,
  },

  setup() {
    const num = ref({ value: 0 });
    onMounted(() => {
      anime({
        targets: num.value,
        easing: 'easeOutExpo',
        value: participantNumber,
        delay: 300,
        duration: 2500,
      });
    });
    return {
      num,
      univs,
    };
  },
});
</script>

<style lang="scss" scoped>
.image {
  height: 400px;
  filter: saturate(1.5) sepia(0.2);
}

h3 {
  font-size: 1.5rem;
  font-weight: 700;
  color: rgb(82, 82, 82);
}
.participant-number {
  font-size: 6rem;
  font-weight: 700;
  font-family: $typography-title-font-family;
  letter-spacing: 0.4rem;
  color: rgb(82, 82, 82);
  > span {
    font-size: 2rem;
  }
}
.univ-container {
  border-top: double 3px rgb(82, 82, 82);
  border-bottom: double 3px rgb(82, 82, 82);
}
.univ {
  margin-bottom: 8px;
}
</style>
