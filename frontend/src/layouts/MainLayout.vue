<template>
  <q-layout view="lHh Lpr lFf" class="layout-background">
    <q-page-container class="frame-container">
      <div class="frame-container-top">
        <header class="row justify-between">
          <h2 class="ase-lab-title">ASE-Lab.</h2>

          <nav class="navbar row items-center">
            <nav-link text="Vision" path="/vision" />
            <nav-link text="Activities" path="/activities" />
            <nav-link text="Articles" path="/articles" />
            <nav-link text="Contact" path="/contact" />
          </nav>
        </header>
        <router-view />
      </div>
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NavLink from 'src/components/MainLayout/NavLink.vue';

export default defineComponent({
  name: 'MainLayout',

  components: {
    NavLink,
  },

  setup() {
    return;
  },
});
</script>

<style lang="scss" scoped>
.frame-container {
  margin: 0 40px;
  overflow: hidden;
}

.frame-container-top {
  background-color: #fff;
  margin-top: 40px;
  padding: 40px;
  border-radius: 25px;
}

.layout-background {
  background: linear-gradient(
    67.59deg,
    #4e1ebd 13.16%,
    rgba(125, 88, 233, 0.53) 60.4%,
    rgba(65, 189, 122, 0.38) 97.13%
  );
}

.ase-lab-title {
  font-family: $typography-title-font-family;
  font-size: 3.5rem;
}

.navbar {
  a {
    margin: 0 20px;
  }
}
</style>
