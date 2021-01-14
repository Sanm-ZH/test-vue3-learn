<template>
  <div class="todo-app">
    <input
      type="text"
      class="add-input"
      autofocus="autofocus"
      placeholder="接下来要做什么？"
      @keyup.enter="addTodo"
    />
    <Item
      v-for="todo in filteredTodos.value"
      :todo="todo"
      :key="todo.id"
      @del="deleteTodo"
      @opt="optCompleted"
    />
    <Tabs
      :filter="filter"
      :todos="todos"
      @toggle="toggleFilter"
      @clearAll="clearAllCompleted"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import Item from './item.vue'
import Tabs from './tab.vue'
import { TodoItem } from './todoInterface'

export default defineComponent({
  name: 'TodoPage',
  components: {
    Item,
    Tabs
  },
  setup() {
    let id = 0
    const todos = ref([] as Array<TodoItem>)
    const addTodo = (e: any): void => {
      if (!e.target.value.trim()) {
        // 没有输入不添加
        return
      }
      todos.value.unshift({
        id: id++,
        content: e.target.value.trim(),
        completed: false
      })
      e.target.value = ''
    }

    const deleteTodo = (id: number): void => {
      todos.value
        .splice(todos.value.findIndex((todo) => todo.id === id), 1)
    }
    const clearAllCompleted = (): void => {
      const activeList = todos.value.filter(todo => !todo.completed)
      todos.value = activeList
    }
    const optCompleted = (id: number): void => {
      const activeTodoIndex = todos.value.findIndex(item => item.id === id)
      todos.value[activeTodoIndex]['completed'] = !todos.value[activeTodoIndex]['completed']
    }

    const filter = ref('all')
    const toggleFilter = (state: string): void => {
      filter.value = state
    }

    const filteredTodos = computed(() => {
      if (filter.value === 'all') {
        return todos
      }
      const flot = filter.value === 'completed'
      return ref(todos.value.filter(todo => flot === todo.completed))
    })

    return {
      todos,
      addTodo,
      optCompleted,
      deleteTodo,
      clearAllCompleted,
      filter,
      toggleFilter,
      filteredTodos
    }
  }
})
</script>

<style scoped lang="scss">
.todo-app {
  opacity: 0.7;
  max-width: 620px;
  margin: 0px auto;
  box-shadow: 6px 2px 10px #3c3c3c;
  border-radius: 5px;
  padding: 10px;
  background: #ffffff;

  @media (max-width: 28.125rem) {
    margin: 0 1.25rem;
  }
}
.add-input {
  position: relative;
  margin: 0px;
  width: 100%;
  font-size: 24px;
  font-family: inherit;
  font-weight: inherit;
  line-height: 1.4rem;
  border: 0;
  outline: none;
  color: inherit;
  padding: 6px;
  border: 1px solid #999;
  box-shadow: inset 0 -1px 5px 0px rgba(0, 0, 0, 0);
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  padding: 16px 16px 16px 16px;
  border: none;
  z-index: 1000;
  display: flex;
  text-align: center;
  @media (max-width: 18.75rem) {
    font-size: 1rem;
  }
}
</style>
