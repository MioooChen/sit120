import Header from '../components/header.vue';
import Layout from '../components/layout.vue';
import Button from '../components/button.vue';
import Nav from '../components/nav.vue';
import SideNav from '../components/sidenav.vue'
import MyText from '../components/myText.vue';
import MyInput from '../components/myInput.vue';
import Vue from 'vue';

// 注册全局组件
const componentList = [
    {name: "Header", c: Header},
    {name: "Layout", c: Layout},
    {name: "Button", c: Button},
    {name: "Nav", c: Nav},
    {name: "SideNav", c: SideNav},
    {name: "MyText", c: MyText},
    {name: "MyInput", c: MyInput}
]

//遍历组件列表依次注册
componentList.forEach(item => {
    const { name,c } = item;
    Vue.component(name,c)
})
