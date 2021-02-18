<template>
  <v-container>
    <v-container>
      <span class="title yellow--text">Scene 2</span>
      <p class="white--text">Valerie wakes up bright and early at 5am to go to the accounting meeting. How telling that it's BEFORE school.</p>
      <p class="white--text">Somehow finding herself in a second floor room in the library, she realizes she's an hour early... daylight savings time. She decides to dip her head in an accounting book... the one her mother always tried to make her read. Besides, the main reason she's becoming financially literate is because of her mom... and her best friend is the club president.</p>
      <p class="white--text">Finally, the meeting starts. WOW, is this boring. Honestly, I might need to drop this club. Besides, I need to study for the ACT.</p>
    </v-container>
    <Video
      :questions="[
        {
          'text': 'Hang out with Suzy Afer the Meeting',
          'link': '4',
          'lullabyLine': 'Making friends along the way',
        },
        {
          'text': 'Study for ACT',
          'link': '4',
          'lullabyLine': 'Study hard along the way',
        },
      ]"
    />
  </v-container>
</template>

<script>
import Video from './Video.vue';

export default {
  components: {
    Video,
  },
  data: () => ({
  }),
}
</script>
