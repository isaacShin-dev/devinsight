import{_ as pe,u as me,a as fe,r as a,c as A,w as _e,b as d,o as n,d as C,e as l,f as t,g as c,h as s,i as xe,j as M,v as Q,k as v,t as B,l as u,m as ke,p as we,n as he,q as S}from"./index-C3l34fzx.js";const k=I=>(we("data-v-08f06c49"),I=I(),he(),I),be={class:"inner-wrapper mt-16"},ye=k(()=>c("p",{class:"flex-item text-h4 font-weight-bold mb-4"},"로그인",-1)),ge={class:"text-subtitle-2"},Ce={class:"font-weight-bold"},Ve=k(()=>c("br",null,null,-1)),$e={key:0,class:"text-red-darken-3 mt-1 text-subtitle-2 text-disabled"},Se={class:"font-weight-bold text-high-emphasis"},Ie=k(()=>c("span",{class:"px-5"},[c("span",{class:"py-auto text-subtitle-2"},"이메일로 계속하기")],-1)),Ee=k(()=>c("span",{class:"px-5"},[c("span",{class:"py-auto text-subtitle-2"},"이메일로 계속하기")],-1)),Pe=k(()=>c("span",{class:"px-5"},[c("span",{class:"py-auto text-subtitle-2"},"신규 계정 생성")],-1)),De={key:0,class:"text-center pt-1 text-subtitle-2 text-red-darken-3"},ze={key:0,class:"text-center pt-0 text-subtitle-2 text-blue-lighten-4 mb-2"},Ae=k(()=>c("span",{class:""},"비밀번호 찾기",-1)),Be=k(()=>c("p",null,"수신함 또는 스팸함을 확인해주세요.",-1)),Fe={key:1,class:"text-center pt-0 text-subtitle-2 text-red-darken-3"},Ue={class:"text-center my-3"},Ke={key:0,class:"text-red-darken-3 mt-1 text-subtitle-2 text-disabled"},Te={class:"font-weight-bold text-high-emphasis"},Ne={class:"grey--text text--darken-2 w-75 text-center mt-6 text-caption"},Ze=k(()=>c("span",{class:""},"동의한 것을 의미합니다.",-1)),Oe={__name:"loginView",setup(I){const G=me(),X=fe(),f=a(""),F=a(""),_=a(!1),Y=a("Continue with E-mail"),U=a(!0),w=a(!1),p=a(!1),V=a(120),E=a(!1),L=a(""),P=a(""),D=a(!0),ee=a(!1),h=a(!1),te=a(!1),b=a(""),K=a(!0),y=a(!1),T=a(!1),N=a(!1),Z=a(""),O=a("");a("");const z=a(""),j=a("");function q(o){return/^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(o)}const R=()=>{if(_.value=!0,f.value===""||!q(f.value)){_.value=!1,U.value=!1;return}S({method:"GET",url:`https://www.kickin.co.kr/members/emailcheck/?email=${f.value}`}).then(o=>{if(o.data.status_code==="400"){h.value=!0,_.value=!1;return}else if(o.status===200){const e=new FormData;e.append("email",f.value),S({method:"POST",data:e,url:"https://www.kickin.co.kr/members/send-confirmation/"}).then(m=>{console.log(m.data),_.value=!1,Y.value="Create new account",w.value=!0,L.value=m.data.key,localStorage.setItem("email",f.value)}).catch(m=>{console.log("err; ",m),_.value=!1})}}).catch(o=>{console.log("err; ",o)})},le=()=>{const o=new FormData;o.append("email",f.value),o.append("password",F.value),S({method:"POST",data:o,url:"https://www.kickin.co.kr/members/api/token/"}).then(e=>{X.setSession(e.data),_.value=!1,G.route_to("/class/classInfo")}).catch(e=>{console.log("err; ",e),E.value=!0,_.value=!1})},ae=o=>{if(P.value===""){D.value=!1;return}else if(P.value===L.value)G.route_to("/kr/account/register");else{D.value=!1;return}},se=()=>{if(y.value=!0,p.value=!0,b.value===""||!q(b.value)){y.value=!1,K.value=!1,p.value=!1;return}S({method:"GET",url:`https://www.kickin.co.kr/user/emailcheck/?email=${b.value}`}).then(o=>{if(console.log("res: ",o),o.status===226){const e=new FormData;e.append("email",b.value),S({method:"POST",url:"https://www.kickin.co.kr/user/custom-password-reset/",data:e}).then(m=>{y.value=!1,N.value=!0,Z.value=m.data.key}).catch(m=>{console.log("err; ",m),y.value=!1});return}else if(o.status===200){y.value=!1,T.value=!0,p.value=!1;return}}).catch(o=>{console.log("err; ",o)})},oe=A(()=>Z.value!==""&&O.value===Z.value),ne=A(()=>z.value===j.value),ue=A(()=>z.value!==""||j.value!==""?/^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+|~=\-{}\[\]:\";'<>?,.\/]).{8,16}$/.test(z.value):!0);return A(()=>z.value!==""&&j.value!==""&&ne.value&&ue.value),_e(()=>p.value,o=>{if(o){const e=setInterval(()=>{V.value-=1,V.value===0&&(clearInterval(e),p.value=!1,V.value=120)},1e3)}}),(o,e)=>{const m=d("v-img"),ce=d("v-divider"),r=d("v-col"),$=d("v-text-field"),W=d("v-spacer"),x=d("v-btn"),H=d("v-row"),ie=d("v-alert"),re=d("v-card-title"),J=d("v-card-text"),de=d("v-card"),ve=d("v-dialog");return n(),C("div",be,[l(m,{src:"/logo.png",class:"app-logo-img flex-item"}),ye,l(ce,{style:{width:"20rem"},class:"my-6"}),l(H,{style:{width:"320px"}},{default:t(()=>[l(r,{cols:"12",class:"text-subtitle-2 pl-1 pb-0"},{default:t(()=>[s("이메일")]),_:1}),l($,{density:"compact",placeholder:"이메일을 입력해주세요.","hide-details":"true",modelValue:f.value,"onUpdate:modelValue":e[0]||(e[0]=i=>f.value=i),class:"mt-1",clearable:!0,"clear-icon":"mdi-close-circle-outline",onInput:e[1]||(e[1]=i=>U.value=!0),variant:"solo",type:"email",onKeyup:xe(R,["enter"]),autofocus:!0,disabled:w.value},null,8,["modelValue","disabled"]),M(l(r,{cols:"12",class:"text-subtitle-2 text-green-darken-3 text-center py-0"},{default:t(()=>[s("이미 존재하는 이메일입니다.")]),_:1},512),[[Q,h.value]]),w.value?(n(),v(r,{key:0,cols:"12"},{default:t(()=>[l(ie,{type:"success",dense:"",dismissible:"",variant:"outlined",class:"mb-0"},{default:t(()=>[c("span",ge,[s("이메일이 전송되었습니다. "),c("span",Ce,B(f.value),1),s(". "),Ve,s(" 수신함 또는 스팸함을 확인해주세요. ")]),l(H,{justify:"center","align-content":"center",class:"mt-1"},{default:t(()=>[l(W),l(r,{cols:"8"},{default:t(()=>[l(x,{size:"x-small",color:"#1B5E20",width:100,disabled:p.value,onClick:e[2]||(e[2]=i=>{p.value=!0})},{default:t(()=>[s("재전송")]),_:1},8,["disabled"])]),_:1}),l(W)]),_:1}),p.value?(n(),C("p",$e,[s("잠시후 재전송이 가능합니다. "),c("span",Se,B(V.value),1)])):u("",!0)]),_:1})]),_:1})):u("",!0),w.value?(n(),v(r,{key:1,cols:"12",class:"text-subtitle-2 pl-1 py-0"},{default:t(()=>[s("인증코드")]),_:1})):u("",!0),w.value?(n(),v($,{key:2,density:"compact",placeholder:"인증코드를 입력해주세요","hide-details":"true",modelValue:P.value,"onUpdate:modelValue":e[3]||(e[3]=i=>P.value=i),clearable:!0,"clear-icon":"mdi-close-circle-outline",variant:"solo",class:"mt-1",onInput:e[4]||(e[4]=i=>D.value=!0)},null,8,["modelValue"])):u("",!0),w.value?u("",!0):(n(),v(r,{key:3,cols:"12",class:"pb-0"},{default:t(()=>[h.value?u("",!0):(n(),v(x,{key:0,class:"mt-1 btn-flex mb-2",color:"#40557C",loading:_.value,onClick:R},{default:t(()=>[Ie]),_:1},8,["loading"]))]),_:1})),h.value?(n(),v(r,{key:4,cols:"12",class:"text-subtitle-2 pl-1 py-0"},{default:t(()=>[s("이메일로 계속하기")]),_:1})):u("",!0),M(l($,{density:"compact",placeholder:"비밀번호를 입력해주세요","hide-details":"true",modelValue:F.value,"onUpdate:modelValue":e[5]||(e[5]=i=>F.value=i),type:"password",id:"pwd",autofocus:h.value,onInput:e[6]||(e[6]=i=>E.value=!1),onFocus:e[7]||(e[7]=i=>E.value=!1),clearable:!0,"clear-icon":"mdi-close-circle-outline",variant:"solo",class:"mt-1"},null,8,["modelValue","autofocus"]),[[Q,h.value]]),E.value?(n(),v(r,{key:5,cols:"12",class:"text-center pt-1 text-subtitle-2 text-red-darken-3"},{default:t(()=>[s("비밀번호가 일치하지 않습니다.")]),_:1})):u("",!0),h.value?(n(),v(r,{key:6},{default:t(()=>[l(x,{class:"mt-1 btn-flex mb-2",color:"#40557C",loading:_.value,onClick:le},{default:t(()=>[Ee]),_:1},8,["loading"])]),_:1})):u("",!0),w.value?(n(),v(r,{key:7,cols:"12",class:"pb-0"},{default:t(()=>[l(x,{class:"mt-1 btn-flex mb-2",color:"#40557C",loading:ee.value,onClick:ae},{default:t(()=>[Pe]),_:1},8,["loading"])]),_:1})):u("",!0),U.value?u("",!0):(n(),v(r,{key:8,cols:"12",class:"text-center pt-0 text-subtitle-2 text-red-darken-3"},{default:t(()=>[s(" Please enter a valid email address. ")]),_:1})),D.value?u("",!0):(n(),v(r,{key:9,cols:"12",class:"text-center pt-0 text-subtitle-2 text-red-darken-3"},{default:t(()=>[s(" Please enter a valid code. ")]),_:1})),l(r,{cols:"12",class:"text-center pt-0"},{default:t(()=>[l(ve,{width:"500"},{activator:t(({props:i})=>[l(x,ke({variant:"plain"},i,{onClick:e[8]||(e[8]=g=>te.value=!0),ripple:!1,class:"text-subtitle-2 grey--text text--darken-2"}),{default:t(()=>[s("비밀번호 찾기")]),_:2},1040)]),default:t(({isActive:i})=>[oe.value?u("",!0):(n(),v(de,{key:0,elevation:"14",density:"compact"},{default:t(()=>[l(re,{class:"text-body-2"},{default:t(()=>[s("비밀번호 찾기")]),_:1}),l(J,null,{default:t(()=>[l($,{density:"compact",placeholder:"이메일을 입력해주세요","hide-details":"true",class:"mt-1",modelValue:b.value,"onUpdate:modelValue":e[9]||(e[9]=g=>b.value=g),clearable:!0,"clear-icon":"mdi-close-circle-outline",onInput:e[10]||(e[10]=g=>{K.value=!0,T.value=!1}),variant:"solo",type:"email",disabled:N.value},null,8,["modelValue","disabled"]),T.value?(n(),C("p",De,"Email dose not exist.")):u("",!0)]),_:1}),N.value?(n(),C("div",ze,[Ae,s(" 이메일이 전송되었습니다. "+B(b.value)+" ",1),Be,l(J,null,{default:t(()=>[l($,{density:"compact",placeholder:"인증코드를 입력해주세요","hide-details":"true",modelValue:O.value,"onUpdate:modelValue":e[11]||(e[11]=g=>O.value=g),clearable:!0,"clear-icon":"mdi-close-circle-outline",variant:"solo",class:"mt-1"},null,8,["modelValue"])]),_:1})])):u("",!0),K.value?u("",!0):(n(),C("p",Fe," Please enter a valid email address. ")),c("div",Ue,[l(x,{color:"#DB5D5C",size:"small",class:"mx-1",onClick:g=>i.value=!1,variant:"elevated"},{default:t(()=>[s("취소")]),_:2},1032,["onClick"]),l(x,{color:"#40557C",size:"small",class:"mx-1",variant:"elevated",onClick:se,disabled:p.value,loading:y.value},{default:t(()=>[s("코드 전송")]),_:1},8,["disabled","loading"]),p.value?(n(),C("p",Ke,[s("재전송 "),c("span",Te,B(V.value),1)])):u("",!0)])]),_:2},1024))]),_:1})]),_:1})]),_:1}),c("div",Ne,[s(" 회원 가입 진행시 당사의 "),l(x,{variant:"plain",href:"#",ripple:!1,size:"x-small",class:"text-subtitle-2 px-0"},{default:t(()=>[s(" 이용약관 ")]),_:1}),s(" 과 "),l(x,{href:"#",variant:"plain",ripple:!1,size:"x-small",class:"text-subtitle-2 px-0"},{default:t(()=>[s(" 개인정보 처리방침 ")]),_:1}),s(" 에 "),Ze])])}}},Ge=pe(Oe,[["__scopeId","data-v-08f06c49"]]);export{Ge as default};
