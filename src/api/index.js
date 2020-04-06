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

//공지사항


export const listsPage ={
    list(bodyFormData){
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

// 이용약관 데이터 불러오는 API

export const getTerms = {
    list(bodyFormData){
        return instance.post("api/terms/mList",bodyFormData)
    }
}

// 게시중단

export const stopPost = {
    list(bodyFormData){
        return instance.post("api/terms/block",bodyFormData)
    }
}

//게시

export const postTerms = {
    list(bodyFormData){
        return instance.post("api/terms/unblock",bodyFormData)
    }
}

//수정

export const upDateTerms = {
    list(bodyFormData){
        return instance.post("api/terms/update",bodyFormData)
    }
}



