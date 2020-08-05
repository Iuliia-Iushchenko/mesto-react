(this["webpackJsonpmesto-app"]=this["webpackJsonpmesto-app"]||[]).push([[0],{10:function(e,t,n){e.exports=n(16)},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(5),c=n.n(r),i=(n(15),n(9)),u=n(1),l=n(6),s=n.n(l);var p=function(){return o.a.createElement("header",{className:"header"},o.a.createElement("img",{className:"header__logo",src:s.a,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f \u043f\u0440\u043e\u0435\u043a\u0442\u0430"}))},m=o.a.createContext();var d=function(e){var t=o.a.useContext(m),n=e.card.owner._id===t._id,a="button ".concat(n?"button_delete button_delete_visible":"button_delete"),r=e.card.likes.some((function(e){return e._id===t._id})),c="button button_like ".concat(r&&"button__like_active");return o.a.createElement("article",{className:"gallery-card",key:e.card._id},o.a.createElement("img",{className:"gallery-card__picture",src:e.card.link,alt:e.card.name,onClick:function(){e.onCardClick(e.card.name,e.card.link)}}),o.a.createElement("button",{className:a,onClick:function(){e.onCardDelete(e.card)}}),o.a.createElement("div",{className:"gallery-card__description"},o.a.createElement("h2",{className:"gallery-card__title"},e.card.name),o.a.createElement("div",{className:"gallery-card_like"},o.a.createElement("button",{className:c,type:"button",onClick:function(){e.onCardLike(e.card)}}),o.a.createElement("span",{className:"button_like-counter"},e.card.likes.length))))};var _=function(e){var t=o.a.useContext(m);return o.a.createElement("main",{className:"page"},o.a.createElement("section",{className:"profile"},o.a.createElement("div",{className:"profile__container"},o.a.createElement("img",{className:"profile__picture",src:t.avatar,alt:"\u0424\u043e\u0442\u043e \u043f\u0440\u043e\u0444\u0438\u043b\u044f",name:"avatar"}),o.a.createElement("div",{className:"profile__picture_edit",onClick:e.onEditAvatar}),o.a.createElement("div",{className:"profile__info"},o.a.createElement("div",{className:"profile__edit"},o.a.createElement("h1",{className:"profile__name"},t.name),o.a.createElement("button",{className:"button button_edit",name:"button_edit",type:"button",onClick:e.onEditProfile})),o.a.createElement("p",{className:"profile__job"},t.about))),o.a.createElement("button",{className:"button button_add",name:"button_add",type:"button",onClick:e.onAddPlace})),o.a.createElement("section",{className:"gallery"},e.cards.map((function(t){return o.a.createElement(d,{key:t._id,card:t,onCardClick:e.onCardClick,onCardLike:e.onCardLike,onCardDelete:e.onCardDelete})}))))};var f=function(e){return o.a.createElement("div",{className:e.isOpen?"popup popup_opacity-normal ".concat(e.name," popup_opened"):"popup popup_opacity-normal ".concat(e.name)},o.a.createElement("div",{className:"popup__container"},o.a.createElement("form",{className:"popup__form ".concat(e.height),name:e.name,method:"post",action:"#",onSubmit:e.onSubmit},o.a.createElement("h2",{className:"popup__title ".concat(e.padding," ").concat(e.paddingSize)},e.title),e.children,o.a.createElement("button",{className:"popup__button button button_submit",type:"submit"},e.buttonText)),o.a.createElement("button",{className:"button button_close popup-change__close",type:"button",onClick:e.onClose})))};var h=function(e){var t=o.a.useContext(m),n=o.a.useState(""),a=Object(u.a)(n,2),r=a[0],c=a[1],i=o.a.useState(""),l=Object(u.a)(i,2),s=l[0],p=l[1];return o.a.useEffect((function(){c(t.name),p(t.about)}),[t]),o.a.createElement(f,{name:"popup-edit",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",buttonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onUpdateUser({name:r,about:s})},children:o.a.createElement(o.a.Fragment,null,o.a.createElement("input",{className:"popup__input popup__input_name",id:"name-input",type:"text",name:"name",minLength:"2",maxLength:"40",pattern:"[A-Za-z\u0410-\u042f\u0401\u0430-\u044f\u0451 -]{1,}",placeholder:"\u0418\u043c\u044f",required:!0,value:r||"",onChange:function(e){c(e.target.value)}}),o.a.createElement("span",{className:"popup__input-error",id:"name-input-error"}),o.a.createElement("input",{className:"popup__input popup__input_job",id:"job-input",type:"text",name:"job",minLength:"2",maxLength:"200",placeholder:"\u041e \u0441\u0435\u0431\u0435",required:!0,value:s||"",onChange:function(e){p(e.target.value)}}),o.a.createElement("span",{className:"popup__input-error",id:"job-input-error"}))})};var E=function(e){var t=o.a.useContext(m),n=o.a.useRef(),a=o.a.useState(""),r=Object(u.a)(a,2),c=r[0],i=r[1];return o.a.useEffect((function(){i(t.avatar)}),[t]),o.a.createElement(f,{name:"popup-change",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",height:"popup__form_height-medium",padding:"popup__title_padding",buttonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onUpdateAvatar({avatar:n.current.value})},children:o.a.createElement(o.a.Fragment,null,o.a.createElement("input",{className:"popup__input popup__input_link",id:"url-input",type:"url",name:"link",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0430\u0432\u0430\u0442\u0430\u0440",value:c||"",required:!0,ref:n,onChange:function(e){i(e.target.value)}}),o.a.createElement("span",{className:"popup__input-error",id:"url-input-error"}))})};var b=function(e){var t=o.a.useContext(m),n=o.a.useState(""),a=Object(u.a)(n,2),r=a[0],c=a[1],i=o.a.useState(""),l=Object(u.a)(i,2),s=l[0],p=l[1];return o.a.useEffect((function(){c(t.cardName),p(t.link)}),[t]),o.a.createElement(f,{name:"popup-add",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",padding:"popup__title_padding",buttonText:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onAddPlase({name:r,link:s})},children:o.a.createElement(o.a.Fragment,null,o.a.createElement("input",{className:"popup__input popup__input_title",id:"title-input",type:"text",name:"title",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",minLength:"1",maxLength:"30",required:!0,value:r||"",onChange:function(e){c(e.target.value)}}),o.a.createElement("span",{className:"popup__input-error",id:"title-input-error"}),o.a.createElement("input",{className:"popup__input popup__input_path",id:"url-input",type:"url",name:"path",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0,value:s||"",onChange:function(e){p(e.target.value)}}),o.a.createElement("span",{className:"popup__input-error",id:"url-input-error"}))})};var v=function(e){return o.a.createElement(f,{name:"popup-delete",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",height:"popup__form_height-small",paddingSize:"popup__title_padding_small",buttonText:"\u0414\u0430",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onSubmit()}})};var g=function(e){return o.a.createElement("div",{className:e.card.isOpen?"popup popup_opacity popup-card popup_opened":"popup popup_opacity popup-card"},o.a.createElement("div",{className:"popup__container"},o.a.createElement("figure",{className:"popup__frame"},o.a.createElement("img",{className:"popup__image",alt:e.card.name,src:e.card.link}),o.a.createElement("figcaption",{className:"popup__caption"},e.card.name)),o.a.createElement("button",{className:"button button_close popup-card__close",type:"button",onClick:e.onClose})))};var C=function(){return o.a.createElement("footer",{className:"footer"},o.a.createElement("p",{className:"footer__copyright"},"\xa9 2020 \u042e\u0449\u0435\u043d\u043a\u043e \u042e\u043b\u0438\u044f"))},k=n(7),N=n(8),y=new(function(){function e(t){var n=t.baseUrl,a=t.authToken;Object(k.a)(this,e),this._baseUrl=n,this._authToken=a}return Object(N.a)(e,[{key:"_sendRequest",value:function(e,t,n){return fetch(this._baseUrl+t,{method:e,headers:{Authorization:this._authToken,"Content-Type":"application/json"},body:JSON.stringify(n)}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"getUserInfo",value:function(){return this._sendRequest("GET","/users/me")}},{key:"changeAvatar",value:function(e){return this._sendRequest("PATCH","/users/me/avatar",{avatar:e})}},{key:"changeLikeCardStatus",value:function(e,t){return this._sendRequest("".concat(t?"PUT":"DELETE"),"/cards/likes/".concat(e))}},{key:"setUserInfo",value:function(e,t){return this._sendRequest("PATCH","/users/me",{name:e,about:t})}},{key:"getInitialCards",value:function(){return this._sendRequest("GET","/cards")}},{key:"createCard",value:function(e,t){return this._sendRequest("POST","/cards",{name:e,link:t})}},{key:"deleteCard",value:function(e){return this._sendRequest("DELETE","/cards/".concat(e))}}]),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-12",authToken:"4ae18a0d-219b-4b69-acec-20d1c5775e6d"});var O=function(){var e=o.a.useState(!1),t=Object(u.a)(e,2),n=t[0],a=t[1],r=o.a.useState(!1),c=Object(u.a)(r,2),l=c[0],s=c[1],d=o.a.useState(!1),f=Object(u.a)(d,2),k=f[0],N=f[1],O=o.a.useState(!1),S=Object(u.a)(O,2),j=S[0],w=S[1],x=o.a.useState({}),L=Object(u.a)(x,2),T=L[0],A=L[1],U=o.a.useState([]),q=Object(u.a)(U,2),P=q[0],D=q[1],R=o.a.useState([]),I=Object(u.a)(R,2),z=I[0],F=I[1],J=o.a.useState({isOpen:!1,name:"",link:""}),B=Object(u.a)(J,2),G=B[0],H=B[1];function W(){N(!1),a(!1),s(!1),w(!1),H({isOpen:!1,name:"",link:""})}function M(e){"Escape"===e.key&&W()}function Z(e){e.target.classList.contains("popup")&&W()}return o.a.useEffect((function(){y.getUserInfo().then((function(e){A(e)})).catch((function(e){return console.log(e)})),y.getInitialCards().then((function(e){D(e)})).catch((function(e){return console.log(e)}))}),[]),o.a.useEffect((function(){return window.addEventListener("keydown",M),window.addEventListener("mousedown",Z),function(){window.removeEventListener("mousedown",Z),window.removeEventListener("keydown",M)}})),o.a.createElement("div",{className:"App"},o.a.createElement(m.Provider,{value:T},o.a.createElement(p,null),o.a.createElement(_,{cards:P,onEditAvatar:function(){N(!0)},onEditProfile:function(){a(!0)},onAddPlace:function(){s(!0)},onCardClick:function(e,t){H({isOpen:!0,name:e,link:t})},onCardLike:function(e){var t=e.likes.some((function(e){return e._id===T._id}));y.changeLikeCardStatus(e._id,!t).then((function(t){var n=P.map((function(n){return n._id===e._id?t:n}));D(n)})).catch((function(e){return console.log(e)}))},onCardDelete:function(e){F(e),w(!0)}}),o.a.createElement(v,{isOpen:j,onClose:W,onSubmit:function(){y.deleteCard(z._id).then((function(){D(P.filter((function(e){return e._id!==z._id}))),W()})).catch((function(e){return console.log(e)}))}}),o.a.createElement(h,{isOpen:n,onClose:W,onUpdateUser:function(e){y.setUserInfo(e.name,e.about).then((function(e){A(e),W()})).catch((function(e){return console.log(e)}))}}),o.a.createElement(E,{isOpen:k,onClose:W,onUpdateAvatar:function(e){y.changeAvatar(e.avatar).then((function(e){A(e),W()})).catch((function(e){return console.log(e)}))}}),o.a.createElement(b,{isOpen:l,onClose:W,onAddPlase:function(e){y.createCard(e.name,e.link).then((function(e){D([e].concat(Object(i.a)(P))),W()})).catch((function(e){return console.log(e)}))}}),o.a.createElement(g,{card:G,onClose:W}),o.a.createElement(C,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},6:function(e,t,n){e.exports=n.p+"static/media/logo.c6f11019.svg"}},[[10,1,2]]]);
//# sourceMappingURL=main.d6ea923d.chunk.js.map