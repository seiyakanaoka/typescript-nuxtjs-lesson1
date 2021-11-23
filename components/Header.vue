<template lang="pug">
div
  nuxt-link(to="/").header-link
    h2.header-title ToDo
</template>

<style lang="scss" scoped>
div {
  height: 70px;
  background-color: #CCFFFF;
}
.header-link {
  color: #000;
  text-decoration: none;
}
.header-title {
  text-align :center;
  padding-top: 15px;
}
</style>
