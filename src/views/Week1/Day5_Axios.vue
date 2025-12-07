<script setup>
import { ref } from 'vue';
import api from '@/api';

const posts = ref([]); // 데이터를 담을 빈 배열
const users = ref([]);
const isLoading = ref(false); // 로딩 상태
const isUserLoading = ref(false); // 로딩 상태
const errorMessage = ref(''); // 에러 메시지

const fetchPosts = async () => {
  try {
    //요청 시작: 로딩 켜고 에러 메시지 초기화
    isLoading.value = true;
    errorMessage.value = '';

    // 서버에 데이터 요청 (GET 요청)
    // await 키워드를 사용하여 비동기 작업이 완료될 때까지 기다림 (데이터 올 때까지 기다림!!)
    const response = await api.get('/posts');

    // 받아온 데이터를 변수에 넣는다
    // 화면에 5개만 보여주기 위해 slice 사용
    posts.value = response.data.slice(0, 5);
  } catch (error) {
    // 에러 발생 시 처리
    console.error(error);
    errorMessage.value = '데이터를 불러오는 데 실패했습니다.';
  } finally {
    // 성공하든 실패하든 로딩 종료
    isLoading.value = false;
  }
};

const fetchUsers = async () => {
  try {
    //요청 시작: 로딩 켜고 에러 메시지 초기화
    isUserLoading.value = true;
    errorMessage.value = '';

    // 서버에 데이터 요청 (GET 요청)
    // await 키워드를 사용하여 비동기 작업이 완료될 때까지 기다림 (데이터 올 때까지 기다림!!)
    const response = await api.get('/users');

    // 받아온 데이터를 변수에 넣는다
    users.value = response.data;
  } catch (error) {
    // 에러 발생 시 처리
    console.error(error);
    errorMessage.value = '데이터를 불러오는 데 실패했습니다.';
  } finally {
    // 성공하든 실패하든 로딩 종료
    isUserLoading.value = false;
  }
};
</script>

<template>
  <div class="axios-container">
    <div>
      <h2>Day 5: API 통신 (Axios)</h2>

      <button @click="fetchPosts" :disabled="isLoading">
        {{ isLoading ? '로딩 중...' : '데이터 불러오기' }}
      </button>

      <p v-if="errorMessage" class="error">{{ errorMessage }}</p>

      <ul v-if="posts.length > 0" class="post-list">
        <li v-for="post in posts" :key="post.id">
          <h4>{{ post.title }}</h4>
          <p>{{ post.body }}</p>
        </li>
      </ul>
    </div>
    <div>
      <h2>Day 5: API 통신 (Axios - 미션)</h2>

      <button @click="fetchUsers" :disabled="isUserLoading">
        {{ isLoading ? '로딩 중...' : '데이터 불러오기' }}
      </button>

      <p v-if="errorMessage" class="error">{{ errorMessage }}</p>

      <ul v-if="users.length > 0" class="post-list">
        <li v-for="user in users" :key="user.id">
          <h4>{{ user.name }}</h4>
          <p>{{ user.email }}</p>
          <p>{{ user.phone }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.axios-container {
  padding: 20px;

  button {
    background-color: #42b983;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1rem;

    &:disabled {
      background-color: #ccc;
      cursor: not-allowed;
    }
  }

  .error {
    color: red;
    font-weight: bold;
    margin-top: 10px;
  }

  .post-list {
    list-style: none;
    padding: 0;
    margin-top: 20px;

    li {
      border: 1px solid #ddd;
      margin-bottom: 10px;
      padding: 15px;
      border-radius: 8px;
      background: #fdfdfd;

      h4 {
        margin: 0 0 5px 0;
        color: #333;
      }
      p {
        margin: 0;
        color: #666;
        font-size: 0.9rem;
      }
    }
  }
}
</style>
