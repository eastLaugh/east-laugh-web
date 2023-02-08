import axios, { Axios } from "axios";
import {inject,reactive} from 'vue'
export function login(user) {
    axios.post("http://localhost:8080/users/login", user)
        .then(function (response) {
            if (response.data.msg) {
                alert(response.data.msg);
            }
            // if (response.data.data) {
                localStorage.setItem('token', response.data.data)
                loginByToken();
            // }
        })
}
export const state = reactive({
    data:null
})
export function loginByToken() {
    if (localStorage.getItem('token')!=null) {
        
        axios.post("http://localhost:8080/users/loginByJwt", {
            token: localStorage.getItem('token')
        }).then((response)=>{
            if(response.data.data){
                state.data =response.data.data;
            }else{
                state.data =null;
            }
        })
    }else{
        
        state.data=null;
    }
    console.log(state)
}
