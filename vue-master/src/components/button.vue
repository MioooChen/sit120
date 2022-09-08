<template>
    <div class="btn-wrapper" @click="onclick">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        props: {
            onclick: {
                type: Function,
                default: () => () => {}
            }
        }
    }
</script>

<style>
    .btn-wrapper {
        position: absolute;
        height: 60px;
        padding: 0 40px;
        display: flex;
        align-items: center;
        color: white;
        font-weight: bold;
        cursor: pointer;
        justify-content: space-around;
        background: #4046a6;
        transition: 0.3s;
        border: 2px solid #4046a6;
    }

    .btn-wrapper:hover {
        background: white;
        color: #4046a6;
    }

    @media(max-width: 800px) {
        .btn-wrapper {
            transform: scale(0.7);
        }
    }
</style>