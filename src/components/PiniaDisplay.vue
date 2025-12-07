<script setup>
import { useCounterStore } from '@/stores/counter';

const store = useCounterStore();

// const { count } = storeToRefs(store);
</script>

<template>
  <div class="result-box">
    <span>{{ store.count }}</span>
  </div>
</template>
