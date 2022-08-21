<template>
  <v-container>
    <v-card>
      <v-card-text>
        <div style="display:flex; justify-content:center; flex-wrap:wrap;">
          <v-btn
            color="black white--text"
            style="margin-right: 15px; margin-top: 10px;"
            :disabled="view === 'All tasks'"
            @click="taskView('All tasks')"
          >
            All tasks
          </v-btn>
          <v-btn

            color="white black--text"
            style="margin-right: 15px; margin-top: 10px;"
            :disabled="view === 'To do'"
            @click="taskView('To do')"
          >
            To do
          </v-btn>
          <v-btn
            style=" margin-top: 10px;"
            color="green white--text"
            :disabled="view === 'Done'"
            @click="taskView('Done')"
          >
            Done
          </v-btn>
          <v-btn
            color=" red white--text"
            style="margin-left: 15px; margin-top: 10px;"
            :disabled="view === 'Delete'"
            @click="taskView('Delete')"
          >
            Deleted
          </v-btn>
        </div>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  computed: {
    view () {
      return this.$store.state.taskView
    }
  },
  methods: {
    taskView (view) {
      this.$store.commit('changeView', view)
    }
  }
}
</script>

<style scoped>

div {display: flex; flex: 1;}
</style>