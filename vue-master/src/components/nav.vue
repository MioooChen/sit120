<template>
    <div class="nav-wrapper">
        <ul>
            <li v-for="(item,index) in navList" :key="index">
                <router-link :to="item.route">{{ item.text }}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        navList:{
            type: Array,
            default: () => ([
            {
                text: "OUR STORY",
                route: "/story",
            },
            {
                text: "HOME",
                route: "/",
            },
            {
                text: "LOG IN",
                route: "/login",
            },
            {
                text: "JOIN US",
                route: "/joinus",
            },
            {
                text: "QUESTION",
                route: "/question",
            },
            {
                text: "CONTACT US",
                route: "/contact",
            }
        ])
        }
    }
}
</script>

<style scoped>
.nav-wrapper ul{
    display: flex;
}

li {
    list-style: none;
    margin-left: 24px;
}

a {
    color: #005681;
    font-weight: bold;
    font-size: 20px;
    text-decoration: none;
}

a:hover {
    color: red;
}

@media(max-width: 800px) {
    a {
    color: #005681;
    font-weight: bold;
    font-size: 12px;
    text-decoration: none;
}

    li {

    list-style: none;
    margin-left: 4px;
}
    }
</style>