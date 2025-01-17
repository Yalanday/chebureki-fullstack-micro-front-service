import {defineStore} from 'pinia'

export const useCaptchaStore = defineStore('captcha', {
    state: () => ({
        _captcha: false,
    }),
    getters: {
        captcha: (state) => state._captcha,
    },
    actions: {
        setCaptcha() {
            this._captcha = !this._captcha;
        }
    }
})





