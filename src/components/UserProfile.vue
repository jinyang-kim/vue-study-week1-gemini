<script setup>
// defineProps: 부모에게 받은 데이터의 "이름"과 "타입"을 정의합니다.
// 자식은 이 데이터를 "읽기 전용"으로 사용할 수 있습니다. (직접 수정 금지)
const props = defineProps({
  userName: String,
  userJob: String,
  age: Number,
})

// defineEmits: 부모에게 보낼 '신호(이벤트)의 이름'을 등록
const emit = defineEmits(['alert-click', 'like'])

const sendAlert = () => {
  // emit('이벤트명', 전달한 데이터): 부모에게 이벤트를 발생시킵니다.
  emit('alert-click', props.userName)
}
const sendLike = () => {
  emit('like')
}
</script>

<template>
  <div class="profile-card">
    <h3>이름: {{ userName }}</h3>
    <p>직업: {{ userJob }}</p>
    <p>니이: {{ age }}</p>

    <button @click="sendAlert">인사하기 👋</button>
    <button @click="sendLike">좋아요 ❤️</button>
  </div>
</template>

<style scoped>
.profile-card {
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 8px;
  background-color: #f9f9f9;
  max-width: 300px;
  margin-bottom: 10px;
}
button {
  background-color: #42b983;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
}
</style>
