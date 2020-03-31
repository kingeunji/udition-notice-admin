<<<<<<< HEAD
import axios from 'axios'
const instance = axios.create({
    baseURL: "http://192.168.0.44:8081/",
});

export const submitWoImg = {
    list(bodyFormData) {
        // var bodyFormData = new FormData();
        // bodyFormData.set('title', title)
        // bodyFormData.set('noticeType', type)
        // bodyFormData.set('tts', tts)
        return instance.get('api/notice/insert', bodyFormData)
    }
}

export const submitWImg = {
    list(title, type, img, tts) {
        console.log(title, type, tts)
        var bodyFormData = new FormData();
        bodyFormData.set('title', title)
        bodyFormData.set('noticeType', type)
        bodyFormData.set('downloadFile', img)
        bodyFormData.set('tts', tts)
        return instance.post('api/notice/insert', bodyFormData)
    }
}
=======
import axios from "axios"

const instance = axios.create({
    baseURL:"http://192.168.0.44:8081/"
})

export const listsPage ={
    list(bodyFormData){
    // list(pageNum){
        // const bodyFormData = new FormData
        // bodyFormData.set("requestPage", pageNum)
        // // eslint-disable-next-line no-console
        // console.log("num", pageNum)
        return instance.post("api/notice/list", bodyFormData)
    }
}


>>>>>>> 376bb54aacb8ec629284beaf4832cb9a77167b99
