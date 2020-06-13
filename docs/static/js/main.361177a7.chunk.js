(this["webpackJsonptravel-app"]=this["webpackJsonptravel-app"]||[]).push([[0],{24:function(e,t,a){e.exports=a.p+"static/media/preloader.07166599.svg"},31:function(e,t,a){e.exports=a.p+"static/media/home.709c53c2.svg"},35:function(e,t,a){},45:function(e,t,a){e.exports=a.p+"static/media/heartEmpty.5e30bffd.svg"},46:function(e,t,a){e.exports=a.p+"static/media/heartFilled.2320281b.svg"},49:function(e,t,a){e.exports=a.p+"static/media/search.387b4b33.svg"},50:function(e,t,a){e.exports=a.p+"static/media/logotype.9281f2cf.png"},53:function(e,t,a){e.exports=a(93)},58:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){},82:function(e,t,a){},84:function(e,t,a){},85:function(e,t,a){},86:function(e,t,a){},87:function(e,t,a){},88:function(e,t,a){},89:function(e,t,a){},90:function(e,t,a){},91:function(e,t,a){},92:function(e,t,a){},93:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),r=a.n(n),l=a(15),c=a.n(l),o=(a(58),a(2)),i=a(3),s=a(4),u=a(5),m=a(8),p=a(14),d=(a(35),a(59),a(24)),h=a.n(d),f=(a(60),a(45)),E=a.n(f),v=a(46),b=a.n(v),y=a(7),g=a(6),O=a.n(g),j="https://nodejs-mysql-it-academy.herokuapp.com",N=(localStorage.getItem("token"),function(e){return{type:"SAVE_TEXT",payload:e}}),k=function(){return function(e){e({type:"GET_HOTELS"}),O.a.get("".concat(j,"/hotels")).then((function(t){e({type:"GET_HOTELS_SUCCESS",payload:t.data,loadRecommended:t.data.filter((function(e){return e.recommended}))})})).catch((function(){e({type:"GET_HOTELS_ERROR"})}))}},S=(a(82),function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).handleClick=function(){var t=e.props,a=t.hotel;(0,t.addToFavourites)(a)},e.isFav=function(t){return e.props.favourites.find((function(e){return e.id===t}))},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props.hotel;return r.a.createElement("div",{className:"fav-button",onClick:this.handleClick},r.a.createElement("img",{className:"fav-icon",src:this.isFav(e.id)?b.a:E.a,alt:""}))}}]),a}(r.a.Component)),C=Object(y.b)((function(e){return{favourites:e.favourites}}),(function(e){return{addToFavourites:function(t){return e(function(e){return{type:"ADD_TO_FAVOURITES",payload:e}}(t))}}}))(S),A=function(e,t){return r.a.createElement("div",{className:"hotel"},r.a.createElement("img",{src:e.image,alt:"hotel_image"}),r.a.createElement("div",{className:"hotel-info",key:e.id},r.a.createElement(m.b,{to:"hotel/"+e.id},r.a.createElement("div",{className:"hotel-name"},e.title)),r.a.createElement("div",{className:"hotel-location-price"},r.a.createElement("div",null,e.location),r.a.createElement("span",{className:"price-container"},r.a.createElement("div",null,e.price,t.symbol)),r.a.createElement(C,{hotel:e}))))},w=function(e){return e.data.length>0?r.a.createElement("div",{className:"main-container"},e.data.map((function(t){return A(t,e)}))):r.a.createElement("div",{className:"d-flex justify-content-center mx-auto align-items-start"},r.a.createElement("img",{src:h.a,alt:"preloader"}))},H=(a(84),a(49)),_=a.n(H),x=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(e=t.call.apply(t,[this].concat(l))).state={},e.inputRef=r.a.createRef(),e.handleCurrency=function(t){e.props.convertPrice(t.target.value)},e.handleSearch=function(t){e.props.filterHotels(t.target.value)},e.handleFilterPrice=function(t){e.props.filterHotelsPrice(t.target.value)},e.handleClick=function(){e.props.dispatch(N("New text is here!"))},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.inputRef.current.focus()}},{key:"render",value:function(){return r.a.createElement("div",{className:"header"},r.a.createElement("div",null,r.a.createElement("img",{src:_.a,alt:"search"}),r.a.createElement("input",{type:"text",className:"search-field-location",placeholder:"Enter location",onChange:this.handleSearch,ref:this.inputRef})),r.a.createElement("div",{className:"price-currency-change"},r.a.createElement("div",{className:"price-bar"},r.a.createElement("span",{role:"img","aria-label":"emoji"},"\ud83d\udcb0"),r.a.createElement("input",{type:"text",className:"search-field-price",placeholder:"Min. price",onChange:this.handleFilterPrice}),"$"),r.a.createElement("select",{className:"price-bar-currency",onChange:this.handleCurrency},r.a.createElement("option",{value:"USD"},"USD"),r.a.createElement("option",{value:"EUR"},"EUR"),r.a.createElement("option",{value:"PLN"},"PLN"),r.a.createElement("option",{value:"CHF"},"CHF"))),r.a.createElement("input",{type:"button",value:"click",onClick:this.handleClick}),this.props.savedText)}}]),a}(r.a.Component),F=Object(y.b)((function(e){return{savedText:e.text}}))(x),T=(a(85),a(25)),P=(a(86),function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={title:null,image:null,price:null,type:"Normal",location:null},e.setValue=function(t,a){e.setState(Object(T.a)({},t,a))},e.addNewHotel=function(){var t={title:e.state.title,image:e.state.image,price:e.state.price,type:e.state.type,location:e.state.location};O.a.post("https://nodejs-mysql-it-academy.herokuapp.com/add-hotel",t).then((function(e){console.log(e.data)})).catch((function(e){console.log(e)}))},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"add-container"},this.state.title,r.a.createElement("form",null,r.a.createElement("input",{className:"form-control",type:"text",placeholder:"Title",onChange:function(t){e.setValue("title",t.target.value)}}),r.a.createElement("input",{className:"form-control",type:"text",placeholder:"Image",onChange:function(t){e.setValue("image",t.target.value)}}),r.a.createElement("div",{className:"price-one-row"},r.a.createElement("input",{className:"form-control",type:"text",placeholder:"Price",onChange:function(t){e.setValue("price",t.target.value)}}),r.a.createElement("select",{className:"form-control",onChange:function(t){e.setValue("type",t.target.value)}},r.a.createElement("option",null,"Normal"),r.a.createElement("option",null,"Plus"),r.a.createElement("option",null,"Premium"))),r.a.createElement("input",{className:"form-control",type:"text",placeholder:"Location",onChange:function(t){e.setValue("location",t.target.value)}}),r.a.createElement("div",{className:"buttons"},r.a.createElement("input",{className:"add-hotel-button",type:"button",value:"Add hotel",onClick:this.addNewHotel}),r.a.createElement("button",{className:"closebutton",onClick:this.props.onClose},"Close form"),this.props.children)))}}]),a}(r.a.Component)),L=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={modalOpen:!1},e.toggleModal=function(){e.setState((function(e){return{modalOpen:!e.modalOpen}}))},e}return Object(i.a)(a,[{key:"render",value:function(){return this.props.sidebar_data.length>0?r.a.createElement("div",{className:"sidebar"},r.a.createElement("p",{className:"title"},"More than just hotels"),this.props.sidebar_data.map((function(e){return r.a.createElement("div",{className:"hotel_container"},r.a.createElement("img",{src:e.image,alt:"hotel_image"}),r.a.createElement("div",{className:"hotel_container__info_container"},r.a.createElement("p",{className:"hotel_title"},e.title),r.a.createElement("p",{className:"location"},e.location),r.a.createElement("div",{className:"price"},e.price,"$")),r.a.createElement("div",{className:"more d-flex align-items-center"},"\u203a"))})),!this.state.modalOpen&&r.a.createElement("div",{className:"button-div"},r.a.createElement("button",{className:"add-hotel-button",onClick:this.toggleModal,hidden:this.modalOpen},"Add Hotel")),this.state.modalOpen&&r.a.createElement(P,{onClose:this.toggleModal})):r.a.createElement("div",{className:"d-flex justify-content-center mx-auto align-items-start"},r.a.createElement("img",{src:h.a,alt:"preloader"}))}}]),a}(r.a.Component),R=Object(y.b)((function(e){return{sidebar_data:e.recommendedHotels}}))(L),U={USD:1,EUR:.93,PLN:4.25,CHF:.98},D=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={hotels:[],recommendedHotels:[],sort:!0,currency:"USD",dataFromApi:[],symbol:"$"},e.convertPrice=function(t){var a;switch(t){case"USD":a="$";break;case"EUR":a="\u20ac";break;case"PLN":a="zl";break;case"CHF":a="\u20a3";break;default:a="$"}e.setState({currency:t,symbol:a})},e.filterHotels=function(t){var a=e.state.dataFromApi.filter((function(e){return e.location.toLowerCase().includes(t.toLowerCase())}));e.setState({hotels:t.length>0?a:e.state.dataFromApi})},e.filterHotelsPrice=function(t){var a=e.state.dataFromApi.filter((function(e){return e.price>=parseInt(t)}));e.setState({hotels:t.length>0?a:e.state.dataFromApi})},e.sortHotels=function(){var t,a;return e.state.sort?(t=1,a=-1):(t=-1,a=1),e.state.dataFromApi.sort((function(e,n){return e.title>n.title?t:n.title>e.title?a:0}))},e.switchSort=function(){e.setState({sort:!e.state.sort,hotels:e.sortHotels()})},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;O.a.get("https://nodejs-mysql-it-academy.herokuapp.com/hotels").then((function(t){e.setState({dataFromApi:t.data}),e.switchSort()})),this.props.getHotels()}},{key:"componentDidUpdate",value:function(e,t){var a=this;if(t.currency!==this.state.currency){var n=JSON.parse(JSON.stringify(this.state.dataFromApi)).map((function(e){return e.price=Math.ceil(e.price*U[a.state.currency]),e}));this.setState({hotels:n})}}},{key:"render",value:function(){return r.a.createElement("div",{className:"AppH"},r.a.createElement(F,{filterHotels:this.filterHotels,filterHotelsPrice:this.filterHotelsPrice,convertPrice:this.convertPrice}),r.a.createElement("div",{className:"MainSectionH"},r.a.createElement(R,{sidebar_data:this.state.recommendedHotels}),r.a.createElement(w,{data:this.props.hotels,switchSort:this.switchSort,sort:this.state.sort,symbol:this.state.symbol})))}}]),a}(r.a.Component),q=Object(y.b)((function(e){return{hotels:e.hotels}}),(function(e){return{getHotels:function(){return e(k())}}}))(D),M=a(26),I=function(e){var t=Object(n.useState)({}),a=Object(M.a)(t,2),l=a[0],c=a[1];return Object(n.useEffect)((function(){!function(e,t){O.a.get("https://nodejs-mysql-it-academy.herokuapp.com/hotels/"+e).then((function(e){t(e.data)})).catch((function(e){console.log(e)}))}(e.match.params.id,c)}),[]),Object.keys(l).length>0&&r.a.createElement("div",null,l.title)},z=(a(87),a(18)),V=(a(88),function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).login=function(t){t.preventDefault();var a,n=new FormData(t.target),r=Object(z.a)(n);try{for(r.s();!(a=r.n()).done;){var l=a.value;console.log(l)}}catch(c){r.e(c)}finally{r.f()}O.a.post("https://nodejs-mysql-it-academy.herokuapp.com/login",n,{headers:{"Content-type":"multipart/form-data"}}).then((function(t){localStorage.setItem("token",t.data.accessToken),e.props.history.push("/")})).catch((function(e){console.log(e)}))},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("h3",null,"Login"),r.a.createElement("form",{onSubmit:this.login},r.a.createElement("label",null,"Login"),r.a.createElement("br",null),r.a.createElement("input",{type:"text",name:"username",required:!0}),r.a.createElement("br",null),r.a.createElement("label",null,"Password"),r.a.createElement("br",null),r.a.createElement("input",{type:"password",name:"password",required:!0}),r.a.createElement("br",null),r.a.createElement("input",{type:"submit",value:"Login",className:"login-button"})))}}]),a}(r.a.Component)),$=Object(p.g)(V),J=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).login=function(e){e.preventDefault();var t,a=new FormData(e.target),n=localStorage.getItem("token"),r=Object(z.a)(a);try{for(r.s();!(t=r.n()).done;){var l=t.value;console.log(l)}}catch(o){r.e(o)}finally{r.f()}var c={headers:{"Content-type":"multipart/form-data","x-access-token":n}};O.a.post("https://nodejs-mysql-it-academy.herokuapp.com/hotels",a,c).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"Add new hotel"),r.a.createElement("form",{onSubmit:this.login},r.a.createElement("label",null,"Title"),r.a.createElement("input",{type:"text",name:"hotelTitle",required:!0}),r.a.createElement("label",null,"Image:"),r.a.createElement("input",{type:"file",name:"hotelImage",required:!0}),r.a.createElement("label",null,"Price"),r.a.createElement("input",{type:"text",name:"hotelPrice",required:!0}),r.a.createElement("label",null,"Type"),r.a.createElement("select",{type:"select",name:"hotelType",required:!0},r.a.createElement("option",{selected:!0},"Normal"),r.a.createElement("option",null,"Plus"),r.a.createElement("option",null,"Premium")),r.a.createElement("label",null,"Location"),r.a.createElement("input",{type:"text",name:"hotelLocation",required:!0}),r.a.createElement("input",{type:"submit",value:"Login"})))}}]),a}(r.a.Component),G=Object(p.g)(J),X=(a(89),function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).register=function(t){t.preventDefault();var a,n=new FormData(t.target),r=Object(z.a)(n);try{for(r.s();!(a=r.n()).done;){var l=a.value;console.log(l)}}catch(c){r.e(c)}finally{r.f()}O.a.post("https://nodejs-mysql-it-academy.herokuapp.com/register",n,{headers:{"Content-type":"multipart/form-data"}}).then((function(t){e.props.history.push("/login")})).catch((function(e){console.log(e)}))},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("h3",null,"Register"),r.a.createElement("form",{onSubmit:this.register},r.a.createElement("label",null,"Login"),r.a.createElement("br",null),r.a.createElement("input",{type:"text",name:"username",required:!0}),r.a.createElement("br",null),r.a.createElement("label",null,"First name"),r.a.createElement("br",null),r.a.createElement("input",{type:"text",name:"first name",required:!0}),r.a.createElement("br",null),r.a.createElement("label",null,"Surname"),r.a.createElement("br",null),r.a.createElement("input",{type:"text",name:"surname",required:!0}),r.a.createElement("br",null),r.a.createElement("label",null,"Email"),r.a.createElement("br",null),r.a.createElement("input",{type:"email",name:"email",required:!0}),r.a.createElement("br",null),r.a.createElement("label",null,"Password"),r.a.createElement("br",null),r.a.createElement("input",{type:"password",name:"password",required:!0}),r.a.createElement("br",null),r.a.createElement("label",null,"Repeat password"),r.a.createElement("br",null),r.a.createElement("input",{type:"password",name:"repeat password",required:!0}),r.a.createElement("br",null),r.a.createElement("input",{type:"submit",value:"Register",className:"register-button"})))}}]),a}(r.a.Component)),B=a(50),K=a.n(B),Q=a(31),W=a.n(Q),Y=(a(90),function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).handleClick=function(){e.props.history.push("/login")},e.handleLogoutClick=function(){localStorage.removeItem("token"),e.props.verifyUserStatus()},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props,t=e.isAuthorized,a=e.user;return r.a.createElement("nav",{className:"d-flex nav topbar"},r.a.createElement("div",{className:"logotype-img"},r.a.createElement("img",{src:K.a,alt:"logo"})),!t&&r.a.createElement("div",{className:"topbar-buttons"},r.a.createElement(m.b,{to:"/",className:"nav-link active links"},r.a.createElement("img",{src:W.a,alt:"home",className:"home-img"})),r.a.createElement(m.b,{to:"/favourite",className:"nav-link active"},"Favourite Hotels List"),r.a.createElement(m.b,{to:"/contact-us",className:"nav-link active links"},"Contact us"),r.a.createElement(m.b,{to:"/register",className:"nav-link active links"},"Register"),r.a.createElement(m.b,{to:"/login",className:"nav-link active links",onClick:this.handleClick},"Login")),t&&r.a.createElement("div",{className:"topbar-buttons"},r.a.createElement(m.b,{to:"/",className:"nav-link active links"},r.a.createElement("img",{src:W.a,alt:"home",className:"home-img"})),r.a.createElement(m.b,{to:"/contact-us",className:"nav-link active links"},"Contact us"),r.a.createElement(m.b,{to:"/add-hotel",className:"nav-link active links"},"Add hotels"),r.a.createElement(m.b,{to:"/my-hotels",className:"nav-link active links"},"My hotels"),r.a.createElement("input",{type:"button",value:"Logout",onClick:this.handleLogoutClick}),r.a.createElement("div",{className:"user-profile"},a.username)))}}]),a}(r.a.Component)),Z=Object(p.g)(Y),ee=a(51),te=function(e){var t=e.component,a=e.isAuthorized,n=Object(ee.a)(e,["component","isAuthorized"]);return console.log("PrivateRoute",a),r.a.createElement(p.b,Object.assign({},n,{render:function(e){return a?r.a.createElement(t,e):r.a.createElement(p.a,{to:"/login"})}}))},ae=(a(91),function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("h3",null,"Contact us"),r.a.createElement("form",{onSubmit:this.login},r.a.createElement("label",null,"name"),r.a.createElement("br",null),r.a.createElement("input",{type:"text",name:"name",required:!0}),r.a.createElement("br",null),r.a.createElement("label",null,"Email"),r.a.createElement("br",null),r.a.createElement("input",{type:"email",name:"email",required:!0}),r.a.createElement("br",null),r.a.createElement("label",{for:"message"},"Message"),r.a.createElement("br",null),r.a.createElement("textarea",{rows:"10",cols:"45",name:"text"}),r.a.createElement("br",null),r.a.createElement("input",{type:"submit",value:"Send",className:"send-button"})))}}]),a}(r.a.Component)),ne=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={hotels:[],recommendedHotels:[],sort:!0,currency:"USD",dataFromApi:[],symbol:"$"},e.convertPrice=function(t){var a;switch(t){case"USD":a="$";break;case"EUR":a="\u20ac";break;case"PLN":a="zl";break;case"CHF":a="\u20a3";break;default:a="$"}e.setState({currency:t,symbol:a})},e}return Object(i.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=this;if(t.currency!==this.state.currency){var n=JSON.parse(JSON.stringify(this.state.dataFromApi)).map((function(e){return e.price=Math.ceil(e.price*U[a.state.currency]),e}));this.setState({hotels:n})}}},{key:"render",value:function(){return r.a.createElement("div",{className:"AppH"},r.a.createElement(F,{convertPrice:this.convertPrice}),r.a.createElement("div",{className:"MainSectionH"},r.a.createElement(R,{sidebar_data:this.state.recommendedHotels}),r.a.createElement(w,{data:this.state.hotels,sort:this.state.sort,symbol:this.state.symbol})))}}]),a}(r.a.Component),re=Object(y.b)((function(e){return{hotels:e.hotels}}),(function(e){return{getHotels:function(){return e(k())}}}))(ne),le=function(){var e=Object(n.useState)(""),t=Object(M.a)(e,2),a=t[0],l=t[1],c=Object(y.d)((function(e){return e.favourites})),o=Object(y.c)();return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Favourite List"),r.a.createElement("input",{type:"text",onChange:function(e){l(e.target.value)}}),r.a.createElement("p",null,a),c.filter((function(e){return e.title.toLowerCase().includes(a.toLowerCase())})).map((function(e){return r.a.createElement("p",{onClick:function(){var t;t=e.id,o({type:"REMOVE_FROM_FAVOURITES",payload:t})}},e.title)})))},ce=(a(92),function(){return c.a.createPortal(r.a.createElement("div",{className:"notification"},"Test notification"),document.getElementById("portal-root"))}),oe=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={user:null,isAuthorized:!1,hotels:[]},e.verifyUserStatus=function(){var t=localStorage.getItem("token"),a={headers:{"x-access-token":t}};t&&t.length>0?O.a.get("".concat(j,"/users/me"),a).then((function(t){e.setState({user:t.data,isAuthorized:!0}),console.log(e.state.user),console.log(e.state.isAuthorized)})).catch((function(e){console.log(e)})):e.setState({user:null,isAuthorized:!1})},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.verifyUserStatus(),this.props.getHotels()}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(m.a,null,r.a.createElement(ce,null),r.a.createElement(Z,{isAuthorized:this.state.isAuthorized,user:this.state.user,verifyUserStatus:this.verifyUserStatus}),r.a.createElement(p.d,null,r.a.createElement(te,{path:"/add-hotel",component:G,isAuthorized:this.state.isAuthorized}),r.a.createElement(p.b,{path:"/login",component:$}),r.a.createElement(p.b,{path:"/register",component:X}),r.a.createElement(p.b,{path:"/hotel/:id",component:I}),r.a.createElement(p.b,{path:"/contact-us",component:ae}),r.a.createElement(te,{path:"/my-hotels",component:re,isAuthorized:this.state.isAuthorized}),r.a.createElement(p.b,{path:"/favourite",component:le}),r.a.createElement(p.b,{path:"/",component:q}))))}}]),a}(r.a.Component),ie=Object(y.b)((function(e){return{hotels:e.hotels}}),(function(e){return{getHotels:function(t){return e(k())}}}))(oe),se=a(19),ue=a(32),me=a(20),pe={text:null,hotels:[],favourites:[],userHotels:[],recommendedHotels:[]},de=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SAVE_TEXT":return Object(me.a)({},e,{text:t.payload});case"GET_HOTELS_SUCCESS":return Object(me.a)({},e,{hotels:t.payload,recommendedHotels:t.loadRecommended});case"ADD_TO_FAVOURITES":return Object(me.a)({},e,{favourites:[].concat(Object(ue.a)(e.favourites),[t.payload])});case"REMOVE_FROM_FAVOURITES":return Object(me.a)({},e,{favourites:Object(ue.a)(e.favourites.filter((function(e){return e.id!==t.payload})))});case"GET_USER_HOTELS_SUCCESS":return Object(me.a)({},e,{userHotels:t.payload});default:return e}},he=a(52),fe=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||se.c,Ee=Object(se.a)(he.a),ve=Object(se.d)(de,fe(Ee));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y.a,{store:ve},r.a.createElement(ie,null))),document.getElementById("root"))}},[[53,1,2]]]);
//# sourceMappingURL=main.361177a7.chunk.js.map