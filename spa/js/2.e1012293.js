(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{8281:function(t,a,s){"use strict";s("a27a")},a27a:function(t,a,s){},b186:function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("q-page",{staticClass:"flex justify-center",attrs:{padding:""}},[s("q-btn",{staticClass:"back-btn",attrs:{icon:"arrow_back",round:"",color:"primary"},on:{click:function(a){return t.$router.back()}}}),s("div",{staticClass:"column justify-between custom_contained full-width"},[s("details-card",{attrs:{char:t.character}}),s("chapter-list",{attrs:{episodes:t.episodes}}),s("card-list",{attrs:{list:t.characters}})],1)],1)},c=[],r=(s("ddb0"),s("c995")),i=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"custom_container full-width q-py-lg"},[s("div",{staticClass:"custom_details column flex-center full-width"},[s("p",{staticClass:"text-h3 self-start q-ml-sm"},[t._v(t._s(t.char.name))]),s("div",{staticClass:"flex  q-gutter-sm full-width"},[s("q-img",{staticClass:"custom_details-img",attrs:{src:t.char.image,fit:"contain"}}),s("q-card",{staticClass:"column justify-evenly custom_details-card",attrs:{flat:""}},[s("q-card-section",[s("span",{staticClass:"text-h5 full-width"},[t._v("Status: ")]),s("span",[t._v(t._s(t.char.status))])]),s("q-card-section",[s("span",{staticClass:"text-h5"},[t._v("Gender: ")]),s("span",[t._v(t._s(t.char.gender))])]),s("q-card-section",[s("span",{staticClass:"text-h5"},[t._v("Origin: ")]),s("span",[t._v(t._s(t.char.origin.name))])]),s("q-card-section",[s("span",{staticClass:"text-h5"},[t._v("Species: ")]),s("span",[t._v(t._s(t.char.species))])])],1)],1)])])},n=[],l={name:"details",props:{char:Object}},o=l,d=s("2877"),u=s("068f"),h=s("f09f"),p=s("a370"),m=s("eebe"),f=s.n(m),_=Object(d["a"])(o,i,n,!1,null,null,null),C=_.exports;f()(_,"components",{QImg:u["a"],QCard:h["a"],QCardSection:p["a"]});var g=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"flex items-center q-mb-md custom_contained overflow-hidden"},[s("div",{staticClass:"content scroll-x"},[s("q-list",{staticClass:"flex items-center no-wrap q-gutter-sm full-height"},t._l(t.episodes,(function(a){return s("q-card",{key:a,staticClass:"card",attrs:{bordered:"",flat:""}},[s("q-card-section",[s("div",{staticClass:"text-bold"},[t._v(t._s(a.name))]),s("div",{},[t._v(t._s(a.air_date))])])],1)})),1)],1)])},v=[],b={name:"episodes",props:["episodes"]},x=b,q=(s("8281"),s("1c1c")),w=Object(d["a"])(x,g,v,!1,null,"66ee1fd4",null),y=w.exports;f()(w,"components",{QList:q["a"],QCard:h["a"],QCardSection:p["a"]});var $={name:"character",data(){return{show:!1,baseURL:"https://rickandmortyapi.com/api/character/",character:{},characters:[],episodes:[]}},props:["id"],components:{"chapter-list":y,"card-list":r["a"],"details-card":C},beforeRouteUpdate(t,a,s){this.getCharacter(t.params.id),this.getRamdonCharacters(3)},beforeMount(){this.getCharacter(),this.getRamdonCharacters(3)},methods:{async getCharacter(t=this.id){let a=await this.$axios.get(`${this.baseURL}${t}`);this.character=a.data,a.data.episode.length>0&&this.getCharacterEpisodes(a.data.episode)},async getCharacterEpisodes(t){const a=await t.map((t=>this.$axios.get(t))),s=await Promise.all(a);this.episodes=s.map((t=>t.data))},async getRamdonCharacters(t){let a=[];for(let e=1;e<=t;){let t=Math.ceil(101*Math.random());a.some((a=>a===t))||(a.push(t),e++)}console.log(a);let s=await this.$axios.get(`${this.baseURL}/${a.toString()}`);this.characters=s.data}}},Q=$,k=s("9989"),j=s("9c40"),O=Object(d["a"])(Q,e,c,!1,null,null,null);a["default"]=O.exports;f()(O,"components",{QPage:k["a"],QBtn:j["a"]})},c995:function(t,a,s){"use strict";var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"flex flex-center q-pt-lg custom_contained q-py-none"},[s("div",{staticClass:"flex justify-center q-gutter-xs-md q-gutter-lg full-width"},t._l(t.list,(function(a){return s("q-card",{key:a.id,staticClass:"custom_card shadow-4"},[s("router-link",{attrs:{to:"/character/"+a.id}},[s("q-img",{staticClass:"custom_card-img bg-secundary ",attrs:{src:a.image,"spinner-color":"primary"}}),s("q-card-section",{staticClass:"q-py-sm text-h6 custom_card-text"},[t._v("\n          "+t._s(a.name)+"\n        ")]),s("q-card-section",{staticClass:"q-pt-none custom_card-text"},[s("div",[s("span",{staticClass:"text-bold"},[t._v("Status: ")]),t._v(t._s(a.status))]),s("div",[s("span",{staticClass:"text-bold",attrs:{icon:"favorite"}},[t._v("Origin: ")]),t._v(t._s(a.origin.name))])])],1)],1)})),1)])},c=[],r={data(){return{}},props:["list"]},i=r,n=s("2877"),l=s("f09f"),o=s("068f"),d=s("a370"),u=s("eebe"),h=s.n(u),p=Object(n["a"])(i,e,c,!1,null,null,null);a["a"]=p.exports;h()(p,"components",{QCard:l["a"],QImg:o["a"],QCardSection:d["a"]})}}]);