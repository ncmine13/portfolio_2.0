<template>
  <div class="music-wrapper">
    <div class="music-max-songs">
        <div class="music-song" v-for="audioItem in audioData.items" :key="audioItem.id">
            <div class="music-song-title">{{audioItem.title}}</div>
            <div class="music-song-text">{{audioItem.text}}</div>
            <audio class="music-song-audio" controls :src="getAudio(audioItem)"></audio>
        </div>
    </div>
  </div>
</template>

<script>
import audioData from '../../data/audio.json';

export default {
  name: "Music",
  data() {
    return {
      audioData: audioData
    };
  },
  methods: {
    getAudio(audioItem) {
      let path = require("../../assets/audio/" + audioItem.path);
      return path;
    },
  },
};
</script>

<style lang="sass-loader">
    .music {
        &-song {
            margin-bottom: 24px;
            &-title {
                font-size: 20px;
            }
        }  
    }
</style>
