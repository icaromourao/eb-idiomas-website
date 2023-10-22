<template>
  <div class="loader-container" :class="{'loader-fixed': fullScreen, 'top-table': isTable}">
    <div class="loader"></div>
  </div>
</template>

<script>
export default {
  name: 'LoaderComponent',
  props: {
    fullScreen: {
      type: Boolean,
      default: true,
    },
    isTable: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
@keyframes load {
  0% {
    transform: rotate(0deg);
    border-color: rgba(128, 204, 70, 0) $primary
      rgba(27, 160, 243, 0) $secondary;
  }
  50% {
    transform: rotate(180deg);
    border-color: $secondary rgba(27, 160, 243, 0)
      $primary rgba(128, 204, 70, 0);
  }
  100% {
    transform: rotate(360deg);
    border-color: rgba(128, 204, 70, 0) $primary
      rgba(27, 160, 243, 0) $secondary;
  }
}

.loading-white {
  background-color: white;
}

.loader-container {
  display: block;
  width: 40px;
  height: 40px;
  margin: 0 auto;
  transform: scale(1, 1);
  box-sizing: border-box;
  overflow: hidden;
  transition: transform 200ms ease-in;
}

@media (max-width: 768px) {
  .loader-container {
    width: 35px;
    height: 35px;
  }
}

.loader-container.loader-fixed {
  position: fixed;
  top: 50%;
}

.loader-container.top-table {
  top: 200%;
}

.loader {
  width: 100%;
  height: 100%;
  border-radius: 100%;
  box-sizing: border-box;
  border-width: 5px;
  border-style: solid;
  animation-name: load;
  animation-duration: 1.75s;
  animation-iteration-count: infinite;
  animation-timing-function: ease;
}
</style>
