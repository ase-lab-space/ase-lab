<template>
  <q-layout view="lHh Lpr lff">
    <q-page-container class="date-analytices-container">
      <div class="date-analytices-top">
        <div class="header">
          <div class="logo-and-name">
            <a
              href="https://www.ase-lab.space/?no-ovl=t"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/img/logo.webp" alt="logo" />
            </a>
            <a
              href="https://www.ase-lab.space/?no-ovl=t"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h1>ASE-Lab.</h1>
            </a>
          </div>
        </div>

        <router-view v-slot="{ Component }">
          <transition mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view>

        <footer-view />
      </div>
    </q-page-container>
    <div class="background-image"></div>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import FooterView from 'src/components/MainLayout/ScaleUp/FooterView.vue';

export default defineComponent({
  name: 'DateAnalyticesLayout',

  components: {
    FooterView,
  },
});
</script>

<style lang="scss">
@import 'assets/mq.scss';

.date-analytices-container {
  margin: 0;
  padding-top: 1px;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
}

.date-analytices-top {
  background-color: transparent;
  margin: 40px 0;
  padding: 40px;
  border-radius: 25px;

  @include mq(sm) {
    padding: 25px;
  }
}

.background-image {
  background-image: url('/img/background.webp');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}

.header {
  display: flex;
  padding: 20px;
}

.logo-and-name {
  display: flex;
  align-items: center;

  img {
    width: 80px;
    margin-right: 10px;
  }

  h1 {
    font-family: 'Teko';
    font-size: 6rem;
    color: #ffffff;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
}
</style>
