<template>
  <v-container>
    <v-card>
      <v-card-text v-if="tasks.length !== 0">
        <v-dialog
          v-model="dialogDelete"
          max-width="300px"
        >
          <v-card>
            <v-card-title>
              Deleting a task
            </v-card-title>
            <v-card-text>
              <div>
                Do you really want to delete this task?
              </div>
            </v-card-text>
            <v-card-actions>
              <v-spacer />
              <v-btn
                text
                @click="dialogDelete = false"
              >
                Cancel
              </v-btn>
              <v-btn
                color="red"
                text
                @click="deleteSingleTask"
              >
                Delete
              </v-btn>
              <v-spacer />
            </v-card-actions>
          </v-card>
        </v-dialog>
        <div
          v-for="(task, index) in tasks"
          v-show="taskView === 'All tasks' ? task : task.state === taskView"
          :key="index"
          style="display:flex"
        >
          <h3

            :style="task.state === 'Done' ? 'background: rgb(189, 255, 189);' : task.state === 'Delete' ? ' background: rgb(252, 96, 96); color:white;' : null"
            class="task"
            @click="changeState(task)"
          >
            {{ task.task }}
          </h3>
          <v-icon
            v-if="task.state !== 'Delete'"
            color="red"
            large
            @click="deleteTaskState(task)"
          >
            mdi-delete
          </v-icon>
          <div
            v-else-if="task.state === 'Delete'"
            style="display:flex"
          >
            <v-icon
              color="red"
              large
              @click="changeStateBack(task)"
            >
              mdi-plus
            </v-icon>
            <v-icon
              color="red"
              large
              @click="deleteSingleTaskDialog(index)"
            >
              mdi-delete
            </v-icon>
          </div>
        </div>
      </v-card-text>
      <v-card-text
        v-else
        style="padding-block: 100px;"
      >
        <h1 style="text-align:center; color: black;">
          You don't have any task in your to-do list!
        </h1>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      taskDone: false,
      dialogDelete: false,
      taskIndex: null
    }
  },
  computed: {
    tasks () {
      return this.$store.state.tasks
    },
    taskView () {
      return this.$store.state.taskView
    }
  },
  methods: {
    deleteSingleTask () {
      this.$store.commit('deleteTask', this.index)
      setTimeout(() => {
        this.dialogDelete = false
      }, 200)
    },
    deleteSingleTaskDialog (index) {
      this.taskIndex = index
      this.dialogDelete = true
    },
    deleteTaskState (task) {
      task.state = 'Delete'
    },
    changeState (task) {
      if (task.state === 'To do') {
        task.state = 'Done'
      } else if (task.state === 'Done') {
        task.state = 'To do'
      }
    },
    changeStateBack (task) {
      task.state = 'To do'
    }

  }

}
</script>

<style>
.task{
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    text-align: center;
    color: black;
    border-radius: 15px;
    padding: 10px;
    width: 100%;
    margin: 20px;

}
</style>