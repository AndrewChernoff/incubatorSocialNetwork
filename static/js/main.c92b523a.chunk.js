(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{18:function(e,t,n){"use strict";n.d(t,"b",(function(){return d})),n.d(t,"a",(function(){return f})),n.d(t,"c",(function(){return b}));var r=n(2),a=n(50),c=n(27),i=n(22),s=n.n(i),u=n(1),o=["input","meta"],l=function(e){return function(t){var n=t.input,c=t.meta,i=Object(a.a)(t,o),l=c.error&&c.touched;return Object(u.jsxs)("div",{className:s.a.formControl+""+(l?s.a.error:""),children:[Object(u.jsx)("div",{children:Object(u.jsx)(e,Object(r.a)(Object(r.a)(Object(r.a)({},n),i),{},{className:l&&s.a.errorTextarea}))}),l&&Object(u.jsx)("span",{className:s.a.errorSpan,children:c.error})]})}},d=l("textarea"),f=l("input"),b=function(e,t,n,r,a,i){return Object(u.jsxs)("div",{children:[Object(u.jsx)("label",{children:e}),Object(u.jsx)(c.a,{placeholder:t,name:n,component:r,validate:a,type:i})]})}},22:function(e,t,n){e.exports={errorTextarea:"FormsControl_errorTextarea__1iGBH",errorSpan:"FormsControl_errorSpan__tB717"}},31:function(e,t,n){"use strict";n.d(t,"d",(function(){return r})),n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return c})),n.d(t,"a",(function(){return i}));var r=function(e){return e&&e?void 0:"Required"},a=function(e){return function(t){return t&&t.length>e?"Should be less than ".concat(e):void 0}},c=function(e){return function(t){return t&&e>=t.length?"Should be greater than ".concat(e):void 0}},i=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return t.reduce((function(t,n){return t||n(e)}),void 0)}}},32:function(e,t,n){e.exports={friendsList:"FriendList_friendsList__311PT",friendTitle:"FriendList_friendTitle__n9fqI"}},35:function(e,t,n){e.exports={header:"Header_header__3rgin",loginBlock:"Header_loginBlock__1wM7w"}},38:function(e,t,n){"use strict";n.d(t,"a",(function(){return j})),n.d(t,"e",(function(){return p})),n.d(t,"c",(function(){return O})),n.d(t,"d",(function(){return g})),n.d(t,"f",(function(){return m}));var r=n(5),a=n.n(r),c=n(11),i=n(19),s=n(2),u=n(8),o="Add-Post",l="SET_USER_PROFILE",d="SET_USER_STATUS ",f="DELETE_POST ",b={posts:[{id:1,message:"Hi, how are you?",likeCount:15},{id:2,message:"It's my first post",likeCount:20}],userProfile:null,status:""},j=function(e){return{type:o,postText:e}},p=function(e){return{type:l,userProfile:e}},h=function(e){return{type:d,status:e}},O=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.c.getProfile(e);case 2:r=t.sent,n(p(r.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},g=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.getStatus(e);case 2:r=t.sent,n(h(r.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},m=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(h(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case o:var n={id:3,message:t.postText,likeCount:0};return Object(s.a)(Object(s.a)({},e),{},{posts:[].concat(Object(i.a)(e.posts),[n]),newPostText:""});case l:return Object(s.a)(Object(s.a)({},e),{},{userProfile:t.userProfile});case d:return Object(s.a)(Object(s.a)({},e),{},{status:t.status});case f:return Object(s.a)(Object(s.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!=t.postId}))});default:return e}}},39:function(e,t,n){"use strict";n(0);var r=n.p+"static/media/loading2.94e700e7.gif",a=n(1);t.a=function(e){return Object(a.jsx)("div",{children:Object(a.jsx)("img",{src:r,style:{width:100}})})}},51:function(e,t,n){"use strict";n.d(t,"b",(function(){return s}));var r=n(19),a=n(2),c="Send-Message",i={dialogs:[{name:"Dimych",id:1},{name:"Andrey",id:2},{name:"Sveta",id:3},{name:"Sasha",id:4},{name:"Victor",id:5},{name:"Valera",id:6}],message:[{message:"Hi",id:1},{message:"How is your React",id:2},{message:"Yo",id:3},{message:"Yo",id:4},{message:"Yo",id:5}]},s=function(e){return{type:c,messageText:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case c:var n=t.messageText;return Object(a.a)(Object(a.a)({},e),{},{newMessageText:"",message:[].concat(Object(r.a)(e.message),[{message:n,id:6}])});default:return e}}},52:function(e,t,n){"use strict";n.d(t,"d",(function(){return v})),n.d(t,"e",(function(){return w})),n.d(t,"c",(function(){return _})),n.d(t,"f",(function(){return y})),n.d(t,"b",(function(){return S}));var r=n(5),a=n.n(r),c=n(11),i=n(19),s=n(2),u=n(8),o=function(e,t,n,r){return e.map((function(e){return e[n]===t?Object(s.a)(Object(s.a)({},e),r):e}))},l="FOLLOW",d="UNFOLLOW",f="SET_USERS",b="SET_CURRENT_PAGE",j="SET_TOTAL_USERS_COUNT",p="TOGGLE_IS_FETCHING",h="FOLLOWING_IN_PROGRESS",O={users:[],pageSize:5,totalUsersCount:19,currentPage:1,isFetching:!0,followingInProgress:[],fake:10},g=function(e){return{type:l,userID:e}},m=function(e){return{type:d,userID:e}},v=function(e){return{type:b,pageNumber:e}},x=function(e){return{type:p,isFetching:e}},w=function(e,t){return{type:h,isFetching:e,userID:t}},_=function(e,t){return function(){var n=Object(c.a)(a.a.mark((function n(r){var c;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(x(!0)),n.next=3,u.c.getUsers(e,t);case 3:c=n.sent,r(v(t)),r(x(!1)),r((i=c.items,{type:f,users:i})),r((a=c.totalCount,{type:j,count:a}));case 8:case"end":return n.stop()}var a,i}),n)})));return function(e){return n.apply(this,arguments)}}()},y=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:N(n,u.c.unfollowUser.bind(u.c),m,e);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},S=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:N(n,u.c.followUser.bind(u.c),g,e);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},N=function(){var e=Object(c.a)(a.a.mark((function e(t,n,r,c){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(w(!0,c)),e.next=3,n(c);case 3:0===e.sent.resultCode&&t(r(c)),t(w(!1,c));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}();t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:return Object(s.a)(Object(s.a)({},e),{},{users:o(e.users,t.userID,"id",{followed:!0})});case d:return Object(s.a)(Object(s.a)({},e),{},{users:o(e.users,t.userID,"id",{followed:!1})});case f:return Object(s.a)(Object(s.a)({},e),{},{users:t.users});case b:return Object(s.a)(Object(s.a)({},e),{},{currentPage:t.pageNumber});case j:return Object(s.a)(Object(s.a)({},e),{},{totalUsersCount:t.count});case p:return Object(s.a)(Object(s.a)({},e),{},{isFetching:t.isFetching});case h:return Object(s.a)(Object(s.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(i.a)(e.followingInProgress),[t.userID]):e.followingInProgress.filter((function(e){return e!==t.userID}))});default:return e}}},53:function(e,t,n){},54:function(e,t,n){e.exports={friendProfiles:"FriendItems_friendProfiles__2cWre"}},58:function(e,t,n){e.exports={errorLogin:"Login_errorLogin__27rSO"}},6:function(e,t,n){e.exports={nav:"Navbar_nav__2ikiR",active:"Navbar_active__2jzW4",item:"Navbar_item__2ziMd",findUsers:"Navbar_findUsers__1MGLc"}},64:function(e,t,n){},65:function(e,t,n){},8:function(e,t,n){"use strict";n.d(t,"c",(function(){return c})),n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return s}));var r=n(57),a=n.n(r).a.create({withCredentials:!0,headers:{"API-KEY":"d66327ed-6b77-485d-934e-ec9d8785c19c"},baseURL:"https://social-network.samuraijs.com/api/1.0/"}),c={getUsers:function(e,t){return a.get("users?count=".concat(e,"&page=").concat(t)).then((function(e){return e.data}))},unfollowUser:function(e){return a.delete("follow/".concat(e)).then((function(e){return e.data}))},followUser:function(e){return a.post("follow/".concat(e),{}).then((function(e){return e.data}))},getProfile:function(e){return console.log("obsolete method"),i.getProfile(e)}},i={getProfile:function(e){return a.get("profile/".concat(e))},getStatus:function(e){return a.get("profile/status/".concat(e))},updateStatus:function(e){return a.put("profile/status",{status:e})}},s={me:function(){return a.get("auth/me",{withCredentials:!0}).then((function(e){return e.data}))},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return a.post("auth/login",{email:e,password:t,rememberMe:n})},logout:function(){return a.delete("auth/login")}}},97:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(28),i=n.n(c),s=(n(64),function(e){e&&e instanceof Function&&n.e(9).then(n.bind(null,108)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),c(e),i(e)}))}),u=n(23),o=n(24),l=n(26),d=n(25),f=(n(65),n(14)),b=n(6),j=n.n(b),p=(n(53),n(1)),h=(n(54),n(32),a.a.createContext(null)),O=h,g=function(e){return Object(p.jsx)(O.Consumer,{children:function(e){return Object(p.jsxs)("nav",{className:j.a.nav,children:[Object(p.jsx)("div",{className:j.a.item,children:Object(p.jsx)(f.b,{to:"/profile",activeClassName:j.a.active,children:"Profile"})}),Object(p.jsx)("div",{className:j.a.item,children:Object(p.jsx)(f.b,{to:"/dialogs",activeClassName:j.a.active,children:"Messeges"})}),Object(p.jsx)("div",{className:"".concat(j.a.item," ").concat(j.a.findUsers),children:Object(p.jsx)(f.b,{to:"/users",activeClassName:j.a.active,children:"Find users"})}),Object(p.jsx)("div",{className:j.a.item,children:Object(p.jsx)(f.b,{to:"/news",activeClassName:j.a.active,children:"News"})}),Object(p.jsx)("div",{className:j.a.item,children:Object(p.jsx)(f.b,{to:"/music",activeClassName:j.a.active,children:"Music"})}),Object(p.jsx)("div",{className:j.a.item,children:Object(p.jsx)(f.b,{to:"/settings",activeClassName:j.a.active,children:"Settings"})})]})}})},m=n(4),v=n(2),x=n(35),w=n.n(x),_=function(e){return Object(p.jsxs)("header",{className:w.a.header,children:[Object(p.jsx)("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbNUo7Du0AiYeNKcBocbWzvDluUYkt6ABMSg&usqp=CAU",alt:"#"}),Object(p.jsx)("div",{className:w.a.loginBlock,children:!0===e.isAuth?Object(p.jsx)("button",{onClick:e.logoutUser,children:"  Logout "}):Object(p.jsx)(f.b,{to:"/login",children:" Login "})})]})},y=n(16),S=n(5),N=n.n(S),C=n(11),P=n(8),T="samurai-network/SET_USER_DATA",I="WRONG_AUTH",A={id:null,email:null,login:null,isAuth:!1,wrongAuth:!1},k=function(e,t,n,r){return{type:T,data:{id:e,email:t,login:n,isAuth:r}}},E=function(e){return{type:I,wrongAuth:e}},U=function(){return function(){var e=Object(C.a)(N.a.mark((function e(t){var n,r,a,c,i;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.a.me();case 2:0===(n=e.sent).resultCode&&(r=n.data,a=r.id,c=r.email,i=r.login,t(k(a,c,i,!0)),t(E(!1)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case T:return Object(v.a)(Object(v.a)({},e),t.data);case I:return Object(v.a)(Object(v.a)({},e),{},{wrongAuth:t.wrongAuth})}return e},F=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(p.jsx)(_,Object(v.a)({},this.props))}}]),n}(a.a.Component),R=Object(y.b)((function(e){return{isAuth:e.authPage.isAuth,login:e.authPage.login}}),{logoutUser:function(){return function(){var e=Object(C.a)(N.a.mark((function e(t){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.a.logout();case 2:0===e.sent.data.resultCode&&t(k(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(F),z=n(27),D=n(18),M=n(31),G=n(58),B=n.n(G),H=Object(y.b)((function(e){return{isAuth:e.authPage.isAuth,wrongAuth:e.authPage.wrongAuth}}),{loginUser:function(e,t,n){return function(){var r=Object(C.a)(N.a.mark((function r(a){var c;return N.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,P.a.login(e,t,n);case 2:0===(c=r.sent).data.resultCode?a(U()):(c.data.messages[0],a(E(!0)));case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}})((function(e){return e.isAuth?Object(p.jsx)(m.a,{to:"/profile"}):Object(p.jsx)("div",{children:Object(p.jsx)(z.b,{onSubmit:function(t){e.loginUser(t.email,t.password,t.rememberMe)},render:function(t){var n=t.handleSubmit;return Object(p.jsxs)("form",{onSubmit:n,children:[Object(D.c)("Email","Email","email",D.a,M.d,null),Object(D.c)("Password","Password","password",D.a,M.d,"password"),Object(D.c)("Remember me",null,"rememberMe",D.a,null,"checkbox"),Object(p.jsx)("div",{children:e.wrongAuth?Object(p.jsx)("div",{className:B.a.errorLogin,children:" Incorect email or password "}):void 0}),Object(p.jsx)("button",{children:"Login"})]})}})})})),W=function(e){return Object(p.jsxs)("div",{children:[Object(p.jsx)("h1",{children:"Login"}),Object(p.jsx)(H,{})]})},Y="INITIALIZED",q={isInitialized:!1},V=n(39),J=n(17),K=n(51),X=n(38),Z=[],Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z;return e},$=n(52),ee=n(59),te=Object(J.b)({profileComponent:X.b,dialogsComponent:K.a,sidebarReducer:Q,usersPage:$.a,authPage:L,app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Y:return Object(v.a)(Object(v.a)({},e),{},{isInitialized:!0});default:return e}}}),ne=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||J.c,re=Object(J.d)(te,ne(Object(J.a)(ee.a)));window._store_=re;var ae=re,ce=a.a.lazy((function(){return n.e(3).then(n.bind(null,112))})),ie=a.a.lazy((function(){return n.e(5).then(n.bind(null,114))})),se=a.a.lazy((function(){return n.e(7).then(n.bind(null,109))})),ue=a.a.lazy((function(){return n.e(6).then(n.bind(null,110))})),oe=a.a.lazy((function(){return n.e(8).then(n.bind(null,111))})),le=a.a.lazy((function(){return n.e(4).then(n.bind(null,113))})),de=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?Object(p.jsxs)("div",{className:"app-wrapper",children:[Object(p.jsx)(R,{}),Object(p.jsx)(g,{sidebar:this.props.state}),Object(p.jsx)("div",{className:"app-wrapper-content",children:Object(p.jsx)(r.Suspense,{fallback:Object(p.jsx)("div",{children:"Loading..."}),children:Object(p.jsxs)(m.d,{children:[Object(p.jsx)(m.b,{path:"/profile/:userId?",render:function(){return Object(p.jsx)(ce,{})}}),Object(p.jsx)(m.b,{path:"/dialogs",render:function(){return Object(p.jsx)(ie,{})}}),Object(p.jsx)(m.b,{path:"/news",render:function(){return Object(p.jsx)(se,{})}}),Object(p.jsx)(m.b,{path:"/music",render:function(){return Object(p.jsx)(ue,{})}}),Object(p.jsx)(m.b,{path:"/settings",render:function(){return Object(p.jsx)(oe,{})}}),Object(p.jsx)(m.b,{path:"/users",render:function(){return Object(p.jsx)(le,{})}}),Object(p.jsx)(m.b,{path:"/login",render:function(){return Object(p.jsx)(W,{})}})]})})})]}):Object(p.jsx)(V.a,{})}}]),n}(a.a.Component),fe=Object(J.c)(m.g,Object(y.b)((function(e){return{initialized:e.app.isInitialized}}),{initializeApp:function(){return function(e){var t=e(U());Promise.all([t]).then((function(){e({type:Y})}))}}}))(de),be=function(){return Object(p.jsx)(f.a,{basename:"/incubatorSocialNetwork",children:Object(p.jsx)(y.a,{store:ae,children:Object(p.jsx)(fe,{})})})};i.a.render(Object(p.jsx)(be,{}),document.getElementById("root")),s()}},[[97,1,2]]]);
//# sourceMappingURL=main.c92b523a.chunk.js.map