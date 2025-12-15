import { defineStore } from 'pinia';
import { ref } from 'vue';
import { watch } from 'vue';

export const useTodoStore = defineStore('todo', () => {
  // 1. State: 할 일 목록 데이터 (배열)
  // 예시 데이터 하나 넣어둔다.
  // const todos = ref([{ id: 1, text: 'Vue3 정복하기', done: false }]);
  // 초기값: 로컬 스토리지 확인 (없으면 빈 배열)
  const todos = ref(JSON.parse(localStorage.getItem('todos')) || []);

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

  const clearAll = () => {
    if (confirm('정말 모든 할 일을 지우시겠습니까?')) {
      todos.value = [];
    }
  };

  watch(
    todos,
    (newTodos) => {
      // 배열이 변활 때마다 문자열로 바꿔서 전환
      localStorage.setItem('todos', JSON.stringify(newTodos));
    },
    { deep: true }
  ); // 객체 내부 변경 감지를 위해 deep: true 필수

  return { todos, addTodo, toggleTodo, deleteTodo, clearAll };
});
