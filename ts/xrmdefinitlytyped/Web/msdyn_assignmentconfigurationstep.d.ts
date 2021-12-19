interface msdyn_assignmentconfigurationstep_Base extends WebEntity {
  componentidunique?: string | null;
  componentstate?: componentstate | null;
  createdon?: Date | null;
  importsequencenumber?: number | null;
  iscustomizable?: any | null;
  ismanaged?: boolean | null;
  modifiedon?: Date | null;
  msdyn_assignmentconfigurationstepid?: string | null;
  msdyn_isdefaultruleset?: boolean | null;
  msdyn_name?: string | null;
  msdyn_steporder?: number | null;
  msdyn_type?: msdyn_assignmentconfigurationsteptype | null;
  msdyn_uniquename?: string | null;
  overriddencreatedon?: Date | null;
  overwritetime?: Date | null;
  solutionid?: string | null;
  statecode?: msdyn_assignmentconfigurationstep_statecode | null;
  statuscode?: msdyn_assignmentconfigurationstep_statuscode | null;
  supportingsolutionid?: string | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_assignmentconfigurationstep_Relationships {
  msdyn_assignmentconfigurationstep_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_assignmentconfigurationstep_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_assignmentconfigurationstep_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_assignmentconfigurationstep_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_assignmentconfigurationstep_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_assignmentconfigurationstep_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_assignmentconfigurationstep_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_assignmentconfigurationstep_SyncErrors?: SyncError_Result[] | null;
  msdyn_assignmentconfigurationstep_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_assignmentconfigurationstep extends msdyn_assignmentconfigurationstep_Base, msdyn_assignmentconfigurationstep_Relationships {
  msdyn_assignmentconfigurationid_bind$msdyn_assignmentconfigurations?: string | null;
  msdyn_rulesetid_bind$msdyn_decisionrulesets?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_assignmentconfigurationstep_Create extends msdyn_assignmentconfigurationstep {
}
interface msdyn_assignmentconfigurationstep_Update extends msdyn_assignmentconfigurationstep {
}
interface msdyn_assignmentconfigurationstep_Select {
  componentidunique: WebAttribute<msdyn_assignmentconfigurationstep_Select, { componentidunique: string | null }, {  }>;
  componentstate: WebAttribute<msdyn_assignmentconfigurationstep_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  createdby_guid: WebAttribute<msdyn_assignmentconfigurationstep_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_assignmentconfigurationstep_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_assignmentconfigurationstep_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_assignmentconfigurationstep_Select, { importsequencenumber: number | null }, {  }>;
  iscustomizable: WebAttribute<msdyn_assignmentconfigurationstep_Select, { iscustomizable: any | null }, {  }>;
  ismanaged: WebAttribute<msdyn_assignmentconfigurationstep_Select, { ismanaged: boolean | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_assignmentconfigurationstep_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_assignmentconfigurationstep_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_assignmentconfigurationstep_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_assignmentconfigurationid_guid: WebAttribute<msdyn_assignmentconfigurationstep_Select, { msdyn_assignmentconfigurationid_guid: string | null }, { msdyn_assignmentconfigurationid_formatted?: string }>;
  msdyn_assignmentconfigurationstepid: WebAttribute<msdyn_assignmentconfigurationstep_Select, { msdyn_assignmentconfigurationstepid: string | null }, {  }>;
  msdyn_isdefaultruleset: WebAttribute<msdyn_assignmentconfigurationstep_Select, { msdyn_isdefaultruleset: boolean | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_assignmentconfigurationstep_Select, { msdyn_name: string | null }, {  }>;
  msdyn_rulesetid_guid: WebAttribute<msdyn_assignmentconfigurationstep_Select, { msdyn_rulesetid_guid: string | null }, { msdyn_rulesetid_formatted?: string }>;
  msdyn_steporder: WebAttribute<msdyn_assignmentconfigurationstep_Select, { msdyn_steporder: number | null }, {  }>;
  msdyn_type: WebAttribute<msdyn_assignmentconfigurationstep_Select, { msdyn_type: msdyn_assignmentconfigurationsteptype | null }, { msdyn_type_formatted?: string }>;
  msdyn_uniquename: WebAttribute<msdyn_assignmentconfigurationstep_Select, { msdyn_uniquename: string | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_assignmentconfigurationstep_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  overwritetime: WebAttribute<msdyn_assignmentconfigurationstep_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_assignmentconfigurationstep_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_assignmentconfigurationstep_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_assignmentconfigurationstep_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_assignmentconfigurationstep_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  solutionid: WebAttribute<msdyn_assignmentconfigurationstep_Select, { solutionid: string | null }, {  }>;
  statecode: WebAttribute<msdyn_assignmentconfigurationstep_Select, { statecode: msdyn_assignmentconfigurationstep_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_assignmentconfigurationstep_Select, { statuscode: msdyn_assignmentconfigurationstep_statuscode | null }, { statuscode_formatted?: string }>;
  supportingsolutionid: WebAttribute<msdyn_assignmentconfigurationstep_Select, { supportingsolutionid: string | null }, {  }>;
  timezoneruleversionnumber: WebAttribute<msdyn_assignmentconfigurationstep_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_assignmentconfigurationstep_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_assignmentconfigurationstep_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_assignmentconfigurationstep_Filter {
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
  msdyn_assignmentconfigurationid_guid: XQW.Guid;
  msdyn_assignmentconfigurationstepid: XQW.Guid;
  msdyn_isdefaultruleset: boolean;
  msdyn_name: string;
  msdyn_rulesetid_guid: XQW.Guid;
  msdyn_steporder: number;
  msdyn_type: msdyn_assignmentconfigurationsteptype;
  msdyn_uniquename: string;
  overriddencreatedon: Date;
  overwritetime: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  solutionid: XQW.Guid;
  statecode: msdyn_assignmentconfigurationstep_statecode;
  statuscode: msdyn_assignmentconfigurationstep_statuscode;
  supportingsolutionid: XQW.Guid;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_assignmentconfigurationstep_Expand {
  createdby: WebExpand<msdyn_assignmentconfigurationstep_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_assignmentconfigurationstep_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_assignmentconfigurationstep_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_assignmentconfigurationstep_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_assignmentconfigurationid: WebExpand<msdyn_assignmentconfigurationstep_Expand, msdyn_assignmentconfiguration_Select, msdyn_assignmentconfiguration_Filter, { msdyn_assignmentconfigurationid: msdyn_assignmentconfiguration_Result }>;
  msdyn_assignmentconfigurationstep_AsyncOperations: WebExpand<msdyn_assignmentconfigurationstep_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_assignmentconfigurationstep_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_assignmentconfigurationstep_BulkDeleteFailures: WebExpand<msdyn_assignmentconfigurationstep_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_assignmentconfigurationstep_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_assignmentconfigurationstep_DuplicateBaseRecord: WebExpand<msdyn_assignmentconfigurationstep_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_assignmentconfigurationstep_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_assignmentconfigurationstep_DuplicateMatchingRecord: WebExpand<msdyn_assignmentconfigurationstep_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_assignmentconfigurationstep_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_assignmentconfigurationstep_MailboxTrackingFolders: WebExpand<msdyn_assignmentconfigurationstep_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_assignmentconfigurationstep_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_assignmentconfigurationstep_PrincipalObjectAttributeAccesses: WebExpand<msdyn_assignmentconfigurationstep_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_assignmentconfigurationstep_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_assignmentconfigurationstep_ProcessSession: WebExpand<msdyn_assignmentconfigurationstep_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_assignmentconfigurationstep_ProcessSession: ProcessSession_Result[] }>;
  msdyn_assignmentconfigurationstep_SyncErrors: WebExpand<msdyn_assignmentconfigurationstep_Expand, SyncError_Select, SyncError_Filter, { msdyn_assignmentconfigurationstep_SyncErrors: SyncError_Result[] }>;
  msdyn_assignmentconfigurationstep_UserEntityInstanceDatas: WebExpand<msdyn_assignmentconfigurationstep_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_assignmentconfigurationstep_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_rulesetid: WebExpand<msdyn_assignmentconfigurationstep_Expand, msdyn_decisionruleset_Select, msdyn_decisionruleset_Filter, { msdyn_rulesetid: msdyn_decisionruleset_Result }>;
  ownerid: WebExpand<msdyn_assignmentconfigurationstep_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_assignmentconfigurationstep_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_assignmentconfigurationstep_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_assignmentconfigurationstep_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_assignmentconfigurationstep_FormattedResult {
  componentstate_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_assignmentconfigurationid_formatted?: string;
  msdyn_rulesetid_formatted?: string;
  msdyn_type_formatted?: string;
  overriddencreatedon_formatted?: string;
  overwritetime_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_assignmentconfigurationstep_Result extends msdyn_assignmentconfigurationstep_Base, msdyn_assignmentconfigurationstep_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_assignmentconfigurationid_guid: string | null;
  msdyn_rulesetid_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_assignmentconfigurationstep_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_assignmentconfigurationid: WebMappingRetrieve<msdyn_assignmentconfiguration_Select,msdyn_assignmentconfiguration_Expand,msdyn_assignmentconfiguration_Filter,msdyn_assignmentconfiguration_Fixed,msdyn_assignmentconfiguration_Result,msdyn_assignmentconfiguration_FormattedResult>;
  msdyn_rulesetid: WebMappingRetrieve<msdyn_decisionruleset_Select,msdyn_decisionruleset_Expand,msdyn_decisionruleset_Filter,msdyn_decisionruleset_Fixed,msdyn_decisionruleset_Result,msdyn_decisionruleset_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_assignmentconfigurationstep_RelatedMany {
  msdyn_assignmentconfigurationstep_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_assignmentconfigurationstep_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_assignmentconfigurationstep_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_assignmentconfigurationstep_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_assignmentconfigurationstep_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_assignmentconfigurationstep_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_assignmentconfigurationstep_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_assignmentconfigurationstep_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_assignmentconfigurationstep_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_assignmentconfigurationsteps: WebMappingRetrieve<msdyn_assignmentconfigurationstep_Select,msdyn_assignmentconfigurationstep_Expand,msdyn_assignmentconfigurationstep_Filter,msdyn_assignmentconfigurationstep_Fixed,msdyn_assignmentconfigurationstep_Result,msdyn_assignmentconfigurationstep_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_assignmentconfigurationsteps: WebMappingRelated<msdyn_assignmentconfigurationstep_RelatedOne,msdyn_assignmentconfigurationstep_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_assignmentconfigurationsteps: WebMappingCUDA<msdyn_assignmentconfigurationstep_Create,msdyn_assignmentconfigurationstep_Update,msdyn_assignmentconfigurationstep_Select>;
}
