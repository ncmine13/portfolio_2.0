<template>
  <div class="resume__wrapper">
    <div class="site-width download">download full pdf</div>
    <div v-for="entry in cv" class="resume__category site-width">
      <div class="resume__category-name h3-size">{{entry.name}}</div>
      <div class="resume__experiences-wrapper">
        <div v-for="experience in entry.experiences"><span v-if="experience.position">{{ experience.position }}, </span> {{experience.name}}<span v-if="experience.date">, {{experience.date}} </span></div>
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
  }
}
</script>

<style lang="sass-loader" scoped>
@import '../../assets/styles/main.scss';

.resume {
  &__wrapper {
    background-color: $orange;
    color: white;
    padding-bottom: 100px;
    .download {
      text-decoration: underline;
      cursor: pointer;
    }
  }
  &__category {
    padding: 20px 0;
  }
  &__category-name {
    font-weight: 500;
  }
  &__experiences-wrapper {
    padding-left: 40px;
    span {
      font-weight: 600;
      font-size: 14px;
    }
  }
}

</style>
