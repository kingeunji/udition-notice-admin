import Vue from "vue";
import VueRouter from "vue-router";
<<<<<<< HEAD
// 파일 import !
// import PostModifyDel from "../views/notice/postModityDel/PostModifyDel.vue"
=======
import Main from "../views/notice/editor/Main"
import PostModifyDel from "../../src/views/notice/PostModifyDel/PostModifyDel"
>>>>>>> d8048aef5d7d5232987de1377c402c32fa1a7fec

Vue.use(VueRouter);

// route 설정하기
<<<<<<< HEAD
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
=======
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
>>>>>>> d8048aef5d7d5232987de1377c402c32fa1a7fec

