<template>
  <div class="art-project__wrapper site-width">
    <router-link :to="'/artwork'"><div>back</div></router-link>
    <div class="art-project__selected">
      <div class="art-project__selected-image" v-bind:style="{backgroundImage: getBgImage()}"></div>
      <div class="art-project__selected-description">
        <div class="title">{{ activePiece.title }}</div>
        <div class="materials">{{ activePiece.materials }}</div>
        <div> {{ activePiece.year }} </div>
      </div>
    </div>
    <div class="art-project__thumbnail-wrapper">
      <div class="art-project__thumbnail" v-on:click="selectThumbnail(piece)" v-for="piece in pieces" :key="piece.id" v-bind:style="{ backgroundImage: getThumbnail(piece), width: getWidth(pieces.length) }"></div>
    </div>
  </div>
</template>

<script>
import artCopy from '../../data/art-info.json'
export default {
  name: 'ArtProject',
  beforeMount () {
    let theme = this.artCopy.themes.find(theme => theme.route === this.$route.fullPath)
    this.$store.commit('activateArtTheme', theme)
  },
  mounted () {
  },
  data () {
    return {
      artCopy: artCopy,
      selectedImageIndex: 0
    }
  },
  computed: {
    activeTheme () {
      return this.$store.state.activeArtTheme
    },
    activePiece () {
      return this.activeTheme.pieces[this.selectedImageIndex]
    },
    pieces () {
      return this.activeTheme.pieces
    }
  },
  methods: {
    getBgImage () {
      let path = require('../../assets/images/art' + this.activeTheme.subroute + '/' + this.activePiece.img)
      return 'url(' + path + ')'
    },
    getThumbnail (piece) {
      let path = require('../../assets/images/art' + this.activeTheme.subroute + '/' + piece.img)
      return 'url(' + path + ')'
    },
    getWidth (length) {
      return 'calc(' + 100 / length + '% - 20px)'
    },
    selectThumbnail (piece) {
      let index = this.pieces.indexOf(piece)
      this.selectedImageIndex = index
    }
  }
}
</script>

<style lang="sass-loader" scoped>
@import '../../assets/styles/main.scss';
.art-project {
  &__wrapper {
    padding-top: 40px;
  }
  &__selected {
    width: 100%;
    display: flex;
  }
  &__selected-image {
    background-repeat: no-repeat;
    background-image: url(/static/img/fabric_collage.752159f.jpg);
    background-color: white;
    width: 50%;
    background-size: contain;
    background-position: right;
    width: calc(100% / 2 - 20px);
    @include makeSquare;
  }
  &__selected-description {
    width: calc(100% / 2 - 20px);
    padding-left: 20px;
    .title {
      font-size: 40px;
      padding-bottom: 10px;
    }
  }
  &__thumbnail-wrapper {
    width: 100%;
    display: flex;
    padding: 40px 0;
  }
  &__thumbnail {
    background-size: cover;
    margin: 0 20px;
    @include makeSquare;
    cursor: pointer;
  }
}

</style>
