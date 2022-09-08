<template>
    <div :style="{color: color}" class="text-wrapper"><slot></slot></div>
</template>

<script>
    export default {
        props: {
            color:{
                type: String,
                default: "#3e46a0"
            }
        }
    }
</script>

<style>
    .text-wrapper {
        font-size: 40px;
        font-weight: bold;
        cursor: pointer;
        -webkit-text-stroke: 1px black;
        transition: 0.3s;
    }

    .text-wrapper:hover {
        transform: translateX(10px);
    }

    @media(max-width: 800px) {
        .text-wrapper {
        font-size: 20px;
        font-weight: bold;
        cursor: pointer;
        -webkit-text-stroke: 1px black;
        transition: 0.3s;
    }
    }
</style>