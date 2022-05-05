<template>
  <div class="openbtn2" @click="toggle" ref="openbtn">
    <span></span><span></span>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const openbtn = ref<HTMLElement>();
    return {
      openbtn,
    };
  },
  methods: {
    toggle() {
      this.openbtn?.classList.toggle('active');
    },
  },
});
</script>

<style lang="scss" scoped>
.openbtn2 {
  position: relative; /*ボタン内側の基点となるためrelativeを指定*/
  width: 50px;
  height: 50px;
  cursor: pointer;
  background: #fff;
  z-index: 1000;
}

/*ボタン内側*/

.openbtn2 span {
  display: inline-block;
  transition: all 0.4s; /*アニメーションの設定*/
  position: absolute;
  left: 13px;
  height: 2px;
  background-color: #666;
}

.openbtn2 span:nth-of-type(1) {
  top: 22px;
  width: 50%;
}

.openbtn2 span:nth-of-type(2) {
  top: 29px;
  width: 30%;
}

/*activeクラスが付与されると線が回転して×に*/

.openbtn2.active span:nth-of-type(1) {
  top: 20px;
  left: 16px;
  transform: translateY(6px) rotate(-45deg);
  width: 35%;
}

.openbtn2.active span:nth-of-type(2) {
  top: 32px;
  left: 16px;
  transform: translateY(-6px) rotate(45deg);
  width: 35%;
}
</style>
