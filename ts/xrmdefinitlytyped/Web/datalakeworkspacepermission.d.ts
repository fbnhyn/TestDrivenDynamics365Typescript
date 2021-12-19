interface datalakeworkspacepermission_Base extends WebEntity {
  appid?: string | null;
  canexecute?: boolean | null;
  canread?: boolean | null;
  canwrite?: boolean | null;
  componentidunique?: string | null;
  componentstate?: componentstate | null;
  createdon?: Date | null;
  datalakeworkspacepermission_uniquename?: string | null;
  datalakeworkspacepermissionid?: string | null;
  importsequencenumber?: number | null;
  iscustomizable?: any | null;
  ismanaged?: boolean | null;
  modifiedon?: Date | null;
  name?: string | null;
  overriddencreatedon?: Date | null;
  overwritetime?: Date | null;
  solutionid?: string | null;
  statecode?: datalakeworkspacepermission_statecode | null;
  statuscode?: datalakeworkspacepermission_statuscode | null;
  supportingsolutionid?: string | null;
  tenantid?: string | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
  whitelistedappid?: string | null;
}
interface datalakeworkspacepermission_Relationships {
  datalakeworkspacepermission_AsyncOperations?: AsyncOperation_Result[] | null;
  datalakeworkspacepermission_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  datalakeworkspacepermission_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  datalakeworkspacepermission_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  datalakeworkspacepermission_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  datalakeworkspacepermission_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  datalakeworkspacepermission_ProcessSession?: ProcessSession_Result[] | null;
  datalakeworkspacepermission_SyncErrors?: SyncError_Result[] | null;
  datalakeworkspacepermission_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface datalakeworkspacepermission extends datalakeworkspacepermission_Base, datalakeworkspacepermission_Relationships {
  workspaceid_bind$datalakeworkspaces?: string | null;
}
interface datalakeworkspacepermission_Create extends datalakeworkspacepermission {
}
interface datalakeworkspacepermission_Update extends datalakeworkspacepermission {
}
interface datalakeworkspacepermission_Select {
  appid: WebAttribute<datalakeworkspacepermission_Select, { appid: string | null }, {  }>;
  canexecute: WebAttribute<datalakeworkspacepermission_Select, { canexecute: boolean | null }, {  }>;
  canread: WebAttribute<datalakeworkspacepermission_Select, { canread: boolean | null }, {  }>;
  canwrite: WebAttribute<datalakeworkspacepermission_Select, { canwrite: boolean | null }, {  }>;
  componentidunique: WebAttribute<datalakeworkspacepermission_Select, { componentidunique: string | null }, {  }>;
  componentstate: WebAttribute<datalakeworkspacepermission_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  createdby_guid: WebAttribute<datalakeworkspacepermission_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<datalakeworkspacepermission_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<datalakeworkspacepermission_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  datalakeworkspacepermission_uniquename: WebAttribute<datalakeworkspacepermission_Select, { datalakeworkspacepermission_uniquename: string | null }, {  }>;
  datalakeworkspacepermissionid: WebAttribute<datalakeworkspacepermission_Select, { datalakeworkspacepermissionid: string | null }, {  }>;
  importsequencenumber: WebAttribute<datalakeworkspacepermission_Select, { importsequencenumber: number | null }, {  }>;
  iscustomizable: WebAttribute<datalakeworkspacepermission_Select, { iscustomizable: any | null }, {  }>;
  ismanaged: WebAttribute<datalakeworkspacepermission_Select, { ismanaged: boolean | null }, {  }>;
  modifiedby_guid: WebAttribute<datalakeworkspacepermission_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<datalakeworkspacepermission_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<datalakeworkspacepermission_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  name: WebAttribute<datalakeworkspacepermission_Select, { name: string | null }, {  }>;
  organizationid_guid: WebAttribute<datalakeworkspacepermission_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overriddencreatedon: WebAttribute<datalakeworkspacepermission_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  overwritetime: WebAttribute<datalakeworkspacepermission_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  solutionid: WebAttribute<datalakeworkspacepermission_Select, { solutionid: string | null }, {  }>;
  statecode: WebAttribute<datalakeworkspacepermission_Select, { statecode: datalakeworkspacepermission_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<datalakeworkspacepermission_Select, { statuscode: datalakeworkspacepermission_statuscode | null }, { statuscode_formatted?: string }>;
  supportingsolutionid: WebAttribute<datalakeworkspacepermission_Select, { supportingsolutionid: string | null }, {  }>;
  tenantid: WebAttribute<datalakeworkspacepermission_Select, { tenantid: string | null }, {  }>;
  timezoneruleversionnumber: WebAttribute<datalakeworkspacepermission_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<datalakeworkspacepermission_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<datalakeworkspacepermission_Select, { versionnumber: number | null }, {  }>;
  whitelistedappid: WebAttribute<datalakeworkspacepermission_Select, { whitelistedappid: string | null }, {  }>;
  workspaceid_guid: WebAttribute<datalakeworkspacepermission_Select, { workspaceid_guid: string | null }, { workspaceid_formatted?: string }>;
}
interface datalakeworkspacepermission_Filter {
  appid: XQW.Guid;
  canexecute: boolean;
  canread: boolean;
  canwrite: boolean;
  componentidunique: XQW.Guid;
  componentstate: componentstate;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  datalakeworkspacepermission_uniquename: string;
  datalakeworkspacepermissionid: XQW.Guid;
  importsequencenumber: number;
  iscustomizable: any;
  ismanaged: boolean;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  name: string;
  organizationid_guid: XQW.Guid;
  overriddencreatedon: Date;
  overwritetime: Date;
  solutionid: XQW.Guid;
  statecode: datalakeworkspacepermission_statecode;
  statuscode: datalakeworkspacepermission_statuscode;
  supportingsolutionid: XQW.Guid;
  tenantid: XQW.Guid;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
  whitelistedappid: XQW.Guid;
  workspaceid_guid: XQW.Guid;
}
interface datalakeworkspacepermission_Expand {
  createdby: WebExpand<datalakeworkspacepermission_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<datalakeworkspacepermission_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  datalakeworkspacepermission_AsyncOperations: WebExpand<datalakeworkspacepermission_Expand, AsyncOperation_Select, AsyncOperation_Filter, { datalakeworkspacepermission_AsyncOperations: AsyncOperation_Result[] }>;
  datalakeworkspacepermission_BulkDeleteFailures: WebExpand<datalakeworkspacepermission_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { datalakeworkspacepermission_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  datalakeworkspacepermission_DuplicateBaseRecord: WebExpand<datalakeworkspacepermission_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { datalakeworkspacepermission_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  datalakeworkspacepermission_DuplicateMatchingRecord: WebExpand<datalakeworkspacepermission_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { datalakeworkspacepermission_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  datalakeworkspacepermission_MailboxTrackingFolders: WebExpand<datalakeworkspacepermission_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { datalakeworkspacepermission_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  datalakeworkspacepermission_PrincipalObjectAttributeAccesses: WebExpand<datalakeworkspacepermission_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { datalakeworkspacepermission_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  datalakeworkspacepermission_ProcessSession: WebExpand<datalakeworkspacepermission_Expand, ProcessSession_Select, ProcessSession_Filter, { datalakeworkspacepermission_ProcessSession: ProcessSession_Result[] }>;
  datalakeworkspacepermission_SyncErrors: WebExpand<datalakeworkspacepermission_Expand, SyncError_Select, SyncError_Filter, { datalakeworkspacepermission_SyncErrors: SyncError_Result[] }>;
  datalakeworkspacepermission_UserEntityInstanceDatas: WebExpand<datalakeworkspacepermission_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { datalakeworkspacepermission_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  modifiedby: WebExpand<datalakeworkspacepermission_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<datalakeworkspacepermission_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  organizationid: WebExpand<datalakeworkspacepermission_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
  workspaceid: WebExpand<datalakeworkspacepermission_Expand, datalakeworkspace_Select, datalakeworkspace_Filter, { workspaceid: datalakeworkspace_Result }>;
}
interface datalakeworkspacepermission_FormattedResult {
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
  workspaceid_formatted?: string;
}
interface datalakeworkspacepermission_Result extends datalakeworkspacepermission_Base, datalakeworkspacepermission_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
  workspaceid_guid: string | null;
}
interface datalakeworkspacepermission_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
  workspaceid: WebMappingRetrieve<datalakeworkspace_Select,datalakeworkspace_Expand,datalakeworkspace_Filter,datalakeworkspace_Fixed,datalakeworkspace_Result,datalakeworkspace_FormattedResult>;
}
interface datalakeworkspacepermission_RelatedMany {
  datalakeworkspacepermission_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  datalakeworkspacepermission_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  datalakeworkspacepermission_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  datalakeworkspacepermission_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  datalakeworkspacepermission_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  datalakeworkspacepermission_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  datalakeworkspacepermission_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  datalakeworkspacepermission_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  datalakeworkspacepermission_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  datalakeworkspacepermissions: WebMappingRetrieve<datalakeworkspacepermission_Select,datalakeworkspacepermission_Expand,datalakeworkspacepermission_Filter,datalakeworkspacepermission_Fixed,datalakeworkspacepermission_Result,datalakeworkspacepermission_FormattedResult>;
}
interface WebEntitiesRelated {
  datalakeworkspacepermissions: WebMappingRelated<datalakeworkspacepermission_RelatedOne,datalakeworkspacepermission_RelatedMany>;
}
interface WebEntitiesCUDA {
  datalakeworkspacepermissions: WebMappingCUDA<datalakeworkspacepermission_Create,datalakeworkspacepermission_Update,datalakeworkspacepermission_Select>;
}
