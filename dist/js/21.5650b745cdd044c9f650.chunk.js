webpackJsonp([21,41],{1197:function(e,t,a){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o=a(0),s=a.n(o),i=a(595),u=a(586),c=a(741),d=a(587),m=(a(597),a(601)),p=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),f=function(e){function t(e){n(this,t);var a=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={listvalid:[],list:[],listfilter:[],valueform:{id:0,userid:"",password:"",name:"",ruleid:"",level:0,isapproval:"N",created:""},valueformbank:{id:0,name:""},valueflag:{attributeid:"",disablepassword:!0,flagequalsnumber:!0,flagerange:!0,flagsave:!1,flagadd:!1,flagedit:!0}},a}return l(t,e),p(t,[{key:"componentDidMount",value:function(){this.setform()}},{key:"onChangeApproval",value:function(e){var t=e.target.value,a=this.state.valueform;a.isapproval=t,this.setState(a)}},{key:"onChangeLevel",value:function(e){var t=e.target.value,a=this.state.valueform;a.level=t,this.setState(a)}},{key:"onChangeUser",value:function(e){var t=e.target.value,a=this.state.valueform;a.userid=t,this.setState(a)}},{key:"onChangeName",value:function(e){var t=e.target.value,a=this.state.valueform;a.name=t,this.setState(a)}},{key:"onChangePassword",value:function(e){var t=e.target.value,a=this.state.valueform;a.password=t,this.setState(a)}},{key:"setform",value:function(){var e=this.state.valueform,t=this.state.valueflag;e.id=c.valueuser.id,e.userid=c.valueuser.userid,e.name=c.valueuser.name,e.ruleid=c.valueuser.ruleid,e.level=c.valueuser.level,e.isapproval=c.valueuser.isapproval,e.password=c.valueuser.password,0!==c.valueuser.id?(t.flagadd=!0,t.flagedit=!1,t.disablepassword=!0):(t.flagadd=!1,t.flagedit=!0,t.disablepassword=!1),this.setState(t),this.setState(e)}},{key:"validation",value:function(){var e="",t=[],a=this.state.valueform.name;""==a&&(e="Name Tidak Boleh Kosong \r\n ",t.push(e)),a=this.state.valueform.userid,""==a&&(e="User Tidak Boleh Kosong \r\n ",t.push(e)),a=this.state.valueform.password,""==a&&(e="Password Tidak Boleh Kosong \r\n ",t.push(e)),a=this.state.valueform.level,"0"==a&&(e="Level Tidak Boleh Kosong \r\n ",t.push(e)),this.state.listvalid=t}},{key:"saveformroules",value:function(){if(this.validation(),0==this.state.listvalid.length){var e=d.h,t=this.state.valueform;t.created=JSON.parse(a.i(m.a)(localStorage.getItem(d.a))).id,fetch(e,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(t)}).then(function(e){return e.json()}).then(function(e){window.location.href="/#/user"})}else this.alertmsg()}},{key:"editformroules",value:function(){if(this.validation(),0==this.state.listvalid.length){var e=d.i,t=this.state.valueform;t.created=JSON.parse(a.i(m.a)(localStorage.getItem(d.a))).id,fetch(e,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(t)}).then(function(e){return e.json()}).then(function(e){window.location.href="/#/user"})}else this.alertmsg()}},{key:"deleteformroules",value:function(){var e={id:this.state.valueform.id+"",create:JSON.parse(a.i(m.a)(localStorage.getItem(d.a))).id},t=d.j;fetch(t,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(e)}).then(function(e){return e.json()}).then(function(e){window.location.href="/#/user"})}},{key:"alertmsg",value:function(){var e="";this.state.listvalid.map(function(t){e+=t}),this.state.listvalid=[],alert(e)}},{key:"cancelformroules",value:function(){window.location.href="/#/user"}},{key:"render",value:function(){return s.a.createElement("div",{id:"content"},s.a.createElement("div",{className:"row"},s.a.createElement(i.a,{items:["User"],className:"col-xs-12 col-sm-7 col-md-7 col-lg-4"})),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-sm-6"},s.a.createElement("div",{className:"form-group"},s.a.createElement("div",{className:"inputGroup-sizing-default"},s.a.createElement("h4",{className:"input",style:{textAlign:"left"}},s.a.createElement("b",null,"Name")),s.a.createElement("input",{className:"form-control input-lg",placeholder:"Name",type:"text",name:"Name","data-smart-validate-input":"","data-required":"","data-minlength":"4","data-maxLength":"100","data-message":"Please specify your Name",value:this.state.valueform.name,onChange:this.onChangeName.bind(this)}))))),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-sm-6"},s.a.createElement("div",{className:"form-group"},s.a.createElement("div",{className:"inputGroup-sizing-default"},s.a.createElement("h4",{className:"input",style:{textAlign:"left"}},s.a.createElement("b",null,"User")),s.a.createElement("input",{className:"form-control input-lg",placeholder:"User",type:"text",name:"User","data-smart-validate-input":"","data-required":"","data-minlength":"4","data-maxLength":"100","data-message":"Please specify your User",value:this.state.valueform.userid,onChange:this.onChangeUser.bind(this)}))))),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-sm-6"},s.a.createElement("div",{className:"form-group"},s.a.createElement("div",{className:"inputGroup-sizing-default"},s.a.createElement("h4",{className:"input",style:{textAlign:"left"}},s.a.createElement("b",null,"Password")),s.a.createElement("input",{className:"form-control input-lg",placeholder:"Password",type:"password",name:"Password","data-smart-validate-input":"","data-required":"","data-minlength":"4","data-maxLength":"100","data-message":"Please specify your Password",value:this.state.valueform.password,disabled:this.state.valueflag.disablepassword,onChange:this.onChangePassword.bind(this)}))))),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-md-6"},s.a.createElement("div",{className:"form-group"},s.a.createElement("label",null,s.a.createElement("h4",{style:{float:"left"}},s.a.createElement("b",null,"Level"))),s.a.createElement("div",{className:"inputGroup-sizing-default"},s.a.createElement("select",{className:"form-control input-lg ","data-smart-validate-input":"","data-required":"","data-message-required":"Please specify your Level",name:"Level",defaultValue:"",value:this.state.valueform.level,onChange:this.onChangeLevel.bind(this)},s.a.createElement("option",{value:"0",selected:!0},"Select Level"),s.a.createElement("option",{value:"1"},"Level 1"),s.a.createElement("option",{value:"2"},"Level 2"),s.a.createElement("option",{value:"3"},"Level 3"),s.a.createElement("option",{value:"4"},"Level 4"),s.a.createElement("option",{value:"5"},"Level 5"),s.a.createElement("option",{value:"6"},"Level 6"),s.a.createElement("option",{value:"7"},"Level 7"),s.a.createElement("option",{value:"8"},"Level 8"),s.a.createElement("option",{value:"9"},"Level 9")))))),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-md-6"},s.a.createElement("div",{className:"form-group"},s.a.createElement("label",null,s.a.createElement("h4",{style:{float:"left"}},s.a.createElement("b",null,"Is Approval"))),s.a.createElement("div",{className:"inputGroup-sizing-default"},s.a.createElement("label",{className:"radio state-error"},s.a.createElement("input",{type:"radio",name:"IsApproval",value:"Y",onChange:this.onChangeApproval.bind(this),checked:"Y"===this.state.valueform.isapproval}),u.a.translate("Yes")),"    ",s.a.createElement("label",{className:"radio"},s.a.createElement("input",{type:"radio",name:"IsApproval",value:"N",onChange:this.onChangeApproval.bind(this),checked:"N"===this.state.valueform.isapproval}),u.a.translate("No")))))),s.a.createElement("div",{hidden:this.state.valueflag.flagadd},s.a.createElement("div",{className:"widget-body"},s.a.createElement("button",{name:"submit",onClick:this.saveformroules.bind(this),type:"button",style:{height:"50px",width:"70px"}},"Save"),"      ",s.a.createElement("button",{name:"submitcancel",type:"button",onClick:this.cancelformroules.bind(this),style:{height:"50px",width:"95px"}},"Cancel"))),s.a.createElement("div",{hidden:this.state.valueflag.flagedit},s.a.createElement("div",{className:"widget-body"},s.a.createElement("button",{name:"submitedit",type:"button",onClick:this.editformroules.bind(this),style:{height:"50px",width:"95px"}},"Save ( Edit )"),"      ",s.a.createElement("button",{name:"submitdelete",type:"button",onClick:this.deleteformroules.bind(this),style:{height:"50px",width:"95px"}},"Delete"),"      ",s.a.createElement("button",{name:"submitcancel",type:"button",onClick:this.cancelformroules.bind(this),style:{height:"50px",width:"95px"}},"Cancel"))))}}]),t}(s.a.Component),v=f;t.default=v;!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(f,"FormUser","C:/kantor/github/CreditScoringFrontEnd/src/app/routes/user/components/FormUser.js"),__REACT_HOT_LOADER__.register(v,"default","C:/kantor/github/CreditScoringFrontEnd/src/app/routes/user/components/FormUser.js"))}()},741:function(e,t,a){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function o(e){}function s(e,t,a){}Object.defineProperty(t,"__esModule",{value:!0}),a.d(t,"valueroulesfromtablerisk",function(){return g}),a.d(t,"valueuser",function(){return E});var i=a(0),u=a.n(i),c=a(608),d=(a.n(c),a(609)),m=(a.n(d),a(598)),p=(a.n(m),a(595)),f=a(600),v=a(587),h=(a(597),function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}()),g={id:0,name:"",odds:"",probabilityofdefault:0,min:0,max:0,status:""},E={id:0,userid:"",password:"",name:"",ruleid:"",level:0,isapproval:"N"},b=function(e){function t(e){n(this,t);var a=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.onRowClick=function(){return a.__onRowClick__REACT_HOT_LOADER__.apply(a,arguments)},a.createCustomInsertButton=function(){return a.__createCustomInsertButton__REACT_HOT_LOADER__.apply(a,arguments)},a.state={listitems:[]},a}return l(t,e),h(t,[{key:"componentDidMount",value:function(){var e=this;E={id:0,userid:"",password:"",name:"",ruleid:"",level:0,isapproval:"N"};var t=v.k;fetch(t,{method:"GET",headers:{"content-type":"application/json"}}).then(function(e){return e.json()}).then(function(t){e.setState({listitems:t.data})})}},{key:"__onRowClick__REACT_HOT_LOADER__",value:function(e){var t=this.state.listitems.filter(function(t){return t.id==e.id});E.id=e.id,t.map(function(e){E.userid=e.userid,E.password=e.password,E.name=e.name,E.ruleid=e.ruleid,E.level=e.level,E.isapproval=e.isapproval}),window.location.href="/#/formuser"}},{key:"__createCustomInsertButton__REACT_HOT_LOADER__",value:function(e){var t=this;return u.a.createElement(m.InsertButton,{onClick:function(){return t.handleInsertButtonClick(e)}})}},{key:"onAfterInsertRow",value:function(e){}},{key:"render",value:function(){var e={insertBtn:this.createCustomInsertButton,onRowClick:this.onRowClick,afterInsertRow:this.onAfterInsertRow,expandBy:"column"},t={mode:"click",blurToSave:!0,nonEditableRows:function(){},afterSaveCell:s};return u.a.createElement("div",{id:"content"},u.a.createElement("div",{className:"row"},u.a.createElement(p.a,{items:["User"],className:"col-xs-12 col-sm-7 col-md-7 col-lg-4"}),u.a.createElement("div",{className:"col-xs-4 col-sm-4 col-md-4 col-log-4"},u.a.createElement("a",{href:"#/formuser",className:"btn btn-info btn-lg "},"Add User"))),u.a.createElement("div",{className:"row"},u.a.createElement("article",{className:"col-sm-12"},u.a.createElement(f.a,{editbutton:!1,color:"darken"},u.a.createElement("header",null,u.a.createElement("span",{className:"widget-icon"}," ",u.a.createElement("i",{className:"fa fa-table"})," "),u.a.createElement("h2",null,"Data")),u.a.createElement("div",null,u.a.createElement("div",{className:"widget-body no-padding"},u.a.createElement(m.BootstrapTable,{data:this.state.listitems,pagination:!0,striped:!0,hover:!0,condensed:!0,search:!0,options:e,cellEdit:t,headerStyle:{background:"#aaaadd"},expandableRow:this.isExpandableRow,containerStyle:{background:"#FFFFFF"},expandComponent:this.expandComponent,searchPlaceholder:"Search from any columns...",expandColumnOptions:{expandColumnVisible:!1}},u.a.createElement(m.TableHeaderColumn,{dataField:"id",dataSort:!0,width:"0%",dataAlign:"center",headerAlign:"center",isKey:!0,editable:!1,expandable:!1,filter:{type:"TextFilter",placeholder:"Please enter a value",delay:10}},"ID"),u.a.createElement(m.TableHeaderColumn,{dataField:"name",dataSort:!0,width:"30%",dataAlign:"center",headerAlign:"center",editable:!1,expandable:!1,filter:{type:"TextFilter",placeholder:"Please enter a value",delay:10}},"Name"),u.a.createElement(m.TableHeaderColumn,{dataField:"level",dataSort:!0,width:"30%",dataAlign:"center",headerAlign:"center",editable:!1,expandable:!1,filter:{type:"TextFilter",placeholder:"Please enter a value",delay:10}},"Level"),u.a.createElement(m.TableHeaderColumn,{dataField:"isapproval",dataSort:!0,width:"40%",dataAlign:"center",headerAlign:"center",editable:!1,expandable:!1,filter:{type:"TextFilter",placeholder:"Please enter a value",delay:10}},"Is Approval"))))))))}}]),t}(u.a.Component),_=b;t.default=_;!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(g,"valueroulesfromtablerisk","C:/kantor/github/CreditScoringFrontEnd/src/app/routes/user/components/User.js"),__REACT_HOT_LOADER__.register(E,"valueuser","C:/kantor/github/CreditScoringFrontEnd/src/app/routes/user/components/User.js"),__REACT_HOT_LOADER__.register(o,"onAfterInsertRow","C:/kantor/github/CreditScoringFrontEnd/src/app/routes/user/components/User.js"),__REACT_HOT_LOADER__.register(s,"onAfterSaveCell","C:/kantor/github/CreditScoringFrontEnd/src/app/routes/user/components/User.js"),__REACT_HOT_LOADER__.register(b,"User","C:/kantor/github/CreditScoringFrontEnd/src/app/routes/user/components/User.js"),__REACT_HOT_LOADER__.register(_,"default","C:/kantor/github/CreditScoringFrontEnd/src/app/routes/user/components/User.js"))}()}});