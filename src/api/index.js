import axios from 'axios'
const instance = axios.create({
    baseURL: "http://192.168.0.44:8081/",
});

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
        return instance.post('api/notice/saveFile', bFDWI, {
            headers: {
            'Content-Type': 'multipart/form-data'
            }
            
        })
    }
}

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


