<template>
  <v-container>
    <Video
      :questions="[
        {
          'text': 'Join Accounting Club',
          'link': '1',
          'lullabyLine': 'No need to move in haste',
        },
        {
          'text': 'Join School Choir',
          'link': '2',
          'lullabyLine': 'Sing till the birds chirp on the trees',
        },
        {
          'text': 'Join the high school play as a tree',
          'link': '3',
          'lullabyLine': 'Together we can achieve our goals',
        }
      ]"
    />
  </div>
  </v-container>
</template>

<script>
import Video from './Video.vue';

export default {
  name: 'Home',
  components: {
    Video,
  },
  data: () => ({
    videoId: '3Qxe-QOp_-s',
  }),
  mounted() {
    this.toggleSound();
  },
  methods: {
    toggleSound() {
      let audio = this.$refs.audio;
      audio.play();
    },
  }
}
</script>
