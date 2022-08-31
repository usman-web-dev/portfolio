<template>
  <v-container>
    <v-row justify="center" align="start">
      <v-col cols="12" xl="8">
        <h2 class="text-h4 text-lg-h2 text-center mb-10 mt-5">Portfolio</h2>
        <client-only>
          <v-card class="pr-4 pa-lg-10 mb-4 rounded-xl my-card shadow" outlined>
            <v-timeline
              :reverse="lgAndUp"
              :dense="!lgAndUp"
              :align-top="!lgAndUp"
            >
              <v-timeline-item
                v-for="(
                  { color, year, points, company, title, link, linkText }, i
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
                    class="
                      font-weight-light
                      text-caption text-lg-subtitle-2
                      ml-1
                    "
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
                        v-html="$md.render(point)"
                      />
                    </ul>
                  </div>

                  <v-btn
                    :color="color"
                    small
                    dark
                    v-if="link || linkText"
                    nuxt
                    :to="{
                      name: 'portfolio-company',
                      params: { company: link }
                    }"
                    outlined
                  >
                    {{ linkText || 'View More' }}
                    <v-icon small class="ml-2">mdi-arrow-right</v-icon>
                  </v-btn>
                </div>
              </v-timeline-item>
            </v-timeline>
          </v-card>
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
        company: 'Muhammad Usman Javed',
        title: '',
        points: [
          `I'm an experienced software engineer who constantly seeks out innovative solutions to everyday problems.`,
          `In my four years plus experience in this field, I've honed my analytical thinking and collaboration skills, and I love working with a team.`,
          `I keep myself up to date with the latest technologies and concentrates on customers' ideas and wishes.`,
          `I am eager to work on challenging software development and engineering projects.`,
          `**Current Focus:** Vue/Nuxt 3, E2E Testing, Web 3`
        ],
        link: 'personal',
        linkText: 'Personal Projects'
      },
      {
        color: 'green',
        year: '2019 - Present',
        company: 'Freelance',
        title: 'Senior Software Engineer',
        points: [
          `Designed and developed efficient and maintainable software following various clients' business objectives and needs.`,
          'Managed development milestones from initial steps to final delivery.',
          'Mostly used Vue/NuxtJS/React on the front end, and NestJS/Laravel on the back end with spice of TypeScript.',
          'Used agile scrum and kanban workflows on Jira with GitHub as version control.',
          '**Visit profiles:** [Upwork](https://www.upwork.com/freelancers/~01d6585638be81082c), [Toptal](https://www.toptal.com/resume/muhammad-usman-javed)'
        ],
        link: 'freelance'
      },
      {
        color: 'cyan',
        year: '2021 - 2022',
        company: 'Coeus Solutions GmbH',
        title: 'Software Engineer',
        points: [
          'Wrote server-side and client-side code using PHP and JavaScript, specifically with React and Symfony frameworks.',
          'Integrated several different APIs, such as Slack, Microsoft Teams, WhatsApp Business, and Jira, using NodeJS and TypeScript.',
          'Strictly followed "Agile Kanban" practices on Jira under supervision of an experienced project manager.',
          'Followed proper development workflow including Jira tickets, standard pull requests and code reviews with the team.',
          'Collaborated with the CEO on their products, including [WorkHub](https://workhub.ai) and [BRAVO](https://getbravo.io).'
        ],
        link: 'coeus'
      },
      {
        color: 'pink',
        year: '2019 - 2021',
        company: 'IT Curves',
        title: 'Full Stack Web Developer',
        points: [
          'Joined the company to work on SaaS-based web-apps. Used Vue, React, TypeScript, RxJS on the front end, NodeJS and Loopback on the back end APIs, and Flutter for mobile apps.',
          'Discussed the project progress with clients, collected feedback on different stages, and directly addressed concerns.',
          'Assisted new team members in onboarding and helped them learn technology stacks.'
        ],
        link: 'it-curves'
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
