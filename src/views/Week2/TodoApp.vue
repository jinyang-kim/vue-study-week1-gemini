<script setup>
import TodoHeader from '@/components/todo/TodoHeader.vue';
import TodoInput from '@/components/todo/TodoInput.vue';
import TodoList from '@/components/todo/TodoList.vue';
</script>

<template>
  <div class="todo-container">
    <TodoHeader />
    <TodoInput />
    <TodoList />
  </div>
</template>

<style lang="scss" scoped>
.todo-container {
  max-width: 500px;
  margin: 50px auto;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  padding: 30px;
}
</style>
