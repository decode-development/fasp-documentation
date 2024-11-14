"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[53922],{20798:(t,n,i)=>{i.r(n),i.d(n,{assets:()=>h,contentTitle:()=>f,default:()=>x,frontMatter:()=>b,metadata:()=>e,toc:()=>O});const e=JSON.parse('{"id":"api/get-planning-unit-all","title":"Get PlanningUnit list","description":"API used to get the complete PlanningUnit list.","source":"@site/docs/api/get-planning-unit-all.api.mdx","sourceDirName":"api","slug":"/api/get-planning-unit-all","permalink":"/fasp-documentation/docs/api/get-planning-unit-all","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"id":"get-planning-unit-all","title":"Get PlanningUnit list","description":"API used to get the complete PlanningUnit list.","sidebar_label":"Get PlanningUnit list","hide_title":true,"hide_table_of_contents":true,"api":"eJydU7Fu2zAQ/RWCSxdXcg108VQNbeLNrp0pCAKaOltsKZIhT3YNQf/eO9pN5CRLOgmk7t179+6xl6j2Sc7vZbDKOeP2d86gfJjIGpKOJqDxTs5ltVyILkEt0Is9oMAGhPZtsIAgliOosCZhISfSB4iK0Yua8IQZV1XWUkmEFLxLQPy9nE2n/Lmm/QnYRZcy3RsW6qC9Q3DIQIQ/WP5KDOuHYZjIr+81XFB9dMoKiNFH6qtQhAgHasLDEU0EjGAOVOJ3H+Qk0haw8ZeBqTYobOhQqmDKscGlygYkiAeIbH8vu2ipskEMaV6Wx+OxeOqUQ7MzOtuoSPUJjU6Fj3v5ej/L6OtO80Gcm4odjbeqNlR5UNGorc02DwOt1ridz/INWiDw6opIKFeL6h+b2HjPUlnnmWpWfJkV0zcKKCGfEsdDaQ3pvDLiF+ss5+Kb0tk3p1rm/VGtlwJBtfT3o+NDqwwjbtfrR+7zeLv6tm+S/hxSm0toGdZooHiNGKugNOk667+m3HlfbFWUvMXgE7bKjYA3lPn3wnDlQf+Sjf94MHgKzJQzRVkxjkfIGvtLju4l5YhTNX6qE8lZoq02JJpr+n6rEtxFOwx8/dRBPNH9w0sQ+ES9G1A1bYbD9xtOrJk2FzAnxnbPWnK+OTbP2b75viGb/gKYmHWs","sidebar_class_name":"get api-method","info_path":"docs/api/quantification-and-analytics-tool","custom_edit_url":null},"sidebar":"api-latest","previous":{"title":"Update PlanningUnitCapacity","permalink":"/fasp-documentation/docs/api/save-planning-unit-capacity"},"next":{"title":"Get active PlanningUnit list for Realm","permalink":"/fasp-documentation/docs/api/get-planning-unit-for-realm"}}');var a=i(74848),l=i(28453),s=i(57742),o=i.n(s),p=i(78178),d=i.n(p),r=i(19624),c=i.n(r),g=i(96226),u=i.n(g),m=(i(77675),i(19365),i(51107));const b={id:"get-planning-unit-all",title:"Get PlanningUnit list",description:"API used to get the complete PlanningUnit list.",sidebar_label:"Get PlanningUnit list",hide_title:!0,hide_table_of_contents:!0,api:"eJydU7Fu2zAQ/RWCSxdXcg108VQNbeLNrp0pCAKaOltsKZIhT3YNQf/eO9pN5CRLOgmk7t179+6xl6j2Sc7vZbDKOeP2d86gfJjIGpKOJqDxTs5ltVyILkEt0Is9oMAGhPZtsIAgliOosCZhISfSB4iK0Yua8IQZV1XWUkmEFLxLQPy9nE2n/Lmm/QnYRZcy3RsW6qC9Q3DIQIQ/WP5KDOuHYZjIr+81XFB9dMoKiNFH6qtQhAgHasLDEU0EjGAOVOJ3H+Qk0haw8ZeBqTYobOhQqmDKscGlygYkiAeIbH8vu2ipskEMaV6Wx+OxeOqUQ7MzOtuoSPUJjU6Fj3v5ej/L6OtO80Gcm4odjbeqNlR5UNGorc02DwOt1ridz/INWiDw6opIKFeL6h+b2HjPUlnnmWpWfJkV0zcKKCGfEsdDaQ3pvDLiF+ss5+Kb0tk3p1rm/VGtlwJBtfT3o+NDqwwjbtfrR+7zeLv6tm+S/hxSm0toGdZooHiNGKugNOk667+m3HlfbFWUvMXgE7bKjYA3lPn3wnDlQf+Sjf94MHgKzJQzRVkxjkfIGvtLju4l5YhTNX6qE8lZoq02JJpr+n6rEtxFOwx8/dRBPNH9w0sQ+ES9G1A1bYbD9xtOrJk2FzAnxnbPWnK+OTbP2b75viGb/gKYmHWs",sidebar_class_name:"get api-method",info_path:"docs/api/quantification-and-analytics-tool",custom_edit_url:null},f=void 0,h={},O=[];function j(t){const n={p:"p",...(0,l.R)(),...t.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(m.default,{as:"h1",className:"openapi__heading",children:"Get PlanningUnit list"}),"\n",(0,a.jsx)(o(),{method:"get",path:"/api/planningUnit/all",context:"endpoint"}),"\n",(0,a.jsx)(n.p,{children:"API used to get the complete PlanningUnit list."}),"\n",(0,a.jsx)(d(),{parameters:void 0}),"\n",(0,a.jsx)(c(),{title:"Body",body:void 0}),"\n",(0,a.jsx)(u(),{id:void 0,label:void 0,responses:{200:{description:"Returns the PlanningUnit list",content:{"text/json":{}}},500:{description:"Internal error that prevented the retreival of PlanningUnit list",content:{"text/json":{}}}}})]})}function x(t={}){const{wrapper:n}={...(0,l.R)(),...t.components};return n?(0,a.jsx)(n,{...t,children:(0,a.jsx)(j,{...t})}):j(t)}}}]);