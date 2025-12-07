<script setup>
import { ref } from 'vue'
import UserProfile from '@/components/UserProfile.vue'

const message = ref('')

const handleAlert = (name) => {
  message.value = `${name}님이 인사를 건넸습니다! 반가워요.`
}

const totalLikes = ref(0)

const handleLike = () => {
  totalLikes.value++
}
</script>

<template>
  <div class="container">
    <h2>Day2: 컴포넌트 통신 연습</h2>
    <p class="msg-box">{{ message }}</p>
    <p class="msg-box">현재 총 좋아요: {{ totalLikes }}개</p>

    <hr />

    <UserProfile
      user-name="모비"
      user-job="FrontEnd Developer"
      :age="25"
      @alert-click="handleAlert"
      @like="handleLike"
    />

    <UserProfile
      user-name="철수"
      user-job="Designer"
      :age="30"
      @alert-click="handleAlert"
      @like="handleLike"
    />
  </div>
</template>

<style scoped>
.container {
  padding: 20px;
}
.msg-box {
  background: #e0f7fa;
  padding: 10px;
  border-radius: 4px;
  color: #006064;
  font-weight: bold;
}
</style>
