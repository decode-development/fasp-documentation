"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[79013],{50249:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>j,default:()=>P,frontMatter:()=>f,metadata:()=>r,toc:()=>R});const r=JSON.parse('{"id":"api/get-procurement-agent-for-realm","title":"Get ProcurementAgent list for Realm","description":"API used to get the ProcurementAgent list for a Realm","source":"@site/docs/api/get-procurement-agent-for-realm.api.mdx","sourceDirName":"api","slug":"/api/get-procurement-agent-for-realm","permalink":"/fasp-documentation/docs/api/get-procurement-agent-for-realm","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"id":"get-procurement-agent-for-realm","title":"Get ProcurementAgent list for Realm","description":"API used to get the ProcurementAgent list for a Realm","sidebar_label":"Get ProcurementAgent list for Realm","hide_title":true,"hide_table_of_contents":true,"api":"eJydVE1z2jAQ/SsaXdrOUExJeuFUdxISLvng45RhMht7jdXaliLJEMbj/96VbCeEQNPmApK8b9/T6u1W3MLK8NEdV1pGpcYcCxuu6IcvezxGE2mhrJAFH/HwZsJKgzGzkq3QMpsiu9lDsUwYyxKpGbApQpbzHpcKNbgck5iyEHIfNJa6i1WgIUeL2mmqeEEbwmj3ldA9LpwQBTbl++qmTQypAsu2smQbIDkk9aBMUkgZND6WQiPJsrrEHjdRijnwUcXtVjliUVhcoQslQA62OToZ8rpeOrhRsjBoHGI4GLi/fVG21IU5XirKHEkioXo7VnyywS/joFVd1z1+Ojg5nhTYpbVqZsGWpj++nv6cnJ2dXzGReLqFQc1iiYYV0rIU1sggitCYdylP/5Hy6np+P75eXJ11lN0TGIWRSAQ55Zkfn96/7PdDFZxQvC4gY6g1ucq/rtK4piTOicSq0WoUawqRyQeKTMRkuFS23vQeJHuNeABKBPtdEbRWDKp2UROAKr3uHFvqjLApVcmMgmCz2fQfSzIilSPyPQB0l60VkelLvXpjYpIfl5HbsCapb6XbcE6Ra9ACHjLvNm8/USTSX0jYzJn19hURgyJmYcfG5lJmLgnpbKiG/W/D/uCNAmryT8a1TWMWX2HiZzMvp60kRL6SbXeOw9kNswiuf//3+tRuwiEuZ7N7l+f+8vbHKjXRV2VyH0LPk4kIqct2GEMF1Kms0f+aMpGy/wCau3dV0tgcih3gBY2t4yOrG0KvKlK9eOfDE7CdJt55KgMaYnWru2rddsfJbc57+1O4tzP8Rt2SHj+luzlYVT2AwYXO6todP5aot3S+fPGLt2UsjFuTyRPIDP7ljp+n7VD8wj4yUg9etT2EYut9nJVuR8vfuN2Z7vWSQlOEmHzmNDdfQ/Khsju4l/51TfDcuxfnc3r0P4LlW9M=","sidebar_class_name":"get api-method","info_path":"docs/api/quantification-and-analytics-tool","custom_edit_url":null},"sidebar":"api-latest","previous":{"title":"Get ProcurementAgent by display name","permalink":"/fasp-documentation/docs/api/get-procurement-agent-display-name"},"next":{"title":"Update ProcurementAgent PlanningUnits","permalink":"/fasp-documentation/docs/api/save-planning-unit-for-procurement-agent"}}');var a=n(74848),i=n(28453),s=n(57742),o=n.n(s),l=n(78178),c=n.n(l),p=n(19624),u=n.n(p),d=n(96226),m=n.n(d),g=(n(77675),n(19365),n(51107));const f={id:"get-procurement-agent-for-realm",title:"Get ProcurementAgent list for Realm",description:"API used to get the ProcurementAgent list for a Realm",sidebar_label:"Get ProcurementAgent list for Realm",hide_title:!0,hide_table_of_contents:!0,api:"eJydVE1z2jAQ/SsaXdrOUExJeuFUdxISLvng45RhMht7jdXaliLJEMbj/96VbCeEQNPmApK8b9/T6u1W3MLK8NEdV1pGpcYcCxuu6IcvezxGE2mhrJAFH/HwZsJKgzGzkq3QMpsiu9lDsUwYyxKpGbApQpbzHpcKNbgck5iyEHIfNJa6i1WgIUeL2mmqeEEbwmj3ldA9LpwQBTbl++qmTQypAsu2smQbIDkk9aBMUkgZND6WQiPJsrrEHjdRijnwUcXtVjliUVhcoQslQA62OToZ8rpeOrhRsjBoHGI4GLi/fVG21IU5XirKHEkioXo7VnyywS/joFVd1z1+Ojg5nhTYpbVqZsGWpj++nv6cnJ2dXzGReLqFQc1iiYYV0rIU1sggitCYdylP/5Hy6np+P75eXJ11lN0TGIWRSAQ55Zkfn96/7PdDFZxQvC4gY6g1ucq/rtK4piTOicSq0WoUawqRyQeKTMRkuFS23vQeJHuNeABKBPtdEbRWDKp2UROAKr3uHFvqjLApVcmMgmCz2fQfSzIilSPyPQB0l60VkelLvXpjYpIfl5HbsCapb6XbcE6Ra9ACHjLvNm8/USTSX0jYzJn19hURgyJmYcfG5lJmLgnpbKiG/W/D/uCNAmryT8a1TWMWX2HiZzMvp60kRL6SbXeOw9kNswiuf//3+tRuwiEuZ7N7l+f+8vbHKjXRV2VyH0LPk4kIqct2GEMF1Kms0f+aMpGy/wCau3dV0tgcih3gBY2t4yOrG0KvKlK9eOfDE7CdJt55KgMaYnWru2rddsfJbc57+1O4tzP8Rt2SHj+luzlYVT2AwYXO6todP5aot3S+fPGLt2UsjFuTyRPIDP7ljp+n7VD8wj4yUg9etT2EYut9nJVuR8vfuN2Z7vWSQlOEmHzmNDdfQ/Khsju4l/51TfDcuxfnc3r0P4LlW9M=",sidebar_class_name:"get api-method",info_path:"docs/api/quantification-and-analytics-tool",custom_edit_url:null},j=void 0,h={},R=[];function b(e){const t={p:"p",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(g.default,{as:"h1",className:"openapi__heading",children:"Get ProcurementAgent list for Realm"}),"\n",(0,a.jsx)(o(),{method:"get",path:"/api/procurementAgent/realmId/{realmId}",context:"endpoint"}),"\n",(0,a.jsx)(t.p,{children:"API used to get the ProcurementAgent list for a Realm"}),"\n",(0,a.jsx)(g.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,a.jsx)(c(),{parameters:[{name:"realmId",in:"path",description:"RealmId that you want to the ProcurementAgent for",required:!0,schema:{type:"integer",format:"int32"}}]}),"\n",(0,a.jsx)(u(),{title:"Body",body:void 0}),"\n",(0,a.jsx)(m(),{id:void 0,label:void 0,responses:{200:{description:"Returns the ProcurementAgent list",content:{"text/json":{}}},403:{description:"Returns a HttpStatus.FORBIDDEN if the User does not have access",content:{"text/json":{}}},404:{description:"Returns a HttpStatus.NOT_FOUND if the RealmId specified does not exist",content:{"text/json":{}}},500:{description:"Internal error that prevented the retreival of ProcurementAgent list",content:{"text/json":{}}}}})]})}function P(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(b,{...e})}):b(e)}}}]);