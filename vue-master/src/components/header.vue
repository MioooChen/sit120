<template>
    <div class="header-wrapper">
        <h3 class="header-title">{{title}}</h3>
        <div class="btn">SEARCH</div>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: "Bring all the fresh to our pets, make everyday life easier"
        }
    }
}
</script>

<style scoped>
    .header-wrapper {
        position: relative;
        background: #b0e4f3;
        height: 80px;
        border-radius: 20px;
        display: flex;
        align-items: center;
        justify-content: space-around;
    }

    .btn {
        position: absolute;
        padding: 0 35px;
        height: 40px;
        line-height: 40px;
        background: white;
        text-align: center;
        right: 100px;
        border-radius: 15px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.15);
        top: 50%;
        cursor: pointer;
        font-size: bold;
        transform-origin: 0,0;
        transition: 0.3s;
        transform: translateY(-50%);
    }

    .btn:hover {
        transform: translateY(-50%) rotate(3deg);
    }

    @media(max-width: 800px) {
        .header-title {
            font-size: 13px;
        }
        .btn {
            right: 10px;
            transform: scale(0.7) translateY(-50%);
        }
    }
</style>