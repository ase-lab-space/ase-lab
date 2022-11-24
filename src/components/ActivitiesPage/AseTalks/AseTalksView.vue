<template>
  <section>
    <slide-in>
      <heading-view
        title="ASE-Talks"
        subtitle="ASE-トーーク!!"
        description="ASE-Lab.には全国各地、時には海外からもメンバーが集まっています。メンバーどうしの交流会で、新たな出会いや発見があるかもしれません。"
      />
    </slide-in>

    <div class="row">
      <slide-in class="img-container col-sm-12 col-md-6">
        <img src="/img/ase-talks.webp" alt="" />
      </slide-in>
      <slide-in class="img-container col-sm-12 col-md-6" :delay="300">
        <img src="/img/meetup.webp" alt="" />
      </slide-in>
    </div>

    <slide-in>
      <p class="caption">
        過去の開催会の様子やテーマ。現在、月に2回の頻度で開催しています。
      </p>
    </slide-in>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SlideIn from 'src/components/Common/Transition/SlideIn.vue';
import HeadingView from '../HeadingView.vue';

export default defineComponent({
  components: {
    SlideIn,
    HeadingView,
  },
});
</script>

<style lang="scss" scoped>
// $
@import 'assets/mq.scss';

.img-container {
  > img {
    width: 100%;
    height: 100%;
    padding: 32px;

    @include mq(sm) {
      padding: 0 0 12px;
    }
  }
}
.caption {
  text-align: center;
  color: rgb(94, 94, 94);
}
</style>
