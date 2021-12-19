interface msdyn_casesuggestionrequestpayload_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_casesuggestionrequestpayloadid?: string | null;
  msdyn_name?: string | null;
  msdyn_requestpayload?: string | null;
  msdyn_responsepayload?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_casesuggestionrequestpayload_statecode | null;
  statuscode?: msdyn_casesuggestionrequestpayload_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_casesuggestionrequestpayload_Relationships {
  msdyn_casesuggestionrequestpayload_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_casesuggestionrequestpayload_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_casesuggestionrequestpayload_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_casesuggestionrequestpayload_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_casesuggestionrequestpayload_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_casesuggestionrequestpayload_SyncErrors?: SyncError_Result[] | null;
  msdyn_casesuggestionrequestpayload_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_casesuggestionrequestpayload extends msdyn_casesuggestionrequestpayload_Base, msdyn_casesuggestionrequestpayload_Relationships {
  msdyn_caseid_bind$incidents?: string | null;
}
interface msdyn_casesuggestionrequestpayload_Create extends msdyn_casesuggestionrequestpayload {
}
interface msdyn_casesuggestionrequestpayload_Update extends msdyn_casesuggestionrequestpayload {
}
interface msdyn_casesuggestionrequestpayload_Select {
  createdby_guid: WebAttribute<msdyn_casesuggestionrequestpayload_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_casesuggestionrequestpayload_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_casesuggestionrequestpayload_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_casesuggestionrequestpayload_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_casesuggestionrequestpayload_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_casesuggestionrequestpayload_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_casesuggestionrequestpayload_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_caseid_guid: WebAttribute<msdyn_casesuggestionrequestpayload_Select, { msdyn_caseid_guid: string | null }, { msdyn_caseid_formatted?: string }>;
  msdyn_casesuggestionrequestpayloadid: WebAttribute<msdyn_casesuggestionrequestpayload_Select, { msdyn_casesuggestionrequestpayloadid: string | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_casesuggestionrequestpayload_Select, { msdyn_name: string | null }, {  }>;
  msdyn_requestpayload: WebAttribute<msdyn_casesuggestionrequestpayload_Select, { msdyn_requestpayload: string | null }, {  }>;
  msdyn_responsepayload: WebAttribute<msdyn_casesuggestionrequestpayload_Select, { msdyn_responsepayload: string | null }, {  }>;
  organizationid_guid: WebAttribute<msdyn_casesuggestionrequestpayload_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_casesuggestionrequestpayload_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  statecode: WebAttribute<msdyn_casesuggestionrequestpayload_Select, { statecode: msdyn_casesuggestionrequestpayload_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_casesuggestionrequestpayload_Select, { statuscode: msdyn_casesuggestionrequestpayload_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_casesuggestionrequestpayload_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_casesuggestionrequestpayload_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_casesuggestionrequestpayload_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_casesuggestionrequestpayload_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_caseid_guid: XQW.Guid;
  msdyn_casesuggestionrequestpayloadid: XQW.Guid;
  msdyn_name: string;
  msdyn_requestpayload: string;
  msdyn_responsepayload: string;
  organizationid_guid: XQW.Guid;
  overriddencreatedon: Date;
  statecode: msdyn_casesuggestionrequestpayload_statecode;
  statuscode: msdyn_casesuggestionrequestpayload_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_casesuggestionrequestpayload_Expand {
  createdby: WebExpand<msdyn_casesuggestionrequestpayload_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_casesuggestionrequestpayload_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_casesuggestionrequestpayload_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_casesuggestionrequestpayload_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_caseid: WebExpand<msdyn_casesuggestionrequestpayload_Expand, Incident_Select, Incident_Filter, { msdyn_caseid: Incident_Result }>;
  msdyn_casesuggestionrequestpayload_AsyncOperations: WebExpand<msdyn_casesuggestionrequestpayload_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_casesuggestionrequestpayload_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_casesuggestionrequestpayload_BulkDeleteFailures: WebExpand<msdyn_casesuggestionrequestpayload_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_casesuggestionrequestpayload_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_casesuggestionrequestpayload_MailboxTrackingFolders: WebExpand<msdyn_casesuggestionrequestpayload_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_casesuggestionrequestpayload_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_casesuggestionrequestpayload_PrincipalObjectAttributeAccesses: WebExpand<msdyn_casesuggestionrequestpayload_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_casesuggestionrequestpayload_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_casesuggestionrequestpayload_ProcessSession: WebExpand<msdyn_casesuggestionrequestpayload_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_casesuggestionrequestpayload_ProcessSession: ProcessSession_Result[] }>;
  msdyn_casesuggestionrequestpayload_SyncErrors: WebExpand<msdyn_casesuggestionrequestpayload_Expand, SyncError_Select, SyncError_Filter, { msdyn_casesuggestionrequestpayload_SyncErrors: SyncError_Result[] }>;
  msdyn_casesuggestionrequestpayload_UserEntityInstanceDatas: WebExpand<msdyn_casesuggestionrequestpayload_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_casesuggestionrequestpayload_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  organizationid: WebExpand<msdyn_casesuggestionrequestpayload_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
}
interface msdyn_casesuggestionrequestpayload_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_caseid_formatted?: string;
  organizationid_formatted?: string;
  overriddencreatedon_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_casesuggestionrequestpayload_Result extends msdyn_casesuggestionrequestpayload_Base, msdyn_casesuggestionrequestpayload_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_caseid_guid: string | null;
  organizationid_guid: string | null;
}
interface msdyn_casesuggestionrequestpayload_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_caseid: WebMappingRetrieve<Incident_Select,Incident_Expand,Incident_Filter,Incident_Fixed,Incident_Result,Incident_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
}
interface msdyn_casesuggestionrequestpayload_RelatedMany {
  msdyn_casesuggestionrequestpayload_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_casesuggestionrequestpayload_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_casesuggestionrequestpayload_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_casesuggestionrequestpayload_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_casesuggestionrequestpayload_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_casesuggestionrequestpayload_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_casesuggestionrequestpayload_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_casesuggestionrequestpayloads: WebMappingRetrieve<msdyn_casesuggestionrequestpayload_Select,msdyn_casesuggestionrequestpayload_Expand,msdyn_casesuggestionrequestpayload_Filter,msdyn_casesuggestionrequestpayload_Fixed,msdyn_casesuggestionrequestpayload_Result,msdyn_casesuggestionrequestpayload_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_casesuggestionrequestpayloads: WebMappingRelated<msdyn_casesuggestionrequestpayload_RelatedOne,msdyn_casesuggestionrequestpayload_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_casesuggestionrequestpayloads: WebMappingCUDA<msdyn_casesuggestionrequestpayload_Create,msdyn_casesuggestionrequestpayload_Update,msdyn_casesuggestionrequestpayload_Select>;
}
