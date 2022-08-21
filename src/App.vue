<template>
  <v-app>
    <v-app-bar
      app
      color="black"
      dark
      dense
    >
      <v-dialog
        v-model="dialogInfo"
        max-width="300px"
      >
        <v-card>
          <v-card-title>
            How to use?
          </v-card-title>
          <v-card-text>
            <div>
              1. Set some tasks by writting and hitting "Add task" button
            </div>
            <div style="margin-top: 10px">
              2. When you'll have done your task, click on it and it will turn <span style="color:green"><strong>green</strong></span>. Click again and it will turn back to <span style="color:black"><strong>white</strong></span>, like it's undone
            </div>
            <div style="margin-top: 10px">
              3. When you accidentally delete your task, go to deleted category and hit the red  <v-icon
                color="red"
              >
                mdi-plus
              </v-icon> button, it will turn back to to-do
            </div>
          </v-card-text>
          <v-card-actions>
            <v-btn
              text
              @click="dialogInfo= false"
            >
              Cancel
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <div class="d-flex align-center">
        <h2>To-Do List</h2>
      </div>
      <v-spacer />
      <div>{{ $store.state.taskView }} category</div>
      <v-spacer />
      <v-icon @click="dialogInfo = true">
        mdi-information-outline
      </v-icon>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    dialogInfo: false
  })
}
</script>
