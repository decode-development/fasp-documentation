"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[34724],{34756:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>h,contentTitle:()=>g,default:()=>k,frontMatter:()=>I,metadata:()=>r,toc:()=>f});const r=JSON.parse('{"id":"api/rebuild-supply-plans","title":"To rebuild supply plan for listed programIds and versionIds ","description":"API is to rebuild supply plan for listed programIds and versionIds","source":"@site/docs/api/rebuild-supply-plans.api.mdx","sourceDirName":"api","slug":"/api/rebuild-supply-plans","permalink":"/fasp-documentation/docs/api/rebuild-supply-plans","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"id":"rebuild-supply-plans","title":"To rebuild supply plan for listed programIds and versionIds ","description":"API is to rebuild supply plan for listed programIds and versionIds","sidebar_label":"To rebuild supply plan for listed programIds and versionIds ","hide_title":true,"hide_table_of_contents":true,"api":"eJytVU1vGkEM/SujufRCgFL1wqm0apVIlUoC7QVFkdk17KS7O5MZLwSt9r/XnuU7NGrVckDMjO33bD+bWhMsgx7OdKicyzfjHEp939EphsQbR8aWeqhH4xtlgiKrPM4rk6eqtVaOzdXCepWbQJgq5+3SQ3GTBgVlqlboA0eQo+5o69ADxTPH3Eaa7GEDm3h8qjDQR5tu9LA+Y+FWXxklQim7eAXr9zwZIrElYUkSHvjNJJFS7zEIRq1DkmEB8os2DhkVvIcN+xnCIhzd2/kjJsQPzIMTI4Pxdc/qyNQw4hIFnCkUQO3Vu4FuOnpP+4/s2YEM5WI03gGNyvTHPkjTiI2U0XjkmOQrjBfB2TK0FAf9/svi3iFVvuTaZchFSxIMoYfec2sL/glLPC0d4TPtahYh318KesP2voRctZEoA+K24YqDsFgu9OhVEEYpkDIr6nE2xNoDZXzqgTO9g4B7F7UV0EuxWeu1rnzObhmRC8Neb71ed58qKMkstnIAJr0hk4Su9Ut9Pg5c+rRK5KDaoHEEbkdTtlyBNzDPY6WbhidJ+N8dZP35GQonDZydaKV/ooS+OJpyYWMVtg2/PWEYNT/a0VRTa3O9j8HWg+7bQbf/gjpP8ps4IBBbHNvNxNUk5rEtPySx/CUUgvtlNBkrQij49W/rxqNkxON6MnmQOA/Xtx+WWUiuXCiiCfeURxBZmkeIIwc8harlfwq5sLY7Bx8nQTRQQHnkOP23BXVSqvqgxP+0/7bTHVXNjqaU7GN69VbIM15JRqR62MWdS4uS1ZHJALBDXc8h4HefN41cs848r87Z/UGJcmKgDCHlDovufiKb6E9teldToSXmeRX33flSbDo7jxFrxtGR7WFARbD74Rx/m8gozLdbvLCpGHtYSzb8PdTx30Ag4kKKd7Xm1JaVbJqhbmPK5xc2t1AJ","sidebar_class_name":"post api-method","info_path":"docs/api/quantification-and-analytics-tool","custom_edit_url":null},"sidebar":"api-latest","previous":{"title":"To rebuild supply plan based on rebuild true or false ","permalink":"/fasp-documentation/docs/api/build-new-supply-plan"},"next":{"title":"Check for user access to specified programIds","permalink":"/fasp-documentation/docs/api/post-check-access-to-program"}}');var i=t(74848),a=t(28453),o=t(57742),n=t.n(o),d=t(78178),p=t.n(d),l=t(19624),u=t.n(l),c=t(96226),b=t.n(c),m=(t(77675),t(19365),t(51107));const I={id:"rebuild-supply-plans",title:"To rebuild supply plan for listed programIds and versionIds ",description:"API is to rebuild supply plan for listed programIds and versionIds",sidebar_label:"To rebuild supply plan for listed programIds and versionIds ",hide_title:!0,hide_table_of_contents:!0,api:"eJytVU1vGkEM/SujufRCgFL1wqm0apVIlUoC7QVFkdk17KS7O5MZLwSt9r/XnuU7NGrVckDMjO33bD+bWhMsgx7OdKicyzfjHEp939EphsQbR8aWeqhH4xtlgiKrPM4rk6eqtVaOzdXCepWbQJgq5+3SQ3GTBgVlqlboA0eQo+5o69ADxTPH3Eaa7GEDm3h8qjDQR5tu9LA+Y+FWXxklQim7eAXr9zwZIrElYUkSHvjNJJFS7zEIRq1DkmEB8os2DhkVvIcN+xnCIhzd2/kjJsQPzIMTI4Pxdc/qyNQw4hIFnCkUQO3Vu4FuOnpP+4/s2YEM5WI03gGNyvTHPkjTiI2U0XjkmOQrjBfB2TK0FAf9/svi3iFVvuTaZchFSxIMoYfec2sL/glLPC0d4TPtahYh318KesP2voRctZEoA+K24YqDsFgu9OhVEEYpkDIr6nE2xNoDZXzqgTO9g4B7F7UV0EuxWeu1rnzObhmRC8Neb71ed58qKMkstnIAJr0hk4Su9Ut9Pg5c+rRK5KDaoHEEbkdTtlyBNzDPY6WbhidJ+N8dZP35GQonDZydaKV/ooS+OJpyYWMVtg2/PWEYNT/a0VRTa3O9j8HWg+7bQbf/gjpP8ps4IBBbHNvNxNUk5rEtPySx/CUUgvtlNBkrQij49W/rxqNkxON6MnmQOA/Xtx+WWUiuXCiiCfeURxBZmkeIIwc8harlfwq5sLY7Bx8nQTRQQHnkOP23BXVSqvqgxP+0/7bTHVXNjqaU7GN69VbIM15JRqR62MWdS4uS1ZHJALBDXc8h4HefN41cs848r87Z/UGJcmKgDCHlDovufiKb6E9teldToSXmeRX33flSbDo7jxFrxtGR7WFARbD74Rx/m8gozLdbvLCpGHtYSzb8PdTx30Ag4kKKd7Xm1JaVbJqhbmPK5xc2t1AJ",sidebar_class_name:"post api-method",info_path:"docs/api/quantification-and-analytics-tool",custom_edit_url:null},g=void 0,h={},f=[];function x(e){const s={p:"p",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(m.default,{as:"h1",className:"openapi__heading",children:"To rebuild supply plan for listed programIds and versionIds "}),"\n",(0,i.jsx)(n(),{method:"post",path:"/api/supplyPlan/rebuildSupplyPlans",context:"endpoint"}),"\n",(0,i.jsx)(s.p,{children:"API is to rebuild supply plan for listed programIds and versionIds"}),"\n",(0,i.jsx)(m.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,i.jsx)(p(),{parameters:void 0}),"\n",(0,i.jsx)(u(),{title:"Body",body:{description:"pvList list of programIds and versionIds to rebuild supply plan for",content:{"application/json":{schema:{type:"array",items:{type:"object",properties:{programId:{type:"integer",format:"int32"},versionId:{type:"integer",format:"int32"}},title:"ProgramIdAndVersionId"}}}},required:!0}}),"\n",(0,i.jsx)(b(),{id:void 0,label:void 0,responses:{200:{description:"Returns the success/error message",content:{"text/json":{}}},500:{description:"Internal error that prevented rebuild supply plan",content:{"text/json":{}}}}})]})}function k(e={}){const{wrapper:s}={...(0,a.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(x,{...e})}):x(e)}}}]);