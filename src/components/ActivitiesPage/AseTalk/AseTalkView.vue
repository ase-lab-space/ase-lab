<i18n lang="yaml">
en:
  heading:
    subtitle: ASE-Talk
    description: ASE-Lab. has members from all over Japan and sometimes even from overseas. By interacting with members who have various interests, specialties, and backgrounds, you may encounter and discover something new!
  caption: The photo of the "ASE-Talk" event held in the past. Currently, we hold “ASE-Talk” once a month on online platforms, including discord and open chat, for member interaction.
ja:
  heading:
    subtitle: ASE-トーーク!!
    description: ASE-Lab.には全国各地、時には海外からもメンバーが集まっています。 様々な興味・専門、バックグラウンドを持つメンバーと交流することで、新たな出会いや発見があるかもしれません。
  caption: 過去の開催会の様子やテーマ。現在は、月に1回ディスコードやオープンチャットなどで開催しています。
</i18n>

<template>
  <section>
    <slide-in>
      <heading-view
        title="ASE-Talk"
        :subtitle="t('heading.subtitle')"
        :description="t('heading.description')"
      />
    </slide-in>

    <div class="row">
      <slide-in class="img-container col-sm-12 col-md-6">
        <img src="/img/ase-talk.webp" alt="" />
      </slide-in>
      <slide-in class="img-container col-sm-12 col-md-6" :delay="300">
        <img src="/img/meetup.webp" alt="" />
      </slide-in>
    </div>

    <slide-in>
      <p class="caption">{{ t('caption') }}</p>
    </slide-in>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SlideIn from 'src/components/Common/Transition/SlideIn.vue';
import HeadingView from '../HeadingView.vue';
import { useI18n } from 'vue-i18n';

export default defineComponent({
  components: {
    SlideIn,
    HeadingView,
  },
  setup() {
    const { t } = useI18n();
    return {
      t,
    };
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
