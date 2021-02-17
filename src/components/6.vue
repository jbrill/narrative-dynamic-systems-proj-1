<template>
  <v-container>
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
