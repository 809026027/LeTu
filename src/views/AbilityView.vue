<template>
    <div>
        <app-header></app-header>
        <div @click="captureImage" class="btnbox"><text class="btn" >照相</text></div>
        <div @click="captureVideo" class="btnbox"><text class="btn" >摄像</text></div>
        <text class="fixed-button" @click="jump(`/`)">返回</text>
    </div>
</template>

<style scoped>
    .btn{
        margin: 20px;
        padding: 20px;
        background-color: #1ba1e2;
        border-radius: 5px;
        color: #fff;
        text-align:center;
        cursor: pointer;
        font-size: 28px;
    }
    .fixed-button {
        position: absolute;
        bottom: 50px;
        right: 50px;
        background-color: #FC6621;
        border-radius: 10px;
        width: 120px;
        padding: 15px;
        color: white;
        text-align: center;
    }
</style>

<script>
    import AppHeader from '../components/app-header.vue'
    var camera = weex.requireModule('camera');
    var modal = weex.requireModule('modal');
    export default {
        components: { AppHeader},
        methods: {
            captureImage () {
                camera.captureImage({},(ret) => {
                    modal.alert(
                        {
                            message: ret.path,
                            okTitle: '确定'
                        }
                    );
                })
            },
            captureVideo () {
                camera.captureVideo({},(ret) => {
                    var modal = weex.requireModule('modal');
                    modal.alert(
                        {
                            message: ret.path,
                            okTitle: '确定'
                        }
                    );
                })
            }
        }
    }
</script>
