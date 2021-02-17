<template>
  <v-container>
    <Video
      :questions="[
        {
          'text': 'Drive through Wendy\'s',
          'link': '8',
          'lullabyLine': 'You know when it\'s real',
        },
        {
          'text': 'Cook atlantic salmon at home',
          'link': '8',
          'lullabyLine': 'Cherish health, one day at a time',
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
