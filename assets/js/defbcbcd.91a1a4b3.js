"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[11564],{76968:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>b,contentTitle:()=>J,default:()=>R,frontMatter:()=>f,metadata:()=>n,toc:()=>S});const n=JSON.parse('{"id":"api/get-pipeline-shipmentdata","title":"Get Pipeline Shipment Data","description":"API used to get pipeline shipment data by pipelineId","source":"@site/docs/api/get-pipeline-shipmentdata.api.mdx","sourceDirName":"api","slug":"/api/get-pipeline-shipmentdata","permalink":"/fasp-documentation/docs/api/get-pipeline-shipmentdata","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"id":"get-pipeline-shipmentdata","title":"Get Pipeline Shipment Data","description":"API used to get pipeline shipment data by pipelineId","sidebar_label":"Get Pipeline Shipment Data","hide_title":true,"hide_table_of_contents":true,"api":"eJydVd9v2jAQ/lcsv2yTGDDavfA0JmiLNEGb0L1UCB3JQbwlsWs7ZSjK/76zSfjRbnTdE7Zzd993d98dJbewNrz/wJVQmIoc+bzFYzSRFsoKmfM+H9yOWWEwZlayNVrWWDKTCJVhblkMFthyu/8yjnmLS4UaXAi69Tk53tZfw9rNeZGdAg0ZWtSORslzupD9SSjhaCiwCX/O7XZvxlZSs00iooRtZcFyJMKnBMmA/DU+FkIjcbK6wBY3UYIZ8H7J7VY5ZJFbXKMzJYcM7O7poserau7cjZK5QeM8et2u+zmlFKAtdG4Y/K1QYsVsgmxfH7YBw0wRRWjMqkgJOJLEIbeeFP6ynR/GRS6rqmrxy+7FOcwba1VowRamfTUNvo6Hw9GkQbw3qFks0bBcWpbAEzLwqK9CXv4j5GQ6W1xN7yfDBjJ83gH/ahRGYiWoQ4c2H4jhL2HsK5Q+n6/8EaXxZDYKJoNvi3AUfB8Fi1EQTIOansZd7WVG7XB3hlp7jkCMRezpQJrKzbOO0SREMlMpyfYsUWJK0k5kPQFe7aTiPu+AEp0m+U6jj055qEdFxtSvp2YuCp2SX0KJmX6ns9ls2o8F5JbKGHlOkEO6tSIybanXL+dEy7iIPPddUN+Lu8GMLJ9AC1imXtJe4yJfSZ+MsKmbiLsTIAZ5zAYNGptJ6STreO6geu1PvXb3BQPaIu+MK9xOcr6ghM9CT6euIkS+ivUOuBqEt8wiZPT1renTTAvncROGCxdncXP3ZZ2Y6KMymTeh1qQiQhrlI8SBAloHbMf/FHIlZXsJmrueKmlsBvmR4zXtxWYXHUQ/3G24k0KUB7n872atF5XXmkqBtmNVsy1rfT1w0pdTW7PUSUt1SDr2j6JRuxPKxrmU5RIM3uu0qtzzY4F6S+/zg0K8EGNh3JkkvYLU4Jn03gf1rv3A3r6n/5hk/Qj51us2LdyNjj9xe/qfUc3JOkGISVqO9M5gQNJT9sj1MK5O9/tRvR7NqM+/AaMwdiI=","sidebar_class_name":"get api-method","info_path":"docs/api/quantification-and-analytics-tool","custom_edit_url":null},"sidebar":"api-latest","previous":{"title":"Get Pipeline Program List","permalink":"/fasp-documentation/docs/api/get-pipeline-program-list"},"next":{"title":"Save Shipment Data For Program","permalink":"/fasp-documentation/docs/api/save-shipment-data"}}');var a=i(74848),s=i(28453),p=i(57742),d=i.n(p),o=i(78178),l=i.n(o),r=i(19624),m=i.n(r),c=i(96226),u=i.n(c),h=(i(77675),i(19365),i(51107));const f={id:"get-pipeline-shipmentdata",title:"Get Pipeline Shipment Data",description:"API used to get pipeline shipment data by pipelineId",sidebar_label:"Get Pipeline Shipment Data",hide_title:!0,hide_table_of_contents:!0,api:"eJydVd9v2jAQ/lcsv2yTGDDavfA0JmiLNEGb0L1UCB3JQbwlsWs7ZSjK/76zSfjRbnTdE7Zzd993d98dJbewNrz/wJVQmIoc+bzFYzSRFsoKmfM+H9yOWWEwZlayNVrWWDKTCJVhblkMFthyu/8yjnmLS4UaXAi69Tk53tZfw9rNeZGdAg0ZWtSORslzupD9SSjhaCiwCX/O7XZvxlZSs00iooRtZcFyJMKnBMmA/DU+FkIjcbK6wBY3UYIZ8H7J7VY5ZJFbXKMzJYcM7O7poserau7cjZK5QeM8et2u+zmlFKAtdG4Y/K1QYsVsgmxfH7YBw0wRRWjMqkgJOJLEIbeeFP6ynR/GRS6rqmrxy+7FOcwba1VowRamfTUNvo6Hw9GkQbw3qFks0bBcWpbAEzLwqK9CXv4j5GQ6W1xN7yfDBjJ83gH/ahRGYiWoQ4c2H4jhL2HsK5Q+n6/8EaXxZDYKJoNvi3AUfB8Fi1EQTIOansZd7WVG7XB3hlp7jkCMRezpQJrKzbOO0SREMlMpyfYsUWJK0k5kPQFe7aTiPu+AEp0m+U6jj055qEdFxtSvp2YuCp2SX0KJmX6ns9ls2o8F5JbKGHlOkEO6tSIybanXL+dEy7iIPPddUN+Lu8GMLJ9AC1imXtJe4yJfSZ+MsKmbiLsTIAZ5zAYNGptJ6STreO6geu1PvXb3BQPaIu+MK9xOcr6ghM9CT6euIkS+ivUOuBqEt8wiZPT1renTTAvncROGCxdncXP3ZZ2Y6KMymTeh1qQiQhrlI8SBAloHbMf/FHIlZXsJmrueKmlsBvmR4zXtxWYXHUQ/3G24k0KUB7n872atF5XXmkqBtmNVsy1rfT1w0pdTW7PUSUt1SDr2j6JRuxPKxrmU5RIM3uu0qtzzY4F6S+/zg0K8EGNh3JkkvYLU4Jn03gf1rv3A3r6n/5hk/Qj51us2LdyNjj9xe/qfUc3JOkGISVqO9M5gQNJT9sj1MK5O9/tRvR7NqM+/AaMwdiI=",sidebar_class_name:"get api-method",info_path:"docs/api/quantification-and-analytics-tool",custom_edit_url:null},J=void 0,b={},S=[];function j(e){const t={p:"p",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(h.default,{as:"h1",className:"openapi__heading",children:"Get Pipeline Shipment Data"}),"\n",(0,a.jsx)(d(),{method:"get",path:"/api/pipeline/shipment/{pipelineId}",context:"endpoint"}),"\n",(0,a.jsx)(t.p,{children:"API used to get pipeline shipment data by pipelineId"}),"\n",(0,a.jsx)(h.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,a.jsx)(l(),{parameters:[{name:"pipelineId",in:"path",description:"PipelineId for which you need shipment data for",required:!0,schema:{type:"integer",format:"int32"}}]}),"\n",(0,a.jsx)(m(),{title:"Body",body:void 0}),"\n",(0,a.jsx)(u(),{id:void 0,label:void 0,responses:{200:{description:"Returns a pipeline shipment data if the operation was successful",content:{"text/json":{}}},403:{description:"Returns a HttpStatus.FORBIDDEN if the User does not have access",content:{"text/json":{}}},404:{description:"Returns a HttpStatus.NOT_FOUND if the Shipment data for the specified pipelineId does not exist",content:{"text/json":{}}},500:{description:"Returns a HttpStatus.INTERNAL_SERVER_ERROR if there was some other error that did not allow the operation to complete",content:{"text/json":{}}}}})]})}function R(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(j,{...e})}):j(e)}}}]);