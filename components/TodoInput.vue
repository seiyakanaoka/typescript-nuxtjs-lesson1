<template lang="pug">
div
  input(type="text" :value="newToDoTitle" @input="newToDoTitle = $event.target.value")
  button(@click="add") ADD
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({

})
</script>
