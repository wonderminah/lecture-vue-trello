// 백엔드 API를 호출하는 js 파일

import axios from 'axios'
import router from '../router/index.js'

const DOMAIN = 'http://localhost:3000'
const UNAUTHORIZED = 401
const onUnauthroized = () => {
    // 로그인 페이지로 이동
    router.push('/login')
}

const request = (method, url, data) => {
    return axios({
        method,
        url: DOMAIN + url,
        data
    })
    .then(result => {
        result.data
    })
    .catch(result => {
        const {status} = result.response.status
        if (status === UNAUTHORIZED) return onUnauthroized()
        throw Error(result)
    })
}

export const setAuthInHeader = token => {
    axios.defaults.headers.common['Authorization'] = token ? `Bearer ${token}` : null
}

export const board = {
    fetch() {
        return request('get', '/boards')
    }
}

export const auth = {
    login(email, password) {
        return request('post', '/login', {email, password})
    }
}