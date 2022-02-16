<template>
  <v-container>
    <v-row justify="center" align="start">
      <v-col cols="12" lg="6">
        <h2 class="text-h4 text-lg-h2 text-center mb-10 mt-5">Contact Me</h2>

        <v-card class="pa-4 pa-lg-10 mb-4 rounded-xl my-card shadow" outlined>
          <v-fade-transition>
            <v-overlay :value="Loading">
              <v-progress-circular indeterminate color="white" />
            </v-overlay>
          </v-fade-transition>

          <v-form @submit.prevent="sendEmail" v-model="IsValid" ref="formRef">
            <v-text-field label="Name" v-model="Name" :rules="Rules" />
            <v-text-field label="Email" v-model="Email" :rules="Rules" />
            <v-text-field label="Subject" v-model="Subject" :rules="Rules" />
            <v-textarea
              label="Message"
              v-model="Message"
              rows="3"
              :rules="Rules"
            />

            <v-btn
              block
              color="primary"
              :disabled="!IsValid || Loading"
              type="submit"
            >
              Submit
            </v-btn>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import { init, send } from '@emailjs/browser';

export default Vue.extend({
  data() {
    return {
      Loading: false,
      IsValid: false,
      Name: null,
      Email: null,
      Subject: null,
      Message: null,
      Rules: [(v: string) => !!v || 'This field is required.']
    };
  },
  created() {
    init('user_ODReVbn3ykbuwByqUoI2J');
  },
  methods: {
    async sendEmail() {
      this.Loading = true;

      try {
        await send('service_rgio01t', 'template_ogpc48f', {
          Name: this.Name,
          Subject: this.Subject,
          Email: this.Email,
          Message: this.Message
        });

        alert('Email sent.');

        this.Name = null;
        this.Subject = null;
        this.Email = null;
        this.Message = null;

        (this.$refs.formRef as any)?.reset();
      } catch (e) {
        alert((e as Error).message);
      } finally {
        this.Loading = false;
      }
    }
  }
});
</script>
