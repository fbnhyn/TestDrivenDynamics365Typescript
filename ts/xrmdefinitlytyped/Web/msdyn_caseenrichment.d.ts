interface msdyn_caseenrichment_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_caseenrichmentid?: string | null;
  msdyn_name?: string | null;
  msdyn_summary?: string | null;
  msdyn_tags?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_caseenrichment_statecode | null;
  statuscode?: msdyn_caseenrichment_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_caseenrichment_Relationships {
  msdyn_caseenrichment_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_caseenrichment_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_caseenrichment_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_caseenrichment_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_caseenrichment_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_caseenrichment_SyncErrors?: SyncError_Result[] | null;
  msdyn_caseenrichment_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_caseenrichment extends msdyn_caseenrichment_Base, msdyn_caseenrichment_Relationships {
  msdyn_caseid_bind$incidents?: string | null;
}
interface msdyn_caseenrichment_Create extends msdyn_caseenrichment {
}
interface msdyn_caseenrichment_Update extends msdyn_caseenrichment {
}
interface msdyn_caseenrichment_Select {
  createdby_guid: WebAttribute<msdyn_caseenrichment_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_caseenrichment_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_caseenrichment_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_caseenrichment_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_caseenrichment_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_caseenrichment_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_caseenrichment_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_caseenrichmentid: WebAttribute<msdyn_caseenrichment_Select, { msdyn_caseenrichmentid: string | null }, {  }>;
  msdyn_caseid_guid: WebAttribute<msdyn_caseenrichment_Select, { msdyn_caseid_guid: string | null }, { msdyn_caseid_formatted?: string }>;
  msdyn_name: WebAttribute<msdyn_caseenrichment_Select, { msdyn_name: string | null }, {  }>;
  msdyn_summary: WebAttribute<msdyn_caseenrichment_Select, { msdyn_summary: string | null }, {  }>;
  msdyn_tags: WebAttribute<msdyn_caseenrichment_Select, { msdyn_tags: string | null }, {  }>;
  organizationid_guid: WebAttribute<msdyn_caseenrichment_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_caseenrichment_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  statecode: WebAttribute<msdyn_caseenrichment_Select, { statecode: msdyn_caseenrichment_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_caseenrichment_Select, { statuscode: msdyn_caseenrichment_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_caseenrichment_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_caseenrichment_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_caseenrichment_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_caseenrichment_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_caseenrichmentid: XQW.Guid;
  msdyn_caseid_guid: XQW.Guid;
  msdyn_name: string;
  msdyn_summary: string;
  msdyn_tags: string;
  organizationid_guid: XQW.Guid;
  overriddencreatedon: Date;
  statecode: msdyn_caseenrichment_statecode;
  statuscode: msdyn_caseenrichment_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_caseenrichment_Expand {
  createdby: WebExpand<msdyn_caseenrichment_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_caseenrichment_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_caseenrichment_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_caseenrichment_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_caseenrichment_AsyncOperations: WebExpand<msdyn_caseenrichment_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_caseenrichment_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_caseenrichment_BulkDeleteFailures: WebExpand<msdyn_caseenrichment_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_caseenrichment_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_caseenrichment_MailboxTrackingFolders: WebExpand<msdyn_caseenrichment_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_caseenrichment_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_caseenrichment_PrincipalObjectAttributeAccesses: WebExpand<msdyn_caseenrichment_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_caseenrichment_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_caseenrichment_ProcessSession: WebExpand<msdyn_caseenrichment_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_caseenrichment_ProcessSession: ProcessSession_Result[] }>;
  msdyn_caseenrichment_SyncErrors: WebExpand<msdyn_caseenrichment_Expand, SyncError_Select, SyncError_Filter, { msdyn_caseenrichment_SyncErrors: SyncError_Result[] }>;
  msdyn_caseenrichment_UserEntityInstanceDatas: WebExpand<msdyn_caseenrichment_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_caseenrichment_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_caseid: WebExpand<msdyn_caseenrichment_Expand, Incident_Select, Incident_Filter, { msdyn_caseid: Incident_Result }>;
  organizationid: WebExpand<msdyn_caseenrichment_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
}
interface msdyn_caseenrichment_FormattedResult {
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
interface msdyn_caseenrichment_Result extends msdyn_caseenrichment_Base, msdyn_caseenrichment_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_caseid_guid: string | null;
  organizationid_guid: string | null;
}
interface msdyn_caseenrichment_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_caseid: WebMappingRetrieve<Incident_Select,Incident_Expand,Incident_Filter,Incident_Fixed,Incident_Result,Incident_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
}
interface msdyn_caseenrichment_RelatedMany {
  msdyn_caseenrichment_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_caseenrichment_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_caseenrichment_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_caseenrichment_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_caseenrichment_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_caseenrichment_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_caseenrichment_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_caseenrichments: WebMappingRetrieve<msdyn_caseenrichment_Select,msdyn_caseenrichment_Expand,msdyn_caseenrichment_Filter,msdyn_caseenrichment_Fixed,msdyn_caseenrichment_Result,msdyn_caseenrichment_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_caseenrichments: WebMappingRelated<msdyn_caseenrichment_RelatedOne,msdyn_caseenrichment_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_caseenrichments: WebMappingCUDA<msdyn_caseenrichment_Create,msdyn_caseenrichment_Update,msdyn_caseenrichment_Select>;
}
