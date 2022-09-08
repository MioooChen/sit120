<!-- create Account page-->
<template>
    <div class="wrapper">
        <Layout>
          <div class="flex-wrapper">
            <SideNav title="Acc list" style="background: #447792;"/>
            <div class="content">
                <MyText style="position: absolute;top: 30px;left: 30px;">Create Account</MyText>
                <div style="display: flex; justify-content: space-between;">
                    <MyInput style="width: 45%;" desc="First Name" />
                    <MyInput style="width: 45%;" desc="Last Name" />
                </div>
                <MyInput desc="Email" />
                <MyInput desc="Mobile Phone" />
                <MyInput desc="Address" />
                <MyInput desc="Password" />
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
    padding: 90px 40px 30px;
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
  
  