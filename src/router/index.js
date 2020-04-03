import Vue from "vue";
import VueRouter from "vue-router";
import Main from "../views/notice/editor/Main"
import PostModifyDel from "../../src/views/notice/PostModifyDel/PostModifyDel"

Vue.use(VueRouter);

// route 설정하기
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

