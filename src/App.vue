<template>
  <v-app>
    <v-app-bar
      app
      color="black"
      dark
    >
      <div class="d-flex align-center">
        <v-flex>
          <h2><a style="color: white; text-decoration: none" href="/">Piercing Lullaby</a></h2>
          <h6 class="grey--text">A cultural binaural lullaby that is visceral and piercing about finance for actors.</h6>
        </v-flex>
      </div>

      <v-spacer></v-spacer>
      <v-btn to="/">Restart</v-btn>
    </v-app-bar>

    <v-main flex align-items-center justify='center'>
      <v-container fill-height fluid align="center" justify='center'>
        <v-row
          no-gutters
          class="flex-column align-center"
        >
          <v-container>
            <span class="title yellow--text">Lullaby</span>
            <v-col class="d-flex justify-center" v-for="(lullabyLine, lullabyLineIdx) in lullabyLines"
              :key="'lullaby-line-' + lullabyLineIdx"
            >
              <span class="body-1">{{ lullabyLine }}</span>
            </v-col>
          </v-container>
          <v-btn text class="yellow--text" @click="downloadLullaby">Save Lullaby</v-btn>
          <v-btn text target="_blank" href="https://colab.research.google.com/drive/1S8ZWVqlKhqrJlOsM__L56b2fT2t30ibv" class="black--text">Generate Lullaby</v-btn>
        </v-row>
      </v-container>
      <!-- route outlet -->
      <!-- component matched by the route will render here -->
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import { mapState } from 'vuex';
import FileSaver from 'file-saver';


export default {
  name: 'App',

  components: {
  },
  computed: {
    ...mapState({
        lullabyLines: state => state.lullaby.lullabyLines,
    })
  },
  // data: () => ({
  //   lullabyLines: [
  //     'On the way to reach my dreams', 'How I wonder what stardom holds'
  //   ]
  // }),
  methods: {
    downloadLullaby () {
      let blob = new Blob(this.lullabyLines, {type: "text/plain;charset=utf-8"});
      FileSaver.saveAs(blob, "lullaby.txt");
    }
  },
  created () {
    const title = 'Piercing Lullaby'
    if (title) {
      document.title = title
    }
  }
};
</script>

<style>
.container {
  text-align: center;
}
html, body {
  font-family: "Roboto", sans-serif !important;
  font-weight: 300;
}
#app {
  background-color: black;
  color: white;
}
.v-btn__content {
  color: white !important;
}
.v-main__wrap {
  display: flex !important;
  align-items: center !important;
}
</style>