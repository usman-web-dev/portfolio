<template>
  <v-app dark>
    <v-app-bar fixed dense>
      <v-btn
        icon
        :small="lgAndUp"
        :x-small="!lgAndUp"
        nuxt
        :to="isPortfolioRoute ? '/portfolio' : '/'"
        exact
        :style="`opacity: ${+($route.name !== 'index')}`"
      >
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>

      <client-only>
        <v-slide-x-transition hide-on-leave>
          <div
            class="d-flex mx-auto justify-center flex-wrap"
            v-if="!isPortfolioRoute"
            :key="isPortfolioRoute"
          >
            <template
              v-for="([text, name], i) in Object.entries({
                Portfolio: 'portfolio',
                Testimonials: 'testimonials',
                'Contact Me': 'contact'
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
          <div
            class="d-flex mx-auto justify-center flex-wrap"
            :key="isPortfolioRoute"
            v-else
          >
            <template
              v-for="([text, name], i) in Object.entries({
                'Coeus Solutions': 'coeus',
                'It Curves': 'it-curves',
                Personal: 'personal'
              })"
            >
              <v-btn
                color="secondary"
                text
                :small="lgAndUp"
                :x-small="!lgAndUp"
                :key="i"
                nuxt
                :to="{ name: 'portfolio-company', params: { company: name } }"
              >
                {{ text }}
              </v-btn>
            </template>
          </div>
        </v-slide-x-transition>
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
    },
    isPortfolioRoute() {
      return this.$route.fullPath.search(/\/portfolio\/(.*)/) !== -1;
    }
  },
  head() {
    const helpers = {
      upperFirst(text: string) {
        return text.charAt(0).toUpperCase() + text.slice(1);
      },

      unslugify(text: string) {
        return text
          .replace(/-/g, ' ')
          .replace(/\w\S*/g, (str) => helpers.upperFirst(str));
      }
    };

    const {
      name,
      params: { company }
    } = this.$route;

    return {
      title: helpers.upperFirst(helpers.unslugify(company ?? name))
    };
  }
});
</script>

<style lang="scss" src="../assets/styles/index.scss" />
