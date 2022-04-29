<template>
  <div class="full-screen-overlay row items-center justify-center">
    <h1 class="ml11">
      <span class="text-wrapper">
        <span class="line line1"></span>
        <span class="letters">ASE-Lab.</span>
      </span>
    </h1>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import anime from 'animejs';
import { sleep } from 'src/utils/PromiseUtil';

export default defineComponent({
  setup(_props, context) {
    onMounted(async () => {
      // Wrap every letter in a span
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      var textWrapper = document.querySelector('.ml11 .letters')!;
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      textWrapper.innerHTML = textWrapper.textContent!.replace(
        /([^\x00-\x80]|\w|.|-)/g,
        "<span class='letter'>$&</span>"
      );

      // document.querySelector('.ml11 .letters')?.getBoundingClientRect().width が不安定なのでちょっと待つ
      await sleep(50);

      await anime
        .timeline({
          easing: 'easeOutExpo',
          loop: false,
          duration: 800,
        })
        .add({
          targets: '.ml11',
          opacity: 1,
        })
        .add({
          targets: '.ml11 .line',
          scaleY: [0, 1],
          opacity: [0.5, 1],
          duration: 500,
        })
        .add({
          targets: '.ml11 .line',
          translateX: [
            0,
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            document.querySelector('.ml11 .letters')!.getBoundingClientRect()
              .width + 10,
          ],
          easing: 'easeOutQuart',
          duration: 1000,
        })
        .add(
          {
            targets: '.ml11 .letter',
            opacity: [0, 1],
            duration: 600,
            delay: (_el, i) => 74 * i,
          },
          '-=875'
        )
        .add({
          targets: '.ml11',
          opacity: 0,
          duration: 700,
          delay: 200,
        })
        .add(
          {
            targets: '.full-screen-overlay',
            opacity: 0,
            duration: 1000,
          },
          '-=300'
        ).finished;

      context.emit('finish-animation');
      (
        document.getElementsByClassName('full-screen-overlay')[0] as HTMLElement
      ).style.zIndex = '-100';
    });
    return;
  },
});
</script>

<style lang="scss">
.full-screen-overlay {
  background-color: white;
  z-index: 100000;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
}

.ml11 {
  font-weight: 700;
  font-size: 3.5em;
  opacity: 0;

  .text-wrapper {
    position: relative;
    display: inline-block;
    padding-top: 0.1em;
    padding-right: 0.05em;
    padding-bottom: 0.15em;
  }
  .line {
    opacity: 0;
    position: absolute;
    left: 0;
    height: 100%;
    width: 3px;
    background-color: $primary;
    transform-origin: 0 50%;
  }
  .line1 {
    top: 0;
    left: 0;
  }
  .letter {
    display: inline-block;
    line-height: 1em;
    padding: 0 1px;
    font-weight: 300;
    font-size: 4rem;
    font-family: $typography-title-font-family;
  }
}
</style>
