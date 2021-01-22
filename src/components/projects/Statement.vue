<template>
  <div class="statement-wrapper">
    <div>{{statement}}</div>
  </div>
</template>

<script>
export default {
  name: "Statement",
  data() {
    return {
      statement: ""
    };
  },
};
</script>

<style lang="sass-loader">
.statement-wrapper {
}
</style>