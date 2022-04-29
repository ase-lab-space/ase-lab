<template>
  <q-page class="column items-center">
    <page-title title="About Us" />

    <map-section />

    <about-section title="仲間と出会い、学ぶ場所になる" :paragraphs="body" />

    <about-section title="テクノロジーで日本中を繋ぐ" :paragraphs="body" />
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PageTitle from 'src/components/Common/PageTitle.vue';
import AboutSection from 'src/components/AboutPage/AboutSection.vue';
import MapSection from 'src/components/AboutPage/MapSection.vue';

export default defineComponent({
  components: {
    PageTitle,
    AboutSection,
    MapSection,
  },

  setup() {
    return {
      body: [
        'このドラスティックなコスト低減が実現されれば、衛星サービス（通信／放送／測位／リモートセンシング）及び宇宙・惑星探査に関わる宇宙輸送の需要は現在の10倍程度増えるものと予測されている。また、現在まだ実現していない需要、例えば、エンターテインメント（観光、旅行など）、医療、エネルギー等については、そのコストが百分の一程度になれば、大規模な需要が生まれるものと見込まれている。もちろん、コスト以上に宇宙・惑星で何が実現できるのか、という点が需要拡大において重要だ。',
        '（出典：内閣府 宇宙政策委員会資料）',
        'このような状況を捉えて、政府間においては、宇宙探査ハイレベル会議の開催（2009年）を皮切りに、国際協力の重要性を共有し、政府レベルでの対話・意見交換を行う動きが活発化してきている。直近では、2018年3月3日に、国際宇宙探査フォーラム（ISEF2）が日本において開催された。',
        'これまで、宇宙開発は長期に渡り国の予算で実行されていたため、宇宙産業を維持することを目的とした公共事業であった。実際に、宇宙産業の需要の多くは官需とされ、日本では8割を占めている。長期に渡りこのような状況が維持され続けたため、宇宙産業は官に下支えしてもらうことが恒常化し、イノベーションへの意欲が長らく減退した産業になった。官の意思を優先する産業となってしまい民間の活力が失われてきたのだ。',
        'しかし、この状況に反発する動きが米国を中心に始まり、それが、宇宙産業において大きな動きになりつつある。民間企業においては、SpaceX（米）、BlueOrigin（米）、SKYLON（英）等の宇宙輸送システムを再使用することで宇宙ロケットの打ち上げコストを削減した。',
        'Lockheed Martin（米）は、2028年までに火星軌道に宇宙ステーションMars Base Campを整備すると発表。',
        '今年は、探査技術・スピードを競う月面探査レースであるGoogle Lunar XPRIZEの開催が予定されている。',
        'これら宇宙インフラと呼ばれる産業の活発化に伴い、火星移住計画、宇宙旅行等の新サービスが創出されてきている。今後は、政府、民間の協力体制をどのような方針に基づき実現していくかが課題となっている。',
      ],
    };
  },
});
</script>

<style lang="scss" scoped></style>
