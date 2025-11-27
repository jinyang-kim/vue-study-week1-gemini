<script setup>
import { ref, watch } from 'vue'

const question = ref('')
const answer = ref('질문을 기다리는 중...')

// watch(감시할_데이터, (새로운값, 이전값) => { ... })
watch(question, (newVal) => {
  if (newVal.includes('?')) {
    answer.value = '물음표를 감지했습니다! 대답을 생각 중입니다...'
  } else {
    answer.value = '질문을 입력할 때는 물음표(?)를 붙여주세요.'
  }
})

// Mission
const temperature = ref(20)
const status = ref('정상')

const plusTemperature = () => {
  temperature.value++
}

watch(temperature, (newVal) => {
  if (newVal >= 30) {
    status.value = '위험! 온도가 너무 높습니다!'
  } else {
    status.value = '정상'
  }
})
</script>

<template>
  <div class="mission-container">
    <h2>Day 1: Watch 연습</h2>
    <p>질문하기: <input v-model="question" /></p>
    <p>{{ answer }}</p>
  </div>
  <div class="mission-container">
    <h2>Day 1: Watch 미션</h2>
    <p>현재 온도: {{ temperature }}</p>
    <p>상태: {{ status }}</p>
    <button @click="plusTemperature">온도 올리기</button>
  </div>
</template>
