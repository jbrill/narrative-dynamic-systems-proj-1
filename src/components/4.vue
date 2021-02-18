<template>
  <v-container>
    <v-container>
      <span class="title yellow--text">Scene 3</span>
      <p class="white--text">Rolling out of bed, I walk to the mailbox to check the mail. It's a thick envelope, addressed from Juilliard -- my dream school!</p>
      <p class="white--text">I can't believe I got into Juilliard.</p>
      <p class="white--text">I can't believe I got into Juilliard.</p>
      <p class="white--text">I'm going to be an actor</p>
    </v-container>
    <Video
      :questions="[
        {
          'text': 'Attend Juilard',
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
