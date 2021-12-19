interface msdyn_upgraderun_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_error?: string | null;
  msdyn_finished?: Date | null;
  msdyn_package?: string | null;
  msdyn_solution?: string | null;
  msdyn_startingversion?: string | null;
  msdyn_status?: msdyn_upgradestatus | null;
  msdyn_summary?: string | null;
  msdyn_targetversion?: string | null;
  msdyn_upgraderunid?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_upgraderun_statecode | null;
  statuscode?: msdyn_upgraderun_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_upgraderun_Relationships {
  msdyn_msdyn_upgraderun_msdyn_upgradeversion_UpgradeRun?: msdyn_upgradeversion_Result[] | null;
  msdyn_upgraderun_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_upgraderun_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_upgraderun_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_upgraderun_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_upgraderun_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_upgraderun_SyncErrors?: SyncError_Result[] | null;
  msdyn_upgraderun_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_upgraderun extends msdyn_upgraderun_Base, msdyn_upgraderun_Relationships {
}
interface msdyn_upgraderun_Create extends msdyn_upgraderun {
}
interface msdyn_upgraderun_Update extends msdyn_upgraderun {
}
interface msdyn_upgraderun_Select {
  createdby_guid: WebAttribute<msdyn_upgraderun_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_upgraderun_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_upgraderun_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_upgraderun_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_upgraderun_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_upgraderun_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_upgraderun_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_error: WebAttribute<msdyn_upgraderun_Select, { msdyn_error: string | null }, {  }>;
  msdyn_finished: WebAttribute<msdyn_upgraderun_Select, { msdyn_finished: Date | null }, { msdyn_finished_formatted?: string }>;
  msdyn_package: WebAttribute<msdyn_upgraderun_Select, { msdyn_package: string | null }, {  }>;
  msdyn_solution: WebAttribute<msdyn_upgraderun_Select, { msdyn_solution: string | null }, {  }>;
  msdyn_startingversion: WebAttribute<msdyn_upgraderun_Select, { msdyn_startingversion: string | null }, {  }>;
  msdyn_status: WebAttribute<msdyn_upgraderun_Select, { msdyn_status: msdyn_upgradestatus | null }, { msdyn_status_formatted?: string }>;
  msdyn_summary: WebAttribute<msdyn_upgraderun_Select, { msdyn_summary: string | null }, {  }>;
  msdyn_targetversion: WebAttribute<msdyn_upgraderun_Select, { msdyn_targetversion: string | null }, {  }>;
  msdyn_upgraderunid: WebAttribute<msdyn_upgraderun_Select, { msdyn_upgraderunid: string | null }, {  }>;
  organizationid_guid: WebAttribute<msdyn_upgraderun_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_upgraderun_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  statecode: WebAttribute<msdyn_upgraderun_Select, { statecode: msdyn_upgraderun_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_upgraderun_Select, { statuscode: msdyn_upgraderun_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_upgraderun_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_upgraderun_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_upgraderun_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_upgraderun_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_error: string;
  msdyn_finished: Date;
  msdyn_package: string;
  msdyn_solution: string;
  msdyn_startingversion: string;
  msdyn_status: msdyn_upgradestatus;
  msdyn_summary: string;
  msdyn_targetversion: string;
  msdyn_upgraderunid: XQW.Guid;
  organizationid_guid: XQW.Guid;
  overriddencreatedon: Date;
  statecode: msdyn_upgraderun_statecode;
  statuscode: msdyn_upgraderun_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_upgraderun_Expand {
  createdby: WebExpand<msdyn_upgraderun_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_upgraderun_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_upgraderun_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_upgraderun_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_msdyn_upgraderun_msdyn_upgradeversion_UpgradeRun: WebExpand<msdyn_upgraderun_Expand, msdyn_upgradeversion_Select, msdyn_upgradeversion_Filter, { msdyn_msdyn_upgraderun_msdyn_upgradeversion_UpgradeRun: msdyn_upgradeversion_Result[] }>;
  msdyn_upgraderun_AsyncOperations: WebExpand<msdyn_upgraderun_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_upgraderun_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_upgraderun_BulkDeleteFailures: WebExpand<msdyn_upgraderun_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_upgraderun_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_upgraderun_MailboxTrackingFolders: WebExpand<msdyn_upgraderun_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_upgraderun_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_upgraderun_PrincipalObjectAttributeAccesses: WebExpand<msdyn_upgraderun_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_upgraderun_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_upgraderun_ProcessSession: WebExpand<msdyn_upgraderun_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_upgraderun_ProcessSession: ProcessSession_Result[] }>;
  msdyn_upgraderun_SyncErrors: WebExpand<msdyn_upgraderun_Expand, SyncError_Select, SyncError_Filter, { msdyn_upgraderun_SyncErrors: SyncError_Result[] }>;
  msdyn_upgraderun_UserEntityInstanceDatas: WebExpand<msdyn_upgraderun_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_upgraderun_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  organizationid: WebExpand<msdyn_upgraderun_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
}
interface msdyn_upgraderun_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_finished_formatted?: string;
  msdyn_status_formatted?: string;
  organizationid_formatted?: string;
  overriddencreatedon_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_upgraderun_Result extends msdyn_upgraderun_Base, msdyn_upgraderun_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
}
interface msdyn_upgraderun_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
}
interface msdyn_upgraderun_RelatedMany {
  msdyn_msdyn_upgraderun_msdyn_upgradeversion_UpgradeRun: WebMappingRetrieve<msdyn_upgradeversion_Select,msdyn_upgradeversion_Expand,msdyn_upgradeversion_Filter,msdyn_upgradeversion_Fixed,msdyn_upgradeversion_Result,msdyn_upgradeversion_FormattedResult>;
  msdyn_upgraderun_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_upgraderun_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_upgraderun_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_upgraderun_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_upgraderun_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_upgraderun_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_upgraderun_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_upgraderuns: WebMappingRetrieve<msdyn_upgraderun_Select,msdyn_upgraderun_Expand,msdyn_upgraderun_Filter,msdyn_upgraderun_Fixed,msdyn_upgraderun_Result,msdyn_upgraderun_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_upgraderuns: WebMappingRelated<msdyn_upgraderun_RelatedOne,msdyn_upgraderun_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_upgraderuns: WebMappingCUDA<msdyn_upgraderun_Create,msdyn_upgraderun_Update,msdyn_upgraderun_Select>;
}
