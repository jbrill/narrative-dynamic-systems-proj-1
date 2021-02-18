<template>
  <v-container>
    <v-container>
      <span class="title yellow--text">Scene 5</span>
      <p class="white--text">In order to make it as an actor, I feel like I need to save up some cash. Besides, I need enought to move to Los Angeles.</p>
      <p class="white--text">My habit for partying certainly hasn't stopped since high school. I've started going to a bar in East Village at least twice a week. In fact, I've started to get pretty friendly with the owner of the bar.</p>
      <p class="white--text">He's a bit annoying, but always buys me drinks. He even offered me a job?</p>
    </v-container>
    <Video
      :questions="[
        {
          'text': 'Work at a bar',
          'link': '8',
          'lullabyLine': 'Working hard to achieve my dreams',
        },
        {
          'text': 'Date the owner of a bar',
          'link': '8',
          'lullabyLine': 'Find support, through love',
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
