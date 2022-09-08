<template>
    <div class="footer-wrapper">
        <h3 class="footer-info">{{title}}</h3>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: "This is footer"
        }
    }
}
</script>

<style scoped>
    .footer-wrapper {
        position: relative;
        background: #b0e4f3;
        height: 110px;
        border-radius: 20px;
        display: flex;
        align-items: center;
        justify-content: space-around;
    }
</style>