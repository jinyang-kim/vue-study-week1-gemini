<template>
  <div class="card">
    <div class="card-header">
      <slot name="header"></slot>
    </div>
    <div clas="card-body">
      <slot name="body"></slot>
    </div>
    <div class="card-footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<style scoped>
.card {
  padding: 8px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  color: #333;
}
.card ~ .card {
  margin-top: 16px;
}
.card-header {
  border-bottom: 1px solid gray;
  font-weight: bold;
}
</style>
