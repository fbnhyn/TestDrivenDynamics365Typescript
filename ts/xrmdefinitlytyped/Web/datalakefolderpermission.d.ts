interface datalakefolderpermission_Base extends WebEntity {
  appid?: string | null;
  canexecute?: boolean | null;
  canread?: boolean | null;
  canwrite?: boolean | null;
  componentidunique?: string | null;
  componentstate?: componentstate | null;
  createdon?: Date | null;
  datalakefolderpermission_uniquename?: string | null;
  datalakefolderpermissionid?: string | null;
  importsequencenumber?: number | null;
  iscustomizable?: any | null;
  ismanaged?: boolean | null;
  modifiedon?: Date | null;
  name?: string | null;
  overriddencreatedon?: Date | null;
  overwritetime?: Date | null;
  solutionid?: string | null;
  statecode?: datalakefolderpermission_statecode | null;
  statuscode?: datalakefolderpermission_statuscode | null;
  supportingsolutionid?: string | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface datalakefolderpermission_Relationships {
  datalakefolderpermission_AsyncOperations?: AsyncOperation_Result[] | null;
  datalakefolderpermission_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  datalakefolderpermission_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  datalakefolderpermission_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  datalakefolderpermission_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  datalakefolderpermission_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  datalakefolderpermission_ProcessSession?: ProcessSession_Result[] | null;
  datalakefolderpermission_SyncErrors?: SyncError_Result[] | null;
  datalakefolderpermission_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface datalakefolderpermission extends datalakefolderpermission_Base, datalakefolderpermission_Relationships {
  folderid_bind$datalakefolders?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface datalakefolderpermission_Create extends datalakefolderpermission {
}
interface datalakefolderpermission_Update extends datalakefolderpermission {
}
interface datalakefolderpermission_Select {
  appid: WebAttribute<datalakefolderpermission_Select, { appid: string | null }, {  }>;
  canexecute: WebAttribute<datalakefolderpermission_Select, { canexecute: boolean | null }, {  }>;
  canread: WebAttribute<datalakefolderpermission_Select, { canread: boolean | null }, {  }>;
  canwrite: WebAttribute<datalakefolderpermission_Select, { canwrite: boolean | null }, {  }>;
  componentidunique: WebAttribute<datalakefolderpermission_Select, { componentidunique: string | null }, {  }>;
  componentstate: WebAttribute<datalakefolderpermission_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  createdby_guid: WebAttribute<datalakefolderpermission_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<datalakefolderpermission_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<datalakefolderpermission_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  datalakefolderpermission_uniquename: WebAttribute<datalakefolderpermission_Select, { datalakefolderpermission_uniquename: string | null }, {  }>;
  datalakefolderpermissionid: WebAttribute<datalakefolderpermission_Select, { datalakefolderpermissionid: string | null }, {  }>;
  folderid_guid: WebAttribute<datalakefolderpermission_Select, { folderid_guid: string | null }, { folderid_formatted?: string }>;
  importsequencenumber: WebAttribute<datalakefolderpermission_Select, { importsequencenumber: number | null }, {  }>;
  iscustomizable: WebAttribute<datalakefolderpermission_Select, { iscustomizable: any | null }, {  }>;
  ismanaged: WebAttribute<datalakefolderpermission_Select, { ismanaged: boolean | null }, {  }>;
  modifiedby_guid: WebAttribute<datalakefolderpermission_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<datalakefolderpermission_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<datalakefolderpermission_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  name: WebAttribute<datalakefolderpermission_Select, { name: string | null }, {  }>;
  overriddencreatedon: WebAttribute<datalakefolderpermission_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  overwritetime: WebAttribute<datalakefolderpermission_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  ownerid_guid: WebAttribute<datalakefolderpermission_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<datalakefolderpermission_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<datalakefolderpermission_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<datalakefolderpermission_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  solutionid: WebAttribute<datalakefolderpermission_Select, { solutionid: string | null }, {  }>;
  statecode: WebAttribute<datalakefolderpermission_Select, { statecode: datalakefolderpermission_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<datalakefolderpermission_Select, { statuscode: datalakefolderpermission_statuscode | null }, { statuscode_formatted?: string }>;
  supportingsolutionid: WebAttribute<datalakefolderpermission_Select, { supportingsolutionid: string | null }, {  }>;
  timezoneruleversionnumber: WebAttribute<datalakefolderpermission_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<datalakefolderpermission_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<datalakefolderpermission_Select, { versionnumber: number | null }, {  }>;
}
interface datalakefolderpermission_Filter {
  appid: XQW.Guid;
  canexecute: boolean;
  canread: boolean;
  canwrite: boolean;
  componentidunique: XQW.Guid;
  componentstate: componentstate;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  datalakefolderpermission_uniquename: string;
  datalakefolderpermissionid: XQW.Guid;
  folderid_guid: XQW.Guid;
  importsequencenumber: number;
  iscustomizable: any;
  ismanaged: boolean;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  name: string;
  overriddencreatedon: Date;
  overwritetime: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  solutionid: XQW.Guid;
  statecode: datalakefolderpermission_statecode;
  statuscode: datalakefolderpermission_statuscode;
  supportingsolutionid: XQW.Guid;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface datalakefolderpermission_Expand {
  createdby: WebExpand<datalakefolderpermission_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<datalakefolderpermission_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  datalakefolderpermission_AsyncOperations: WebExpand<datalakefolderpermission_Expand, AsyncOperation_Select, AsyncOperation_Filter, { datalakefolderpermission_AsyncOperations: AsyncOperation_Result[] }>;
  datalakefolderpermission_BulkDeleteFailures: WebExpand<datalakefolderpermission_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { datalakefolderpermission_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  datalakefolderpermission_DuplicateBaseRecord: WebExpand<datalakefolderpermission_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { datalakefolderpermission_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  datalakefolderpermission_DuplicateMatchingRecord: WebExpand<datalakefolderpermission_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { datalakefolderpermission_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  datalakefolderpermission_MailboxTrackingFolders: WebExpand<datalakefolderpermission_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { datalakefolderpermission_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  datalakefolderpermission_PrincipalObjectAttributeAccesses: WebExpand<datalakefolderpermission_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { datalakefolderpermission_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  datalakefolderpermission_ProcessSession: WebExpand<datalakefolderpermission_Expand, ProcessSession_Select, ProcessSession_Filter, { datalakefolderpermission_ProcessSession: ProcessSession_Result[] }>;
  datalakefolderpermission_SyncErrors: WebExpand<datalakefolderpermission_Expand, SyncError_Select, SyncError_Filter, { datalakefolderpermission_SyncErrors: SyncError_Result[] }>;
  datalakefolderpermission_UserEntityInstanceDatas: WebExpand<datalakefolderpermission_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { datalakefolderpermission_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  folderid: WebExpand<datalakefolderpermission_Expand, datalakefolder_Select, datalakefolder_Filter, { folderid: datalakefolder_Result }>;
  modifiedby: WebExpand<datalakefolderpermission_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<datalakefolderpermission_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  ownerid: WebExpand<datalakefolderpermission_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<datalakefolderpermission_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<datalakefolderpermission_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<datalakefolderpermission_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface datalakefolderpermission_FormattedResult {
  componentstate_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  folderid_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  overriddencreatedon_formatted?: string;
  overwritetime_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface datalakefolderpermission_Result extends datalakefolderpermission_Base, datalakefolderpermission_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  folderid_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface datalakefolderpermission_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  folderid: WebMappingRetrieve<datalakefolder_Select,datalakefolder_Expand,datalakefolder_Filter,datalakefolder_Fixed,datalakefolder_Result,datalakefolder_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface datalakefolderpermission_RelatedMany {
  datalakefolderpermission_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  datalakefolderpermission_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  datalakefolderpermission_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  datalakefolderpermission_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  datalakefolderpermission_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  datalakefolderpermission_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  datalakefolderpermission_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  datalakefolderpermission_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  datalakefolderpermission_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  datalakefolderpermissions: WebMappingRetrieve<datalakefolderpermission_Select,datalakefolderpermission_Expand,datalakefolderpermission_Filter,datalakefolderpermission_Fixed,datalakefolderpermission_Result,datalakefolderpermission_FormattedResult>;
}
interface WebEntitiesRelated {
  datalakefolderpermissions: WebMappingRelated<datalakefolderpermission_RelatedOne,datalakefolderpermission_RelatedMany>;
}
interface WebEntitiesCUDA {
  datalakefolderpermissions: WebMappingCUDA<datalakefolderpermission_Create,datalakefolderpermission_Update,datalakefolderpermission_Select>;
}
