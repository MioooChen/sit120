<!-- Join us page -->
<template>
    <div class="wrapper">
        <Layout>
          <div class="flex-wrapper">
            <SideNav title="cat list"/>
            <div class="content">
                <div class="nav">
                <Nav />
                </div>
                <div class="info" style="right: 200px; top: 80px; transform: rotate(-13deg);">Better pets</div>
                <div class="info" style="right: 50px; top: 140px; font-size: 60px;">Better Life</div>
                <Button :onclick="toSign" style="right: 100px; bottom: 200px;">CREATE AN <br/> ACCOUNT</Button>
            </div>
          </div>
        </Layout>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
        toSign() {
            this.$router.push({path: '/sign'})
        }
    }
  }
  </script>
  
  <style scoped>
  .content {
    position: relative;
    width: 100%;
    height: 100%;
    background: url('../assets/cat.jpg')center no-repeat;
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

  .flex-wrapper {
    display: flex;
    height: 100%;
    width: 100%;
  }

  @media(max-width: 800px) {
    .info {
        font-size: 30px !important;
    }
  }
  </style>
  
  