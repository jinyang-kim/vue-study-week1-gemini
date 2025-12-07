<script setup>
import { storeToRefs } from 'pinia';
import { useCounterStore } from '@/stores/counter';
import PiniaDisplay from '@/components/PiniaDisplay.vue';

// 스토어 가져오기
const store = useCounterStore();

// [중요] 값(ref/computed)을 가져올때는 storeToRefs를 사용해야 반응형이 유지됨
// 그냥 cont { count } = store; 하면 숫자가 안 바뀜
const { count, doubleCount } = storeToRefs(store);

// 함수(Actions)는 그냥 꺼내도 됨
const { increment } = store;
</script>

<template>
  <div class="pinia-container">
    <h2>Day 4: Pinia 상태 관리</h2>

    <div class="result-box">
      <p>
        현재 값: <span>{{ count }}</span>
      </p>
      <p>
        두배 값: <span>{{ doubleCount }}</span>
      </p>
    </div>

    <PiniaDisplay />

    <button @click="increment">카운트 증가 (+)</button>
  </div>
</template>

<style lang="scss" scoped>
.pinia-container {
  padding: 20px;
  color: #333;

  h2 {
    color: #333;
    margin-bottom: 20px;
  }

  .result-box {
    background-color: #f9f9f9;
    padding: 20px;
    border-radius: 8px;
    margin-bottom: 15px;
    border: 1px solid #eee;

    p {
      font-size: 1.2rem;
      margin: 10px 0;

      span {
        font-weight: bold;
        color: #42b983; // Vue Green
      }
    }
  }

  button {
    background: #42b983;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 4px;
    font-size: 1rem;
    cursor: pointer;
    transition: background 0.2s;

    &:hover {
      background: rgba(#42b983, 0.1);
    }
  }
}
</style>
