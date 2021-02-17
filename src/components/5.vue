<template>
  <v-container>
    <Video
      :questions="[
        {
          'text': 'Keep Jumping Turnstile',
          'link': '6',
          'lullabyLine': 'Work part-time at a bar',
        },
        {
          'text': 'Stop Jumping Turnstile',
          'link': '7',
          'lullabyLine': 'Date a bar owner',
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
