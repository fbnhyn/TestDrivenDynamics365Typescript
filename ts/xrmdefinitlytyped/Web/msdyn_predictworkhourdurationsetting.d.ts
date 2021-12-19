interface msdyn_predictworkhourdurationsetting_Base extends WebEntity {
  componentidunique?: string | null;
  componentstate?: componentstate | null;
  createdon?: Date | null;
  importsequencenumber?: number | null;
  iscustomizable?: any | null;
  ismanaged?: boolean | null;
  modifiedon?: Date | null;
  msdyn_minresourcesperterritory?: number | null;
  msdyn_name?: string | null;
  msdyn_predictworkhourdurationsettingid?: string | null;
  overriddencreatedon?: Date | null;
  overwritetime?: Date | null;
  solutionid?: string | null;
  statecode?: msdyn_predictworkhourdurationsetting_statecode | null;
  statuscode?: msdyn_predictworkhourdurationsetting_statuscode | null;
  supportingsolutionid?: string | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_predictworkhourdurationsetting_Relationships {
  msdyn_predictworkhourdurationsetting_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_predictworkhourdurationsetting_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_predictworkhourdurationsetting_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_predictworkhourdurationsetting_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_predictworkhourdurationsetting_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_predictworkhourdurationsetting_SyncErrors?: SyncError_Result[] | null;
  msdyn_predictworkhourdurationsetting_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_predictworkhourdurationsetting extends msdyn_predictworkhourdurationsetting_Base, msdyn_predictworkhourdurationsetting_Relationships {
}
interface msdyn_predictworkhourdurationsetting_Create extends msdyn_predictworkhourdurationsetting {
}
interface msdyn_predictworkhourdurationsetting_Update extends msdyn_predictworkhourdurationsetting {
}
interface msdyn_predictworkhourdurationsetting_Select {
  componentidunique: WebAttribute<msdyn_predictworkhourdurationsetting_Select, { componentidunique: string | null }, {  }>;
  componentstate: WebAttribute<msdyn_predictworkhourdurationsetting_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  createdby_guid: WebAttribute<msdyn_predictworkhourdurationsetting_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_predictworkhourdurationsetting_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_predictworkhourdurationsetting_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_predictworkhourdurationsetting_Select, { importsequencenumber: number | null }, {  }>;
  iscustomizable: WebAttribute<msdyn_predictworkhourdurationsetting_Select, { iscustomizable: any | null }, {  }>;
  ismanaged: WebAttribute<msdyn_predictworkhourdurationsetting_Select, { ismanaged: boolean | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_predictworkhourdurationsetting_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_predictworkhourdurationsetting_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_predictworkhourdurationsetting_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_minresourcesperterritory: WebAttribute<msdyn_predictworkhourdurationsetting_Select, { msdyn_minresourcesperterritory: number | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_predictworkhourdurationsetting_Select, { msdyn_name: string | null }, {  }>;
  msdyn_predictworkhourdurationsettingid: WebAttribute<msdyn_predictworkhourdurationsetting_Select, { msdyn_predictworkhourdurationsettingid: string | null }, {  }>;
  organizationid_guid: WebAttribute<msdyn_predictworkhourdurationsetting_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_predictworkhourdurationsetting_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  overwritetime: WebAttribute<msdyn_predictworkhourdurationsetting_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  solutionid: WebAttribute<msdyn_predictworkhourdurationsetting_Select, { solutionid: string | null }, {  }>;
  statecode: WebAttribute<msdyn_predictworkhourdurationsetting_Select, { statecode: msdyn_predictworkhourdurationsetting_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_predictworkhourdurationsetting_Select, { statuscode: msdyn_predictworkhourdurationsetting_statuscode | null }, { statuscode_formatted?: string }>;
  supportingsolutionid: WebAttribute<msdyn_predictworkhourdurationsetting_Select, { supportingsolutionid: string | null }, {  }>;
  timezoneruleversionnumber: WebAttribute<msdyn_predictworkhourdurationsetting_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_predictworkhourdurationsetting_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_predictworkhourdurationsetting_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_predictworkhourdurationsetting_Filter {
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
  msdyn_minresourcesperterritory: number;
  msdyn_name: string;
  msdyn_predictworkhourdurationsettingid: XQW.Guid;
  organizationid_guid: XQW.Guid;
  overriddencreatedon: Date;
  overwritetime: Date;
  solutionid: XQW.Guid;
  statecode: msdyn_predictworkhourdurationsetting_statecode;
  statuscode: msdyn_predictworkhourdurationsetting_statuscode;
  supportingsolutionid: XQW.Guid;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_predictworkhourdurationsetting_Expand {
  createdby: WebExpand<msdyn_predictworkhourdurationsetting_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_predictworkhourdurationsetting_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_predictworkhourdurationsetting_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_predictworkhourdurationsetting_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_predictworkhourdurationsetting_AsyncOperations: WebExpand<msdyn_predictworkhourdurationsetting_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_predictworkhourdurationsetting_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_predictworkhourdurationsetting_BulkDeleteFailures: WebExpand<msdyn_predictworkhourdurationsetting_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_predictworkhourdurationsetting_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_predictworkhourdurationsetting_MailboxTrackingFolders: WebExpand<msdyn_predictworkhourdurationsetting_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_predictworkhourdurationsetting_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_predictworkhourdurationsetting_PrincipalObjectAttributeAccesses: WebExpand<msdyn_predictworkhourdurationsetting_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_predictworkhourdurationsetting_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_predictworkhourdurationsetting_ProcessSession: WebExpand<msdyn_predictworkhourdurationsetting_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_predictworkhourdurationsetting_ProcessSession: ProcessSession_Result[] }>;
  msdyn_predictworkhourdurationsetting_SyncErrors: WebExpand<msdyn_predictworkhourdurationsetting_Expand, SyncError_Select, SyncError_Filter, { msdyn_predictworkhourdurationsetting_SyncErrors: SyncError_Result[] }>;
  msdyn_predictworkhourdurationsetting_UserEntityInstanceDatas: WebExpand<msdyn_predictworkhourdurationsetting_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_predictworkhourdurationsetting_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  organizationid: WebExpand<msdyn_predictworkhourdurationsetting_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
}
interface msdyn_predictworkhourdurationsetting_FormattedResult {
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
interface msdyn_predictworkhourdurationsetting_Result extends msdyn_predictworkhourdurationsetting_Base, msdyn_predictworkhourdurationsetting_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
}
interface msdyn_predictworkhourdurationsetting_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
}
interface msdyn_predictworkhourdurationsetting_RelatedMany {
  msdyn_predictworkhourdurationsetting_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_predictworkhourdurationsetting_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_predictworkhourdurationsetting_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_predictworkhourdurationsetting_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_predictworkhourdurationsetting_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_predictworkhourdurationsetting_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_predictworkhourdurationsetting_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_predictworkhourdurationsettings: WebMappingRetrieve<msdyn_predictworkhourdurationsetting_Select,msdyn_predictworkhourdurationsetting_Expand,msdyn_predictworkhourdurationsetting_Filter,msdyn_predictworkhourdurationsetting_Fixed,msdyn_predictworkhourdurationsetting_Result,msdyn_predictworkhourdurationsetting_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_predictworkhourdurationsettings: WebMappingRelated<msdyn_predictworkhourdurationsetting_RelatedOne,msdyn_predictworkhourdurationsetting_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_predictworkhourdurationsettings: WebMappingCUDA<msdyn_predictworkhourdurationsetting_Create,msdyn_predictworkhourdurationsetting_Update,msdyn_predictworkhourdurationsetting_Select>;
}
