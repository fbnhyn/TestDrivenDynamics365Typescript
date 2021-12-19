interface msdyn_upgradestep_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_dbversion?: number | null;
  msdyn_details?: string | null;
  msdyn_errors?: string | null;
  msdyn_finished?: Date | null;
  msdyn_name?: string | null;
  msdyn_status?: msdyn_upgradestatus | null;
  msdyn_stepid?: string | null;
  msdyn_upgradestepid?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_upgradestep_statecode | null;
  statuscode?: msdyn_upgradestep_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_upgradestep_Relationships {
  msdyn_UpgradeVersion?: msdyn_upgradeversion_Result | null;
  msdyn_upgradestep_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_upgradestep_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_upgradestep_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_upgradestep_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_upgradestep_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_upgradestep_SyncErrors?: SyncError_Result[] | null;
  msdyn_upgradestep_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_upgradestep extends msdyn_upgradestep_Base, msdyn_upgradestep_Relationships {
  msdyn_UpgradeVersion_bind$msdyn_upgradeversions?: string | null;
}
interface msdyn_upgradestep_Create extends msdyn_upgradestep {
}
interface msdyn_upgradestep_Update extends msdyn_upgradestep {
}
interface msdyn_upgradestep_Select {
  createdby_guid: WebAttribute<msdyn_upgradestep_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_upgradestep_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_upgradestep_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_upgradestep_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_upgradestep_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_upgradestep_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_upgradestep_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_dbversion: WebAttribute<msdyn_upgradestep_Select, { msdyn_dbversion: number | null }, {  }>;
  msdyn_details: WebAttribute<msdyn_upgradestep_Select, { msdyn_details: string | null }, {  }>;
  msdyn_errors: WebAttribute<msdyn_upgradestep_Select, { msdyn_errors: string | null }, {  }>;
  msdyn_finished: WebAttribute<msdyn_upgradestep_Select, { msdyn_finished: Date | null }, { msdyn_finished_formatted?: string }>;
  msdyn_name: WebAttribute<msdyn_upgradestep_Select, { msdyn_name: string | null }, {  }>;
  msdyn_status: WebAttribute<msdyn_upgradestep_Select, { msdyn_status: msdyn_upgradestatus | null }, { msdyn_status_formatted?: string }>;
  msdyn_stepid: WebAttribute<msdyn_upgradestep_Select, { msdyn_stepid: string | null }, {  }>;
  msdyn_upgradestepid: WebAttribute<msdyn_upgradestep_Select, { msdyn_upgradestepid: string | null }, {  }>;
  msdyn_upgradeversion_guid: WebAttribute<msdyn_upgradestep_Select, { msdyn_upgradeversion_guid: string | null }, { msdyn_upgradeversion_formatted?: string }>;
  organizationid_guid: WebAttribute<msdyn_upgradestep_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_upgradestep_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  statecode: WebAttribute<msdyn_upgradestep_Select, { statecode: msdyn_upgradestep_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_upgradestep_Select, { statuscode: msdyn_upgradestep_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_upgradestep_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_upgradestep_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_upgradestep_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_upgradestep_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_dbversion: number;
  msdyn_details: string;
  msdyn_errors: string;
  msdyn_finished: Date;
  msdyn_name: string;
  msdyn_status: msdyn_upgradestatus;
  msdyn_stepid: XQW.Guid;
  msdyn_upgradestepid: XQW.Guid;
  msdyn_upgradeversion_guid: XQW.Guid;
  organizationid_guid: XQW.Guid;
  overriddencreatedon: Date;
  statecode: msdyn_upgradestep_statecode;
  statuscode: msdyn_upgradestep_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_upgradestep_Expand {
  createdby: WebExpand<msdyn_upgradestep_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_upgradestep_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_upgradestep_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_upgradestep_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_UpgradeVersion: WebExpand<msdyn_upgradestep_Expand, msdyn_upgradeversion_Select, msdyn_upgradeversion_Filter, { msdyn_UpgradeVersion: msdyn_upgradeversion_Result }>;
  msdyn_upgradestep_AsyncOperations: WebExpand<msdyn_upgradestep_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_upgradestep_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_upgradestep_BulkDeleteFailures: WebExpand<msdyn_upgradestep_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_upgradestep_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_upgradestep_MailboxTrackingFolders: WebExpand<msdyn_upgradestep_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_upgradestep_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_upgradestep_PrincipalObjectAttributeAccesses: WebExpand<msdyn_upgradestep_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_upgradestep_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_upgradestep_ProcessSession: WebExpand<msdyn_upgradestep_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_upgradestep_ProcessSession: ProcessSession_Result[] }>;
  msdyn_upgradestep_SyncErrors: WebExpand<msdyn_upgradestep_Expand, SyncError_Select, SyncError_Filter, { msdyn_upgradestep_SyncErrors: SyncError_Result[] }>;
  msdyn_upgradestep_UserEntityInstanceDatas: WebExpand<msdyn_upgradestep_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_upgradestep_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  organizationid: WebExpand<msdyn_upgradestep_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
}
interface msdyn_upgradestep_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_finished_formatted?: string;
  msdyn_status_formatted?: string;
  msdyn_upgradeversion_formatted?: string;
  organizationid_formatted?: string;
  overriddencreatedon_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_upgradestep_Result extends msdyn_upgradestep_Base, msdyn_upgradestep_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_upgradeversion_guid: string | null;
  organizationid_guid: string | null;
}
interface msdyn_upgradestep_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_UpgradeVersion: WebMappingRetrieve<msdyn_upgradeversion_Select,msdyn_upgradeversion_Expand,msdyn_upgradeversion_Filter,msdyn_upgradeversion_Fixed,msdyn_upgradeversion_Result,msdyn_upgradeversion_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
}
interface msdyn_upgradestep_RelatedMany {
  msdyn_upgradestep_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_upgradestep_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_upgradestep_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_upgradestep_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_upgradestep_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_upgradestep_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_upgradestep_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_upgradesteps: WebMappingRetrieve<msdyn_upgradestep_Select,msdyn_upgradestep_Expand,msdyn_upgradestep_Filter,msdyn_upgradestep_Fixed,msdyn_upgradestep_Result,msdyn_upgradestep_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_upgradesteps: WebMappingRelated<msdyn_upgradestep_RelatedOne,msdyn_upgradestep_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_upgradesteps: WebMappingCUDA<msdyn_upgradestep_Create,msdyn_upgradestep_Update,msdyn_upgradestep_Select>;
}
