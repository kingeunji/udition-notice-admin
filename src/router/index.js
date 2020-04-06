import Vue from "vue";
import VueRouter from "vue-router";
<<<<<<< HEAD
// 파일 import !
// import PostModifyDel from "../views/notice/postModityDel/PostModifyDel.vue"
=======
<<<<<<< HEAD
// 파일 import !
// import PostModifyDel from "../views/notice/postModityDel/PostModifyDel.vue"
=======
import Main from "../views/notice/editor/Main"
import PostModifyDel from "../../src/views/notice/PostModifyDel/PostModifyDel"
>>>>>>> d8048aef5d7d5232987de1377c402c32fa1a7fec
>>>>>>> cb0d941b4e0d30f049bf11f5c6b22bd5ee8d791c

Vue.use(VueRouter);

// route 설정하기
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> cb0d941b4e0d30f049bf11f5c6b22bd5ee8d791c
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
<<<<<<< HEAD
=======
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
>>>>>>> cb0d941b4e0d30f049bf11f5c6b22bd5ee8d791c

// router 사용하고 싶은 곳에
/* <router-view /> 태그 넣기 */