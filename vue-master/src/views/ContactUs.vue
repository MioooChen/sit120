<!-- contact us page -->
<template>
    <div class="wrapper">
        <Layout>
        <div class="flex-wrapper">
            <div class="text_info">
                <p class="p-title">Need Help?</p>
                <span>
                    You can Contact Us here or
                    call to speak to our Petcare
                    team, customer service or
                    reception: <br/>
                    1234 567 890
                </span>
            </div>
            <div class="content">
                <div class="nav">
                    <Nav/>
                </div>
                <MyText style="position: absolute;top: 50px;">Concat us</MyText>
                <p class="p-title">Got a question? We'd love to hear from you. Please fill in your details below and we'll get back to you
within 48 hours.</p>
                <div class="form-info">
                    <MyInput style="width: 43%;" desc="First Name"/>
                    <MyInput style="width: 43%;" desc="Last Name"/>
                    <MyInput style="width: 43%;" desc="Phone"/>
                    <MyInput style="width: 43%;" desc="Email"/>
                </div>
                <MyInput type="textarea" desc="Massege"/>
                <Button>Submit</Button>
            </div>
            </div>
        </Layout>
    </div>
</template>
  
<script>
  export default {
  }
  </script>
  
  <style scoped>
  .content {
    position: relative;
    padding-top: 100px;
    width: 100%;
    height: 100%;
    background: white;
  }

  .form-info {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
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

  .text_info {
    width: 300px;
    padding: 15px;
    height: 86%;
    font-size: 20px;
    font-weight: bold;
    margin-top: 70px;
    margin-right: 50px;
    background: #d9d9d9;
  }

  .text_info p {
    margin: 0px 0 25px;
    font-size: 30px;
    font-weight: bold;
  }

  .p-title {
    font-size: 20px;
    font-weight: bold;
    font-style: italic;
  }

  .flex-wrapper {
    padding: 0 45px;
  }

  @media (max-width: 800px) {
    .text_info {
        width: 100%;
        margin: 30px 0 20px 0;
    }
    .flex-wrapper {
        padding: 0 3px;
        flex-wrap: wrap;
    }
    .form-info {
        padding: 15px;
    }
  }
  </style>
  
  