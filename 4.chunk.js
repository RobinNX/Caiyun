webpackJsonp([4],{30:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function f(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=n(1),u=o(a),i=n(17),d=o(i),b=n(31),s=o(b),g=d["default"].bind(s["default"]),l=function(e){function t(e){c(this,t);var n=p(this,Object.getPrototypeOf(t).call(this,e));return n._onWindowScroll=n._onWindowScroll.bind(n),n}return f(t,e),r(t,[{key:"componentDidMount",value:function(){this._onWindowScroll(),window.addEventListener("scroll",this._onWindowScroll,!1)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this._onWindowScroll,!1)}},{key:"_onWindowScroll",value:function(){var e=window.innerHeight+document.body.scrollTop,t=this.refs.lazyLoadImg;if(t.getAttribute("src"))return!1;if(t.offsetParent&&t.offsetParent.offsetTop<e){var o=t.getAttribute("data-src");o&&(t.src=n(87)("./"+o))}return!0}},{key:"render",value:function(){var e=this.props.imgSrc,t=g({base:!0});return u["default"].createElement("img",{ref:"lazyLoadImg","data-src":e,className:t})}}]),t}(u["default"].Component);l.propTypes={imgSrc:a.PropTypes.string},t["default"]=l},31:function(e,t){e.exports={base:"_3mloX",typing:"_1VngH",typingDelete:"_1Mdec",caret:"_269_z"}},38:function(e,t,n){e.exports=n.p+"22a7b0333d247c6df83dcf402c863cd1.jpg"},39:function(e,t,n){e.exports=n.p+"243024a567f8d917f258a035b51511ed.jpg"},40:function(e,t,n){e.exports=n.p+"63e12e26817c88d32ef2a3c7a2f58ca1.jpg"},41:function(e,t,n){e.exports=n.p+"fd77b1fa9530deaa2fca719fafcf7ae3.jpg"},42:function(e,t,n){e.exports=n.p+"a7e1b8fb3bf237de029c752516aef507.jpg"},43:function(e,t,n){e.exports=n.p+"d9decdbccc7a42b06f7f0ec7cff8e860.jpg"},44:function(e,t,n){e.exports=n.p+"cd1cb9522406d80c335defd538c5d47a.jpg"},45:function(e,t,n){e.exports=n.p+"1fc75a68aa25a5dea0ff73855b75a1c9.jpg"},46:function(e,t,n){e.exports=n.p+"da6cf7c3b11bb2bb8e4d89172ac09091.jpg"},47:function(e,t,n){e.exports=n.p+"1acdc39bafd3387e902f0c00433850c3.jpg"},48:function(e,t,n){e.exports=n.p+"3d49d141cd9ed650af8f2ab974a194a2.jpg"},49:function(e,t,n){e.exports=n.p+"b0768a0c19d2046f4f548bf485f4e4e1.jpg"},50:function(e,t,n){e.exports=n.p+"9b8e848a1995760dccd1e4002aa7cd2b.jpg"},51:function(e,t,n){e.exports=n.p+"9d3367e9b238b3e8545baca2f469f500.jpg"},52:function(e,t,n){e.exports=n.p+"2cec4c8b24efd6fe33eb01867db5c238.jpg"},53:function(e,t,n){e.exports=n.p+"405478866a6259ff7fee554d89dfc3a6.jpg"},54:function(e,t,n){e.exports=n.p+"948360e9755f5f856b202e0136612407.jpg"},55:function(e,t,n){e.exports=n.p+"00e7d64dd7e38473bc503673e819e2c1.jpg"},56:function(e,t,n){e.exports=n.p+"8f9e5a8c20da982911deecb669be7b1a.jpg"},57:function(e,t,n){e.exports=n.p+"681764b70e17a54080237a4136438bd0.jpg"},58:function(e,t,n){e.exports=n.p+"a3fc50053cd315d724324702cff1d69c.jpg"},59:function(e,t,n){e.exports=n.p+"5db46d8056c361f634c9e0f088395ab7.jpg"},60:function(e,t,n){e.exports=n.p+"2b22e39839cd51b7f518c7df44b836d2.jpg"},61:function(e,t,n){e.exports=n.p+"325c0d885c389368e2e0b86c6f8cc1b4.jpg"},62:function(e,t,n){e.exports=n.p+"30d332b62a68c1d348c909ab1fb3b37b.jpg"},63:function(e,t,n){e.exports=n.p+"f886204382ff21a3fa1b2955ff9e3dd4.jpg"},64:function(e,t,n){e.exports=n.p+"473e1bf2a8c16d8d4f018054adf10ea7.jpg"},65:function(e,t,n){e.exports=n.p+"900e8cf916c53de5755a53603912159b.jpg"},66:function(e,t,n){e.exports=n.p+"bfdd9231441db2c53630aa3a23249218.jpg"},67:function(e,t,n){e.exports=n.p+"4f780419b04d9f58429b4eb58fcd36e2.jpg"},68:function(e,t,n){e.exports=n.p+"955b978f88171f3cc6bbbf56fa8651e1.jpg"},69:function(e,t,n){e.exports=n.p+"38815fc5f68f41b18a6edc6099098512.jpg"},70:function(e,t,n){e.exports=n.p+"774a15ff5e0a2bf37a87872a40946772.jpg"},71:function(e,t,n){e.exports=n.p+"e3e78856868be3fb047cc4729181be87.jpg"},72:function(e,t,n){e.exports=n.p+"4fcc39da945d94e201eb559f88e05f31.jpg"},73:function(e,t,n){e.exports=n.p+"2995bbca2a13892b153d2ce72e41a2f0.jpg"},74:function(e,t,n){e.exports=n.p+"47ffb3ad4a7ef4bca1f1479e3d119da3.jpg"},75:function(e,t,n){e.exports=n.p+"3da12aa83b41c62dc9b30eaa323a0558.jpg"},76:function(e,t,n){e.exports=n.p+"94170bdfe7790d2b6b3bb13e5cd7d0f6.jpg"},77:function(e,t,n){e.exports=n.p+"f4f7a6abf8f576c1bd15d5264abdc4d8.jpg"},78:function(e,t,n){e.exports=n.p+"6227e3981941feafb2cdc1db86aee2ac.jpg"},79:function(e,t,n){e.exports=n.p+"1731b39a99bc13b19d0c13d0510a44ed.jpg"},80:function(e,t,n){e.exports=n.p+"479d7219727ac0481545e2673cd158af.jpg"},81:function(e,t,n){e.exports=n.p+"644d1aa5fcde960511a9a86c9c571458.jpg"},82:function(e,t,n){e.exports=n.p+"d6d16b9fd4bae001e31c63fe0ef144e2.jpg"},83:function(e,t,n){e.exports=n.p+"e9880c5b70bf3d475776d9791c6a1d60.jpg"},84:function(e,t,n){e.exports=n.p+"98a89e87aeda4f61efa8df1fb8fb78f6.jpg"},85:function(e,t,n){e.exports=n.p+"8cc914616e14307afe06107841249590.jpg"},86:function(e,t,n){e.exports=n.p+"c531965b69c3c835ae9c5d4e5d2af598.jpg"},87:function(e,t,n){function o(e){return n(c(e))}function c(e){return p[e]||function(){throw new Error("Cannot find module '"+e+"'.")}()}var p={"./bxf.jpg":38,"./ccd.jpg":39,"./cq.jpg":40,"./cxf.jpg":41,"./hbb.jpg":42,"./hh.jpg":43,"./hll.jpg":44,"./hly.jpg":45,"./home.jpg":46,"./home_0.jpg":47,"./home_1.jpg":48,"./home_2.jpg":49,"./home_3.jpg":50,"./home_4.jpg":51,"./hpf.jpg":52,"./hxt.jpg":53,"./hzh.jpg":54,"./hzq.jpg":55,"./lj.jpg":56,"./llh.jpg":57,"./logo.png":102,"./lx.jpg":58,"./lxf.jpg":59,"./ly.jpg":60,"./lyq.jpg":61,"./mkq.jpg":62,"./pbj.jpg":63,"./rfy.jpg":64,"./sb.jpg":65,"./sj.jpg":66,"./syw.jpg":67,"./tj.jpg":68,"./wbq.jpg":69,"./wt.jpg":70,"./wxz.jpg":71,"./wyt.jpg":72,"./xcc.jpg":73,"./xjj.jpg":74,"./xjy.jpg":75,"./xmx.jpg":76,"./xzy.jpg":77,"./ycj.jpg":78,"./yg.jpg":79,"./yjm.jpg":80,"./yyx.jpg":81,"./zcl.jpg":82,"./zeal.jpg":83,"./zl.jpg":84,"./zy.jpg":85,"./zyt.jpg":86};o.keys=function(){return Object.keys(p)},o.resolve=c,e.exports=o,o.id=87},307:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function f(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=n(1),u=o(a),i=n(320),d=o(i),b=n(30),s=o(b),g=function(e){function t(e){return c(this,t),p(this,Object.getPrototypeOf(t).call(this,e))}return f(t,e),r(t,[{key:"render",value:function(){return u["default"].createElement("div",{className:d["default"].about},u["default"].createElement("h1",null,"ABOUT"),u["default"].createElement("p",{className:d["default"].text},"也不知在黑暗中究竟沉睡了多久 也不知要有多难才能睁开双眼 我从远方赶来 恰巧你们也在 痴迷流连人间 我为她而狂野 我是这耀眼的瞬间 是划过天边的刹那火焰 我为你来看我不顾一切 我将熄灭永不能再回来 我在这里啊 就在这里啊 惊鸿一般短暂 像夏花一样绚烂"),u["default"].createElement(s["default"],{imgSrc:"home.jpg"}),u["default"].createElement("p",{className:d["default"].text},"这是一个多美丽又遗憾的世界 我们就这样抱着笑着还流着泪 我从远方赶来 赴你一面之约 痴迷流连人间 我为她而狂野 我是这耀眼的瞬间 是划过天边的刹那火焰 我为你来看我不顾一切 我将熄灭永不能再回来 我在这里啊 就在这里啊 惊鸿一般短暂 如夏花一样绚烂 我是这耀眼的瞬间 是划过天边的刹那火焰 我为你来看我不顾一切 我将熄灭永不能再回来 不虚此行呀 不虚此行呀 惊鸿一般短暂 开放在你眼前 我是这耀眼的瞬间 是划过天边的刹那火焰 我要你来爱我不顾一切 我将熄灭永不能再回来 一路春光啊 一路荆棘呀 惊鸿一般短暂 如夏花一样绚烂 这是一个不能停留太久的世界"))}}]),t}(u["default"].Component);e.exports=g},320:function(e,t){e.exports={about:"_3hagf",typing:"_1A1pa",typingDelete:"nrKMW",caret:"_3MTKg"}}});