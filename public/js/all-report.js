(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{KuWX:function(t,e,a){"use strict";a.r(e);var s={data:function(){return{reportItems:{data:[],page:1,perPage:25,total:0,lastPage:1},fields:[{key:"#",thStyle:{width:"40px"},class:"text-center"},{key:"ref_id",sortable:!0,label:this.trans("report.ref_id"),thClass:"text-center",class:"table-col-other"},{key:"provider",label:this.trans("report.provider"),thClass:"text-center"},{key:"agent",label:this.trans("report.agent"),thClass:"text-center"},{key:"username",sortable:!0,label:this.trans("common.username"),thClass:"text-center"},{key:"currency",sortable:!0,label:this.trans("common.currency"),class:"table-col-cur"},{key:"amount",sortable:!0,label:this.trans("report.amount"),thClass:"text-center"},{key:"end_balance",sortable:!0,label:this.trans("report.end_balance"),thClass:"text-center",class:"table-col-num",thStyle:{minWidth:"105px"}},{key:"datetime",sortable:!0,label:this.trans("common.datetime"),class:"table-col-time"}],isLoading:!1,searchData:{agent:[],member:"",startedAt:"",finishedAt:"",page:1,perPage:25},agentOptions:this.getJsonData("agent-list")}},mounted:function(){var t=this;this.agentOptions.forEach(function(e){t.searchData.agent.push(e.id)}),this.handleTime("today"),this.searchData.startedAt="2019-07-01 00:00:00",this.search()},methods:{search:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:25;this.isLoading||(this.isLoading=!0,this.searchData.page=e,this.searchData.perPage=Number(a),this.$ajax("POST","/api/report/list/all_report",this.searchData).then(function(e){t.reportItems=e,t.isLoading=!1}).catch(function(t){console.error(t)}))},agentOnChange:function(t){var e=this;this.searchData.agent=[];var a=t.target.value;a?this.searchData.agent.push(a):this.agentOptions.forEach(function(t){e.searchData.agent.push(t.id)})},handleTime:function(t){var e=this.getDatetimeRange(t);this.searchData.startedAt=e[0],this.searchData.finishedAt=e[1]}}},n=a("KHd+"),r=Object(n.a)(s,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[a("list-grid",{attrs:{data:t.reportItems,search:t.search}},[a("template",{slot:"search-form"},[a("b-input-group",{directives:[{name:"show",rawName:"v-show",value:t.user.isAdmin||t.user.isAdminSub,expression:"user.isAdmin || user.isAdminSub"}],staticClass:"mr-2 mb-1",attrs:{prepend:t.trans("report.agent")}},[a("b-form-select",{attrs:{value:""},nativeOn:{change:function(e){return t.agentOnChange(e)}}},[a("option",{attrs:{value:""}},[t._v(t._s(t.trans("common.all")))]),t._v(" "),t._l(t.agentOptions,function(e){return a("option",{key:e.id,domProps:{value:e.id}},[t._v("\r\n                        "+t._s(e.username)+"\r\n                    ")])})],2)],1),t._v(" "),a("b-input-group",{staticClass:"mr-2 mb-1",attrs:{prepend:t.trans("report.member")}},[a("b-input",{attrs:{type:"text"},model:{value:t.searchData.member,callback:function(e){t.$set(t.searchData,"member",e)},expression:"searchData.member"}})],1),t._v(" "),a("b-input-group",{staticClass:"mr-2 mb-1",attrs:{prepend:t.trans("common.started_at")}},[a("datetime",{attrs:{format:"YYYY-MM-DD H:i:s"},model:{value:t.searchData.startedAt,callback:function(e){t.$set(t.searchData,"startedAt",e)},expression:"searchData.startedAt"}})],1),t._v(" "),a("b-input-group",{staticClass:"mr-2 mb-1",attrs:{prepend:t.trans("common.finished_at")}},[a("datetime",{attrs:{format:"YYYY-MM-DD H:i:s"},model:{value:t.searchData.finishedAt,callback:function(e){t.$set(t.searchData,"finishedAt",e)},expression:"searchData.finishedAt"}})],1),t._v(" "),a("b-input-group",{staticClass:"mr-2 mb-1"},[a("button",{staticClass:"btn btn-outline-primary mr-2",on:{click:function(e){return t.handleTime("today")}}},[t._v(t._s(t.trans("common.today")))]),t._v(" "),a("button",{staticClass:"btn btn-outline-primary mr-2",on:{click:function(e){return t.handleTime("yesterday")}}},[t._v(t._s(t.trans("common.yesterday")))]),t._v(" "),a("button",{staticClass:"btn btn-outline-primary mr-2",on:{click:function(e){return t.handleTime("this_week")}}},[t._v(t._s(t.trans("common.this_week")))]),t._v(" "),a("button",{staticClass:"btn btn-outline-primary",on:{click:function(e){return t.handleTime("this_month")}}},[t._v(t._s(t.trans("common.this_month")))])])],1),t._v(" "),a("template",{slot:"table"},[a("b-table",{attrs:{responsive:"",bordered:"",striped:"",small:"",items:t.reportItems.data,fields:t.fields,busy:t.isLoading,"show-empty":"","empty-text":t.trans("common.empty-data")},scopedSlots:t._u([{key:"#",fn:function(e){return[t._v("\r\n                    "+t._s(e.index+1+t.reportItems.perPage*(t.reportItems.page-1))+"\r\n                ")]}},{key:"amount",fn:function(e){return[a("section",{class:"table-col-"+(e.item.amount>=0?"greenNum":"redNum")},[t._v("\r\n                        "+t._s(t._f("numberFormat")(e.item.amount))+"\r\n                    ")])]}},{key:"end_balance",fn:function(e){return[t._v("\r\n                    "+t._s(t._f("numberFormat")(e.item.end_balance))+"\r\n                ")]}}])},[a("loading",{attrs:{slot:"table-busy"},slot:"table-busy"})],1)],1)],2)],1)},[],!1,null,null,null);e.default=r.exports}}]);