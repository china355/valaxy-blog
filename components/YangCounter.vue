<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)
</script>

<template>
  <div class="yang-counter">
    <p>这是一个可以点的 Vue 组件，点一下试试：</p>
    <button @click="count++">
      点了 {{ count }} 次
    </button>
  </div>
</template>

<style scoped>
.yang-counter {
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 12px;
  text-align: center;
}
.yang-counter button {
  padding: 0.5rem 1.2rem;
  border: none;
  border-radius: 999px;
  background: #3b82f6;
  color: #fff;
  cursor: pointer;
}
</style>
