<template>
  <section
    id="hero"
    class="d-flex flex-column justify-center text-center text-lg-left"
  >
    <v-container>
      <h1 class="text-lg-h2 text-h4 font-weight-medium mb-2 mb-lg-5">
        Usman Developer
      </h1>
      <p class="text-h6 text-lg-h5 font-weight-regular">
        I do
        <client-only>
          <VueTyper
            :text="[
              'Vue JS',
              'React JS',
              'Nest JS',
              'Node JS',
              'TypeScript',
              'RxJS',
              'Tailwind CSS',
              'JavaScript',
              'Vuetify'
            ]"
            :repeat="Infinity"
            :shuffle="true"
          />
        </client-only>
      </p>
      <div class="d-flex gap-1 mt-5 justify-center justify-lg-start">
        <v-hover
          #default="{ hover }"
          v-for="(icon, i) in [
            'twitter',
            'facebook',
            'instagram',
            'skype-business',
            'linkedin'
          ]"
          :key="i"
        >
          <v-btn
            icon
            :color="hover ? 'primary' : 'secondary'"
            :class="{ 'text--lighten-1': !hover }"
          >
            <v-icon>mdi-{{ icon }}</v-icon>
          </v-btn>
        </v-hover>
      </div>
    </v-container>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';

if (process.browser) {
  var VueTyper = require('vue-typer').VueTyper;
}

export default Vue.extend({
  components: {
    VueTyper
  }
});
</script>

<style lang="scss" scoped>
#hero {
  width: 100%;
  height: 100vh;
  background: url('/images/hero-bg.jpg') top right no-repeat;
  background-size: cover;
  position: relative;

  &::before {
    content: '';
    background: rgba(255, 255, 255, 0.6);
    position: absolute;
    inset: 0;
  }

  & > * {
    z-index: 1;
  }
}
</style>
