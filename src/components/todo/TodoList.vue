<script setup>
import { onMounted } from 'vue';
import SkeletonLoader from '../common/SkeletonLoader.vue';
import { storeToRefs } from 'pinia';
import { useTodoStore } from '@/stores/todo';
import { ref, computed } from 'vue';
import AppModal from '@/components/common/AppModal.vue';

// 스토어 연결
const store = useTodoStore();
const { todos, isLoading } = storeToRefs(store);
const { fetchTodos, toggleTodo, deleteTodo, clearAll } = store;

onMounted(() => {
  fetchTodos();
});

const isModalOpen = ref(false);

const openModal = () => {
  isModalOpen.value = true;
};

const handleClear = () => {
  clearAll();
  isModalOpen.value = false;
};

const hideCompleted = ref(false); // 완료된 항목 체크박스 상태

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
  <div v-if="isLoading" class="skeleton-list">
    <div class="skeleton-item" v-for="n in 3" :key="n">
      <SkeletonLoader style="width: 20px; height: 20px; margin-right: 10px" />
      <SkeletonLoader style="flex: 1; height: 24px" />
      <SkeletonLoader style="width: 50px; height: 30px; margin-left: 10px" />
    </div>
  </div>

  <div class="todo-completed-hide" v-if="todos.length > 0">
    <label>
      <input type="checkbox" v-model="hideCompleted" />
      <span>완료된 항목 숨기기</span>
    </label>
  </div>

  <TransitionGroup v-else name="list" tag="ul" class="todo-list">
    <li v-for="todo in filteredTodos" :key="todo.id" class="todo-item">
      <input
        type="checkbox"
        :checked="todo.done"
        @change="toggleTodo(todo.id)"
      />
      <span class="text">{{ todo.text }}</span>
      <button class="del-btn" @click="deleteTodo(todo.id)">삭제</button>
    </li>
  </TransitionGroup>
  <!-- <ul class="todo-list">
    <li v-for="todo in filteredTodos" :key="todo.id" class="todo-item">
      <input
        type="checkbox"
        :checked="todo.done"
        @change="toggleTodo(todo.id)"
      />
      <span class="text">{{ todo.text }}</span>
      <button class="del-btn" @click="deleteTodo(todo.id)">삭제</button>
    </li>
  </ul> -->

  <div class="todo-container">
    <div class="footer" v-if="todos.length > 0">
      <button class="clear-btn" @click="openModal">전체 삭제</button>
    </div>
  </div>

  <AppModal :isOpen="isModalOpen" @close="isModalOpen = false">
    <h3>주의</h3>
    <p>정말 모든 할 일을 지우시겠습니까?</p>
    <div style="margin-top: 15px">
      <button
        @click="handleClear"
        style="
          background: #ff5252;
          color: white;
          border: none;
          padding: 8px 16px;
        "
      >
        진짜 삭제할래요
      </button>
    </div>
  </AppModal>
</template>

<style lang="scss" scoped>
.skeleton-list {
  .skeleton-item {
    display: flex;
    align-items: center;
    padding: 15px;
    border-bottom: 1px solid #eee;
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

  // 들어올 때(Enter), 나갈 때(Leave) 활성화 상태
  .list-enter-active,
  .list-leave-active {
    transition: all 0.5s ease;
  }

  // 들어오기 시작할 때(From), 다 나갔을 때(To) 상태
  .list-enter-from,
  .list-leave-to {
    opacity: 0;
    transform: translateX(30px); // 오른쪽에서 스윽 나타나거나 사라짐
  }

  // 리스트가 빠진 자리를 자연스럽게 메꾸는 옵션
  .list-move {
    transition: transform 0.5s ease;
  }

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
.footer {
  margin-top: 20px;
  text-align: center;
  border-top: 1px dashed #eee;
  padding-top: 15px;

  .clear-btn {
    background-color: #90a4ae;
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;
    &:hover {
      background-color: rgba(#90a4ae, 10%);
    }
  }
}
</style>
