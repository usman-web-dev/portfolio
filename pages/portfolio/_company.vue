<template>
  <v-container>
    <v-row justify="center" align="start">
      <v-col cols="12" lg="8" xl="6">
        <h2 class="text-h4 text-lg-h2 text-center mb-10 mt-5">
          {{ Data.name }}
        </h2>

        <v-card
          v-for="({ name, description, link, data }, i) in Data.projects"
          :key="i"
          class="pa-4 mb-4 rounded-xl my-card shadow"
          outlined
        >
          <h2
            class="text-h6 text-lg-h4"
            :class="`headline font-weight-light primary--text`"
          >
            {{ name }}
          </h2>
          <a :href="link" class="text-caption" v-if="link" target="_blank">
            {{ link }}
          </a>
          <p class="font-weight-light text-caption text-lg-subtitle-2 mt-4">
            {{ description }}
          </p>

          <div v-for="([key, value], idx) in Object.entries(data)" :key="idx">
            <div class="font-weight-bold mb-2">{{ key }}</div>

            <v-timeline align-top dense>
              <v-timeline-item
                v-for="(v, idx) in value"
                :key="idx"
                small
                :color="colors[Math.floor(Math.random() * colors.length)]"
              >
                <div>
                  {{ v }}
                </div>
              </v-timeline-item>
            </v-timeline>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      colors: [
        'success',
        'secondary',
        'primary',
        'warning',
        'amber',
        'pink',
        'grey',
        'accent'
      ],
      data: {
        personal: {
          name: 'Personal Projects',
          projects: [
            {
              name: 'Baken Eat',
              description:
                'Baken Eat was a test project to get hands-on with VuetifyJS and VueJS.',
              link: 'http://baken-eat.herokuapp.com/',
              data: {
                'My Roles': [
                  'Worked on front-end.',
                  'Made fully custom design of it.',
                  "Also worked on it's backend using Java."
                ],
                'Tech Stack': [
                  'VueJS',
                  'VuetifyJS',
                  'TypeScript',
                  'Spring Boot (Java)',
                  'Hibernate'
                ]
              }
            },
            {
              name: 'Phonebook',
              description:
                'Phonebook was a test project to get hands-on with VueSax.',
              link: 'https://usmanjavedattari.github.io/phonebook/',
              data: {
                'My Roles': [
                  'Worked on front-end.',
                  'Used stack data-structure to handle out phonebook data.',
                  'Learned VueSax 4 UI framework.'
                ],
                'Tech Stack': ['VueJS', 'VueSax', 'RxJS']
              }
            },
            {
              name: 'Algo Visualization',
              description:
                'Algo Visualization was a test project to get hands-on with Vue 3 (latest version).',
              link: 'https://usmanjavedattari.github.io/algo-visualization?dummyData=true&graphs=true',
              data: {
                'My Roles': [
                  'Got started with Vue 3.',
                  'Learned composition API.',
                  'Worked with composible functions.',
                  'Worked with graphs to show data visually.'
                ],
                'Tech Stack': ['VueJS 3', 'Bootstrap', 'ChartJS']
              }
            }
          ]
        },
        coeus: {
          name: 'Coeus Solution GmbH',
          projects: [
            {
              name: 'BRAVO',
              description:
                'BRAVO is a multi-functional employee rewards & recognition platform, tailor-made for the needs of your Millennial and Gen Z employees.',
              link: 'https://getbravo.io/',
              data: {
                'My Roles': [
                  'Made slack app and successfully hosted it on slack store.',
                  'Made Microsoft Teams app and successfully hosted it on Microsoft store.'
                ],
                'Tech Stack': ['PHP', 'NodeJS', 'VueJS', 'NuxtJS']
              }
            },
            {
              name: '360Dialog',
              description:
                'WhatsApp Business API & Mobile Automation Solutions',
              link: 'https://www.360dialog.com/',
              data: {
                'My Roles': [
                  'Worked on JIRA app to connect WhatsApp and JIRA using plugins.'
                ],
                'Tech Stack': ['NodeJS', 'Python']
              }
            }
          ]
        },
        'it-curves': {
          name: 'It Curves',
          projects: [
            {
              name: 'Our Divorce',
              description:
                '3-Step process provides divorcing couples with divorce documents guaranteed to be accepted by the courts.',
              link: 'https://ourdivorce.com/',
              data: {
                'My Roles': [
                  'Gathered up the requirements.',
                  'Implemented from start to end.'
                ],
                'Tech Stack': ['NodeJS', 'VueJS', 'LoopBack 4']
              }
            },
            {
              name: '(Hidden due to privacy)',
              description:
                'Generalized management dashboard, having quite powerful modules to manage out different organizations tasks, like employees/stock/retails etc.',
              data: {
                'My Roles': [
                  'Worked on front-end side using VueJS.',
                  'Worked as a team-lead and lead 2 developers.'
                ],
                'Tech Stack': ['NodeJS', 'VueJS', 'LoopBack 4', 'Vuetify']
              }
            },
            {
              name: '(Hidden due to privacy)',
              data: {
                'My Roles': [
                  'Converted React to VueJS.',
                  'Helped out junior developers on how to structure the project.'
                ],
                'Tech Stack': ['VueJS', '.Net MVC', 'Vuetify']
              }
            },
            {
              name: '(Hidden due to privacy)',
              data: {
                'My Roles': [
                  'Worked with junior developers to restructure the project on VueJS.',
                  'Helped out flutter developer to finalize the cross-platform app.'
                ],
                'Tech Stack': ['VueJS', 'Loopback 4', 'Vuetify', 'Flutter']
              }
            }
          ]
        }
      }
    };
  },
  computed: {
    Data() {
      return this.data[this.$route.params.company];
    }
  }
};
</script>