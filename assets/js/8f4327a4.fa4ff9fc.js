"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[26664],{94256:(t,i,n)=>{n.r(i),n.d(i,{assets:()=>f,contentTitle:()=>h,default:()=>R,frontMatter:()=>y,metadata:()=>e,toc:()=>g});const e=JSON.parse('{"id":"api/get-unit-by-dimension","title":"Get unit list by dimensionId","description":"API used to get unit list by providing dimensionId","source":"@site/docs/api/get-unit-by-dimension.api.mdx","sourceDirName":"api","slug":"/api/get-unit-by-dimension","permalink":"/fasp-documentation/docs/api/get-unit-by-dimension","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"id":"get-unit-by-dimension","title":"Get unit list by dimensionId","description":"API used to get unit list by providing dimensionId","sidebar_label":"Get unit list by dimensionId","hide_title":true,"hide_table_of_contents":true,"api":"eJydVMFu2zAM/RVBl21AlnQZdvFpGba1vbVNeyqCgrGZWJstqRKdzDD87yNtt7XbYth2iS3nPfKRfFSjCfZRJ7e6sob0ZqYzjGkwnoyzOtGri3NVRcwUObVHUoJShYmktrXywR1MZuxeZaZEG5lynumZdh4DUH9KNNNumPWl/voAYoiHACUSBsndaMsHhk7DGBHggXL9XNUIpygHUrWr1BEsiUzKcSRz5wLTA95XJiDLoVDhTMc0xxJ00miqvWQ2lnCPAmVCCdR/+rjUbbsRevTORozCWJ6cyGOq6AqpCjZOk3O01HFgS10m/EWLH1HgTdu2M/3ptUDnjA8WCoUhuNBX5wMeOIhMgcMHpIDmwBC3+8tcnIybnbthHF3/ua2JXoA3C4nR/zz2ddGMWtwyPmI4PAyrCgVTcyIfk8XieDzO7yvuvdmZtJs6sPyaTBrnLuxfzO4iuKxK5aD6oDIidbm6ZuQBgoFt0fW5a7yxO9fVY6iQMV1OEimwmVo9ZFPXzhUShHX2qZbzD8v5yQsF7Ok3UZwCaYqxnxnnV+tOztBISLtGDsb8vlpfKEIo+d9/LZ+NZoRxtl7fSZy7s8vP+zym730sOwhPpzApdxtHGVce2KOq1z9NuXNuvoWgZazeRSrBjoinz7d0ulSTVjRPnvm/TR+2p7ObL4A3th3UNoPFbjVbTEqQ6+XxkY2ugmQckmeec0nCa5otRLwJRdvK5/sKQ83fN0826dyYmSjvbO0dFBH/UOHbq+EWeKf++QJ5tdDhI9i6825RyYlff2L97DJrNwzPETL2l4juESv2n6cR92ltxfyPK3v67ZqH/RtREvUJ","sidebar_class_name":"get api-method","info_path":"docs/api/quantification-and-analytics-tool","custom_edit_url":null},"sidebar":"api-latest","previous":{"title":"Add Unit","permalink":"/fasp-documentation/docs/api/add-unit"},"next":{"title":"Get active UsagePeriod list","permalink":"/fasp-documentation/docs/api/get-usage-period-list"}}');var s=n(74848),d=n(28453),o=n(57742),a=n.n(o),u=n(78178),l=n.n(u),r=n(19624),m=n.n(r),c=n(96226),p=n.n(c),b=(n(77675),n(19365),n(51107));const y={id:"get-unit-by-dimension",title:"Get unit list by dimensionId",description:"API used to get unit list by providing dimensionId",sidebar_label:"Get unit list by dimensionId",hide_title:!0,hide_table_of_contents:!0,api:"eJydVMFu2zAM/RVBl21AlnQZdvFpGba1vbVNeyqCgrGZWJstqRKdzDD87yNtt7XbYth2iS3nPfKRfFSjCfZRJ7e6sob0ZqYzjGkwnoyzOtGri3NVRcwUObVHUoJShYmktrXywR1MZuxeZaZEG5lynumZdh4DUH9KNNNumPWl/voAYoiHACUSBsndaMsHhk7DGBHggXL9XNUIpygHUrWr1BEsiUzKcSRz5wLTA95XJiDLoVDhTMc0xxJ00miqvWQ2lnCPAmVCCdR/+rjUbbsRevTORozCWJ6cyGOq6AqpCjZOk3O01HFgS10m/EWLH1HgTdu2M/3ptUDnjA8WCoUhuNBX5wMeOIhMgcMHpIDmwBC3+8tcnIybnbthHF3/ua2JXoA3C4nR/zz2ddGMWtwyPmI4PAyrCgVTcyIfk8XieDzO7yvuvdmZtJs6sPyaTBrnLuxfzO4iuKxK5aD6oDIidbm6ZuQBgoFt0fW5a7yxO9fVY6iQMV1OEimwmVo9ZFPXzhUShHX2qZbzD8v5yQsF7Ok3UZwCaYqxnxnnV+tOztBISLtGDsb8vlpfKEIo+d9/LZ+NZoRxtl7fSZy7s8vP+zym730sOwhPpzApdxtHGVce2KOq1z9NuXNuvoWgZazeRSrBjoinz7d0ulSTVjRPnvm/TR+2p7ObL4A3th3UNoPFbjVbTEqQ6+XxkY2ugmQckmeec0nCa5otRLwJRdvK5/sKQ83fN0826dyYmSjvbO0dFBH/UOHbq+EWeKf++QJ5tdDhI9i6825RyYlff2L97DJrNwzPETL2l4juESv2n6cR92ltxfyPK3v67ZqH/RtREvUJ",sidebar_class_name:"get api-method",info_path:"docs/api/quantification-and-analytics-tool",custom_edit_url:null},h=void 0,f={},g=[];function v(t){const i={p:"p",...(0,d.R)(),...t.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(b.default,{as:"h1",className:"openapi__heading",children:"Get unit list by dimensionId"}),"\n",(0,s.jsx)(a(),{method:"get",path:"/api/unit/unit/dimension/{dimensionId}",context:"endpoint"}),"\n",(0,s.jsx)(i.p,{children:"API used to get unit list by providing dimensionId"}),"\n",(0,s.jsx)(b.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,s.jsx)(l(),{parameters:[{name:"dimensionId",in:"path",description:"dimensionId that you want to the unit list for",required:!0,schema:{type:"integer",format:"int32"}}]}),"\n",(0,s.jsx)(m(),{title:"Body",body:void 0}),"\n",(0,s.jsx)(p(),{id:void 0,label:void 0,responses:{200:{description:"Returns the unit list",content:{"text/json":{}}},500:{description:"Internal error that prevented the retreival of unit list",content:{"text/json":{}}}}})]})}function R(t={}){const{wrapper:i}={...(0,d.R)(),...t.components};return i?(0,s.jsx)(i,{...t,children:(0,s.jsx)(v,{...t})}):v(t)}}}]);