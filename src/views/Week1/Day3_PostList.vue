<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

// 게시글 데이터 (나중에 데이터 연동 필요)
const posts = ref([
  { id: 1, title: 'Vue 3 정보하기 1일차' },
  { id: 2, title: '컴포넌트란 무엇인가?' },
  { id: 3, title: '라우터로 이동해보자!' }
]);
const products = ref([
  { id: 10, name: '노트북' },
  { id: 20, name: '마우스' }
]);

// 스크립트에서 페이지를 이동시킬 때 쓰는 도구
const router = useRouter();

// 게시글 상세보기로 이동하는 함수
const goDetail = (id) => {
  // router.push('주소')로 이동
  // 백틱(``)을 써서 주소를 조립
  router.push(`/week1/blog/${id}`);
};
</script>

<template>
  <div class="list-container">
    <h2>Day 3: 블로그 목록</h2>
    <ul>
      <li v-for="post in posts" :key="post.id">
        <span class="title">{{ post.title }}</span>
        <button @click="goDetail(post.id)">읽기</button>
      </li>
    </ul>
    <hr />
    <ul>
      <li v-for="product in products" :key="product.id">
        <RouterLink :to="`/week1/blog/${product.id}`">{{
          product.name
        }}</RouterLink>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.list-container {
  padding: 20px;
}
ul {
  list-style: none;
  padding: 0;
}
li {
  border-bottom: 1px solid #ddd;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
button {
  cursor: pointer;
  padding: 5px 10px;
}
</style>
