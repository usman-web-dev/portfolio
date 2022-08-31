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
          v-for="([icon, name], i) in Object.entries({
            upwork: 'https://www.upwork.com/freelancers/~01d6585638be81082c',
            github: 'https://github.com/usman-web-dev',
            ...(noPersonal
              ? {}
              : {
                  linkedin:
                    'https://www.linkedin.com/in/muhammad-usman-javed-9357591a9',
                  facebook:
                    'https://www.facebook.com/profile.php?id=100013610145527',
                  'skype-business': 'https://join.skype.com/invite/uINIewrP5BOt'
                })
          })"
          :key="i"
        >
          <v-btn
            icon
            :color="hover ? 'primary' : 'secondary'"
            :href="name"
            target="_blank"
          >
            <v-icon v-if="icon !== 'upwork'">mdi-{{ icon }}</v-icon>
            <Upwork
              v-else
              :color="
                $vuetify.theme.currentTheme[hover ? 'primary' : 'secondary']
              "
            />
          </v-btn>
        </v-hover>
      </div>

      <div v-if="!noPersonal">
        <div class="mt-3 mt-lg-5">
          <v-btn
            small
            color="primary"
            text
            class="px-0"
            href="https://drive.google.com/file/d/15-HW5aaoNKx8e39ZWLiA50xfxdSlmgEN/view"
            target="_blank"
          >
            <v-icon small class="mr-2">mdi-download</v-icon>
            Download CV
          </v-btn>
        </div>
        <v-btn
          small
          color="primary"
          text
          class="px-0"
          href="https://drive.google.com/file/d/1n18QNPD4HIXPJM25mftJthCsn7HfvHDU/view"
          target="_blank"
        >
          <v-icon small class="mr-2">mdi-download</v-icon>
          Download Cover Letter
        </v-btn>
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
  },
  head() {
    return {
      titleTemplate: 'Usman Dev'
    };
  },
  computed: {
    noPersonal() {
      return this.$route.query.personal === '0';
    }
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
