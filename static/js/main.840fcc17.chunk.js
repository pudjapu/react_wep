(this.webpackJsonphod_web=this.webpackJsonphod_web||[]).push([[0],{400:function(t,e,a){},427:function(t,e,a){},429:function(t,e,a){},431:function(t,e,a){},432:function(t,e,a){},433:function(t,e,a){},441:function(t,e){},442:function(t,e,a){},443:function(t,e,a){},444:function(t,e,a){},451:function(t,e,a){"use strict";a.r(e);var s=a(1),n=a.n(s),c=a(63),r=a.n(c),l=(a(427),a(37)),i=a(38),o=a(41),j=a(40),u=(a(400),a(7)),h=function(t){Object(o.a)(a,t);var e=Object(j.a)(a);function a(){return Object(l.a)(this,a),e.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return Object(u.jsx)("div",{children:"HOME"})}}]),a}(n.a.Component),p=a(456),x=a(418),b=(a(429),function(t){Object(o.a)(s,t);var e=Object(j.a)(s);function s(){var t;Object(l.a)(this,s);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={Equation:"x^4-13",XL:"1.5",XR:"2.0",ERROR:"0.000001",result:""},t.getEquation=function(e){t.setState({Equation:e.target.value})},t.getXL=function(e){t.setState({XL:e.target.value})},t.getXR=function(e){t.setState({XR:e.target.value})},t.getERR=function(e){t.setState({ERROR:e.target.value})},t.show_value=function(e){var s=a(106).Parser,n=1,c=[],r=t.state.Equation,l=t.state.XL;l=parseFloat(l);var i=t.state.XR;i=parseFloat(i);var o=t.state.ERROR;o=parseFloat(o);var j=(l+i)/2,h=0,p=1,x=s.parse(r),b=x.evaluate({x:j})*x.evaluate({x:i});for(b<0?l=j:i=j;p>o;)h=(l+i)/2,(b=x.evaluate({x:h})*x.evaluate({x:i}))<0?l=h:i=h,p=Math.abs((h-j)/h),j=h,c.push(Object(u.jsxs)("div",{className:"result",children:["Iteration ",n," : ",h]},n)),n+=1;t.setState({result:c})},t}return Object(i.a)(s,[{key:"render",value:function(){return Object(u.jsx)("div",{className:"allinbisetion",children:Object(u.jsxs)("div",{className:"in_box",children:[Object(u.jsx)("h2",{children:"Bisection Method"}),Object(u.jsxs)("div",{children:[Object(u.jsx)("span",{children:Object(u.jsx)(p.a,{placeholder:"x^4-13",onChange:this.getEquation,className:"Input"})}),Object(u.jsx)("span",{className:"Calculate_Button",children:Object(u.jsx)(x.a,{type:"primary",onClick:this.show_value,children:"Calculate"})})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("span",{className:"Text_Input_2",children:" XL : "}),Object(u.jsx)("span",{children:Object(u.jsx)(p.a,{placeholder:"1.5",onChange:this.getXL,className:"Input_2"})}),Object(u.jsx)("span",{className:"Text_Input_2",children:" XR : "}),Object(u.jsx)("span",{children:Object(u.jsx)(p.a,{placeholder:"2.0",onChange:this.getXR,className:"Input_2"})}),Object(u.jsx)("span",{className:"Text_Input_2",children:" ERROR : "}),Object(u.jsx)("span",{children:Object(u.jsx)(p.a,{placeholder:"0.000001",onChange:this.getERR,className:"Input_2"})})]}),this.state.result]})})}}]),s}(n.a.Component)),O=(a(431),function(t){Object(o.a)(s,t);var e=Object(j.a)(s);function s(){var t;Object(l.a)(this,s);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={Equation:"x*43-1",XL:"0.02",XR:"0.03",ERROR:"0.000001",result:""},t.getEquation=function(e){t.setState({Equation:e.target.value})},t.getXL=function(e){t.setState({XL:e.target.value})},t.getXR=function(e){t.setState({XR:e.target.value})},t.getERR=function(e){t.setState({ERROR:e.target.value})},t.show_value=function(e){var s,n=a(106).Parser,c=1,r=[],l=1,i=t.state.Equation,o=t.state.XL;o=parseFloat(o);var j=t.state.XR;j=parseFloat(j);var h=t.state.ERROR;h=parseFloat(h);var p=n.parse(i),x=(o*p.evaluate({x:j})-j*p.evaluate({x:o}))/(p.evaluate({x:j})-p.evaluate({x:o}));for(p.evaluate({x:x})>0?j=x:o=x;l>h;)s=(o*p.evaluate({x:j})-j*p.evaluate({x:o}))/(p.evaluate({x:j})-p.evaluate({x:o})),p.evaluate({x:s})*p.evaluate({x:j})?j=s:o=s,r.push(Object(u.jsxs)("div",{className:"result",children:["Iteration ",c," : ",s]},c)),l=Math.abs((s-x)/s),x=s,c++;t.setState({result:r})},t}return Object(i.a)(s,[{key:"render",value:function(){return Object(u.jsxs)("div",{className:"allincompro",children:[Object(u.jsx)("h2",{children:"False position"}),Object(u.jsxs)("div",{children:[Object(u.jsx)("span",{children:Object(u.jsx)(p.a,{placeholder:"x*43-1",onChange:this.getEquation,className:"Input"})}),Object(u.jsx)("span",{className:"Calculate_Button",children:Object(u.jsx)(x.a,{type:"primary",onClick:this.show_value,children:"Calculate"})})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("span",{className:"Text_Input_2",children:" XL : "}),Object(u.jsx)("span",{children:Object(u.jsx)(p.a,{placeholder:"0.02",onChange:this.getXL,className:"Input_2"})}),Object(u.jsx)("span",{className:"Text_Input_2",children:" XR : "}),Object(u.jsx)("span",{children:Object(u.jsx)(p.a,{placeholder:"0.03",onChange:this.getXR,className:"Input_2"})}),Object(u.jsx)("span",{className:"Text_Input_2",children:" ERROR : "}),Object(u.jsx)("span",{children:Object(u.jsx)(p.a,{placeholder:"0.000001",onChange:this.getERR,className:"Input_2"})})]}),this.state.result]})}}]),s}(n.a.Component)),d=function(t){Object(o.a)(a,t);var e=Object(j.a)(a);function a(){return Object(l.a)(this,a),e.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return Object(u.jsx)("div",{children:"test"})}}]),a}(n.a.Component),v=(a(432),function(t){Object(o.a)(s,t);var e=Object(j.a)(s);function s(){var t;Object(l.a)(this,s);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={Equation:"(-0.6*x)+0.8",X:"0",ERROR:"0.000001",result:""},t.getEquation=function(e){t.setState({Equation:e.target.value})},t.getX=function(e){t.setState({X:e.target.value})},t.show_value=function(e){var s=a(106).Parser,n=1,c=[],r=t.state.Equation,l=t.state.X;l=parseFloat(l);var i=t.state.ERROR;i=parseFloat(i);for(var o,j,h=s.parse(r),p=99999999;p>i&&(o=h.evaluate({x:l}),p!==(j=Math.abs((o-l)/o)));)c.push(Object(u.jsxs)("div",{className:"result",children:["Iteration ",n," : ",o]},n)),n++,p=j,l=o;0===c.length?t.setState({result:"Is Diverge"}):t.setState({result:c})},t}return Object(i.a)(s,[{key:"render",value:function(){return Object(u.jsxs)("div",{className:"allincompro",children:[Object(u.jsx)("h2",{children:"One-point iteration"}),Object(u.jsxs)("div",{children:[Object(u.jsx)("span",{children:Object(u.jsx)(p.a,{placeholder:"(-0.6*x)+0.8",onChange:this.getEquation,className:"Input"})}),Object(u.jsx)("span",{className:"Calculate_Button",children:Object(u.jsx)(x.a,{type:"primary",onClick:this.show_value,children:"Calculate"})})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("span",{className:"Text_Input_2",children:" X \u0e40\u0e23\u0e34\u0e48\u0e21\u0e15\u0e49\u0e19 : "}),Object(u.jsx)("span",{children:Object(u.jsx)(p.a,{placeholder:"0",onChange:this.getX,className:"Input_2"})}),Object(u.jsx)("span",{className:"Text_Input_2",children:" ERROR : "}),Object(u.jsx)("span",{children:Object(u.jsx)(p.a,{placeholder:"0.000001",onChange:this.getERR,className:"Input_2"})})]}),this.state.result]})}}]),s}(n.a.Component)),m=(a(433),a(402)),g=function(t){Object(o.a)(s,t);var e=Object(j.a)(s);function s(){var t;Object(l.a)(this,s);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={Equation:"x^2-7",X:"2",ERROR:"0.000001",result:""},t.getEquation=function(e){t.setState({Equation:e.target.value})},t.getX=function(e){t.setState({X:e.target.value})},t.show_value=function(e){var s=a(106).Parser,n=1,c=[],r=t.state.Equation,l=Object(m.v)(r,"x").toString(),i=t.state.X;i=parseFloat(i);var o=t.state.ERROR;o=parseFloat(o);for(var j=s.parse(r),h=s.parse(l),p=i-j.evaluate({x:i})/h.evaluate({x:i}),x=Math.abs((p-i)/i);x>o;)p=i-j.evaluate({x:i})/h.evaluate({x:i}),x=Math.abs((p-i)/i),i=p,c.push(Object(u.jsxs)("div",{className:"result",children:["Iteration ",n," : ",p]},n)),n++;t.setState({result:c})},t}return Object(i.a)(s,[{key:"render",value:function(){return Object(u.jsxs)("div",{className:"allincompro",children:[Object(u.jsx)("h2",{children:"Newton Raphson"}),Object(u.jsxs)("div",{children:[Object(u.jsx)("span",{children:Object(u.jsx)(p.a,{placeholder:"x^2-7",onChange:this.getEquation,className:"Input"})}),Object(u.jsx)("span",{className:"Calculate_Button",children:Object(u.jsx)(x.a,{type:"primary",onClick:this.show_value,children:"Calculate"})})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("span",{className:"Text_Input_2",children:" X \u0e40\u0e23\u0e34\u0e48\u0e21\u0e15\u0e49\u0e19 : "}),Object(u.jsx)("span",{children:Object(u.jsx)(p.a,{placeholder:"2",onChange:this.getX,className:"Input_2"})}),Object(u.jsx)("span",{className:"Text_Input_2",children:" ERROR : "}),Object(u.jsx)("span",{children:Object(u.jsx)(p.a,{placeholder:"0.000001",onChange:this.getERR,className:"Input_2"})})]}),this.state.result]})}}]),s}(n.a.Component),f=(a(442),function(t){Object(o.a)(s,t);var e=Object(j.a)(s);function s(){var t;Object(l.a)(this,s);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={Equation:"x^2-7",X_1:"2.0",X_2:"2.2",ERROR:"0.000001",result:""},t.getEquation=function(e){t.setState({Equation:e.target.value})},t.getX=function(e){t.setState({X_1:e.target.value})},t.getX_2=function(e){t.setState({X_2:e.target.value})},t.show_value=function(e){var s=a(106).Parser,n=1,c=[],r=t.state.Equation,l=t.state.X_1;l=parseFloat(l);var i=t.state.X_2;i=parseFloat(i);var o=t.state.ERROR;o=parseFloat(o);for(var j,h=s.parse(r),p=l-i,x=1;x>o;)j=(i=l+p)+-h.evaluate({x:i})*(l-i)/(h.evaluate({x:l})-h.evaluate({x:i})),x=Math.abs((j-l)/j),c.push(Object(u.jsxs)("div",{className:"result",children:["Iteration ",n," : ",j]},n)),l=j,n++;t.setState({result:c})},t}return Object(i.a)(s,[{key:"render",value:function(){return Object(u.jsxs)("div",{className:"allincompro",children:[Object(u.jsx)("h2",{children:"Secant"}),Object(u.jsxs)("div",{children:[Object(u.jsx)("span",{children:Object(u.jsx)(p.a,{placeholder:"x^2-7",onChange:this.getEquation,className:"Input"})}),Object(u.jsx)("span",{className:"Calculate_Button",children:Object(u.jsx)(x.a,{type:"primary",onClick:this.show_value,children:"Calculate"})})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("span",{className:"Text_Input_2",children:" X 1 : "}),Object(u.jsx)("span",{children:Object(u.jsx)(p.a,{placeholder:"2.0",onChange:this.getX,className:"Input_2"})}),Object(u.jsx)("span",{className:"Text_Input_2",children:" X 2 : "}),Object(u.jsx)("span",{children:Object(u.jsx)(p.a,{placeholder:"2.2",onChange:this.getX_2,className:"Input_2"})}),Object(u.jsx)("span",{className:"Text_Input_2",children:" ERROR : "}),Object(u.jsx)("span",{children:Object(u.jsx)(p.a,{placeholder:"0.000001",onChange:this.getERR,className:"Input_2"})})]}),this.state.result]})}}]),s}(n.a.Component)),R=(a(443),function(t){Object(o.a)(s,t);var e=Object(j.a)(s);function s(){var t;Object(l.a)(this,s);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={rows:2,columns:2,Matrix:[[],[]],Answer:[],X:[]},t.AddMatrix=function(e){t.setState({rows:t.state.rows+1,columns:t.state.columns+1});var a=t.state.Matrix;a.push([]),t.setState({Matrix:a})},t.DelMatrix=function(e){if(t.state.rows>2){t.setState({rows:t.state.rows-1,columns:t.state.columns-1});var a=t.state.Matrix;a.pop();for(var s=0;s<t.state.rows-1;s++)a[s].pop();t.setState({Matrix:a})}},t.MakeMatrix=function(e){var a=t.state.rows;a=parseInt(a);var s=t.state.columns;s=parseInt(s);var n,c,r=[];for(n=0;n<a;n++){for(c=0;c<s;c++)r.push(Object(u.jsx)("span",{className:"MyInput",children:Object(u.jsx)(p.a,{name:n.toString()+","+c.toString(),onChange:t.Getvalue,className:"Input_2",style:{margin:"5px"},value:t.state.Matrix[n][c]})}));r.push(Object(u.jsx)("div",{}))}return r},t.MakeAnswer=function(e){var a=t.state.rows;a=parseInt(a);var s,n=[];for(s=0;s<a;s++)n.push(Object(u.jsx)(p.a,{name:s.toString(),onChange:t.GetAnswer,className:"Input_2",style:{margin:"5px"},value:t.state.Answer[s]})),n.push(Object(u.jsx)("div",{}));return n},t.Getvalue=function(e){var a,s=t.state.Matrix;a=e.target.name.split(","),s[parseInt(a[0])][parseInt(a[1])]=e.target.value,t.setState({Matrix:s})},t.GetAnswer=function(e){var a=t.state.Answer;a[parseInt(e.target.name)]=e.target.value,t.setState({Answer:a}),t.setState({Answer:a})},t.Calculate=function(e){var s,n,c=a(404),r=t.state.Matrix,l=t.state.Answer,i=t.state.rows;for(i=parseInt(i),s=0;s<i;s++){for(n=0;n<i;n++)r[s][n]=parseInt(r[s][n]);l[s]=parseInt(l[s])}var o=[];for(s=0;s<i;s++)o[s]=r[s].slice();var j=[];for(j.push(c.det(r).toFixed(5)),s=0;s<i;s++){for(n=0;n<i;n++)o[n][s]=l[n];for(j.push(c.det(o).toFixed(5)),n=0;n<i;n++)o[n][s]=r[n][s]}var h=[];for(s=0;s<i;s++)h.push(j[s+1]/j[0]);for(s=0;s<i;s++)h[s]=Object(u.jsxs)("div",{children:["X",s+1," : ",h[s]]},s);t.setState({X:h})},t}return Object(i.a)(s,[{key:"render",value:function(){return Object(u.jsxs)("div",{className:"allincompro",children:[Object(u.jsx)("h2",{children:"Cramer's Rule"}),Object(u.jsxs)("div",{children:[Object(u.jsx)("button",{onClick:this.AddMatrix,children:"add row/column"}),Object(u.jsx)("button",{onClick:this.DelMatrix,children:"Del row/column"}),Object(u.jsx)("button",{onClick:this.Calculate,children:"Calculate"})]}),Object(u.jsxs)("div",{className:"MakeMatrix",children:[Object(u.jsx)("div",{children:this.MakeMatrix()}),Object(u.jsx)("div",{children:this.MakeAnswer()})]}),this.state.X]})}}]),s}(n.a.Component)),_=(a(444),function(t){Object(o.a)(s,t);var e=Object(j.a)(s);function s(){var t;Object(l.a)(this,s);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={rows:2,Matrix:[[],[]],X:0,Answer:""},t.AddMatrix=function(e){t.setState({rows:t.state.rows+1});var a=t.state.Matrix;a.push([]),t.setState({Matrix:a})},t.DelMatrix=function(e){if(t.state.rows>2){t.setState({rows:t.state.rows-1});var a=t.state.Matrix;a.pop(),t.setState({Matrix:a})}},t.MakeMatrix=function(e){var a=t.state.rows;a=parseInt(a);var s,n,c=[];for(s=0;s<a;s++){for(n=0;n<2;n++)c.push(Object(u.jsx)("span",{className:"MyInput",children:Object(u.jsx)(p.a,{name:s.toString()+","+n.toString(),onChange:t.Getvalue,className:"Input_2",style:{margin:"5px"},value:t.state.Matrix[s][n]})}));c.push(Object(u.jsx)("div",{}))}return c},t.Getvalue=function(e){var a,s=t.state.Matrix;a=e.target.name.split(","),s[parseFloat(a[0])][parseFloat(a[1])]=e.target.value,t.setState({Matrix:s})},t.GetX=function(e){var a=t.state.X;a=e.target.value,t.setState({X:a})},t.Calculate=function(e){var s=a(445),n=t.state.Matrix,c=t.state.rows;c=parseInt(c);var r,l,i=t.state.X;for(i=parseFloat(i),r=0;r<c;r++)n[r][0]=parseFloat(n[r][0]),n[r][1]=parseFloat(n[r][1]);l=s(n)(i),t.setState({Answer:"f(x) : "+l.toString()})},t}return Object(i.a)(s,[{key:"render",value:function(){return Object(u.jsxs)("div",{className:"allincompro",children:[Object(u.jsx)("h2",{children:"Polynomial"}),Object(u.jsxs)("div",{children:[Object(u.jsx)("button",{onClick:this.AddMatrix,children:"add Point"}),Object(u.jsx)("button",{onClick:this.DelMatrix,children:"Del Point"}),Object(u.jsx)("button",{onClick:this.Calculate,children:"Calculate"})]}),Object(u.jsxs)("div",{children:["X : ",Object(u.jsx)(p.a,{onChange:this.GetX,style:{margin:"5px",width:150},width:!0})]}),Object(u.jsx)("div",{children:this.MakeMatrix()}),this.state.Answer]})}}]),s}(n.a.Component)),C=a(458),N=a(459),I=a(460),w=a(461),X=a(462),y=a(455),S=a(457),E=a(43),M=a(68),k=y.a.Header,A=y.a.Sider,F=y.a.Content,q=function(t){Object(o.a)(a,t);var e=Object(j.a)(a);function a(){var t;Object(l.a)(this,a);for(var s=arguments.length,n=new Array(s),c=0;c<s;c++)n[c]=arguments[c];return(t=e.call.apply(e,[this].concat(n))).state={collapsed:!0,at_cack:Object(u.jsx)(h,{})},t.toggle=function(){t.setState({collapsed:!t.state.collapsed})},t}return Object(i.a)(a,[{key:"render",value:function(){return Object(u.jsx)(M.a,{children:Object(u.jsx)("div",{className:"App",children:Object(u.jsxs)(y.a,{children:[Object(u.jsxs)(A,{trigger:null,collapsible:!0,collapsed:this.state.collapsed,children:[Object(u.jsx)("div",{className:"logo"}),Object(u.jsxs)(S.a,{theme:"dark",mode:"inline",style:{minHeight:"100vh",marginTop:60,fontSize:"15px"},children:[Object(u.jsx)(S.a.Item,{icon:Object(u.jsx)(C.a,{}),children:Object(u.jsx)(M.b,{to:"/",children:"Home"})},"1"),Object(u.jsx)(S.a.Item,{icon:Object(u.jsx)(N.a,{}),children:Object(u.jsx)(M.b,{to:"/Bisection",children:"Bisection"})},"2"),Object(u.jsx)(S.a.Item,{icon:Object(u.jsx)(N.a,{}),children:Object(u.jsx)(M.b,{to:"/False_position",children:"False position"})},"3"),Object(u.jsx)(S.a.Item,{icon:Object(u.jsx)(N.a,{}),children:Object(u.jsx)(M.b,{to:"/OnePoint",children:"One-point iteration"})},"4"),Object(u.jsx)(S.a.Item,{icon:Object(u.jsx)(N.a,{}),children:Object(u.jsx)(M.b,{to:"/Newton",children:"Newton Raphson"})},"5"),Object(u.jsx)(S.a.Item,{icon:Object(u.jsx)(N.a,{}),children:Object(u.jsx)(M.b,{to:"/Secant",children:"Secant"})},"6"),Object(u.jsx)(S.a.Item,{icon:Object(u.jsx)(I.a,{}),children:Object(u.jsx)(M.b,{to:"/cramer_rule",children:"Cramer"})},"7"),Object(u.jsx)(S.a.Item,{icon:Object(u.jsx)(w.a,{}),children:Object(u.jsx)(M.b,{to:"/polynomial",children:"Polynomial"})},"8")]})]}),Object(u.jsxs)(y.a,{className:"site-layout",children:[Object(u.jsx)(k,{className:"site-layout-background",children:Object(u.jsx)("div",{style:{textAlign:"left",paddingLeft:0,marginLeft:-47,fontSize:"20px"},children:n.a.createElement((this.state.collapsed,X.a),{className:"trigger",onClick:this.toggle})})}),Object(u.jsxs)(F,{className:"site-layout-background",style:{margin:"24px 16px",padding:24,minHeight:280},children:[Object(u.jsx)(E.a,{exact:!0,path:"/",component:h}),Object(u.jsx)(E.a,{path:"/Bisection",component:b}),Object(u.jsx)(E.a,{path:"/False_position",component:O}),Object(u.jsx)(E.a,{path:"/OnePoint",component:v}),Object(u.jsx)(E.a,{path:"/Newton",component:g}),Object(u.jsx)(E.a,{path:"/Secant",component:f}),Object(u.jsx)(E.a,{path:"/cramer_rule",component:R}),Object(u.jsx)(E.a,{path:"/polynomial",component:_}),Object(u.jsx)(E.a,{path:"/test",component:d})]})]})]})})})}}]),a}(n.a.Component),L=function(t){Object(o.a)(a,t);var e=Object(j.a)(a);function a(){return Object(l.a)(this,a),e.apply(this,arguments)}return Object(i.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return Object(u.jsx)("div",{className:"App",children:Object(u.jsx)(q,{})})}}]),a}(n.a.Component),T=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,463)).then((function(e){var a=e.getCLS,s=e.getFID,n=e.getFCP,c=e.getLCP,r=e.getTTFB;a(t),s(t),n(t),c(t),r(t)}))};r.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(L,{})}),document.getElementById("root")),T()}},[[451,1,2]]]);
//# sourceMappingURL=main.840fcc17.chunk.js.map