<!-- 主页面 -->
<template>
  <div class="wrapper">
      <Layout>
        <div class="content">
          <div class="nav">
            <Nav />
          </div>
          <div class="info" style="right: 200px; top: 80px; transform: rotate(-13deg);">Better pets</div>
          <div class="info" style="right: 50px; top: 140px; font-size: 60px;">Better Life</div>
          <Button style="right: 100px; bottom: 200px;">JOIN US</Button>
        </div>
      </Layout>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.content {
  position: relative;
  width: 100%;
  height: 100%;
  background: url('../assets/man.jpg')center no-repeat;
  background-size: cover;
}

.info {
  position: absolute;
  font-size: 80px;
  transform: rotate(-10deg); 
}

.nav {
  position: absolute;
  right: 20px;
  top: 20px;
}

@media(max-width: 800px) {
    .info {
        font-size: 30px !important;
    }
  }
</style>

