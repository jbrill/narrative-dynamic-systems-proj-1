<template>
  <v-container>
    <!-- <youtube v-if="!ended" @ready="setPlaybackRate" @ended="toggleSound" :video-id="videoId" :player-vars="{ autoplay: 1, controls: 0, showinfo: 0, frameBorder: 0, allowFullscreen: 0, modestbranding: 1, rel: 0, playbackRate: 3 }"></youtube> -->
    <div class="video-contain">
      <h2>Choose from below:</h2>
      <v-flex>
        <v-btn
          v-for="(question, questionIdx) in questions"
          :key="'question-' + questionIdx"
          color="yellow"
          outlined
          @click="addLullabyLines(question.lullabyLine, question.link)"
          
        >{{ question.text }}</v-btn>
      </v-flex>
    </div>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'Video',
  props: [
    'questions',
  ],
  data: () => ({
  }),
  methods: {
    ...mapActions('lullaby', ['addLullabyLine']),
    addLullabyLines(lullabyLine, link) {
      this.addLullabyLine(lullabyLine)
      this.$router.push(link);
    },
  },
}
</script>
<style scoped>
.white--text {
  margin: 2px;
}
.h2 {
  padding-bottom: 2rem;
}
</style>
