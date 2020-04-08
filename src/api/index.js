import axios from 'axios'
const instance = axios.create({
    baseURL: "http://192.168.0.44:8081/",
});

//에디터 페이지

export const submitWoImg = {
    list(bodyFormData) {
        console.log(bodyFormData)
        return instance.post('api/notice/insert', bodyFormData)
    }
}

export const submitWImg = {
    list2(bodyFormData2) {
        console.log(bodyFormData2)
        return instance.post('api/notice/insert', bodyFormData2)
    },
    list(bFDWI) {
        console.log(bFDWI)
        return instance.post('api/notice/saveFile', bFDWI, {onUploadProgress: uploadEvent => {
            console.log("upload progress: " + Math.round(uploadEvent.loaded / uploadEvent.total * 100)+'%')
        } })
    }
}


//약관 작성

export const writingNotice = {
    list(bodyFormData) {
        return instance.post('api/terms/insert', bodyFormData)
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

export const getWholeData = {
    list(bodyFormData){
        return instance.post("api/notice/detail",bodyFormData)
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


// policyClassify
export const classify = {
    list() {
        return instance.post('api/category/mList')
    }
}
export const classifyUpdate = {
    list(formData) {
        return instance.post('api/category/updateCategory',formData)
    }
}
