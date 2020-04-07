import Vue from "vue";
import VueRouter from "vue-router";
import Main from "../views/notice/editor/Main"
import PostModifyDel from "../../src/views/notice/PostModifyDel/PostModifyDel"
import PolicyClassify from "../views/termsManagement/PolicyClassify"
// import what from "../views/termsManagement/what"


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
        ,
        {
            path:'/terms',
            component:PolicyClassify
        }
    ]
})


