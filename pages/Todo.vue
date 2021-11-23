<template lang="pug">
div.container
  b-row
    h1.title ToDoリスト
  b-row
    b-col(sm="3")
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
    b-col(sm="9")
      b-table(striped hover :items="todos" :fields="fields")
        template(#cell(id)="todos")
          nuxt-link(:to="`/todo/${todos._id}`") {{ todos.index + 1 }}
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'
import moment from 'moment'
import { ToDo } from '~/Interfaces/api/Todo'
// import { todoStore } from '~/store'

export default defineComponent({
  setup () {
    const newToDoTitle = ref<string>('')
    const newToDoDone = ref<string>('')
    const newToDoDeadline = ref<string>('')
    const newToDoComplete = ref<boolean>(false)

    const fields = [
      'id',
      'title',
      'done',
      'deadline',
      'complete'
    ]

    const todos = ref<ToDo[]>([
      {
        title: ref('タイトル1').value,
        done: ref('晩御飯作り').value,
        deadline: ref(moment(new Date()).format('YYYY-MM-DD')).value,
        complete: ref(false).value
      }
    ])
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
    // const moveDetailPage = () => {
    //   todoStore.create(todos.value)
    //   this.$router.push('/todo/:id')
    // }
    return {
      todos,
      newToDoTitle,
      newToDoDone,
      newToDoDeadline,
      newToDoComplete,
      fields,
      add,
      remove
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
