<template>
  <v-container>
    <v-container>
      <span class="title yellow--text">Scene 1</span>
      <p class="white--text">Valerie is a 16 year old from the Philadelphia suburbs, desperately trying to figure out what to do in life. She often finds herself torn between two destinies -- one in which she follows her parents wishes to become an accountant, and the other to follow her dreams of becoming an actor.</p>
      <p class="white--text">She's hard-working, but also loves to hang out with her friends. Suzy is her best friend, who also happens to be the accounting club president. Suzy approaches Valerie after class, and asks if she would like to join.</p>
      <p class="white--text">Valerie heads towards the bus to go home, where she then fist takes the train and then drives home from the train station. Upon running to catch the bus, she stumbles upon a flyer for the school choir. Quickly fumbling in her pocket to grab her phone, she menacingly snaps a photo to review the flyer later.</p>
      <p class="white--text">On the train, a text from Joel pops up on the phone. A new role for the school play has just opened up.</p>
    </v-container>
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
  </v-container>
</template>

<script>
import Video from './Video';

export default {
  components: {
    Video,
  },
  data: () => ({
  }),
}
</script>
