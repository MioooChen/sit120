<!-- 登录页login -->
<template>
    <div class="wrapper">
        <Layout>
          <div class="flex-wrapper">
            <SideNav title="Acc list" style="background: #447792;min-width: 320px;"/>
            <div class="content">
                <MyText style="position: absolute;top: 30px;left: 30px;">LOG IN</MyText>
                <MyInput desc="Email" />
                <MyInput desc="Password" style="margin-bottom: 30px;"/>
                <Button>Complete</Button>
                <div style="margin-top: 120px;">
                    <router-link to="/sign">Do not have an account? click here</router-link>
                </div>
            </div>
          </div>
        </Layout>
    </div>
  </template>
  
  <script>
  export default {}
  </script>
  
  <style scoped>
  .content {
    padding: 120px 100px 30px;
    position: relative;
    width: 100%;
    height: 100%;
    background: white;
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
  </style>
  
  