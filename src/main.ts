import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import "amfe-flexible/index.js";
import router from './router'
import store from './store/index'
import {getUrlKey} from '@/utils'
import axios from 'axios'
let instance = createApp(App)
instance.use(router)
instance.use(store)
instance.mount('#app')

router.beforeEach((to,from,next) => {
    next()
    // let openId = localStorage.getItem('openId');
    // if (!openId) {
    //     let code = getUrlKey('code')
    //     if(!code){
    //         let appId = 'wx2f30e7b5d5d73796'
    //         let redirectUrl = encodeURIComponent(window.location.href)
    //         window.location.href = `https://open.weixin.qq.com/connect/oauth2/authorize? appid=${appId}&redirect_uri=${redirectUrl}&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect&connect_redirect=1`
    //     }else{
    //         axios.post('http://ahzhwuliu.viewcenter.cn/index.php/api/common/getAccessTokenByCode', {
    //             code
    //         })
    //         .then((res) => {

    //         })
    //     }
    // } else {
    //     next()
    // }
    

})