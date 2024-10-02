<template>
  <q-card class="seminar-card" @click="navigateToActivities">
    <q-card-section class="row items-center">
      <div class="col-12">
        <div class="row items-end">
          <h5 class="title">{{ seminar.name[locale] }}</h5>

          <!-- Spanのチップ -->
          <q-chip
            :label="seminar.span[locale]"
            class="chip unified-chip"
            :color="randomColor()" 
            text-color="white"
          ></q-chip>

          <!-- タグ（スタイル）のチップ -->
          <q-chip
            v-if="seminar.tags"
            :label="getStyleLabel(seminar.tags)"
            class="chip unified-chip"
            :color="getStyleColor(seminar.tags)"
            text-color="white"
          ></q-chip>
        </div>

        <div class="description">{{ seminar.description[locale] }}</div>
      </div>
    </q-card-section>
  </q-card>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { SeminarsProps } from 'src/repositories/microcms_repository';
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router'; // useRouter をインポート

export default defineComponent({
  props: {
    seminar: {
      type: Object as PropType<SeminarsProps>,
      required: true,
    },
  },
  setup() {
    const { locale } = useI18n();
    const router = useRouter(); // useRouter を使用して router を取得

    // /activities ページに遷移するメソッド
    const navigateToActivities = () => {
      router.push('/activities');
    };

    // ランダムな色を生成
    const randomColor = () => {
      const colors = ['red', 'green', 'blue', 'orange', 'purple'];
      return colors[Math.floor(Math.random() * colors.length)];
    };

    // スタイルに基づく色を取得
    const getStyleColor = (style: string) => {
      const styleColors: { [key: string]: string } = {
        'zoom': 'red',
        'hybrid': 'orange',
        'face-to-face': 'green',
      };
      return styleColors[style] || 'grey';
    };

    // スタイルに基づくラベルを取得
    const getStyleLabel = (tags: string[]) => {
      const tag = tags[0];
      const styleLabels: { [key: string]: string } = {
        'zoom': 'Zoom',
        'hybrid': 'Hybrid',
        'face-to-face': '対面',
      };
      return styleLabels[tag] || tag;
    };

    return {
      locale,
      navigateToActivities, // ページ遷移用のメソッドを返す
      randomColor,
      getStyleColor,
      getStyleLabel,
    };
  },
});
</script>

<style lang="scss" scoped>
.seminar-card {
  width: 100%;
  transition: all 0.3s;
  cursor: pointer;

  &:hover {
    transform: translateX(10px);
    background-color: #ededed;
  }
}

.title {
  font-weight: 700;
  font-size: 1.1rem;
  margin-right: 16px;
}

.description {
  margin-top: 8px;
  font-weight: 400;
  font-size: 0.8rem;
  display: -webkit-box;
  overflow: hidden;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.unified-chip {
  font-size: 0.85rem;
  padding: 4px 8px;
  height: 20px;
  display: flex;
  align-items: center;
}
</style>
