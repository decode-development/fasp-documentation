"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[88893],{37292:(t,e,i)=>{i.r(e),i.d(e,{assets:()=>P,contentTitle:()=>h,default:()=>G,frontMatter:()=>v,metadata:()=>n,toc:()=>x});const n=JSON.parse('{"id":"api/get-dimension-all","title":"Get Dimension list","description":"API used to get the complete Dimension list.","source":"@site/docs/api/get-dimension-all.api.mdx","sourceDirName":"api","slug":"/api/get-dimension-all","permalink":"/fasp-documentation/docs/api/get-dimension-all","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"id":"get-dimension-all","title":"Get Dimension list","description":"API used to get the complete Dimension list.","sidebar_label":"Get Dimension list","hide_title":true,"hide_table_of_contents":true,"api":"eJyVU8GO2jAQ/RXLl15oQpF64dRIbXe5QaGn1WplnIG4dWyvPYGiKP/eGcNml24vnCLH8+a9efPcS1T7JOcPsjYtuGS8k48TWUPS0QTk41xWy4XoEtQCvdgDCmxAaN8GCwji6wtOWJOwkBPpA0TF0EVNYAKMJZW1dB8hBe8SEG0vZ9Mpf64JfwB20aVMdN2f4No7BIeMQviD5a/EmH4Yhon8/L9uC6qPTlkBMfpITRWKEOFATXgm4oiAEcyBSvzuFkJibAEbf5mTaoPChg6lCqYcHS1VnjtBPEBks3vZRUtlDWJI87I8Ho/Fc6ccmp3R2TpFek9odCp83Mt/F7KMvu40H8S5qdjRYKtqQ5UHFY3a2uzuMNAujdv5rN2gBQKvroiEcrWoXtjExnuWyjrPVLPi06yYvlNAkfiQOA9Ka0jnTRG/WGc5F9OUzqY51TLv92q9FAiqpdtbx4dWGUbcr9dP3OfpfvVl3yT9MaQ2l9AmrNFkN7xhrILSpOus/5py532xVVHyCoNP2Cr3BnhHIX8XgysD+tdU3Po88BSYI0cpWGUci8/q+kt8HiTFhxnHJzmRHCFaZkNauaDvtyrBz2iHgX8/dxBP9P/xdf98osYNqJoWwpn7DSdWSwsLmINiu1FIzjSnZczz3bcNufMX24xq8w==","sidebar_class_name":"get api-method","info_path":"docs/api/quantification-and-analytics-tool","custom_edit_url":null},"sidebar":"api-latest","previous":{"title":"Get Dimension for a DimensionId","permalink":"/fasp-documentation/docs/api/get-dimension"},"next":{"title":"Get active EquivalencyUnit list","permalink":"/fasp-documentation/docs/api/get-equivalency-unit-list"}}');var o=i(74848),s=i(28453),a=i(57742),l=i.n(a),d=i(78178),c=i.n(d),p=i(19624),r=i.n(p),m=i(96226),u=i.n(m),f=(i(77675),i(19365),i(51107));const v={id:"get-dimension-all",title:"Get Dimension list",description:"API used to get the complete Dimension list.",sidebar_label:"Get Dimension list",hide_title:!0,hide_table_of_contents:!0,api:"eJyVU8GO2jAQ/RXLl15oQpF64dRIbXe5QaGn1WplnIG4dWyvPYGiKP/eGcNml24vnCLH8+a9efPcS1T7JOcPsjYtuGS8k48TWUPS0QTk41xWy4XoEtQCvdgDCmxAaN8GCwji6wtOWJOwkBPpA0TF0EVNYAKMJZW1dB8hBe8SEG0vZ9Mpf64JfwB20aVMdN2f4No7BIeMQviD5a/EmH4Yhon8/L9uC6qPTlkBMfpITRWKEOFATXgm4oiAEcyBSvzuFkJibAEbf5mTaoPChg6lCqYcHS1VnjtBPEBks3vZRUtlDWJI87I8Ho/Fc6ccmp3R2TpFek9odCp83Mt/F7KMvu40H8S5qdjRYKtqQ5UHFY3a2uzuMNAujdv5rN2gBQKvroiEcrWoXtjExnuWyjrPVLPi06yYvlNAkfiQOA9Ka0jnTRG/WGc5F9OUzqY51TLv92q9FAiqpdtbx4dWGUbcr9dP3OfpfvVl3yT9MaQ2l9AmrNFkN7xhrILSpOus/5py532xVVHyCoNP2Cr3BnhHIX8XgysD+tdU3Po88BSYI0cpWGUci8/q+kt8HiTFhxnHJzmRHCFaZkNauaDvtyrBz2iHgX8/dxBP9P/xdf98osYNqJoWwpn7DSdWSwsLmINiu1FIzjSnZczz3bcNufMX24xq8w==",sidebar_class_name:"get api-method",info_path:"docs/api/quantification-and-analytics-tool",custom_edit_url:null},h=void 0,P={},x=[];function N(t){const e={p:"p",...(0,s.R)(),...t.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(f.default,{as:"h1",className:"openapi__heading",children:"Get Dimension list"}),"\n",(0,o.jsx)(l(),{method:"get",path:"/api/dimension/all",context:"endpoint"}),"\n",(0,o.jsx)(e.p,{children:"API used to get the complete Dimension list."}),"\n",(0,o.jsx)(c(),{parameters:void 0}),"\n",(0,o.jsx)(r(),{title:"Body",body:void 0}),"\n",(0,o.jsx)(u(),{id:void 0,label:void 0,responses:{200:{description:"Returns the Dimension list",content:{"text/json":{}}},500:{description:"Internal error that prevented the retreival of Dimension list",content:{"text/json":{}}}}})]})}function G(t={}){const{wrapper:e}={...(0,s.R)(),...t.components};return e?(0,o.jsx)(e,{...t,children:(0,o.jsx)(N,{...t})}):N(t)}}}]);