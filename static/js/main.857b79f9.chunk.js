(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(e,t,a){e.exports=a(40)},36:function(e,t,a){},38:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(22),i=a.n(o),m=a(9),l=a(44),c=a(46),s=a(43),u=a(45),g=a(2),p=a(4),E=a(6),d=a(5),v=a(7),y=a(42),h=a(47),f=function(e){function t(){return Object(g.a)(this,t),Object(E.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.props.room,t=e.id,a=e.title,n=e.price,o=e.listImage,i=e.BooksDays,m="room/"+t,l=new Date;l.setDate(l.getDate()+i);var c=("0"+(l.getMonth()+1)).slice(-2);return 0===i?r.a.createElement("div",{className:"item"},r.a.createElement("img",{src:o,alt:"Room"}),r.a.createElement("p",{className:"room-name"},a),r.a.createElement("div",{className:"room-bonus"},r.a.createElement("img",{src:"img/Wifi.svg",alt:"Wi-Fi"}),"Wi-Fi"),r.a.createElement("div",{className:"room-bonus"},r.a.createElement("img",{src:"img/Food.svg",alt:"Food"}),"3x \u0440\u0430\u0437\u043e\u0432\u043e\u0435"),r.a.createElement("div",{className:"room-bonus"},r.a.createElement("img",{src:"img/Vine.svg",alt:"Mini-Bar"}),"\u041c\u0438\u043d\u0438\u0431\u0430\u0440"),r.a.createElement(y.a,{to:m},r.a.createElement("button",{id:"BookButton"},"\u0417\u0430\u0431\u0440\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u0442\u044c")),r.a.createElement("p",{className:"price"},n,"$ \u0437\u0430 \u043d\u043e\u0447\u044c")):r.a.createElement("div",{className:"item"},r.a.createElement("img",{src:o,alt:"Room"}),r.a.createElement("p",{className:"room-name"},a),r.a.createElement("div",{className:"book-text"},"\u0417\u0430\u043d\u044f\u0442\u043e \u0434\u043e ",l.getDate(),".",c,"  "))}}]),t}(n.Component),R=Object(h.a)(f),b=r.a.createContext(),O=b.Provider,k=b.Consumer,D=function(){return function(e){return function(t){return r.a.createElement(k,null,function(a){return r.a.createElement(e,Object.assign({},t,{hotelstoreService:a}))})}}},I=function(e){return{type:"ROOMS_LOADED",payload:e}},N=function(){return{type:"ROOMS_REQUESTED"}},j=function(e){return{type:"ROOMS_ERROR",payload:e}},B=function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return function(e){return t.reduceRight(function(e,t){return t(e)},e)}},C=function(){return r.a.createElement("div",null,"loading...")},A=function(){return r.a.createElement("div",null,"Error!")},S=function(e){function t(){return Object(g.a)(this,t),Object(E.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.hotelstoreService,a=e.roomsLoaded,n=e.roomsRequested,r=e.roomsError;0===e.rooms.length&&(n(),t.getRooms().then(function(e){return a(e)}).catch(function(e){return r(e)}))}},{key:"render",value:function(){var e=this.props,t=e.rooms,a=e.loading,n=e.error,o=e.descr,i=e.type,m=[];return m=t.filter(function(e){return e.type===i}),a?r.a.createElement(C,null):n?r.a.createElement(A,null):r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",{className:"rooms"},r.a.createElement("p",{className:"rooms-text"},o),r.a.createElement("div",{className:"items"},m.map(function(e){return r.a.createElement(R,{key:e.id,room:e})}))))}}]),t}(n.Component),w={roomsLoaded:I,roomsRequested:N,roomsError:j},M=B(D(),Object(m.b)(function(e){return{rooms:e.rooms,loading:e.loading,error:e.error}},w))(S),P=function(){return r.a.createElement("div",{className:"head"},r.a.createElement("div",{className:"main-text"},"\u041f\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u0443\u0439 ",r.a.createElement("br",null),"\u0441 \u043a\u043e\u043c\u0444\u043e\u0440\u0442\u043e\u043c"),r.a.createElement("div",{className:"logo"},r.a.createElement(y.a,{to:"/"},r.a.createElement("img",{src:"img/Logo.svg",alt:"Logo"}),r.a.createElement("br",null),r.a.createElement("p",null,"Chikibambony"))))},x=function(){return r.a.createElement("div",{className:"footer"},r.a.createElement("p",null,'\xa9 2019 \u0412\u0441\u0435 \u043f\u0440\u0430\u0432\u0430 \u0437\u0430\u0449\u0438\u0449\u0435\u043d\u044b, \u041e\u041e\u041e "Chikibambony"'))},T=function(e){function t(){return Object(g.a)(this,t),Object(E.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.props.AdminIn;return r.a.createElement("div",null,r.a.createElement(P,null),r.a.createElement(y.a,{to:"/admin"},r.a.createElement("button",{className:"CancelButton",onClick:function(){return e()}},"Admin")),r.a.createElement(M,{type:"lux",descr:"\u041d\u043e\u043c\u0435\u0440\u0430 \u043b\u044e\u043a\u0441 (5)"}),r.a.createElement(M,{type:"two",descr:"\u0414\u0432\u0443\u0445\u043c\u0435\u0441\u0442\u043d\u044b\u0435 \u043d\u043e\u043c\u0435\u0440\u0430 (5)"}),r.a.createElement(M,{type:"three",descr:"\u0422\u0440\u0435\u0445\u043c\u0435\u0441\u0442\u043d\u044b\u0435 \u043d\u043e\u043c\u0435\u0440\u0430 (5)"}),r.a.createElement(M,{type:"one",descr:"\u041e\u0434\u043d\u043e\u043c\u0435\u0441\u0442\u043d\u044b\u0435 \u043d\u043e\u043c\u0435\u0440\u0430 (5)"}),r.a.createElement(x,null))}}]),t}(n.Component),_={AdminIn:function(){return{type:"ENTER_SANDMAN"}}},F=Object(m.b)(function(){return{}},_)(T),L=(a(36),function(){return r.a.createElement("div",{className:"short-head"},r.a.createElement("div",{className:"logo"},r.a.createElement(y.a,{to:"/"},r.a.createElement("img",{src:"../img/Logo.svg",alt:"Logo"}),r.a.createElement("br",null),r.a.createElement("p",null,"Chikibambony"))))}),W=(a(38),function(e){function t(){var e,a;Object(g.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(E.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={SumPrice:0,DaysToBook:0},a}return Object(v.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.room.price;this.setState({StartPrice:e,Price:e,SumPrice:0})}},{key:"PriceChange",value:function(){var e="true"===document.getElementById("select1").value?100:0,t="true"===document.getElementById("select2").value?100:0,a="true"===document.getElementById("select3").value?100:0;this.setState({Price:this.state.StartPrice+e+t+a,SumPrice:this.state.StartPrice*this.state.DaysToBook+this.state.DaysToBook*e+this.state.DaysToBook*t+this.state.DaysToBook*a})}},{key:"AddDay",value:function(){this.setState({SumPrice:this.state.SumPrice+this.state.Price,DaysToBook:this.state.DaysToBook+1})}},{key:"RemoveDay",value:function(){this.state.DaysToBook>0&&this.setState({SumPrice:this.state.SumPrice-this.state.Price,DaysToBook:this.state.DaysToBook-1})}},{key:"render",value:function(){var e=this,t=this.props,a=t.itemId,n=t.roomBook,o=t.room,i=o.title,m=o.coverImage;return r.a.createElement("div",{className:"Room-Wrapper"},r.a.createElement(y.a,{to:"/"},r.a.createElement("div",{className:"BackButton"}," ",r.a.createElement("span",null,"<"),"\u041d\u0430\u0437\u0430\u0434")),r.a.createElement("div",{className:"Main-Info"},r.a.createElement("div",{className:"img"},r.a.createElement("img",{src:m,alt:"Room"}),r.a.createElement("div",{className:"Short-img"},r.a.createElement("div",{className:"Room-Img1"},r.a.createElement("img",{src:"../img/Room1-1.png",alt:"Room"})),r.a.createElement("div",null,r.a.createElement("div",{className:"Room-Img2"},r.a.createElement("img",{src:"../img/Room1-2.png",alt:"Room"})),r.a.createElement("div",{className:"Room-Img3"},r.a.createElement("img",{src:"../img/Room1-3.png",alt:"Room"}))))),r.a.createElement("div",{className:"Room-text"},r.a.createElement("h2",null,"\u041d\u043e\u043c\u0435\u0440 ",i),r.a.createElement("h3",null,"\u0414\u043e\u0441\u0442\u0443\u043f\u043d\u044b\u0435 \u0443\u0434\u043e\u0431\u0441\u0442\u0432\u0430"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("p",null,r.a.createElement("img",{src:"../img/Wifi.svg",alt:"Wi-Fi"}),"Wi-Fi"),r.a.createElement("select",{id:"select1",name:"wi-fi",size:"1",onChange:function(){return e.PriceChange()}},r.a.createElement("option",{value:"false"},"\u041e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442"),r.a.createElement("option",{value:"true"},"\u041f\u0440\u0438\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442"))),r.a.createElement("li",null,r.a.createElement("p",null,r.a.createElement("img",{src:"../img/Food.svg",alt:"Food"}),"\u041f\u0438\u0442\u0430\u043d\u0438\u0435"),r.a.createElement("select",{id:"select2",name:"wi-fi",size:"1",onChange:function(){return e.PriceChange()}},r.a.createElement("option",{value:"false"},"\u041e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442"),r.a.createElement("option",{value:"true"},"\u041f\u0440\u0438\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442"))),r.a.createElement("li",null,r.a.createElement("p",null,r.a.createElement("img",{src:"../img/Vine.svg",alt:"Mini-Bar"}),"\u041c\u0438\u043d\u0438\u0431\u0430\u0440"),r.a.createElement("select",{id:"select3",name:"wi-fi",size:"1",onChange:function(){return e.PriceChange()}},r.a.createElement("option",{value:"false"},"\u041e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442"),r.a.createElement("option",{value:"true"},"\u041f\u0440\u0438\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442")))),r.a.createElement("p",null,"\u0412 \u043d\u043e\u043c\u0435\u0440\u0430\u0445 \u0432\u0441\u0435 \u043f\u0440\u043e\u0434\u0443\u043c\u0430\u043d\u043e \u0434\u043e \u043c\u0435\u043b\u043e\u0447\u0435\u0439: \u0441\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u0430\u044f \u0442\u0435\u0445\u043d\u0438\u043a\u0430, \u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u044c, \u0443\u044e\u0442 \u0438 \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u044b\u0439 \u043a\u043e\u043c\u0444\u043e\u0440\u0442 \u043d\u0430\u043f\u043e\u043b\u043d\u044f\u0442 \u0412\u0430\u0448\u0435 \u043f\u0440\u0435\u0431\u044b\u0432\u0430\u043d\u0438\u0435 \u043f\u0440\u0438\u044f\u0442\u043d\u044b\u043c\u0438 \u043c\u043e\u043c\u0435\u043d\u0442\u0430\u043c\u0438. ",r.a.createElement("br",null),r.a.createElement("br",null),"\u0414\u043b\u044f \u043d\u0430\u0441 \u043e\u0447\u0435\u043d\u044c \u0432\u0430\u0436\u043d\u043e, \u0447\u0442\u043e\u0431\u044b \u0412\u0430\u0448 \u043e\u0442\u0434\u044b\u0445 \u0431\u044b\u043b \u043e\u0434\u043d\u0438\u043c \u0438\u0437 \u043f\u0440\u0438\u044f\u0442\u043d\u044b\u0445 \u0432\u043e\u0441\u043f\u043e\u043c\u0438\u043d\u0430\u043d\u0438\u0439 \u0412\u0430\u0448\u0435\u0439 \u0436\u0438\u0437\u043d\u0438.",r.a.createElement("br",null),"\u0411\u0440\u043e\u043d\u0438\u0440\u0443\u0439\u0442\u0435 \u043f\u0440\u044f\u043c\u043e \u0441\u0435\u0439\u0447\u0430\u0441!")),r.a.createElement("div",{className:"SelectionPanel"},r.a.createElement("h3",null,"\u041d\u0430 \u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0441\u0443\u0442\u043e\u043a \u0432\u044b \u0445\u043e\u0442\u0438\u0442\u0435 \u043e\u0441\u0442\u0430\u0442\u044c\u0441\u044f?"),r.a.createElement("div",{className:"flex"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("p",null,r.a.createElement("img",{src:"../img/Wifi.svg",alt:"Wi-Fi"}),"Wi-Fi")),r.a.createElement("li",null,r.a.createElement("p",null,r.a.createElement("img",{src:"../img/Food.svg",alt:"Food"}),"\u041f\u0438\u0442\u0430\u043d\u0438\u0435")),r.a.createElement("li",null,r.a.createElement("p",null,r.a.createElement("img",{src:"../img/Vine.svg",alt:"Mini-Bar"}),"\u041c\u0438\u043d\u0438\u0431\u0430\u0440"))),r.a.createElement("div",{className:"DaysChoice"},r.a.createElement("span",null,this.state.DaysToBook),r.a.createElement("img",{className:"test",src:"../img/ChoseArrow.svg",alt:"up",onClick:function(){return e.AddDay()}}),r.a.createElement("br",null),r.a.createElement("img",{src:"../img/ChoseArrow.svg",alt:"down",onClick:function(){return e.RemoveDay()}}),r.a.createElement("hr",null),r.a.createElement("p",null,r.a.createElement("b",null,this.state.Price)," \u0437\u0430 \u043d\u043e\u0447\u044c"))),r.a.createElement("hr",null),r.a.createElement("div",{className:"Sum-text"},r.a.createElement("p",{className:"Sum"},this.state.SumPrice,"  $"),r.a.createElement("p",null,"\u0421\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c \u043f\u0440\u043e\u0436\u0438\u0432\u0430\u043d\u0438\u044f")),r.a.createElement(y.a,{to:"/"},r.a.createElement("button",{onClick:function(){return n(a,e.state.DaysToBook)}},"\u0417\u0430\u0431\u0440\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u0442\u044c")))))}}]),t}(n.Component)),q={roomBook:function(e,t){return{type:"ROOM_BOOKED",payload:e,days:t}}},z=B(D(),Object(m.b)(function(e,t){return{error:e.error,room:e.rooms.find(function(e){return e.id===parseInt(t.itemId.itemId)})}},q))(W),V=function(e){return r.a.createElement("div",null,r.a.createElement(L,null),r.a.createElement(z,{itemId:e}))},J=function(e){function t(){return Object(g.a)(this,t),Object(E.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.props,t=e.room,a=e.roomCancel,n=t.id,o=t.title,i=t.listImage,m=t.BooksDays,l=new Date;l.setDate(l.getDate()+m);var c=("0"+(l.getMonth()+1)).slice(-2);return 0===m?r.a.createElement("div",{className:"item"},r.a.createElement("img",{src:i,alt:"Room"}),r.a.createElement("p",{className:"room-name"},o),r.a.createElement("div",{className:"free-text"},"\u0421\u0432\u043e\u0431\u043e\u0434\u043d\u043e")):r.a.createElement("div",{className:"item"},r.a.createElement("img",{src:i,alt:"Room"}),r.a.createElement("p",{className:"room-name"},o),r.a.createElement("div",{className:"book-text"},"\u0417\u0430\u043d\u044f\u0442\u043e \u0434\u043e ",l.getDate(),".",c,"  "),r.a.createElement("button",{id:"BookButton",onClick:function(){return a(n)}},"\u041e\u0442\u043c\u0435\u043d\u0438\u0442\u044c \u0431\u0440\u043e\u043d\u044c"))}}]),t}(n.Component),K={roomCancel:function(e){return{type:"ROOM_CANCEL",payload:e}}},Q=B(D(),Object(m.b)(function(){return{}},K))(Object(h.a)(J)),U=function(e){function t(){return Object(g.a)(this,t),Object(E.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.hotelstoreService,a=e.roomsLoaded,n=e.roomsRequested,r=e.roomsError;0===e.rooms.length&&(n(),t.getRooms().then(function(e){return a(e)}).catch(function(e){return r(e)}))}},{key:"render",value:function(){var e=this.props,t=e.rooms,a=e.loading,n=e.error,o=e.descr,i=e.type,m=[];return m=t.filter(function(e){return e.type===i}),a?r.a.createElement(C,null):n?r.a.createElement(A,null):r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",{className:"rooms"},r.a.createElement("p",{className:"rooms-text"},o),r.a.createElement("div",{className:"items"},m.map(function(e){return r.a.createElement(Q,{key:e.id,room:e})}))))}}]),t}(n.Component),X={roomsLoaded:I,roomsRequested:N,roomsError:j},$=B(D(),Object(m.b)(function(e){return{rooms:e.rooms,loading:e.loading,error:e.error}},X))(U),H=function(e){function t(){return Object(g.a)(this,t),Object(E.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.props,t=e.AdminOut,a=e.isAdmin;return console.log(a),a?r.a.createElement("div",null,r.a.createElement(P,null),r.a.createElement(y.a,{to:"/"},r.a.createElement("button",{className:"CancelButton",onClick:function(){return t()}},"\u0412\u044b\u0439\u0442\u0438")),r.a.createElement($,{type:"lux",descr:"\u041d\u043e\u043c\u0435\u0440\u0430 \u043b\u044e\u043a\u0441 (5)"}),r.a.createElement($,{type:"two",descr:"\u0414\u0432\u0443\u0445\u043c\u0435\u0441\u0442\u043d\u044b\u0435 \u043d\u043e\u043c\u0435\u0440\u0430 (5)"}),r.a.createElement($,{type:"three",descr:"\u0422\u0440\u0435\u0445\u043c\u0435\u0441\u0442\u043d\u044b\u0435 \u043d\u043e\u043c\u0435\u0440\u0430 (5)"}),r.a.createElement($,{type:"one",descr:"\u041e\u0434\u043d\u043e\u043c\u0435\u0441\u0442\u043d\u044b\u0435 \u043d\u043e\u043c\u0435\u0440\u0430 (5)"}),r.a.createElement(x,null)):r.a.createElement("p",null,"You should not see it ")}}]),t}(n.Component),Y={AdminOut:function(){return{type:"EXIT_SANDMAN"}}},G=Object(m.b)(function(e){return{isAdmin:e.isAdmin}},Y)(H),Z=function(){return r.a.createElement("main",{role:"main",className:"container"},r.a.createElement(c.a,null,r.a.createElement(s.a,{path:"/",component:F,exact:!0}),r.a.createElement(s.a,{path:"/room/:id",render:function(e){var t=e.match.params.id;return r.a.createElement(V,{itemId:t})}}),r.a.createElement(s.a,{path:"/admin",component:G,exact:!0}),r.a.createElement(u.a,{to:"/"})))},ee=function(e){function t(){var e,a;Object(g.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(E.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={hasError:!1},a}return Object(v.a)(t,e),Object(p.a)(t,[{key:"componentDidCatch",value:function(){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement(A,null):this.props.children}}]),t}(n.Component),te=function e(){Object(g.a)(this,e)};te.data=[{id:1,title:"Rosa tree1",price:111,listImage:"./img/Room1.png",coverImage:"../img/Room1.png",type:"lux",BooksDays:0},{id:2,title:"Rosa tree2",price:222,listImage:"./img/Room2.png",coverImage:"../img/Room2.png",type:"lux",BooksDays:20},{id:3,title:"Rosa tree3",price:333,listImage:"./img/Room3.png",coverImage:"../img/Room3.png",type:"lux",BooksDays:0},{id:4,title:"Rosa tree4",price:444,listImage:"./img/Room2.png",coverImage:"../img/Room2.png",type:"lux",BooksDays:4},{id:5,title:"Rosa tree5",price:555,listImage:"./img/Room1.png",coverImage:"../img/Room1.png",type:"lux",BooksDays:0},{id:6,title:"Rosa tree6",price:666,listImage:"./img/Room2.png",coverImage:"../img/Room2.png",type:"two",BooksDays:0},{id:7,title:"Rosa tree7",price:777,listImage:"./img/Room3.png",coverImage:"../img/Room3.png",type:"two",BooksDays:10},{id:8,title:"Rosa tree8",price:888,listImage:"./img/Room1.png",coverImage:"../img/Room1.png",type:"two",BooksDays:0},{id:9,title:"Rosa tree9",price:999,listImage:"./img/Room2.png",coverImage:"../img/Room2.png",type:"two",BooksDays:0},{id:10,title:"Rosa tree10",price:1e3,listImage:"./img/Room3.png",coverImage:"../img/Room3.png",type:"two",BooksDays:60},{id:11,title:"Rosa tree11",price:1111,listImage:"./img/Room1.png",coverImage:"../img/Room1.png",type:"three",BooksDays:0},{id:12,title:"Rosa tree12",price:1122,listImage:"./img/Room3.png",coverImage:"../img/Room3.png",type:"three",BooksDays:0},{id:13,title:"Rosa tree13",price:1133,listImage:"./img/Room3.png",coverImage:"../img/Room3.png",type:"three",BooksDays:2},{id:14,title:"Rosa tree14",price:1144,listImage:"./img/Room2.png",coverImage:"../img/Room2.png",type:"three",BooksDays:0},{id:15,title:"Rosa tree15",price:1155,listImage:"./img/Room1.png",coverImage:"../img/Room1.png",type:"three",BooksDays:0},{id:16,title:"Rosa tree16",price:1166,listImage:"./img/Room2.png",coverImage:"../img/Room2.png",type:"one",BooksDays:3},{id:17,title:"Rosa tree17",price:1177,listImage:"./img/Room1.png",coverImage:"../img/Room1.png",type:"one",BooksDays:0},{id:18,title:"Rosa tree18",price:1188,listImage:"./img/Room3.png",coverImage:"../img/Room3.png",type:"one",BooksDays:0},{id:19,title:"Rosa tree19",price:1199,listImage:"./img/Room2.png",coverImage:"../img/Room2.png",type:"one",BooksDays:3},{id:20,title:"Rosa tree20",price:1200,listImage:"./img/Room1.png",coverImage:"../img/Room1.png",type:"one",BooksDays:0}];var ae=a(14),ne=a(13),re={rooms:te.data,loading:!1,error:null,isAdmin:!1},oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:re,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ROOMS_REQUESTED":return{rooms:[],loading:!0,error:null,isAdmin:!1};case"ROOMS_LOADED":return{rooms:t.payload,loading:!1,error:null,isAdmin:!1};case"ROOMS_ERROR":return{rooms:[],loading:!1,error:t.payload,isAdmin:!1};case"ROOM_BOOKED":var a=t.payload,n=t.days,r=parseInt(a.itemId);return{loading:!1,error:null,rooms:e.rooms.map(function(e){return e.id===r?Object(ne.a)({},e,{BooksDays:n}):e}),isAdmin:e.isAdmin};case"ROOM_CANCEL":var o=t.payload;return{loading:!1,error:null,rooms:e.rooms.map(function(e){return e.id===o?Object(ne.a)({},e,{BooksDays:0}):e}),isAdmin:e.isAdmin};case"ENTER_SANDMAN":return Object(ne.a)({},e,{isAdmin:!0});case"EXIT_SANDMAN":return Object(ne.a)({},e,{isAdmin:!1});default:return e}},ie=Object(ae.b)(oe),me=new te;i.a.render(r.a.createElement(m.a,{store:ie},r.a.createElement(ee,null,r.a.createElement(O,{value:me},r.a.createElement(l.a,{basename:"/HotelTest"},r.a.createElement(Z,null))))),document.getElementById("root"))}},[[25,2,1]]]);
//# sourceMappingURL=main.857b79f9.chunk.js.map