import axios from "axios";
import {  ref } from 'vue'
export function login(user) {
    axios.post("http://localhost:8080/users/login", user)
        .then(function (response) {
            if (response.data.msg) {
                alert(response.data.msg);
            }
            localStorage.setItem('token', response.data.data)
            loginByToken();
        }).catch((reason)=>alert(reason))
}

export function loginByToken() {
    if (localStorage.getItem('token') != null) {
        axios.post("http://localhost:8080/users/loginByJwt", {
            token: localStorage.getItem('token')
        }).then((response) => {
            if (response.data.data) {
                state.value = response.data.data;
            } else {
                state.value = null;
            }
        }).catch((reason)=>alert(reason))
    } else {
        state.value = null;
    }
}


export function SendVerifyCode(email,finish){
    axios.post("http://localhost:8080/users/register",{
        email
    }).then(function(response){
        console.log(this)
        if(response.data.msg){
            alert(response.data.msg)
        }
        if(response.data.code==1){
            finish()
        }
    })

}

export function register(email,pwd,code){
    axios.post('http://localhost:8080/users/registerWithCode',{
        email,pwd,code
    }).then(response=>{
        if(response.data.msg){
            alert(response.data.msg)
        }
        if(response.data.code==1){
            console.log(response.data)
        }
    })
}
export const state = ref(null)