interface msdyn_assignmentconfiguration_Base extends WebEntity {
  componentidunique?: string | null;
  componentstate?: componentstate | null;
  createdon?: Date | null;
  importsequencenumber?: number | null;
  iscustomizable?: any | null;
  ismanaged?: boolean | null;
  modifiedon?: Date | null;
  msdyn_assignmentconfigurationid?: string | null;
  msdyn_description?: string | null;
  msdyn_isactiveconfiguration?: boolean | null;
  msdyn_name?: string | null;
  msdyn_uniquename?: string | null;
  overriddencreatedon?: Date | null;
  overwritetime?: Date | null;
  solutionid?: string | null;
  statecode?: msdyn_assignmentconfiguration_statecode | null;
  statuscode?: msdyn_assignmentconfiguration_statuscode | null;
  supportingsolutionid?: string | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_assignmentconfiguration_Relationships {
  msdyn_assignmentconfiguration_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_assignmentconfiguration_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_assignmentconfiguration_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_assignmentconfiguration_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_assignmentconfiguration_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_assignmentconfiguration_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_assignmentconfiguration_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_assignmentconfiguration_SyncErrors?: SyncError_Result[] | null;
  msdyn_assignmentconfiguration_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  msdyn_assignmentconfiguration_msdyn_assignmentconfigurationstep?: msdyn_assignmentconfigurationstep_Result[] | null;
}
interface msdyn_assignmentconfiguration extends msdyn_assignmentconfiguration_Base, msdyn_assignmentconfiguration_Relationships {
  msdyn_queueid_bind$queues?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_assignmentconfiguration_Create extends msdyn_assignmentconfiguration {
}
interface msdyn_assignmentconfiguration_Update extends msdyn_assignmentconfiguration {
}
interface msdyn_assignmentconfiguration_Select {
  componentidunique: WebAttribute<msdyn_assignmentconfiguration_Select, { componentidunique: string | null }, {  }>;
  componentstate: WebAttribute<msdyn_assignmentconfiguration_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  createdby_guid: WebAttribute<msdyn_assignmentconfiguration_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_assignmentconfiguration_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_assignmentconfiguration_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_assignmentconfiguration_Select, { importsequencenumber: number | null }, {  }>;
  iscustomizable: WebAttribute<msdyn_assignmentconfiguration_Select, { iscustomizable: any | null }, {  }>;
  ismanaged: WebAttribute<msdyn_assignmentconfiguration_Select, { ismanaged: boolean | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_assignmentconfiguration_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_assignmentconfiguration_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_assignmentconfiguration_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_assignmentconfigurationid: WebAttribute<msdyn_assignmentconfiguration_Select, { msdyn_assignmentconfigurationid: string | null }, {  }>;
  msdyn_description: WebAttribute<msdyn_assignmentconfiguration_Select, { msdyn_description: string | null }, {  }>;
  msdyn_isactiveconfiguration: WebAttribute<msdyn_assignmentconfiguration_Select, { msdyn_isactiveconfiguration: boolean | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_assignmentconfiguration_Select, { msdyn_name: string | null }, {  }>;
  msdyn_queueid_guid: WebAttribute<msdyn_assignmentconfiguration_Select, { msdyn_queueid_guid: string | null }, { msdyn_queueid_formatted?: string }>;
  msdyn_uniquename: WebAttribute<msdyn_assignmentconfiguration_Select, { msdyn_uniquename: string | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_assignmentconfiguration_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  overwritetime: WebAttribute<msdyn_assignmentconfiguration_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_assignmentconfiguration_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_assignmentconfiguration_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_assignmentconfiguration_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_assignmentconfiguration_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  solutionid: WebAttribute<msdyn_assignmentconfiguration_Select, { solutionid: string | null }, {  }>;
  statecode: WebAttribute<msdyn_assignmentconfiguration_Select, { statecode: msdyn_assignmentconfiguration_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_assignmentconfiguration_Select, { statuscode: msdyn_assignmentconfiguration_statuscode | null }, { statuscode_formatted?: string }>;
  supportingsolutionid: WebAttribute<msdyn_assignmentconfiguration_Select, { supportingsolutionid: string | null }, {  }>;
  timezoneruleversionnumber: WebAttribute<msdyn_assignmentconfiguration_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_assignmentconfiguration_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_assignmentconfiguration_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_assignmentconfiguration_Filter {
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
  msdyn_assignmentconfigurationid: XQW.Guid;
  msdyn_description: string;
  msdyn_isactiveconfiguration: boolean;
  msdyn_name: string;
  msdyn_queueid_guid: XQW.Guid;
  msdyn_uniquename: string;
  overriddencreatedon: Date;
  overwritetime: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  solutionid: XQW.Guid;
  statecode: msdyn_assignmentconfiguration_statecode;
  statuscode: msdyn_assignmentconfiguration_statuscode;
  supportingsolutionid: XQW.Guid;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_assignmentconfiguration_Expand {
  createdby: WebExpand<msdyn_assignmentconfiguration_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_assignmentconfiguration_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_assignmentconfiguration_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_assignmentconfiguration_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_assignmentconfiguration_AsyncOperations: WebExpand<msdyn_assignmentconfiguration_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_assignmentconfiguration_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_assignmentconfiguration_BulkDeleteFailures: WebExpand<msdyn_assignmentconfiguration_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_assignmentconfiguration_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_assignmentconfiguration_DuplicateBaseRecord: WebExpand<msdyn_assignmentconfiguration_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_assignmentconfiguration_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_assignmentconfiguration_DuplicateMatchingRecord: WebExpand<msdyn_assignmentconfiguration_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_assignmentconfiguration_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_assignmentconfiguration_MailboxTrackingFolders: WebExpand<msdyn_assignmentconfiguration_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_assignmentconfiguration_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_assignmentconfiguration_PrincipalObjectAttributeAccesses: WebExpand<msdyn_assignmentconfiguration_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_assignmentconfiguration_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_assignmentconfiguration_ProcessSession: WebExpand<msdyn_assignmentconfiguration_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_assignmentconfiguration_ProcessSession: ProcessSession_Result[] }>;
  msdyn_assignmentconfiguration_SyncErrors: WebExpand<msdyn_assignmentconfiguration_Expand, SyncError_Select, SyncError_Filter, { msdyn_assignmentconfiguration_SyncErrors: SyncError_Result[] }>;
  msdyn_assignmentconfiguration_UserEntityInstanceDatas: WebExpand<msdyn_assignmentconfiguration_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_assignmentconfiguration_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_assignmentconfiguration_msdyn_assignmentconfigurationstep: WebExpand<msdyn_assignmentconfiguration_Expand, msdyn_assignmentconfigurationstep_Select, msdyn_assignmentconfigurationstep_Filter, { msdyn_assignmentconfiguration_msdyn_assignmentconfigurationstep: msdyn_assignmentconfigurationstep_Result[] }>;
  msdyn_queueid: WebExpand<msdyn_assignmentconfiguration_Expand, Queue_Select, Queue_Filter, { msdyn_queueid: Queue_Result }>;
  ownerid: WebExpand<msdyn_assignmentconfiguration_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_assignmentconfiguration_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_assignmentconfiguration_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_assignmentconfiguration_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_assignmentconfiguration_FormattedResult {
  componentstate_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_queueid_formatted?: string;
  overriddencreatedon_formatted?: string;
  overwritetime_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_assignmentconfiguration_Result extends msdyn_assignmentconfiguration_Base, msdyn_assignmentconfiguration_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_queueid_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_assignmentconfiguration_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_queueid: WebMappingRetrieve<Queue_Select,Queue_Expand,Queue_Filter,Queue_Fixed,Queue_Result,Queue_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_assignmentconfiguration_RelatedMany {
  msdyn_assignmentconfiguration_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_assignmentconfiguration_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_assignmentconfiguration_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_assignmentconfiguration_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_assignmentconfiguration_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_assignmentconfiguration_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_assignmentconfiguration_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_assignmentconfiguration_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_assignmentconfiguration_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  msdyn_assignmentconfiguration_msdyn_assignmentconfigurationstep: WebMappingRetrieve<msdyn_assignmentconfigurationstep_Select,msdyn_assignmentconfigurationstep_Expand,msdyn_assignmentconfigurationstep_Filter,msdyn_assignmentconfigurationstep_Fixed,msdyn_assignmentconfigurationstep_Result,msdyn_assignmentconfigurationstep_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_assignmentconfigurations: WebMappingRetrieve<msdyn_assignmentconfiguration_Select,msdyn_assignmentconfiguration_Expand,msdyn_assignmentconfiguration_Filter,msdyn_assignmentconfiguration_Fixed,msdyn_assignmentconfiguration_Result,msdyn_assignmentconfiguration_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_assignmentconfigurations: WebMappingRelated<msdyn_assignmentconfiguration_RelatedOne,msdyn_assignmentconfiguration_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_assignmentconfigurations: WebMappingCUDA<msdyn_assignmentconfiguration_Create,msdyn_assignmentconfiguration_Update,msdyn_assignmentconfiguration_Select>;
}
