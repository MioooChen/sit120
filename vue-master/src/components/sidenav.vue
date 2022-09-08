<template>
    <div class="side-wrapper">
        <h3 class="side-title">{{ title }}</h3>
        <ul>
            <li v-for="(item,index) in itemList" :key="index">
                {{ item.text }}
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        props: {
            title: {
                type: String,
                default: "this is title"
            },
            itemList: {
                type: Array,
                default: () => ([
                    {
                        text: "text text",
                        cb: (index) => {
                            this.$emit('change',index)
                        }
                    },
                    {
                        text: "text text",
                        cb: (index) => {
                            this.$emit('change',index)
                        }
                    },
                    {
                        text: "text text",
                        cb: (index) => {
                            this.$emit('change',index)
                        }
                    }
                ])
            }
        }
    }
</script>

<style>
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
        list-style: none;
        transition: 0.3s;
    }

    li:hover {
        padding-left: 14px;
    }

    @media(max-width: 800px) {
        .side-wrapper {
            display: none;
        }
    }
</style>