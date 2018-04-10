<template>
  <div class="modal__wrapper" ref="modalWrapperDOM">
    <!-- <div class="modal__content-wrapper" >

    </div> -->
  </div>
</template>

<script>
export default {
  name: 'ArtModal',
  mounted () {
    this.centerModal()
  },
  methods: {
    centerModal () {
      let modalHeight = this.$refs.modalWrapperDOM.offsetHeight;
      this.$refs.modalWrapperDOM.style.marginTop = 'calc((100vh - ' + modalHeight + 'px) / 2)'
    }
  }
}
</script>

<style lang="sass-loader" scoped>
  .modal {
    &__wrapper {
      position: fixed;
      top: 0;
      max-height: 100vh;
      overflow: scroll;
      left: 0;
      width: 80%;
      margin: 0 10%;
      background-color: yellow;
      padding: 5% 0;
      z-index: 4;
    }
  }

</style>
