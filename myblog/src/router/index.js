import Vue from 'vue'
import VueRouter from 'vue-router'
//this.$router相当于一个全局路由器对象,包含了很多对象和属性(history),然和页面都可以调用其push,replace,go等方法
//this.$route表示当前路由对象,每个路由都会有一个route对象,是一个局部对象,可以获取name,path,params,query等属性

Vue.use(VueRouter)
const originalPush = VueRouter.prototype.replace
VueRouter.prototype.replace = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}
const Home = () =>
    import ('views/Home/Home.vue');

const Technology = () =>
    import ('views/Technology/Technology.vue');
const Life = () =>
    import ('views/Life/Life.vue');

const ReadBooks = () =>
    import ('views/ReadBooks/ReadBooks.vue');

const Profile = () =>
    import ('views/Profile/Profile.vue');

const Index = () =>
    import ('views/Index.vue');


const routes = [{
        path: '/',
        name: 'Index',
        component: Index,
        redirect: '/home'
    }, {
        path: '/home',
        name: 'Home',
        component: Home
    },
    {
        path: '/technology',
        component: Technology
    }, {
        path: '/life',
        component: Life
    }, {
        path: '/readbooks',
        component: ReadBooks
    },
    {
        path: '/profile',
        component: Profile
    }


]

const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router