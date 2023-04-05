<script setup>
import {ref,reactive} from 'vue'
import axios from 'axios'
import {login,loginByToken,SendVerifyCode,register} from '../api/users'
const finish = ref(false)
const user = reactive({
    email:'',
    pwd:''
});

const form=ref()
function submit(){
    // form.value.submit()
    
    login(user);
    // axios.post('http://localhost:8080/users/login',user)
    // .then(function(response){
    //     console.log(error);
    // });
}

function clickRegister(){
    console.log(this)
    var email=prompt("请键入邮箱(用以验证你的账户)")
    SendVerifyCode(email,()=>{
        var code=prompt('请检查邮箱，键入验证码(不能切换标签页，建议新开窗口)')
        var pwd=prompt('OK ! 现在，请输入你的验证码。一些浏览器会自动生成密码，我也推荐你使用他们！因为EAST LAUGH可以看到你的密码。你的浏览器插件也可以查看密码。')
        register(email,pwd,code)
    });
}
</script>

<template>

    <myHeader />
    <div class="container">
        <form class="login-board neum" ref="form" @submit.prevent="login">
            <div class="logo" @click="submit" :class="{'active':user.pwd!=''}">
                <!-- <i v-if="user.pwd==''" class="fa-solid fa-sailboat"></i>
                <i v-else class="fa-solid fa-right-to-bracket"></i> -->
                <i :class="{hide:user.pwd!='',ready:true}" class="fa-solid fa-sailboat"></i>
                <i :class="{hide:user.pwd=='',go:true}" class="fa-solid fa-right-to-bracket"></i>
            </div>
            <input type="email" class="neum" placeholder="邮箱" v-model="user.email"/>
            <input type="password" class="neum" placeholder="密码" v-model="user.pwd"/>
        </form>
        <div class="tips neum" style="text-align: center;">
            <neumorphismButton @click="clickRegister" >注册 </neumorphismButton>
            <!-- <p>
                等你输入完密码后
            </p>
            <p>
                登录就会浮现
                {{ user }}
            </p> -->
            <div class="div"></div>
        </div>
    </div>

</template>
<!-- 布局 -->
<style scoped>
.container {

    /* position: fixed; */

    /* pointer-events: none; */

    display: flex;
    justify-content: center;
    align-items: center;

}

.login-board {
    /* pointer-events: all; */

    /* z-index: 3; */
    height: 600px;
    width: 400px;
    /* background-color: black; */
    margin-right: 30PX;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.tips {
    /* z-index: 3; */
    height: 600px;
    width: 400px;
    /* background-color: rgb(145, 58, 58); */
}
</style>
<!-- 细节 -->
<style scoped>
.logo {
    overflow: hidden;
    position: relative;
    height: 60px;
    width: 60px;
    transition: 0.1s;

    border-radius: 8px;
    background: var(--color-background);
    box-shadow: inset 4px 4px 8px var(--btn-hover),
        inset -4px -4px 8px var(--btn-left-top-shadow);

    font-size: 35px;
    
    display: flex;
    justify-content: center;
    align-items: center;

    margin-bottom: 5px;

}

.logo.active:hover{
    background-color: var(--btn-hover);
}

.login-board input{
    height: 35px;
    width: 60%;
    margin: 10px 0;
}
.logo i {
    
}
</style>

<style scoped>
.ready{
    position: absolute;

    transform-origin: -10px -10px;
    transform: rotateZ(0deg);
    transition: 0.5s ease-in-out;
}

.ready.hide{
    transform: rotateZ(90deg);

}

.go{
    /* position: absolute; */

    transform-origin: -10px -10px;
    transform: rotateZ(0deg);
    transition: 0.5s ease-in-out;

    animation: 1s ease-in-out 0.47s swipe infinite;
}

.go.hide{
    animation: none;
    transform: rotateZ(-90deg);
}

.go.hide:hover{

}

@keyframes swipe {
    0%{
        transform: translateX(-6px);
    }
    50%{
        transform: translateX(8px);
    }
    100%{
        transform: translateX(-6px);
    }

}
</style>