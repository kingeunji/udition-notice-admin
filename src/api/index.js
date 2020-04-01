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




export const listsPage ={
    list(bodyFormData){
    // list(pageNum){
        // const bodyFormData = new FormData
        // bodyFormData.set("requestPage", pageNum)
        // console.log("num", pageNum)
        return instance.post("api/notice/list", bodyFormData)
    }
}

export const del ={
    list(bodyFormData){
    
        return instance.post("api/notice/delete", bodyFormData)
    }
}

export const modi ={
    list(bodyFormData){
    
        return instance.post("api/notice/update", bodyFormData)
    }
}




