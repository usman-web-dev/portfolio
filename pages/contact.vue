<template>
  <v-container>
    <v-row justify="center" align="start">
      <v-col cols="12" lg="6">
        <h2 class="text-h4 text-lg-h2 text-center mb-10 mt-5">Contact Me</h2>

        <v-card class="pa-4 pa-lg-10 mb-4 rounded-xl my-card shadow" outlined>
          <v-form>
            <v-text-field label="Name" />
            <v-text-field label="Email" />
            <v-textarea label="Message" rows="3" />

            <v-btn block color="primary">Submit</v-btn>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
