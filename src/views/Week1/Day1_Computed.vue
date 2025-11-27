<script setup>
import { ref, computed } from 'vue'

const price = ref(5000)
const count = ref(1)

const total = computed(() => {
  return price.value * count.value
})
const increment = () => {
  count.value++
}
const decrement = () => {
  if (count.value <= 1) {
    alert('1보다 작은 수는 입력할 수 없습니다')
    return
  }
  count.value--
}
</script>

<template>
  <div class="mission-container">
    <h2>Day 1: Computed 속성 연습</h2>
    <div>
      <p>가격: {{ price }}</p>
      <p>수량: {{ count }}</p>
      <p>총액: {{ total }}</p>

      <div class="button-group">
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.mission-container {
  padding: 20px;
  border: 1px solid #ccc;
  .button-group {
    display: flex;
    gap: 10px;
  }
}
</style>
