(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[3],{100:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var s=n(38);function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var n=[],s=!0,o=!1,i=void 0;try{for(var r,c=t[Symbol.iterator]();!(s=(r=c.next()).done)&&(n.push(r.value),!e||n.length!==e);s=!0);}catch(a){o=!0,i=a}finally{try{s||null==c.return||c.return()}finally{if(o)throw i}}return n}}(t,e)||Object(s.a)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},102:function(t,e,n){t.exports={descriptionBlock:"ProfileInfo_descriptionBlock__3iVQO",formInfo:"ProfileInfo_formInfo__1bcfw",photo:"ProfileInfo_photo__2q9qO",profileContacts:"ProfileInfo_profileContacts__2LPzT",invalidUrl:"ProfileInfo_invalidUrl__15DKk",profileContactsTitle:"ProfileInfo_profileContactsTitle__3uwc0",personal:"ProfileInfo_personal__2UO2O"}},104:function(t,e,n){t.exports={postsBlock:"MyPosts_postsBlock__2MoqA",item:"MyPosts_item__3QvZm",post:"MyPosts_post__1_2F0"}},105:function(t,e,n){t.exports={item:"Post_item__bU7IH",img:"Post_img__dehKL"}},106:function(t,e,n){},113:function(t,e,n){"use strict";n.r(e);var s=n(2),o=n(24),i=n(25),r=n(27),c=n(26),a=n(0),l=n.n(a),u=n(100),j=n(37),b=n(102),d=n.n(b),p=n(40),f=n(1),O=function(t){var e=Object(a.useState)(!1),n=Object(u.a)(e,2),s=n[0],o=n[1],i=Object(a.useState)(t.status),r=Object(u.a)(i,2),c=r[0],l=r[1];Object(a.useEffect)((function(){l(t.status)}),[t.status]);return Object(f.jsxs)("div",{children:["Status: ",!1===s&&Object(f.jsx)("span",{onDoubleClick:function(){o(!0)},children:t.status||"---------"}),!0===s&&Object(f.jsx)("span",{children:Object(f.jsx)("input",{autoFocus:!0,onChange:function(t){l(t.currentTarget.value)},onBlur:function(){o(!1),t.updateStatus(c)},value:c})})]})},h=n(20),m=n(18),v=function(t){var e=t.editModeFalse,n=t.profile;return Object(f.jsx)("div",{children:Object(f.jsx)(h.b,{onSubmit:e,render:function(t){var e=t.handleSubmit;return Object(f.jsxs)("form",{onSubmit:e,children:[Object(f.jsxs)("div",{className:d.a.formInfo,children:[Object(f.jsxs)("div",{children:[" Full name: ",Object(m.d)(null,"Full name","fullName",m.a,null,"text",n.fullName)," "]}),Object(f.jsxs)("div",{children:[" About me: ",Object(m.d)(null,"About me","aboutMe",m.b,null,"text",n.aboutMe)," "]}),Object(f.jsxs)("div",{children:[" My skills: ",Object(m.d)(null,"My skills","lookingForAJobDescription",m.b,null,"text",n.lookingForAJobDescription)," "]}),Object(f.jsxs)("div",{children:[" Looking for a job: ",Object(m.d)(null,null,"lookingForAJob",m.a,null,"checkbox")," "]})]}),Object(f.jsx)("div",{children:" Profile contacts:"}),Object(f.jsxs)("div",{children:[" ",Object.keys(n.contacts).map((function(t){return Object(f.jsxs)("div",{className:d.a.contact,children:[" ",Object(f.jsxs)("span",{className:d.a.contactKey,children:[" ",t," "]}),": ",Object(m.d)(null,t,"contacts."+t,m.a,null,"text",n.contacts[t])," "]})}))," "]}),Object(f.jsx)("button",{children:"Submit"})]})}})})},x=["profile","status","updateStatus","isOwner","saveProfile","invalidUrl"],k=function(t){var e=t.profile,n=t.isOwner,s=t.editModeTrue;return Object(f.jsxs)("div",{children:[Object(f.jsx)("div",{className:d.a.personal,children:"Personal information"}),Object(f.jsxs)("div",{children:[" Full name: ",e.fullName," "]}),Object(f.jsxs)("div",{children:[" About me: ",e.aboutMe," "]}),Object(f.jsxs)("div",{children:[" My skills: ",e.lookingForAJobDescription," "]}),Object(f.jsxs)("div",{children:[" Looking for a job: ",e.lookingForAJob?"yes":"no"," "]}),Object(f.jsx)(g,{profile:e}),n&&Object(f.jsx)("button",{onClick:s,children:"Edit"})]})},g=function(t){var e=t.profile;return Object(f.jsxs)("div",{className:d.a.profileContacts,children:[Object(f.jsx)("div",{className:d.a.profileContactsTitle,children:" Profile contacts: "}),Object.keys(e.contacts).map((function(t){return Object(f.jsxs)("div",{className:d.a.contact,children:[" ",t,": ",e.contacts[t]," "]},t.id)}))]})},P=function(t){var e=t.profile,n=t.status,s=t.updateStatus,o=t.isOwner,i=t.saveProfile,r=t.invalidUrl,c=Object(j.a)(t,x),l=Object(a.useState)(!1),b=Object(u.a)(l,2),h=b[0],m=b[1];if(!e)return Object(f.jsx)(p.a,{});return Object(f.jsxs)("div",{children:[Object(f.jsx)("div",{children:Object(f.jsx)("img",{src:e.photos.large,className:d.a.photo,alt:"user ava"})}),Object(f.jsx)("div",{children:o&&Object(f.jsx)("input",{type:"file",onChange:function(t){t.target.files.length&&c.uploadPhoto(t.target.files[0])}})}),Object(f.jsxs)("div",{className:d.a.descriptionBlock,children:[Object(f.jsx)(O,{status:n,updateStatus:s}),h?Object(f.jsx)(v,{profile:e,editModeFalse:function(t){var e={fullName:t.fullName,aboutMe:t.aboutMe,lookingForAJobDescription:t.lookingForAJobDescription,lookingForAJob:t.lookingForAJob,contacts:{facebook:t.contacts.facebook,github:t.contacts.github,mainLink:t.contacts.mainLink,twitter:t.contacts.twitter,vk:t.contacts.vk,website:t.contacts.website,youtube:t.contacts.youtube}};i(e),m(!1)}}):Object(f.jsx)(k,{profile:e,isOwner:o,editModeTrue:function(){m(!0)}})]}),Object(f.jsx)("div",{children:r?Object(f.jsxs)("div",{className:d.a.invalidUrl,children:[" ",r," "]}):void 0})]})},y=n(16),_=n(39),S=n(19),N=n(31),A=n(104),C=n.n(A),U=n(105),w=n.n(U),I=function(t){return Object(f.jsx)("div",{children:Object(f.jsxs)("div",{className:w.a.item,children:[Object(f.jsx)("img",{className:w.a.img,src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbNslP7-_P7jz5MrT5yhW14y_IzBDbZZT0ag&usqp=CAU",alt:"ava"}),t.message,Object(f.jsx)("div",{children:Object(f.jsxs)("span",{children:["like ",t.likeCount]})})]})})},M=l.a.memo((function(t){var e=Object(S.a)(t.post).reverse().map((function(t){return Object(f.jsx)(I,{message:t.message,likeCount:t.likeCount},t.id)}));return Object(f.jsxs)("div",{className:C.a.postsBlock,children:[Object(f.jsx)(F,{onAddPost:function(e){var n=e;t.addPost(n)}}),Object(f.jsx)("div",{className:C.a.item,children:"New post"}),Object(f.jsx)("div",{className:C.a.post,children:e})]})})),F=function(t){var e=Object(N.b)(20);return Object(f.jsx)("div",{children:Object(f.jsx)(h.b,{onSubmit:function(e){t.onAddPost(e.text),e.text=""},render:function(t){var n=t.handleSubmit;return Object(f.jsxs)("form",{onSubmit:n,children:[Object(f.jsx)(h.a,{name:"text",component:m.b,placeholder:"Create post",validate:Object(N.a)(N.d,e,Object(N.c)(1))}),Object(f.jsx)("button",{children:" Add post"})]})}})})},T=M,J=Object(y.b)((function(t){return{post:t.profileComponent.posts,newPostText:t.profileComponent.newPostText}}),(function(t){return{addPost:function(e){t(Object(_.a)(e))}}}))(T),D=n(106),B=n.n(D),L=function(t){return Object(f.jsxs)("div",{className:B.a.profile,children:[Object(f.jsx)(P,Object(s.a)(Object(s.a)({profile:t.profile,status:t.status,updateStatus:t.updateStatus,isOwner:t.isOwner,saveProfile:t.saveProfile},t),{},{invalidUrl:t.invalidUrl})),Object(f.jsx)(J,{})]})},q=n(5),z=n(17),E=n(99),K=function(t){Object(r.a)(n,t);var e=Object(c.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(i.a)(n,[{key:"updateProfile",value:function(){var t=this.props.match.params.userId;t||(t=this.props.autherizedUser),t||(t=this.props.history.push("/login")),this.props.getUserProfile(t),this.props.getUserStatus(t)}},{key:"componentDidMount",value:function(){this.updateProfile()}},{key:"componentDidUpdate",value:function(t,e,n){this.props.match.params.userId!==t.match.params.userId&&this.updateProfile()}},{key:"render",value:function(){return Object(f.jsx)(L,Object(s.a)(Object(s.a)({},this.props),{},{saveProfile:this.props.saveProfile,status:this.props.status,updateStatus:this.props.updateStatus,isOwner:!this.props.match.params.userId,invalidUrl:this.props.invalidUrl}))}}]),n}(l.a.Component);e.default=Object(z.c)(Object(y.b)((function(t){return{profile:t.profileComponent.userProfile,status:t.profileComponent.status,autherizedUser:t.authPage.id,invalidUrl:t.profileComponent.invalidUrl}}),{setUserProfile:_.f,getUserProfile:_.c,getUserStatus:_.d,updateStatus:_.g,uploadPhoto:_.h,saveProfile:_.e}),q.g,E.a)(K)},99:function(t,e,n){"use strict";n.d(e,"a",(function(){return p}));var s=n(2),o=n(24),i=n(25),r=n(27),c=n(26),a=n(0),l=n.n(a),u=n(16),j=n(5),b=n(1),d=function(t){return{isAuth:t.authPage.isAuth}},p=function(t){var e=function(e){Object(r.a)(a,e);var n=Object(c.a)(a);function a(){return Object(o.a)(this,a),n.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return this.props.isAuth?Object(b.jsx)(t,Object(s.a)({},this.props)):Object(b.jsx)(j.a,{to:"/login"})}}]),a}(l.a.Component);return Object(u.b)(d)(e)}}}]);
//# sourceMappingURL=3.dcdbe08a.chunk.js.map