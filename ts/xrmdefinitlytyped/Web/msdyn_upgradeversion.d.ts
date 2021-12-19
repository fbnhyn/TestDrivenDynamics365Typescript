interface msdyn_upgradeversion_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_finished?: Date | null;
  msdyn_startingversion?: string | null;
  msdyn_status?: msdyn_upgradestatus | null;
  msdyn_summary?: string | null;
  msdyn_targetversion?: string | null;
  msdyn_upgradeversionid?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_upgradeversion_statecode | null;
  statuscode?: msdyn_upgradeversion_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_upgradeversion_Relationships {
  msdyn_UpgradeRun?: msdyn_upgraderun_Result | null;
  msdyn_msdyn_upgradeversion_msdyn_upgradestep_UpgradeVersion?: msdyn_upgradestep_Result[] | null;
  msdyn_upgradeversion_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_upgradeversion_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_upgradeversion_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_upgradeversion_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_upgradeversion_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_upgradeversion_SyncErrors?: SyncError_Result[] | null;
  msdyn_upgradeversion_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_upgradeversion extends msdyn_upgradeversion_Base, msdyn_upgradeversion_Relationships {
  msdyn_UpgradeRun_bind$msdyn_upgraderuns?: string | null;
}
interface msdyn_upgradeversion_Create extends msdyn_upgradeversion {
}
interface msdyn_upgradeversion_Update extends msdyn_upgradeversion {
}
interface msdyn_upgradeversion_Select {
  createdby_guid: WebAttribute<msdyn_upgradeversion_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_upgradeversion_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_upgradeversion_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_upgradeversion_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_upgradeversion_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_upgradeversion_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_upgradeversion_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_finished: WebAttribute<msdyn_upgradeversion_Select, { msdyn_finished: Date | null }, { msdyn_finished_formatted?: string }>;
  msdyn_startingversion: WebAttribute<msdyn_upgradeversion_Select, { msdyn_startingversion: string | null }, {  }>;
  msdyn_status: WebAttribute<msdyn_upgradeversion_Select, { msdyn_status: msdyn_upgradestatus | null }, { msdyn_status_formatted?: string }>;
  msdyn_summary: WebAttribute<msdyn_upgradeversion_Select, { msdyn_summary: string | null }, {  }>;
  msdyn_targetversion: WebAttribute<msdyn_upgradeversion_Select, { msdyn_targetversion: string | null }, {  }>;
  msdyn_upgraderun_guid: WebAttribute<msdyn_upgradeversion_Select, { msdyn_upgraderun_guid: string | null }, { msdyn_upgraderun_formatted?: string }>;
  msdyn_upgradeversionid: WebAttribute<msdyn_upgradeversion_Select, { msdyn_upgradeversionid: string | null }, {  }>;
  organizationid_guid: WebAttribute<msdyn_upgradeversion_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_upgradeversion_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  statecode: WebAttribute<msdyn_upgradeversion_Select, { statecode: msdyn_upgradeversion_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_upgradeversion_Select, { statuscode: msdyn_upgradeversion_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_upgradeversion_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_upgradeversion_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_upgradeversion_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_upgradeversion_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_finished: Date;
  msdyn_startingversion: string;
  msdyn_status: msdyn_upgradestatus;
  msdyn_summary: string;
  msdyn_targetversion: string;
  msdyn_upgraderun_guid: XQW.Guid;
  msdyn_upgradeversionid: XQW.Guid;
  organizationid_guid: XQW.Guid;
  overriddencreatedon: Date;
  statecode: msdyn_upgradeversion_statecode;
  statuscode: msdyn_upgradeversion_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_upgradeversion_Expand {
  createdby: WebExpand<msdyn_upgradeversion_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_upgradeversion_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_upgradeversion_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_upgradeversion_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_UpgradeRun: WebExpand<msdyn_upgradeversion_Expand, msdyn_upgraderun_Select, msdyn_upgraderun_Filter, { msdyn_UpgradeRun: msdyn_upgraderun_Result }>;
  msdyn_msdyn_upgradeversion_msdyn_upgradestep_UpgradeVersion: WebExpand<msdyn_upgradeversion_Expand, msdyn_upgradestep_Select, msdyn_upgradestep_Filter, { msdyn_msdyn_upgradeversion_msdyn_upgradestep_UpgradeVersion: msdyn_upgradestep_Result[] }>;
  msdyn_upgradeversion_AsyncOperations: WebExpand<msdyn_upgradeversion_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_upgradeversion_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_upgradeversion_BulkDeleteFailures: WebExpand<msdyn_upgradeversion_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_upgradeversion_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_upgradeversion_MailboxTrackingFolders: WebExpand<msdyn_upgradeversion_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_upgradeversion_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_upgradeversion_PrincipalObjectAttributeAccesses: WebExpand<msdyn_upgradeversion_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_upgradeversion_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_upgradeversion_ProcessSession: WebExpand<msdyn_upgradeversion_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_upgradeversion_ProcessSession: ProcessSession_Result[] }>;
  msdyn_upgradeversion_SyncErrors: WebExpand<msdyn_upgradeversion_Expand, SyncError_Select, SyncError_Filter, { msdyn_upgradeversion_SyncErrors: SyncError_Result[] }>;
  msdyn_upgradeversion_UserEntityInstanceDatas: WebExpand<msdyn_upgradeversion_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_upgradeversion_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  organizationid: WebExpand<msdyn_upgradeversion_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
}
interface msdyn_upgradeversion_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_finished_formatted?: string;
  msdyn_status_formatted?: string;
  msdyn_upgraderun_formatted?: string;
  organizationid_formatted?: string;
  overriddencreatedon_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_upgradeversion_Result extends msdyn_upgradeversion_Base, msdyn_upgradeversion_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_upgraderun_guid: string | null;
  organizationid_guid: string | null;
}
interface msdyn_upgradeversion_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_UpgradeRun: WebMappingRetrieve<msdyn_upgraderun_Select,msdyn_upgraderun_Expand,msdyn_upgraderun_Filter,msdyn_upgraderun_Fixed,msdyn_upgraderun_Result,msdyn_upgraderun_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
}
interface msdyn_upgradeversion_RelatedMany {
  msdyn_msdyn_upgradeversion_msdyn_upgradestep_UpgradeVersion: WebMappingRetrieve<msdyn_upgradestep_Select,msdyn_upgradestep_Expand,msdyn_upgradestep_Filter,msdyn_upgradestep_Fixed,msdyn_upgradestep_Result,msdyn_upgradestep_FormattedResult>;
  msdyn_upgradeversion_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_upgradeversion_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_upgradeversion_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_upgradeversion_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_upgradeversion_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_upgradeversion_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_upgradeversion_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_upgradeversions: WebMappingRetrieve<msdyn_upgradeversion_Select,msdyn_upgradeversion_Expand,msdyn_upgradeversion_Filter,msdyn_upgradeversion_Fixed,msdyn_upgradeversion_Result,msdyn_upgradeversion_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_upgradeversions: WebMappingRelated<msdyn_upgradeversion_RelatedOne,msdyn_upgradeversion_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_upgradeversions: WebMappingCUDA<msdyn_upgradeversion_Create,msdyn_upgradeversion_Update,msdyn_upgradeversion_Select>;
}
