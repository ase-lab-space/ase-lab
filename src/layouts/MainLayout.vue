<template>
  <q-layout view="lHh Lpr lff">
    <q-page-container class="frame-container">
      <div class="frame-container-top">
        <header class="row justify-between">
          <h2 class="ase-lab-title">
            <router-link to="/?no-ovl=t">ASE-Lab.</router-link>
          </h2>

          <nav class="navbar row items-center" v-if="q.screen.gt.sm">
            <nav-link
              v-for="link in links"
              :text="link.text"
              :path="link.path"
              :key="link.path"
            />
          </nav>
          <nav v-else>
            <hamberger-icon @click="onHambergerClicked" ref="hambergerIcon" />
            <link-overlay
              v-if="linkOverlayActive"
              ref="linkOverlay"
              @link-clicked="onLinkClicked"
            />
          </nav>
        </header>

        <router-view v-slot="{ Component }">
          <transition mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view>

        <footer-view />
      </div>
    </q-page-container>
  </q-layout>
  <div class="layout-background" />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useQuasar } from 'quasar';
import { sleep } from 'src/utils/PromiseUtil';
import NavLink from 'src/components/MainLayout/NavLink.vue';
import FooterView from 'src/components/MainLayout/FooterView.vue';
import HambergerIcon from 'src/components/MainLayout/HambergerIcon.vue';
import LinkOverlay from 'src/components/MainLayout/LinkOverlay.vue';

interface ILink {
  text: string;
  path: string;
  description: string;
}

export const links: ILink[] = [
  {
    text: 'About Us',
    path: '/about',
    description: '私たちについて',
  },
  {
    text: 'Activities',
    path: '/activities',
    description: '私たちの活動',
  },
  {
    text: 'Articles',
    path: '/articles',
    description: '私たちの記事',
  },
  {
    text: 'Contact',
    path: '/contact',
    description: '私たちへのお問合わせ',
  },
];

export default defineComponent({
  name: 'MainLayout',

  components: {
    NavLink,
    FooterView,
    HambergerIcon,
    LinkOverlay,
  },

  setup() {
    const q = useQuasar();
    const linkOverlayActive = ref(false);
    const linkOverlay = ref<InstanceType<typeof LinkOverlay>>();
    const hambergerIcon = ref<InstanceType<typeof HambergerIcon>>();

    return {
      q,
      linkOverlayActive,
      linkOverlay,
      hambergerIcon,

      links,
    };
  },
  methods: {
    async onHambergerClicked() {
      if (this.linkOverlayActive) {
        this.linkOverlay?.disable();
        await sleep(300);
        this.linkOverlayActive = false;
      } else {
        this.linkOverlayActive = true;
      }
    },
    async onLinkClicked() {
      this.hambergerIcon?.toggle();
      this.linkOverlay?.disable();
      await sleep(300);
      this.linkOverlayActive = false;
    },
  },
});
</script>

<style lang="scss">
@import 'assets/mq.scss';

.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s;
}
.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.frame-container {
  margin: 0 40px;
  overflow: hidden;

  @include mq(sm) {
    margin: 0 15px;
  }
}

.frame-container-top {
  background-color: #fff;
  margin: 40px 0;
  padding: 40px;
  border-radius: 25px;

  @include mq(sm) {
    padding: 25px;
  }
}

.layout-background {
  background: linear-gradient(
    67.59deg,
    #4e1ebd 13.16%,
    rgba(125, 88, 233, 0.53) 60.4%,
    rgba(65, 189, 122, 0.38) 97.13%
  );
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
}

.ase-lab-title {
  font-family: $typography-title-font-family;
  font-size: 3.5rem;

  a {
    text-decoration: none;
    color: black;
  }

  @include mq(sm) {
    font-size: 2.8rem;
  }
}

.navbar {
  a {
    margin: 0 20px;
  }
}
</style>
