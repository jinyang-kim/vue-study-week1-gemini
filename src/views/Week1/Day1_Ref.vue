<!-- 메인 컴포넌트 우리가 만드는 모든 화면은 이 파일 안에서 시작됨 -->
<script setup>
import { ref, reactive } from 'vue'

// Ref
const count = ref(0)
const message = ref('Hello Vue!')

const increaseCount = () => {
  count.value++
  console.log('현재 카운트:', count.value)
}
const decreaseCount = () => {
  if (count.value <= 0) {
    alert('0보다 숫자를 내릴 수 없습니다')
    return
  }
  count.value--
  console.log('현재 카운트:', count.value)
}

// Reactive
const state = reactive({
  title: 'Vue3 학습 중',
  viewCount: 0,
})

const addViewCount = () => {
  state.viewCount++
  console.log('현재 숫자:', state.viewCount)
}
</script>

<template>
  <main>
    <section>
      <h1>{{ message }}</h1>
      <p>
        현재 숫자: <strong>{{ count }}</strong>
      </p>

      <button @click="increaseCount">숫자 올리기</button>
      <button @click="decreaseCount">숫자 내리기</button>
    </section>
    <section>
      <h1>{{ state.title }}</h1>
      <p>
        현재 숫자: <strong>{{ state.viewCount }}</strong>
      </p>

      <button @click="addViewCount">숫자 올리기</button>
    </section>
  </main>
</template>

<style scoped>
main {
  text-align: center;
  margin-top: 50px;
}
button {
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
}
</style>
