<script setup>
import SlotCard from '@/components/SlotCard.vue'
</script>

<template>
  <SlotCard>
    <template #header>
      <h1>📢 공지사항</h1>
    </template>
    <template #body>
      <p>다음 주 월요일은 휴무입니다.</p>
    </template>
  </SlotCard>
  <SlotCard>
    <template #header>
      <h1>초특가 상품</h1>
    </template>
    <template #body>
      <p>50% 할인</p>
    </template>
    <template #footer>
      <button>구매하기</button>
    </template>
  </SlotCard>
</template>
