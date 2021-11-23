<template lang="pug">
div
  b-table(striped hover :items="todos" :fields="fields")
    template(#cell(id)="todos")
      nuxt-link(:to="`/todo/${todos._id}`") {{ todos.index + 1 }}
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { fields } from '~/Interfaces/api/Fields'
import { todos } from '~/Interfaces/api/FirstTodo'

export default defineComponent({
  setup () {
    return {
      todos,
      fields
    }
  }
})
</script>
