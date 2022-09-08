<template>
  <div>
    <!-- <transition> -->
    <router-view />
    <!-- </transition> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      scalesNum: 1, // 缩放比例
    };
  },
  // methods: {
  //   bodyScale() {
  //     let devicewidth = document.documentElement.clientWidth//获取当前分辨率下的可是区域宽度
  //     let scale = devicewidth / 1440 // 分母——设计稿的尺寸
  //     document.body.style.zoom = scale//放大缩小相应倍数
  //   }  
  // },
  // mounted() {
  //   // 计算缩放比例
  //   // this.resize_window();
  //   this.bodyScale();
  //   window.onresize = () => {
  //       return (() => {
  //         this.bodyScale()
  //       })()
  //     }
  // }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  transform-origin: 0 0;
  position:relative;
  left:50%;
  overflow: hidden;
}

.flex-wrapper {
  display: flex;
  justify-content: space-between;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --blue: #2979ff;
  --light: #ecf5ff;
  --red: #fa3534;
  --yellow: #ff9900;
  --green: #19be6b;
  --grey: #c8c9cc;
  --bg: #f3f6fc;
  --white: white;
}


.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
