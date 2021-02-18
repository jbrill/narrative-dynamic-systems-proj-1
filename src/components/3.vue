<template>
  <v-container>
    <v-container>
      <span class="title yellow--text">Scene 2</span>
      <p class="white--text">So I'm a tree for the play. I went to rehearsal and literally just stood there in a tree costume.</p>
      <p class="white--text">But wait. During the rehearsal, Joel (who plays Hamlet, in Hamlet) quite literally broke his leg.</p>
      <p class="white--text">I'm offered the invitation to pick up the lead role of Hamlet. I'm not sure if I should accept.</p>
    </v-container>
    <Video
      :questions="[
        {
          'text': 'Accept Invitation',
          'link': '4',
          'lullabyLine': 'Risks are meant to be taken',
        },
        {
          'text': 'Decline Invitation',
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
