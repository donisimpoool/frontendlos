webpackJsonp([49],{1525:function(e,t,a){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function o(e){}function i(e,t,a){}Object.defineProperty(t,"__esModule",{value:!0}),a.d(t,"valueroulesfromtablerisk",function(){return E});var s=a(2),d=a.n(s),c=a(1385),u=(a.n(c),a(1382)),m=a(1387),f=a(1395),p=(a.n(f),a(1396)),_=(a.n(p),a(1374)),b=a(1373),h=a(1380),v=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),E={id:0,name:"",odds:"",probabilityofdefault:0,min:0,max:0,status:""},y=function(e){function t(e){n(this,t);var a=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.onRowClick=function(){return a.__onRowClick__REACT_HOT_LOADER__.apply(a,arguments)},a.createCustomInsertButton=function(){return a.__createCustomInsertButton__REACT_HOT_LOADER__.apply(a,arguments)},a.state={listitems:[]},a}return l(t,e),v(t,[{key:"componentDidMount",value:function(){var e=this;E={id:0,name:"",odds:"",probabilityofdefault:0,min:0,max:0,status:""};var t=_.N;fetch(t,{method:"GET",headers:h.a}).then(function(e){return e.json()}).then(function(t){e.setState({listitems:t.data})})}},{key:"__onRowClick__REACT_HOT_LOADER__",value:function(e){var t=this.state.listitems.filter(function(t){return t.id==e.id});E.id=e.id,t.map(function(e){E.name=e.namerisk,E.odds=e.odds,E.probabilityofdefault=e.probabilityofdefault,E.min=e.min,E.max=e.max,E.status=e.status}),window.location.href="/#/formrisklevel"}},{key:"__createCustomInsertButton__REACT_HOT_LOADER__",value:function(e){var t=this;return d.a.createElement(c.InsertButton,{onClick:function(){return t.handleInsertButtonClick(e)}})}},{key:"onAfterInsertRow",value:function(e){}},{key:"render",value:function(){var e=[];this.state.listitems.map(function(t){var a=t.id,n=t.namerisk,r=t.min+" s/d "+t.max,l="";"A"==t.status?l="Approved":"R"==t.status?l="Rejected":"U"==t.status&&(l="UnderWriting");var o={id:a,name:n,odds:t.odds,probabilityofdefault:t.probabilityofdefault,score:r,status:l};e.push(o)});var t={insertBtn:this.createCustomInsertButton,onRowClick:this.onRowClick,afterInsertRow:this.onAfterInsertRow,expandBy:"column"},a={mode:"click",blurToSave:!0,nonEditableRows:function(){},afterSaveCell:i};return d.a.createElement("div",{id:"content"},d.a.createElement("div",{className:"row"},d.a.createElement(u.a,{items:["Risk Level"],className:"col-xs-12 col-sm-7 col-md-7 col-lg-4"}),d.a.createElement("div",{className:"col-xs-4 col-sm-4 col-md-4 col-log-4"},d.a.createElement("a",{href:"#/formrisklevel",className:"btn btn-info btn-lg "},b.a.translate("Add Risk Level")))),d.a.createElement("div",{className:"row"},d.a.createElement("article",{className:"col-sm-12"},d.a.createElement(m.a,{editbutton:!1,color:"darken"},d.a.createElement("header",null,d.a.createElement("span",{className:"widget-icon"}," ",d.a.createElement("i",{className:"fa fa-table"})," "),d.a.createElement("h2",null,"Data")),d.a.createElement("div",null,d.a.createElement("div",{className:"widget-body no-padding"},d.a.createElement(c.BootstrapTable,{data:e,pagination:!0,striped:!0,hover:!0,condensed:!0,search:!0,options:t,cellEdit:a,headerStyle:{background:"#aaaadd"},expandableRow:this.isExpandableRow,containerStyle:{background:"#FFFFFF"},expandComponent:this.expandComponent,searchPlaceholder:"Search from any columns...",expandColumnOptions:{expandColumnVisible:!1}},d.a.createElement(c.TableHeaderColumn,{dataField:"id",dataSort:!0,width:"20%",dataAlign:"center",headerAlign:"center",isKey:!0,editable:!1,expandable:!1,filter:{type:"TextFilter",placeholder:"Please enter a value",delay:10}},"ID"),d.a.createElement(c.TableHeaderColumn,{dataField:"name",dataSort:!0,width:"20%",dataAlign:"center",headerAlign:"center",editable:!1,expandable:!1,filter:{type:"TextFilter",placeholder:"Please enter a value",delay:10}},b.a.translate("Name")),d.a.createElement(c.TableHeaderColumn,{dataField:"odds",dataSort:!0,width:"20%",dataAlign:"center",headerAlign:"center",editable:!1,expandable:!1,filter:{type:"TextFilter",placeholder:"Please enter a value",delay:10}},b.a.translate("Odds")),d.a.createElement(c.TableHeaderColumn,{dataField:"probabilityofdefault",dataSort:!0,width:"20%",dataAlign:"center",headerAlign:"center",editable:!1,expandable:!1,filter:{type:"TextFilter",placeholder:"Please enter a value",delay:10}},b.a.translate("Probability Of Defaults")),d.a.createElement(c.TableHeaderColumn,{dataField:"score",dataSort:!0,width:"10%",dataAlign:"center",headerAlign:"center",editable:!1,expandable:!1,filter:{type:"TextFilter",placeholder:"Please enter a value",delay:10}},b.a.translate("Score")),d.a.createElement(c.TableHeaderColumn,{dataField:"status",dataSort:!0,width:"10%",dataAlign:"center",headerAlign:"center",editable:!1,expandable:!1,filter:{type:"TextFilter",placeholder:"Please enter a value",delay:10}},"Status"))))))))}}]),t}(d.a.Component),C=y;t.default=C;!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(E,"valueroulesfromtablerisk","C:/kantor/github/CreditScoringFrontEnd/src/app/routes/risklevel/components/RiskLevel.js"),__REACT_HOT_LOADER__.register(o,"onAfterInsertRow","C:/kantor/github/CreditScoringFrontEnd/src/app/routes/risklevel/components/RiskLevel.js"),__REACT_HOT_LOADER__.register(i,"onAfterSaveCell","C:/kantor/github/CreditScoringFrontEnd/src/app/routes/risklevel/components/RiskLevel.js"),__REACT_HOT_LOADER__.register(y,"RiskLevel","C:/kantor/github/CreditScoringFrontEnd/src/app/routes/risklevel/components/RiskLevel.js"),__REACT_HOT_LOADER__.register(C,"default","C:/kantor/github/CreditScoringFrontEnd/src/app/routes/risklevel/components/RiskLevel.js"))}()}});