interface msdyn_analyticsforcs_Base extends WebEntity {
  componentidunique?: string | null;
  componentstate?: componentstate | null;
  createdon?: Date | null;
  importsequencenumber?: number | null;
  iscustomizable?: any | null;
  ismanaged?: boolean | null;
  modifiedon?: Date | null;
  msdyn_analyticsforcsid?: string | null;
  msdyn_name?: string | null;
  overriddencreatedon?: Date | null;
  overwritetime?: Date | null;
  solutionid?: string | null;
  statecode?: msdyn_analyticsforcs_statecode | null;
  statuscode?: msdyn_analyticsforcs_statuscode | null;
  supportingsolutionid?: string | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_analyticsforcs_Relationships {
  msdyn_analyticsforcs_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_analyticsforcs_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_analyticsforcs_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_analyticsforcs_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_analyticsforcs_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_analyticsforcs_SyncErrors?: SyncError_Result[] | null;
  msdyn_analyticsforcs_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_analyticsforcs extends msdyn_analyticsforcs_Base, msdyn_analyticsforcs_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_analyticsforcs_Create extends msdyn_analyticsforcs {
}
interface msdyn_analyticsforcs_Update extends msdyn_analyticsforcs {
}
interface msdyn_analyticsforcs_Select {
  componentidunique: WebAttribute<msdyn_analyticsforcs_Select, { componentidunique: string | null }, {  }>;
  componentstate: WebAttribute<msdyn_analyticsforcs_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  createdby_guid: WebAttribute<msdyn_analyticsforcs_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_analyticsforcs_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_analyticsforcs_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_analyticsforcs_Select, { importsequencenumber: number | null }, {  }>;
  iscustomizable: WebAttribute<msdyn_analyticsforcs_Select, { iscustomizable: any | null }, {  }>;
  ismanaged: WebAttribute<msdyn_analyticsforcs_Select, { ismanaged: boolean | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_analyticsforcs_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_analyticsforcs_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_analyticsforcs_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_analyticsforcsid: WebAttribute<msdyn_analyticsforcs_Select, { msdyn_analyticsforcsid: string | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_analyticsforcs_Select, { msdyn_name: string | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_analyticsforcs_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  overwritetime: WebAttribute<msdyn_analyticsforcs_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_analyticsforcs_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_analyticsforcs_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_analyticsforcs_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_analyticsforcs_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  solutionid: WebAttribute<msdyn_analyticsforcs_Select, { solutionid: string | null }, {  }>;
  statecode: WebAttribute<msdyn_analyticsforcs_Select, { statecode: msdyn_analyticsforcs_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_analyticsforcs_Select, { statuscode: msdyn_analyticsforcs_statuscode | null }, { statuscode_formatted?: string }>;
  supportingsolutionid: WebAttribute<msdyn_analyticsforcs_Select, { supportingsolutionid: string | null }, {  }>;
  timezoneruleversionnumber: WebAttribute<msdyn_analyticsforcs_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_analyticsforcs_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_analyticsforcs_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_analyticsforcs_Filter {
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
  msdyn_analyticsforcsid: XQW.Guid;
  msdyn_name: string;
  overriddencreatedon: Date;
  overwritetime: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  solutionid: XQW.Guid;
  statecode: msdyn_analyticsforcs_statecode;
  statuscode: msdyn_analyticsforcs_statuscode;
  supportingsolutionid: XQW.Guid;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_analyticsforcs_Expand {
  createdby: WebExpand<msdyn_analyticsforcs_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_analyticsforcs_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_analyticsforcs_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_analyticsforcs_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_analyticsforcs_AsyncOperations: WebExpand<msdyn_analyticsforcs_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_analyticsforcs_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_analyticsforcs_BulkDeleteFailures: WebExpand<msdyn_analyticsforcs_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_analyticsforcs_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_analyticsforcs_MailboxTrackingFolders: WebExpand<msdyn_analyticsforcs_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_analyticsforcs_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_analyticsforcs_PrincipalObjectAttributeAccesses: WebExpand<msdyn_analyticsforcs_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_analyticsforcs_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_analyticsforcs_ProcessSession: WebExpand<msdyn_analyticsforcs_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_analyticsforcs_ProcessSession: ProcessSession_Result[] }>;
  msdyn_analyticsforcs_SyncErrors: WebExpand<msdyn_analyticsforcs_Expand, SyncError_Select, SyncError_Filter, { msdyn_analyticsforcs_SyncErrors: SyncError_Result[] }>;
  msdyn_analyticsforcs_UserEntityInstanceDatas: WebExpand<msdyn_analyticsforcs_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_analyticsforcs_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  ownerid: WebExpand<msdyn_analyticsforcs_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_analyticsforcs_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_analyticsforcs_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_analyticsforcs_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_analyticsforcs_FormattedResult {
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
interface msdyn_analyticsforcs_Result extends msdyn_analyticsforcs_Base, msdyn_analyticsforcs_Relationships {
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
interface msdyn_analyticsforcs_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_analyticsforcs_RelatedMany {
  msdyn_analyticsforcs_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_analyticsforcs_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_analyticsforcs_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_analyticsforcs_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_analyticsforcs_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_analyticsforcs_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_analyticsforcs_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_analyticsforcs: WebMappingRetrieve<msdyn_analyticsforcs_Select,msdyn_analyticsforcs_Expand,msdyn_analyticsforcs_Filter,msdyn_analyticsforcs_Fixed,msdyn_analyticsforcs_Result,msdyn_analyticsforcs_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_analyticsforcs: WebMappingRelated<msdyn_analyticsforcs_RelatedOne,msdyn_analyticsforcs_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_analyticsforcs: WebMappingCUDA<msdyn_analyticsforcs_Create,msdyn_analyticsforcs_Update,msdyn_analyticsforcs_Select>;
}
