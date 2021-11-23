import { ref } from '@nuxtjs/composition-api'
import { ToDo } from '~/Interfaces/api/Todo'

export const newToDoDone = ref<string>('')
export const newToDoTitle = ref<string>('')
export const newToDoDeadline = ref<string>('')
export const newToDoComplete = ref<boolean>(false)

export const todos = ref<ToDo[]>([])
