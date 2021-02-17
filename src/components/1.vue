<template>
  <v-container>
    <Video
      :questions="[
        {
          'text': 'Meet with Suzy (Accounting Club President)',
          'link': '4',
          'lullabyLine': 'Making friends along the way',
        },
        {
          'text': 'Study for ACT',
          'link': '4',
          'lullabyLine': 'Study hard along the way',
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
