import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useTodoStore = defineStore('todo', () => {
  // 1. State: 할 일 목록 데이터 (배열)
  // 예시 데이터 하나 넣어둔다.
  const todos = ref([{ id: 1, text: 'Vue3 정복하기', done: false }]);

  // 2. Action: 할 일 추가하기 (Create)
  const addTodo = (text) => {
    // 3. 배열에 push (id는 현재 시간으로 고유값 생성)
    todos.value.push({
      id: Date.now(),
      text: text,
      done: false
    });
  };

  // 완료 상태 토글 (Update)
  const toggleTodo = (id) => {
    const target = todos.value.find((todo) => todo.id === id);
    if (target) {
      target.done = !target.done; // true <-> false 뒤집기
    }
  };

  const deleteTodo = (id) => {
    // 해당 id가 아닌 것들만 남긴다 (필터링)
    todos.value = todos.value.filter((todo) => todo.id !== id);
  };

  return { todos, addTodo, toggleTodo, deleteTodo };
});
