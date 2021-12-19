interface msdyn_kmpersonalizationsetting_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_filtercontroldata?: string | null;
  msdyn_kmpersonalizationsettingid?: string | null;
  msdyn_languagecontrol?: string | null;
  msdyn_name?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_kmpersonalizationsetting_statecode | null;
  statuscode?: msdyn_kmpersonalizationsetting_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_kmpersonalizationsetting_Relationships {
  msdyn_kmpersonalizationsetting_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_kmpersonalizationsetting_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_kmpersonalizationsetting_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_kmpersonalizationsetting_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_kmpersonalizationsetting_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_kmpersonalizationsetting_SyncErrors?: SyncError_Result[] | null;
  msdyn_kmpersonalizationsetting_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_kmpersonalizationsetting extends msdyn_kmpersonalizationsetting_Base, msdyn_kmpersonalizationsetting_Relationships {
}
interface msdyn_kmpersonalizationsetting_Create extends msdyn_kmpersonalizationsetting {
}
interface msdyn_kmpersonalizationsetting_Update extends msdyn_kmpersonalizationsetting {
}
interface msdyn_kmpersonalizationsetting_Select {
  createdby_guid: WebAttribute<msdyn_kmpersonalizationsetting_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_kmpersonalizationsetting_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_kmpersonalizationsetting_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_kmpersonalizationsetting_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_kmpersonalizationsetting_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_kmpersonalizationsetting_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_kmpersonalizationsetting_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_filtercontroldata: WebAttribute<msdyn_kmpersonalizationsetting_Select, { msdyn_filtercontroldata: string | null }, {  }>;
  msdyn_kmpersonalizationsettingid: WebAttribute<msdyn_kmpersonalizationsetting_Select, { msdyn_kmpersonalizationsettingid: string | null }, {  }>;
  msdyn_languagecontrol: WebAttribute<msdyn_kmpersonalizationsetting_Select, { msdyn_languagecontrol: string | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_kmpersonalizationsetting_Select, { msdyn_name: string | null }, {  }>;
  organizationid_guid: WebAttribute<msdyn_kmpersonalizationsetting_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_kmpersonalizationsetting_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  statecode: WebAttribute<msdyn_kmpersonalizationsetting_Select, { statecode: msdyn_kmpersonalizationsetting_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_kmpersonalizationsetting_Select, { statuscode: msdyn_kmpersonalizationsetting_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_kmpersonalizationsetting_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_kmpersonalizationsetting_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_kmpersonalizationsetting_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_kmpersonalizationsetting_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_filtercontroldata: string;
  msdyn_kmpersonalizationsettingid: XQW.Guid;
  msdyn_languagecontrol: string;
  msdyn_name: string;
  organizationid_guid: XQW.Guid;
  overriddencreatedon: Date;
  statecode: msdyn_kmpersonalizationsetting_statecode;
  statuscode: msdyn_kmpersonalizationsetting_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_kmpersonalizationsetting_Expand {
  createdby: WebExpand<msdyn_kmpersonalizationsetting_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_kmpersonalizationsetting_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_kmpersonalizationsetting_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_kmpersonalizationsetting_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_kmpersonalizationsetting_AsyncOperations: WebExpand<msdyn_kmpersonalizationsetting_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_kmpersonalizationsetting_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_kmpersonalizationsetting_BulkDeleteFailures: WebExpand<msdyn_kmpersonalizationsetting_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_kmpersonalizationsetting_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_kmpersonalizationsetting_MailboxTrackingFolders: WebExpand<msdyn_kmpersonalizationsetting_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_kmpersonalizationsetting_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_kmpersonalizationsetting_PrincipalObjectAttributeAccesses: WebExpand<msdyn_kmpersonalizationsetting_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_kmpersonalizationsetting_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_kmpersonalizationsetting_ProcessSession: WebExpand<msdyn_kmpersonalizationsetting_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_kmpersonalizationsetting_ProcessSession: ProcessSession_Result[] }>;
  msdyn_kmpersonalizationsetting_SyncErrors: WebExpand<msdyn_kmpersonalizationsetting_Expand, SyncError_Select, SyncError_Filter, { msdyn_kmpersonalizationsetting_SyncErrors: SyncError_Result[] }>;
  msdyn_kmpersonalizationsetting_UserEntityInstanceDatas: WebExpand<msdyn_kmpersonalizationsetting_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_kmpersonalizationsetting_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  organizationid: WebExpand<msdyn_kmpersonalizationsetting_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
}
interface msdyn_kmpersonalizationsetting_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  organizationid_formatted?: string;
  overriddencreatedon_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_kmpersonalizationsetting_Result extends msdyn_kmpersonalizationsetting_Base, msdyn_kmpersonalizationsetting_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
}
interface msdyn_kmpersonalizationsetting_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
}
interface msdyn_kmpersonalizationsetting_RelatedMany {
  msdyn_kmpersonalizationsetting_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_kmpersonalizationsetting_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_kmpersonalizationsetting_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_kmpersonalizationsetting_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_kmpersonalizationsetting_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_kmpersonalizationsetting_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_kmpersonalizationsetting_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_kmpersonalizationsettings: WebMappingRetrieve<msdyn_kmpersonalizationsetting_Select,msdyn_kmpersonalizationsetting_Expand,msdyn_kmpersonalizationsetting_Filter,msdyn_kmpersonalizationsetting_Fixed,msdyn_kmpersonalizationsetting_Result,msdyn_kmpersonalizationsetting_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_kmpersonalizationsettings: WebMappingRelated<msdyn_kmpersonalizationsetting_RelatedOne,msdyn_kmpersonalizationsetting_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_kmpersonalizationsettings: WebMappingCUDA<msdyn_kmpersonalizationsetting_Create,msdyn_kmpersonalizationsetting_Update,msdyn_kmpersonalizationsetting_Select>;
}
