(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{332:function(t,e,n){var content=n(335);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(43).default)("43076363",content,!0,{sourceMap:!1})},334:function(t,e,n){"use strict";var o=n(332);n.n(o).a},335:function(t,e,n){(t.exports=n(42)(!1)).push([t.i,"img[data-v-e38e9eac]{margin:0;padding:0}",""])},336:function(t,e,n){"use strict";var o=n(339),r=n.n(o),c={data:function(){return{recipeinfo:""}},created:function(){this.addtiles()},methods:{addtiles:function(){var t=this;r.a.get("https://www.themealdb.com/api/json/v1/1/randomselection.php").then(function(e){console.log(e.data.meals),t.recipeinfo=e.data.meals}).catch(function(t){console.log(t)})}}},l=(n(334),n(20)),component=Object(l.a)(c,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-card-group",{attrs:{deck:""}},t._l(t.recipeinfo,function(e,o){return n("div",{staticStyle:{width:"460px"}},[o<4?n("div",[n("b-card",[n("img",{attrs:{src:e.strMealThumb,alt:"",height:"350",width:"400"}}),t._v(" "),n("b-card-title",[t._v("\n                  "+t._s(e.strMeal)+"\n               ")]),t._v(" "),n("b-card-text",[t._v("\n                  "+t._s(e.strCategory)+"\n               ")]),t._v(" "),n("b-button",{attrs:{href:"#",variant:"warning"}},[t._v("Get Recipe")]),t._v(" "),n("div",{attrs:{slot:"footer"},slot:"footer"},[n("small",{staticClass:"text-muted"},[t._v(" Country of origin : "+t._s(e.strArea))])])],1)],1):t._e()])}),0)],1)},[],!1,null,"e38e9eac",null);e.a=component.exports},350:function(t,e,n){var content=n(383);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(43).default)("6d9ef698",content,!0,{sourceMap:!1})},382:function(t,e,n){"use strict";var o=n(350);n.n(o).a},383:function(t,e,n){(t.exports=n(42)(!1)).push([t.i,"*[data-v-34362da5]{text-align:center}",""])},387:function(t,e,n){"use strict";n.r(e);var o=n(141),r=n(336),c={components:{navbar:o.a,foodtiles:r.a}},l=(n(382),n(20)),component=Object(l.a)(c,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container-fluid"},[e("h1",[this._v("More Recipes")]),this._v(" "),e("foodtiles"),this._v(" "),e("foodtiles"),this._v(" "),e("foodtiles"),this._v(" "),e("foodtiles")],1)},[],!1,null,"34362da5",null);e.default=component.exports}}]);