(this.webpackJsonpSmartBrain=this.webpackJsonpSmartBrain||[]).push([[0],{320:function(e,t,a){},321:function(e,t,a){},322:function(e,t,a){},323:function(e,t,a){},324:function(e,t,a){},325:function(e,t,a){},327:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),s=a(41),r=a.n(s),l=(a(86),a(80)),m=a(18),o=a(19),c=a(21),d=a(20),u=(a(87),a(79)),h=a.n(u),p=a(42),g=a.n(p),f=a(43),b=a.n(f),E=(a(320),function(){return i.a.createElement("div",null,window.matchMedia("only screen and (max-width: 760px)").matches?i.a.createElement("div",{className:"ml0 mt0 mr2 mb0",style:{touchAction:"none"}},i.a.createElement(g.a,{className:"TiltBackground br2 shadow-2",options:{max:55},style:{height:90,width:90}},i.a.createElement("div",{className:"Tilt-inner pa3",style:{touchAction:"none"}},i.a.createElement("img",{alt:"logo",src:b.a})))):i.a.createElement("div",{className:"mt2 ml2"},i.a.createElement(g.a,{className:"TiltBackground br2 shadow-2",options:{max:55},style:{height:115,width:115}},i.a.createElement("div",{className:"Tilt-inner pa3"},i.a.createElement("img",{alt:"logo",src:b.a})))))}),w=function(e){var t=e.onRouteChange,a=e.logoutEvent;return e.isSignedIn?i.a.createElement("div",{style:{padding:"30px"}},i.a.createElement("nav",{style:{display:"flex",justifyContent:"space-between"}},"  ",i.a.createElement("div",{className:"ma1 mt1"},i.a.createElement(E,null)),window.matchMedia("only screen and (max-width: 760px)").matches?i.a.createElement("div",null,i.a.createElement("p",{style:{paddingRight:"3%"},className:"f3 link dim black pointer",onClick:function(){return a(!1)}},"Signout")):i.a.createElement("div",{style:{display:"flex",justifyContent:"flex-end",marginRight:"3rem"}},i.a.createElement("p",{style:{display:"flex",position:"absolute",justifyContent:"flex-end"},className:"f3 link dim black pointer",onClick:function(){return a(!1)}},"Sign out")))):i.a.createElement("div",{style:{padding:"30px"}},i.a.createElement("nav",{style:{display:"flex",justifyContent:"space-between"}},"  ",i.a.createElement("div",{className:"ma1 mt1"},i.a.createElement(E,null)),window.matchMedia("only screen and (max-width: 760px)").matches?i.a.createElement("div",{style:{display:"flex",flexWrap:"wrap",marginRight:"7%"}},i.a.createElement("div",{style:{marginRight:"3.5rem",marginLeft:"2rem"}},i.a.createElement("p",{style:{position:"absolute"},className:"f3 link dim black pointer",onClick:function(){return t("signin")}},"SignIn")),i.a.createElement("div",{style:{marginRight:"3.5rem",marginLeft:"2rem"}},i.a.createElement("p",{style:{position:"absolute"},className:"f3 link dim black pointer",onClick:function(){return t("register")}},"Register"))):i.a.createElement("div",{style:{display:"flex",justifContent:"flex-end",marginRight:"6%"}},i.a.createElement("div",{style:{marginRight:"7.2rem"}},i.a.createElement("p",{style:{position:"absolute"},className:"f3 link dim black pointer",onClick:function(){return t("signin")}},"SignIn")),i.a.createElement("div",{style:{marginRight:"3rem"}},i.a.createElement("p",{style:{position:"absolute"},className:"f3 link dim black pointer",onClick:function(){return t("register")}},"Register")))))},v=(a(78),function(e){var t=e.NumberOfSigninFailed;return t>=10?window.matchMedia("only screen and (max-width: 760px)").matches?i.a.createElement("div",null,i.a.createElement("center",null,i.a.createElement("div",{className:"alert alert-warning alert-dismissible br3",style:{marginLeft:"1.5rem",marginRight:"1.5rem",opacity:"80%"}},i.a.createElement("strong",null,"Oops!")," You have crossed number of attempts... ",i.a.createElement("br",null),i.a.createElement("div",{style:{paddingTop:"5px"}},"Please come back later")))):i.a.createElement("div",null,i.a.createElement("center",null,i.a.createElement("div",{className:"alert alert-warning alert-dismissible br3 tc-l tc-m mh6",style:{marginRight:"30%",marginBottom:"2rem",marginLeft:"30%",opacity:"75%"}},i.a.createElement("strong",null,"Oops!")," You have crossed number of attempts... ",i.a.createElement("br",null),i.a.createElement("div",{style:{paddingTop:"5px"}},"Please come back later")))):t>0&&t<10?i.a.createElement("div",null,i.a.createElement("center",null,i.a.createElement("p",{style:{color:"red",marginTop:"0px"}},"Incorrect email or password"))):i.a.createElement("div",null)}),y=function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this)).onEmailChange=function(e){n.setState({signInEmail:e.target.value})},n.onPasswordChange=function(e){n.setState({signInPassword:e.target.value})},n.onSubmitSignIn=function(){fetch("https://shrouded-castle-17930.herokuapp.com/signin",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:n.state.signInEmail,password:n.state.signInPassword})}).then((function(e){return e.json()})).then((function(e){e.id?(n.props.loadUser(e),n.props.onRouteChange("home")):n.setState({NumberOfSigninFailed:n.state.NumberOfSigninFailed+1},(function(){}))}))},n.keyEnter=function(e){13!==e.keyCode&&13!==e.which&&"Enter"!==e.key||n.state.NumberOfSigninFailed<10&&fetch("https://shrouded-castle-17930.herokuapp.com/signin",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:n.state.signInEmail,password:n.state.signInPassword})}).then((function(e){return e.json()})).then((function(e){e.id?(n.props.loadUser(e),n.props.onRouteChange("home")):n.setState({NumberOfSigninFailed:n.state.NumberOfSigninFailed+1},(function(){}))}))},n.state={signInEmail:"",signInPassword:"",NumberOfSigninFailed:0},n}return Object(o.a)(a,[{key:"handleKeyPress",value:function(e){13!==e.keyCode&&13!==e.which&&"Enter"!==e.key||this.refs.password.focus()}},{key:"render",value:function(){var e=this;return i.a.createElement("div",null,this.state.NumberOfSigninFailed>=10?i.a.createElement("center",null,i.a.createElement(v,{NumberOfSigninFailed:this.state.NumberOfSigninFailed})):i.a.createElement("div",null),i.a.createElement("div",{style:{width:"auto",marginTop:"0.5px",marginRight:"1.5rem",marginLeft:"1.5rem",marginBottom:"1.5rem"},className:"center .mh4"},i.a.createElement("article",{className:"br4 ba b--black-10 w-100 w-50-m w-25-l mw6 shadow-5 center mh4"},i.a.createElement("main",{className:"pa4 black-80"},i.a.createElement("div",{className:"measure"},i.a.createElement("fieldset",{id:"sign_in",className:"ba b--transparent ph0 mh0"},i.a.createElement("legend",{className:"f1 fw6 ph0 mh0"},"Sign In"),i.a.createElement("div",{className:"mt3"},i.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address"},"Email"),i.a.createElement("input",{className:"br2 pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address",onChange:this.onEmailChange,onKeyPress:this.handleKeyPress.bind(this),ref:"email"})),i.a.createElement("div",{className:"mv3",style:{marginBottom:"0px"}},i.a.createElement("label",{className:"db fw6 lh-copy f6"},"Password"),i.a.createElement("input",{className:"b br2 pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password",onChange:this.onPasswordChange,onKeyPress:this.keyEnter,ref:"password"}))),this.state.NumberOfSigninFailed>0&&this.state.NumberOfSigninFailed<10?i.a.createElement(v,{NumberOfSigninFailed:this.state.NumberOfSigninFailed}):i.a.createElement("div",null),this.state.NumberOfSigninFailed<10?i.a.createElement("div",{className:""},i.a.createElement("input",{className:"b br2 ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Sign in",onClick:this.onSubmitSignIn})):i.a.createElement("div",{className:""},i.a.createElement("input",{className:"f2 br3 ph3 pv2 input-reset ba2 b--red bg-black pointer f6 dib",style:{color:"white",marginTop:"6px"},type:"submit",value:"Please try Later",disabled:!0,onClick:this.onSubmitSignIn})),i.a.createElement("div",{className:"lh-copy mt3"},i.a.createElement("p",{onClick:function(){return e.props.onRouteChange("register")},className:"f6 link dim black db pointer"},"Register")))))),i.a.createElement("br",null))}}]),a}(i.a.Component),x=(a(321),function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this)).onNameChange=function(e){var t=new RegExp(/[@$&!~:`%-+=/*^%[({<.>})\]|/\\#!?",_;'&]/i),a=new RegExp(/(?=.*\d)/i),i=new RegExp(/[a-zA-Z]/i);n.setState({name:e.target.value},(function(){this.state.name.length>2?t.test(this.state.name)||a.test(this.state.name)?this.setState({isValidName:!1}):i.test(this.state.name)?this.setState({isValidName:!0}):this.setState({isValidName:!1}):this.setState({isValidName:!1})}))},n.onEmailChange=function(e){var t=new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);n.setState({email:e.target.value},(function(){t.test(this.state.email)?this.setState({isValidEmail:!0}):this.setState({isValidEmail:!1})}))},n.onPasswordChange=function(e){var t=new RegExp(/[A-Z]/),a=new RegExp(/[a-z]/),i=new RegExp(/[0-9]/),s=new RegExp(/[@$&!~:`%-+=/*^%[({<.>})\]|/\\#!?",_;'&]/);n.setState({password:e.target.value},(function(){this.state.password.length>=6?this.setState({PasswordHasLength:!0}):this.setState({PasswordHasLength:!1}),i.test(this.state.password)?this.setState({PasswordHasNumber:!0}):this.setState({PasswordHasNumber:!1}),t.test(this.state.password)&&a.test(this.state.password)?this.setState({PasswordHasCase:!0}):this.setState({PasswordHasCase:!1}),s.test(this.state.password)?this.setState({PasswordHasSpecialChar:!0}):this.setState({PasswordHasSpecialChar:!1})}))},n.onSubmitRegister=function(){n.state.isValidName&&n.state.isValidEmail&&n.state.PasswordHasCase&&n.state.PasswordHasNumber&&n.state.PasswordHasLength&&n.state.PasswordHasSpecialChar?fetch("https://shrouded-castle-17930.herokuapp.com/register",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:n.state.name,email:n.state.email,password:n.state.password})}).then((function(e){return e.json()})).then((function(e){e.id&&(n.props.loadUser(e),n.props.onRouteChange("home"))})):n.setState({NumberOfSubmitFailed:n.state.NumberOfSubmitFailed+1},(function(){}))},n.keyEnter=function(e){13!==e.keyCode&&13!==e.which&&"Enter"!==e.key||(n.state.isValidName&&n.state.isValidEmail&&n.state.PasswordHasCase&&n.state.PasswordHasNumber&&n.state.PasswordHasLength&&n.state.PasswordHasSpecialChar?fetch("https://shrouded-castle-17930.herokuapp.com/register",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:n.state.name,email:n.state.email,password:n.state.password})}).then((function(e){return e.json()})).then((function(e){e.id&&(n.props.loadUser(e),n.props.onRouteChange("home"))})):n.setState({NumberOfSubmitFailed:n.state.NumberOfSubmitFailed+1},(function(){})))},n.state={name:"",email:"",password:"",isValidName:!1,isValidEmail:!1,PasswordHasCase:!1,PasswordHasNumber:!1,PasswordHasLength:!1,PasswordHasSpecialChar:!1,NumberOfSubmitFailed:0},n}return Object(o.a)(a,[{key:"handleKeyPress1",value:function(e){13!==e.keyCode&&13!==e.which&&"Enter"!==e.key||this.refs.email.focus()}},{key:"handleKeyPress2",value:function(e){13!==e.keyCode&&13!==e.which&&"Enter"!==e.key||this.refs.password.focus()}},{key:"render",value:function(){return i.a.createElement("div",{style:{width:"auto",marginTop:"0.5px",marginRight:"1rem",marginLeft:"1rem",marginBottom:"1.5rem"},className:"center .mh4"},i.a.createElement("article",{className:"br4 ba b--black-10 w-100 w-50-m w-25-l mw6 shadow-5 center mh4"},i.a.createElement("main",{className:"pa4 black-80"},i.a.createElement("div",{className:"measure"},i.a.createElement("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0"},i.a.createElement("legend",{className:"f1 fw6 ph0 mh0"},"Register"),i.a.createElement("div",{className:"mt3"},i.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"name"},"Name"),i.a.createElement("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"text",name:"name",id:"name",onChange:this.onNameChange,onKeyPress:this.handleKeyPress1.bind(this),ref:"name"}),this.state.NumberOfSubmitFailed>0?!0===this.state.isValidName?i.a.createElement("div",null," "):i.a.createElement("div",{style:{display:"flex",flexWrap:"nowrap",textAlign:"left",margin:"2px"}},i.a.createElement("div",{style:{marginRight:"0px"}},i.a.createElement("div",{className:"spinner container"})),i.a.createElement("div",{style:{paddingTop:"2px",textAlign:"left",color:"white"},className:"f5"},i.a.createElement("p",{style:{marginTop:"0px",marginBottom:"0px",textAlign:"left",marginLeft:"10px"}},"Please Enter a valid name"))):i.a.createElement("div",null)),i.a.createElement("div",{className:"mt3"},i.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address"},"Email"),i.a.createElement("input",{className:"pa2 br2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address",onKeyPress:this.handleKeyPress2.bind(this),onChange:this.onEmailChange,ref:"email"}),this.state.NumberOfSubmitFailed>0?!0===this.state.isValidEmail?i.a.createElement("div",null," "):i.a.createElement("div",{style:{display:"flex",flexWrap:"nowrap",textAlign:"left",margin:"2px"}},i.a.createElement("div",{style:{marginRight:"0px"}},i.a.createElement("div",{className:"spinner container"})),i.a.createElement("div",{style:{paddingTop:"2px",textAlign:"left",color:"white"},className:"f5"},i.a.createElement("p",{style:{marginTop:"0px",marginBottom:"0px",textAlign:"left",marginLeft:"10px"}},"Enter an email address of valid format"))):i.a.createElement("div",null)),i.a.createElement("div",{className:"mv3"},i.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"password"},"Password"),i.a.createElement("input",{className:"b br2 pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password",onChange:this.onPasswordChange,onKeyPress:this.keyEnter,ref:"password"}),this.state.NumberOfSubmitFailed>0?!0===this.state.PasswordHasLength?i.a.createElement("div",null," "):i.a.createElement("div",{style:{display:"flex",flexWrap:"nowrap",textAlign:"left",margin:"2px"}},i.a.createElement("div",{style:{marginRight:"0px"}},i.a.createElement("div",{className:"spinner container"})),i.a.createElement("div",{style:{paddingTop:"2px",textAlign:"left",color:"white"},className:"f5"},i.a.createElement("p",{style:{marginTop:"0px",marginBottom:"0px",textAlign:"left",marginLeft:"10px"}},"password length must be atleast 6"))):i.a.createElement("div",null),this.state.NumberOfSubmitFailed>0?!0===this.state.PasswordHasNumber?i.a.createElement("div",null," "):i.a.createElement("div",{style:{display:"flex",flexWrap:"nowrap",textAlign:"left",margin:"2px"}},i.a.createElement("div",{style:{marginRight:"0px"}},i.a.createElement("div",{className:"spinner container"})),i.a.createElement("div",{style:{paddingTop:"2px",textAlign:"left",color:"white"},className:"f5"},i.a.createElement("p",{style:{marginTop:"0px",marginBottom:"0px",textAlign:"left",marginLeft:"10px"}},"include any number (0-9)"))):i.a.createElement("div",null),this.state.NumberOfSubmitFailed>0?!0===this.state.PasswordHasCase?i.a.createElement("div",null," "):i.a.createElement("div",{style:{display:"flex",flexWrap:"nowrap",textAlign:"left",margin:"2px"}},i.a.createElement("div",{style:{marginRight:"0px"}},i.a.createElement("div",{className:"spinner container"})),i.a.createElement("div",{style:{paddingTop:"2px",textAlign:"left",color:"white"},className:"f5"},i.a.createElement("p",{style:{marginTop:"0px",marginBottom:"0px",textAlign:"left",marginLeft:"10px"}},"lower & upper Case"))):i.a.createElement("div",null),this.state.NumberOfSubmitFailed>0?!0===this.state.PasswordHasSpecialChar?i.a.createElement("div",null," "):i.a.createElement("div",{style:{display:"flex",flexWrap:"nowrap",textAlign:"left",margin:"2px"}},i.a.createElement("div",{style:{marginRight:"0px"}},i.a.createElement("div",{className:"spinner container"})),i.a.createElement("div",{style:{paddingTop:"2px",textAlign:"left",color:"white"},className:"f5"},i.a.createElement("p",{style:{marginTop:"0px",marginBottom:"0px",textAlign:"left",marginLeft:"10px"}},"atleast one special character (@,&,*,#,...)"))):i.a.createElement("div",null))),i.a.createElement("div",{className:""},i.a.createElement("input",{className:"b br2 ph3 pv2 input-reset ba b--black bg-transparent pointer f6 dib",type:"submit",value:"Register",onClick:this.onSubmitRegister}))))))}}]),a}(i.a.Component)),N=(a(322),function(e){var t=e.name,a=e.entries;return i.a.createElement("div",null,window.matchMedia("only screen and (max-width: 760px)").matches?i.a.createElement("div",{className:"ph2"},i.a.createElement("div",{className:"white f3"},"".concat(t,", your current entry count is ")," ",i.a.createElement("b",null,"".concat(a)))):i.a.createElement("div",null,i.a.createElement("div",{className:"white f3"},"".concat(t,", your current entry count is...")),i.a.createElement("div",{className:"white f1"},a)))}),C=function(e){var t=e.imageUrl;return""===t?window.matchMedia("only screen and (max-width: 760px)").matches?i.a.createElement("div",null,i.a.createElement("div",{className:"alert alert-success alert-dismissible br3",style:{margin:"2rem"}},"This Magic Brain will ",i.a.createElement("strong",null,"detect faces")," in your picture.")):i.a.createElement("div",null,i.a.createElement("div",{className:"alert alert-success alert-dismissible br3 tc-l tc-m mh6",style:{marginTop:"2rem",marginRight:"30%",marginBottom:"2rem",marginLeft:"30%"}},"This Magic Brain will ",i.a.createElement("strong",null,"detect faces")," in your picture.")):""!==t?window.matchMedia("only screen and (max-width: 760px)").matches?i.a.createElement("div",null,i.a.createElement("div",{className:"alert alert-info alert-dismissible br3",style:{marginLeft:"2rem",marginRight:"2rem",marginTop:"0.5rem",opacity:"80%"}},i.a.createElement("strong",null,"Invalid!")," Please Enter a valid image URL...")):i.a.createElement("div",null,i.a.createElement("div",{className:"alert alert-info alert-dismissible br3 tc-l tc-m mh6",style:{marginTop:"0.5rem",marginRight:"30%",marginBottom:"2rem",marginLeft:"30%",opacity:"75%"}},i.a.createElement("strong",null,"Invalid!")," Please Enter a valid image URL...")):i.a.createElement("div",null,i.a.createElement("h3",null," Something might have gone wrong... "),i.a.createElement("p",null," We will soon try to resolve this issue :) "))},S=(a(323),function(e){var t=e.keyEnter,a=e.onInputChange,n=e.onButtonSubmit;return window.matchMedia("only screen and (max-width: 760px)").matches?i.a.createElement("div",null,i.a.createElement("div",{className:"center"}," ",i.a.createElement("div",{style:{marginLeft:"5%",marginRight:"5%"},className:"formContainer center br3 shadow-5 glow:hover container"},"     ",i.a.createElement("input",{style:{width:"85%",marginTop:"30px",marginBottom:"20px",borderStyle:"none"},className:"f4 pv2 br3 center",type:"text",placeholder:" Paste the URL . . .",onKeyPress:t,onChange:a}),i.a.createElement("button",{style:{width:"60%",marginBottom:"25px"},className:"detectMobileButton f4 link ph3 pv2 glow:hover center",onClick:n},i.a.createElement("span",null,"Detect"))))):i.a.createElement("div",null,i.a.createElement("div",{className:"center"}," ",i.a.createElement("div",{className:"formContainer center pa4 br3 shadow-5 glow:hover customFont"},"     ",i.a.createElement("input",{className:"searchBarRoundness f4 pa2 w-70 center fontPlaceholder",type:"text",placeholder:"Paste your URL...",onKeyPress:t,onChange:a}),i.a.createElement("button",{className:"detectButton f4 w-30 link ph3 pv2 glow:hover",onClick:n},i.a.createElement("span",null,"Detect")))))}),R=(a(324),a(325),function(e){var t=e.imageUrl,a=e.box,n=e.disableCSS;return""===t?i.a.createElement("div",null):n?i.a.createElement("div",null,i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement(C,null)):window.matchMedia("only screen and (max-width: 760px)").matches?i.a.createElement("div",{style:{marginLeft:"25%",marginRight:"25%",marginTop:"27px",display:"flex",justifyContent:"center"}},i.a.createElement("div",{style:{margin:"10%",display:"flex"},className:"absolute mt2 gradient-border"},i.a.createElement("img",{id:"inputimage",alt:"",src:t,style:{borderRadius:"25px"}}),i.a.createElement("div",null,function(){var e=[];return a.forEach((function(t,n){e.push(i.a.createElement("div",{key:n},i.a.createElement("div",{className:"bounding-box",style:{top:a[n].topRow,right:a[n].rightCol,bottom:a[n].bottomRow,left:a[n].leftCol}})))})),e}()))):i.a.createElement("div",null,i.a.createElement("div",{style:{marginLeft:"10%",marginRight:"10%",marginTop:"15px",display:"flex",justifyContent:"center"}},i.a.createElement("div",{style:{margin:"3%"},className:"absolute mt2 gradient-border"},i.a.createElement("img",{id:"inputimage",alt:"",src:t,width:"500px",height:"auto",style:{borderRadius:"25px",display:"flex",alignItems:"center",justifyContent:"center",width:"600px",height:"auto"}}),i.a.createElement("div",null,function(){var e=[];return a.forEach((function(t,n){e.push(i.a.createElement("div",{key:n},i.a.createElement("div",{className:"bounding-box",style:{top:a[n].topRow,right:a[n].rightCol,bottom:a[n].bottomRow,left:a[n].leftCol}})))})),e}())," ")))}),k={particles:{number:{value:100,density:{enable:!0,value_area:690},shadow:{enable:!0,color:"#0b0ed4",blur:5}}}},O={input:"",imageUrl:"",box:[],route:"signin",isSignedIn:!1,disableCSS:!0,user:{id:"",name:"",email:"",entries:0,joined:""}},A=function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(m.a)(this,a),(e=t.call(this)).loadUser=function(t){e.setState({user:{id:t.id,name:t.name,email:t.email,entries:t.entries,joined:t.joined}})},e.logoutEvent=function(t){!1===t&&e.setState(O)},e.onRouteChange=function(t){"signout"===t?e.setState(O):"home"===t&&e.setState({isSignedIn:!0}),e.setState({route:t})},e.onInputChange=function(t){e.setState({input:t.target.value})},e.keyEnter=function(t){13!==t.keyCode&&13!==t.which&&"Enter"!==t.key||e.onButtonSubmit()},e.onButtonSubmit=function(){e.setState({disableCSS:!1}),e.setState({imageUrl:e.state.input}),e.setState({box:[]}),fetch("https://shrouded-castle-17930.herokuapp.com/imageurl",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({input:e.state.input})}).then((function(e){return e.json()})).then((function(t){("Ok"===t.status.description||!0===t.status.description||t.status.description)&&(e.calculateFaceLocation(t),fetch("https://shrouded-castle-17930.herokuapp.com/image",{method:"put",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:e.state.user.id})}).then((function(e){return e.json()})).then((function(t){e.setState(Object.assign(e.state.user,{entries:t}))})))})).catch((function(t){return e.setState({disableCSS:!0})}))},e.calculateFaceLocation=function(t){for(var a=function(a){var n=t.outputs[0].data.regions[a].region_info.bounding_box,i=document.getElementById("inputimage"),s=Number(i.width),r=Number(i.height),m=n.left_col*s,o=n.top_row*r,c=s-n.right_col*s,d=r-n.bottom_row*r;e.setState((function(e){return{box:[].concat(Object(l.a)(e.box),[{leftCol:m,topRow:o,rightCol:c,bottomRow:d}])}}))},n=0;n<t.outputs[0].data.regions.length;n++)a(n)},e.state=O,e}return Object(o.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(h.a,{className:"particles",params:k,style:{width:"100%"}}),i.a.createElement(w,{onRouteChange:this.onRouteChange,logoutEvent:this.logoutEvent,isSignedIn:this.state.isSignedIn}),"               ","home"===this.state.route?i.a.createElement("div",null,i.a.createElement(N,{name:this.state.user.name,entries:this.state.user.entries}),""===this.state.imageUrl?i.a.createElement(C,{imageUrl:this.state.imageUrl}):i.a.createElement("div",{style:{padding:"1rem"}}),i.a.createElement(S,{onInputChange:this.onInputChange,onButtonSubmit:this.onButtonSubmit,keyEnter:this.keyEnter}),i.a.createElement(R,{box:this.state.box,imageUrl:this.state.imageUrl,disableCSS:this.state.disableCSS})):"signin"===this.state.route?i.a.createElement(y,{loadUser:this.loadUser,onRouteChange:this.onRouteChange}):i.a.createElement(x,{loadUser:this.loadUser,onRouteChange:this.onRouteChange}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(326);r.a.render(i.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},43:function(e,t){e.exports="data:image/png;base64,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"},78:function(e,t,a){},81:function(e,t,a){e.exports=a(327)},86:function(e,t,a){},87:function(e,t,a){}},[[81,1,2]]]);
//# sourceMappingURL=main.f5eb12c9.chunk.js.map