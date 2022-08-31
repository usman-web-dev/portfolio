<template>
  <v-container>
    <v-row justify="center" align="start">
      <v-col cols="12" lg="8" xl="6">
        <h2 class="text-h4 text-lg-h2 text-center mt-5">
          {{ Data.name }}
        </h2>

        <a
          :href="Data.link"
          class="d-block text-center"
          v-if="Data.link"
          target="_blank"
        >
          {{ Data.link }}
        </a>

        <v-card
          v-for="({ name, description, link, data }, i) in Data.projects"
          :key="i"
          class="pa-4 mb-4 rounded-xl my-card shadow"
          :class="{ 'mt-10': !i }"
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
            <div class="font-weight-bold">{{ key }}</div>

            <v-timeline align-top dense class="text-body-2 text-lg-body-1">
              <v-timeline-item
                v-for="(v, idx) in value"
                :key="idx"
                small
                :color="colors[Math.floor(Math.random() * colors.length)]"
                class="pb-0 pb-lg-2"
              >
                <div v-html="$md.render(v)" />
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
        'accent',
        'green',
        'red',
        'orange',
        'blue'
      ],
      data: {
        freelance: {
          name: 'Freelance',
          projects: [
            {
              name: 'Tedera',
              description:
                'A food/product ordering web-app based on VueJS/NuxtJS/NestJS ecosystem.',
              link: 'https://admin.tedera.app/',
              data: {
                'My Roles': [
                  'Gathering requirements from client and doing project management on Jira throughout the project.',
                  'Discussing milestones, related features and implementing upfront.',
                  'Realtime chat and ordering system using Socket.IO.',
                  'Implementing SMS OTP verification services.',
                  'Writing custom plugin in NuxtJS for Google Maps.',
                  'Converting pixel-perfect designs from figma using Vuetify.',
                  'Adding support for multi-language.',
                  'Adding "Role based Authorization" on API endpoints using NestJS Guards.',
                  'Handling complex logics on order/delivery management, for example auto canceling the order is not accepted, auto opening and closing stores on their respective timings, etc.'
                ],
                'Tech Stack': [
                  'VueJS',
                  'VuetifyJS',
                  'TypeScript',
                  'NuxtJS',
                  'NestJS',
                  'MySQL',
                  'TypeORM',
                  'Figma',
                  'Socket.IO'
                ]
              }
            },
            {
              name: 'Mockup +',
              description:
                'NuxtJS/Laravel based eCommerce web-app for publishing and selling free, premium and high quality mockups.',
              link: 'https://web.mockup-plus.com/',
              data: {
                'My Roles': [
                  'Gathering requirements from client and doing project management on Jira throughout the project.',
                  'Discussing milestones, related features and implementing upfront.',
                  'Implementing consumer end portal and admin panel from start to end.',
                  'Collaborating with the backend developer for the APIs.',
                  'Adding Stripe for secure payments.',
                  'Converting pixel-perfect designs from Adobe XD using Vuetify.',
                  'Using MJML for creating high quality and responsive email templates.',
                  'Supporting the dynamic and static blog posts on the consumer-end.',
                  'Adding interactive charts on the admin panel for revenue, traffic and downloads, etc.'
                ],
                'Tech Stack': [
                  'VueJS',
                  'VuetifyJS',
                  'TypeScript',
                  'NuxtJS',
                  'Adobe XD',
                  'MJML',
                  'Chart.JS'
                ]
              }
            },
            {
              name: 'EduX 360',
              description:
                'VueJS/NuxtJS/Strapi based web-app that combines features like class management, admin management, meetings, attendance, assessments, and many others needed for education management. It is meant to be an all-in-one educational management tool.',
              data: {
                'My Roles': [
                  'Gathering requirements and adding on Jira for project management.',
                  'Used Strapi as a headless CMS for quick backend APIs development.',
                  'Adding interactive and draggable widgets on the dashboard for viewing different data like total students, total enrolled courses, etc.',
                  'Adding "Role based Authorization" in NuxtJS and Strapi for protecting access for API endpoints.',
                  'Full custom design using VuetifyJS.',
                  'Using popular nuxt modules to make the web-app fully interactive including Strapi-Nuxt and Vuetify-Nuxt, etc.'
                ],
                'Tech Stack': [
                  'VueJS',
                  'VuetifyJS',
                  'TypeScript',
                  'NuxtJS',
                  'Strapi'
                ]
              }
            },
            {
              name: 'Booking automation for YouCanBookMe',
              description:
                'VueJS/NuxtJS based web-app that allow you upload a CSV file having booking data and it will create the bookings in bulk.',
              link: 'https://youcanbookme.netlify.app/',
              data: {
                'My Roles': [
                  'Gathering requirements and studying YouCanBookMe Rest APIs.',
                  'Adding drag-drop upload component for CSV/XLS/XLSX file upload.',
                  'Parsing data from the uploaded file and showing in a table for verification.',
                  'Using JavaScript concurrency model for creating bookings in parallel and showing pending/done/fail status next to each row.'
                ],
                'Tech Stack': [
                  'VueJS',
                  'VuetifyJS',
                  'TypeScript',
                  'NuxtJS',
                  'Dropzone.JS'
                ]
              }
            },
            {
              name: 'Fittler',
              description:
                'Web portal for a fitness tracker mobile app based on VueJS/NuxtJS/Express.',
              link: 'https://fittler.herokuapp.com/',
              data: {
                'My Roles': [
                  'Discussing requriements and finalizing the tech stack.',
                  'Adding several interactive charts for showing user fitness activity done from mobile app.',
                  'Allowing admins to manage users and diet plans.',
                  'Using Firebase as primary database and for authentication.',
                  'Showing monthly and weekly leaderboards where users can see their placings which will motivate them to do more fitness acitivites.',
                  'Collaborating with mobile developer and discussing Firebase queries from Firestore.'
                ],
                'Tech Stack': [
                  'VueJS',
                  'VuetifyJS',
                  'TypeScript',
                  'NuxtJS',
                  'Firebase',
                  'Firestore',
                  'Chart.JS'
                ]
              }
            },
            {
              name: 'Its Lit',
              description: 'VueJS based custom blog website.',
              link: 'https://itslit.app/',
              data: {
                'My Roles': [
                  'Using Firebase as primary database and for authentication.',
                  'Allowing admin to create, edit, delete the posts from admin panel.',
                  'Adding social media login using Firebase authentication.',
                  'Supporting profile picture uploads using Firebase Storage.'
                ],
                'Tech Stack': [
                  'VueJS',
                  'VuetifyJS',
                  'TypeScript',
                  'Firebase',
                  'Firestore',
                  'RxJS'
                ]
              }
            },
            {
              name: 'Digital Invigilator',
              description: 'Laravel based website for quick class quizzes.',
              data: {
                'My Roles': [
                  'Discussing requriements and finalizing the tech stack.',
                  'Allowing teachers to create create subjects, sub-topics and adding difficulty levels for quizzes.',
                  'Allowing students to attempt quizzes under the time limit put by the teacher.',
                  'Showing interactive charts to student using Chart.JS for performance review.',
                  'Handling complex difficulty level logics, for example if student attempt wrong answer, then system will try to find a easy question, etc.'
                ],
                'Tech Stack': [
                  'Laravel',
                  'HTML & CSS',
                  'Boostrap',
                  'Croppie',
                  'Chart.JS'
                ]
              }
            }
          ]
        },
        personal: {
          name: 'Personal Projects',
          projects: [
            {
              name: 'My Portfolio',
              link: 'https://usman-dev.com/',
              data: {
                'Tech Stack': [
                  'VueJS',
                  'NuxtJS',
                  'VuetifyJS',
                  'TypeScript',
                  'Markdown'
                ]
              }
            },
            {
              name: 'Baken Eat',
              description:
                'It was a test project to get hands-on with custom design using VuetifyJS and VueJS.',
              link: 'http://baken-eat.herokuapp.com/',
              data: {
                'My Roles': [
                  `Understading Vuetify 2 and Vue 2 at advanced level.`,
                  'Learning how to customize designs, SCSS variables and icons in Vuetify.',
                  `Learning Java, Spring Boot and Hibernate throghout the project development.`,
                  'Going through popular design patterns including repository and singleton patterns.'
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
                'It was a test project to get hands-on with VueSax 4 design framework.',
              link: 'https://usmanjavedattari.github.io/phonebook/',
              data: {
                'My Roles': [
                  'Learning service-class and singleton design patterns using RxJS.',
                  'Using stack data-structure to handle out phonebook data.',
                  'Learing VueSax 4 UI framework.'
                ],
                'Tech Stack': ['VueJS', 'VueSax 4', 'RxJS']
              }
            },
            {
              name: 'Algo Visualization',
              description:
                'Algo Visualization was a test project to get hands-on with Vue 3 and some of sorting algorithms.',
              link: 'https://usmanjavedattari.github.io/algo-visualization?dummyData=true&graphs=true',
              data: {
                'My Roles': [
                  'Getting started with Vue 3.',
                  'Learning composition API.',
                  'Working with graphs to show algorithms data visually.',
                  'Getting introduced to some of the fastest sorting algorithms.'
                ],
                'Tech Stack': ['VueJS 3', 'Bootstrap', 'ChartJS']
              }
            }
          ]
        },
        coeus: {
          name: 'Coeus Solution GmbH',
          link: 'https://coeus-solutions.com/',
          projects: [
            {
              name: 'BRAVO',
              description:
                'BRAVO is a multi-functional employee rewards & recognition platform, tailor-made for the needs of your Millennial and Gen Z employees.',
              link: 'https://getbravo.io/',
              data: {
                'My Roles': [
                  'Working with the backend developer for writing custom integrations with different platforms.',
                  'Using 3rd party client SDKs to write custom integrations.',
                  'Using AWS services for deployment, GitHub for version control and Jira for project management.',
                  'Using DynamoDB as a NoSQL Database for storing user states.',
                  'Custom integrations include: a Slack App and a Microsoft Teams App.'
                ],
                'Tech Stack': [
                  'PHP',
                  'NodeJS',
                  'VueJS',
                  'NuxtJS',
                  'Laravel',
                  'TailwindCSS'
                ]
              }
            },
            {
              name: 'Slack App (BRAVO)',
              description: `NodeJS based BRAVO's app lets you integrate with Slack and recognize your employees' achievements within your team conversations.`,
              link: 'https://slack.com/apps/A028YV2LBEW-bravo/',
              data: {
                'My Roles': [
                  `Using Slack's NodeJS Bolt framework for building the app.`,
                  'Working with the backend developer for several APIs requried for this app.',
                  'Studying other Slack apps for getting ideas on how these apps work.',
                  `Using Slack Block Kit for building it's user interfaces.`,
                  'Learning how to publish Slack apps on their store.',
                  'Getting in touch with Slack support for app reviewal process.'
                ],
                'Tech Stack': [
                  'NodeJS',
                  'Slack Bolt framework',
                  'PHP',
                  'Laravel'
                ]
              }
            },
            {
              name: 'Microsoft Teams App (BRAVO)',
              description: `NuxtJS/NodeJS based app which lets you give employee-to-employee rewards easily with MS Teams integration with BRAVO.`,
              link: 'https://appsource.microsoft.com/en-us/product/office/WA200003694/',
              data: {
                'My Roles': [
                  'Rendering a NuxtJS app from a custom Express server.',
                  'Learning the all new TailwindCSS 3 and implementing custom UI with VueJS/NuxtJS ecosystem.',
                  `Using the NodeJS based MS Teams bot-framework for building the app.`,
                  'Working with the backend developer for several APIs requried for this app.',
                  'Studying other MS Teams apps for getting ideas on how these apps work.',
                  'Learning how to publish MS Teams apps on their store.',
                  'Getting in touch with MS Teams support for app reviewal process.'
                ],
                'Tech Stack': [
                  'PHP',
                  'NodeJS',
                  'VueJS',
                  'NuxtJS',
                  'Laravel',
                  'TailwindCSS'
                ]
              }
            },
            {
              name: '360Dialog',
              description:
                'WhatsApp Business API & Mobile Automation Solutions.',
              link: 'https://360dialog.com/',
              data: {
                'My Roles': [
                  'Studying WhastApp Business API (WABA) documentation.',
                  'Understading how a Jira app is developed and start from scratch.',
                  'Learning the Jira workflow, status and transitions REST APIs.',
                  `Used Jira's ReactJS UI components for user interfaces.`,
                  'Connect WABA from Python to Jira NodeJS app.',
                  'Getting mentorship from my senior on Python complexities.',
                  'Using Redis as a cache layer and also as a database for storing Jira app installations.'
                ],
                'Tech Stack': ['NodeJS', 'NestJS', 'Python', 'Redis', 'ReactJS']
              }
            },
            {
              name: 'WorkHub',
              description:
                'WorkHub enables hybrid work in organizations to increase engagement, productivity, and employee morale.',
              link: 'http://workhub.ai/',
              data: {
                'My Roles': [
                  'Work on daily tasks by collaborating with the team and the lead.',
                  'Strictly follow confluence documentation written by the system architect.',
                  'Follow pull request structure and do code reviews accordingly.',
                  'Working on microservices architecture based on Symfony (PHP) and ReactJS.',
                  'Handling real-time communication through NodeJS based Socket-Cluster SDK.',
                  'CI/CD using AWS ECS services.'
                ],
                'Tech Stack': [
                  'Symfony',
                  'ReactJS',
                  'Api Platform',
                  'Microservices architecture',
                  'Socket Cluster',
                  'AWS services'
                ]
              }
            },
            {
              name: 'Connect (WorkHub)',
              description:
                'ReactJS/Symfony based web-app which is packed with everything needed to build a reliable employee communication and collaboration tool.',
              link: 'https://workhub.ai/connect/',
              data: {
                'My Roles': [
                  'Doing code reviews with the team and the lead.',
                  'Working on the chat module and improving the chat with certain optimizations.',
                  'Adding support for WYSIWYG editor support in chat.',
                  'Discussing and fixing bugs related to video calling module with the team.',
                  'Adding @ mentions in the chat.'
                ],
                'Tech Stack': [
                  'Symfony',
                  'ReactJS',
                  'Api Platform',
                  'Socket Cluster',
                  'AWS services'
                ]
              }
            },
            {
              name: 'Scheduling (WorkHub)',
              description:
                'ReactJS/Symfony based web-app which let you organize all your professional meetings with the smart scheduling tool that can save your time, effort, and money.',
              link: 'https://workhub.ai/products/workhub-scheduling-appointment-scheduling-software/',
              data: {
                'My Roles': [
                  'Doing code reviews with the team and the lead.',
                  'Exploring Cronofy JavaScript and PHP SDKs and configuring it according to the requirements.',
                  'Adding an option to easy sync with all calendars including Google, Apple and Office, etc.',
                  'Providing support from WorkHub Connect to book meetings in WorkHub Scheduling.',
                  'Support for marking available and unavailable slots.'
                ],
                'Tech Stack': [
                  'Cronofy',
                  'Symfony',
                  'ReactJS',
                  'Api Platform',
                  'AWS services'
                ]
              }
            },
            {
              name: 'Admin (WorkHub)',
              description:
                'ReactJS/Symfony based web-app which let you manage all WorkHub apps at one place.',
              link: 'https://app.workhub.ai',
              data: {
                'My Roles': [
                  'Doing code reviews with the team and the lead.',
                  `Syncing users' data across all the WorkHub apps, i.e., CRUD updates.`,
                  'Adding employee attendance with the support of exporting in different extensions and to different integrations.',
                  'Integrating 3rd party HR systems into the portal for exporting employees and attendance including PeopleHR, etc.'
                ],
                'Tech Stack': [
                  'Cronofy',
                  'Symfony',
                  'ReactJS',
                  'Api Platform',
                  'AWS services',
                  'Socket Cluster'
                ]
              }
            }
          ]
        },
        'it-curves': {
          name: 'IT Curves',
          link: 'https://itcurves.com/',
          projects: [
            {
              name: 'Our Divorce',
              description:
                'A VueJS and NodeJS based web-app, which is a 3-Step process provides divorcing couples with divorce documents guaranteed to be accepted by the courts.',
              link: 'https://ourdivorce.com/',
              data: {
                'My Roles': [
                  'Gathering up the requirements from the client.',
                  'Working on dynamic forms, such as rendering survey questions from complex JSON.',
                  `Handling complex scenarios regarding spouses' data conflicts.`,
                  'User payment subscriptions using Stripe.',
                  'Showing interactive charts and calendars for different data visualizations.',
                  'Doing continuous integration (CI/CD) with GitLab and AWS services.',
                  `Using Knackly's Document Automation service to automate legal documents.`
                ],
                'Tech Stack': [
                  'VueJS',
                  'NodeJS',
                  'Vuetify',
                  'LoopBack 4',
                  'RxJS',
                  'ChartJS',
                  'Stripe'
                ]
              }
            },
            {
              name: 'BlueBox 360',
              description:
                'VueJS/NodeJS based generalized management dashboard, having quite powerful modules to manage out different organizations tasks, like employees/stock/retails etc.',
              data: {
                'My Roles': [
                  'Working on a dynamic widget-based dashboard with drag-drop support.',
                  'Working as a junior team-lead and leading fellow developers.',
                  'Implementing social media login/signup functionality.',
                  'Getting training on Loopback 4 and handling full backend.',
                  'Working with junior Flutter developer and communcating APIs.'
                ],
                'Tech Stack': [
                  'NodeJS',
                  'VueJS',
                  'LoopBack 4',
                  'Vuetify',
                  'RxJS',
                  'Flutter'
                ]
              }
            },
            {
              name: 'Paradise Tee Times',
              description: 'VueJS/.Net based web-app for golf tee times.',
              data: {
                'My Roles': [
                  'Converting from ReactJS to VueJS.',
                  'Handling complex API filters on several different 3rd party booking APIs.',
                  'Helping out junior developers on how to structure the project.',
                  'Working as a side-developer and leading junior developers.'
                ],
                'Tech Stack': ['VueJS', '.Net MVC', 'Vuetify', 'Google Map SDK']
              }
            },
            {
              name: 'Company Alarm',
              description:
                'VueJS/.Net based web-app for protecting your business from cyber criminals.',
              link: 'https://www.companyalarm.com',
              data: {
                'My Roles': [
                  'Converting from ReactJS to VueJS.',
                  'Helping out junior developers on how to structure the project.',
                  'Working as a side-developer and leading junior developers.'
                ],
                'Tech Stack': ['VueJS', '.Net MVC', 'Vuetify']
              }
            },
            {
              name: 'Brokerz',
              description:
                'A static eCommerce like web-app based on VueJS/NodeJS.',
              data: {
                'My Roles': [
                  'Working with junior developers to restructure the project on VueJS.',
                  'Helping out flutter developer to finalize the cross-platform app.',
                  'Going through complex Loopback 4 APIs and helping junior resources.'
                ],
                'Tech Stack': ['VueJS', 'Loopback 4', 'Vuetify', 'Flutter']
              }
            },
            {
              name: 'Form Worthy',
              description:
                'VueJS based web-app for building highly interactive and complex survey forms.',
              data: {
                'My Roles': [
                  'Rendering dynamic components/widgets based on complex JSON structure.'
                ],
                'Tech Stack': ['VueJS', 'Vuetify', 'RxJS']
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