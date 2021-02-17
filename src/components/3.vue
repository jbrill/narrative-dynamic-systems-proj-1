<template>
  <v-container>
    <Video
      :questions="[
        {
          'text': 'Accept Invitation',
          'link': '4',
          'lullabyLine': 'Risks are meant to be taken',
        },
        {
          'text': 'Attend Weekly Singing Lessons',
          'link': '4',
          'lullabyLine': 'Risks are meant to be avoided',
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
