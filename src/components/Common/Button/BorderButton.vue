<template>
  <router-link v-if="to.startsWith('/')" :to="to" class="link">
    <div class="link-text">
      {{ label }}
    </div>
  </router-link>
  <a v-else target="_blank" :href="to" class="link">
    <div class="link-text">
      {{ label }}
    </div>
  </a>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    label: {
      type: String,
      required: true,
    },
    to: {
      type: String,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
.link {
  position: relative;
  background-image: linear-gradient(
    to right,
    #4776e6 0%,
    #8e54e9 50%,
    #4776e6 100%
  );
  padding: 15px 45px;
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
  box-shadow: 0 0 20px #eee;
  border-radius: 10px;
  display: inline-block;

  &:hover {
    background-position: right center;
    box-shadow: 0 20px 5px -10px rgba(#000, 0.2);
    transform: translateY(-3px);
  }
}

.link-text {
  font-size: 0.9rem;
  font-weight: 700;
  text-decoration: none;
}
</style>
