import Vue from "vue";
import VueRouter from "vue-router";
import Main from "../views/notice/editor/Main"
import PostModifyDel from "../views/notice/postModityDel/PostModifyDel"

Vue.use(VueRouter);

// route 설정하기
export default new VueRouter({
    routes: [
        {
            path: '/main',
            component: Main
        },
        {
            path: '/',
            component: PostModifyDel
        }
    ]
})