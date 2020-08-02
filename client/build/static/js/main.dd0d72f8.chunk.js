(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{159:function(e,t,a){e.exports={Content:"Layout_Content__3H3X8"}},161:function(e,t,a){e.exports={DrawerToggle:"DrawerToggle_DrawerToggle__m405X"}},162:function(e,t,a){e.exports={Backdrop:"Backdrop_Backdrop__3j6VK"}},199:function(e,t,a){e.exports=a(398)},204:function(e,t,a){},398:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(22),o=a.n(l),c=a(46),i=(a(204),a(12)),s=a(13),u=a(15),d=a(14),m=a(7),h=function(e){return e.children},p=a(159),f=a.n(p),v=a(90),g=a.n(v),b=a(91),E=a.n(b),w=function(e){return r.a.createElement("li",{className:E.a.NavigationItem},r.a.createElement(c.b,{to:e.link,exact:e.exact,activeClassName:E.a.active},e.children))},k=a(94),y=a.n(k),_=function(){return r.a.createElement("ul",{className:y.a.NavigationItems},r.a.createElement(w,{link:"/request-methods"},"Request Methods Distribution"),r.a.createElement(w,{link:"/answer-codes"},"Answer Status Rate"),r.a.createElement(w,{link:"/short-answers"},"Short Answer Rate"),r.a.createElement(w,{link:"/requests-per-min"},"Requests Per Minute"),r.a.createElement("div",{className:y.a.NavigationItemRight},r.a.createElement(w,{link:"/api/upload_file"},"Upload Log file (JSON)")))},j=a(161),O=a.n(j),D=function(e){return r.a.createElement("div",{className:O.a.DrawerToggle,onClick:e.clicked},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null))},S=function(e){return r.a.createElement("header",{className:g.a.Toolbar},r.a.createElement(D,{clicked:e.drawerToggleClicked}),r.a.createElement("nav",{className:g.a.DesktopOnly},r.a.createElement(_,null)))},C=a(162),x=a.n(C),N=function(e){return e.show?r.a.createElement("div",{className:x.a.Backdrop,onClick:e.clicked}):null},T=a(48),F=a.n(T),I=function(e){var t=[F.a.SideDrawer,F.a.Close];return e.open&&(t=[F.a.SideDrawer,F.a.Open]),r.a.createElement(h,null,r.a.createElement(N,{show:e.open,clicked:e.closed}),r.a.createElement("div",{className:t.join(" ")},r.a.createElement("nav",null,r.a.createElement(_,null))))},q=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={showSideDrawer:!1},e.sideDrawerClosedHandler=function(){e.setState({showSideDrawer:!1})},e.sideDrawerToggleHandler=function(){e.setState((function(e){return{showSideDrawer:!e.showSideDrawer}}))},e}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(h,null,r.a.createElement(S,{drawerToggleClicked:this.sideDrawerToggleHandler}),r.a.createElement(I,{open:this.state.showSideDrawer,closed:this.sideDrawerClosedHandler}),r.a.createElement("main",{className:f.a.Content},this.props.children))}}]),a}(n.Component),L=a(8),M=a(18),z=a.n(M),H=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={requests:{},colors:{}},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("/api/charts/requests").then((function(e){return e.json()})).then((function(t){console.log(t),e.setState({requests:t,colors:Object.values(z()(t.length,"hex",M.pastel)).map((function(e){return"#"+e.hex}))})}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(L.b,{width:1e3,height:700,margin:{top:150,right:200,left:400,bottom:50},data:this.state.requests},r.a.createElement(L.h,{dataKey:"name"}),r.a.createElement(L.i,null),r.a.createElement(L.a,{dataKey:"value",name:"HTTP request methods distribution"},Object.values(this.state.requests).map((function(t,a){return r.a.createElement(L.c,{key:"cell-".concat(a),fill:e.state.colors[a],stroke:"#000000",strokeWidth:2===a?4:1})}))),r.a.createElement(L.g,{cursor:{fill:"rgba(206, 206, 206, 0.2)"}}),r.a.createElement(L.d,null)))}}]),a}(n.Component),R=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={answers:{},colors:{}},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("/api/charts/answers").then((function(e){return e.json()})).then((function(t){return e.setState({answers:t,colors:Object.values(z()(t.length,"hex",M.pastel)).map((function(e){return"#"+e.hex}))})}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(L.b,{width:1e3,height:700,margin:{top:150,right:200,left:400,bottom:50},data:this.state.answers},r.a.createElement(L.a,{dataKey:"value",name:"HTTP answer codes distribution"},Object.values(this.state.answers).map((function(t,a){return r.a.createElement(L.c,{key:"cell-".concat(a),fill:e.state.colors[a],stroke:"#000000",strokeWidth:2===a?4:1})}))),r.a.createElement(L.h,{dataKey:"name"}),r.a.createElement(L.i,null),r.a.createElement(L.g,{cursor:{fill:"rgba(206, 206, 206, 0.2)"}}),r.a.createElement(L.d,null)))}}]),a}(n.Component),A=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={activeIndex:0,sizeDistribution:{},colors:{}},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("/api/charts/short-answers").then((function(e){return e.json()})).then((function(t){console.log(t[0]),e.setState({activeIndex:0,sizeDistribution:[{name:"LARGER than 1000B",value:t[0].totalCodeOK},{name:"SMALLER than 1000B",value:t[0].totalSmallSize}],colors:Object.values(z()(2,"hex",M.pastel)).map((function(e){return"#"+e.hex}))})}))}},{key:"render",value:function(){var e=this;return r.a.createElement(L.f,{width:1e3,height:700},r.a.createElement(L.e,{dataKey:"value",name:"Distribution of the size of the answer of all requests with code 200 and size < 1000B",cx:480,cy:400,data:this.state.sizeDistribution,labelLine:!1,label:"lab",outerRadius:200,fill:"#8884d8"},Object.values(this.state.sizeDistribution).map((function(t,a){return r.a.createElement(L.c,{key:"cell-".concat(a),fill:e.state.colors[a%e.state.colors.length]})}))),r.a.createElement(L.d,{padding:"100"}))}}]),a}(n.Component),B=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={reqsPerMin:{},colors:{}},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("/api/charts/requests-per-min").then((function(e){return e.json()})).then((function(t){e.setState({reqsPerMin:t,colors:Object.values(z()(t.length,"hex",M.pastel)).map((function(e){return"#"+e.hex}))}),console.log(e.state.reqsPerMin)}))}},{key:"render",value:function(){return r.a.createElement("div",null,"dsa")}}]),a}(n.Component),P=a(42),K=(a(381),a(174)),U=a.n(K),W=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).checkFileMimeType=function(e){var t=["application/json"].every((function(t){return e.type!==t}))?e.type+" is not a supported format\n":"";return""===t||(P.b.error(t),!1)},n.checkFileSize=function(e){var t=e.size>1e8?e.name+"is too large, please pick a smaller file\n":"";return""===t||(P.b.error(t),!1)},n.onChangeHandler=function(e){var t=e.target.files[0];console.log(t),n.checkFileMimeType(t)&&n.checkFileSize(t)?n.setState({selectedFile:t,loaded:0}):(e.target.value=null,n.setState({selectedFile:null,loaded:0})),n.setState({hasFinished:!1})},n.onClickHandler=function(){var e=new FormData;e.append("file",n.state.selectedFile),U.a.post("/api/upload",e,{onUploadProgress:function(e){n.setState({loaded:e.loaded/e.total*100})}}).then((function(e){console.log(e.data.filename),n.setState({currentFile:e.data.filename,selectedFile:null}),P.b.success("Upload successful :)")})).catch((function(e){console.log(e.response),n.setState({selectedFile:null}),P.b.error("Upload failed :(")}))},n.state={selectedFile:null,currentFile:null,loaded:0,hasFinished:!1},n}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{class:"container"},r.a.createElement("div",{class:"row"},r.a.createElement("div",{class:"offset-md-3 col-md-6"},this.state.currentFile&&r.a.createElement("div",{style:{boxSizing:"border-box",fontWeight:"bold",border:"3px dotted"}},this.state.currentFile," is currently loaded"),r.a.createElement("br",null),r.a.createElement("div",{class:"form-group files"},r.a.createElement("label",null,"Upload your file"),r.a.createElement("input",{type:"file",class:"form-control",onChange:this.onChangeHandler})),r.a.createElement("div",{class:"form-group"},r.a.createElement(P.a,{hideProgressBar:!0})),this.state.selectedFile&&r.a.createElement("button",{type:"button",class:"btn btn-success btn-block",onClick:this.onClickHandler},"Upload"))))}}]),a}(n.Component),X=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(q,null,r.a.createElement(m.c,null,r.a.createElement(m.a,{path:"/request-methods",component:H}),r.a.createElement(m.a,{path:"/answer-codes",component:R}),r.a.createElement(m.a,{path:"/short-answers",component:A}),r.a.createElement(m.a,{path:"/requests-per-min",component:B}),r.a.createElement(m.a,{path:"/api/upload_file",component:W}),r.a.createElement(m.a,{path:"/",component:W,exact:!0}))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var J=r.a.createElement(c.a,null,r.a.createElement(X,null));o.a.render(J,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},48:function(e,t,a){e.exports={SideDrawer:"SideDrawer_SideDrawer__3kXLK",Open:"SideDrawer_Open__1tCv1",Close:"SideDrawer_Close__9j7x-",Logo:"SideDrawer_Logo__3voUv"}},90:function(e,t,a){e.exports={Toolbar:"Toolbar_Toolbar__ApScI",Logo:"Toolbar_Logo__3Lk47",DesktopOnly:"Toolbar_DesktopOnly__LuPaL"}},91:function(e,t,a){e.exports={NavigationItem:"NavigationItem_NavigationItem__2SpXc",active:"NavigationItem_active__2v2td"}},94:function(e,t,a){e.exports={NavigationItems:"NavigationItems_NavigationItems__1fnFX",NavigationItemRight:"NavigationItems_NavigationItemRight__MIPED"}}},[[199,1,2]]]);
//# sourceMappingURL=main.dd0d72f8.chunk.js.map