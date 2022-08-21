<template>
  <v-container>
    <v-overlay
      v-if="error === true"
      opacity="0.8"
    />
    <v-alert
      v-if="error === true"
      style="position: absolute; z-index: 10; left: 50%; top: 40%; max-width: 400px; transform: translate(-50%, 40%);"
      type="error"
    >
      You didn't set any tasks in your to-do list!
    </v-alert>
    <v-card style="padding:10px">
      <v-card-text>
        <v-row>
          <v-col
            cols="12"
            md="12"
          >
            <v-text-field
              v-model="task"
              type="text"
              label="Task"
              prepend-icon="mdi-list-box-outline"
              color="black"
              outlined
              dense
              @keyup.enter="addTask"
            />
          </v-col>
        </v-row>
      </v-card-text>
      <v-dialog
        v-model="dialogDelete"
        max-width="300px"
      >
        <v-card>
          <v-card-title>
            Deleting all tasks
          </v-card-title>
          <v-card-text>
            <div>
              Do you really want to delete all your tasks?
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
              @click="deleteAllTasks"
            >
              Delete
            </v-btn>
            <v-spacer />
          </v-card-actions>
        </v-card>
      </v-dialog>

      <v-card-actions style="margin: 0 9px ">
        <v-btn
          color="red white--text"
          @click="deleteAllTasksDialog"
        >
          Delete all
        </v-btn>

        <v-spacer />
        <v-btn
          color="black white--text"
          @click="addTask"
        >
          Add task
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
export default {

  data () {
    return {
      task: '',
      error: false,
      dialogDelete: false
    }
  },
  methods: {
    addTask () {
      if (this.task === '') {
        this.error = true
        setTimeout(() => {
          this.error = false
        }, 2000)
      } else {
        const singleTask = { task: this.task, state: 'To do' }
        this.$store.commit('addTask', singleTask)
        this.task = ''
      }
    },
    deleteAllTasksDialog () {
      this.dialogDelete = true
    },
    deleteAllTasks () {
      this.$store.state.tasks = []
      setTimeout(() => { this.dialogDelete = false }, 200)
    }
  }
}
</script>

<style>

</style>
