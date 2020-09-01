"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vueRouter = _interopRequireDefault(require("vue-router"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

//this.$router相当于一个全局路由器对象,包含了很多对象和属性(history),然和页面都可以调用其push,replace,go等方法
//this.$route表示当前路由对象,每个路由都会有一个route对象,是一个局部对象,可以获取name,path,params,query等属性
_vue["default"].use(_vueRouter["default"]);

var originalPush = _vueRouter["default"].prototype.replace;

_vueRouter["default"].prototype.replace = function push(location) {
  return originalPush.call(this, location)["catch"](function (err) {
    return err;
  });
};

var Home = function Home() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('views/Home/Home.vue'));
  });
};

var Technology = function Technology() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('views/Technology/Technology.vue'));
  });
};

var Life = function Life() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('views/Life/Life.vue'));
  });
};

var ReadBooks = function ReadBooks() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('views/ReadBooks/ReadBooks.vue'));
  });
};

var Profile = function Profile() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('views/Profile/Profile.vue'));
  });
};

var Index = function Index() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('views/Index.vue'));
  });
};

var Login = function Login() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('views/Login.vue'));
  });
};

var routes = [{
  path: '/',
  name: 'Index',
  component: Index,
  redirect: '/home'
}, {
  path: '/home',
  name: 'Home',
  component: Home
}, {
  path: '/technology',
  component: Technology
}, {
  path: '/life',
  component: Life
}, {
  path: '/readbooks',
  component: ReadBooks
}, {
  path: '/profile',
  component: Profile
}, {
  path: '/login',
  name: 'Name',
  component: Login
}];
var router = new _vueRouter["default"]({
  mode: 'history',
  base: '/blog/',
  routes: routes
});
var _default = router;
exports["default"] = _default;