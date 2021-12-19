interface msdyn_paneconfiguration_Base extends WebEntity {
  componentidunique?: string | null;
  componentstate?: componentstate | null;
  createdon?: Date | null;
  importsequencenumber?: number | null;
  iscustomizable?: any | null;
  ismanaged?: boolean | null;
  modifiedon?: Date | null;
  msdyn_name?: string | null;
  msdyn_paneconfigurationid?: string | null;
  msdyn_panemode?: boolean | null;
  msdyn_panestate?: boolean | null;
  msdyn_uniquename?: string | null;
  overriddencreatedon?: Date | null;
  overwritetime?: Date | null;
  solutionid?: string | null;
  statecode?: msdyn_paneconfiguration_statecode | null;
  statuscode?: msdyn_paneconfiguration_statuscode | null;
  supportingsolutionid?: string | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_paneconfiguration_Relationships {
  msdyn_msdyn_paneconfig_msdyn_appconfig?: msdyn_appconfiguration_Result[] | null;
  msdyn_msdyn_paneconfig_msdyn_tabconfig?: msdyn_panetabconfiguration_Result[] | null;
  msdyn_paneconfiguration_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_paneconfiguration_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_paneconfiguration_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_paneconfiguration_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_paneconfiguration_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_paneconfiguration_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_paneconfiguration_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_paneconfiguration_SyncErrors?: SyncError_Result[] | null;
  msdyn_paneconfiguration_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_paneconfiguration extends msdyn_paneconfiguration_Base, msdyn_paneconfiguration_Relationships {
}
interface msdyn_paneconfiguration_Create extends msdyn_paneconfiguration {
}
interface msdyn_paneconfiguration_Update extends msdyn_paneconfiguration {
}
interface msdyn_paneconfiguration_Select {
  componentidunique: WebAttribute<msdyn_paneconfiguration_Select, { componentidunique: string | null }, {  }>;
  componentstate: WebAttribute<msdyn_paneconfiguration_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  createdby_guid: WebAttribute<msdyn_paneconfiguration_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_paneconfiguration_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_paneconfiguration_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_paneconfiguration_Select, { importsequencenumber: number | null }, {  }>;
  iscustomizable: WebAttribute<msdyn_paneconfiguration_Select, { iscustomizable: any | null }, {  }>;
  ismanaged: WebAttribute<msdyn_paneconfiguration_Select, { ismanaged: boolean | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_paneconfiguration_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_paneconfiguration_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_paneconfiguration_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_name: WebAttribute<msdyn_paneconfiguration_Select, { msdyn_name: string | null }, {  }>;
  msdyn_paneconfigurationid: WebAttribute<msdyn_paneconfiguration_Select, { msdyn_paneconfigurationid: string | null }, {  }>;
  msdyn_panemode: WebAttribute<msdyn_paneconfiguration_Select, { msdyn_panemode: boolean | null }, {  }>;
  msdyn_panestate: WebAttribute<msdyn_paneconfiguration_Select, { msdyn_panestate: boolean | null }, {  }>;
  msdyn_uniquename: WebAttribute<msdyn_paneconfiguration_Select, { msdyn_uniquename: string | null }, {  }>;
  organizationid_guid: WebAttribute<msdyn_paneconfiguration_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_paneconfiguration_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  overwritetime: WebAttribute<msdyn_paneconfiguration_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  solutionid: WebAttribute<msdyn_paneconfiguration_Select, { solutionid: string | null }, {  }>;
  statecode: WebAttribute<msdyn_paneconfiguration_Select, { statecode: msdyn_paneconfiguration_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_paneconfiguration_Select, { statuscode: msdyn_paneconfiguration_statuscode | null }, { statuscode_formatted?: string }>;
  supportingsolutionid: WebAttribute<msdyn_paneconfiguration_Select, { supportingsolutionid: string | null }, {  }>;
  timezoneruleversionnumber: WebAttribute<msdyn_paneconfiguration_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_paneconfiguration_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_paneconfiguration_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_paneconfiguration_Filter {
  componentidunique: XQW.Guid;
  componentstate: componentstate;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  iscustomizable: any;
  ismanaged: boolean;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_name: string;
  msdyn_paneconfigurationid: XQW.Guid;
  msdyn_panemode: boolean;
  msdyn_panestate: boolean;
  msdyn_uniquename: string;
  organizationid_guid: XQW.Guid;
  overriddencreatedon: Date;
  overwritetime: Date;
  solutionid: XQW.Guid;
  statecode: msdyn_paneconfiguration_statecode;
  statuscode: msdyn_paneconfiguration_statuscode;
  supportingsolutionid: XQW.Guid;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_paneconfiguration_Expand {
  createdby: WebExpand<msdyn_paneconfiguration_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_paneconfiguration_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_paneconfiguration_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_paneconfiguration_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_msdyn_paneconfig_msdyn_appconfig: WebExpand<msdyn_paneconfiguration_Expand, msdyn_appconfiguration_Select, msdyn_appconfiguration_Filter, { msdyn_msdyn_paneconfig_msdyn_appconfig: msdyn_appconfiguration_Result[] }>;
  msdyn_msdyn_paneconfig_msdyn_tabconfig: WebExpand<msdyn_paneconfiguration_Expand, msdyn_panetabconfiguration_Select, msdyn_panetabconfiguration_Filter, { msdyn_msdyn_paneconfig_msdyn_tabconfig: msdyn_panetabconfiguration_Result[] }>;
  msdyn_paneconfiguration_AsyncOperations: WebExpand<msdyn_paneconfiguration_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_paneconfiguration_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_paneconfiguration_BulkDeleteFailures: WebExpand<msdyn_paneconfiguration_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_paneconfiguration_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_paneconfiguration_DuplicateBaseRecord: WebExpand<msdyn_paneconfiguration_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_paneconfiguration_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_paneconfiguration_DuplicateMatchingRecord: WebExpand<msdyn_paneconfiguration_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_paneconfiguration_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_paneconfiguration_MailboxTrackingFolders: WebExpand<msdyn_paneconfiguration_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_paneconfiguration_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_paneconfiguration_PrincipalObjectAttributeAccesses: WebExpand<msdyn_paneconfiguration_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_paneconfiguration_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_paneconfiguration_ProcessSession: WebExpand<msdyn_paneconfiguration_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_paneconfiguration_ProcessSession: ProcessSession_Result[] }>;
  msdyn_paneconfiguration_SyncErrors: WebExpand<msdyn_paneconfiguration_Expand, SyncError_Select, SyncError_Filter, { msdyn_paneconfiguration_SyncErrors: SyncError_Result[] }>;
  msdyn_paneconfiguration_UserEntityInstanceDatas: WebExpand<msdyn_paneconfiguration_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_paneconfiguration_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  organizationid: WebExpand<msdyn_paneconfiguration_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
}
interface msdyn_paneconfiguration_FormattedResult {
  componentstate_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  organizationid_formatted?: string;
  overriddencreatedon_formatted?: string;
  overwritetime_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_paneconfiguration_Result extends msdyn_paneconfiguration_Base, msdyn_paneconfiguration_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
}
interface msdyn_paneconfiguration_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
}
interface msdyn_paneconfiguration_RelatedMany {
  msdyn_msdyn_paneconfig_msdyn_appconfig: WebMappingRetrieve<msdyn_appconfiguration_Select,msdyn_appconfiguration_Expand,msdyn_appconfiguration_Filter,msdyn_appconfiguration_Fixed,msdyn_appconfiguration_Result,msdyn_appconfiguration_FormattedResult>;
  msdyn_msdyn_paneconfig_msdyn_tabconfig: WebMappingRetrieve<msdyn_panetabconfiguration_Select,msdyn_panetabconfiguration_Expand,msdyn_panetabconfiguration_Filter,msdyn_panetabconfiguration_Fixed,msdyn_panetabconfiguration_Result,msdyn_panetabconfiguration_FormattedResult>;
  msdyn_paneconfiguration_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_paneconfiguration_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_paneconfiguration_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_paneconfiguration_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_paneconfiguration_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_paneconfiguration_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_paneconfiguration_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_paneconfiguration_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_paneconfiguration_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_paneconfigurations: WebMappingRetrieve<msdyn_paneconfiguration_Select,msdyn_paneconfiguration_Expand,msdyn_paneconfiguration_Filter,msdyn_paneconfiguration_Fixed,msdyn_paneconfiguration_Result,msdyn_paneconfiguration_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_paneconfigurations: WebMappingRelated<msdyn_paneconfiguration_RelatedOne,msdyn_paneconfiguration_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_paneconfigurations: WebMappingCUDA<msdyn_paneconfiguration_Create,msdyn_paneconfiguration_Update,msdyn_paneconfiguration_Select>;
}
