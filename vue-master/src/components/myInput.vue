<template>
    <div class="input-wrapper">
        <p>{{desc}}</p>
        <input :type="type" :placeholder="placeholder" v-model="value" :style="{
            height: type === 'textarea' ? '130px': '45px' 
        }">
    </div>
</template>

<script>
    export default {
        props: {
            value: {
                type: String,
                default: ""
            },
            desc: {
                type: String,
                default: "Item Name"
            },
            type: {
                type: String,
                default: "text"
            },
            placeholder: {
                type: String,
                default: "please input value"
            },
        }
    }
</script>

<style scoped>
    .input-wrapper {
        margin-bottom: 15px;
    }
p {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 12px;
}

input {
    width: 100%;
    border: none;
    outline: none;
    height: 45px;
    padding-left: 15px;
    background: #f9f9f9;
    transition: 0.3s;
    border-radius: 14px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.25);
}

input:focus {
    color: white;
    background: rgb(56, 73, 79);
}

textarea {
    resize: none;
}
</style>