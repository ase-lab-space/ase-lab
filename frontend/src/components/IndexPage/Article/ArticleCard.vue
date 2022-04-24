<template>
  <div
    class="card"
    @click="openInNewTab(article.url)"
    @mouseover="img?.classList.add('img-hover')"
    @mouseleave="img?.classList.remove('img-hover')"
  >
    <img
      ref="img"
      :src="article.img"
      :alt="`${article.title}の写真`"
      class="img-container"
    />

    <div class="title">
      {{ article.title }}
    </div>

    <div class="body-digest">
      {{ article.bodyDigest }}
    </div>

    <div class="date">
      {{ article.date }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue';

export interface IArticleProps {
  img: string;
  title: string;
  bodyDigest: string;
  date: string;
  url: string;
}

export default defineComponent({
  props: {
    article: {
      type: Object as PropType<IArticleProps>,
      required: true,
    },
  },

  setup() {
    const img = ref<HTMLElement>();
    return {
      img,
      openInNewTab(url: string) {
        window.open(url, '_blank')?.focus();
      },
    };
  },
});
</script>

<style lang="scss" scoped>
.img-container {
  width: 250px;
  height: 180px;
  object-fit: cover;
  border-radius: 12px;
  transition: all 0.3s;
}

.img-hover {
  opacity: 0.5;
}

.title {
  width: 100%;
  margin-top: 8px;
  font-size: 1rem;
  font-weight: 700;
  -webkit-line-clamp: 2;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.card {
  width: 250px;
  cursor: pointer;
}

.body-digest {
  margin-top: 8px;
  font-size: 0.8rem;
  -webkit-line-clamp: 3;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.date {
  margin-top: 4px;
  color: #3e3e3e;
  font-size: 0.8rem;
}
</style>
