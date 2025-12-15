<script setup>
import { useTodoStore } from '@/stores/todo';
import { ref } from 'vue';

// 스토어 연결
const store = useTodoStore();
const { addTodo } = store;

const todoInput = ref('');

const handleAdd = () => {
  // 입력값이 없으면 실행하지 않은 (유효성 검사)
  if (!todoInput.value.trim()) return;

  // 스토어의 액션 호출
  addTodo(todoInput.value.trim());

  // 입력창 비우기
  todoInput.value = '';
};
</script>

<template>
  <div class="input-box">
    <input
      type="text"
      v-model="todoInput"
      placeholder="할 일을 입력하세요..."
      @keyup.enter="handleAdd"
    />
    <button @click="handleAdd">추가</button>
  </div>
</template>

<style lang="scss" scoped>
.input-box {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;

  input {
    flex: 1;
    padding: 12px;
    border: 1px solid #ddd;
    border-radius: 8px;
    outline: none;
    font-size: 1rem;
    &:focus {
      border-color: #42b983;
    }
  }

  button {
    background: #42b983;
    color: white;
    border: none;
    padding: 0 20px;
    border-radius: 8px;
    cursor: pointer;
    font-weight: bold;
    &:hover {
      background: rgba(#42b983, 50%);
    }
  }
}
</style>
