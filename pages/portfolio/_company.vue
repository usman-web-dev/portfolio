<template>
  <v-container>
    <v-row justify="center" align="start">
      <v-col cols="12" lg="6">
        <h2 class="text-h4 text-lg-h2 text-center mb-10 mt-5">
          {{ Data.name }}
        </h2>

        <v-card
          v-for="({ name, description, link, roles, tech }, i) in Data.projects"
          :key="i"
          class="rounded-xl pa-4 mb-4"
        >
          <h2
            class="text-h6 text-lg-h4"
            :class="`headline font-weight-light primary--text`"
          >
            {{ name }}
          </h2>
          <a :href="link" class="text-caption" v-if="link">{{ link }}</a>
          <p class="font-weight-light text-caption text-lg-subtitle-2 mt-4">
            {{ description }}
          </p>

          <h5 class="text-h5 mb-3 secondary--text">My Roles</h5>
          <ul>
            <li
              v-for="(role, idx) in roles"
              :key="idx"
              class="
                mb-3 mb-lg-5
                text-subtitle-2 text-lg-body-1
                font-weight-light
              "
              v-html="role"
            />
          </ul>

          <h5 class="text-h5 mb-3 secondary--text">Tech Stack</h5>
          <ul>
            <li
              v-for="(tech, idx) in tech"
              :key="idx"
              class="
                mb-3 mb-lg-5
                text-subtitle-2 text-lg-body-1
                font-weight-light
              "
              v-html="tech"
            />
          </ul>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      data: {
        coeus: {
          name: 'Coeus Solution GmbH',
          projects: [
            {
              name: 'BRAVO',
              description:
                'BRAVO is a multi-functional employee rewards & recognition platform, tailor-made for the needs of your Millennial and Gen Z employees.',
              link: 'https://getbravo.io/',
              roles: [
                'Made slack app and successfully hosted it on slack store.',
                'Made Microsoft Teams app and successfully hosted it on Microsoft store.'
              ],
              tech: ['PHP', 'NodeJS', 'VueJS', 'NuxtJS']
            },
            {
              name: '360Dialog',
              description:
                'WhatsApp Business API & Mobile Automation Solutions',
              link: 'https://www.360dialog.com/',
              roles: [
                'Worked on JIRA app to connect WhatsApp and JIRA using plugins.'
              ],
              tech: ['NodeJS', 'Python']
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
              roles: [
                'Gathered up the requirements.',
                'Implemented from start to end.'
              ],
              tech: ['NodeJS', 'VueJS', 'LoopBack 4']
            },
            {
              name: 'BlueBox 360',
              description:
                'Generalized management dashboard, having quite powerful modules to manage out different organizations tasks, like employees/stock/retails etc.',
              roles: [
                'Worked on front-end side using VueJS.',
                'Worked as a team-lead and lead 2 developers'
              ],
              tech: ['NodeJS', 'VueJS', 'LoopBack 4', 'Vuetify']
            }
          ]
        },
        upwork: { name: 'Upwork' }
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