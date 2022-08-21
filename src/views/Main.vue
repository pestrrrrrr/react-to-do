<template>
  <div>
    <add-task />

    <show-tasks />
    <task-list />
  </div>
</template>

<script>
import AddTask from '@/components/AddTask.vue'
import TaskList from '@/components/TaskList.vue'
import ShowTasks from '@/components/ShowTasks.vue'

export default {
  name: 'MainPage',
  components: {
    AddTask,
    TaskList,
    ShowTasks

  }

}
</script>
