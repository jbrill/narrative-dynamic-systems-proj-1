<template>
  <v-container>
    <v-container>
      <span class="title yellow--text">Scene 4</span>
      <p class="white--text">Well having started school in New York, I can say I am in love with the city.</p>
      <p class="white--text">The one thing I am not in love with is the cost.</p>
      <p class="white--text">I usually catch the subway with friends after class. Sometimes we jump turnstile, but I'm thinking about getting a metrocard.</p>
    </v-container>
    <Video
      :questions="[
        {
          'text': 'Keep Jumping Turnstile',
          'link': '6',
          'lullabyLine': 'Do what you need to do',
        },
        {
          'text': 'Stop Jumping Turnstile',
          'link': '7',
          'lullabyLine': 'Everyone pays their fair share',
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
