"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[667],{42887:(t,i,e)=>{e.r(i),e.d(i,{assets:()=>g,contentTitle:()=>y,default:()=>j,frontMatter:()=>h,metadata:()=>n,toc:()=>R});const n=JSON.parse('{"id":"api/send-notification","title":"send notification for commit","description":"API used to send notification once commit is success.","source":"@site/docs/api/send-notification.api.mdx","sourceDirName":"api","slug":"/api/send-notification","permalink":"/fasp-documentation/docs/api/send-notification","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"id":"send-notification","title":"send notification for commit","description":"API used to send notification once commit is success.","sidebar_label":"send notification for commit","hide_title":true,"hide_table_of_contents":true,"api":"eJydVMFu2zAM/RVBl21AlnQZdsmpOWxrL0PbdKciKBibidXZkirRyQLD/z5SdtvEKQqsJ9syH/nI98RGE2yint3pzFWVoRt8rDGSXo50jjELxpNxVs/0/OpS1RFzRU5FtLmyjszaZCD/lbMZqi6DMlHFOsswxrEeaecxpJjLnLMI8tcBkAM8BKiQMAiLRlv+4MAjNgwdaSMsPFChh9QGsYoKILV3tdqBpUO+7pnv2gVOExhiAjIxCjWOdMwKrEDPGk17LyyMJdyghDKgAuqOvk512y4FHr2zEaMgpmdn8jhmdoNUBxufJhM6iqo0POER8+b0llI9/EuThyigpm3bkf72WrpLjg8WSoUhuND16QNuOYkIUyBXoIBmyyFuPazqVg+YvV2XC7MUhROpNkhJHR74TE/Am8lQvEkzmHzLgIhh+6RlHUrGFkQ+ziaT3W43fqxZkucEwL3syWRx7MLmRNar4PI6S3J1SUU1dT2/5cgtBAOrMo0+aWHs2qWGDJWi3PVRIQVsgPlTNXXrXClJmGdXajr+Mh2fnTBgz3+IYiBIdk4T5vpqkej0k4QsTbL37Y/54koRQsV//7d99p4RxMVicS957i+uzzdFzD77WKUQlqc0GbLlDirOPbBtVcf/uOTaufEKghZdvYtUgT0Ant5imW8n6XAUzYtp3r0J+juVLOdL4Pvc9oSb3mZ3mm2WPHSyJWbDhcCaF9ySgJpmBRF/h7Jt5Zgjwp7Ply82SW7MTZR39vYayohvdPjxpl8Mn9S7d8ur3faHYPfJw2UtX/z6B/ev7Lx2yZACIWevSQNd1JwH6ukA/3KH5SI839+f329Z+H8dpwzv","sidebar_class_name":"get api-method","info_path":"docs/api/quantification-and-analytics-tool","custom_edit_url":null},"sidebar":"api-latest","previous":{"title":"Get Commit Request list","permalink":"/fasp-documentation/docs/api/get-program-data-commit-request"},"next":{"title":"Get active Country list","permalink":"/fasp-documentation/docs/api/get-country-list"}}');var o=e(74848),s=e(28453),a=e(57742),d=e.n(a),c=e(78178),r=e.n(c),m=e(19624),p=e.n(m),l=e(96226),u=e.n(l),f=(e(77675),e(19365),e(51107));const h={id:"send-notification",title:"send notification for commit",description:"API used to send notification once commit is success.",sidebar_label:"send notification for commit",hide_title:!0,hide_table_of_contents:!0,api:"eJydVMFu2zAM/RVBl21AlnQZdsmpOWxrL0PbdKciKBibidXZkirRyQLD/z5SdtvEKQqsJ9syH/nI98RGE2yint3pzFWVoRt8rDGSXo50jjELxpNxVs/0/OpS1RFzRU5FtLmyjszaZCD/lbMZqi6DMlHFOsswxrEeaecxpJjLnLMI8tcBkAM8BKiQMAiLRlv+4MAjNgwdaSMsPFChh9QGsYoKILV3tdqBpUO+7pnv2gVOExhiAjIxCjWOdMwKrEDPGk17LyyMJdyghDKgAuqOvk512y4FHr2zEaMgpmdn8jhmdoNUBxufJhM6iqo0POER8+b0llI9/EuThyigpm3bkf72WrpLjg8WSoUhuND16QNuOYkIUyBXoIBmyyFuPazqVg+YvV2XC7MUhROpNkhJHR74TE/Am8lQvEkzmHzLgIhh+6RlHUrGFkQ+ziaT3W43fqxZkucEwL3syWRx7MLmRNar4PI6S3J1SUU1dT2/5cgtBAOrMo0+aWHs2qWGDJWi3PVRIQVsgPlTNXXrXClJmGdXajr+Mh2fnTBgz3+IYiBIdk4T5vpqkej0k4QsTbL37Y/54koRQsV//7d99p4RxMVicS957i+uzzdFzD77WKUQlqc0GbLlDirOPbBtVcf/uOTaufEKghZdvYtUgT0Ant5imW8n6XAUzYtp3r0J+juVLOdL4Pvc9oSb3mZ3mm2WPHSyJWbDhcCaF9ySgJpmBRF/h7Jt5Zgjwp7Ply82SW7MTZR39vYayohvdPjxpl8Mn9S7d8ur3faHYPfJw2UtX/z6B/ev7Lx2yZACIWevSQNd1JwH6ukA/3KH5SI839+f329Z+H8dpwzv",sidebar_class_name:"get api-method",info_path:"docs/api/quantification-and-analytics-tool",custom_edit_url:null},y=void 0,g={},R=[];function M(t){const i={p:"p",...(0,s.R)(),...t.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(f.default,{as:"h1",className:"openapi__heading",children:"send notification for commit"}),"\n",(0,o.jsx)(d(),{method:"get",path:"/api/sendNotification/{commitRequestId}",context:"endpoint"}),"\n",(0,o.jsx)(i.p,{children:"API used to send notification once commit is success."}),"\n",(0,o.jsx)(f.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,o.jsx)(r(),{parameters:[{name:"commitRequestId",in:"path",description:"commitRequestId that you want to send notofication for",required:!0,schema:{type:"integer",format:"int32"}}]}),"\n",(0,o.jsx)(p(),{title:"Body",body:void 0}),"\n",(0,o.jsx)(u(),{id:void 0,label:void 0,responses:{200:{description:"Returns commit request list",content:{"text/json":{}}},500:{description:"Internal error that prevented the retreival of commit request object",content:{"text/json":{}}}}})]})}function j(t={}){const{wrapper:i}={...(0,s.R)(),...t.components};return i?(0,o.jsx)(i,{...t,children:(0,o.jsx)(M,{...t})}):M(t)}}}]);