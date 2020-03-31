import Vue from "vue";
import VueRouter from "vue-router";
// 파일 import !
<<<<<<< HEAD
=======
import PostModifyDel from "../views/notice/postModityDel/PostModifyDel"
>>>>>>> 376bb54aacb8ec629284beaf4832cb9a77167b99

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
=======
export default new VueRouter({
    routes: [
        {
            path: '/',
            name: 'backOffice게시',
            component: PostModifyDel
        }
    ]
})
>>>>>>> 376bb54aacb8ec629284beaf4832cb9a77167b99

// router 사용하고 싶은 곳에
/* <router-view /> 태그 넣기 */