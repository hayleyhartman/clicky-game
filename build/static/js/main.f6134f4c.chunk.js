(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,t,c){e.exports=c(37)},,,,,,function(e,t,c){},,function(e,t,c){},,function(e,t,c){var a={"./s1.jpg":19,"./s10.jpg":20,"./s11.jpg":21,"./s12.jpg":22,"./s2.jpg":23,"./s3.jpg":24,"./s4.jpg":25,"./s5.jpg":26,"./s6.jpg":27,"./s7.jpg":28,"./s8.jpg":29,"./s9.jpg":30};function i(e){var t=s(e);return c(t)}function s(e){var t=a[e];if(!(t+1)){var c=new Error("Cannot find module '"+e+"'");throw c.code="MODULE_NOT_FOUND",c}return t}i.keys=function(){return Object.keys(a)},i.resolve=s,e.exports=i,i.id=18},function(e,t,c){e.exports=c.p+"static/media/s1.ff01f8ee.jpg"},function(e,t,c){e.exports=c.p+"static/media/s10.d41c3571.jpg"},function(e,t,c){e.exports=c.p+"static/media/s11.6ec4ed3f.jpg"},function(e,t,c){e.exports=c.p+"static/media/s12.c1cf4031.jpg"},function(e,t,c){e.exports=c.p+"static/media/s2.34bb207d.jpg"},function(e,t,c){e.exports=c.p+"static/media/s3.fd38c490.jpg"},function(e,t,c){e.exports=c.p+"static/media/s4.65c84ed1.jpg"},function(e,t,c){e.exports=c.p+"static/media/s5.bf4a312d.jpg"},function(e,t,c){e.exports=c.p+"static/media/s6.cfca5357.jpg"},function(e,t,c){e.exports=c.p+"static/media/s7.650bc66b.jpg"},function(e,t,c){e.exports=c.p+"static/media/s8.fe4dc86a.jpg"},function(e,t,c){e.exports=c.p+"static/media/s9.ebb74506.jpg"},function(e,t,c){},,,,function(e,t,c){},,function(e,t,c){"use strict";c.r(t);var a=c(0),i=c.n(a),s=c(2),n=c.n(s),r=c(3),o=c(4),l=c(6),d=c(5),m=c(7),p=(c(14),function(e){return i.a.createElement("ul",{className:"nav justify-content-center"},i.a.createElement("li",{className:"nav-item"},i.a.createElement("p",{className:"nav-link title"},"Clicky Game")),i.a.createElement("li",{className:"nav-item"},i.a.createElement("p",{className:"nav-link"},e.correct)),i.a.createElement("li",{className:"nav-item "},i.a.createElement("p",{className:"nav-link score"},"Score:  ",e.score," | Top score: ",e.topScore)))}),g=(c(16),function(e){return i.a.createElement("div",{className:"card col-md-3",role:"group"},i.a.createElement("button",{type:"button",className:"btn"},i.a.createElement("img",{id:e.id,onClick:e.handleClick,className:"card-img-top",obj:e.obj,src:c(18)("./".concat(e.src)),index:e.index,alt:"a cat"})))}),u=(c(31),function(){return i.a.createElement("footer",null,"this is a footer")}),j=function(e){for(var t=e.length,c=t,a=c;0!==t;)a=Math.floor(Math.random()*t),c=e[t-=1],e[t]=e[a],e[a]=c;return e},f=(c(33),c(35),[{id:1,image:"s1.jpg",clicked:0},{id:2,image:"s2.jpg",clicked:0},{id:3,image:"s3.jpg",clicked:0},{id:4,image:"s4.jpg",clicked:0},{id:5,image:"s5.jpg",clicked:0},{id:6,image:"s6.jpg",clicked:0},{id:7,image:"s7.jpg",clicked:0},{id:8,image:"s8.jpg",clicked:0},{id:9,image:"s9.jpg",clicked:0},{id:10,image:"s10.jpg",clicked:0},{id:11,image:"s11.jpg",clicked:0},{id:12,image:"s12.jpg",clicked:0}]),k=[{id:1,image:"s1.jpg",clicked:0},{id:2,image:"s2.jpg",clicked:0},{id:3,image:"s3.jpg",clicked:0},{id:4,image:"s4.jpg",clicked:0},{id:5,image:"s5.jpg",clicked:0},{id:6,image:"s6.jpg",clicked:0},{id:7,image:"s7.jpg",clicked:0},{id:8,image:"s8.jpg",clicked:0},{id:9,image:"s9.jpg",clicked:0},{id:10,image:"s10.jpg",clicked:0},{id:11,image:"s11.jpg",clicked:0},{id:12,image:"s12.jpg",clicked:0}];(function(){for(var e=0;e<f.length;e++)f[e].clicked=0})();var v=function(e){function t(){var e,c;Object(r.a)(this,t);for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return(c=Object(l.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(i)))).state={images:k,score:0,topScore:0,correct:""},c.handleClick=function(e){var t=k.slice(0);j(t);var a=t.slice(0);c.setState({images:a}),console.log("id "+e.target.id);var i=e.target.id-=1;t[i].clicked?(c.setState({correct:"you already got that one!"}),c.restartGame()):(c.handleIncrement(),c.setState({correct:"good choice!"}),t[i].clicked=1)},c.restartGame=function(){j(k),c.setState({score:0})},c.handleIncrement=function(){c.state.score>=c.state.topScore?(c.setState({score:c.state.score+1}),c.setState({topScore:c.state.score+1})):c.setState({score:c.state.score+1})},c}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"wrapper"},i.a.createElement(p,{score:this.state.score,topScore:this.state.topScore,correct:this.state.correct}),i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"photoDiv"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-md-2"}),i.a.createElement("div",{className:"col-md-8"},i.a.createElement("div",{className:"row"},this.state.images.map(function(t){return i.a.createElement(g,{key:t.image,src:t.image,id:t.id,handleClick:e.handleClick}," ")})))),i.a.createElement("div",{className:"col-md-2"}))),i.a.createElement(u,null))}}]),t}(a.Component);n.a.render(i.a.createElement(v,null),document.getElementById("root"))}],[[8,2,1]]]);
//# sourceMappingURL=main.f6134f4c.chunk.js.map