import axios from 'axios'
const instance = axios.create({
    baseURL: "http://192.168.0.44:8081/",
});

export const submitWoImg = {
    list(title, type, tts) {
        // eslint-disable-next-line no-console
        console.log(title, type, tts)
        var bodyFormData = new FormData();
        bodyFormData.set('title', title)
        bodyFormData.set('noticeType', type)
        bodyFormData.set('tts', tts)
        return instance.get('api/notice/insert', bodyFormData)
    }
}

export const submitWImg = {
    list(title, type, img, tts) {
        // eslint-disable-next-line no-console
        console.log(title, type, tts)
        var bodyFormData = new FormData();
        bodyFormData.set('title', title)
        bodyFormData.set('noticeType', type)
        bodyFormData.set('downloadFile', img)
        bodyFormData.set('tts', tts)
        return instance.post('api/notice/insert', bodyFormData)
    }
}