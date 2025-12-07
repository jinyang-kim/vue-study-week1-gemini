<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

// 현재 주소(route)의 정보를 가져옴
const route = useRoute()

// route.params 안에 주소창의 변수들이 들어있음
// 예: /post/100으로 접속하면 -> route.params.id = 100이 됨
const postId = route.params.id

// ID에 따라 내용을 다르게 보여주는 척 함
const content = computed(() => {
  return `이것은 ${postId}번 게시물의 상세 내용입니다.`
})
</script>

<template>
  <div class="detail-page">
    <h2>게시글 상세조회</h2>
    <p>
      현재 글 번호: <strong>{{ postId }}</strong>
    </p>
    <div class="box">
      {{ content }}
    </div>

    <RouterLink to="/week1/blog">목록으로 돌아가기</RouterLink>
  </div>
</template>

<style scoped>
.detail-page {
  padding: 20px;
}
.box {
  background: #eee;
  padding: 20px;
  margin: 20px 0;
  border-radius: 8px;
  color: #333;
}
</style>
