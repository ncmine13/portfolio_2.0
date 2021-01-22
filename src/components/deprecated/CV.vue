<template>
  <div class="resume__wrapper">
    <div class="site-width download"><a :href="resumePdf()" download="NaomiMine_Resume">download full pdf</a></div>
    <div v-for="entry in cv" :key="entry.id" class="resume__category site-width">
      <div class="resume__category-name h3-size">{{entry.name}}</div>
      <div class="resume__experiences-wrapper">
        <div class="experience" v-for="experience in entry.experiences" :key="experience.id">
          <span v-if="experience.position">{{ experience.position }}, </span><span v-bind:class="{bold: isBold(entry)}">{{experience.name}}</span><span v-if="experience.date">, {{experience.date}}</span><span>, {{experience.location}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import cvData from '../../data/cv.json'
export default {
  name: 'CV',
  data () {
    return {
      cv: cvData
    }
  },
  methods: {
    resumePdf () {
      return require('../../assets/Naomi_Mine_Resume.pdf')
    },
    isBold (entry) {
      return entry.id !== 4
    }
  }
}
</script>

<style lang="sass-loader" scoped>
@import '../../assets/styles/main.scss';
.bold {
  font-weight: 600;
}
.resume {
  &__wrapper {
    background-color: $gray;
    color: white;
    padding-bottom: 100px;
    .download {
      text-decoration: underline;
      padding: 20px 0;
      a {
        color: white;
      }
    }
  }
  &__category {
    padding: 20px 0;
  }
  &__category-name {
    font-weight: 500;
  }
  &__experiences-wrapper {
    font-size: 16px;
    padding-left: 40px;
    .experience {
      padding-top: 5px;
    }
  }
}

</style>
