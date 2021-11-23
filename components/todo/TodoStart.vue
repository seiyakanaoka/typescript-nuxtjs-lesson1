<template lang="pug">
div.container
  h1.app-title Hello!! Everyone!!
  p.todo-start-text Press the button below to start&nbsp;
    strong ToDo
    span !!
  nuxt-link(to="/Todo")
    b-button.todo-start-btn(variant="success") Start
</template>

<style lang="scss" scoped>
.app-title {
  text-align: center;
  margin-top: 100px;
  font-size: 60px;
}
.todo-start-text {
  text-align: center;
  margin-top: 50px;
  font-size: 20px;
}
.todo-start-btn {
  display:block;
  margin: 0 auto;
  margin-top: 50px;
}
</style>
