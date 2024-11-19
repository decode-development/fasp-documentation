"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[17448],{30644:(t,n,i)=>{i.r(n),i.d(n,{assets:()=>h,contentTitle:()=>R,default:()=>I,frontMatter:()=>g,metadata:()=>e,toc:()=>y});const e=JSON.parse('{"id":"api/get-planning-unit-for-program-list-1","title":"Get RealmCountryPlanningUnit list for a specific programIds","description":"API used to get RealmCountryPlanningUnit list for a specific programIds","source":"@site/docs/api/get-planning-unit-for-program-list-1.api.mdx","sourceDirName":"api","slug":"/api/get-planning-unit-for-program-list-1","permalink":"/fasp-documentation/docs/api/get-planning-unit-for-program-list-1","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"id":"get-planning-unit-for-program-list-1","title":"Get RealmCountryPlanningUnit list for a specific programIds","description":"API used to get RealmCountryPlanningUnit list for a specific programIds","sidebar_label":"Get RealmCountryPlanningUnit list for a specific programIds","hide_title":true,"hide_table_of_contents":true,"api":"eJytVU1z2jAQ/SsaXXpJgKTphVPJBw0znYTwccpkmMVesFpbUiQZynj4792VSTFJ26QfPjDY3t33dvXeupIBll5276VDyIsLU+rgNvLhSKboE6dsUEbLruwNB6L0mIpgxBKDGDWihzlorfRyqlUQufJBLIwTILzFRC1UIqwzSwfFIPXySBqLDrjqIKW6VKuZ3jduWAd/pjqzE4p3+FiiD+cm3chu9ZyWc7ARZtGAECGDIDamFGvQbyBKEInRAXXg8mBtrpLIr/3FM0YlfZJhAfwvbCwSKjAq5amAhW8898FRdbmlq+atHFKTwZUYH3hrtMeYcdrpvOxmhKF0mjvA3/M+5BzwW3giG6HPOu9/XRzEdQh2HCCUvtW/HZ0PLi+vboRaRNipRydSg15oE0QGKxSQJOj9q5Bnb4S8uZ3M+rfTm0uG1KZ5cgtqN30F6MPPBjegeKchF+gcSS8qwDpcURGWLPXlMDhUKwohsfz9bIlAgSEzLF1bcqyFkNFNG6xqNy3U3vfVtg0MSqERr9Cx6SpZupyyMxqP77bb6/W69ViSbNk2UYRAXW2CSnzLuKV87krySlomfCPqotF5d70JRa7AKZjnUW7bLRmauxjtzXT1DQqbI1t/p1uKUXphYtsq8Ct5d0BGgE5F74mRmBiTMxD1UtM5bZ2ctjovWNLueOd5cdRKiudBHMU4Ut7NG5I4bw0F4/Z746EICAW9/dMRkVcVZ1yPxzOuM7u++7jMfHJsfRFD6BDJ40hWbCD2LJDNRc3/EHJhTGsOTvLpW+NDAbqR+OmftuHBpKq98v7jwt0tp6hkUqLSPIDYYbVT7z2tPRVXbeMTQL02qxxomJSS0SA4s6rm4HHq8u2WH5O8KLd7/7AXIN8RYoaQ0mmz6L8ihciLutfjCfPj8LyMy/X5Bt4ePWX0SD82NGL37mSB/3DmcMoGmO++GIVJOdbBmluk366MnyFGiLs4PqskNbgsYcmxdUm+vgMnqoAu","sidebar_class_name":"put api-method","info_path":"docs/api/quantification-and-analytics-tool","custom_edit_url":null},"sidebar":"api-latest","previous":{"title":"Save PlanningUnit for RealmCountry","permalink":"/fasp-documentation/docs/api/save-planning-unit-for-country"},"next":{"title":"Get RealmCountry list for a specific realmId","permalink":"/fasp-documentation/docs/api/get-realm-country-by-realm-id"}}');var a=i(74848),r=i(28453),o=i(57742),s=i.n(o),p=i(78178),l=i.n(p),c=i(19624),d=i.n(c),u=i(96226),m=i.n(u),f=(i(77675),i(19365),i(51107));const g={id:"get-planning-unit-for-program-list-1",title:"Get RealmCountryPlanningUnit list for a specific programIds",description:"API used to get RealmCountryPlanningUnit list for a specific programIds",sidebar_label:"Get RealmCountryPlanningUnit list for a specific programIds",hide_title:!0,hide_table_of_contents:!0,api:"eJytVU1z2jAQ/SsaXXpJgKTphVPJBw0znYTwccpkmMVesFpbUiQZynj4792VSTFJ26QfPjDY3t33dvXeupIBll5276VDyIsLU+rgNvLhSKboE6dsUEbLruwNB6L0mIpgxBKDGDWihzlorfRyqlUQufJBLIwTILzFRC1UIqwzSwfFIPXySBqLDrjqIKW6VKuZ3jduWAd/pjqzE4p3+FiiD+cm3chu9ZyWc7ARZtGAECGDIDamFGvQbyBKEInRAXXg8mBtrpLIr/3FM0YlfZJhAfwvbCwSKjAq5amAhW8898FRdbmlq+atHFKTwZUYH3hrtMeYcdrpvOxmhKF0mjvA3/M+5BzwW3giG6HPOu9/XRzEdQh2HCCUvtW/HZ0PLi+vboRaRNipRydSg15oE0QGKxSQJOj9q5Bnb4S8uZ3M+rfTm0uG1KZ5cgtqN30F6MPPBjegeKchF+gcSS8qwDpcURGWLPXlMDhUKwohsfz9bIlAgSEzLF1bcqyFkNFNG6xqNy3U3vfVtg0MSqERr9Cx6SpZupyyMxqP77bb6/W69ViSbNk2UYRAXW2CSnzLuKV87krySlomfCPqotF5d70JRa7AKZjnUW7bLRmauxjtzXT1DQqbI1t/p1uKUXphYtsq8Ct5d0BGgE5F74mRmBiTMxD1UtM5bZ2ctjovWNLueOd5cdRKiudBHMU4Ut7NG5I4bw0F4/Z746EICAW9/dMRkVcVZ1yPxzOuM7u++7jMfHJsfRFD6BDJ40hWbCD2LJDNRc3/EHJhTGsOTvLpW+NDAbqR+OmftuHBpKq98v7jwt0tp6hkUqLSPIDYYbVT7z2tPRVXbeMTQL02qxxomJSS0SA4s6rm4HHq8u2WH5O8KLd7/7AXIN8RYoaQ0mmz6L8ihciLutfjCfPj8LyMy/X5Bt4ePWX0SD82NGL37mSB/3DmcMoGmO++GIVJOdbBmluk366MnyFGiLs4PqskNbgsYcmxdUm+vgMnqoAu",sidebar_class_name:"put api-method",info_path:"docs/api/quantification-and-analytics-tool",custom_edit_url:null},R=void 0,h={},y=[];function b(t){const n={p:"p",...(0,r.R)(),...t.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(f.default,{as:"h1",className:"openapi__heading",children:"Get RealmCountryPlanningUnit list for a specific programIds"}),"\n",(0,a.jsx)(s(),{method:"put",path:"/api/realmCountry/programIds/planningUnit",context:"endpoint"}),"\n",(0,a.jsx)(n.p,{children:"API used to get RealmCountryPlanningUnit list for a specific programIds"}),"\n",(0,a.jsx)(f.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,a.jsx)(l(),{parameters:void 0}),"\n",(0,a.jsx)(d(),{title:"Body",body:{description:"Array of programIds that you want RealmCountryPlanningUnit list for",content:{"application/json":{schema:{type:"array",items:{type:"string"}}}},required:!0}}),"\n",(0,a.jsx)(m(),{id:void 0,label:void 0,responses:{200:{description:"Returns the RealmCountryPlanningUnit list",content:{"text/json":{}}},403:{description:"Returns a HttpStatus.FORBIDDEN if the User does not have access",content:{"text/json":{}}},404:{description:"Returns a HttpStatus.NOT_FOUND if no programIds found",content:{"text/json":{}}},500:{description:"Internal error that prevented the retreival of RealmCountryPlanningUnit list",content:{"text/json":{}}}}})]})}function I(t={}){const{wrapper:n}={...(0,r.R)(),...t.components};return n?(0,a.jsx)(n,{...t,children:(0,a.jsx)(b,{...t})}):b(t)}}}]);