<template>
  <v-container>
    <v-container>
      <span class="title yellow--text">Scene 2</span>
      <p class="white--text">School choir practice begins at 6pm after class. Valerie wraps up her ACT tutoring session in the library, of course to show up frazzled a few minutes late.</p>
      <p class="white--text">It turns out the practice is going pretty well. I mean... I'm a natural Contralto. Who would've thought.</p>
      <p class="white--text">Maybe I have a future in singing.</p>
    </v-container>
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
