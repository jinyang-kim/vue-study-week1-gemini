<script setup>
defineProps({
  isOpen: Boolean // 모달 열림 여부
});

const emit = defineEmits(['close']);

const close = () => {
  emit('close');
};
</script>

<template>
  <Teleport to="body">
    <Transition name="modal">
      <div v-if="isOpen" class="modal-backdrop" @click.self="close">
        <div class="modal-content">
          <slot></slot>
          <div class="actions">
            <button @click="close">닫기</button>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style lang="scss" scoped>
.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgb(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.modal-content {
  background: white;
  padding: 30px;
  border-radius: 12px;
  min-width: 300px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
}

.actions {
  margin-top: 20px;
  button {
    padding: 8px 16px;
    cursor: pointer;
  }
}

.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}
.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
</style>
