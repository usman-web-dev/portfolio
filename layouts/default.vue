<template>
  <v-app dark>
    <v-app-bar fixed dense>
      <v-btn
        icon
        :small="lgAndUp"
        :x-small="!lgAndUp"
        nuxt
        to="/"
        :style="`opacity: ${+($route.name !== 'index')}`"
      >
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>

      <client-only>
        <div class="d-flex mx-auto justify-center flex-wrap">
          <template
            v-for="([text, name], i) in Object.entries({
              Portfolio: 'portfolio',
              'Contact Me': 'contact',
              Testimonials: 'testimonials'
            })"
          >
            <v-btn
              color="secondary"
              text
              :small="lgAndUp"
              :x-small="!lgAndUp"
              :key="i"
              nuxt
              :to="{ name }"
            >
              {{ text }}
            </v-btn>
          </template>
        </div>
      </client-only>
    </v-app-bar>

    <v-main>
      <div :class="{ 'pt-12': $route.name !== 'index' }" class="fill-height">
        <v-scroll-y-reverse-transition hide-on-leave>
          <Nuxt />
        </v-scroll-y-reverse-transition>
      </div>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  computed: {
    lgAndUp() {
      return this.$vuetify.breakpoint.lgAndUp;
    }
  }
});
</script>

<style lang="scss" src="../assets/styles/index.scss" />
