webpackJsonp([25,60],{1089:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=n(0),l=n.n(i),s=n(595),c=n(730),u=n(587),d=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),f=function(e){function t(e){a(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={listvalid:[],list:[],listfilter:[],valueformbank:{id:0,name:""},valueflag:{attributeid:"",flagequals:!0,flagequalsnumber:!0,flagerange:!0,flagsave:!1,flagadd:!1,flagedit:!0}},n}return r(t,e),d(t,[{key:"onChangeBankName",value:function(e){var t=e.target.value,n=this.state.valueformbank;n.name=t,this.setState(n)}},{key:"componentDidMount",value:function(){this.setform()}},{key:"setform",value:function(){var e=this.state.valueformbank,t=this.state.valueflag;e.name=c.valueroulesfromtablebank.name,e.id=c.valueroulesfromtablebank.id,""!==c.valueroulesfromtablebank.name?(t.flagadd=!0,t.flagedit=!1):(t.flagadd=!1,t.flagedit=!0),this.setState(t),this.setState(e)}},{key:"validation",value:function(){var e="",t=[];""==this.state.valueformbank.name&&(e="Name Tidak Boleh Kosong \r\n ",t.push(e)),this.state.listvalid=t}},{key:"cancelformroules",value:function(){window.location.href="/#/bank"}},{key:"editformroules",value:function(){if(this.validation(),0==this.state.listvalid.length){var e=u.O,t=this.state.valueformbank;fetch(e,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(t)}).then(function(e){return e.json()}).then(function(e){window.location.href="/#/bank"})}else{var n="";this.state.listvalid.map(function(e){n+=e}),this.state.listvalid=[],alert(n)}}},{key:"saveformroules",value:function(){if(this.validation(),0==this.state.listvalid.length){var e=u.P,t=this.state.valueformbank;fetch(e,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(t)}).then(function(e){return e.json()}).then(function(e){window.location.href="/#/bank"})}else{var n="";this.state.listvalid.map(function(e){n+=e}),this.state.listvalid=[],alert(n)}}},{key:"deleteformroules",value:function(){var e={id:this.state.valueformbank.id+""},t=u.Q;fetch(t,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(e)}).then(function(e){return e.json()}).then(function(e){window.location.href="/#/bank"})}},{key:"render",value:function(){return l.a.createElement("div",{id:"content"},l.a.createElement("div",{className:"row"},l.a.createElement(s.a,{items:["Loan Product"],className:"col-xs-12 col-sm-7 col-md-7 col-lg-4"})),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-6"},l.a.createElement("div",{className:"form-group"},l.a.createElement("div",{className:"inputGroup-sizing-default"},l.a.createElement("h4",{className:"input",style:{textAlign:"left"}},l.a.createElement("b",null,"Bank Name")),l.a.createElement("input",{className:"form-control input-lg",placeholder:"Bank Name",type:"text",name:"BankName","data-smart-validate-input":"","data-required":"","data-minlength":"4","data-maxLength":"100","data-message":"Please specify your Name Roules",onChange:this.onChangeBankName.bind(this),value:this.state.valueformbank.name}))))),l.a.createElement("div",{hidden:this.state.valueflag.flagadd},l.a.createElement("div",{className:"widget-body"},l.a.createElement("button",{name:"submit",onClick:this.saveformroules.bind(this),type:"button",style:{height:"50px",width:"70px"}},"Save"))),l.a.createElement("div",{hidden:this.state.valueflag.flagedit},l.a.createElement("div",{className:"widget-body"},l.a.createElement("button",{name:"submitedit",onClick:this.editformroules.bind(this),type:"button",style:{height:"50px",width:"95px"}},"Save ( Edit )"),"      ",l.a.createElement("button",{name:"submitdelete",onClick:this.deleteformroules.bind(this),type:"button",style:{height:"50px",width:"95px"}},"Delete"),"      ",l.a.createElement("button",{name:"submitcancel",onClick:this.cancelformroules.bind(this),type:"button",style:{height:"50px",width:"95px"}},"Cancel"))))}}]),t}(l.a.Component),m=f;t.default=m;!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(f,"FormBank","C:/kantor/github/CreditScoringFrontEnd/src/app/routes/bank/components/FormBank.js"),__REACT_HOT_LOADER__.register(m,"default","C:/kantor/github/CreditScoringFrontEnd/src/app/routes/bank/components/FormBank.js"))}()},730:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e){}function l(e,t,n){}Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"valueroulesfromtablebank",function(){return _});var s=n(0),c=n.n(s),u=n(598),d=(n.n(u),n(595)),f=n(600),m=n(608),p=(n.n(m),n(609)),h=(n.n(p),n(587)),b=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),_={id:0,name:""},v=function(e){function t(e){a(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.onRowClick=function(){return n.__onRowClick__REACT_HOT_LOADER__.apply(n,arguments)},n.createCustomInsertButton=function(){return n.__createCustomInsertButton__REACT_HOT_LOADER__.apply(n,arguments)},n.state={listitems:[]},n}return r(t,e),b(t,[{key:"componentDidMount",value:function(){var e=this;_={id:0,name:""};var t=h.w;fetch(t,{method:"GET",headers:{"content-type":"application/json"}}).then(function(e){return e.json()}).then(function(t){e.setState({listitems:t.data})})}},{key:"__onRowClick__REACT_HOT_LOADER__",value:function(e){var t=this.state.listitems.filter(function(t){return t.bankId==e.id});_.id=e.id,t.map(function(e){_.name=e.bankName}),window.location.href="/#/formbank"}},{key:"__createCustomInsertButton__REACT_HOT_LOADER__",value:function(e){var t=this;return c.a.createElement(u.InsertButton,{onClick:function(){return t.handleInsertButtonClick(e)}})}},{key:"onAfterInsertRow",value:function(e){}},{key:"render",value:function(){var e=[];this.state.listitems.map(function(t){var n=t.bankId;if(0!=n){var a=t.bankName,o={id:n,bankName:a};e.push(o)}});var t={insertBtn:this.createCustomInsertButton,onRowClick:this.onRowClick,afterInsertRow:this.onAfterInsertRow,expandBy:"column"},n={mode:"click",blurToSave:!0,nonEditableRows:function(){},afterSaveCell:l};return c.a.createElement("div",{id:"content"},c.a.createElement("div",{className:"row"},c.a.createElement(d.a,{items:["Bank"],className:"col-xs-12 col-sm-7 col-md-7 col-lg-4"}),c.a.createElement("div",{className:"col-xs-4 col-sm-4 col-md-4 col-log-4"},c.a.createElement("a",{href:"#/formbank",className:"btn btn-info btn-lg "},"Add Bank"))),c.a.createElement("div",{className:"row"},c.a.createElement("article",{className:"col-sm-12"},c.a.createElement(f.a,{editbutton:!1,color:"darken"},c.a.createElement("header",null,c.a.createElement("span",{className:"widget-icon"}," ",c.a.createElement("i",{className:"fa fa-table"})," "),c.a.createElement("h2",null,"Data")),c.a.createElement("div",null,c.a.createElement("div",{className:"widget-body no-padding"},c.a.createElement(u.BootstrapTable,{data:e,pagination:!0,striped:!0,hover:!0,condensed:!0,search:!0,options:t,cellEdit:n,headerStyle:{background:"#aaaadd"},expandableRow:this.isExpandableRow,containerStyle:{background:"#FFFFFF"},expandComponent:this.expandComponent,searchPlaceholder:"Search from any columns...",expandColumnOptions:{expandColumnVisible:!1}},c.a.createElement(u.TableHeaderColumn,{dataField:"id",dataSort:!0,width:"50%",dataAlign:"center",headerAlign:"center",isKey:!0,editable:!1,expandable:!1,filter:{type:"TextFilter",placeholder:"Please enter a value",delay:10}},"Bank ID"),c.a.createElement(u.TableHeaderColumn,{dataField:"bankName",dataSort:!0,width:"50%",dataAlign:"center",headerAlign:"center",editable:!1,expandable:!1,filter:{type:"TextFilter",placeholder:"Please enter a value",delay:10}},"Bank Name"))))))))}}]),t}(c.a.Component),k=v;t.default=k;!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(_,"valueroulesfromtablebank","C:/kantor/github/CreditScoringFrontEnd/src/app/routes/bank/components/Bank.js"),__REACT_HOT_LOADER__.register(i,"onAfterInsertRow","C:/kantor/github/CreditScoringFrontEnd/src/app/routes/bank/components/Bank.js"),__REACT_HOT_LOADER__.register(l,"onAfterSaveCell","C:/kantor/github/CreditScoringFrontEnd/src/app/routes/bank/components/Bank.js"),__REACT_HOT_LOADER__.register(v,"Bank","C:/kantor/github/CreditScoringFrontEnd/src/app/routes/bank/components/Bank.js"),__REACT_HOT_LOADER__.register(k,"default","C:/kantor/github/CreditScoringFrontEnd/src/app/routes/bank/components/Bank.js"))}()}});