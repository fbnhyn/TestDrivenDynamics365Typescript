interface msdyn_productivityagentscript_Base extends WebEntity {
  componentidunique?: string | null;
  componentstate?: componentstate | null;
  createdon?: Date | null;
  importsequencenumber?: number | null;
  iscustomizable?: any | null;
  ismanaged?: boolean | null;
  modifiedon?: Date | null;
  msdyn_description?: string | null;
  msdyn_language?: number | null;
  msdyn_name?: string | null;
  msdyn_productivityagentscriptid?: string | null;
  msdyn_uniquename?: string | null;
  overriddencreatedon?: Date | null;
  overwritetime?: Date | null;
  solutionid?: string | null;
  statecode?: msdyn_productivityagentscript_statecode | null;
  statuscode?: msdyn_productivityagentscript_statuscode | null;
  supportingsolutionid?: string | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_productivityagentscript_Relationships {
  msdyn_msdyn_prod_agentscript_msdyn_prod_agentscriptstep_agentscriptid?: msdyn_productivityagentscriptstep_Result[] | null;
  msdyn_msdyn_prod_agentscript_msdyn_prod_agentscriptstep_routeactionid?: msdyn_productivityagentscriptstep_Result[] | null;
  msdyn_msdyn_prod_agentscript_msdyn_sessiontemplat?: msdyn_sessiontemplate_Result[] | null;
  msdyn_productivityagentscript_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_productivityagentscript_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_productivityagentscript_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_productivityagentscript_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_productivityagentscript_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_productivityagentscript_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_productivityagentscript_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_productivityagentscript_SyncErrors?: SyncError_Result[] | null;
  msdyn_productivityagentscript_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_productivityagentscript extends msdyn_productivityagentscript_Base, msdyn_productivityagentscript_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_productivityagentscript_Create extends msdyn_productivityagentscript {
}
interface msdyn_productivityagentscript_Update extends msdyn_productivityagentscript {
}
interface msdyn_productivityagentscript_Select {
  componentidunique: WebAttribute<msdyn_productivityagentscript_Select, { componentidunique: string | null }, {  }>;
  componentstate: WebAttribute<msdyn_productivityagentscript_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  createdby_guid: WebAttribute<msdyn_productivityagentscript_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_productivityagentscript_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_productivityagentscript_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_productivityagentscript_Select, { importsequencenumber: number | null }, {  }>;
  iscustomizable: WebAttribute<msdyn_productivityagentscript_Select, { iscustomizable: any | null }, {  }>;
  ismanaged: WebAttribute<msdyn_productivityagentscript_Select, { ismanaged: boolean | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_productivityagentscript_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_productivityagentscript_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_productivityagentscript_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_description: WebAttribute<msdyn_productivityagentscript_Select, { msdyn_description: string | null }, {  }>;
  msdyn_language: WebAttribute<msdyn_productivityagentscript_Select, { msdyn_language: number | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_productivityagentscript_Select, { msdyn_name: string | null }, {  }>;
  msdyn_productivityagentscriptid: WebAttribute<msdyn_productivityagentscript_Select, { msdyn_productivityagentscriptid: string | null }, {  }>;
  msdyn_uniquename: WebAttribute<msdyn_productivityagentscript_Select, { msdyn_uniquename: string | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_productivityagentscript_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  overwritetime: WebAttribute<msdyn_productivityagentscript_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_productivityagentscript_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_productivityagentscript_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_productivityagentscript_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_productivityagentscript_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  solutionid: WebAttribute<msdyn_productivityagentscript_Select, { solutionid: string | null }, {  }>;
  statecode: WebAttribute<msdyn_productivityagentscript_Select, { statecode: msdyn_productivityagentscript_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_productivityagentscript_Select, { statuscode: msdyn_productivityagentscript_statuscode | null }, { statuscode_formatted?: string }>;
  supportingsolutionid: WebAttribute<msdyn_productivityagentscript_Select, { supportingsolutionid: string | null }, {  }>;
  timezoneruleversionnumber: WebAttribute<msdyn_productivityagentscript_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_productivityagentscript_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_productivityagentscript_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_productivityagentscript_Filter {
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
  msdyn_description: string;
  msdyn_language: number;
  msdyn_name: string;
  msdyn_productivityagentscriptid: XQW.Guid;
  msdyn_uniquename: string;
  overriddencreatedon: Date;
  overwritetime: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  solutionid: XQW.Guid;
  statecode: msdyn_productivityagentscript_statecode;
  statuscode: msdyn_productivityagentscript_statuscode;
  supportingsolutionid: XQW.Guid;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_productivityagentscript_Expand {
  createdby: WebExpand<msdyn_productivityagentscript_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_productivityagentscript_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_productivityagentscript_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_productivityagentscript_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_msdyn_prod_agentscript_msdyn_prod_agentscriptstep_agentscriptid: WebExpand<msdyn_productivityagentscript_Expand, msdyn_productivityagentscriptstep_Select, msdyn_productivityagentscriptstep_Filter, { msdyn_msdyn_prod_agentscript_msdyn_prod_agentscriptstep_agentscriptid: msdyn_productivityagentscriptstep_Result[] }>;
  msdyn_msdyn_prod_agentscript_msdyn_prod_agentscriptstep_routeactionid: WebExpand<msdyn_productivityagentscript_Expand, msdyn_productivityagentscriptstep_Select, msdyn_productivityagentscriptstep_Filter, { msdyn_msdyn_prod_agentscript_msdyn_prod_agentscriptstep_routeactionid: msdyn_productivityagentscriptstep_Result[] }>;
  msdyn_msdyn_prod_agentscript_msdyn_sessiontemplat: WebExpand<msdyn_productivityagentscript_Expand, msdyn_sessiontemplate_Select, msdyn_sessiontemplate_Filter, { msdyn_msdyn_prod_agentscript_msdyn_sessiontemplat: msdyn_sessiontemplate_Result[] }>;
  msdyn_productivityagentscript_AsyncOperations: WebExpand<msdyn_productivityagentscript_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_productivityagentscript_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_productivityagentscript_BulkDeleteFailures: WebExpand<msdyn_productivityagentscript_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_productivityagentscript_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_productivityagentscript_DuplicateBaseRecord: WebExpand<msdyn_productivityagentscript_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_productivityagentscript_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_productivityagentscript_DuplicateMatchingRecord: WebExpand<msdyn_productivityagentscript_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_productivityagentscript_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_productivityagentscript_MailboxTrackingFolders: WebExpand<msdyn_productivityagentscript_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_productivityagentscript_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_productivityagentscript_PrincipalObjectAttributeAccesses: WebExpand<msdyn_productivityagentscript_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_productivityagentscript_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_productivityagentscript_ProcessSession: WebExpand<msdyn_productivityagentscript_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_productivityagentscript_ProcessSession: ProcessSession_Result[] }>;
  msdyn_productivityagentscript_SyncErrors: WebExpand<msdyn_productivityagentscript_Expand, SyncError_Select, SyncError_Filter, { msdyn_productivityagentscript_SyncErrors: SyncError_Result[] }>;
  msdyn_productivityagentscript_UserEntityInstanceDatas: WebExpand<msdyn_productivityagentscript_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_productivityagentscript_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  ownerid: WebExpand<msdyn_productivityagentscript_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_productivityagentscript_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_productivityagentscript_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_productivityagentscript_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_productivityagentscript_FormattedResult {
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
interface msdyn_productivityagentscript_Result extends msdyn_productivityagentscript_Base, msdyn_productivityagentscript_Relationships {
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
interface msdyn_productivityagentscript_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_productivityagentscript_RelatedMany {
  msdyn_msdyn_prod_agentscript_msdyn_prod_agentscriptstep_agentscriptid: WebMappingRetrieve<msdyn_productivityagentscriptstep_Select,msdyn_productivityagentscriptstep_Expand,msdyn_productivityagentscriptstep_Filter,msdyn_productivityagentscriptstep_Fixed,msdyn_productivityagentscriptstep_Result,msdyn_productivityagentscriptstep_FormattedResult>;
  msdyn_msdyn_prod_agentscript_msdyn_prod_agentscriptstep_routeactionid: WebMappingRetrieve<msdyn_productivityagentscriptstep_Select,msdyn_productivityagentscriptstep_Expand,msdyn_productivityagentscriptstep_Filter,msdyn_productivityagentscriptstep_Fixed,msdyn_productivityagentscriptstep_Result,msdyn_productivityagentscriptstep_FormattedResult>;
  msdyn_msdyn_prod_agentscript_msdyn_sessiontemplat: WebMappingRetrieve<msdyn_sessiontemplate_Select,msdyn_sessiontemplate_Expand,msdyn_sessiontemplate_Filter,msdyn_sessiontemplate_Fixed,msdyn_sessiontemplate_Result,msdyn_sessiontemplate_FormattedResult>;
  msdyn_productivityagentscript_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_productivityagentscript_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_productivityagentscript_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_productivityagentscript_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_productivityagentscript_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_productivityagentscript_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_productivityagentscript_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_productivityagentscript_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_productivityagentscript_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_productivityagentscripts: WebMappingRetrieve<msdyn_productivityagentscript_Select,msdyn_productivityagentscript_Expand,msdyn_productivityagentscript_Filter,msdyn_productivityagentscript_Fixed,msdyn_productivityagentscript_Result,msdyn_productivityagentscript_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_productivityagentscripts: WebMappingRelated<msdyn_productivityagentscript_RelatedOne,msdyn_productivityagentscript_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_productivityagentscripts: WebMappingCUDA<msdyn_productivityagentscript_Create,msdyn_productivityagentscript_Update,msdyn_productivityagentscript_Select>;
}
