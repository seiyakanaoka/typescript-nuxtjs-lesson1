<template lang="pug">
div
  Header.header
  main.main
    nuxt
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'

export default defineComponent({
  components: {
    Header,
    Footer
  }
})
</script>

<style lang="scss">
// .footer {
//   bottom: 0; /* 上部から配置の基準位置を決める */
//   left: 0; /* 左から配置の基準位置を決める */
//   width: 100%; /* フッターの横幅を指定する */
//   background-color: #000;
//   opacity: 0.5;
//   height: 100px;
//   margin-top: 16px;
// }
</style>
