import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        permission: [],
        isLoading: false,
        userInfo: null
    },
    mutations: {
        setPermission(state, data) { //调用方式 this.$store.commit('setPermission', data)
            if (!data || typeof data != 'object') return;
            if (data instanceof Array) {
                state.permission.push(...data);
            } else {
                state.permission = data;
            }
        },
        setUserInfo(state, data) {
            state.userInfo = data;
            localStorage.setItem(keys.USER, JSON.stringify(data));
        },
        clearUserInfo(state) {
            state.permission = [];
            state.userInfo = null;
            localStorage.removeItem(keys.USER);
        },
        updateLoadingState(state, flag) {
            state.isLoading = flag
        }
    },
    getters: {
        // 相当获取state的计算属性,使用action或者mutations不能获取到state对象
        getPermission: (state) => (path) => { //调用方式 store.getters.getPermission('sys_User')
            if (!path) return state.permission;
            return state.permission.find(x => x.path == path);
        },
        getUserInfo: (state) => () => {
            getUserInfo(state);
            return state.userInfo;
        },
        getUserName: (state) => () => {
            getUserInfo(state);
            if (state.userInfo) {
                return state.userInfo.userName;
            }
            return '未获取到登陆信息';
        },
        getToken: (state) => () => {
            getUserInfo(state);
            if (state.userInfo) {
                return 'Bearer ' + state.userInfo.token;
            }
            return '';
        },
        isLogin: (state) => () => {
            if (getUserInfo(state)) {
                return true;
            }
            return false;
        },
        isLoading: (state) => () => {
            return state.isLoading;
        }
    },
    actions: {
        setPermission(context, data) {
            context.commit('setPermission', data); //调用方式 store.dispatch('push')
        },
        toDo(context) {
            return context.Store.m;
        },
        onLoading(context, flag) {
            context.commit("updateLoadingState", flag);
        }
    }
})

export default store;