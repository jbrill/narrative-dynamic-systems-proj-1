<template>
  <v-container>
    <v-container>
      <span class="title yellow--text">Scene 1</span>
      <p class="white--text">Valerie is a 16 year old the Philadelphia suburbs trying to figure out what to do in life.</p>
      <p class="white--text">She's hard-working, but loves to hang out with friends. Suzy, her best friend, who also happens to be the accounting club president, asks if she would like to join.</p>
      <p class="white--text">Valerie considers, but can't shake her love for movies. She had watched Breakfast at Tiffany's last night, and Audrey Hepburn's performance had nothing short of inspired her to be an actress.</p>
      <p class="white--text">As she heads towards the bus, which then heads towards SEPTA, and then drives home from the train station, all of which takes about 65 minutes, she stumbled upon a flyer for the school choir. Quickly fumbling in her pocket to grab her phone, she menacingly snaps a photo to review the flyer later.</p>
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
