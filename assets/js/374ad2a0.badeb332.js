"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[81161],{83817:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>y,frontMatter:()=>o,metadata:()=>a,toc:()=>g});const a=JSON.parse('{"id":"api/schemas/problem","title":"Problem","description":"","source":"@site/docs/api/schemas/problem.schema.mdx","sourceDirName":"api/schemas","slug":"/api/schemas/problem","permalink":"/fasp-documentation/docs/api/schemas/problem","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"id":"problem","title":"Problem","description":"","sidebar_label":"Problem","hide_title":true,"hide_table_of_contents":true,"schema":true,"sample":{"createdBy":{"userId":0,"username":"string"},"createdDate":"2024-07-29T15:51:28.071Z","lastModifiedBy":{"userId":0,"username":"string"},"lastModifiedDate":"2024-07-29T15:51:28.071Z","active":true,"problemId":0,"label":{"createdBy":{"userId":0,"username":"string"},"createdDate":"2024-07-29T15:51:28.071Z","lastModifiedBy":{"userId":0,"username":"string"},"lastModifiedDate":"2024-07-29T15:51:28.071Z","active":true,"labelId":0,"label_en":"string","label_sp":"string","label_fr":"string","label_pr":"string","baseModel":{"createdBy":{"userId":0,"username":"string"},"createdDate":"2024-07-29T15:51:28.071Z","lastModifiedBy":{"userId":0,"username":"string"},"lastModifiedDate":"2024-07-29T15:51:28.071Z","active":true}},"problemCategory":{"id":0,"label":{"createdBy":{"userId":0,"username":"string"},"createdDate":"2024-07-29T15:51:28.071Z","lastModifiedBy":{"userId":0,"username":"string"},"lastModifiedDate":"2024-07-29T15:51:28.071Z","active":true,"labelId":0,"label_en":"string","label_sp":"string","label_fr":"string","label_pr":"string","baseModel":{"createdBy":{"userId":0,"username":"string"},"createdDate":"2024-07-29T15:51:28.071Z","lastModifiedBy":{"userId":0,"username":"string"},"lastModifiedDate":"2024-07-29T15:51:28.071Z","active":true}},"idString":"string"},"actionUrl":"string","actionLabel":{"createdBy":{"userId":0,"username":"string"},"createdDate":"2024-07-29T15:51:28.071Z","lastModifiedBy":{"userId":0,"username":"string"},"lastModifiedDate":"2024-07-29T15:51:28.071Z","active":true,"labelId":0,"label_en":"string","label_sp":"string","label_fr":"string","label_pr":"string","baseModel":{"createdBy":{"userId":0,"username":"string"},"createdDate":"2024-07-29T15:51:28.071Z","lastModifiedBy":{"userId":0,"username":"string"},"lastModifiedDate":"2024-07-29T15:51:28.071Z","active":true}},"actualConsumptionTrigger":true,"forecastedConsumptionTrigger":true,"inventoryTrigger":true,"adjustmentTrigger":true,"shipmentTrigger":true,"baseModel":{"createdBy":{"userId":0,"username":"string"},"createdDate":"2024-07-29T15:51:28.071Z","lastModifiedBy":{"userId":0,"username":"string"},"lastModifiedDate":"2024-07-29T15:51:28.071Z","active":true}},"custom_edit_url":null},"sidebar":"api-latest","previous":{"title":"InventoryBatchInfo","permalink":"/fasp-documentation/docs/api/schemas/inventorybatchinfo"},"next":{"title":"ProblemReport","permalink":"/fasp-documentation/docs/api/schemas/problemreport"}}');var i=r(74848),s=r(28453),n=r(50997),d=r.n(n),l=r(51107);const o={id:"problem",title:"Problem",description:"",sidebar_label:"Problem",hide_title:!0,hide_table_of_contents:!0,schema:!0,sample:{createdBy:{userId:0,username:"string"},createdDate:"2024-07-29T15:51:28.071Z",lastModifiedBy:{userId:0,username:"string"},lastModifiedDate:"2024-07-29T15:51:28.071Z",active:!0,problemId:0,label:{createdBy:{userId:0,username:"string"},createdDate:"2024-07-29T15:51:28.071Z",lastModifiedBy:{userId:0,username:"string"},lastModifiedDate:"2024-07-29T15:51:28.071Z",active:!0,labelId:0,label_en:"string",label_sp:"string",label_fr:"string",label_pr:"string",baseModel:{createdBy:{userId:0,username:"string"},createdDate:"2024-07-29T15:51:28.071Z",lastModifiedBy:{userId:0,username:"string"},lastModifiedDate:"2024-07-29T15:51:28.071Z",active:!0}},problemCategory:{id:0,label:{createdBy:{userId:0,username:"string"},createdDate:"2024-07-29T15:51:28.071Z",lastModifiedBy:{userId:0,username:"string"},lastModifiedDate:"2024-07-29T15:51:28.071Z",active:!0,labelId:0,label_en:"string",label_sp:"string",label_fr:"string",label_pr:"string",baseModel:{createdBy:{userId:0,username:"string"},createdDate:"2024-07-29T15:51:28.071Z",lastModifiedBy:{userId:0,username:"string"},lastModifiedDate:"2024-07-29T15:51:28.071Z",active:!0}},idString:"string"},actionUrl:"string",actionLabel:{createdBy:{userId:0,username:"string"},createdDate:"2024-07-29T15:51:28.071Z",lastModifiedBy:{userId:0,username:"string"},lastModifiedDate:"2024-07-29T15:51:28.071Z",active:!0,labelId:0,label_en:"string",label_sp:"string",label_fr:"string",label_pr:"string",baseModel:{createdBy:{userId:0,username:"string"},createdDate:"2024-07-29T15:51:28.071Z",lastModifiedBy:{userId:0,username:"string"},lastModifiedDate:"2024-07-29T15:51:28.071Z",active:!0}},actualConsumptionTrigger:!0,forecastedConsumptionTrigger:!0,inventoryTrigger:!0,adjustmentTrigger:!0,shipmentTrigger:!0,baseModel:{createdBy:{userId:0,username:"string"},createdDate:"2024-07-29T15:51:28.071Z",lastModifiedBy:{userId:0,username:"string"},lastModifiedDate:"2024-07-29T15:51:28.071Z",active:!0}},custom_edit_url:null},p=void 0,c={},g=[];function m(e){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(l.default,{as:"h1",className:"openapi__heading",children:"Problem"}),"\n",(0,i.jsx)(d(),{schema:{type:"object",properties:{createdBy:{type:"object",properties:{userId:{type:"integer",format:"int32"},username:{type:"string"}},title:"BasicUser"},createdDate:{type:"string",format:"date-time"},lastModifiedBy:{type:"object",properties:{userId:{type:"integer",format:"int32"},username:{type:"string"}},title:"BasicUser"},lastModifiedDate:{type:"string",format:"date-time"},active:{type:"boolean"},problemId:{type:"integer",format:"int32"},label:{type:"object",properties:{createdBy:{type:"object",properties:{userId:{type:"integer",format:"int32"},username:{type:"string"}},title:"BasicUser"},createdDate:{type:"string",format:"date-time"},lastModifiedBy:{type:"object",properties:{userId:{type:"integer",format:"int32"},username:{type:"string"}},title:"BasicUser"},lastModifiedDate:{type:"string",format:"date-time"},active:{type:"boolean"},labelId:{type:"integer",format:"int32"},label_en:{type:"string"},label_sp:{type:"string"},label_fr:{type:"string"},label_pr:{type:"string"},baseModel:{type:"object",properties:{createdBy:{type:"object",properties:{userId:{type:"integer",format:"int32"},username:{type:"string"}},title:"BasicUser"},createdDate:{type:"string",format:"date-time"},lastModifiedBy:{type:"object",properties:{userId:{type:"integer",format:"int32"},username:{type:"string"}},title:"BasicUser"},lastModifiedDate:{type:"string",format:"date-time"},active:{type:"boolean"},baseModel:"circular(BaseModel)"},title:"BaseModel"}},title:"Label"},problemCategory:{type:"object",properties:{id:{type:"integer",format:"int32"},label:{type:"object",properties:{createdBy:{type:"object",properties:{userId:{type:"integer",format:"int32"},username:{type:"string"}},title:"BasicUser"},createdDate:{type:"string",format:"date-time"},lastModifiedBy:{type:"object",properties:{userId:{type:"integer",format:"int32"},username:{type:"string"}},title:"BasicUser"},lastModifiedDate:{type:"string",format:"date-time"},active:{type:"boolean"},labelId:{type:"integer",format:"int32"},label_en:{type:"string"},label_sp:{type:"string"},label_fr:{type:"string"},label_pr:{type:"string"},baseModel:{type:"object",properties:{createdBy:{type:"object",properties:{userId:{type:"integer",format:"int32"},username:{type:"string"}},title:"BasicUser"},createdDate:{type:"string",format:"date-time"},lastModifiedBy:{type:"object",properties:{userId:{type:"integer",format:"int32"},username:{type:"string"}},title:"BasicUser"},lastModifiedDate:{type:"string",format:"date-time"},active:{type:"boolean"},baseModel:"circular(BaseModel)"},title:"BaseModel"}},title:"Label"},idString:{type:"string"}},title:"SimpleObject"},actionUrl:{type:"string"},actionLabel:{type:"object",properties:{createdBy:{type:"object",properties:{userId:{type:"integer",format:"int32"},username:{type:"string"}},title:"BasicUser"},createdDate:{type:"string",format:"date-time"},lastModifiedBy:{type:"object",properties:{userId:{type:"integer",format:"int32"},username:{type:"string"}},title:"BasicUser"},lastModifiedDate:{type:"string",format:"date-time"},active:{type:"boolean"},labelId:{type:"integer",format:"int32"},label_en:{type:"string"},label_sp:{type:"string"},label_fr:{type:"string"},label_pr:{type:"string"},baseModel:{type:"object",properties:{createdBy:{type:"object",properties:{userId:{type:"integer",format:"int32"},username:{type:"string"}},title:"BasicUser"},createdDate:{type:"string",format:"date-time"},lastModifiedBy:{type:"object",properties:{userId:{type:"integer",format:"int32"},username:{type:"string"}},title:"BasicUser"},lastModifiedDate:{type:"string",format:"date-time"},active:{type:"boolean"},baseModel:"circular(BaseModel)"},title:"BaseModel"}},title:"Label"},actualConsumptionTrigger:{type:"boolean"},forecastedConsumptionTrigger:{type:"boolean"},inventoryTrigger:{type:"boolean"},adjustmentTrigger:{type:"boolean"},shipmentTrigger:{type:"boolean"},baseModel:{type:"object",properties:{createdBy:{type:"object",properties:{userId:{type:"integer",format:"int32"},username:{type:"string"}},title:"BasicUser"},createdDate:{type:"string",format:"date-time"},lastModifiedBy:{type:"object",properties:{userId:{type:"integer",format:"int32"},username:{type:"string"}},title:"BasicUser"},lastModifiedDate:{type:"string",format:"date-time"},active:{type:"boolean"},baseModel:"circular(BaseModel)"},title:"BaseModel"}},title:"Problem"},schemaType:"response"})]})}function y(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(m,{...e})}):m()}}}]);