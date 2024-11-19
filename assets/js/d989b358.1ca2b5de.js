"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[97969],{32406:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>j,contentTitle:()=>f,default:()=>T,frontMatter:()=>h,metadata:()=>s,toc:()=>U});const s=JSON.parse('{"id":"api/get-usage-template-list","title":"Get active UsageTemplate list","description":"API used to get the complete UsageTemplate list. Will only return those UsageTemplates that are marked Active.","source":"@site/docs/api/get-usage-template-list.api.mdx","sourceDirName":"api","slug":"/api/get-usage-template-list","permalink":"/fasp-documentation/docs/api/get-usage-template-list","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"id":"get-usage-template-list","title":"Get active UsageTemplate list","description":"API used to get the complete UsageTemplate list. Will only return those UsageTemplates that are marked Active.","sidebar_label":"Get active UsageTemplate list","hide_title":true,"hide_table_of_contents":true,"api":"eJy9VE1vGjEQ/SuWL73QhSL1wqkc2gSpByhEPURRNJgB3Hhtx56FotX+986YfADJJZeekL1v5r0380yrCTZZj251k2GDC6yjA0J919MrzCbZSDZ4PdLj6UQ1GVeKgtogKdqiMoHRSKhuTmuVs5kq9ds6p4J3B5WQmuS5IuQLaOZLIAUJVQ3pgbuPDdkdVrqnQ8QEQj5ZMT1TnlX+ZA4GJcwx+IzsoNXDwUB+znX/KuS56H0rk1uY4Ak9SSXhX+r/yVLXdl3X01/f6zhhfPLgFKYU0tFBTLjjJjIe5mHDCe2OIWH9UVJmrZFH9WSasRFoy4c+RNs/X1JPZ0w7TLK/VjfJMWxLFPOo39/v99VjA57s2poyR2DNB7ImVyFt9OV+pymsGiMHdWyq1mxuNl4wcgfJwtKVKXcdR8P6dSjaLTnk4tkZkQLPi3xmU4sQnDRhnUeqYfVlWA3eKOCEfcoSLzAG83FjzK/mRc7T0MCUoXmohffHeD5VhFDz14/axxqsVFzP5/fS5/569m2zzeZzzHWB8CacNcjpOmEcRzCs66j/nHIdQrWEpGWFMWSqwZ8UXvGbgRLu9xNxNov2NSD//+HRIYrgkksGWy+TKFbbpyzeas6i+L/8y2Aiks9tu4SMN8l1nVw/NpgOfH/3GiU5cdstwop3K/F9wIO45d1HKplzzYuM8jwkeC9P4+r7ggf9D50jpnQ=","sidebar_class_name":"get api-method","info_path":"docs/api/quantification-and-analytics-tool","custom_edit_url":null},"sidebar":"api-latest","previous":{"title":"Get complete UsagePeriod list","permalink":"/fasp-documentation/docs/api/get-usage-period-list-all"},"next":{"title":"Add or Update UsageTemplate","permalink":"/fasp-documentation/docs/api/add-and-upadte-usage-template"}}');var i=a(74848),l=a(28453),n=a(57742),o=a.n(n),p=a(78178),d=a.n(p),r=a(19624),c=a.n(r),m=a(96226),u=a.n(m),g=(a(77675),a(19365),a(51107));const h={id:"get-usage-template-list",title:"Get active UsageTemplate list",description:"API used to get the complete UsageTemplate list. Will only return those UsageTemplates that are marked Active.",sidebar_label:"Get active UsageTemplate list",hide_title:!0,hide_table_of_contents:!0,api:"eJy9VE1vGjEQ/SuWL73QhSL1wqkc2gSpByhEPURRNJgB3Hhtx56FotX+986YfADJJZeekL1v5r0380yrCTZZj251k2GDC6yjA0J919MrzCbZSDZ4PdLj6UQ1GVeKgtogKdqiMoHRSKhuTmuVs5kq9ds6p4J3B5WQmuS5IuQLaOZLIAUJVQ3pgbuPDdkdVrqnQ8QEQj5ZMT1TnlX+ZA4GJcwx+IzsoNXDwUB+znX/KuS56H0rk1uY4Ak9SSXhX+r/yVLXdl3X01/f6zhhfPLgFKYU0tFBTLjjJjIe5mHDCe2OIWH9UVJmrZFH9WSasRFoy4c+RNs/X1JPZ0w7TLK/VjfJMWxLFPOo39/v99VjA57s2poyR2DNB7ImVyFt9OV+pymsGiMHdWyq1mxuNl4wcgfJwtKVKXcdR8P6dSjaLTnk4tkZkQLPi3xmU4sQnDRhnUeqYfVlWA3eKOCEfcoSLzAG83FjzK/mRc7T0MCUoXmohffHeD5VhFDz14/axxqsVFzP5/fS5/569m2zzeZzzHWB8CacNcjpOmEcRzCs66j/nHIdQrWEpGWFMWSqwZ8UXvGbgRLu9xNxNov2NSD//+HRIYrgkksGWy+TKFbbpyzeas6i+L/8y2Aiks9tu4SMN8l1nVw/NpgOfH/3GiU5cdstwop3K/F9wIO45d1HKplzzYuM8jwkeC9P4+r7ggf9D50jpnQ=",sidebar_class_name:"get api-method",info_path:"docs/api/quantification-and-analytics-tool",custom_edit_url:null},f=void 0,j={},U=[];function k(e){const t={p:"p",...(0,l.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(g.default,{as:"h1",className:"openapi__heading",children:"Get active UsageTemplate list"}),"\n",(0,i.jsx)(o(),{method:"get",path:"/api/usageTemplate",context:"endpoint"}),"\n",(0,i.jsx)(t.p,{children:"API used to get the complete UsageTemplate list. Will only return those UsageTemplates that are marked Active."}),"\n",(0,i.jsx)(d(),{parameters:void 0}),"\n",(0,i.jsx)(c(),{title:"Body",body:void 0}),"\n",(0,i.jsx)(u(),{id:void 0,label:void 0,responses:{200:{description:"Returns the UsageTemplate list",content:{"text/json":{}}},500:{description:"Internal error that prevented the retreival of UsageTemplate list",content:{"text/json":{}}}}})]})}function T(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(k,{...e})}):k(e)}}}]);