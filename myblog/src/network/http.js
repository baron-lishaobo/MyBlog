//get 请求

import axios from 'axios'
//方式一
axios.get('user?id=123')
    .then(function(response) {
        console.log(response);
    }).catch(function(error) {
        console.log(error)
    })
    //方式二

axios.get('/url', {
    params: { id: 123 }
}).then(function(response) {
    console.log(response)
}).catch(function(error) {
    console.log(error)
})

//post 请求

axios.post('/user', {
    firstname: 'baron',
    lastname: 'li'
}).then(function(response) {
    console.log(response);
}).catch(function(error) {
    console.log(error);
})

//执行多次请求

//请求一
function getUserAccout() {
    return axios.get('/user');
}

//请求二

function getUserPermission() {
    return axios.get('/user');
}

axios.all([getUserAccout(), getUserPermission()])
    .then(axios.spread(function(acct, perms) {
        //两个请求都完成
    }))