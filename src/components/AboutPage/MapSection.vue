<template>
  <div class="row justify-between q-col-gutter-xl">
    <slide-in class="col-xs-12 col-md-6 row justify-end gt-sm">
      <img src="/img/japanmap.webp" alt="Japan simple map" class="image" />
    </slide-in>

    <slide-in class="col-xs-12 col-md-6 row justify-center lt-md">
      <img src="/img/japanmap.webp" alt="Japan simple map" class="image" />
    </slide-in>

    <div class="col-xs-12 col-md-6 column">
      <slide-in>
        <h3>参加人数</h3>
      </slide-in>
      <slide-in :delay="200">
        <div class="participant-number">
          {{ num.value.toFixed(0) }}<span>人</span>
        </div>
      </slide-in>
      <slide-in :delay="500" class="univ-container row q-gutter-sm">
        <div v-for="univ in univs" :key="univ" class="univ">
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
import { participantNumber, univs } from 'src/models/meta';

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
  max-height: 400px;
  max-width: 100%;
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
