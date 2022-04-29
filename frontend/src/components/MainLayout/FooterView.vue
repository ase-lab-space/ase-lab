<template>
  <div class="hr" />
  <footer class="row items-center justify-center footer">
    <a href="https://twitter.com/ASE_lab_" target="_blank" class="icon">
      <q-btn icon="mdi-twitter" flat round />
    </a>
    <a
      href="https://www.facebook.com/ASE.lab.community"
      target="_blank"
      class="icon"
    >
      <q-btn icon="mdi-facebook" flat round />
    </a>
    <div class="text-center text-body2 copyright">
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

  > * {
    margin: 0 8px;
  }
}

.hr {
  margin: 160px 0 32px;
  height: 1px;
  width: 100%;
  background-color: #e7e7e7;
}

.copyright {
  margin-left: 32px;
}
</style>
