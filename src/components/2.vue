<template>
  <v-container>
    <Video
      :questions="[
        {
          'text': 'Throw a Party for Choir Members',
          'link': '4',
          'lullabyLine': 'Dancing the nights away, with no regrets',
        },
        {
          'text': 'Attend Weekly Singing Lessons',
          'link': '4',
          'lullabyLine': 'Practice, practice, paves the way',
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
