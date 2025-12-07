<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/week1/ref">1단계: Ref</RouterLink>
      <RouterLink to="/week1/computed">3단계: Computed</RouterLink>
      <RouterLink to="/week1/watch">4단계: Watch</RouterLink>
      <RouterLink to="/week1/components">Day 2: 컴포넌트</RouterLink>
      <RouterLink to="/week1/slots">2일차 심화: Slots</RouterLink>
      <RouterLink to="/week1/blog">Day 3: 동적 라우팅</RouterLink>
    </nav>
  </header>

  <main>
    <RouterView />
  </main>
</template>

<style scoped>
header {
  display: block;
}
nav {
  padding: 20px;
  text-align: center;
  font-size: 1.2rem;
}
nav a {
  text-decoration: none;
  color: #42b983;
  margin: 0 10px;
}
nav a.router-link-active {
  font-weight: bold;
  text-decoration: underline;
}
main {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}
</style>
