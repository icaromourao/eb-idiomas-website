<template>
  <div class="app-container">
    <HeaderComponent/>
    <router-view/>
    <FooterComponent/>
  </div>
</template>

<script>
import HeaderComponent from '@/components/Header.vue';
import FooterComponent from '@/components/Footer.vue';

export default {
  name: 'AppView',
  components: {
    HeaderComponent,
    FooterComponent,
  },
};
</script>

<style lang="scss">
html, body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}

#app {
  font-family: 'Inter', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $black;
  width: 100%;
}
</style>
