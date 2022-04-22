<template>
  <section class="section-container section-full-size column items-center">
    <div class="content-container row justify-between">
      <div class="col-5 column">
        <h2 class="section-title row items-end">
          <div class="title">About</div>
          <div class="subtitle">ー 私たちについて</div>
        </h2>

        <div class="img-container row items-center justify-center">
          <a href="/vision">
            <img src="/img/1.jpeg" alt="" class="image3" />
          </a>
        </div>
      </div>

      <div class="col-6 column justify-start">
        <div class="col-9">
          <slide-in id="map-catch-phrase">
            <h3 class="section-catch-phrase">
              全国どこにいたって、<br />
              仲間は見つかる。
            </h3>
          </slide-in>

          <slide-in id="map-decription">
            <p class="">
              現在は、宇宙理学や宇宙工学についての教材に取り組む勉強会、その基礎となる数学や物理学に関する勉強会、より気楽に参加できる教養のような勉強会などが企画されています。
            </p>

            <p class="">
              ASE-Lab.には、理学部の学生も工学部の学生も、文系の学生もいます。
              宇宙への学びを深めたいという思いがあれば、肩書は関係ありません。
            </p>
          </slide-in>

          <slide-in id="map-link">
            <double-line-link
              class="link"
              href="/vision"
              label="参加者の声 →"
            />
          </slide-in>
        </div>
      </div>
    </div>

    <slide-in id="map-entry-button">
      <border-button
        href="/contact"
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
.section-catch-phrase {
  margin-bottom: 48px;
}

.section-full-size {
  height: 100vh;
}

.content-container {
  margin: 0 100px;
}

.link {
  margin-top: 48px;
}

.img-container {
  width: 400px;
  min-height: 400px;
  // display: block;
  position: relative;

  .image3 {
    // clip-path: circle(40% at 50% 50%);
    border-radius: 50%;
    width: 80%;
    transition: all 0.3s;
    cursor: pointer;

    filter: saturate(0.7) sepia(0.2) blur(0.1px)
      drop-shadow(12px 12px 0px #bababa);

    &:hover {
      filter: saturate(0) sepia(0.2) blur(1px)
        drop-shadow(12px 12px 0px #bababa);
    }
  }
}
</style>
