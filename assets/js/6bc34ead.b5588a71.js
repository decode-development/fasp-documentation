"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[95723],{19775:(t,e,i)=>{i.r(e),i.d(e,{assets:()=>O,contentTitle:()=>j,default:()=>y,frontMatter:()=>h,metadata:()=>r,toc:()=>b});const r=JSON.parse('{"id":"api/get-program-lead-times","title":"get the ProgramLeadTimesOutput list","description":"API used to get the ProgramLeadTimesOutput list.","source":"@site/docs/api/get-program-lead-times.api.mdx","sourceDirName":"api","slug":"/api/get-program-lead-times","permalink":"/fasp-documentation/docs/api/get-program-lead-times","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"id":"get-program-lead-times","title":"get the ProgramLeadTimesOutput list","description":"API used to get the ProgramLeadTimesOutput list.","sidebar_label":"get the ProgramLeadTimesOutput list","hide_title":true,"hide_table_of_contents":true,"api":"eJydVcFu2kAQ/ZXVXnohQKl64VRatQpSpZCQ9IKiaLEHs6m9u5kdhyDkf+/MGhIgSduEg7HXb+btzrw33mgyRdTDmUYIHklfd3QOMUMbyHqnh3o0Gas6Qq7IqwJI0RLUBH2BpvoJJr+0FcSzmkJNqrSRurqjfQA0Ej7OOQEHHeMZg3BXQ6SvPl/r4UZn3hE4klsTQmmzFN+7jbKHjY7ZEiojd7QOwEn9/BYy4jwBhY0sJ+W3oSUS3keo5cwFIGMXHitD7dKngW44ujTOWVdcOUvjPO5FGUSz5hhLUO2vR0LG66ZJ1FmNUPG+RwVf3p7ggH3avniOfInpVTCjyVIpS8dVHztu0s1F6vMvCysGN20jLAJXjLCGtBCDd7Et6KDfl79DSVwA1ejiv6TAh99rK8ED7fqZiD+/lHrMeHSmVIDokRkMqYBwz0lEgkyIQAj2niF+8W52pq+All70GXwCB0NLfuqZYHutF3rhuWwj4D2gGGajayw5YEkU4rDXW61W3bvaOLKLrXoNn2NNNotdj4U+9hVvPa8zeVBtUsXyVOejS0beG7RmXqYWNA1bUnZ+8eSY7w+mCtLjA8X3X9DzbCeM61f0egB4UY87wN9kuKdV6xY+VXyrwvODmijjcjXaFUZdel/KebmkbVUG3Y+Dbv9ZsXgIfYgygUyWQWyVx6VS01S5batNllrtTCW8P0bTiSIwFb99a6d41liJOJ1ObyTPzen5l2IZs5MQqwThc/KMAnbJHuMoGB5Tqt3/IeXC++7cYOt61ltl3F7gf4zV44rsTcz3TOjt0Eiu4K5bJydKW95sjTDjOWzTnE6fhY5+ZgYWzFKsw9DNZm4iXGHZNLLMOkWe6rPrJyXLE1MsOZr7Je75DQzR39pTnFzKhgRe1ml4Hn8Dms4uYsQKCLSHfbK2OOXR1pOzqVhpvv3AVD4XMJqVHIqvQ52+VEKRJl1a22i2QFGbQrBtTvn9ASmPgXA=","sidebar_class_name":"post api-method","info_path":"docs/api/quantification-and-analytics-tool","custom_edit_url":null},"sidebar":"api-latest","previous":{"title":"get the ProcurementAgentShipmentReportOutput list","permalink":"/fasp-documentation/docs/api/get-procurement-agent-shipment-report"},"next":{"title":"get the FundingSourceShipmentReportOutput list","permalink":"/fasp-documentation/docs/api/get-funding-source-shipment-report"}}');var a=i(74848),s=i(28453),n=i(57742),o=i.n(n),d=i(78178),p=i.n(d),l=i(19624),m=i.n(l),u=i(96226),g=i.n(u),c=(i(77675),i(19365),i(51107));const h={id:"get-program-lead-times",title:"get the ProgramLeadTimesOutput list",description:"API used to get the ProgramLeadTimesOutput list.",sidebar_label:"get the ProgramLeadTimesOutput list",hide_title:!0,hide_table_of_contents:!0,api:"eJydVcFu2kAQ/ZXVXnohQKl64VRatQpSpZCQ9IKiaLEHs6m9u5kdhyDkf+/MGhIgSduEg7HXb+btzrw33mgyRdTDmUYIHklfd3QOMUMbyHqnh3o0Gas6Qq7IqwJI0RLUBH2BpvoJJr+0FcSzmkJNqrSRurqjfQA0Ej7OOQEHHeMZg3BXQ6SvPl/r4UZn3hE4klsTQmmzFN+7jbKHjY7ZEiojd7QOwEn9/BYy4jwBhY0sJ+W3oSUS3keo5cwFIGMXHitD7dKngW44ujTOWVdcOUvjPO5FGUSz5hhLUO2vR0LG66ZJ1FmNUPG+RwVf3p7ggH3avniOfInpVTCjyVIpS8dVHztu0s1F6vMvCysGN20jLAJXjLCGtBCDd7Et6KDfl79DSVwA1ejiv6TAh99rK8ED7fqZiD+/lHrMeHSmVIDokRkMqYBwz0lEgkyIQAj2niF+8W52pq+All70GXwCB0NLfuqZYHutF3rhuWwj4D2gGGajayw5YEkU4rDXW61W3bvaOLKLrXoNn2NNNotdj4U+9hVvPa8zeVBtUsXyVOejS0beG7RmXqYWNA1bUnZ+8eSY7w+mCtLjA8X3X9DzbCeM61f0egB4UY87wN9kuKdV6xY+VXyrwvODmijjcjXaFUZdel/KebmkbVUG3Y+Dbv9ZsXgIfYgygUyWQWyVx6VS01S5batNllrtTCW8P0bTiSIwFb99a6d41liJOJ1ObyTPzen5l2IZs5MQqwThc/KMAnbJHuMoGB5Tqt3/IeXC++7cYOt61ltl3F7gf4zV44rsTcz3TOjt0Eiu4K5bJydKW95sjTDjOWzTnE6fhY5+ZgYWzFKsw9DNZm4iXGHZNLLMOkWe6rPrJyXLE1MsOZr7Je75DQzR39pTnFzKhgRe1ml4Hn8Dms4uYsQKCLSHfbK2OOXR1pOzqVhpvv3AVD4XMJqVHIqvQ52+VEKRJl1a22i2QFGbQrBtTvn9ASmPgXA=",sidebar_class_name:"post api-method",info_path:"docs/api/quantification-and-analytics-tool",custom_edit_url:null},j=void 0,O={},b=[];function f(t){const e={p:"p",...(0,s.R)(),...t.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(c.default,{as:"h1",className:"openapi__heading",children:"get the ProgramLeadTimesOutput list"}),"\n",(0,a.jsx)(o(),{method:"post",path:"/api/report/programLeadTimes",context:"endpoint"}),"\n",(0,a.jsx)(e.p,{children:"API used to get the ProgramLeadTimesOutput list."}),"\n",(0,a.jsx)(c.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,a.jsx)(p(),{parameters:void 0}),"\n",(0,a.jsx)(m(),{title:"Body",body:{content:{"application/json":{schema:{type:"object",properties:{programId:{type:"integer",format:"int32"},planningUnitIds:{type:"array",items:{type:"string"}},procurementAgentIds:{type:"array",items:{type:"string"}},planningUnitIdString:{type:"string"},procurementAgentIdString:{type:"string"}},title:"ProgramLeadTimesInput_ReportView"}}},required:!0}}),"\n",(0,a.jsx)(g(),{id:void 0,label:void 0,responses:{200:{description:"Returns the ProgramLeadTimesOutput list",content:{"text/json":{}}},500:{description:"Internal error that prevented the retreival of ProgramLeadTimesOutput list",content:{"text/json":{}}}}})]})}function y(t={}){const{wrapper:e}={...(0,s.R)(),...t.components};return e?(0,a.jsx)(e,{...t,children:(0,a.jsx)(f,{...t})}):f(t)}}}]);