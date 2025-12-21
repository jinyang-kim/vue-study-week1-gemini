<template>
  <div class="skeleton-loader"></div>
</template>

<style lang="scss" scoped>
.skeleton-loader {
  width: 100%;
  height: 100%; /* 부모 크기에 맞춤 */
  min-height: 20px; /* 최소 높이 */
  background-color: #eee;
  border-radius: 4px;

  /* 핵심: 반짝이는 애니메이션 (Shimmer Effect) */
  animation: skeleton-loading 1.5s infinite ease-in-out;
}

@keyframes skeleton-loading {
  0% {
    opacity: 0.6;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0.6;
  }
}
</style>
