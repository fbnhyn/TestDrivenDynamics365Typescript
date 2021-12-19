interface msdyn_sikeyvalueconfig_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_configkey?: string | null;
  msdyn_configvalue?: string | null;
  msdyn_sikeyvalueconfigid?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_sikeyvalueconfig_statecode | null;
  statuscode?: msdyn_sikeyvalueconfig_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_sikeyvalueconfig_Relationships {
  msdyn_sikeyvalueconfig_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_sikeyvalueconfig_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_sikeyvalueconfig_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_sikeyvalueconfig_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_sikeyvalueconfig_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_sikeyvalueconfig_SyncErrors?: SyncError_Result[] | null;
  msdyn_sikeyvalueconfig_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_sikeyvalueconfig extends msdyn_sikeyvalueconfig_Base, msdyn_sikeyvalueconfig_Relationships {
}
interface msdyn_sikeyvalueconfig_Create extends msdyn_sikeyvalueconfig {
}
interface msdyn_sikeyvalueconfig_Update extends msdyn_sikeyvalueconfig {
}
interface msdyn_sikeyvalueconfig_Select {
  createdby_guid: WebAttribute<msdyn_sikeyvalueconfig_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_sikeyvalueconfig_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_sikeyvalueconfig_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_sikeyvalueconfig_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_sikeyvalueconfig_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_sikeyvalueconfig_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_sikeyvalueconfig_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_configkey: WebAttribute<msdyn_sikeyvalueconfig_Select, { msdyn_configkey: string | null }, {  }>;
  msdyn_configvalue: WebAttribute<msdyn_sikeyvalueconfig_Select, { msdyn_configvalue: string | null }, {  }>;
  msdyn_sikeyvalueconfigid: WebAttribute<msdyn_sikeyvalueconfig_Select, { msdyn_sikeyvalueconfigid: string | null }, {  }>;
  organizationid_guid: WebAttribute<msdyn_sikeyvalueconfig_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_sikeyvalueconfig_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  statecode: WebAttribute<msdyn_sikeyvalueconfig_Select, { statecode: msdyn_sikeyvalueconfig_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_sikeyvalueconfig_Select, { statuscode: msdyn_sikeyvalueconfig_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_sikeyvalueconfig_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_sikeyvalueconfig_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_sikeyvalueconfig_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_sikeyvalueconfig_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_configkey: string;
  msdyn_configvalue: string;
  msdyn_sikeyvalueconfigid: XQW.Guid;
  organizationid_guid: XQW.Guid;
  overriddencreatedon: Date;
  statecode: msdyn_sikeyvalueconfig_statecode;
  statuscode: msdyn_sikeyvalueconfig_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_sikeyvalueconfig_Expand {
  createdby: WebExpand<msdyn_sikeyvalueconfig_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_sikeyvalueconfig_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_sikeyvalueconfig_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_sikeyvalueconfig_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_sikeyvalueconfig_AsyncOperations: WebExpand<msdyn_sikeyvalueconfig_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_sikeyvalueconfig_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_sikeyvalueconfig_BulkDeleteFailures: WebExpand<msdyn_sikeyvalueconfig_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_sikeyvalueconfig_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_sikeyvalueconfig_MailboxTrackingFolders: WebExpand<msdyn_sikeyvalueconfig_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_sikeyvalueconfig_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_sikeyvalueconfig_PrincipalObjectAttributeAccesses: WebExpand<msdyn_sikeyvalueconfig_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_sikeyvalueconfig_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_sikeyvalueconfig_ProcessSession: WebExpand<msdyn_sikeyvalueconfig_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_sikeyvalueconfig_ProcessSession: ProcessSession_Result[] }>;
  msdyn_sikeyvalueconfig_SyncErrors: WebExpand<msdyn_sikeyvalueconfig_Expand, SyncError_Select, SyncError_Filter, { msdyn_sikeyvalueconfig_SyncErrors: SyncError_Result[] }>;
  msdyn_sikeyvalueconfig_UserEntityInstanceDatas: WebExpand<msdyn_sikeyvalueconfig_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_sikeyvalueconfig_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  organizationid: WebExpand<msdyn_sikeyvalueconfig_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
}
interface msdyn_sikeyvalueconfig_FormattedResult {
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
interface msdyn_sikeyvalueconfig_Result extends msdyn_sikeyvalueconfig_Base, msdyn_sikeyvalueconfig_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
}
interface msdyn_sikeyvalueconfig_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
}
interface msdyn_sikeyvalueconfig_RelatedMany {
  msdyn_sikeyvalueconfig_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_sikeyvalueconfig_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_sikeyvalueconfig_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_sikeyvalueconfig_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_sikeyvalueconfig_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_sikeyvalueconfig_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_sikeyvalueconfig_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_sikeyvalueconfigs: WebMappingRetrieve<msdyn_sikeyvalueconfig_Select,msdyn_sikeyvalueconfig_Expand,msdyn_sikeyvalueconfig_Filter,msdyn_sikeyvalueconfig_Fixed,msdyn_sikeyvalueconfig_Result,msdyn_sikeyvalueconfig_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_sikeyvalueconfigs: WebMappingRelated<msdyn_sikeyvalueconfig_RelatedOne,msdyn_sikeyvalueconfig_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_sikeyvalueconfigs: WebMappingCUDA<msdyn_sikeyvalueconfig_Create,msdyn_sikeyvalueconfig_Update,msdyn_sikeyvalueconfig_Select>;
}
