<template>
  <v-container>
    <v-row justify="center" align="start">
      <v-col cols="12" lg="8">
        <h2 class="text-h4 text-lg-h2 text-center mb-10 mt-5">Portfolio</h2>
        <client-only>
          <v-timeline
            :reverse="lgAndUp"
            :dense="!lgAndUp"
            :align-top="!lgAndUp"
          >
            <v-timeline-item
              v-for="(
                { color, year, points, company, title, link }, i
              ) in years"
              :key="i"
              :color="color"
              small
            >
              <template #opposite>
                <span
                  :class="`headline font-weight-bold ${color}--text`"
                  v-text="year"
                />
              </template>
              <div class="py-lg-4">
                <h2
                  class="text-h6 text-lg-h4"
                  :class="`headline font-weight-light ${color}--text`"
                >
                  {{ company }}
                </h2>
                <span
                  :class="`text-overline font-weight-bold ${color}--text ml-1`"
                  v-text="year"
                  v-if="!lgAndUp && year"
                />
                <p
                  class="font-weight-light text-caption text-lg-subtitle-2 ml-1"
                >
                  {{ title }}
                </p>
                <div>
                  <ul>
                    <li
                      v-for="(point, idx) in points"
                      :key="idx"
                      class="
                        mb-3 mb-lg-5
                        text-subtitle-2 text-lg-body-1
                        font-weight-regular
                      "
                      v-html="point"
                    />
                  </ul>
                </div>

                <v-btn
                  :color="color"
                  small
                  dark
                  v-if="link"
                  nuxt
                  :to="{ name: 'portfolio-company', params: { company: link } }"
                  outlined
                >
                  View More
                  <v-icon small class="ml-2">mdi-arrow-right</v-icon>
                </v-btn>
              </div>
            </v-timeline-item>
          </v-timeline>
        </client-only>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  computed: {
    lgAndUp() {
      return this.$vuetify.breakpoint.lgAndUp;
    }
  },
  data: () => ({
    years: [
      {
        color: 'primary',
        year: '',
        company: 'Usman Developer',
        title: '',
        points: [
          `I'm an experienced software engineer who constantly seeks out innovative solutions to everyday problems.`,
          `In my three years plus experience in this field, I've honed my analytical thinking and collaboration skills, and I love working with a team.`
        ]
      },
      {
        color: 'cyan',
        year: '2021 - Present',
        company: 'Coeus Solutions GmbH',
        title: 'Full Stack Software Engineer',
        points: [
          'Wrote server-side and client-side code using PHP and JavaScript, specifically with ReactJS and Symfony frameworks.',
          'Integrated several different APIs such as Slack, MS-Teams and Jira using NodeJS and TypeScript.'
        ],
        link: 'coeus'
      },
      {
        color: 'green',
        year: '2019 - 2021',
        company: 'IT Curves',
        title: 'Full Stack Web Developer',
        points: [
          'Joined to work on SaaS based Web Apps. UedVueJS, ReactJS, TypeScript, RxJS on frontend, NodeJS and LoopBack on backend APIs and Flutter for mobile apps.',
          'Discussed project progress with clients, collected feedback on different stages and directly addressed concerns.'
        ],
        link: 'it-curves'
      },
      {
        color: 'pink',
        year: '2019 - Present',
        company: 'Upwork Inc.',
        title: 'Independent Full Stack Web Developer',
        points: [
          'Designed and developed efficient and maintainable software according to business objectives and needs of various clients.',
          'Managed development milestones from initial steps through final delivery.',
          'Mostly used VueJS, NuxtJS on front-end and NestJS on back-end with spice of TypeScript',
          `<strong>Top Rated</strong>: <a href="https://www.upwork.com/freelancers/~01d6585638be81082c">Link to profile</a>`
        ]
      },
      {
        color: 'amber',
        year: '2017 - 2018',
        company: 'Logics Bay',
        title: 'JR. Web Developer',
        points: [
          'Planned website development, converting mockups into usable web presence with HTML, CSS, JavaScript, AJAX and jQuery.'
        ]
      }
    ]
  })
};
</script>
