<template>
    <div class="wrapper">
        <Header/>
        <div class="main-content">
            <slot></slot>
        </div>
        <Footer/>
    </div>
</template>

<script>
    import Header from './header.vue';
    import Footer from './footer.vue';
    export default {
        components: {
            Header,
            Footer
        }
    }
</script>

<style>
    .wrapper {
        display: flex;
        height: 100vh;
        width: 100vw;
        flex-direction: column;
    }
    .main-content {
        width: 100%;
        height: 100%;
        overflow: auto;
        justify-content: space-between;
    }
</style>