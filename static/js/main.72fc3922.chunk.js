(this.webpackJsonphod_web=this.webpackJsonphod_web||[]).push([[0],{66:function(e,t,a){},89:function(e,t,a){},91:function(e,t,a){},99:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),s=a(22),i=a.n(s),l=(a(89),a(30)),r=a(31),j=a(34),o=a(33),u=(a(66),a(5)),h=function(e){Object(j.a)(a,e);var t=Object(o.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return Object(u.jsx)("div",{children:"HOME"})}}]),a}(c.a.Component),b=a(103),d=a(80),O=(a(91),function(e){Object(j.a)(n,e);var t=Object(o.a)(n);function n(){var e;Object(l.a)(this,n);for(var c=arguments.length,s=new Array(c),i=0;i<c;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={Equation:"x^4-13",XL:"1.5",XR:"2.0",ERROR:"0.000001",result:""},e.getEquation=function(t){e.setState({Equation:t.target.value})},e.getXL=function(t){e.setState({XL:t.target.value})},e.getXR=function(t){e.setState({XR:t.target.value})},e.getERR=function(t){e.setState({ERROR:t.target.value})},e.show_value=function(t){var n=a(92).Parser,c=1,s=[],i=e.state.Equation,l=e.state.XL;l=parseFloat(l);var r=e.state.XR;r=parseFloat(r);var j=e.state.ERROR;j=parseFloat(j);var o=(l+r)/2,h=0,b=1,d=n.parse(i),O=d.evaluate({x:o})*d.evaluate({x:r});for(O<0?l=o:r=o;b>j;)h=(l+r)/2,(O=d.evaluate({x:h})*d.evaluate({x:r}))<0?l=h:r=h,b=Math.abs((h-o)/h),o=h,s.push(Object(u.jsxs)("div",{className:"result",children:["Iteration ",c," : ",h]})),c+=1;e.setState({result:s})},e}return Object(r.a)(n,[{key:"render",value:function(){return Object(u.jsx)("div",{className:"allinbisetion",children:Object(u.jsxs)("div",{className:"in_box",children:[Object(u.jsx)("h2",{children:"Bisection Method"}),Object(u.jsxs)("div",{children:[Object(u.jsx)("span",{children:Object(u.jsx)(b.a,{placeholder:"x^4-13",onChange:this.getEquation,className:"Input"})}),Object(u.jsx)("span",{className:"Calculate_Button",children:Object(u.jsx)(d.a,{type:"primary",onClick:this.show_value,children:"Calculate"})})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("span",{className:"Text_Input_2",children:" XL : "}),Object(u.jsx)("span",{children:Object(u.jsx)(b.a,{placeholder:"1.5",onChange:this.getXL,className:"Input_2"})}),Object(u.jsx)("span",{className:"Text_Input_2",children:" XR : "}),Object(u.jsx)("span",{children:Object(u.jsx)(b.a,{placeholder:"2.0",onChange:this.getXR,className:"Input_2"})}),Object(u.jsx)("span",{className:"Text_Input_2",children:" ERROR : "}),Object(u.jsx)("span",{children:Object(u.jsx)(b.a,{placeholder:"0.000001",onChange:this.getERR,className:"Input_2"})})]}),this.state.result]})})}}]),n}(c.a.Component)),x=a(105),p=a(106),v=a(107),g=a(102),m=a(104),f=a(15),R=a(45),y=g.a.Header,N=g.a.Sider,C=g.a.Content,I=function(e){Object(j.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={collapsed:!0,at_cack:Object(u.jsx)(h,{})},e.toggle=function(){e.setState({collapsed:!e.state.collapsed})},e}return Object(r.a)(a,[{key:"render",value:function(){return Object(u.jsx)(R.a,{children:Object(u.jsx)("div",{className:"App",children:Object(u.jsxs)(g.a,{children:[Object(u.jsxs)(N,{trigger:null,collapsible:!0,collapsed:this.state.collapsed,children:[Object(u.jsx)("div",{className:"logo"}),Object(u.jsxs)(m.a,{theme:"dark",mode:"inline",style:{minHeight:"100vh",marginTop:60,fontSize:"15px"},children:[Object(u.jsx)(m.a.Item,{icon:Object(u.jsx)(x.a,{}),children:Object(u.jsx)(R.b,{to:"/",children:"Home"})},"1"),Object(u.jsx)(m.a.Item,{icon:Object(u.jsx)(p.a,{}),children:Object(u.jsx)(R.b,{to:"/Bisection",children:"Bisection"})},"2"),Object(u.jsx)(m.a.Item,{icon:Object(u.jsx)(p.a,{}),children:"nav 3"},"3"),Object(u.jsx)(m.a.Item,{icon:Object(u.jsx)(p.a,{}),children:"nav 4"},"4"),Object(u.jsx)(m.a.Item,{icon:Object(u.jsx)(p.a,{}),children:"nav 5"},"5"),Object(u.jsx)(m.a.Item,{icon:Object(u.jsx)(p.a,{}),children:"nav 6"},"6")]})]}),Object(u.jsxs)(g.a,{className:"site-layout",children:[Object(u.jsx)(y,{className:"site-layout-background",children:Object(u.jsx)("div",{style:{textAlign:"left",paddingLeft:0,marginLeft:-47,fontSize:"20px"},children:c.a.createElement((this.state.collapsed,v.a),{className:"trigger",onClick:this.toggle})})}),Object(u.jsxs)(C,{className:"site-layout-background",style:{margin:"24px 16px",padding:24,minHeight:280},children:[Object(u.jsx)(f.a,{exact:!0,path:"/",component:h}),Object(u.jsx)(f.a,{path:"/Bisection",component:O})]})]})]})})})}}]),a}(c.a.Component),_=function(e){Object(j.a)(a,e);var t=Object(o.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return Object(u.jsx)("div",{className:"App",children:Object(u.jsx)(I,{})})}}]),a}(c.a.Component),E=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,108)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;a(e),n(e),c(e),s(e),i(e)}))};i.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(_,{})}),document.getElementById("root")),E()}},[[99,1,2]]]);
//# sourceMappingURL=main.72fc3922.chunk.js.map