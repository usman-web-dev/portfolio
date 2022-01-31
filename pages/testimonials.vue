<template>
  <v-container>
    <v-row justify="center" align="start">
      <v-col cols="12" lg="8">
        <h2 class="text-h4 text-lg-h2 text-center mb-10 mt-5">Testimonials</h2>

        <v-card
          v-for="({ name, message }, i) in data"
          :key="i"
          class="my-10 rounded-xl d-flex flex-column px-5 message shadow"
          :color="i % 2 ? 'primary' : 'secondary'"
          dark
        >
          <v-card-title>
            <Upwork :size="36" />
            <span class="text-h6 font-weight-light">Upwork</span>
          </v-card-title>

          <v-card-text
            class="
              text-lg-h5 text-body-1
              font-weight-bold
              flex-grow-1
              message-text
            "
            v-html="message"
          />

          <v-card-actions>
            <v-list-item class="grow">
              <v-list-item-avatar color="grey darken-3">
                <v-img class="elevation-6" alt="" :src="avatar"></v-img>
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title>{{ name }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      model: 0,
      avatar:
        'https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light',
      data: [
        {
          name: 'Tom Milligan',
          message: `I've worked with literally hundreds of developers over my career and have never found a developer more dedicated to quality than Usman has been for us. To make <a href=https://ourdivorce.com class="white--text">OurDivorce.com</a> a reality, Usman took the basic requirements I provided and created a masterpiece. He worked long hours, did very high quality work, and offered incredible guidance along the way that saved us countless hours and application rewrites. I can't imagine going through this process without his knowledge, skill, and guidance. 10 out of 10 stars. Highly recommend.`
        },
        {
          name: 'Bjoern Nawrath',
          message: `HIGHLY recommended Developer here on upwork! Great skillset, very friendly, clean code and had nice design ideas and - that's the important aspect - great questions regarding the todos. Muhammad isn't the type of dev who makes it for more hours to sell more complex. He is very customer oriented and I am very happy to got all needed revisions, even AFTER payment was made.`
        },
        {
          name: 'Simon Naylor',
          message: `Amazing work, he delivered excellent work very fast and the project was quite challenging. I'm really pleased with the outcome and excited to hire this freelance again for more development projects. This guy is a coding wizard! very impressed.`
        },
        {
          name: 'Clirim Uskana',
          message:
            'Very happy with the results. Talented freelancer who is helpful in every situation. Asks for details to make sure he understands everything before start. We will work more projects together.'
        },
        {
          name: 'Shamoos Huang',
          message:
            'Usman has good technical skills, is easy to correspond with, and shows professional dedication to the job.'
        }
      ]
    };
  }
});
</script>

<style lang="scss" scoped>
.message {
  &-text {
    text-align: justify;
  }
}
</style>
