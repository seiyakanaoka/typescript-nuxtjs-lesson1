import { Module, VuexModule, Mutation } from 'vuex-module-decorators'
import { ToDo } from '~/Interfaces/api/Todo'

@Module({ stateFactory: true, namespaced: true, name: 'todo' })
export default class ToDoStore extends VuexModule {
  todo: ToDo = {}

  /**
   * todo情報を作成
   * @param title タイトル
   * @param done やるべきこと
   * @param deadline 期日
   * @param complete 達成・未達成
   */
  @Mutation
  create (todo: ToDo) {
    this.todo.title = todo.title
    this.todo.done = todo.done
    this.todo.deadline = todo.deadline
    this.todo.complete = todo.complete
  }
}
