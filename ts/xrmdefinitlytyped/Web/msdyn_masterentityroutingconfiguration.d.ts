interface msdyn_masterentityroutingconfiguration_Base extends WebEntity {
  componentidunique?: string | null;
  componentstate?: componentstate | null;
  createdon?: Date | null;
  importsequencenumber?: number | null;
  iscustomizable?: any | null;
  ismanaged?: boolean | null;
  modifiedon?: Date | null;
  msdyn_entitylogicalname?: string | null;
  msdyn_masterentityroutingconfigurationid?: string | null;
  msdyn_name?: string | null;
  msdyn_uniquename?: string | null;
  overriddencreatedon?: Date | null;
  overwritetime?: Date | null;
  solutionid?: string | null;
  statecode?: msdyn_masterentityroutingconfiguration_statecode | null;
  statuscode?: msdyn_masterentityroutingconfiguration_statuscode | null;
  supportingsolutionid?: string | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_masterentityroutingconfiguration_Relationships {
  msdyn_masterentityroutingconfiguration_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_masterentityroutingconfiguration_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_masterentityroutingconfiguration_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_masterentityroutingconfiguration_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_masterentityroutingconfiguration_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_masterentityroutingconfiguration_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_masterentityroutingconfiguration_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_masterentityroutingconfiguration_SyncErrors?: SyncError_Result[] | null;
  msdyn_masterentityroutingconfiguration_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  msdyn_masterentityroutingconfiguration_msdyn_liveworkstream?: msdyn_liveworkstream_Result[] | null;
}
interface msdyn_masterentityroutingconfiguration extends msdyn_masterentityroutingconfiguration_Base, msdyn_masterentityroutingconfiguration_Relationships {
  msdyn_rulesetid_bind$msdyn_decisionrulesets?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_masterentityroutingconfiguration_Create extends msdyn_masterentityroutingconfiguration {
}
interface msdyn_masterentityroutingconfiguration_Update extends msdyn_masterentityroutingconfiguration {
}
interface msdyn_masterentityroutingconfiguration_Select {
  componentidunique: WebAttribute<msdyn_masterentityroutingconfiguration_Select, { componentidunique: string | null }, {  }>;
  componentstate: WebAttribute<msdyn_masterentityroutingconfiguration_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  createdby_guid: WebAttribute<msdyn_masterentityroutingconfiguration_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_masterentityroutingconfiguration_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_masterentityroutingconfiguration_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_masterentityroutingconfiguration_Select, { importsequencenumber: number | null }, {  }>;
  iscustomizable: WebAttribute<msdyn_masterentityroutingconfiguration_Select, { iscustomizable: any | null }, {  }>;
  ismanaged: WebAttribute<msdyn_masterentityroutingconfiguration_Select, { ismanaged: boolean | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_masterentityroutingconfiguration_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_masterentityroutingconfiguration_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_masterentityroutingconfiguration_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_entitylogicalname: WebAttribute<msdyn_masterentityroutingconfiguration_Select, { msdyn_entitylogicalname: string | null }, {  }>;
  msdyn_masterentityroutingconfigurationid: WebAttribute<msdyn_masterentityroutingconfiguration_Select, { msdyn_masterentityroutingconfigurationid: string | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_masterentityroutingconfiguration_Select, { msdyn_name: string | null }, {  }>;
  msdyn_rulesetid_guid: WebAttribute<msdyn_masterentityroutingconfiguration_Select, { msdyn_rulesetid_guid: string | null }, { msdyn_rulesetid_formatted?: string }>;
  msdyn_uniquename: WebAttribute<msdyn_masterentityroutingconfiguration_Select, { msdyn_uniquename: string | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_masterentityroutingconfiguration_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  overwritetime: WebAttribute<msdyn_masterentityroutingconfiguration_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_masterentityroutingconfiguration_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_masterentityroutingconfiguration_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_masterentityroutingconfiguration_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_masterentityroutingconfiguration_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  solutionid: WebAttribute<msdyn_masterentityroutingconfiguration_Select, { solutionid: string | null }, {  }>;
  statecode: WebAttribute<msdyn_masterentityroutingconfiguration_Select, { statecode: msdyn_masterentityroutingconfiguration_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_masterentityroutingconfiguration_Select, { statuscode: msdyn_masterentityroutingconfiguration_statuscode | null }, { statuscode_formatted?: string }>;
  supportingsolutionid: WebAttribute<msdyn_masterentityroutingconfiguration_Select, { supportingsolutionid: string | null }, {  }>;
  timezoneruleversionnumber: WebAttribute<msdyn_masterentityroutingconfiguration_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_masterentityroutingconfiguration_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_masterentityroutingconfiguration_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_masterentityroutingconfiguration_Filter {
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
  msdyn_entitylogicalname: string;
  msdyn_masterentityroutingconfigurationid: XQW.Guid;
  msdyn_name: string;
  msdyn_rulesetid_guid: XQW.Guid;
  msdyn_uniquename: string;
  overriddencreatedon: Date;
  overwritetime: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  solutionid: XQW.Guid;
  statecode: msdyn_masterentityroutingconfiguration_statecode;
  statuscode: msdyn_masterentityroutingconfiguration_statuscode;
  supportingsolutionid: XQW.Guid;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_masterentityroutingconfiguration_Expand {
  createdby: WebExpand<msdyn_masterentityroutingconfiguration_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_masterentityroutingconfiguration_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_masterentityroutingconfiguration_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_masterentityroutingconfiguration_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_masterentityroutingconfiguration_AsyncOperations: WebExpand<msdyn_masterentityroutingconfiguration_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_masterentityroutingconfiguration_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_masterentityroutingconfiguration_BulkDeleteFailures: WebExpand<msdyn_masterentityroutingconfiguration_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_masterentityroutingconfiguration_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_masterentityroutingconfiguration_DuplicateBaseRecord: WebExpand<msdyn_masterentityroutingconfiguration_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_masterentityroutingconfiguration_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_masterentityroutingconfiguration_DuplicateMatchingRecord: WebExpand<msdyn_masterentityroutingconfiguration_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_masterentityroutingconfiguration_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_masterentityroutingconfiguration_MailboxTrackingFolders: WebExpand<msdyn_masterentityroutingconfiguration_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_masterentityroutingconfiguration_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_masterentityroutingconfiguration_PrincipalObjectAttributeAccesses: WebExpand<msdyn_masterentityroutingconfiguration_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_masterentityroutingconfiguration_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_masterentityroutingconfiguration_ProcessSession: WebExpand<msdyn_masterentityroutingconfiguration_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_masterentityroutingconfiguration_ProcessSession: ProcessSession_Result[] }>;
  msdyn_masterentityroutingconfiguration_SyncErrors: WebExpand<msdyn_masterentityroutingconfiguration_Expand, SyncError_Select, SyncError_Filter, { msdyn_masterentityroutingconfiguration_SyncErrors: SyncError_Result[] }>;
  msdyn_masterentityroutingconfiguration_UserEntityInstanceDatas: WebExpand<msdyn_masterentityroutingconfiguration_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_masterentityroutingconfiguration_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_masterentityroutingconfiguration_msdyn_liveworkstream: WebExpand<msdyn_masterentityroutingconfiguration_Expand, msdyn_liveworkstream_Select, msdyn_liveworkstream_Filter, { msdyn_masterentityroutingconfiguration_msdyn_liveworkstream: msdyn_liveworkstream_Result[] }>;
  msdyn_rulesetid: WebExpand<msdyn_masterentityroutingconfiguration_Expand, msdyn_decisionruleset_Select, msdyn_decisionruleset_Filter, { msdyn_rulesetid: msdyn_decisionruleset_Result }>;
  ownerid: WebExpand<msdyn_masterentityroutingconfiguration_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_masterentityroutingconfiguration_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_masterentityroutingconfiguration_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_masterentityroutingconfiguration_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_masterentityroutingconfiguration_FormattedResult {
  componentstate_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_rulesetid_formatted?: string;
  overriddencreatedon_formatted?: string;
  overwritetime_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_masterentityroutingconfiguration_Result extends msdyn_masterentityroutingconfiguration_Base, msdyn_masterentityroutingconfiguration_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_rulesetid_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_masterentityroutingconfiguration_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_rulesetid: WebMappingRetrieve<msdyn_decisionruleset_Select,msdyn_decisionruleset_Expand,msdyn_decisionruleset_Filter,msdyn_decisionruleset_Fixed,msdyn_decisionruleset_Result,msdyn_decisionruleset_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_masterentityroutingconfiguration_RelatedMany {
  msdyn_masterentityroutingconfiguration_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_masterentityroutingconfiguration_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_masterentityroutingconfiguration_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_masterentityroutingconfiguration_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_masterentityroutingconfiguration_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_masterentityroutingconfiguration_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_masterentityroutingconfiguration_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_masterentityroutingconfiguration_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_masterentityroutingconfiguration_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  msdyn_masterentityroutingconfiguration_msdyn_liveworkstream: WebMappingRetrieve<msdyn_liveworkstream_Select,msdyn_liveworkstream_Expand,msdyn_liveworkstream_Filter,msdyn_liveworkstream_Fixed,msdyn_liveworkstream_Result,msdyn_liveworkstream_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_masterentityroutingconfigurations: WebMappingRetrieve<msdyn_masterentityroutingconfiguration_Select,msdyn_masterentityroutingconfiguration_Expand,msdyn_masterentityroutingconfiguration_Filter,msdyn_masterentityroutingconfiguration_Fixed,msdyn_masterentityroutingconfiguration_Result,msdyn_masterentityroutingconfiguration_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_masterentityroutingconfigurations: WebMappingRelated<msdyn_masterentityroutingconfiguration_RelatedOne,msdyn_masterentityroutingconfiguration_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_masterentityroutingconfigurations: WebMappingCUDA<msdyn_masterentityroutingconfiguration_Create,msdyn_masterentityroutingconfiguration_Update,msdyn_masterentityroutingconfiguration_Select>;
}
