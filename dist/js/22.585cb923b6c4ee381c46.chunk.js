webpackJsonp([22,49],{1178:function(e,t,a){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=a(0),s=a.n(i),o=a(595),u=a(738),d=a(587),c=a(586),m=a(593),f=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),h=function(e){function t(e){n(this,t);var a=l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={listvalid:[],list:[],listfilter:[],valueformrisk:{id:0,name:"",odds:"",probabilityofdefault:0,min:0,max:0,status:""},valueformbank:{id:0,name:""},valueflag:{attributeid:"",flagequals:!0,flagequalsnumber:!0,flagerange:!0,flagsave:!1,flagadd:!1,flagedit:!0}},a}return r(t,e),f(t,[{key:"onChangeName",value:function(e){var t=e.target.value,a=this.state.valueformrisk;a.name=t,this.setState(a)}},{key:"onChangeOdds",value:function(e){var t=e.target.value,a=this.state.valueformrisk;a.odds=t,this.setState(a)}},{key:"onChangeprobabilityofdefault",value:function(e){var t=e.target.value,a=this.state.valueformrisk;a.probabilityofdefault=t,this.setState(a)}},{key:"onChangeMin",value:function(e){var t=e.target.value,a=this.state.valueformrisk;a.min=t,this.setState(a)}},{key:"onChangeMax",value:function(e){var t=e.target.value,a=this.state.valueformrisk;a.max=t,this.setState(a)}},{key:"onChangeStatus",value:function(e){var t=e.target.value,a=this.state.valueformrisk;a.status=t,this.setState(a)}},{key:"componentDidMount",value:function(){this.setform()}},{key:"setform",value:function(){var e=this.state.valueformrisk,t=this.state.valueflag;e.name=u.valueroulesfromtablerisk.name,e.id=u.valueroulesfromtablerisk.id,e.odds=u.valueroulesfromtablerisk.odds,e.probabilityofdefault=u.valueroulesfromtablerisk.probabilityofdefault,e.min=u.valueroulesfromtablerisk.min,e.max=u.valueroulesfromtablerisk.max,e.status=u.valueroulesfromtablerisk.status,""!==u.valueroulesfromtablerisk.name?(t.flagadd=!0,t.flagedit=!1):(t.flagadd=!1,t.flagedit=!0),this.setState(t),this.setState(e)}},{key:"validation",value:function(){var e="",t=[],a=this.state.valueformrisk.name;if(""==a&&(e="Name Tidak Boleh Kosong \r\n ",t.push(e)),a=this.state.valueformrisk.odds,""==a&&(e="Odds Tidak Boleh Kosong \r\n ",t.push(e)),a=this.state.valueformrisk.min,""==a&&(e="Min Score Tidak Boleh Kosong \r\n ",t.push(e)),0==(a=this.state.valueformrisk.max)||""==a)e="Max Score Tidak Boleh Kosong \r\n ",t.push(e);else{this.state.valueformrisk.min>a&&(e="Max Tidak Boleh Kecil Dari Min \r\n ",t.push(e))}a=this.state.valueformrisk.status,""==a&&(e="Status Tidak Boleh Kosong \r\n ",t.push(e)),this.state.listvalid=t}},{key:"cancelformroules",value:function(){window.location.href="/#/risklevel"}},{key:"editformroules",value:function(){if(this.validation(),0==this.state.listvalid.length){var e=d.K,t=this.state.valueformrisk;fetch(e,{method:"POST",headers:m.a,body:JSON.stringify(t)}).then(function(e){return e.json()}).then(function(e){""==e.message?window.location.href="/#/risklevel":alert(e.message)})}else{var a="";this.state.listvalid.map(function(e){a+=e}),this.state.listvalid=[],alert(a)}}},{key:"saveformroules",value:function(){if(this.validation(),0==this.state.listvalid.length){var e=d.L,t=this.state.valueformrisk;fetch(e,{method:"POST",headers:m.a,body:JSON.stringify(t)}).then(function(e){return e.json()}).then(function(e){""==e.message?window.location.href="/#/risklevel":alert(e.message)})}else{var a="";this.state.listvalid.map(function(e){a+=e}),this.state.listvalid=[],alert(a)}}},{key:"deleteformroules",value:function(){var e={id:this.state.valueformrisk.id+""},t=d.M;fetch(t,{method:"POST",headers:m.a,body:JSON.stringify(e)}).then(function(e){return e.json()}).then(function(e){window.location.href="/#/risklevel"})}},{key:"render",value:function(){return s.a.createElement("div",{id:"content"},s.a.createElement("div",{className:"row"},s.a.createElement(o.a,{items:["Risk Level"],className:"col-xs-12 col-sm-7 col-md-7 col-lg-4"})),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-sm-6"},s.a.createElement("div",{className:"form-group"},s.a.createElement("div",{className:"inputGroup-sizing-default"},s.a.createElement("h4",{className:"input",style:{textAlign:"left"}},s.a.createElement("b",null,c.a.translate("Name"))),s.a.createElement("input",{className:"form-control input-lg",placeholder:c.a.translate("Name"),type:"text",name:"Name","data-smart-validate-input":"","data-required":"","data-minlength":"4","data-maxLength":"100","data-message":"Please specify your Name",onChange:this.onChangeName.bind(this),value:this.state.valueformrisk.name}))))),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-sm-6"},s.a.createElement("div",{className:"form-group"},s.a.createElement("div",{className:"inputGroup-sizing-default"},s.a.createElement("h4",{className:"input",style:{textAlign:"left"}},s.a.createElement("b",null,c.a.translate("Odds"))),s.a.createElement("input",{className:"form-control input-lg",placeholder:c.a.translate("Odds"),type:"text",name:"Odds","data-smart-validate-input":"","data-required":"","data-minlength":"4","data-maxLength":"100","data-message":"Please specify your Odds",onChange:this.onChangeOdds.bind(this),value:this.state.valueformrisk.odds}))))),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-sm-6"},s.a.createElement("div",{className:"form-group"},s.a.createElement("div",{className:"inputGroup-sizing-default"},s.a.createElement("h4",{className:"input",style:{textAlign:"left"}},s.a.createElement("b",null,c.a.translate("Probability Of Defaults"))),s.a.createElement("input",{className:"form-control input-lg",placeholder:c.a.translate("Probability Of Defaults"),type:"text",name:"probabilityofdefault","data-smart-validate-input":"","data-required":"","data-minlength":"4","data-maxLength":"100","data-message":"Please specify your probabilityofdefault",onChange:this.onChangeprobabilityofdefault.bind(this),value:this.state.valueformrisk.probabilityofdefault}))))),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-sm-6"},s.a.createElement("div",{className:"form-group"},s.a.createElement("div",{className:"inputGroup-sizing-default"},s.a.createElement("h4",{className:"input",style:{textAlign:"left"}},s.a.createElement("b",null,"Min Score")),s.a.createElement("input",{className:"form-control input-lg",placeholder:"Min Score",type:"text",name:"MinScore","data-smart-validate-input":"","data-required":"","data-minlength":"4","data-maxLength":"100","data-message":"Please specify your Min Score",onChange:this.onChangeMin.bind(this),value:this.state.valueformrisk.min}))))),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-sm-6"},s.a.createElement("div",{className:"form-group"},s.a.createElement("div",{className:"inputGroup-sizing-default"},s.a.createElement("h4",{className:"input",style:{textAlign:"left"}},s.a.createElement("b",null,"Max Score")),s.a.createElement("input",{className:"form-control input-lg",placeholder:"Max Score",type:"text",name:"MaxScore","data-smart-validate-input":"","data-required":"","data-minlength":"4","data-maxLength":"100","data-message":"Please specify your Max Score",onChange:this.onChangeMax.bind(this),value:this.state.valueformrisk.max}))))),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-md-6"},s.a.createElement("div",{className:"form-group"},s.a.createElement("label",null,s.a.createElement("h4",{style:{float:"left"}},s.a.createElement("b",null,"Status"))),s.a.createElement("div",{className:"inputGroup-sizing-default"},s.a.createElement("select",{className:"form-control input-lg ","data-smart-validate-input":"","data-required":"","data-message-required":"Please specify your Status",name:"Status",defaultValue:"",value:this.state.valueformrisk.status,onChange:this.onChangeStatus.bind(this)},s.a.createElement("option",{value:"",selected:!0},"Select Status"),s.a.createElement("option",{value:"A"},"Approved"),s.a.createElement("option",{value:"R"},"Reject"),s.a.createElement("option",{value:"U"},"Underwriting")))))),s.a.createElement("div",{hidden:this.state.valueflag.flagadd},s.a.createElement("div",{className:"widget-body"},s.a.createElement("button",{name:"submit",onClick:this.saveformroules.bind(this),type:"button",style:{height:"50px",width:"70px"}},"Save"),"      ",s.a.createElement("button",{name:"submitcancel",onClick:this.cancelformroules.bind(this),type:"button",style:{height:"50px",width:"95px"}},"Cancel"))),s.a.createElement("div",{hidden:this.state.valueflag.flagedit},s.a.createElement("div",{className:"widget-body"},s.a.createElement("button",{name:"submitedit",onClick:this.editformroules.bind(this),type:"button",style:{height:"50px",width:"95px"}},"Save ( Edit )"),"      ",s.a.createElement("button",{name:"submitdelete",onClick:this.deleteformroules.bind(this),type:"button",style:{height:"50px",width:"95px"},hidden:!0},"Delete"),"      ",s.a.createElement("button",{name:"submitcancel",onClick:this.cancelformroules.bind(this),type:"button",style:{height:"50px",width:"95px"}},"Cancel"))))}}]),t}(s.a.Component),p=h;t.default=p;!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(h,"FormBank","C:/kantor/github/CreditScoringFrontEnd/src/app/routes/risklevel/components/FormRiskLevel.js"),__REACT_HOT_LOADER__.register(p,"default","C:/kantor/github/CreditScoringFrontEnd/src/app/routes/risklevel/components/FormRiskLevel.js"))}()},738:function(e,t,a){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e){}function s(e,t,a){}Object.defineProperty(t,"__esModule",{value:!0}),a.d(t,"valueroulesfromtablerisk",function(){return y});var o=a(0),u=a.n(o),d=a(598),c=(a.n(d),a(595)),m=a(600),f=a(608),h=(a.n(f),a(609)),p=(a.n(h),a(587)),v=a(586),b=a(593),g=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),y={id:0,name:"",odds:"",probabilityofdefault:0,min:0,max:0,status:""},E=function(e){function t(e){n(this,t);var a=l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.onRowClick=function(){return a.__onRowClick__REACT_HOT_LOADER__.apply(a,arguments)},a.createCustomInsertButton=function(){return a.__createCustomInsertButton__REACT_HOT_LOADER__.apply(a,arguments)},a.state={listitems:[]},a}return r(t,e),g(t,[{key:"componentDidMount",value:function(){var e=this;y={id:0,name:"",odds:"",probabilityofdefault:0,min:0,max:0,status:""};var t=p.N;fetch(t,{method:"GET",headers:b.a}).then(function(e){return e.json()}).then(function(t){e.setState({listitems:t.data})})}},{key:"__onRowClick__REACT_HOT_LOADER__",value:function(e){var t=this.state.listitems.filter(function(t){return t.id==e.id});y.id=e.id,t.map(function(e){y.name=e.namerisk,y.odds=e.odds,y.probabilityofdefault=e.probabilityofdefault,y.min=e.min,y.max=e.max,y.status=e.status}),window.location.href="/#/formrisklevel"}},{key:"__createCustomInsertButton__REACT_HOT_LOADER__",value:function(e){var t=this;return u.a.createElement(d.InsertButton,{onClick:function(){return t.handleInsertButtonClick(e)}})}},{key:"onAfterInsertRow",value:function(e){}},{key:"render",value:function(){var e=[];this.state.listitems.map(function(t){var a=t.id,n=t.namerisk,l=t.min+" s/d "+t.max,r="";"A"==t.status?r="Approved":"R"==t.status?r="Rejected":"U"==t.status&&(r="UnderWriting");var i={id:a,name:n,odds:t.odds,probabilityofdefault:t.probabilityofdefault,score:l,status:r};e.push(i)});var t={insertBtn:this.createCustomInsertButton,onRowClick:this.onRowClick,afterInsertRow:this.onAfterInsertRow,expandBy:"column"},a={mode:"click",blurToSave:!0,nonEditableRows:function(){},afterSaveCell:s};return u.a.createElement("div",{id:"content"},u.a.createElement("div",{className:"row"},u.a.createElement(c.a,{items:["Risk Level"],className:"col-xs-12 col-sm-7 col-md-7 col-lg-4"}),u.a.createElement("div",{className:"col-xs-4 col-sm-4 col-md-4 col-log-4"},u.a.createElement("a",{href:"#/formrisklevel",className:"btn btn-info btn-lg "},v.a.translate("Add Risk Level")))),u.a.createElement("div",{className:"row"},u.a.createElement("article",{className:"col-sm-12"},u.a.createElement(m.a,{editbutton:!1,color:"darken"},u.a.createElement("header",null,u.a.createElement("span",{className:"widget-icon"}," ",u.a.createElement("i",{className:"fa fa-table"})," "),u.a.createElement("h2",null,"Data")),u.a.createElement("div",null,u.a.createElement("div",{className:"widget-body no-padding"},u.a.createElement(d.BootstrapTable,{data:e,pagination:!0,striped:!0,hover:!0,condensed:!0,search:!0,options:t,cellEdit:a,headerStyle:{background:"#aaaadd"},expandableRow:this.isExpandableRow,containerStyle:{background:"#FFFFFF"},expandComponent:this.expandComponent,searchPlaceholder:"Search from any columns...",expandColumnOptions:{expandColumnVisible:!1}},u.a.createElement(d.TableHeaderColumn,{dataField:"id",dataSort:!0,width:"20%",dataAlign:"center",headerAlign:"center",isKey:!0,editable:!1,expandable:!1,filter:{type:"TextFilter",placeholder:"Please enter a value",delay:10}},"ID"),u.a.createElement(d.TableHeaderColumn,{dataField:"name",dataSort:!0,width:"20%",dataAlign:"center",headerAlign:"center",editable:!1,expandable:!1,filter:{type:"TextFilter",placeholder:"Please enter a value",delay:10}},v.a.translate("Name")),u.a.createElement(d.TableHeaderColumn,{dataField:"odds",dataSort:!0,width:"20%",dataAlign:"center",headerAlign:"center",editable:!1,expandable:!1,filter:{type:"TextFilter",placeholder:"Please enter a value",delay:10}},v.a.translate("Odds")),u.a.createElement(d.TableHeaderColumn,{dataField:"probabilityofdefault",dataSort:!0,width:"20%",dataAlign:"center",headerAlign:"center",editable:!1,expandable:!1,filter:{type:"TextFilter",placeholder:"Please enter a value",delay:10}},v.a.translate("Probability Of Defaults")),u.a.createElement(d.TableHeaderColumn,{dataField:"score",dataSort:!0,width:"10%",dataAlign:"center",headerAlign:"center",editable:!1,expandable:!1,filter:{type:"TextFilter",placeholder:"Please enter a value",delay:10}},v.a.translate("Score")),u.a.createElement(d.TableHeaderColumn,{dataField:"status",dataSort:!0,width:"10%",dataAlign:"center",headerAlign:"center",editable:!1,expandable:!1,filter:{type:"TextFilter",placeholder:"Please enter a value",delay:10}},"Status"))))))))}}]),t}(u.a.Component),k=E;t.default=k;!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(y,"valueroulesfromtablerisk","C:/kantor/github/CreditScoringFrontEnd/src/app/routes/risklevel/components/RiskLevel.js"),__REACT_HOT_LOADER__.register(i,"onAfterInsertRow","C:/kantor/github/CreditScoringFrontEnd/src/app/routes/risklevel/components/RiskLevel.js"),__REACT_HOT_LOADER__.register(s,"onAfterSaveCell","C:/kantor/github/CreditScoringFrontEnd/src/app/routes/risklevel/components/RiskLevel.js"),__REACT_HOT_LOADER__.register(E,"RiskLevel","C:/kantor/github/CreditScoringFrontEnd/src/app/routes/risklevel/components/RiskLevel.js"),__REACT_HOT_LOADER__.register(k,"default","C:/kantor/github/CreditScoringFrontEnd/src/app/routes/risklevel/components/RiskLevel.js"))}()}});