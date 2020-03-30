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


