<script setup lang="ts">
import { tasksWithProjectsQuery, type TasksWithProject } from '@/utils/supaQueries'
import { taskColumns } from '@/utils/tableColumns/tasksColumns'

usePageStore().pageData.title = 'Tasks'

const tasks = ref<TasksWithProject | null>()

const getTasks = async () => {
  const { data, error, status } = await tasksWithProjectsQuery

  if (error) useErrorStore().setError({ error, customCode: status })

  tasks.value = data
}

await getTasks()
</script>

<template>
  <DataTable v-if="tasks" :columns="taskColumns" :data="tasks" />
</template>
