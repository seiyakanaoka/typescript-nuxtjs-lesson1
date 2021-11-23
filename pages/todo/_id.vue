<template lang="pug">
  div.container
    b-row
      h1.title ToDoリスト
    b-row
      TodoDetail
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { TodoDetail } from '~/components/todo/TodoDetail.vue'

export default defineComponent({
  components: {
    TodoDetail
  },
  setup () {
    const starts: string = 'Hello Nuxt!!'
    return {
      starts
    }
  }
})
</script>
