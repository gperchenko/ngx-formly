(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{"1jJZ":function(n,s){n.exports="import { Component } from '@angular/core';\nimport { FormGroup } from '@angular/forms';\nimport { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';\n\n@Component({\n  selector: 'formly-app-example',\n  templateUrl: './app.component.html',\n})\nexport class AppComponent {\n  form = new FormGroup({});\n  model = {\n    investments: [{}],\n  };\n  options: FormlyFormOptions = {};\n\n  fields: FormlyFieldConfig[] = [\n    {\n      key: 'investments',\n      type: 'repeat',\n      fieldArray: {\n        fieldGroupClassName: 'row',\n        templateOptions: {\n          btnText: 'Add another investment',\n        },\n        fieldGroup: [\n          {\n            className: 'col-sm-4',\n            type: 'input',\n            key: 'investmentName',\n            templateOptions: {\n              label: 'Name of Investment:',\n              required: true,\n            },\n          },\n          {\n            type: 'input',\n            key: 'investmentDate',\n            className: 'col-sm-3',\n            templateOptions: {\n              type: 'date',\n              label: 'Date of Investment:',\n            },\n          },\n          {\n            type: 'input',\n            key: 'stockIdentifier',\n            className: 'col-sm-3',\n            templateOptions: {\n              label: 'Stock Identifier:',\n              addonRight: {\n                class: 'fa fa-code',\n                onClick: (to, fieldType, $event) => console.log(to, fieldType, $event),\n              },\n            },\n          },\n        ],\n      },\n    },\n  ];\n\n  submit() {\n    alert(JSON.stringify(this.model));\n  }\n}\n"},"6T7I":function(n,s,a){"use strict";a.r(s);var t=a("CcnG"),p=a("gIcY"),o=function(){function n(){this.form=new p.FormGroup({}),this.model={investments:[{}]},this.options={},this.fields=[{key:"investments",type:"repeat",fieldArray:{fieldGroupClassName:"row",templateOptions:{btnText:"Add another investment"},fieldGroup:[{className:"col-sm-4",type:"input",key:"investmentName",templateOptions:{label:"Name of Investment:",required:!0}},{type:"input",key:"investmentDate",className:"col-sm-3",templateOptions:{type:"date",label:"Date of Investment:"}},{type:"input",key:"stockIdentifier",className:"col-sm-3",templateOptions:{label:"Stock Identifier:",addonRight:{class:"fa fa-code",onClick:function(n,s,a){return console.log(n,s,a)}}}}]}}]}return n.prototype.submit=function(){alert(JSON.stringify(this.model))},n}(),e={examples:[{title:"Repeating Section",description:"\n              This demonstrates using\n              <code>formly-form</code> inside of a custom type in order to accomplish repeating fields.\n            ",component:o,files:[{file:"app.component.html",content:a("AYeb"),filecontent:a("C+lc")},{file:"app.component.ts",content:a("KmgH"),filecontent:a("1jJZ")},{file:"app.module.ts",content:a("djYa"),filecontent:a("uc/C")},{file:"repeat-section.type.ts",content:a("NB/M"),filecontent:a("ML5V")}]}]},l=function(){},c=a("NcP4"),u=a("goW2"),i=a("MT1c"),r=a("1Q/V"),k=a("9+aI"),m=a("haId"),d=a("LJsP"),f=a("yR2A"),y=a("grA4"),g=a("UFMs"),b=a("AMrk"),v=a("Ip0R"),C=a("mrSG"),F=function(n){function s(s){return n.call(this,s)||this}return Object(C.__extends)(s,n),s}(a("HkYz").a),w=a("UcnZ"),x=t["\u0275crt"]({encapsulation:2,styles:[],data:{}});function M(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,5,"div",[],null,null,null,null,null)),(n()(),t["\u0275eld"](1,0,null,null,4,"formly-group",[],null,null,null,u.c,u.b)),t["\u0275did"](2,49152,null,0,b.a,[],{form:[0,"form"],field:[1,"field"],model:[2,"model"],options:[3,"options"]},null),(n()(),t["\u0275eld"](3,0,null,0,2,"div",[["class","col-sm-2 d-flex align-items-center"]],null,null,null,null,null)),(n()(),t["\u0275eld"](4,0,null,null,1,"button",[["class","btn btn-danger"],["type","button"]],null,[[null,"click"]],function(n,s,a){var t=!0;return"click"===s&&(t=!1!==n.component.remove(n.context.index)&&t),t},null,null)),(n()(),t["\u0275ted"](-1,null,["Remove"]))],function(n,s){var a=s.component;n(s,2,0,a.formControl,s.context.$implicit,a.model[s.context.index],a.options)},null)}function N(n){return t["\u0275vid"](0,[(n()(),t["\u0275and"](16777216,null,null,1,null,M)),t["\u0275did"](1,802816,null,0,v.NgForOf,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(n()(),t["\u0275eld"](2,0,null,null,2,"div",[["style","margin:30px 0;"]],null,null,null,null,null)),(n()(),t["\u0275eld"](3,0,null,null,1,"button",[["class","btn btn-primary"],["type","button"]],null,[[null,"click"]],function(n,s,a){var t=!0;return"click"===s&&(t=!1!==n.component.add()&&t),t},null,null)),(n()(),t["\u0275ted"](4,null,["",""]))],function(n,s){n(s,1,0,s.component.field.fieldGroup)},function(n,s){n(s,4,0,s.component.field.fieldArray.templateOptions.btnText)})}var O=t["\u0275ccf"]("formly-repeat-section",F,function(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"formly-repeat-section",[],null,null,null,N,x)),t["\u0275did"](1,49152,null,0,F,[w.a],null,null)],null,null)},{form:"form",field:"field",model:"model",options:"options"},{},[]),h=a("pMnS"),R=a("4o01"),A=a("Dl9q"),T=a("9Glx"),_=a("wdLZ"),G=a("DAbo"),I=t["\u0275crt"]({encapsulation:2,styles:[],data:{}});function S(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,8,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(n,s,a){var p=!0,o=n.component;return"submit"===s&&(p=!1!==t["\u0275nov"](n,2).onSubmit(a)&&p),"reset"===s&&(p=!1!==t["\u0275nov"](n,2).onReset()&&p),"ngSubmit"===s&&(p=!1!==o.submit()&&p),p},null,null)),t["\u0275did"](1,16384,null,0,p["\u0275angular_packages_forms_forms_bg"],[],null,null),t["\u0275did"](2,540672,null,0,p.FormGroupDirective,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),t["\u0275prd"](2048,null,p.ControlContainer,null,[p.FormGroupDirective]),t["\u0275did"](4,16384,null,0,p.NgControlStatusGroup,[[4,p.ControlContainer]],null,null),(n()(),t["\u0275eld"](5,0,null,null,3,"formly-form",[],null,null,null,A.b,A.a)),t["\u0275did"](6,966656,null,0,T.a,[w.a,_.a,G.b,[2,p.NgForm],[2,p.FormGroupDirective],[3,T.a]],{model:[0,"model"],form:[1,"form"],fields:[2,"fields"],options:[3,"options"]},null),(n()(),t["\u0275eld"](7,0,null,0,1,"button",[["class","btn btn-primary submit-button"],["type","submit"]],[[8,"disabled",0]],null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["Submit"]))],function(n,s){var a=s.component;n(s,2,0,a.form),n(s,6,0,a.model,a.form,a.fields,a.options)},function(n,s){var a=s.component;n(s,0,0,t["\u0275nov"](s,4).ngClassUntouched,t["\u0275nov"](s,4).ngClassTouched,t["\u0275nov"](s,4).ngClassPristine,t["\u0275nov"](s,4).ngClassDirty,t["\u0275nov"](s,4).ngClassValid,t["\u0275nov"](s,4).ngClassInvalid,t["\u0275nov"](s,4).ngClassPending),n(s,7,0,!a.form.valid)})}var D=t["\u0275ccf"]("formly-app-example",o,function(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"formly-app-example",[],null,null,null,S,I)),t["\u0275did"](1,49152,null,0,o,[],null,null)],null,null)},{},{},[]),L=a("M2Lx"),B=a("eDkP"),J=a("Fzqc"),Y=a("v9Dh"),U=a("6LlJ"),j=a("F6kA"),q=a("dWZg"),P=a("lLAP"),Z=a("4c35"),z=a("qAlS"),Q=a("Wf4p"),V=a("La40"),W=a("SMsm"),$=a("UodH"),H=a("5QwG"),E=a("Nsh5"),K=a("8mMr"),X=a("LC5p"),nn=a("0/Q6"),sn=a("mqvi"),an=a("lYui"),tn=a("me7w"),pn=a("N3PW"),on=a("l4pn"),en=a("Fv2i"),ln=a("wBYW"),cn=a("IE48"),un=a("zn1Q"),rn=a("Q4Tx"),kn=a("zdmU"),mn=a("XR12"),dn=a("1ey0"),fn=function(){},yn=a("ZYCi"),gn=a("cIcG");a.d(s,"ConfigModuleNgFactory",function(){return bn});var bn=t["\u0275cmf"](l,[],function(n){return t["\u0275mod"]([t["\u0275mpd"](512,t.ComponentFactoryResolver,t["\u0275CodegenComponentFactoryResolver"],[[8,[c.a,u.a,i.a,r.a,k.a,m.a,d.a,f.a,y.a,g.a,O,h.a,R.a,D]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["\u0275mpd"](4608,v.NgLocalization,v.NgLocaleLocalization,[t.LOCALE_ID,[2,v["\u0275angular_packages_common_common_a"]]]),t["\u0275mpd"](4608,L.c,L.c,[]),t["\u0275mpd"](4608,B.c,B.c,[B.i,B.e,t.ComponentFactoryResolver,B.h,B.f,t.Injector,t.NgZone,v.DOCUMENT,J.b]),t["\u0275mpd"](5120,B.j,B.k,[B.c]),t["\u0275mpd"](5120,Y.b,Y.c,[B.c]),t["\u0275mpd"](4608,U.a,U.a,[]),t["\u0275mpd"](4608,j.a,j.a,[]),t["\u0275mpd"](4608,p.FormBuilder,p.FormBuilder,[]),t["\u0275mpd"](4608,p["\u0275angular_packages_forms_forms_i"],p["\u0275angular_packages_forms_forms_i"],[]),t["\u0275mpd"](4608,w.a,w.a,[G.b,_.a]),t["\u0275mpd"](1073742336,v.CommonModule,v.CommonModule,[]),t["\u0275mpd"](1073742336,q.b,q.b,[]),t["\u0275mpd"](1073742336,L.d,L.d,[]),t["\u0275mpd"](1073742336,P.a,P.a,[]),t["\u0275mpd"](1073742336,J.a,J.a,[]),t["\u0275mpd"](1073742336,Z.g,Z.g,[]),t["\u0275mpd"](1073742336,z.b,z.b,[]),t["\u0275mpd"](1073742336,B.g,B.g,[]),t["\u0275mpd"](1073742336,Q.l,Q.l,[[2,Q.d]]),t["\u0275mpd"](1073742336,Y.e,Y.e,[]),t["\u0275mpd"](1073742336,Q.w,Q.w,[]),t["\u0275mpd"](1073742336,V.i,V.i,[]),t["\u0275mpd"](1073742336,W.b,W.b,[]),t["\u0275mpd"](1073742336,$.c,$.c,[]),t["\u0275mpd"](1073742336,H.b,H.b,[]),t["\u0275mpd"](1073742336,E.h,E.h,[]),t["\u0275mpd"](1073742336,K.b,K.b,[]),t["\u0275mpd"](1073742336,Q.m,Q.m,[]),t["\u0275mpd"](1073742336,Q.u,Q.u,[]),t["\u0275mpd"](1073742336,X.b,X.b,[]),t["\u0275mpd"](1073742336,nn.c,nn.c,[]),t["\u0275mpd"](1073742336,sn.a,sn.a,[]),t["\u0275mpd"](1073742336,p["\u0275angular_packages_forms_forms_bb"],p["\u0275angular_packages_forms_forms_bb"],[]),t["\u0275mpd"](1073742336,p.ReactiveFormsModule,p.ReactiveFormsModule,[]),t["\u0275mpd"](1073742336,an.a,an.a,[]),t["\u0275mpd"](512,G.b,G.b,[]),t["\u0275mpd"](1024,G.a,function(){return[{types:[{name:"formly-group",component:b.a}]},{types:[{name:"input",component:tn.a,wrappers:["form-field"]},{name:"checkbox",component:pn.a,wrappers:["form-field"],defaultOptions:{templateOptions:{indeterminate:!0,hideLabel:!0}}},{name:"radio",component:on.a,wrappers:["form-field"],defaultOptions:{templateOptions:{options:[]}}},{name:"select",component:en.a,wrappers:["form-field"],defaultOptions:{templateOptions:{options:[]}}},{name:"textarea",component:ln.a,wrappers:["form-field"],defaultOptions:{templateOptions:{cols:1,rows:1}}},{name:"multicheckbox",component:cn.a,wrappers:["form-field"],defaultOptions:{templateOptions:{options:[]}}}],wrappers:[{name:"addons",component:un.a},{name:"form-field",component:rn.a}],manipulators:[{class:kn.a,method:"run"}]},{types:[{name:"formly-group",component:b.a}]},{types:[{name:"repeat",component:F}]}]},[]),t["\u0275mpd"](1073742336,mn.a,mn.a,[G.b,t.ComponentFactoryResolver,[2,G.a]]),t["\u0275mpd"](1073742336,dn.a,dn.a,[]),t["\u0275mpd"](1073742336,fn,fn,[]),t["\u0275mpd"](1073742336,yn.s,yn.s,[[2,yn.y],[2,yn.p]]),t["\u0275mpd"](1073742336,l,l,[]),t["\u0275mpd"](1024,yn.n,function(){return[[{path:"",component:gn.a,data:e}]]},[])])})},AYeb:function(n,s){n.exports='<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>form</span> <span class="token attr-name" >[formGroup]</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>form<span class="token punctuation" >"</span></span> <span class="token attr-name" >(ngSubmit)</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>submit()<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>formly-form</span> <span class="token attr-name" >[model]</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>model<span class="token punctuation" >"</span></span> <span class="token attr-name" >[fields]</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>fields<span class="token punctuation" >"</span></span> <span class="token attr-name" >[options]</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>options<span class="token punctuation" >"</span></span> <span class="token attr-name" >[form]</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>form<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>button</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>submit<span class="token punctuation" >"</span></span> <span class="token attr-name" >class</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>btn btn-primary submit-button<span class="token punctuation" >"</span></span> <span class="token attr-name" >[disabled]</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>!form.valid<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>Submit<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>button</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>formly-form</span><span class="token punctuation" >></span></span>\n<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>form</span><span class="token punctuation" >></span></span>\n'},"C+lc":function(n,s){n.exports='<form [formGroup]="form" (ngSubmit)="submit()">\n  <formly-form [model]="model" [fields]="fields" [options]="options" [form]="form">\n    <button type="submit" class="btn btn-primary submit-button" [disabled]="!form.valid">Submit</button>\n  </formly-form>\n</form>\n'},KmgH:function(n,s){n.exports='<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Component <span class="token punctuation" >}</span> from <span class="token string" >\'@angular/core\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> FormGroup <span class="token punctuation" >}</span> from <span class="token string" >\'@angular/forms\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> FormlyFormOptions<span class="token punctuation" >,</span> FormlyFieldConfig <span class="token punctuation" >}</span> from <span class="token string" >\'@ngx-formly/core\'</span><span class="token punctuation" >;</span>\n\n@<span class="token function" >Component</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  selector<span class="token punctuation" >:</span> <span class="token string" >\'formly-app-example\'</span><span class="token punctuation" >,</span>\n  templateUrl<span class="token punctuation" >:</span> <span class="token string" >\'./app.component.html\'</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span>\n<span class="token keyword" >export</span> <span class="token keyword" >class</span> <span class="token class-name" >AppComponent</span> <span class="token punctuation" >{</span>\n  form <span class="token operator" >=</span> <span class="token keyword" >new</span> <span class="token class-name" >FormGroup</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span><span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  model <span class="token operator" >=</span> <span class="token punctuation" >{</span>\n    investments<span class="token punctuation" >:</span> <span class="token punctuation" >[</span><span class="token punctuation" >{</span><span class="token punctuation" >}</span><span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n  options<span class="token punctuation" >:</span> FormlyFormOptions <span class="token operator" >=</span> <span class="token punctuation" >{</span><span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n\n  fields<span class="token punctuation" >:</span> FormlyFieldConfig<span class="token punctuation" >[</span><span class="token punctuation" >]</span> <span class="token operator" >=</span> <span class="token punctuation" >[</span>\n    <span class="token punctuation" >{</span>\n      key<span class="token punctuation" >:</span> <span class="token string" >\'investments\'</span><span class="token punctuation" >,</span>\n      type<span class="token punctuation" >:</span> <span class="token string" >\'repeat\'</span><span class="token punctuation" >,</span>\n      fieldArray<span class="token punctuation" >:</span> <span class="token punctuation" >{</span>\n        fieldGroupClassName<span class="token punctuation" >:</span> <span class="token string" >\'row\'</span><span class="token punctuation" >,</span>\n        templateOptions<span class="token punctuation" >:</span> <span class="token punctuation" >{</span>\n          btnText<span class="token punctuation" >:</span> <span class="token string" >\'Add another investment\'</span><span class="token punctuation" >,</span>\n        <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n        fieldGroup<span class="token punctuation" >:</span> <span class="token punctuation" >[</span>\n          <span class="token punctuation" >{</span>\n            className<span class="token punctuation" >:</span> <span class="token string" >\'col-sm-4\'</span><span class="token punctuation" >,</span>\n            type<span class="token punctuation" >:</span> <span class="token string" >\'input\'</span><span class="token punctuation" >,</span>\n            key<span class="token punctuation" >:</span> <span class="token string" >\'investmentName\'</span><span class="token punctuation" >,</span>\n            templateOptions<span class="token punctuation" >:</span> <span class="token punctuation" >{</span>\n              label<span class="token punctuation" >:</span> <span class="token string" >\'Name of Investment:\'</span><span class="token punctuation" >,</span>\n              required<span class="token punctuation" >:</span> <span class="token keyword" >true</span><span class="token punctuation" >,</span>\n            <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n          <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n          <span class="token punctuation" >{</span>\n            type<span class="token punctuation" >:</span> <span class="token string" >\'input\'</span><span class="token punctuation" >,</span>\n            key<span class="token punctuation" >:</span> <span class="token string" >\'investmentDate\'</span><span class="token punctuation" >,</span>\n            className<span class="token punctuation" >:</span> <span class="token string" >\'col-sm-3\'</span><span class="token punctuation" >,</span>\n            templateOptions<span class="token punctuation" >:</span> <span class="token punctuation" >{</span>\n              type<span class="token punctuation" >:</span> <span class="token string" >\'date\'</span><span class="token punctuation" >,</span>\n              label<span class="token punctuation" >:</span> <span class="token string" >\'Date of Investment:\'</span><span class="token punctuation" >,</span>\n            <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n          <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n          <span class="token punctuation" >{</span>\n            type<span class="token punctuation" >:</span> <span class="token string" >\'input\'</span><span class="token punctuation" >,</span>\n            key<span class="token punctuation" >:</span> <span class="token string" >\'stockIdentifier\'</span><span class="token punctuation" >,</span>\n            className<span class="token punctuation" >:</span> <span class="token string" >\'col-sm-3\'</span><span class="token punctuation" >,</span>\n            templateOptions<span class="token punctuation" >:</span> <span class="token punctuation" >{</span>\n              label<span class="token punctuation" >:</span> <span class="token string" >\'Stock Identifier:\'</span><span class="token punctuation" >,</span>\n              addonRight<span class="token punctuation" >:</span> <span class="token punctuation" >{</span>\n                <span class="token keyword" >class</span><span class="token punctuation" >:</span> <span class="token string" >\'fa fa-code\'</span><span class="token punctuation" >,</span>\n                onClick<span class="token punctuation" >:</span> <span class="token punctuation" >(</span>to<span class="token punctuation" >,</span> fieldType<span class="token punctuation" >,</span> $event<span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> console<span class="token punctuation" >.</span><span class="token function" >log</span><span class="token punctuation" >(</span>to<span class="token punctuation" >,</span> fieldType<span class="token punctuation" >,</span> $event<span class="token punctuation" >)</span><span class="token punctuation" >,</span>\n              <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n            <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n          <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n        <span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n      <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token punctuation" >]</span><span class="token punctuation" >;</span>\n\n  <span class="token function" >submit</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token function" >alert</span><span class="token punctuation" >(</span>JSON<span class="token punctuation" >.</span><span class="token function" >stringify</span><span class="token punctuation" >(</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>model<span class="token punctuation" >)</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span>\n<span class="token punctuation" >}</span>\n'},ML5V:function(n,s){n.exports='import { Component } from \'@angular/core\';\nimport { FieldArrayType, FormlyFormBuilder } from \'@ngx-formly/core\';\n\n@Component({\n  selector: \'formly-repeat-section\',\n  template: `\n    <div *ngFor="let field of field.fieldGroup; let i = index;">\n      <formly-group\n        [model]="model[i]"\n        [field]="field"\n        [options]="options"\n        [form]="formControl">\n        <div class="col-sm-2 d-flex align-items-center">\n          <button class="btn btn-danger" type="button" (click)="remove(i)">Remove</button>\n        </div>\n      </formly-group>\n    </div>\n    <div style="margin:30px 0;">\n      <button class="btn btn-primary" type="button" (click)="add()">{{ field.fieldArray.templateOptions.btnText }}</button>\n    </div>\n  `,\n})\nexport class RepeatTypeComponent extends FieldArrayType {\n  constructor(builder: FormlyFormBuilder) {\n    super(builder);\n  }\n}\n'},"NB/M":function(n,s){n.exports='<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Component <span class="token punctuation" >}</span> from <span class="token string" >\'@angular/core\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> FieldArrayType<span class="token punctuation" >,</span> FormlyFormBuilder <span class="token punctuation" >}</span> from <span class="token string" >\'@ngx-formly/core\'</span><span class="token punctuation" >;</span>\n\n@<span class="token function" >Component</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  selector<span class="token punctuation" >:</span> <span class="token string" >\'formly-repeat-section\'</span><span class="token punctuation" >,</span>\n  template<span class="token punctuation" >:</span> `\n    <span class="token operator" >&lt;</span>div <span class="token operator" >*</span>ngFor<span class="token operator" >=</span><span class="token string" >"let field of field.fieldGroup; let i = index;"</span><span class="token operator" >></span>\n      <span class="token operator" >&lt;</span>formly<span class="token operator" >-</span>group\n        <span class="token punctuation" >[</span>model<span class="token punctuation" >]</span><span class="token operator" >=</span><span class="token string" >"model[i]"</span>\n        <span class="token punctuation" >[</span>field<span class="token punctuation" >]</span><span class="token operator" >=</span><span class="token string" >"field"</span>\n        <span class="token punctuation" >[</span>options<span class="token punctuation" >]</span><span class="token operator" >=</span><span class="token string" >"options"</span>\n        <span class="token punctuation" >[</span>form<span class="token punctuation" >]</span><span class="token operator" >=</span><span class="token string" >"formControl"</span><span class="token operator" >></span>\n        <span class="token operator" >&lt;</span>div <span class="token keyword" >class</span><span class="token operator" >=</span><span class="token string" >"col-sm-2 d-flex align-items-center"</span><span class="token operator" >></span>\n          <span class="token operator" >&lt;</span>button <span class="token keyword" >class</span><span class="token operator" >=</span><span class="token string" >"btn btn-danger"</span> type<span class="token operator" >=</span><span class="token string" >"button"</span> <span class="token punctuation" >(</span>click<span class="token punctuation" >)</span><span class="token operator" >=</span><span class="token string" >"remove(i)"</span><span class="token operator" >></span>Remove<span class="token operator" >&lt;</span><span class="token operator" >/</span>button<span class="token operator" >></span>\n        <span class="token operator" >&lt;</span><span class="token operator" >/</span>div<span class="token operator" >></span>\n      <span class="token operator" >&lt;</span><span class="token operator" >/</span>formly<span class="token operator" >-</span>group<span class="token operator" >></span>\n    <span class="token operator" >&lt;</span><span class="token operator" >/</span>div<span class="token operator" >></span>\n    <span class="token operator" >&lt;</span>div style<span class="token operator" >=</span><span class="token string" >"margin:30px 0;"</span><span class="token operator" >></span>\n      <span class="token operator" >&lt;</span>button <span class="token keyword" >class</span><span class="token operator" >=</span><span class="token string" >"btn btn-primary"</span> type<span class="token operator" >=</span><span class="token string" >"button"</span> <span class="token punctuation" >(</span>click<span class="token punctuation" >)</span><span class="token operator" >=</span><span class="token string" >"add()"</span><span class="token operator" >></span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> field<span class="token punctuation" >.</span>fieldArray<span class="token punctuation" >.</span>templateOptions<span class="token punctuation" >.</span>btnText <span class="token punctuation" >}</span><span class="token punctuation" >}</span><span class="token operator" >&lt;</span><span class="token operator" >/</span>button<span class="token operator" >></span>\n    <span class="token operator" >&lt;</span><span class="token operator" >/</span>div<span class="token operator" >></span>\n  `<span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span>\n<span class="token keyword" >export</span> <span class="token keyword" >class</span> <span class="token class-name" >RepeatTypeComponent</span> <span class="token keyword" >extends</span> <span class="token class-name" >FieldArrayType</span> <span class="token punctuation" >{</span>\n  <span class="token keyword" >constructor</span><span class="token punctuation" >(</span>builder<span class="token punctuation" >:</span> FormlyFormBuilder<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >super</span><span class="token punctuation" >(</span>builder<span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span>\n<span class="token punctuation" >}</span>\n'},djYa:function(n,s){n.exports='<span class="token keyword" >import</span> <span class="token punctuation" >{</span> NgModule <span class="token punctuation" >}</span> from <span class="token string" >\'@angular/core\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> CommonModule <span class="token punctuation" >}</span> from <span class="token string" >\'@angular/common\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> ReactiveFormsModule <span class="token punctuation" >}</span> from <span class="token string" >\'@angular/forms\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> FormlyModule <span class="token punctuation" >}</span> from <span class="token string" >\'@ngx-formly/core\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> FormlyBootstrapModule <span class="token punctuation" >}</span> from <span class="token string" >\'@ngx-formly/bootstrap\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> AppComponent <span class="token punctuation" >}</span> from <span class="token string" >\'./app.component\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> RepeatTypeComponent <span class="token punctuation" >}</span> from <span class="token string" >\'./repeat-section.type\'</span><span class="token punctuation" >;</span>\n\n@<span class="token function" >NgModule</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  imports<span class="token punctuation" >:</span> <span class="token punctuation" >[</span>\n    CommonModule<span class="token punctuation" >,</span>\n    ReactiveFormsModule<span class="token punctuation" >,</span>\n    FormlyBootstrapModule<span class="token punctuation" >,</span>\n    FormlyModule<span class="token punctuation" >.</span><span class="token function" >forRoot</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n      types<span class="token punctuation" >:</span> <span class="token punctuation" >[</span>\n        <span class="token punctuation" >{</span> name<span class="token punctuation" >:</span> <span class="token string" >\'repeat\'</span><span class="token punctuation" >,</span> component<span class="token punctuation" >:</span> RepeatTypeComponent <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n      <span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >,</span>\n  <span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n  declarations<span class="token punctuation" >:</span> <span class="token punctuation" >[</span>\n    AppComponent<span class="token punctuation" >,</span>\n    RepeatTypeComponent<span class="token punctuation" >,</span>\n  <span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span>\n<span class="token keyword" >export</span> <span class="token keyword" >class</span> <span class="token class-name" >AppModule</span> <span class="token punctuation" >{</span> <span class="token punctuation" >}</span>\n'},"uc/C":function(n,s){n.exports="import { NgModule } from '@angular/core';\nimport { CommonModule } from '@angular/common';\nimport { ReactiveFormsModule } from '@angular/forms';\nimport { FormlyModule } from '@ngx-formly/core';\nimport { FormlyBootstrapModule } from '@ngx-formly/bootstrap';\n\nimport { AppComponent } from './app.component';\nimport { RepeatTypeComponent } from './repeat-section.type';\n\n@NgModule({\n  imports: [\n    CommonModule,\n    ReactiveFormsModule,\n    FormlyBootstrapModule,\n    FormlyModule.forRoot({\n      types: [\n        { name: 'repeat', component: RepeatTypeComponent },\n      ],\n    }),\n  ],\n  declarations: [\n    AppComponent,\n    RepeatTypeComponent,\n  ],\n})\nexport class AppModule { }\n"}}]);