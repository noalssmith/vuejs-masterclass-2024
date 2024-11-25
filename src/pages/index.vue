<script setup lang="ts"></script>

<template>
  <div>
    <p>Home Page</p>
    <RouterLink :to="{ name: '/projects/[id]', params: { id: 1 } }">Go to projects</RouterLink>
  </div>
</template>

<style scoped></style>
