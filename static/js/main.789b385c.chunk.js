(this.webpackJsonpsmartbrain=this.webpackJsonpsmartbrain||[]).push([[0],{219:function(e,t,n){},220:function(e,t,n){},221:function(e,t,n){},222:function(e,t,n){},224:function(e,t,n){"use strict";n.r(t);var i=n(8),s=n.n(i),a=n(11),o=n.n(a),r=(n(38),n(0)),c=n(1),l=n(5),u=n(4),h=(n(39),n(43),n(6)),d=function(e){var t=e.isSignedIn,n=e.children,i=e.routeChange;return!0===t?Object(h.jsxs)("nav",{children:[n,Object(h.jsx)("p",{onClick:function(){return i("signout")},style:{marginLeft:"auto"},className:"SignOut",children:"Sign Out"})]}):Object(h.jsxs)("nav",{className:"cjoin",children:[Object(h.jsx)("p",{onClick:function(){return i("signin")},className:"SignOut",children:"Sign In"}),Object(h.jsx)("p",{onClick:function(){return i("register")},className:"SignOut",children:"Register"})]})},m=n(32),j=(n(45),function(){return Object(h.jsx)(m.a,{className:"Tilt",children:Object(h.jsx)("h1",{className:"Logo center",children:"Logo"})})}),g=function(e){var t=e.userName,n=e.userEntries;return Object(h.jsxs)("div",{style:{marginTop:"5vh",color:"white",fontSize:"1.5em"},children:[Object(h.jsx)("div",{style:{padding:"1em"},children:"".concat(t,", your current Rank is:")}),Object(h.jsx)("div",{children:"#".concat(n)})]})},p=(n(46),n(219),function(e){var t=e.inputChange,n=e.buttonSubmit;return Object(h.jsxs)("div",{children:[Object(h.jsx)("p",{children:"This Magic Brain will detect faces in your pictures! Give it a try"}),Object(h.jsx)("div",{className:"center",children:Object(h.jsx)("div",{className:"inputBox center",children:Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)("input",{onChange:t,type:"text",placeholder:"Paste your link!"}),Object(h.jsx)("button",{onClick:n,children:"Detect!"})]})})})]})}),b=(n(220),function(e){var t=e.box,n=e.imageUrl;return Object(h.jsx)("div",{className:"center",style:{margin:"0",width:"100&"},children:Object(h.jsxs)("div",{style:{position:"absolute",paddingTop:"1em"},children:[Object(h.jsx)("img",{id:"clarifaiImage",style:{width:"500px",height:"auto"},alt:"",src:n}),Object(h.jsx)("div",{className:"FaceBox",style:{right:t.rightCol,top:t.topRow,left:t.leftCol,bottom:t.bottomRow}})]})})}),O=(n(221),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var i;return Object(r.a)(this,n),(i=t.call(this,e)).onEmailChange=function(e){i.setState({signinEmail:e.target.value})},i.onPasswordChange=function(e){i.setState({signinPassword:e.target.value})},i.onSigninButton=function(){fetch("https://arcane-wildwood-39956.herokuapp.com/signin",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:i.state.signinEmail,password:i.state.signinPassword})}).then((function(e){return e.json()})).then((function(e){e.id&&(i.props.loadUser(e),i.props.routeChange("home"))})).catch((function(e){return console.log("algo de errado nao est\xe1 certo no login",e)}))},i.state={signinEmail:"",signinPassword:""},i}return Object(c.a)(n,[{key:"render",value:function(){var e=this.props.routeChange;return Object(h.jsx)("div",{className:"baseForm",children:Object(h.jsxs)("div",{className:"subForm",children:[Object(h.jsx)("p",{className:"signInTitle",children:"Sign In"}),Object(h.jsx)("p",{className:"labelS",children:"Email"}),Object(h.jsx)("input",{onChange:this.onEmailChange,className:"inputForm",type:"email"}),Object(h.jsx)("p",{className:"labelS",children:"Password"}),Object(h.jsx)("input",{onChange:this.onPasswordChange,className:"inputForm",type:"password"}),Object(h.jsx)("input",{onClick:this.onSigninButton,className:"SignInSubmit",type:"submit",value:"Sign In"}),Object(h.jsx)("p",{onClick:function(){return e("register")},className:"registerLink",children:"Register"})]})})}}]),n}(s.a.Component)),f=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var i;return Object(r.a)(this,n),(i=t.call(this,e)).onRegisterName=function(e){i.setState({name:e.target.value})},i.onRegisterEmail=function(e){i.setState({email:e.target.value})},i.onRegisterPassword=function(e){i.setState({password:e.target.value})},i.onRegisterSubmit=function(){fetch("https://arcane-wildwood-39956.herokuapp.com/register",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:i.state.name,email:i.state.email,password:i.state.password})}).then((function(e){return e.json()})).then((function(e){e.id&&(i.props.loadUser(e),i.props.routeChange("home"))}))},i.state={name:"",email:"",password:""},i}return Object(c.a)(n,[{key:"render",value:function(){this.props.routeChange;return Object(h.jsx)("div",{className:"baseForm",children:Object(h.jsxs)("div",{className:"subForm",children:[Object(h.jsx)("p",{style:{marginTop:"30px"},className:"signInTitle",children:"Register"}),Object(h.jsx)("p",{className:"labelS",children:"Name"}),Object(h.jsx)("input",{onChange:this.onRegisterName,style:{marginBottom:"0px"},className:"inputForm",type:"text"}),Object(h.jsx)("p",{className:"labelS",children:"Email"}),Object(h.jsx)("input",{onChange:this.onRegisterEmail,style:{marginBottom:"0px"},className:"inputForm",type:"email"}),Object(h.jsx)("p",{className:"labelS",children:"Password"}),Object(h.jsx)("input",{onChange:this.onRegisterPassword,style:{marginBottom:"0px"},className:"inputForm",type:"password"}),Object(h.jsx)("input",{onClick:this.onRegisterSubmit,className:"SignInSubmit",type:"submit",value:"Register"})]})})}}]),n}(s.a.Component),x=(n(222),{input:"",imgUrl:"",box:{},route:"signin",isSignedIn:!1,user:{id:"",name:"",email:"",entries:"",joined:""}}),S=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(r.a)(this,n),(e=t.call(this)).onRouteChange=function(t){"signout"===t?e.setState(x):"home"===t&&e.setState({isSignedIn:!0}),e.setState({route:t})},e.onInputChange=function(t){e.setState({input:t.target.value})},e.calculateFaceLocation=function(e){var t=e.rawData.outputs[0].data.regions[0].region_info.bounding_box,n=document.getElementById("clarifaiImage"),i=Number(n.height),s=Number(n.width);return{leftCol:t.left_col*s,topRow:t.top_row*i,rightCol:s-t.right_col*s,bottomRow:i-t.bottom_row*i}},e.displayFaceLocation=function(t){e.setState({box:t})},e.onButtonSubmit=function(){e.setState({imgUrl:e.state.input}),fetch("https://arcane-wildwood-39956.herokuapp.com/imageurl",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({input:e.state.input})}).then((function(e){return e.json()})).then((function(t){t&&fetch("https://arcane-wildwood-39956.herokuapp.com/image",{method:"put",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:e.state.user.id})}).then((function(e){return e.json()})).then((function(t){return e.setState(Object.assign(e.state.user,{entries:t}))})).catch(console.log),e.displayFaceLocation(e.calculateFaceLocation(t))})).catch((function(e){return console.log("errrooooo lan",e)}))},e.loadUser=function(t){e.setState({user:{id:t.id,name:t.name,email:t.email,entries:t.entries,joined:t.joined}})},e.state=x,e}return Object(c.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(d,{isSignedIn:this.state.isSignedIn,routeChange:this.onRouteChange,children:Object(h.jsx)(j,{})}),"home"===this.state.route?Object(h.jsxs)("div",{children:[Object(h.jsx)(g,{userName:this.state.user.name,userEntries:this.state.user.entries}),Object(h.jsx)(p,{inputChange:this.onInputChange,buttonSubmit:this.onButtonSubmit}),Object(h.jsx)(b,{box:this.state.box,imageUrl:this.state.imgUrl})]}):"register"===this.state.route?Object(h.jsx)(f,{loadUser:this.loadUser,routeChange:this.onRouteChange}):Object(h.jsx)(O,{loadUser:this.loadUser,routeChange:this.onRouteChange})]})}}]),n}(i.Component),C=function(e){e&&e instanceof Function&&n.e(4).then(n.bind(null,226)).then((function(t){var n=t.getCLS,i=t.getFID,s=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),i(e),s(e),a(e),o(e)}))};o.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(S,{})}),document.getElementById("root")),C()},38:function(e,t,n){},43:function(e,t,n){},45:function(e,t,n){}},[[224,1,2]]]);
//# sourceMappingURL=main.789b385c.chunk.js.map