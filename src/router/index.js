import Vue from "vue";
import VueRouter from "vue-router";
// 파일 import !
// import PostModifyDel from "../views/notice/postModityDel/PostModifyDel.vue"

import Main from "../views/notice/editor/Main"
import PostModifyDel from "../views/notice/PostModityDel/PostModifyDel"

Vue.use(VueRouter);

// route 설정하기

// export default new VueRouter({
//     routes: [
//         {
//             path: '/',
//             name: '',
//             component:
//         }
//     ]
// })
// export default new VueRouter({
//     routes: [
//         {
//             path: '/',
//             name: 'backOffice게시',
//             component: PostModifyDel
//         }
//     ]
// })

export default new VueRouter({
    routes: [
        {
            path: '/main',
            component: Main
        }
        ,
        {
            path: '/',
            component: PostModifyDel
        }
        // ,{
        //     path:"/notice-datail:id"
        //     component: noticeDatail
        // }
    ]
})


// router 사용하고 싶은 곳에
/* <router-view /> 태그 넣기 */