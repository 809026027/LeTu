<template>
    <div class="container">
        <image class="backgroundimage" :style="{height:imgH,width:imgW}" src="img/login.jpg"></image>
        <div class="dialog_container">
            <image class="logo" src="https://ss2.bdstatic.com/8_V1bjqh_Q23odCf/pacific/upload_9765489_1444961475324.jpg"></image>
            <input type="text" autofocus="true" class="title-input" placeholder="用户名" v-model="user.name"/>
            <input type="password" class="title-input" placeholder="密码" v-model="user.password"/>
            <div class="bottom">
                <div class="ok"><text @click="sub();" class="text">登录</text></div>
                <text @click="jump('/top')" class="cancel">注册</text>
            </div>
            <div v-for="item in list">
                <span>{{item.name+"--"+item.password}}</span>
            </div>
        </div>
    </div>
</template>
<style>
    .container{
        top: 0;
        left: 0;
        align-items: center;
    }
    .backgroundimage {
        position:absolute;
        left:0px;
        top:0px;
        z-index:-1;
        width:100%;
        height:100%;
    }
    .logo {
        margin-top: 20px;
        width:200px;
        height:100px;
    }
    .dialog_container{
        top:200px;
        width: 800px;
        align-items: center;
        justify-content: center;
    }
    .title-input{
        placeholder-color: #fff;
        color:#fff;
        background-color: transparent;
        border-bottom-width: 2px;
        border-bottom-color: #fff;
        margin-top: 20px;
        height: 80px;
        width: 500px;
    }
    input::-webkit-input-placeholder{
        color: #fff;opacity:1;
    }
    .bottom{
        width: 500px;
        justify-content: space-between;
        margin-top: 30px;
        flex-direction: row;
    }
    .cancel{
        text-align: center;
        padding: 15px;
        border-radius: 10px;
        background-color:gainsboro;
        width:200px;
    }
    .ok{
        text-align: center;
        padding: 15px;
        border-radius: 10px;
        background-color:crimson;
        width:200px;
    }
    .text{
        color:white;
        text-align: center;
    }
</style>

<script>
    export default {
        data (){
            return {
                user: {
                    name: '',
                    password: ''
                },
                list:[],
                imgH:weex.config.env.deviceHeight / weex.config.env.deviceWidth*750,
                imgW:750
            }
        },
        methods:{
            sub(){
                // get the environment variables
                const env = weex.config.env || WXEnvironment
                var self = this;
                // open a new window (tab) on the web
                if (env.platform === 'Web') {
                    var result = self.$store.dispatch('ACTION_DO', {name:'userLogin.do',data:this.user});

                    result.then(function(value) {
                        //success
                        if(value.code == '1') {
                            self.list = value.data.list;
                        }
                    }, function(value) {
                        // failure
                    });
                    return
                }
                else {
                    var modal = weex.requireModule('modal');
                    modal.alert(
                        {
                            message: '登录成功！',
                            okTitle: '确定'
                        },
                        function(e) {
                            // TODO after the alert is complete.
                            //change router path on native (Android & iOS)
                            self.jump('/my/baidu')
                    });
                }

            }
        }
    }
</script>