<template>
  <v-container>
    <Video
      :questions="[
        {
          'text': 'Move to Highland Park, Los Angeles',
          'link': '9',
          'lullabyLine': 'Moving to the city, the one of angels',
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
