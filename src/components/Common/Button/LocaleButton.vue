<template>
  <div class="locale-container">
    <q-btn
      size="md"
      icon="mdi-web"
      flat
      unelevated
      color="grey-6"
      round
      @click="toggleDropdown"
    />
    <div ref="localeListRef" class="locale-list-container">
      <q-list bordered separator class="locale-list">
        <q-item
          clickable
          v-ripple
          v-for="[key, locale] in Object.entries(localeInfo)"
          :key="key"
          @click="changeLocale(key)"
        >
          <div class="row grey-6 no-wrap justify-center items-center">
            <q-icon
              :name="locale.icon"
              size="xs"
              color="grey-6"
              class="q-pr-sm q-pt-xs"
            />
            <div>
              {{ locale.name }}
            </div>
          </div>
        </q-item>
      </q-list>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useI18n } from 'vue-i18n';

const localeInfo = {
  ja: {
    name: 'Japanese',
    icon: 'mdi-ideogram-cjk-variant',
  },
  en: {
    name: 'English',
    icon: 'mdi-alphabetical',
  },
} as const;

export default defineComponent({
  setup() {
    console.log(localStorage.getItem('user.locale'));
    const t = useI18n();
    const localeListRef = ref<HTMLDivElement>();
    return {
      t,
      localeListRef,
      localeInfo,
    };
  },
  methods: {
    toggleDropdown() {
      this.localeListRef?.classList.contains('locale-list-container__visible')
        ? this.closeDropdown()
        : this.openDropdown();
    },
    openDropdown() {
      this.localeListRef?.classList.add('locale-list-container__visible');
    },
    closeDropdown() {
      this.localeListRef?.classList.remove('locale-list-container__visible');
    },
    changeLocale(key: keyof typeof localeInfo) {
      if (localStorage.getItem('user.locale') === key) {
        return this.closeDropdown();
      }

      localStorage.setItem('user.locale', key);
      location.reload();
    },
  },
});
</script>

<style lang="scss" scoped>
.locale-container {
  position: relative;
}
.locale-list {
  z-index: 5;
  position: absolute;
  right: 0;
}
.locale-list-container {
  transition: all 0.3s;
  opacity: 0;
  &__visible {
    opacity: 1;
  }
}
</style>
