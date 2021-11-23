import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import ToDoStore from '~/store/todo'
// import { ToDo } from '~/Interfaces/api/Todo'

// eslint-disable-next-line import/no-mutable-exports
let todoStore: ToDoStore

function initialiseStores (store: Store<any>): void {
  todoStore = getModule(ToDoStore, store)
}

export { initialiseStores, todoStore }
