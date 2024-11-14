"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[85342],{15958:(t,e,i)=>{i.r(e),i.d(e,{assets:()=>y,contentTitle:()=>f,default:()=>S,frontMatter:()=>b,metadata:()=>a,toc:()=>J});const a=JSON.parse('{"id":"api/add-issue-attachment","title":"Add attachment in Jira issue","description":"API used to add attachment in the issue in Jira","source":"@site/docs/api/add-issue-attachment.api.mdx","sourceDirName":"api","slug":"/api/add-issue-attachment","permalink":"/fasp-documentation/docs/api/add-issue-attachment","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"id":"add-issue-attachment","title":"Add attachment in Jira issue","description":"API used to add attachment in the issue in Jira","sidebar_label":"Add attachment in Jira issue","hide_title":true,"hide_table_of_contents":true,"api":"eJylVU1v2zAM/SuCLtuALOkK7JLTsi1DMwxtame7FEXB2Eys1pZcSW4aGP7vI2U3H3VRYJ0PQSTz45F8j66lh7WT4yt5qyzEaB9Ugt/R3cnrgUzRJVaVXhktx3Iyn4nKYSq8EZCmAryHJCtQe6G08BkK5VyFfPhJseRAmhItsPcsJX/ymbHBZOdHJiVYKNCjZQy11HQg0xCInAZSceYSfCafw5m1yVKxMlZsMpVkh4g0YuoY6RIZLAYzimHxvlIWCY+3FQ6kSzIsQI5r6bclp3beKr2WTTPYoVmpHHvp91V0yfsZu0a0bZHNdZsdnf9q0i2n/M+IA5kY7bmPFAvKMldJ6Pbo1nHAul+cWd5iEtpueTZeoeO3ocBeCwaSWlYARZdLpcFuqSn8cBmuNNq1zqcnJ/1aIvSV1U6AiKskQedEYlKa1irwZMcLsQEnXGuxqvLjijw++qdSQtrPr2c6876MPfjKDWfni2l0Pvl1E0+jP9PoZhpFF1GX3WKb1RQEhM8CrSUK+Qy8SIlP2ngBeW42z7DSIBJTlDmx9VWghJQYnRnmfGlcy3Ii8FiOoFQj1tmor4VR3ZG+IXtHOnySRGVzcs2oODcejTabzfC+Au3Vqps2aMi3XiVuaOy6R9O5NWmVBPxt0CCXy8mCLB/AKljmYYwN05NriPYUnT4Cl7tnyE4crMuVCbUrH95cHmESoFMxeQImFsbwbLmkFtXp8NPp8KSvqfnsXSA8tJzh/hNUEQfkXdMhCU3vtPljEs+FRyjo7b92irSh2OMsjm84zs3Z5Zd15pKPpSuCCdVJmkJi+kHGSUkTQ9HiP065Mma4BMvLI0y+AH3o2NuZR1o+akW959cb9m6n48DLMgfaoU0Hte6oeEX7QpHlbevw4moeP21hYkbGPCavul6Cw982bxq+JqrQWhhfXe/JFDibKsf/SQEryB2+Utz7qFvIH8TbFvqLtXaXoLeB5nnFJ/p7h9uDr0tzTaYZQkrcYtTt228tto8LjrH37u1X/kC0HhNia+kPbPcLgVW1Wwbzi5hlt+y2f0EbkW4tbPi7RL8BoglNCps13NUyB72uYM22bUx+/gJ8Fqpc","sidebar_class_name":"post api-method","info_path":"docs/api/quantification-and-analytics-tool","custom_edit_url":null},"sidebar":"api-latest","previous":{"title":"Add issue in Jira","permalink":"/fasp-documentation/docs/api/add-issue"},"next":{"title":"Get number of open and addressed issues","permalink":"/fasp-documentation/docs/api/get-open-issue"}}');var s=i(74848),n=i(28453),d=i(57742),o=i.n(d),c=i(78178),r=i.n(c),u=i(19624),p=i.n(u),l=i(96226),m=i.n(l),h=(i(77675),i(19365),i(51107));const b={id:"add-issue-attachment",title:"Add attachment in Jira issue",description:"API used to add attachment in the issue in Jira",sidebar_label:"Add attachment in Jira issue",hide_title:!0,hide_table_of_contents:!0,api:"eJylVU1v2zAM/SuCLtuALOkK7JLTsi1DMwxtame7FEXB2Eys1pZcSW4aGP7vI2U3H3VRYJ0PQSTz45F8j66lh7WT4yt5qyzEaB9Ugt/R3cnrgUzRJVaVXhktx3Iyn4nKYSq8EZCmAryHJCtQe6G08BkK5VyFfPhJseRAmhItsPcsJX/ymbHBZOdHJiVYKNCjZQy11HQg0xCInAZSceYSfCafw5m1yVKxMlZsMpVkh4g0YuoY6RIZLAYzimHxvlIWCY+3FQ6kSzIsQI5r6bclp3beKr2WTTPYoVmpHHvp91V0yfsZu0a0bZHNdZsdnf9q0i2n/M+IA5kY7bmPFAvKMldJ6Pbo1nHAul+cWd5iEtpueTZeoeO3ocBeCwaSWlYARZdLpcFuqSn8cBmuNNq1zqcnJ/1aIvSV1U6AiKskQedEYlKa1irwZMcLsQEnXGuxqvLjijw++qdSQtrPr2c6876MPfjKDWfni2l0Pvl1E0+jP9PoZhpFF1GX3WKb1RQEhM8CrSUK+Qy8SIlP2ngBeW42z7DSIBJTlDmx9VWghJQYnRnmfGlcy3Ii8FiOoFQj1tmor4VR3ZG+IXtHOnySRGVzcs2oODcejTabzfC+Au3Vqps2aMi3XiVuaOy6R9O5NWmVBPxt0CCXy8mCLB/AKljmYYwN05NriPYUnT4Cl7tnyE4crMuVCbUrH95cHmESoFMxeQImFsbwbLmkFtXp8NPp8KSvqfnsXSA8tJzh/hNUEQfkXdMhCU3vtPljEs+FRyjo7b92irSh2OMsjm84zs3Z5Zd15pKPpSuCCdVJmkJi+kHGSUkTQ9HiP065Mma4BMvLI0y+AH3o2NuZR1o+akW959cb9m6n48DLMgfaoU0Hte6oeEX7QpHlbevw4moeP21hYkbGPCavul6Cw982bxq+JqrQWhhfXe/JFDibKsf/SQEryB2+Utz7qFvIH8TbFvqLtXaXoLeB5nnFJ/p7h9uDr0tzTaYZQkrcYtTt228tto8LjrH37u1X/kC0HhNia+kPbPcLgVW1Wwbzi5hlt+y2f0EbkW4tbPi7RL8BoglNCps13NUyB72uYM22bUx+/gJ8Fqpc",sidebar_class_name:"post api-method",info_path:"docs/api/quantification-and-analytics-tool",custom_edit_url:null},f=void 0,y={},J=[];function P(t){const e={p:"p",...(0,n.R)(),...t.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(h.default,{as:"h1",className:"openapi__heading",children:"Add attachment in Jira issue"}),"\n",(0,s.jsx)(o(),{method:"post",path:"/api/jira/addIssueAttachment/{issueId}",context:"endpoint"}),"\n",(0,s.jsx)(e.p,{children:"API used to add attachment in the issue in Jira"}),"\n",(0,s.jsx)(h.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,s.jsx)(r(),{parameters:[{name:"issueId",in:"path",description:"Issue id for which attachment needs to be added for",required:!0,schema:{type:"string"}},{name:"file",description:"Attachment which needs to be added in Jira issue"}]}),"\n",(0,s.jsx)(p(),{title:"Body",body:{description:"Attachment which needs to be added in Jira issue",content:{"application/json":{schema:{type:"object",properties:{file:{type:"string",format:"binary"}}}}}}}),"\n",(0,s.jsx)(m(),{id:void 0,label:void 0,responses:{200:{description:"Returns a Success code if the operation was successful",content:{"text/json":{}}},500:{description:"Returns a HttpStatus.INTERNAL_SERVER_ERROR if there was some other error that did not allow the operation to complete",content:{"text/json":{}}}}})]})}function S(t={}){const{wrapper:e}={...(0,n.R)(),...t.components};return e?(0,s.jsx)(e,{...t,children:(0,s.jsx)(P,{...t})}):P(t)}}}]);