interface msdyn_suggestionrequestpayload_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_requestpayload?: string | null;
  msdyn_responsepayload?: string | null;
  msdyn_suggestedentitylogicalname?: string | null;
  msdyn_suggestionrequestpayloadid?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_suggestionrequestpayload_statecode | null;
  statuscode?: msdyn_suggestionrequestpayload_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_suggestionrequestpayload_Relationships {
  msdyn_msdyn_suggestionrequestpayload_msdyn_suggestioninteraction_SuggestionRequestPayload?: msdyn_suggestioninteraction_Result[] | null;
  msdyn_suggestionfor_incident?: Incident_Result | null;
  msdyn_suggestionfor_msdyn_ocliveworkitem?: msdyn_ocliveworkitem_Result | null;
  msdyn_suggestionrequestpayload_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_suggestionrequestpayload_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_suggestionrequestpayload_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_suggestionrequestpayload_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_suggestionrequestpayload_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_suggestionrequestpayload_SyncErrors?: SyncError_Result[] | null;
  msdyn_suggestionrequestpayload_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_suggestionrequestpayload extends msdyn_suggestionrequestpayload_Base, msdyn_suggestionrequestpayload_Relationships {
  msdyn_suggestionfor_incident_bind$incidents?: string | null;
  msdyn_suggestionfor_msdyn_ocliveworkitem_bind$msdyn_ocliveworkitems?: string | null;
}
interface msdyn_suggestionrequestpayload_Create extends msdyn_suggestionrequestpayload {
}
interface msdyn_suggestionrequestpayload_Update extends msdyn_suggestionrequestpayload {
}
interface msdyn_suggestionrequestpayload_Select {
  createdby_guid: WebAttribute<msdyn_suggestionrequestpayload_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_suggestionrequestpayload_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_suggestionrequestpayload_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_suggestionrequestpayload_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_suggestionrequestpayload_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_suggestionrequestpayload_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_suggestionrequestpayload_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_requestpayload: WebAttribute<msdyn_suggestionrequestpayload_Select, { msdyn_requestpayload: string | null }, {  }>;
  msdyn_responsepayload: WebAttribute<msdyn_suggestionrequestpayload_Select, { msdyn_responsepayload: string | null }, {  }>;
  msdyn_suggestedentitylogicalname: WebAttribute<msdyn_suggestionrequestpayload_Select, { msdyn_suggestedentitylogicalname: string | null }, {  }>;
  msdyn_suggestionfor_guid: WebAttribute<msdyn_suggestionrequestpayload_Select, { msdyn_suggestionfor_guid: string | null }, { msdyn_suggestionfor_formatted?: string }>;
  msdyn_suggestionrequestpayloadid: WebAttribute<msdyn_suggestionrequestpayload_Select, { msdyn_suggestionrequestpayloadid: string | null }, {  }>;
  organizationid_guid: WebAttribute<msdyn_suggestionrequestpayload_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_suggestionrequestpayload_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  statecode: WebAttribute<msdyn_suggestionrequestpayload_Select, { statecode: msdyn_suggestionrequestpayload_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_suggestionrequestpayload_Select, { statuscode: msdyn_suggestionrequestpayload_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_suggestionrequestpayload_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_suggestionrequestpayload_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_suggestionrequestpayload_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_suggestionrequestpayload_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_requestpayload: string;
  msdyn_responsepayload: string;
  msdyn_suggestedentitylogicalname: string;
  msdyn_suggestionfor_guid: XQW.Guid;
  msdyn_suggestionrequestpayloadid: XQW.Guid;
  organizationid_guid: XQW.Guid;
  overriddencreatedon: Date;
  statecode: msdyn_suggestionrequestpayload_statecode;
  statuscode: msdyn_suggestionrequestpayload_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_suggestionrequestpayload_Expand {
  createdby: WebExpand<msdyn_suggestionrequestpayload_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_suggestionrequestpayload_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_suggestionrequestpayload_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_suggestionrequestpayload_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_msdyn_suggestionrequestpayload_msdyn_suggestioninteraction_SuggestionRequestPayload: WebExpand<msdyn_suggestionrequestpayload_Expand, msdyn_suggestioninteraction_Select, msdyn_suggestioninteraction_Filter, { msdyn_msdyn_suggestionrequestpayload_msdyn_suggestioninteraction_SuggestionRequestPayload: msdyn_suggestioninteraction_Result[] }>;
  msdyn_suggestionfor_incident: WebExpand<msdyn_suggestionrequestpayload_Expand, Incident_Select, Incident_Filter, { msdyn_suggestionfor_incident: Incident_Result }>;
  msdyn_suggestionfor_msdyn_ocliveworkitem: WebExpand<msdyn_suggestionrequestpayload_Expand, msdyn_ocliveworkitem_Select, msdyn_ocliveworkitem_Filter, { msdyn_suggestionfor_msdyn_ocliveworkitem: msdyn_ocliveworkitem_Result }>;
  msdyn_suggestionrequestpayload_AsyncOperations: WebExpand<msdyn_suggestionrequestpayload_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_suggestionrequestpayload_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_suggestionrequestpayload_BulkDeleteFailures: WebExpand<msdyn_suggestionrequestpayload_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_suggestionrequestpayload_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_suggestionrequestpayload_MailboxTrackingFolders: WebExpand<msdyn_suggestionrequestpayload_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_suggestionrequestpayload_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_suggestionrequestpayload_PrincipalObjectAttributeAccesses: WebExpand<msdyn_suggestionrequestpayload_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_suggestionrequestpayload_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_suggestionrequestpayload_ProcessSession: WebExpand<msdyn_suggestionrequestpayload_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_suggestionrequestpayload_ProcessSession: ProcessSession_Result[] }>;
  msdyn_suggestionrequestpayload_SyncErrors: WebExpand<msdyn_suggestionrequestpayload_Expand, SyncError_Select, SyncError_Filter, { msdyn_suggestionrequestpayload_SyncErrors: SyncError_Result[] }>;
  msdyn_suggestionrequestpayload_UserEntityInstanceDatas: WebExpand<msdyn_suggestionrequestpayload_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_suggestionrequestpayload_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  organizationid: WebExpand<msdyn_suggestionrequestpayload_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
}
interface msdyn_suggestionrequestpayload_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_suggestionfor_formatted?: string;
  organizationid_formatted?: string;
  overriddencreatedon_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_suggestionrequestpayload_Result extends msdyn_suggestionrequestpayload_Base, msdyn_suggestionrequestpayload_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_suggestionfor_guid: string | null;
  organizationid_guid: string | null;
}
interface msdyn_suggestionrequestpayload_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_suggestionfor_incident: WebMappingRetrieve<Incident_Select,Incident_Expand,Incident_Filter,Incident_Fixed,Incident_Result,Incident_FormattedResult>;
  msdyn_suggestionfor_msdyn_ocliveworkitem: WebMappingRetrieve<msdyn_ocliveworkitem_Select,msdyn_ocliveworkitem_Expand,msdyn_ocliveworkitem_Filter,msdyn_ocliveworkitem_Fixed,msdyn_ocliveworkitem_Result,msdyn_ocliveworkitem_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
}
interface msdyn_suggestionrequestpayload_RelatedMany {
  msdyn_msdyn_suggestionrequestpayload_msdyn_suggestioninteraction_SuggestionRequestPayload: WebMappingRetrieve<msdyn_suggestioninteraction_Select,msdyn_suggestioninteraction_Expand,msdyn_suggestioninteraction_Filter,msdyn_suggestioninteraction_Fixed,msdyn_suggestioninteraction_Result,msdyn_suggestioninteraction_FormattedResult>;
  msdyn_suggestionrequestpayload_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_suggestionrequestpayload_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_suggestionrequestpayload_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_suggestionrequestpayload_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_suggestionrequestpayload_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_suggestionrequestpayload_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_suggestionrequestpayload_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_suggestionrequestpayloads: WebMappingRetrieve<msdyn_suggestionrequestpayload_Select,msdyn_suggestionrequestpayload_Expand,msdyn_suggestionrequestpayload_Filter,msdyn_suggestionrequestpayload_Fixed,msdyn_suggestionrequestpayload_Result,msdyn_suggestionrequestpayload_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_suggestionrequestpayloads: WebMappingRelated<msdyn_suggestionrequestpayload_RelatedOne,msdyn_suggestionrequestpayload_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_suggestionrequestpayloads: WebMappingCUDA<msdyn_suggestionrequestpayload_Create,msdyn_suggestionrequestpayload_Update,msdyn_suggestionrequestpayload_Select>;
}
