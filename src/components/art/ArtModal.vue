<template>
  <div class="modal__wrapper" ref="modalWrapperDOM">
    <div class="modal__close-modal"><img v-on:click="close()" src="../../assets/close.svg"></div>
    <div class="modal__container">
      <div class="modal__active-image two-by-two" v-bind:style="{backgroundImage: getBgImage()}"></div>
      <div class="modal__info two-by-two">
        <div class="modal__info--details">
          <div class="title">{{ activePiece.title }}</div>
          <div class="materials">{{ activePiece.materials }}</div>
          <div> {{ activePiece.year }} </div>
        </div>
        <div class="modal__info--thumbnails">
            <div class="modal__info--thumbnail" v-on:click="selectThumbnail(piece)" v-for="piece in pieces" :key="piece.id" v-bind:style="{ backgroundImage: getThumbnail(piece)}"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ArtModal',
  mounted () {
    this.centerModal()
    window.addEventListener('resize', this.centerModal)
  },
  destroyed () {
    window.removeEventListener('resize', this.centerModal)
  },
  data () {
    return {
      selectedImageIndex: 0
    }
  },
  computed: {
    activePiece () {
      return this.theme.pieces[this.selectedImageIndex]
    },
    pieces () {
      return this.theme.pieces
    }
  },
  methods: {
    centerModal () {
      let modalHeight = this.$refs.modalWrapperDOM.offsetHeight
      this.$refs.modalWrapperDOM.style.marginTop = 'calc((100vh - ' + modalHeight + 'px) / 2)'
    },
    getBgImage () {
      let path = require('../../assets/images/art' + this.theme.subroute + '/' + this.activePiece.img)
      return 'url(' + path + ')'
    },
    getThumbnail (piece) {
      let path = require('../../assets/images/art' + this.theme.subroute + '/' + piece.img)
      return 'url(' + path + ')'
    },
    selectThumbnail (piece) {
      let index = this.pieces.indexOf(piece)
      this.selectedImageIndex = index
    },
    close () {
      this.$parent.closeModal()
    }
  },
  props: ['theme']
}
</script>

<style lang="sass-loader" scoped>
@import '../../assets/styles/main.scss';

  .modal {
    &__wrapper {
      position: fixed;
      top: 0;
      left: 0;
      overflow: hidden;
      width: 90vw;
      height: 90vh;
      margin: 5vh 5vw;
      z-index: 4;
    }
    &__container {
      background-color: #2c2a2a;
      display: flex;
      padding: 40px 0;
      position: absolute;
      overflow: scroll;
      width: 100%;
      height: calc(100% - 80px);

    }
    &__active-image {
      background-repeat: no-repeat;
      background-size: contain;
      background-position: left top;
      margin: 0 40px;
      @include makeSquare;
    }
    &__close-modal {
      height: 15px;
      width: 15px;
      position: absolute;
      right: 0;
      padding: 20px;
      z-index: 5;
      img {
        width: 100%;
        cursor: pointer;
      }
    }
    &__info {
      &--details {
        .title {
          font-size: 30px;
          padding: 10px 0;
        }
      }
      &--thumbnails {
        overflow: scroll;
        width: 100%;
        @include flexbox(null, null, null);
        flex-wrap: wrap;
        padding: 40px 0;
      }
      &--thumbnail {
        background-size: cover;
        width: calc(100% / 3 - 20px);
        margin-bottom: 20px;
        margin-right: 20px;
        @include makeSquare;
        cursor: pointer;
      }
    }
    @include breakpoint(tablet-landscape) {
      &__info {
        &--thumbnail {
          width: calc(100% / 2 - 20px);
        }
      }
    }
    @include breakpoint(tablet-portrait) {
      &__container {
        flex-direction: column;
      }
      &__active-image {
        margin: 0 auto;
        margin-top: 25px;
      }
    }
  }

</style>
