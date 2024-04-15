import{Q as m,S as u,aI as d,a2 as _,w as o,a$ as p,a5 as f,o as n,b as a,X as s,a as e,c as r,b0 as g,Y as h,a8 as k,a3 as b,t as l}from"./entry.DQxhvQZe.js";import{P as C}from"./pageHeading.BmjDs1M_.js";import{_ as w}from"./codeBlock.CWiEGQcp.js";import{V as x}from"./VTable.Dm7i4_Ns.js";import"./VMenu.CYYUY4WE.js";import"./forwardRefs.DC-jezkJ.js";import"./_plugin-vue_export-helper.DlAUqK2U.js";const V=e("span",{class:"text-h5"},"code",-1),y=e("thead",null,[e("tr",null,[e("th",{class:"text-left"}," Name "),e("th",{class:"text-left"}," Calories ")])],-1),B=`axios({
        method: "GET",
        url: "www.kickin.kr/" + "kicks/sneaker/list/",
      })
        .then((res) => {
          console.log(res.data);
            });
          }
        }) 
       .catch((err) => {
          console.log("err; ", err);
        });
    },
  },
`,R={__name:"getting-start",setup(S){const c=f();m();const i=u([{name:"Frozen Yogurt",calories:159},{name:"Ice cream sandwich",calories:237},{name:"Eclair",calories:262},{name:"Cupcake",calories:305},{name:"Gingerbread",calories:356},{name:"Jelly bean",calories:375},{name:"Lollipop",calories:392},{name:"Honeycomb",calories:408},{name:"Donut",calories:452},{name:"KitKat",calories:518}]);return d(()=>{console.log("mounted"),console.log(c.public.API_BASE_URL)}),(E,I)=>(n(),_(p,null,{default:o(()=>[a(C,{title:"How to Kickin",subtitle:"API DOCS"}),a(b,null,{default:o(()=>[a(s,{cols:"12",md:"6"},{default:o(()=>[V,a(w,{code:B})]),_:1}),a(s,{cols:"12",md:"6"},{default:o(()=>[a(x,{theme:"dark"},{default:o(()=>[y,e("tbody",null,[(n(!0),r(k,null,g(h(i),t=>(n(),r("tr",{key:t.name},[e("td",null,l(t.name),1),e("td",null,l(t.calories),1)]))),128))])]),_:1})]),_:1})]),_:1})]),_:1}))}};export{R as default};
