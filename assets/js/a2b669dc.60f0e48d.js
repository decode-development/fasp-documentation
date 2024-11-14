"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[17946],{70666:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>O,contentTitle:()=>u,default:()=>q,frontMatter:()=>y,metadata:()=>i,toc:()=>R});const i=JSON.parse('{"id":"api/get-organisation-display-name","title":"Get Organisation by display name","description":"API used to get the complete Organisation by providing the display name of the Organisation and the Realm","source":"@site/docs/api/get-organisation-display-name.api.mdx","sourceDirName":"api","slug":"/api/get-organisation-display-name","permalink":"/fasp-documentation/docs/api/get-organisation-display-name","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"id":"get-organisation-display-name","title":"Get Organisation by display name","description":"API used to get the complete Organisation by providing the display name of the Organisation and the Realm","sidebar_label":"Get Organisation by display name","hide_title":true,"hide_table_of_contents":true,"api":"eJy9VMFu2zAM/RVBl21AFncZdslpAbq1vWxt052KoGBsJtZmS6okJzMM//tI2W2cpBvWYtglkSWS75F8ZCMDrL2c3krj1qCVh6CMlouRzNCnTtn4OZWzywtRecxEMGKNQYQcRWpKW2BA8XXgKpa1sM5sVKb0OpplytsCaqGhRGFW8W7PA3QWL68RilKOpLHo4stFRsiENrQ+7aJ9oWBkasHRIaDjFBrJEOTiOBA5j6Ri7hZCLg8Tuu5sCBiCqE0ltqADZ3dEb2UceTu8r5RDYhRchSPp0xxLkNNGhtoyqNIB18im5FBC6K7eT2Tbjh6Z6Y7272mdDov1z7j54KgbxGTBxt4a7dHz++TkhP8OSxMqp/0RGiGlhrLUIYbGnyH57tmjaSlH+eGpWBdk7zQUAp0zrsvIOtxQEOy67jA4VBsyIW38NRzhUd9z0yskSoHKOZUJWJUMtZzQ80A0SS+OpOkPbcK1Thr+bSmOR7d50FPlCgqZh2D9NEm22+34vqJWqJVKY2ygzOqgUj8mxKNeXjqTVWnsUxeU2yWuZjdkuQGnYFnELsS2KL0yMU8VCm7Z1R5QnJHZA5q4MabgIMSzg5qM303GJ0cMaGpfeRYOpCn6rqOEL+aRTl9gSGOBe4V+ns0vRUDgQXxu+iQ6xR7n8/kdx7k7v/q4zn361voymlDXCpUiqW+AOLNAehUd/33IlTHjJTgeIWmNDyXogeMZ7aHD1TNcNoflaHZ6+q/7rB/CqGDypOFv+0SbXrW3klTLm29f/vvKjYP+sNimu2Of6jT+k5JyKhSHbJolePzmirbl6/sKXU33i534osYpHT7TIK2g8PiHmr2+7vfMG/Hc7flkCfpL0HUciKLiLzr+wHqwxHl7vojji1bpC4jGurcLsssRMhorrmr3NKOxs2HgtNtiPPOPG+zs0w1p/BcRPZ2u","sidebar_class_name":"get api-method","info_path":"docs/api/quantification-and-analytics-tool","custom_edit_url":null},"sidebar":"api-latest","previous":{"title":"Get Organisation list for RealmCountry","permalink":"/fasp-documentation/docs/api/get-organisation-by-realm-country"},"next":{"title":"Get Organisation for a OrganisationTypeId","permalink":"/fasp-documentation/docs/api/get-organisation-type"}}');var n=a(74848),s=a(28453),o=a(57742),r=a.n(o),l=a(78178),p=a.n(l),d=a(19624),m=a.n(d),c=a(96226),g=a.n(c),h=(a(77675),a(19365),a(51107));const y={id:"get-organisation-display-name",title:"Get Organisation by display name",description:"API used to get the complete Organisation by providing the display name of the Organisation and the Realm",sidebar_label:"Get Organisation by display name",hide_title:!0,hide_table_of_contents:!0,api:"eJy9VMFu2zAM/RVBl21AFncZdslpAbq1vWxt052KoGBsJtZmS6okJzMM//tI2W2cpBvWYtglkSWS75F8ZCMDrL2c3krj1qCVh6CMlouRzNCnTtn4OZWzywtRecxEMGKNQYQcRWpKW2BA8XXgKpa1sM5sVKb0OpplytsCaqGhRGFW8W7PA3QWL68RilKOpLHo4stFRsiENrQ+7aJ9oWBkasHRIaDjFBrJEOTiOBA5j6Ri7hZCLg8Tuu5sCBiCqE0ltqADZ3dEb2UceTu8r5RDYhRchSPp0xxLkNNGhtoyqNIB18im5FBC6K7eT2Tbjh6Z6Y7272mdDov1z7j54KgbxGTBxt4a7dHz++TkhP8OSxMqp/0RGiGlhrLUIYbGnyH57tmjaSlH+eGpWBdk7zQUAp0zrsvIOtxQEOy67jA4VBsyIW38NRzhUd9z0yskSoHKOZUJWJUMtZzQ80A0SS+OpOkPbcK1Thr+bSmOR7d50FPlCgqZh2D9NEm22+34vqJWqJVKY2ygzOqgUj8mxKNeXjqTVWnsUxeU2yWuZjdkuQGnYFnELsS2KL0yMU8VCm7Z1R5QnJHZA5q4MabgIMSzg5qM303GJ0cMaGpfeRYOpCn6rqOEL+aRTl9gSGOBe4V+ns0vRUDgQXxu+iQ6xR7n8/kdx7k7v/q4zn361voymlDXCpUiqW+AOLNAehUd/33IlTHjJTgeIWmNDyXogeMZ7aHD1TNcNoflaHZ6+q/7rB/CqGDypOFv+0SbXrW3klTLm29f/vvKjYP+sNimu2Of6jT+k5JyKhSHbJolePzmirbl6/sKXU33i534osYpHT7TIK2g8PiHmr2+7vfMG/Hc7flkCfpL0HUciKLiLzr+wHqwxHl7vojji1bpC4jGurcLsssRMhorrmr3NKOxs2HgtNtiPPOPG+zs0w1p/BcRPZ2u",sidebar_class_name:"get api-method",info_path:"docs/api/quantification-and-analytics-tool",custom_edit_url:null},u=void 0,O={},R=[];function b(t){const e={p:"p",...(0,s.R)(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(h.default,{as:"h1",className:"openapi__heading",children:"Get Organisation by display name"}),"\n",(0,n.jsx)(r(),{method:"get",path:"/api/organisation/getDisplayName/realmId/{realmId}/name/{name}",context:"endpoint"}),"\n",(0,n.jsx)(e.p,{children:"API used to get the complete Organisation by providing the display name of the Organisation and the Realm"}),"\n",(0,n.jsx)(h.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,n.jsx)(p(),{parameters:[{name:"realmId",in:"path",description:"RealmId that you want to the Organisation for",required:!0,schema:{type:"integer",format:"int32"}},{name:"name",in:"path",description:"Display name that you want to the Organisation for",required:!0,schema:{type:"string"}}]}),"\n",(0,n.jsx)(m(),{title:"Body",body:void 0}),"\n",(0,n.jsx)(g(),{id:void 0,label:void 0,responses:{200:{description:"Returns the Organisation",content:{"text/json":{}}},500:{description:"Internal error that prevented the retreival of Organisation",content:{"text/json":{}}}}})]})}function q(t={}){const{wrapper:e}={...(0,s.R)(),...t.components};return e?(0,n.jsx)(e,{...t,children:(0,n.jsx)(b,{...t})}):b(t)}}}]);