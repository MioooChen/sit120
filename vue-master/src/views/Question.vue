<!-- 问卷列表 -->
<template>
  <div class="wrapper">
    <Layout>
      <div class="flex-wrapper">
        <div class="side-wrapper" style="min-width: 320px">
          <h3 class="side-title">Questionnaires</h3>
          <ul>
            <li
              v-for="(item, index) in itemList"
              :class="[index == current ? 'is-active' : '']"
              @click="switchIndex(index)"
              :key="index"
            >
              {{ item }}
            </li>
          </ul>
        </div>
        <div
          class="content"
          v-for="(item, index) in questionList"
          :key="index"
          v-show="current == index"
        >
          <MyText style="position: absolute; top: 30px; left: 30px">{{
            item.info
          }}</MyText>
          <p
            v-show="item.type === 'radio'"
            style="font-size: 18px; font-weight: bold; margin-bottom: 12px"
          >
            {{ item.info }}
          </p>
          <MyInput
            v-for="(inp, inpI) in item.input"
            :key="inpI"
            :desc="inp.text"
            :type="inp.type == 'textarea' ? 'textarea' : 'input'"
            v-show="item.type == 'input'"
          />
          <div
            class="radio"
            v-for="(inp) in item.radioList"
            :key="inp.text"
            :desc="inp.text"
            v-show="item.type == 'radio'"
          >
            {{ inp }}
          </div>
          <div style="position: absolute; right: 200px; bottom: 100px" @click="handleNext">
            <Button>{{item.btn.text}}</Button>
          </div>
        </div>
        <div class="content" v-show="current == 7">
            <MyText style="position: absolute;left: 50%; top: 30px;transform: translateX(-50%);">Congratualtions !</MyText>
            <div style="text-align: center;">
                <P>You have completed all the questionnaires, our nutritionist will customize the</P>
                <P>most suitable food recipe for your pet based on the content of your</P>
                <P>questionnaire. When the recipe is customized, we will send it to you by email,</P>
                <P>and you can pay according to the content of the email and the link. We will</P>
                <P>make and ship within 3-5 working days after receiving the payment. If you</P>
                <P>have any questions, please contact us.</P>
            </div>
            <div style="display: flex; justify-content: space-around;position: absolute; left: 50%;transform: translateX(-50%);bottom: 270px" @click="toConcat">
            <Button style="width: 230px;">Contact Us</Button>
          </div>
        </div>
      </div>
    </Layout>
  </div>
</template>
  
  <script>
export default {
  data: () => ({
    itemList: ["Question1", "Question2", "Question3", "Question4", "Question5", "Question6", "Question7"],
    current: 0,
    questionList: [
      {
        type: "radio",
        info: "Please choose your pet",
        input: [],
        radioList: ["Dog", "Cat"],
        btn: {
          text: "Start",
        },
      },
      {
        type: "input",
        info: "Please choose your pet",
        input: [
          {
            text: "What is the breed of your pet",
          },
        ],
        btn: {
          text: "Next",
        },
      },
      {
        type: "radio",
        info: "What is the breed of your pet",
        input: [
          {
            text: "What is the breed of your pet",
          },
        ],
        radioList: [
          "Under 12 weeks",
          "12 ~ 36 weeks",
          "Over 36 weeks",
          "Over 5 years",
        ],
        btn: {
          text: "Next",
        },
      },
      {
        type: "radio",
        info: "What is the gender of your pet",
        input: [
          {
            text: "What is the breed of your pet",
          },
          {
            text: "Cat",
          },
        ],
        radioList: ["Male", "Female"],
        btn: {
          text: "Next",
        },
      },
      {
        type: "input",
        info: "What's the weight of your pet",
        input: [
          {
            text: "What's the weight of your pet",
          },
        ],
        btn: {
          text: "Next",
        },
      },
      {
        type: "input",
        info: "Any medical advice",
        input: [
          {
            text: "Any medical advice",
          },
          {
            text: "Your attachment: (Drag and drop your file here)",
            type: "textarea",
          },
        ],
        btn: {
          text: "Next",
        },
      },
      {
        type: "input",
        info: "Any taste preference",
        input: [
          {
            text: "Any taste preference",
          },
        ],
        btn: {
          text: "Submit",
        },
      },
    ],
  }),
  methods: {
    handleNext() { //点击切换到下一个问卷
        if(this.current !== this.itemList.length) {
            this.current ++
        };
    },
    switchIndex(index) { //点击左侧导航栏切换当前选中问卷
      this.current = index;
      console.log(index);
    },
    toConcat() { //跳转到contact页面
        this.$router.push({path: "/contact"})
    }
  },
};
</script>
  
  <style scoped>
.content {
  padding: 120px 150px 30px;
  position: relative;
  width: 100%;
  height: 100%;
  background: white;
}

.radio {
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: #3f46a3;
  color: white;
  font-weight: bold;
  margin-bottom: 20px;
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

.side-title {
  margin-bottom: 12px;
}

.side-wrapper {
  width: 230px;
  height: 100%;
  padding: 120px 20px;
  background: #447792;
}

ul {
  cursor: pointer;
}

li {
  font-size: 13px;
  list-style: none;
  color: white;
  transition: 0.3s;
  margin-bottom: 12px;
}

.is-active {
  border-left: 4px solid white;
  padding-left: 14px;
}

li:hover {
  padding-left: 14px;
}

@media(max-width: 800px) {
    .content{
        padding: 60px 20px 15px;
    }
  }
</style>
  
  