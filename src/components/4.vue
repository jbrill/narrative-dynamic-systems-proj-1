<template>
  <v-container>
    <Video
      :questions="[
        {
          'text': 'Attend Tisch School of Drama',
          'link': '5',
          'lullabyLine': 'How I dream, to act one day',
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
