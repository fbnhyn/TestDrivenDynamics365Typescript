interface datalakefolder_Base extends WebEntity {
  componentidunique?: string | null;
  componentstate?: componentstate | null;
  containerendpoint?: string | null;
  contributorsecuritygroupid?: string | null;
  createdon?: Date | null;
  datalakefolder_uniquename?: string | null;
  datalakefolderid?: string | null;
  extendedproperties?: string | null;
  importsequencenumber?: number | null;
  iscustomercapacity?: boolean | null;
  iscustomizable?: any | null;
  isdeepcopyenabled?: boolean | null;
  isexternallake?: boolean | null;
  isexternallakereadonly?: boolean | null;
  ismanaged?: boolean | null;
  isprivate?: boolean | null;
  modifiedon?: Date | null;
  name?: string | null;
  overriddencreatedon?: Date | null;
  overwritetime?: Date | null;
  owningappid?: string | null;
  path?: string | null;
  readersecuritygroupid?: string | null;
  solutionid?: string | null;
  statecode?: datalakefolder_statecode | null;
  statuscode?: datalakefolder_statuscode | null;
  supportingsolutionid?: string | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface datalakefolder_Relationships {
  datalakefolder_AsyncOperations?: AsyncOperation_Result[] | null;
  datalakefolder_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  datalakefolder_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  datalakefolder_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  datalakefolder_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  datalakefolder_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  datalakefolder_ProcessSession?: ProcessSession_Result[] | null;
  datalakefolder_SyncErrors?: SyncError_Result[] | null;
  datalakefolder_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  datalakefolder_datalakefolderpermission?: datalakefolderpermission_Result[] | null;
}
interface datalakefolder extends datalakefolder_Base, datalakefolder_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface datalakefolder_Create extends datalakefolder {
}
interface datalakefolder_Update extends datalakefolder {
}
interface datalakefolder_Select {
  componentidunique: WebAttribute<datalakefolder_Select, { componentidunique: string | null }, {  }>;
  componentstate: WebAttribute<datalakefolder_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  containerendpoint: WebAttribute<datalakefolder_Select, { containerendpoint: string | null }, {  }>;
  contributorsecuritygroupid: WebAttribute<datalakefolder_Select, { contributorsecuritygroupid: string | null }, {  }>;
  createdby_guid: WebAttribute<datalakefolder_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<datalakefolder_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<datalakefolder_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  datalakefolder_uniquename: WebAttribute<datalakefolder_Select, { datalakefolder_uniquename: string | null }, {  }>;
  datalakefolderid: WebAttribute<datalakefolder_Select, { datalakefolderid: string | null }, {  }>;
  extendedproperties: WebAttribute<datalakefolder_Select, { extendedproperties: string | null }, {  }>;
  importsequencenumber: WebAttribute<datalakefolder_Select, { importsequencenumber: number | null }, {  }>;
  iscustomercapacity: WebAttribute<datalakefolder_Select, { iscustomercapacity: boolean | null }, {  }>;
  iscustomizable: WebAttribute<datalakefolder_Select, { iscustomizable: any | null }, {  }>;
  isdeepcopyenabled: WebAttribute<datalakefolder_Select, { isdeepcopyenabled: boolean | null }, {  }>;
  isexternallake: WebAttribute<datalakefolder_Select, { isexternallake: boolean | null }, {  }>;
  isexternallakereadonly: WebAttribute<datalakefolder_Select, { isexternallakereadonly: boolean | null }, {  }>;
  ismanaged: WebAttribute<datalakefolder_Select, { ismanaged: boolean | null }, {  }>;
  isprivate: WebAttribute<datalakefolder_Select, { isprivate: boolean | null }, {  }>;
  modifiedby_guid: WebAttribute<datalakefolder_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<datalakefolder_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<datalakefolder_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  name: WebAttribute<datalakefolder_Select, { name: string | null }, {  }>;
  overriddencreatedon: WebAttribute<datalakefolder_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  overwritetime: WebAttribute<datalakefolder_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  ownerid_guid: WebAttribute<datalakefolder_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningappid: WebAttribute<datalakefolder_Select, { owningappid: string | null }, {  }>;
  owningbusinessunit_guid: WebAttribute<datalakefolder_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<datalakefolder_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<datalakefolder_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  path: WebAttribute<datalakefolder_Select, { path: string | null }, {  }>;
  readersecuritygroupid: WebAttribute<datalakefolder_Select, { readersecuritygroupid: string | null }, {  }>;
  solutionid: WebAttribute<datalakefolder_Select, { solutionid: string | null }, {  }>;
  statecode: WebAttribute<datalakefolder_Select, { statecode: datalakefolder_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<datalakefolder_Select, { statuscode: datalakefolder_statuscode | null }, { statuscode_formatted?: string }>;
  supportingsolutionid: WebAttribute<datalakefolder_Select, { supportingsolutionid: string | null }, {  }>;
  timezoneruleversionnumber: WebAttribute<datalakefolder_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<datalakefolder_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<datalakefolder_Select, { versionnumber: number | null }, {  }>;
}
interface datalakefolder_Filter {
  componentidunique: XQW.Guid;
  componentstate: componentstate;
  containerendpoint: string;
  contributorsecuritygroupid: XQW.Guid;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  datalakefolder_uniquename: string;
  datalakefolderid: XQW.Guid;
  extendedproperties: string;
  importsequencenumber: number;
  iscustomercapacity: boolean;
  iscustomizable: any;
  isdeepcopyenabled: boolean;
  isexternallake: boolean;
  isexternallakereadonly: boolean;
  ismanaged: boolean;
  isprivate: boolean;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  name: string;
  overriddencreatedon: Date;
  overwritetime: Date;
  ownerid_guid: XQW.Guid;
  owningappid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  path: string;
  readersecuritygroupid: XQW.Guid;
  solutionid: XQW.Guid;
  statecode: datalakefolder_statecode;
  statuscode: datalakefolder_statuscode;
  supportingsolutionid: XQW.Guid;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface datalakefolder_Expand {
  createdby: WebExpand<datalakefolder_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<datalakefolder_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  datalakefolder_AsyncOperations: WebExpand<datalakefolder_Expand, AsyncOperation_Select, AsyncOperation_Filter, { datalakefolder_AsyncOperations: AsyncOperation_Result[] }>;
  datalakefolder_BulkDeleteFailures: WebExpand<datalakefolder_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { datalakefolder_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  datalakefolder_DuplicateBaseRecord: WebExpand<datalakefolder_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { datalakefolder_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  datalakefolder_DuplicateMatchingRecord: WebExpand<datalakefolder_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { datalakefolder_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  datalakefolder_MailboxTrackingFolders: WebExpand<datalakefolder_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { datalakefolder_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  datalakefolder_PrincipalObjectAttributeAccesses: WebExpand<datalakefolder_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { datalakefolder_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  datalakefolder_ProcessSession: WebExpand<datalakefolder_Expand, ProcessSession_Select, ProcessSession_Filter, { datalakefolder_ProcessSession: ProcessSession_Result[] }>;
  datalakefolder_SyncErrors: WebExpand<datalakefolder_Expand, SyncError_Select, SyncError_Filter, { datalakefolder_SyncErrors: SyncError_Result[] }>;
  datalakefolder_UserEntityInstanceDatas: WebExpand<datalakefolder_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { datalakefolder_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  datalakefolder_datalakefolderpermission: WebExpand<datalakefolder_Expand, datalakefolderpermission_Select, datalakefolderpermission_Filter, { datalakefolder_datalakefolderpermission: datalakefolderpermission_Result[] }>;
  modifiedby: WebExpand<datalakefolder_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<datalakefolder_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  ownerid: WebExpand<datalakefolder_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<datalakefolder_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<datalakefolder_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<datalakefolder_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface datalakefolder_FormattedResult {
  componentstate_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
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
interface datalakefolder_Result extends datalakefolder_Base, datalakefolder_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface datalakefolder_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface datalakefolder_RelatedMany {
  datalakefolder_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  datalakefolder_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  datalakefolder_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  datalakefolder_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  datalakefolder_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  datalakefolder_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  datalakefolder_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  datalakefolder_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  datalakefolder_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  datalakefolder_datalakefolderpermission: WebMappingRetrieve<datalakefolderpermission_Select,datalakefolderpermission_Expand,datalakefolderpermission_Filter,datalakefolderpermission_Fixed,datalakefolderpermission_Result,datalakefolderpermission_FormattedResult>;
}
interface WebEntitiesRetrieve {
  datalakefolders: WebMappingRetrieve<datalakefolder_Select,datalakefolder_Expand,datalakefolder_Filter,datalakefolder_Fixed,datalakefolder_Result,datalakefolder_FormattedResult>;
}
interface WebEntitiesRelated {
  datalakefolders: WebMappingRelated<datalakefolder_RelatedOne,datalakefolder_RelatedMany>;
}
interface WebEntitiesCUDA {
  datalakefolders: WebMappingCUDA<datalakefolder_Create,datalakefolder_Update,datalakefolder_Select>;
}
