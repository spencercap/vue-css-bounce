import{d as t,r as n,c as a,a as e,t as o,F as s,w as r,p as l,b as i,e as c,f as d,o as u,g,h as m,i as h}from"./vendor.6bc0b4fd.js";!function(t=".",n="__import__"){try{self[n]=new Function("u","return import(u)")}catch(a){const e=new URL(t,location),o=t=>{URL.revokeObjectURL(t.src),t.remove()};self[n]=t=>new Promise(((a,s)=>{const r=new URL(t,e);if(self[n].moduleMap[r])return a(self[n].moduleMap[r]);const l=new Blob([`import * as m from '${r}';`,`${n}.moduleMap['${r}']=m;`],{type:"text/javascript"}),i=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(l),onerror(){s(new Error(`Failed to import: ${t}`)),o(i)},onload(){a(self[n].moduleMap[r]),o(i)}});document.head.appendChild(i)})),self[n].moduleMap={}}}("assets/");var p=t({name:"HelloWorld",props:{msg:{type:String,required:!0}},setup:()=>({count:n(0)})});const f=r("data-v-a5fa07f2");l("data-v-a5fa07f2");const v=i('<p data-v-a5fa07f2> Recommended IDE setup: <a href="https://code.visualstudio.com/" target="_blank" data-v-a5fa07f2>VSCode</a> + <a href="https://marketplace.visualstudio.com/items?itemName=octref.vetur" target="_blank" data-v-a5fa07f2>Vetur</a> or <a href="https://github.com/johnsoncodehk/volar" target="_blank" data-v-a5fa07f2>Volar</a> (if using <code data-v-a5fa07f2>&lt;script setup&gt;</code>) </p><p data-v-a5fa07f2>See <code data-v-a5fa07f2>README.md</code> for more information.</p><p data-v-a5fa07f2><a href="https://vitejs.dev/guide/features.html" target="_blank" data-v-a5fa07f2>Vite Docs</a> | <a href="https://v3.vuejs.org/" target="_blank" data-v-a5fa07f2>Vue 3 Docs</a></p>',3),X=e("p",null,[c(" Edit "),e("code",null,"components/HelloWorld.vue"),c(" to test hot module replacement. ")],-1);d();const S=f(((t,n,r,l,i,c)=>(u(),a(s,null,[e("h1",null,o(t.msg),1),v,e("button",{onClick:n[1]||(n[1]=n=>t.count++)},"count is: "+o(t.count),1),X],64))));p.render=S,p.__scopeId="data-v-a5fa07f2";var w=t({name:"ClickToCSSTest",data:()=>({dragging:!1,dragXStart:0,dragXMove:0}),mounted(){console.log("ClickToCSSTest mounted")},methods:{touchStart(t){console.log("touchStart",t),this.dragging=!0,"mousedown"==t.type?(this.dragXStart=t.clientX,window.onmousemove=t=>{this.dragXMove=t.clientX-this.dragXStart},window.onmouseup=this.touchEnd):"touchstart"==t.type&&(this.dragXStart=t.touches[0].clientX,window.ontouchmove=t=>{this.dragXMove=t.touches[0].clientX-this.dragXStart},window.ontouchend=this.touchEnd)},async touchEnd(t){console.log("touchEnd",t),this.dragging=!1,window.onmousemove=null,window.onmouseup=null,window.ontouchmove=null,window.ontouchend=null,await this.$nextTick(),this.genSpringAnimation(this.dragXMove),this.dragXStart=0,this.dragXMove=0},genSpringAnimation(t){console.log("genSpringAnimation");const n=t,a=document.querySelector("#styleInjection");if(a){const t=a.sheet;[...t.cssRules].forEach(((a,e)=>{if(".colorful"==a.selectorText){t.deleteRule(e);const n=`hsl(${360*Math.random()}, 50%, 75%)`;t.insertRule(`\n\t\t\t\t\t\t\t.colorful {\n\t\t\t\t\t\t\t\tbackground: ${n};\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t`)}else a.selectorText||"animationXElastic"==a.name&&(console.log("replacing animationXElastic"),t.deleteRule(e),t.insertRule(`\n\t\t\t\t\t\t\t\t@keyframes animationXElastic {\n\t\t\t\t\t\t\t\t\t0% {\n\t\t\t\t\t\t\t\t\t\ttransform: translateX(calc(${-0*n+n}px - 50%));\n\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t16% {\n\t\t\t\t\t\t\t\t\t\ttransform: translateX(calc(${-1.3227*n+n}px - 50%));\n\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t28% {\n\t\t\t\t\t\t\t\t\t\ttransform: translateX(calc(${-.8688*n+n}px - 50%));\n\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t44% {\n\t\t\t\t\t\t\t\t\t\ttransform: translateX(calc(${-1.0463*n+n}px - 50%));\n\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t59% {\n\t\t\t\t\t\t\t\t\t\ttransform: translateX(calc(${-.9836*n+n}px - 50%));\n\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t73% {\n\t\t\t\t\t\t\t\t\t\ttransform: translateX(calc(${-1.0058*n+n}px - 50%));\n\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t88% {\n\t\t\t\t\t\t\t\t\t\ttransform: translateX(calc(${-.998*n+n}px - 50%));\n\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t100% {\n\t\t\t\t\t\t\t\t\t\ttransform: translateX(calc(${-1*n+n}px - 50%));\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t`))}))}const e=document.querySelector(".box");e&&(e.classList.contains("animateXElastic")?console.log("has animateXElastic already"):(console.log("adding animateXElastic"),e.classList.add("animateXElastic"),e.onanimationend=()=>{console.log("removing animateXElastic"),e.classList.remove("animateXElastic"),e.onanimationend=null}))},bgClick(t){console.log("bgClick",t)}}});const x=r("data-v-acb37600");l("data-v-acb37600");const $={class:"bg",xxclick:"bgClick($event)"},b=e("br",null,null,-1);d();const E=x(((t,n,s,r,l,i)=>(u(),a("div",$,[e("div",{class:"box colorful "+(t.dragging?"dragging":""),style:""+(t.dragging?`transform: translateX(calc(${t.dragXMove}px - 50%))`:""),onMousedown:n[1]||(n[1]=n=>t.touchStart(n)),onTouchstart:n[2]||(n[2]=g((n=>t.touchStart(n)),["prevent"]))},[c(o(t.dragging)+" ",1),b,c(" "+o(t.dragXMove),1)],38)]))));w.render=E,w.__scopeId="data-v-acb37600";var M=t({name:"BounceXY",data:()=>({dragging:!1,dragXStart:0,dragXMove:0,dragYStart:0,dragYMove:0}),methods:{touchStart(t){console.log("touchStart",t),this.dragging=!0,"mousedown"==t.type?(this.dragXStart=t.clientX,this.dragYStart=t.clientY,window.onmousemove=t=>{this.dragXMove=t.clientX-this.dragXStart,this.dragYMove=t.clientY-this.dragYStart},window.onmouseup=this.touchEnd):"touchstart"==t.type&&(this.dragXStart=t.touches[0].clientX,this.dragYStart=t.touches[0].clientY,window.ontouchmove=t=>{this.dragXMove=t.touches[0].clientX-this.dragXStart,this.dragYMove=t.touches[0].clientY-this.dragYStart},window.ontouchend=this.touchEnd)},async touchEnd(t){console.log("touchEnd",t),this.dragging=!1,window.onmousemove=null,window.onmouseup=null,window.ontouchmove=null,window.ontouchend=null,await this.$nextTick(),this.genSpringAnimation(this.dragXMove,this.dragYMove),this.dragXStart=0,this.dragXMove=0,this.dragYStart=0,this.dragYMove=0},genSpringAnimation(t,n){console.log("genSpringAnimation",t,n);const a=document.querySelector("#styleInjection");if(a){const e=a.sheet;[...e.cssRules].forEach(((a,o)=>{if(".colorful"==a.selectorText){e.deleteRule(o);const t=`hsl(${360*Math.random()}, 50%, 75%)`;e.insertRule(`\n\t\t\t\t\t\t\t.colorful {\n\t\t\t\t\t\t\t\tbackground: ${t};\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t`)}else a.selectorText||"animElasticXY"==a.name&&(console.log("replacing animElasticXY"),e.deleteRule(o),e.insertRule(`\n\t\t\t\t\t\t\t\t@keyframes animElasticXY {\n\t\t\t\t\t\t\t\t\t0% {\n\t\t\t\t\t\t\t\t\t\ttransform: translate(${-0*t+t}px, ${-0*n+n}px);\n\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t16% {\n\t\t\t\t\t\t\t\t\t\ttransform: translate(${-1.3227*t+t}px, ${-1.3227*n+n}px);\n\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t28% {\n\t\t\t\t\t\t\t\t\t\ttransform: translate(${-.8688*t+t}px, ${-.8688*n+n}px);\n\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t44% {\n\t\t\t\t\t\t\t\t\t\ttransform: translate(${-1.0463*t+t}px, ${-1.0463*n+n}px);\n\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t59% {\n\t\t\t\t\t\t\t\t\t\ttransform: translate(${-.9836*t+t}px, ${-.9836*n+n}px);\n\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t73% {\n\t\t\t\t\t\t\t\t\t\ttransform: translate(${-1.0058*t+t}px, ${-1.0058*n+n}px);\n\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t88% {\n\t\t\t\t\t\t\t\t\t\ttransform: translate(${-.998*t+t}px, ${-.998*n+n}px);\n\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t100% {\n\t\t\t\t\t\t\t\t\t\ttransform: translate(${-1*t+t}px, ${-1*n+n}px);\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t`))}))}const e=document.querySelector(".box");e&&(e.classList.contains("animateElasticXY")?console.log("has animateElasticXY already"):(console.log("adding animateElasticXY"),e.classList.add("animateElasticXY"),e.onanimationend=()=>{console.log("removing animateElasticXY"),e.classList.remove("animateElasticXY"),e.onanimationend=null}))}}});const Y=r("data-v-6cd5f76e");l("data-v-6cd5f76e");const y=e("br",null,null,-1),k=e("br",null,null,-1),R=e("br",null,null,-1),C=e("span",null,"(drag me)",-1),_=e("div",{class:"centerIndicator"},"+",-1);d();const T=Y(((t,n,r,l,i,d)=>(u(),a(s,null,[e("div",{class:"box colorful "+(t.dragging?"dragging":""),style:""+(t.dragging?`transform: translate(${t.dragXMove}px, ${t.dragYMove}px)`:""),onMousedown:n[1]||(n[1]=n=>t.touchStart(n)),onTouchstart:n[2]||(n[2]=g((n=>t.touchStart(n)),["prevent"]))},[c(o(t.dragging)+" ",1),y,c(" "+o(t.dragXMove.toFixed(0))+" "+o(t.dragYMove.toFixed(0))+" ",1),k,R,C],38),_],64))));M.render=T,M.__scopeId="data-v-6cd5f76e";var L=t({name:"App",components:{HelloWorld:p,ClickToCSSTest:w,BounceXY:M}});const j=e("h2",null,"CSS Bounce!",-1),A=e("a",{href:"https://github.com/spencercap/vue-css-bounce"},"repo",-1),I=e("p",{class:"info"},[c(" Computes CSS keyframe animation in JS on dragend. Dynamically updates CSS via JS. "),e("br"),e("br"),c(" Why: Simulate some physics + go further than the built in easing functions. ")],-1),U=e("h2",null,"⚛️",-1),q=e("div",{style:{height:"120px"}},null,-1);L.render=function(t,n,o,r,l,i){const c=m("BounceXY");return u(),a(s,null,[j,A,I,U,q,e(c)],64)},h(L).mount("#app");