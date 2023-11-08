<template>
  <div class="hr" />
  <footer class="footer">
    <div class="row items-center justify-center q-gutter-md">
      <a href="https://x.com/ASE_lab_" target="_blank" class="icon-x">
        <q-btn icon="𝕏" flat round />
      </a>

      <a
        href="https://www.instagram.com/ase__lab/"
        target="_blank"
        class="icon"
      >
        <q-btn icon="mdi-instagram" flat round />
      </a>

      <a
        href="https://www.facebook.com/ASE.lab.community"
        target="_blank"
        class="icon"
      >
        <q-btn icon="mdi-facebook" flat round />
      </a>

      <a
        href="https://github.com/ase-lab-space/ase-lab"
        target="_blank"
        class="icon"
      >
        <q-btn icon="mdi-github" flat round />
      </a>
    </div>
    <div class="text-center text-body2">
      &copy; {{ new Date().getFullYear() }} – ASE-Lab.
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.icon {
  text-decoration: none;
  color: #525252;
}
.footer {
  margin: 16px 0;
  > div {
    margin-bottom: 12px;
  }
}

.hr {
  margin: 160px 0 32px;
  height: 1px;
  width: 100%;
  background-color: #e7e7e7;
}

.icon-x .q-btn {
  padding-bottom: 8px;
  text-decoration: none;
  color: #525252;
}

</style>
