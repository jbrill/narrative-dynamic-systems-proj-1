<template>
  <v-container>
    <v-container>
      <span class="title yellow--text">Scene 5</span>
      <p class="white--text">In order to make it as an actor, I feel like I need to save up some cash. Besides, I need enought to move to Los Angeles.</p>
    </v-container>
    <Video
      :questions="[
        {
          'text': 'Work at a bar part-time to pay some bills',
          'link': '8',
          'lullabyLine': 'Working hard to achieve my dreams',
        },
        {
          'text': 'Date the owner of a bar',
          'link': '8',
          'lullabyLine': 'Find support, through my love',
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
