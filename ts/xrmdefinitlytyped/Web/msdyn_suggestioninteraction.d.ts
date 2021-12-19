interface msdyn_suggestioninteraction_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_interactioncontext?: string | null;
  msdyn_interactiontype?: string | null;
  msdyn_suggestioninteractionid?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_suggestioninteraction_statecode | null;
  statuscode?: msdyn_suggestioninteraction_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_suggestioninteraction_Relationships {
  msdyn_suggestedentity_incident?: Incident_Result | null;
  msdyn_suggestedentity_knowledgearticle?: KnowledgeArticle_Result | null;
  msdyn_suggestionfor_incident?: Incident_Result | null;
  msdyn_suggestionfor_msdyn_ocliveworkitem?: msdyn_ocliveworkitem_Result | null;
  msdyn_suggestioninteraction_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_suggestioninteraction_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_suggestioninteraction_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_suggestioninteraction_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_suggestioninteraction_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_suggestioninteraction_SyncErrors?: SyncError_Result[] | null;
  msdyn_suggestioninteraction_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_suggestioninteraction extends msdyn_suggestioninteraction_Base, msdyn_suggestioninteraction_Relationships {
  msdyn_suggestedentity_incident_bind$incidents?: string | null;
  msdyn_suggestedentity_knowledgearticle_bind$knowledgearticles?: string | null;
  msdyn_suggestionfor_incident_bind$incidents?: string | null;
  msdyn_suggestionfor_msdyn_ocliveworkitem_bind$msdyn_ocliveworkitems?: string | null;
  msdyn_suggestionrequestpayload_bind$msdyn_suggestionrequestpayloads?: string | null;
}
interface msdyn_suggestioninteraction_Create extends msdyn_suggestioninteraction {
}
interface msdyn_suggestioninteraction_Update extends msdyn_suggestioninteraction {
}
interface msdyn_suggestioninteraction_Select {
  createdby_guid: WebAttribute<msdyn_suggestioninteraction_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_suggestioninteraction_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_suggestioninteraction_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_suggestioninteraction_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_suggestioninteraction_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_suggestioninteraction_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_suggestioninteraction_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_interactioncontext: WebAttribute<msdyn_suggestioninteraction_Select, { msdyn_interactioncontext: string | null }, {  }>;
  msdyn_interactiontype: WebAttribute<msdyn_suggestioninteraction_Select, { msdyn_interactiontype: string | null }, {  }>;
  msdyn_suggestedentity_guid: WebAttribute<msdyn_suggestioninteraction_Select, { msdyn_suggestedentity_guid: string | null }, { msdyn_suggestedentity_formatted?: string }>;
  msdyn_suggestionfor_guid: WebAttribute<msdyn_suggestioninteraction_Select, { msdyn_suggestionfor_guid: string | null }, { msdyn_suggestionfor_formatted?: string }>;
  msdyn_suggestioninteractionid: WebAttribute<msdyn_suggestioninteraction_Select, { msdyn_suggestioninteractionid: string | null }, {  }>;
  msdyn_suggestionrequestpayload_guid: WebAttribute<msdyn_suggestioninteraction_Select, { msdyn_suggestionrequestpayload_guid: string | null }, { msdyn_suggestionrequestpayload_formatted?: string }>;
  organizationid_guid: WebAttribute<msdyn_suggestioninteraction_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_suggestioninteraction_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  statecode: WebAttribute<msdyn_suggestioninteraction_Select, { statecode: msdyn_suggestioninteraction_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_suggestioninteraction_Select, { statuscode: msdyn_suggestioninteraction_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_suggestioninteraction_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_suggestioninteraction_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_suggestioninteraction_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_suggestioninteraction_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_interactioncontext: string;
  msdyn_interactiontype: string;
  msdyn_suggestedentity_guid: XQW.Guid;
  msdyn_suggestionfor_guid: XQW.Guid;
  msdyn_suggestioninteractionid: XQW.Guid;
  msdyn_suggestionrequestpayload_guid: XQW.Guid;
  organizationid_guid: XQW.Guid;
  overriddencreatedon: Date;
  statecode: msdyn_suggestioninteraction_statecode;
  statuscode: msdyn_suggestioninteraction_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_suggestioninteraction_Expand {
  createdby: WebExpand<msdyn_suggestioninteraction_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_suggestioninteraction_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_suggestioninteraction_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_suggestioninteraction_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_suggestedentity_incident: WebExpand<msdyn_suggestioninteraction_Expand, Incident_Select, Incident_Filter, { msdyn_suggestedentity_incident: Incident_Result }>;
  msdyn_suggestedentity_knowledgearticle: WebExpand<msdyn_suggestioninteraction_Expand, KnowledgeArticle_Select, KnowledgeArticle_Filter, { msdyn_suggestedentity_knowledgearticle: KnowledgeArticle_Result }>;
  msdyn_suggestionfor_incident: WebExpand<msdyn_suggestioninteraction_Expand, Incident_Select, Incident_Filter, { msdyn_suggestionfor_incident: Incident_Result }>;
  msdyn_suggestionfor_msdyn_ocliveworkitem: WebExpand<msdyn_suggestioninteraction_Expand, msdyn_ocliveworkitem_Select, msdyn_ocliveworkitem_Filter, { msdyn_suggestionfor_msdyn_ocliveworkitem: msdyn_ocliveworkitem_Result }>;
  msdyn_suggestioninteraction_AsyncOperations: WebExpand<msdyn_suggestioninteraction_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_suggestioninteraction_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_suggestioninteraction_BulkDeleteFailures: WebExpand<msdyn_suggestioninteraction_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_suggestioninteraction_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_suggestioninteraction_MailboxTrackingFolders: WebExpand<msdyn_suggestioninteraction_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_suggestioninteraction_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_suggestioninteraction_PrincipalObjectAttributeAccesses: WebExpand<msdyn_suggestioninteraction_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_suggestioninteraction_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_suggestioninteraction_ProcessSession: WebExpand<msdyn_suggestioninteraction_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_suggestioninteraction_ProcessSession: ProcessSession_Result[] }>;
  msdyn_suggestioninteraction_SyncErrors: WebExpand<msdyn_suggestioninteraction_Expand, SyncError_Select, SyncError_Filter, { msdyn_suggestioninteraction_SyncErrors: SyncError_Result[] }>;
  msdyn_suggestioninteraction_UserEntityInstanceDatas: WebExpand<msdyn_suggestioninteraction_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_suggestioninteraction_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_suggestionrequestpayload: WebExpand<msdyn_suggestioninteraction_Expand, msdyn_suggestionrequestpayload_Select, msdyn_suggestionrequestpayload_Filter, { msdyn_suggestionrequestpayload: msdyn_suggestionrequestpayload_Result }>;
  organizationid: WebExpand<msdyn_suggestioninteraction_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
}
interface msdyn_suggestioninteraction_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_suggestedentity_formatted?: string;
  msdyn_suggestionfor_formatted?: string;
  msdyn_suggestionrequestpayload_formatted?: string;
  organizationid_formatted?: string;
  overriddencreatedon_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_suggestioninteraction_Result extends msdyn_suggestioninteraction_Base, msdyn_suggestioninteraction_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_suggestedentity_guid: string | null;
  msdyn_suggestionfor_guid: string | null;
  msdyn_suggestionrequestpayload_guid: string | null;
  organizationid_guid: string | null;
}
interface msdyn_suggestioninteraction_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_suggestedentity_incident: WebMappingRetrieve<Incident_Select,Incident_Expand,Incident_Filter,Incident_Fixed,Incident_Result,Incident_FormattedResult>;
  msdyn_suggestedentity_knowledgearticle: WebMappingRetrieve<KnowledgeArticle_Select,KnowledgeArticle_Expand,KnowledgeArticle_Filter,KnowledgeArticle_Fixed,KnowledgeArticle_Result,KnowledgeArticle_FormattedResult>;
  msdyn_suggestionfor_incident: WebMappingRetrieve<Incident_Select,Incident_Expand,Incident_Filter,Incident_Fixed,Incident_Result,Incident_FormattedResult>;
  msdyn_suggestionfor_msdyn_ocliveworkitem: WebMappingRetrieve<msdyn_ocliveworkitem_Select,msdyn_ocliveworkitem_Expand,msdyn_ocliveworkitem_Filter,msdyn_ocliveworkitem_Fixed,msdyn_ocliveworkitem_Result,msdyn_ocliveworkitem_FormattedResult>;
  msdyn_suggestionrequestpayload: WebMappingRetrieve<msdyn_suggestionrequestpayload_Select,msdyn_suggestionrequestpayload_Expand,msdyn_suggestionrequestpayload_Filter,msdyn_suggestionrequestpayload_Fixed,msdyn_suggestionrequestpayload_Result,msdyn_suggestionrequestpayload_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
}
interface msdyn_suggestioninteraction_RelatedMany {
  msdyn_suggestioninteraction_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_suggestioninteraction_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_suggestioninteraction_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_suggestioninteraction_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_suggestioninteraction_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_suggestioninteraction_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_suggestioninteraction_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_suggestioninteractions: WebMappingRetrieve<msdyn_suggestioninteraction_Select,msdyn_suggestioninteraction_Expand,msdyn_suggestioninteraction_Filter,msdyn_suggestioninteraction_Fixed,msdyn_suggestioninteraction_Result,msdyn_suggestioninteraction_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_suggestioninteractions: WebMappingRelated<msdyn_suggestioninteraction_RelatedOne,msdyn_suggestioninteraction_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_suggestioninteractions: WebMappingCUDA<msdyn_suggestioninteraction_Create,msdyn_suggestioninteraction_Update,msdyn_suggestioninteraction_Select>;
}
