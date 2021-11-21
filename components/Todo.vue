<template lang="pug">
div.container
  b-row
    h1 ToDoリスト
  b-row
    b-table(striped hover :items="todos")

  b-row
    b-col(sm="3")
      h4 title
        b-form-input(type="text" v-model.lazy="newToDoTitle")
      br
      h4 Done
        b-form-input(type="text" v-model.lazy="newToDoDone")
      br
      //- h4 Deadline
      //-   b-form-input(type="date" v-model.lazy="newToDoDeadline")
      //- br
      //- h4 Complete
      //- b-form-group
      //-   b-form-radio(type="checkbox" v-model.lazy="newToDoComplete" name="some-radios" :value="true") true
      //-   b-form-radio(type="checkbox" v-model.lazy="newToDoComplete" name="some-radios" :value="false") false
      //- br
  button(@click="add") ADD
  button(@click="remove") DELETE
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'
// import moment from 'moment'

type ToDo = {
  title: string,
  done: string,
  // deadline: string,
  // complete: boolean
}

export default defineComponent({
  setup () {
    const newToDoTitle = ref<string>('')

    const newToDoDone = ref<string>('')

    const todos = ref<ToDo[]>([
      {
        title: ref('タイトル1').value,
        done: ref('晩御飯作り').value
        // deadline: ref(moment(new Date()).format('YYYY/MM/DD HH:mm:SS')).value,
        // complete: ref(false).value
      }
    ])
    // const newToDoDeadline = ref<string>('')
    // const newToDoComplete = ref<boolean>(true)
    const add = () => {
      todos.value.push(
        {
          title: newToDoTitle.value,
          done: newToDoDone.value
          // deadline: newToDoDeadline.value,
          // complete: newToDoComplete.value
        }
      )
      newToDoTitle.value = ''
      newToDoDone.value = ''
      // newToDoDeadline.value = ''
      // newToDoComplete.value = false
    }
    const remove = (index: number) => {
      todos.value.splice(index, 1)
    }
    return {
      todos,
      newToDoTitle,
      add,
      remove
    }
  }
})
</script>
