<template>
  <v-container>
    <v-container>
      <span class="title yellow--text">Scene 6</span>
      <p class="white--text">Ready to start my career, I think it's time to head West.</p>
    </v-container>
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
