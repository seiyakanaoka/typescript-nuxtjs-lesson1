<template lang="pug">
div.container
  b-row
    h1.title ToDoリスト
  b-row
    b-col(sm="3")
      TodoInput
    b-col(sm="9")
      TodoList
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import TodoList from '~/components/todo/TodoList.vue'
import TodoInput from '~/components/todo/TodoInput.vue'
import { newToDoTitle, newToDoDone, newToDoDeadline, newToDoComplete } from '~/Interfaces/api/FirstTodo'

// import { todoStore } from '~/store'

export default defineComponent({
  components: {
    TodoList,
    TodoInput
  },
  setup () {
    return {
      newToDoTitle,
      newToDoDone,
      newToDoDeadline,
      newToDoComplete
    }
  }
})
</script>

<style lang="scss">
.title {
  text-align: center;
  margin: 20px 20px auto;
}
</style>
