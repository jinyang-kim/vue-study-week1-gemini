<script setup>
import { storeToRefs } from 'pinia';
import { useTodoStore } from '@/stores/todo';
import { ref, computed } from 'vue';

// 스토어 연결
const store = useTodoStore();
const { todos } = storeToRefs(store);
const { addTodo, toggleTodo, deleteTodo } = store;

const todoInput = ref('');
const hideCompleted = ref(false); // 완료된 항목 체크박스 상태

const handleAdd = () => {
  // 입력값이 없으면 실행하지 않은 (유효성 검사)
  if (!todoInput.value.trim()) return;

  // 스토어의 액션 호출
  addTodo(todoInput.value.trim());

  // 입력창 비우기
  todoInput.value = '';
};

// computed로 원본(todos)을 건드리지 않고 보여줄 목록만 가공
const filteredTodos = computed(() => {
  // 체크되어 있으면 -> 완료되지 않은(!done)것만 남김
  if (hideCompleted.value) {
    return todos.value.filter((todo) => !todo.done);
  } else {
    // 체크 안 되어 있으면 -> 전체 반환
    return todos.value;
  }
});
</script>

<template>
  <div class="todo-container">
    <header>
      <h1>My To-Do List</h1>
    </header>

    <div class="input-box">
      <input
        type="text"
        v-model="todoInput"
        placeholder="할 일을 입력하세요..."
        @keyup.enter="handleAdd"
      />
      <button @click="handleAdd">추가</button>
    </div>

    <div class="todo-completed-hide">
      <label>
        <input type="checkbox" v-model="hideCompleted" />
        <span>완료된 항목 숨기기</span>
      </label>
    </div>

    <ul class="todo-list">
      <li v-for="todo in filteredTodos" :key="todo.id" class="todo-item">
        <input
          type="checkbox"
          :checked="todo.done"
          @change="toggleTodo(todo.id)"
        />
        <span class="text">{{ todo.text }}</span>
        <button class="del-btn" @click="deleteTodo(todo.id)">삭제</button>
      </li>
    </ul>
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

  header {
    text-align: center;
    margin-bottom: 30px;
    h1 {
      color: #2c3e50;
      margin: 0;
    }
  }

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

  .todo-completed-hide {
    label {
      display: flex;
      gap: 10px;
    }
    color: #333;
  }

  .todo-list {
    list-style: none;
    padding: 0;
    color: #333;

    .todo-item {
      padding: 15px;
      border-bottom: 1px solid #eee;
      display: flex;
      align-items: center;

      &:last-child {
        border-bottom: none;
      }

      input[type='checkbox'] {
        margin-right: 10px;
        cursor: pointer;
        width: 18px;
        height: 18px;
      }

      .text {
        flex: 1; // 남은 공간 차지
        font-size: 1.1rem;
        transition: color 0.3s;

        // [SCSS] 완료된 항목 스타일
        &.done {
          color: #aaa;
          text-decoration: line-through;
        }
      }

      .del-btn {
        background: #ff5252;
        color: white;
        border: none;
        padding: 5px 10px;
        border-radius: 4px;
        margin-left: 10px;
        cursor: pointer;
        font-size: 0.8rem;

        &:hover {
          background: rgba(#ff5252, 50%);
        }
      }
    }
  }
}
</style>
