/* eslint-disable */
import axios from 'axios';

// http request 拦截器
axios.interceptors.request.use(
    config => {
        config.data = JSON.stringify(config.data);
        config.headers = {
            'Content-Type':'application/x-www-form-urlencoded'
        }
        return config;
    },
    error => {
        return Promise.reject(err);
    }
);

// http response 拦截器
axios.interceptors.response.use(
    response => {
        if(response.data.errCode ==2){
                router.push({
                path:"/login",
                querry:{redirect:router.currentRoute.fullPath}//从哪个页面跳转
            })
        }
        return response;
    },
    error => {
        return Promise.reject(error)
    }
)


/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */
const fetch = (url, params = {}) => {
    return new Promise((resolve, reject) => {
        axios.get(url, {
            params: params
        }).then(res => {
            resolve(res.data)
        }).catch(err => {
            reject('get err :', err);
        })
    })
}

/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */
const post = (url, data = {}) => {
    return new Promise((resolve, reject) => {
        axios.post(url,data).then(res => {
            resolve(res.data);
        }).catch(err => {
            reject('post err', err);
        })
    })
}

 /**
 * 封装patch请求
 * @param url
 * @param data
 * @returns {Promise}
 */
const patch = (url, data = {}) => {
    return new Promise((resolve, reject) => {
        axios.patch(url,data).then(res => {
            resolve(res.data);
        }).catch(err => {
            reject('path err:', err)
        })
    })
}

 
export {
    fetch,
    post,
    patch
}