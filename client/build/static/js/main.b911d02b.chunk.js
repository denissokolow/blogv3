(this.webpackJsonpAvocadoBlog=this.webpackJsonpAvocadoBlog||[]).push([[0],{41:function(t,e,a){t.exports=a.p+"static/media/avocado.3951c08c.png"},44:function(t,e,a){t.exports=a(76)},53:function(t,e,a){},54:function(t,e,a){},72:function(t,e,a){},73:function(t,e,a){},75:function(t,e,a){},76:function(t,e,a){"use strict";a.r(e);var n=a(0),s=a.n(n),o=a(20),r=a.n(o),c=a(9),l=a(16),i=a(39),u=a(40),p=a.n(u),m={login:"",user:""},d=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,e=arguments.length>1?arguments[1]:void 0,a=e.type;switch(console.log("ACTION",e.payload),a){case"AUTH_ON_OFF":return p()(t,{login:{$set:e.payload.login},user:{$set:e.payload.user}});default:return t}},h=Object(l.c)({auth:d}),f=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||l.d,E=Object(l.e)(h,{},f(Object(l.a)(i.a))),b=a(17),v=a(2),g=a(11),O=a(12),N=a(14),y=a(13),S=a(41),j=a.n(S),k=function(t){return function(e){e({type:"AUTH_ON_OFF",payload:{login:t.login,user:t.user}})}},w=(a(53),function(t){Object(N.a)(a,t);var e=Object(y.a)(a);function a(t){var n;return Object(g.a)(this,a),(n=e.call(this,t)).logOut=function(){n.setState({LogOn:!1,user:"",status:""}),n.props.status({login:!1,user:""})},n.state={LogOn:!1,user:"",login:"",password:"",status:""},n}return Object(O.a)(a,[{key:"render",value:function(){var t=this,e=this.props.loginOnOff,a=this.props.username;return s.a.createElement("div",{className:"back-login"},e?s.a.createElement("div",{className:"userplate"},s.a.createElement("div",{className:"userplate-name"},a),s.a.createElement("button",{className:"userplate-btn",onClick:function(){return t.logOut()}},"logout")):null)}}]),a}(n.Component)),R=Object(c.b)((function(t){return{loginOnOff:t.auth.login,username:t.auth.user}}),(function(t){return{status:function(e){return t(k(e))}}}))(w),D=(a(54),function(t){Object(N.a)(a,t);var e=Object(y.a)(a);function a(){return Object(g.a)(this,a),e.apply(this,arguments)}return Object(O.a)(a,[{key:"render",value:function(){var t=this.props.loginOnOff;return s.a.createElement("div",{className:"back"},t?s.a.createElement("div",{className:"btn-div"},s.a.createElement(b.b,{to:"/",className:"link",style:{textDecoration:"none"}},s.a.createElement("button",{type:"button",className:"button"},"Home")),s.a.createElement(b.b,{to:"/newpost",className:"link",style:{textDecoration:"none"}},s.a.createElement("button",{type:"button",className:"button"},"New post"))):s.a.createElement("div",{className:"img-div"},s.a.createElement("img",{src:j.a,alt:"Avocato Cat"}),s.a.createElement("div",{className:"title-div"},"Avocato Blog")),s.a.createElement(R,null))}}]),a}(n.Component)),x=Object(c.b)((function(t){return{loginOnOff:t.auth.login}}))(D),C=a(15),T=a(7),_=a.n(T),V=a(8),L=(a(72),function(t){Object(N.a)(a,t);var e=Object(y.a)(a);function a(t){var n;return Object(g.a)(this,a),(n=e.call(this,t)).postDelete=function(t){if(_.a.delete("".concat(V.SERVER,"/api/post/").concat(t),{id:t}),n.state.posts.length>=0){var e=n.state.posts.filter((function(e){return e._id!==t}));n.setState({posts:e})}},n.loginTryOn=function(t,e){""===t||""===e?n.setState({status:"\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u0432\u0441\u0435 \u043f\u043e\u043b\u044f"}):_.a.get("".concat(V.SERVER,"/api/login/"),{headers:{log:t,pas:e}}).then((function(t){return t.data})).then((function(t){n.setState(t),setTimeout((function(){return n.setState({status:""})}),2e3),n.props.status({login:t.LogOn,user:t.user}),_.a.get("".concat(V.SERVER,"/api/posts/").concat(n.props.username)).then((function(t){return t.data})).then((function(t){return n.setState({posts:t})}))}))},n.regTry=function(t,e){""===t||""===e?n.setState({status:"\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u0432\u0441\u0435 \u043f\u043e\u043b\u044f"}):t.length>10||e.length>10?n.setState({status:"\u041b\u043e\u0433\u0438\u043d \u0438 \u043f\u0430\u0440\u043e\u043b\u044c \u0434\u043e\u043b\u0436\u043d\u044b \u0431\u044b\u0442\u044c \u043d\u0435 \u0434\u043b\u0438\u043d\u043d\u0435\u0435 10 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"}):_.a.post("".concat(V.SERVER,"/api/login/"),{log:t,pas:e}).then((function(t){n.setState(t.data),setTimeout((function(){return n.setState({status:""})}),2e3)}))},n.state={posts:[],id:"",LogOn:!1,user:"",login:"",password:"",status:"",author:""},n.regTry=n.regTry.bind(Object(C.a)(n)),n.postDelete=n.postDelete.bind(Object(C.a)(n)),n}return Object(O.a)(a,[{key:"componentDidMount",value:function(){var t=this;this.state.posts.length>=0&&_.a.get("".concat(V.SERVER,"/api/posts/").concat(this.props.username)).then((function(t){return t.data})).then((function(e){return t.setState({posts:e})}))}},{key:"render",value:function(){var t=this,e=this.props.loginOnOff;this.props.username;return s.a.createElement("div",{className:"pole"},e?s.a.createElement("div",{className:"Posts"},this.state.posts.slice(0).reverse().map((function(e){return s.a.createElement("div",{key:e.id,className:"wrapper-posts"},s.a.createElement("div",{className:"nameplate-posts-div"},s.a.createElement("div",{className:"nameplate-posts"},s.a.createElement("b",null,"Date:")," \xa0 ",e.date),s.a.createElement("div",{className:"nameplate-posts"},s.a.createElement("b",null,"Titile:")," \xa0 ",e.title)),s.a.createElement("div",{className:"text-pole-posts"},e.content),s.a.createElement("div",{className:"button-div"},s.a.createElement("button",{onClick:function(){t.postDelete(e._id)},className:"delete-posts",type:"submit"}," delete"),s.a.createElement(b.b,{to:{pathname:"api/posts/".concat(e._id),state:{id:e._id}},className:"detail-posts"}," detail ")))}))):s.a.createElement("form",{className:"login-div"},s.a.createElement("input",{className:"login",name:"login",maxLength:"15",ref:function(e){return t.login=e},type:"text",placeholder:"login",required:!0}),s.a.createElement("button",{onClick:function(){var e="".concat(t.login.value),a="".concat(t.password.value);t.loginTryOn(e,a)},type:"button",className:"login-button"}," login "),s.a.createElement("input",{className:"password",name:"password",maxLength:"15",ref:function(e){return t.password=e},type:"password",placeholder:"password",required:!0}),s.a.createElement("button",{onClick:function(){var e="".concat(t.login.value),a="".concat(t.password.value);t.regTry(e,a)},type:"button",className:"reg-button"}," register"),s.a.createElement("div",{className:"status"},this.state.status)))}}]),a}(n.Component)),A=Object(c.b)((function(t){return{loginOnOff:t.auth.login,username:t.auth.user}}),(function(t){return{status:function(e){return t(k(e))}}}))(L),B=function(){return s.a.createElement("div",null,s.a.createElement(x,null),s.a.createElement(A,null))},P=a(42),U=(a(73),function(t){Object(N.a)(a,t);var e=Object(y.a)(a);function a(t){var n;return Object(g.a)(this,a),(n=e.call(this,t)).state={validate:!1,author:"",date:"",title:"",content:""},n.handleChange=n.handleChange.bind(Object(C.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(C.a)(n)),n}return Object(O.a)(a,[{key:"handleChange",value:function(t){this.setState(Object(P.a)({},t.target.name,t.target.value))}},{key:"handleSubmit",value:function(t){t.preventDefault(),_.a.post("".concat(V.SERVER,"/api/posts/"),{author:this.state.author,date:"".concat((new Date).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})+", "+(new Date).toLocaleDateString()),title:this.state.title,content:this.state.content}),this.setState({author:"",date:"",title:"",content:"",validate:!0})}},{key:"componentDidUpdate",value:function(){var t=this;this.state.validate&&_.a.get("".concat(V.SERVER,"/api/posts/").concat(this.props.username)).then((function(t){return t.data})).then((function(e){return t.setState({posts:e})}))}},{key:"render",value:function(){if(this.state.validate)return s.a.createElement(v.a,{push:!0,to:"/"});var t=this.props.username;return this.state.author=t,s.a.createElement("div",null,s.a.createElement(x,null),s.a.createElement("form",{className:"form",onSubmit:this.handleSubmit},s.a.createElement("input",{className:"forminput",name:"title",type:"text",value:this.state.title,onChange:this.handleChange,placeholder:"title"}),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("textarea",{className:"formtextpole",name:"content",type:"text",value:this.state.content,onChange:this.handleChange,title:"Post text"}),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("input",{className:"formButton",type:"submit",value:"send"})))}}]),a}(n.Component)),F=Object(c.b)((function(t){return{username:t.auth.user}}))(U),M=a(26),H=a.n(M),I=a(43),q=(a(75),function(t){Object(N.a)(a,t);var e=Object(y.a)(a);function a(t){var n;return Object(g.a)(this,a),(n=e.call(this,t)).postDelete=function(t){n.setState({redir:!0}),_.a.delete("".concat(V.SERVER,"/api/post/").concat(t),{id:t})},n.renderPost=Object(I.a)(H.a.mark((function t(){var e;return H.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(n.props.location.state.id),e=n.props.location.state.id,t.next=4,_.a.get("".concat(V.SERVER,"/api/post/").concat(e),{id:e}).then((function(t){return n.setState(t.data)}));case 4:case"end":return t.stop()}}),t)}))),n.state={redir:!1,author:"",date:"",title:"",content:""},n.postDelete=n.postDelete.bind(Object(C.a)(n)),n}return Object(O.a)(a,[{key:"componentDidMount",value:function(){this.renderPost()}},{key:"componentDidUpdate",value:function(){var t=this;this.state.redir&&_.a.get("".concat(V.SERVER,"/api/posts/").concat(this.props.username)).then((function(t){return t.data})).then((function(e){return t.setState({posts:e})}))}},{key:"render",value:function(){var t=this;this.props.username;return this.state.redir?s.a.createElement(v.a,{push:!0,to:"/"}):s.a.createElement("div",null,s.a.createElement(x,null),s.a.createElement("div",{className:"wrapper-post"},s.a.createElement("div",{className:"nameplate-post-div"},s.a.createElement("div",{className:"nameplate-post"},s.a.createElement("b",null,"Date:")," \xa0 ",this.state.date),s.a.createElement("div",{className:"nameplate-post"},s.a.createElement("b",null,"Title:")," \xa0 ",this.state.title)),s.a.createElement("div",{className:"post-text-pole"},this.state.content),s.a.createElement("button",{onClick:function(){t.postDelete(t.state._id)},className:"delete-post",type:"submit"}," delete")))}}]),a}(n.Component)),J=Object(c.b)((function(t){return{username:t.auth.user}}))(q),X=function(){return s.a.createElement("section",null,s.a.createElement(b.a,null,s.a.createElement(v.b,{exact:!0,path:"/newpost",component:F}),s.a.createElement(v.b,{exact:!0,path:"/",component:B}),s.a.createElement(v.b,{exact:!0,path:"/api/posts/:id",component:J})))};r.a.render(s.a.createElement(c.a,{store:E},s.a.createElement(s.a.StrictMode,null,s.a.createElement(X,null))),document.getElementById("root"))},8:function(t,e){t.exports={SERVER:"http://localhost:3001"}}},[[44,1,2]]]);
//# sourceMappingURL=main.b911d02b.chunk.js.map