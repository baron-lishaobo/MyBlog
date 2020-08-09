import axios from 'axios'

axios.defaults.timeout = 50000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

if (process.env.NODE_ENV == 'development') {
    axios.defaults.baseURL = 'http://127.0.0.1:9991/';
} else if (process.env.NODE_ENV == 'debug') {
    axios.defaults.baseURL = 'http://127.0.0.1:8990/';
} else if (process.env.NODE_ENV == 'production') {
    axios.defaults.baseURL = 'http://132.232.2.109:9991/';
}

let ipAddress = axios.defaults.baseURL;
let _showLoading; // _showLoading=true异步请求时会显示遮罩层,_showLoading=字符串,异步请求遮罩层显示当前字符串.

let $httpVue = null,
    currentToken = '';
const _Authorization = 'Authorization',
    _Bearer = 'Bearer';

// 1. 初始化对象
function init(vue) {
    $httpVue = vue;
}

// 2. 请求拦截过滤
axios.interceptors.request.use(config => {
    if (config.method === 'post') {
        //拦截过滤
    }
    return config;
}, err => {
    return Promise.reject(err);
});


// 3. 响应拦截过滤
axios.interceptors.response.use(res => {
    if (res.data.success) {
        // 成功拦截过滤要做的事
        return res
    }
    return Promise.resolve(res);
}, err => {
    let httpMessage = '';
    if (err.response) {
        if (err.response.data && err.response.data.message) {
            httpMessage = err.response.data.message;
        } else if (err.response.status == '404') {
            httpMessage = "Address is not exist!"
        }
    } else {
        httpMessage = 'Network seems to have some problems!';
    }
})

// 4. 获取身份令牌Token
function getToken() {
    if (currentToken) {
        return _Bearer + currentToken;
    } else {
        $httpVue.$store.getters.getToken();
    }
}

// 5. post请求
function post(url, params) {
    // axios.defaults.headers[_Authorization] = getToken();
    return new Promise((resolve, reject) => {
        //  axios.post(url, qs.stringify(params))   //
        axios.post(url, params)
            .then(response => {
                if (response.status == 202) {
                    getNewToken(() => { post(url, params); });
                    return;
                }
                resolve(response.data);
            }, err => {
                if (err.status == 202) {
                    getNewToken(() => { post(url, params); });
                    return;
                }
                reject(err.data && err.data.message ? err.data.message : '网络好像出了点问题~~');
            })
            .catch((error) => {
                reject(error)
            })
    })
}


// 6. get 请求
function get(url, param) {

    //axios.defaults.headers[_Authorization] = getToken();
    return new Promise((resolve, reject) => {
        axios.get(url, { params: param })
            .then(response => {
                if (response.status == 202) {
                    // getNewToken(() => { get(url, param); });
                    return;
                }
                resolve(response.data)
            }, err => {
                if (err.status == 202) {
                    // getNewToken(() => { get(url, param); });
                    return;
                }
                //redirect(response.data);
                reject(err)
            })
            .catch((error) => {
                reject(error)
            })
    })
}


// 7. Create XML Http Request
function createXHR() {
    if (XMLHttpRequest) {
        return new XMLHttpRequest();
    }
    if (ActiveXObject) {
        if (typeof arguments.callee.activeXString != "string") {
            var versions = [
                "MSXML2.XMLHttp.6.0",
                "MSXML2.XMLHttp",
                "MSXML2.XMLHttp.3.0"
            ];
            for (var i = 0; i < versions.length; i++) {
                try {
                    new ActiveXObject(versions[i]);
                    arguments.callee.activeXString = versions[i];
                    break;
                } catch (e) {
                    console.log("no");
                }
            }
        }
        return new ActiveXObject(arguments.callee.activeXString);
    }
}

// 8. Redirect 
function redirect(responseText, message) {
    try {
        let responseData = typeof responseText == 'string' ? JSON.parse(responseText) : responseText;
        //  $httpVue.$message.error(responseData.message || '~服务器好像出了点问题...')
        if ((responseData.hasOwnProperty('code') && responseData.code == 401) ||
            (responseData.data && responseData.data.code == 401)) {
            toLogin();
        } else {
            $httpVue.$message.error(message);
        }
    } catch (error) {
        console.log(error);
        $httpVue.$message.error(responseText)
    }
}

// 9 . To Login
function toLogin() {
    currentToken = "";
    $httpVue.$router.push({ path: '/login', params: { r: Math.random() } });
}

// 10. Ajax
function ajax(param) {
    let httpParam =
        Object.assign({
            url: '',
            headers: {},
            param: {},
            json: true,
            success: function() {},
            errror: function() {},
            type: 'post',
            async: true
        }, param);

    httpParam.url = axios.defaults.baseURL + httpParam.url.replace(/\/?/, '');
    httpParam.headers[_Authorization] = getToken();
    var xhr = createXHR();
    // console.log(xhr.readyState);
    xhr.onreadystatechange = function() {
        if (xhr.status == 403 || xhr.status == 401) {
            redirect(xhr.responseText);
            return;
        }
        if (xhr.status == 202) {
            getNewToken(() => {
                ajax(param);
            });
            return;
        }
        if (xhr.readyState == 4 && xhr.status == 200) {
            httpParam.success(httpParam.json ? JSON.parse(xhr.responseText) : xhr.responseText);
            return;
        }
        if (xhr.status != 0 && xhr.readyState != 1) {
            httpParam.errror(xhr);
        }
    };
    //初始化请求
    xhr.open(
        httpParam.type,
        httpParam.url,
        httpParam.async
    );
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    for (const key in httpParam.headers) {
        xhr.setRequestHeader(key, httpParam.headers[key]);
    }
    let dataStr = '';
    for (const key in httpParam.param) {
        dataStr += key + "=" + httpParam.param[key];
    }
    try {
        xhr.send(dataStr);
    } catch (error) {
        toLogin();
        //  console.log(error)
    }
}

// 11. Ajax Post
ajax.post = function(url, param, success, errror) {
    ajax({ url: url, param: param, success: success, error: errror, type: 'post' })
}

// 12. Ajax Get
ajax.get = function(url, param, success, errror) {
    ajax({ url: url, param: param, success: success, error: errror, type: 'get' })
}

// 13. Get New Token

function getNewToken(callBack) {
    ajax({
        url: "/api/User/replaceToken",
        param: {},
        json: true,
        success: function(x) {
            if (x.status) {
                let userInfo = $httpVue.$store.getters.getUserInfo();
                userInfo.token = x.data;
                currentToken = x.data;
                $httpVue.$store.commit('setUserInfo', userInfo);
                callBack();
            } else {
                console.log(x.message);
                toLogin();
            }
        },
        errror: function(ex) {
            console.log(ex);
            toLogin();
        },
        type: "post",
        async: false
    });


}
export default { post, get, ajax, init, ipAddress }