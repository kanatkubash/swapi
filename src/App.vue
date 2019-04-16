<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import 'bulma/bulma.sass';

export default {
  name: 'App',
};
</script>

<style lang="scss">
@import '~bulma/bulma.sass';
@import '~assets/colors.scss';
@import '~assets/app.scss';

body {
  background: $black;
  color: $white;
  min-height: 100vh;
  margin: 0;
  overflow: auto;
}
#app {
  font-family: 'Open Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
