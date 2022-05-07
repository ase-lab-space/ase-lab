<template>
  <section class="section-container section-full-size">
    <div class="content-container row justify-between">
      <div class="col-xs-12 col-md-5 column items-center">
        <slide-in class="img-container row items-center justify-center">
          <router-link to="/about">
            <img src="/img/japanmap.webp" alt="" class="image" />
          </router-link>
        </slide-in>
      </div>

      <div class="col-xs-12 col-md-6 column justify-start">
        <div class="col-9">
          <slide-in>
            <h3 class="section-catch-phrase">
              全国どこにいたって、<br />
              仲間は見つかる。
            </h3>
          </slide-in>

          <slide-in>
            <p>
              現在は、宇宙理学や宇宙工学についての教材に取り組む勉強会、その基礎となる数学や物理学に関する勉強会、より気楽に参加できる教養のような勉強会などが企画されています。
            </p>

            <p>
              ASE-Lab.には、理学部の学生も工学部の学生も、文系の学生もいます。
              宇宙への学びを深めたいという思いがあれば、肩書は関係ありません。
            </p>
          </slide-in>

          <slide-in>
            <double-line-link class="link" to="/about" label="参加者の声 →" />
          </slide-in>
        </div>
      </div>
    </div>

    <slide-in class="row justify-center">
      <border-button
        to="https://docs.google.com/forms/d/1F3E-cEGQr9geMDtjl_xRRLTiMPqgbR5kOUU5-EBzW_I"
        label="参加はコチラから"
        class="entry-button tilt-on-hover"
      />
    </slide-in>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import DoubleLineLink from '../Common/Button/DoubleLineLink.vue';
import SlideIn from '../Common/Transition/SlideIn.vue';
import BorderButton from '../Common/Button/BorderButton.vue';

export default defineComponent({
  components: {
    DoubleLineLink,
    SlideIn,
    BorderButton,
  },
});
</script>

<style lang="scss" scoped>
// $
@import 'assets/mq.scss';

.section-catch-phrase {
  margin-bottom: 48px;
}

.content-container {
  margin: 0 100px;

  @include mq(md) {
    margin: 100px 0 0 0;
  }
}

.link {
  margin-top: 48px;
}

.img-container {
  width: 400px;
  min-height: 400px;
  position: relative;

  .image {
    width: 80%;
    cursor: pointer;
    filter: saturate(1.5) sepia(0.2);
  }
}
</style>
