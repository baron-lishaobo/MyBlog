"use strict";

var _vue = _interopRequireDefault(require("vue"));

var _App = _interopRequireDefault(require("./App.vue"));

require("./registerServiceWorker");

var _router = _interopRequireDefault(require("./router"));

var _antDesignVue = _interopRequireDefault(require("ant-design-vue"));

require("ant-design-vue/dist/antd.css");

var _request = _interopRequireDefault(require("./network/request"));

var _index = _interopRequireDefault(require("./store/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].use(_antDesignVue["default"]);

_vue["default"].config.productionTip = false;
var vue = new _vue["default"]({
  router: _router["default"],
  store: _index["default"],
  render: function render(h) {
    return h(_App["default"]);
  }
}).$mount('#app');
_vue["default"].prototype.http = _request["default"];

_vue["default"].prototype.http.init(vue);