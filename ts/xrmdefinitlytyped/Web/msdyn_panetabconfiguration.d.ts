interface msdyn_panetabconfiguration_Base extends WebEntity {
  componentidunique?: string | null;
  componentstate?: componentstate | null;
  createdon?: Date | null;
  importsequencenumber?: number | null;
  iscustomizable?: any | null;
  ismanaged?: boolean | null;
  modifiedon?: Date | null;
  msdyn_iconpath?: string | null;
  msdyn_isenabled?: boolean | null;
  msdyn_name?: string | null;
  msdyn_order?: number | null;
  msdyn_panetabconfigurationid?: string | null;
  msdyn_tooltip?: string | null;
  msdyn_uniquename?: string | null;
  overriddencreatedon?: Date | null;
  overwritetime?: Date | null;
  solutionid?: string | null;
  statecode?: msdyn_panetabconfiguration_statecode | null;
  statuscode?: msdyn_panetabconfiguration_statuscode | null;
  supportingsolutionid?: string | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_panetabconfiguration_Relationships {
  msdyn_ProductivityPaneId?: msdyn_paneconfiguration_Result | null;
  msdyn_ToolId?: msdyn_panetoolconfiguration_Result | null;
  msdyn_panetabconfiguration_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_panetabconfiguration_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_panetabconfiguration_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_panetabconfiguration_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_panetabconfiguration_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_panetabconfiguration_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_panetabconfiguration_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_panetabconfiguration_SyncErrors?: SyncError_Result[] | null;
  msdyn_panetabconfiguration_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_panetabconfiguration extends msdyn_panetabconfiguration_Base, msdyn_panetabconfiguration_Relationships {
  msdyn_ProductivityPaneId_bind$msdyn_paneconfigurations?: string | null;
  msdyn_ToolId_bind$msdyn_panetoolconfigurations?: string | null;
}
interface msdyn_panetabconfiguration_Create extends msdyn_panetabconfiguration {
}
interface msdyn_panetabconfiguration_Update extends msdyn_panetabconfiguration {
}
interface msdyn_panetabconfiguration_Select {
  componentidunique: WebAttribute<msdyn_panetabconfiguration_Select, { componentidunique: string | null }, {  }>;
  componentstate: WebAttribute<msdyn_panetabconfiguration_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  createdby_guid: WebAttribute<msdyn_panetabconfiguration_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_panetabconfiguration_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_panetabconfiguration_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_panetabconfiguration_Select, { importsequencenumber: number | null }, {  }>;
  iscustomizable: WebAttribute<msdyn_panetabconfiguration_Select, { iscustomizable: any | null }, {  }>;
  ismanaged: WebAttribute<msdyn_panetabconfiguration_Select, { ismanaged: boolean | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_panetabconfiguration_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_panetabconfiguration_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_panetabconfiguration_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_iconpath: WebAttribute<msdyn_panetabconfiguration_Select, { msdyn_iconpath: string | null }, {  }>;
  msdyn_isenabled: WebAttribute<msdyn_panetabconfiguration_Select, { msdyn_isenabled: boolean | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_panetabconfiguration_Select, { msdyn_name: string | null }, {  }>;
  msdyn_order: WebAttribute<msdyn_panetabconfiguration_Select, { msdyn_order: number | null }, {  }>;
  msdyn_panetabconfigurationid: WebAttribute<msdyn_panetabconfiguration_Select, { msdyn_panetabconfigurationid: string | null }, {  }>;
  msdyn_productivitypaneid_guid: WebAttribute<msdyn_panetabconfiguration_Select, { msdyn_productivitypaneid_guid: string | null }, { msdyn_productivitypaneid_formatted?: string }>;
  msdyn_toolid_guid: WebAttribute<msdyn_panetabconfiguration_Select, { msdyn_toolid_guid: string | null }, { msdyn_toolid_formatted?: string }>;
  msdyn_tooltip: WebAttribute<msdyn_panetabconfiguration_Select, { msdyn_tooltip: string | null }, {  }>;
  msdyn_uniquename: WebAttribute<msdyn_panetabconfiguration_Select, { msdyn_uniquename: string | null }, {  }>;
  organizationid_guid: WebAttribute<msdyn_panetabconfiguration_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_panetabconfiguration_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  overwritetime: WebAttribute<msdyn_panetabconfiguration_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  solutionid: WebAttribute<msdyn_panetabconfiguration_Select, { solutionid: string | null }, {  }>;
  statecode: WebAttribute<msdyn_panetabconfiguration_Select, { statecode: msdyn_panetabconfiguration_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_panetabconfiguration_Select, { statuscode: msdyn_panetabconfiguration_statuscode | null }, { statuscode_formatted?: string }>;
  supportingsolutionid: WebAttribute<msdyn_panetabconfiguration_Select, { supportingsolutionid: string | null }, {  }>;
  timezoneruleversionnumber: WebAttribute<msdyn_panetabconfiguration_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_panetabconfiguration_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_panetabconfiguration_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_panetabconfiguration_Filter {
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
  msdyn_iconpath: string;
  msdyn_isenabled: boolean;
  msdyn_name: string;
  msdyn_order: number;
  msdyn_panetabconfigurationid: XQW.Guid;
  msdyn_productivitypaneid_guid: XQW.Guid;
  msdyn_toolid_guid: XQW.Guid;
  msdyn_tooltip: string;
  msdyn_uniquename: string;
  organizationid_guid: XQW.Guid;
  overriddencreatedon: Date;
  overwritetime: Date;
  solutionid: XQW.Guid;
  statecode: msdyn_panetabconfiguration_statecode;
  statuscode: msdyn_panetabconfiguration_statuscode;
  supportingsolutionid: XQW.Guid;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_panetabconfiguration_Expand {
  createdby: WebExpand<msdyn_panetabconfiguration_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_panetabconfiguration_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_panetabconfiguration_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_panetabconfiguration_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_ProductivityPaneId: WebExpand<msdyn_panetabconfiguration_Expand, msdyn_paneconfiguration_Select, msdyn_paneconfiguration_Filter, { msdyn_ProductivityPaneId: msdyn_paneconfiguration_Result }>;
  msdyn_ToolId: WebExpand<msdyn_panetabconfiguration_Expand, msdyn_panetoolconfiguration_Select, msdyn_panetoolconfiguration_Filter, { msdyn_ToolId: msdyn_panetoolconfiguration_Result }>;
  msdyn_panetabconfiguration_AsyncOperations: WebExpand<msdyn_panetabconfiguration_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_panetabconfiguration_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_panetabconfiguration_BulkDeleteFailures: WebExpand<msdyn_panetabconfiguration_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_panetabconfiguration_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_panetabconfiguration_DuplicateBaseRecord: WebExpand<msdyn_panetabconfiguration_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_panetabconfiguration_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_panetabconfiguration_DuplicateMatchingRecord: WebExpand<msdyn_panetabconfiguration_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_panetabconfiguration_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_panetabconfiguration_MailboxTrackingFolders: WebExpand<msdyn_panetabconfiguration_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_panetabconfiguration_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_panetabconfiguration_PrincipalObjectAttributeAccesses: WebExpand<msdyn_panetabconfiguration_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_panetabconfiguration_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_panetabconfiguration_ProcessSession: WebExpand<msdyn_panetabconfiguration_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_panetabconfiguration_ProcessSession: ProcessSession_Result[] }>;
  msdyn_panetabconfiguration_SyncErrors: WebExpand<msdyn_panetabconfiguration_Expand, SyncError_Select, SyncError_Filter, { msdyn_panetabconfiguration_SyncErrors: SyncError_Result[] }>;
  msdyn_panetabconfiguration_UserEntityInstanceDatas: WebExpand<msdyn_panetabconfiguration_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_panetabconfiguration_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  organizationid: WebExpand<msdyn_panetabconfiguration_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
}
interface msdyn_panetabconfiguration_FormattedResult {
  componentstate_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_productivitypaneid_formatted?: string;
  msdyn_toolid_formatted?: string;
  organizationid_formatted?: string;
  overriddencreatedon_formatted?: string;
  overwritetime_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_panetabconfiguration_Result extends msdyn_panetabconfiguration_Base, msdyn_panetabconfiguration_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_productivitypaneid_guid: string | null;
  msdyn_toolid_guid: string | null;
  organizationid_guid: string | null;
}
interface msdyn_panetabconfiguration_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_ProductivityPaneId: WebMappingRetrieve<msdyn_paneconfiguration_Select,msdyn_paneconfiguration_Expand,msdyn_paneconfiguration_Filter,msdyn_paneconfiguration_Fixed,msdyn_paneconfiguration_Result,msdyn_paneconfiguration_FormattedResult>;
  msdyn_ToolId: WebMappingRetrieve<msdyn_panetoolconfiguration_Select,msdyn_panetoolconfiguration_Expand,msdyn_panetoolconfiguration_Filter,msdyn_panetoolconfiguration_Fixed,msdyn_panetoolconfiguration_Result,msdyn_panetoolconfiguration_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
}
interface msdyn_panetabconfiguration_RelatedMany {
  msdyn_panetabconfiguration_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_panetabconfiguration_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_panetabconfiguration_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_panetabconfiguration_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_panetabconfiguration_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_panetabconfiguration_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_panetabconfiguration_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_panetabconfiguration_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_panetabconfiguration_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_panetabconfigurations: WebMappingRetrieve<msdyn_panetabconfiguration_Select,msdyn_panetabconfiguration_Expand,msdyn_panetabconfiguration_Filter,msdyn_panetabconfiguration_Fixed,msdyn_panetabconfiguration_Result,msdyn_panetabconfiguration_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_panetabconfigurations: WebMappingRelated<msdyn_panetabconfiguration_RelatedOne,msdyn_panetabconfiguration_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_panetabconfigurations: WebMappingCUDA<msdyn_panetabconfiguration_Create,msdyn_panetabconfiguration_Update,msdyn_panetabconfiguration_Select>;
}
