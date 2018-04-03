<template>
  <div class="art-project__wrapper">
    <div class="art-project__selected">
      <div class="art-project__selected-image" v-bind:style="{backgroundImage: getBgImage()}"></div>
      <div class="art-project__selected-description">
        <div>{{activePiece.title}}</div>
        <div>{{activePiece.materials}}</div>
      </div>
    </div>
    <div class="art-project__thumbnail-wrapper"></div>
  </div>
</template>

<script>
export default {
  name: 'ArtProject',
  data () {
    return {
      selectedImageIndex: 1,
      activeTheme: this.$store.state.activeArtTheme
    }
  },
  computed: {
    activePiece () {
      return this.activeTheme.pieces[this.selectedImageIndex]
    }
  },
  methods: {
    getBgImage () {
      let path = require('../../assets/images/art/' + this.activeTheme.route + '/' + this.activePiece.img)
      return 'url(' + path + ')'
    }
  }
}
</script>

<style lang="sass-loader" scoped>
.art-project {
  &__selected {
    width: 100%;
    display: flex;
    height: 100vh;
  }
  &__selected-image {
    background-repeat: no-repeat;
    background-image: url(/static/img/fabric_collage.752159f.jpg);
    background-color: white;
    width: 50%;
    background-size: contain;
  }
}

</style>
