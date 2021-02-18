<template>
  <v-container>
    <transition name="fade">
      <div class="video-contain">
        <!-- <h2 class="heading-2">What</h2> -->
        <v-flex>
          <v-btn
            v-for="(question, questionIdx) in questions"
            :key="'question-' + questionIdx"
            color="yellow"
            margin="5px"
            outlined
            block
            @click="addLullabyLines(question.lullabyLine, question.link)"
            
          >{{ question.text }}</v-btn>
        </v-flex>
      </div>
    </transition>
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
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
