(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d9f7e"],{"6a30":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-navigation-drawer",{attrs:{fixed:"",temporary:""},model:{value:t.sideNav,callback:function(e){t.sideNav=e},expression:"sideNav"}},[a("v-divider"),a("v-list",{attrs:{dense:""}},[t._l(t.menuItems,function(e){return a("v-list-tile",{key:e.name,attrs:{to:e.path}},[a("v-list-tile-action",[a("v-icon",[t._v(t._s(e.icon))])],1),a("v-list-tile-content",[t._v(t._s(e.name))])],1)}),a("v-divider")],2)],1),a("v-toolbar",{staticClass:"primary",attrs:{dark:""}},[a("v-toolbar-side-icon",{on:{click:function(e){e.stopPropagation(),t.sideNav=!t.sideNav}}}),a("v-toolbar-title",[a("router-link",{staticStyle:{cursor:"pointer"},attrs:{to:"/",tag:"span"}},[t._v("Meses pendents d'enregistrar vots")])],1),a("v-spacer"),a("v-toolbar-items",{staticClass:"hidden-sm-and-down"},t._l(t.menuItems,function(e){return a("v-list-tile",{key:e.name,attrs:{to:e.path}},[a("v-btn",{attrs:{flat:""}},[t._v(t._s(e.name))])],1)}),1)],1),a("v-content",[a("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.meses,pagination:t.pagination},on:{"update:pagination":function(e){t.pagination=e}},scopedSlots:t._u([{key:"items",fn:function(e){return[a("td",[t._v(t._s(e.item.municipi))]),a("td",{staticClass:"text-xs-right"},[t._v(t._s(e.item.idMesa))]),a("td",{staticClass:"text-xs-left"},[t._v(t._s(e.item.comarca))]),a("td",{staticClass:"text-xs-right"},[t._v(t._s(e.item.districte))]),a("td",{staticClass:"text-xs-left"},[t._v(t._s(e.item.localElectoral))]),a("td",{staticClass:"text-xs-right"},[t._v(t._s(e.item.mesa))]),a("td",{staticClass:"text-xs-right"},[t._v(t._s(e.item.lletraInici))]),a("td",{staticClass:"text-xs-right"},[t._v(t._s(e.item.lletraFi))])]}}])})],1)],1)},s=[],l={data(){return{meses:[],sideNav:!1,headers:[{text:"Municipi",align:"left",sortable:!0,value:"Municipi"},{text:"idMesa",align:"right",sortable:!0,value:"idMesa"},{text:"comarca",align:"left",sortable:!0,value:"comarca"},{text:"districte",align:"right",sortable:!0,value:"districte"},{text:"localElectoral",align:"left",sortable:!0,value:"localElectoral"},{text:"mesa",align:"right",sortable:!0,value:"mesa"},{text:"lletraInici",align:"right",sortable:!0,value:"lletraInici"},{text:"lletraFi",align:"right",sortable:!0,value:"lletraFi"}],pagination:{rowsPerPage:20}}},mounted(){axios.get("https://jordicardoso.github.io/28a2019vue/data/meses_pendents.json").then(t=>{this.meses=t.data})},computed:{menuItems(){return this.$router.options.routes.filter(t=>null==t.beforeEnter)}}},n=l,r=a("2877"),o=a("6544"),c=a.n(o),d=a("7496"),v=a("8336"),u=a("549c"),m=a("8fea"),p=a("ce7e"),g=a("132d"),_=a("8860"),b=a("ba95"),x=a("40fe"),f=a("5d23"),h=a("f774"),V=a("9910"),C=a("71d9"),k=a("2a7f"),w=a("706c"),I=Object(r["a"])(n,i,s,!1,null,null,null);e["default"]=I.exports;c()(I,{VApp:d["a"],VBtn:v["a"],VContent:u["a"],VDataTable:m["a"],VDivider:p["a"],VIcon:g["a"],VList:_["a"],VListTile:b["a"],VListTileAction:x["a"],VListTileContent:f["a"],VNavigationDrawer:h["a"],VSpacer:V["a"],VToolbar:C["a"],VToolbarItems:k["a"],VToolbarSideIcon:w["a"],VToolbarTitle:k["b"]})}}]);