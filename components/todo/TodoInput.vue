<template lang="pug">
div
  h4 title
    b-form-input(type="text" v-model.lazy="newToDoTitle")
    br
    h4 Done
      b-form-input(type="text" v-model.lazy="newToDoDone")
    br
    h4 Deadline
      b-form-datepicker(:date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }" v-model.lazy="newToDoDeadline")
    br
    h4 Complete
    b-form-group
      b-form-radio(type="checkbox" v-model.lazy="newToDoComplete" name="some-radios" :value="true") true
      b-form-radio(type="checkbox" v-model.lazy="newToDoComplete" name="some-radios" :value="false") false
    br
    button(@click="add") ADD
    button(@click="remove") DELETE
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { todos, newToDoTitle, newToDoDone, newToDoDeadline, newToDoComplete } from '~/Interfaces/api/FirstTodo'

export default defineComponent({
  setup () {
    const add = () => {
      todos.value.push(
        {
          title: newToDoTitle.value,
          done: newToDoDone.value,
          deadline: newToDoDeadline.value,
          complete: newToDoComplete.value
        }
      )
      newToDoTitle.value = ''
      newToDoDone.value = ''
      newToDoDeadline.value = ''
      newToDoComplete.value = false
    }
    const remove = (index: number) => {
      todos.value.splice(index, 1)
    }
    return {
      newToDoTitle,
      newToDoDone,
      newToDoDeadline,
      newToDoComplete,
      add,
      remove
    }
  }
})
</script>
