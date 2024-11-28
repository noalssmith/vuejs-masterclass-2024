<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <div>
    <p>Project {{ route.params }}</p>
  </div>
</template>

<style scoped></style>
