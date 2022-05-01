<template>
  <q-page class="column items-center">
    <page-title title="About Us" />

    <map-section />

    <about-section :data="aboutSection1" />

    <about-section :data="aboutSection2" />

    <slide-in class="signature row justify-end">
      ASE-Lab. 代表　 阿部 舞哉
    </slide-in>

    <slide-in class="use-case-section">
      <h3 class="use-case-title">＜ASE-Lab.の使い方＞</h3>
      <ol>
        <li>既に開催されているゼミに参加する</li>
        <li>自分が興味のあるテーマの勉強会を企画してみる</li>
        <li>交流イベントを通して、全国の仲間たちと出会う</li>
        <li>自分にしかできない、オリジナルの使い方を見つける</li>
      </ol>
    </slide-in>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PageTitle from 'src/components/Common/PageTitle.vue';
import AboutSection from 'src/components/AboutPage/AboutSection.vue';
import MapSection from 'src/components/AboutPage/MapSection.vue';
import { aboutSection1, aboutSection2 } from 'src/models/about';
import SlideIn from 'src/components/Common/Transition/SlideIn.vue';

export default defineComponent({
  components: {
    PageTitle,
    AboutSection,
    MapSection,
    SlideIn,
  },

  setup() {
    return {
      aboutSection1,
      aboutSection2,
    };
  },
});
</script>

<style lang="scss" scoped>
.signature {
  max-width: 750px;
  letter-spacing: 3px;
  font-size: 1rem;
  width: 100%;
}
.use-case-section {
  margin-top: 64px;
}
.use-case-title {
  font-size: 1.5rem;
  font-weight: 700;
}
ol {
  counter-reset: item;
  list-style: none;
  padding-left: 0;
  li {
    counter-increment: item;
    margin-bottom: 8px;
  }
}

li::before {
  content: 'ex ' counter(item) '. ';
}
</style>
