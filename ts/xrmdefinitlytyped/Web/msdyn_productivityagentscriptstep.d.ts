interface msdyn_productivityagentscriptstep_Base extends WebEntity {
  componentidunique?: string | null;
  componentstate?: componentstate | null;
  createdon?: Date | null;
  importsequencenumber?: number | null;
  iscustomizable?: any | null;
  ismanaged?: boolean | null;
  modifiedon?: Date | null;
  msdyn_actiontype?: msdyn_productivityagentscriptstep_msdyn_actiontype | null;
  msdyn_description?: string | null;
  msdyn_name?: string | null;
  msdyn_order?: number | null;
  msdyn_productivityagentscriptstepid?: string | null;
  msdyn_textinstruction?: string | null;
  msdyn_uniquename?: string | null;
  overriddencreatedon?: Date | null;
  overwritetime?: Date | null;
  solutionid?: string | null;
  statecode?: msdyn_productivityagentscriptstep_statecode | null;
  statuscode?: msdyn_productivityagentscriptstep_statuscode | null;
  supportingsolutionid?: string | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_productivityagentscriptstep_Relationships {
  msdyn_productivityagentscriptstep_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_productivityagentscriptstep_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_productivityagentscriptstep_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_productivityagentscriptstep_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_productivityagentscriptstep_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_productivityagentscriptstep_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_productivityagentscriptstep_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_productivityagentscriptstep_SyncErrors?: SyncError_Result[] | null;
  msdyn_productivityagentscriptstep_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_productivityagentscriptstep extends msdyn_productivityagentscriptstep_Base, msdyn_productivityagentscriptstep_Relationships {
  msdyn_agentscriptid_bind$msdyn_productivityagentscripts?: string | null;
  msdyn_macroactionid_bind$workflows?: string | null;
  msdyn_routeactionid_bind$msdyn_productivityagentscripts?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_productivityagentscriptstep_Create extends msdyn_productivityagentscriptstep {
}
interface msdyn_productivityagentscriptstep_Update extends msdyn_productivityagentscriptstep {
}
interface msdyn_productivityagentscriptstep_Select {
  componentidunique: WebAttribute<msdyn_productivityagentscriptstep_Select, { componentidunique: string | null }, {  }>;
  componentstate: WebAttribute<msdyn_productivityagentscriptstep_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  createdby_guid: WebAttribute<msdyn_productivityagentscriptstep_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_productivityagentscriptstep_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_productivityagentscriptstep_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_productivityagentscriptstep_Select, { importsequencenumber: number | null }, {  }>;
  iscustomizable: WebAttribute<msdyn_productivityagentscriptstep_Select, { iscustomizable: any | null }, {  }>;
  ismanaged: WebAttribute<msdyn_productivityagentscriptstep_Select, { ismanaged: boolean | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_productivityagentscriptstep_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_productivityagentscriptstep_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_productivityagentscriptstep_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_actiontype: WebAttribute<msdyn_productivityagentscriptstep_Select, { msdyn_actiontype: msdyn_productivityagentscriptstep_msdyn_actiontype | null }, { msdyn_actiontype_formatted?: string }>;
  msdyn_agentscriptid_guid: WebAttribute<msdyn_productivityagentscriptstep_Select, { msdyn_agentscriptid_guid: string | null }, { msdyn_agentscriptid_formatted?: string }>;
  msdyn_description: WebAttribute<msdyn_productivityagentscriptstep_Select, { msdyn_description: string | null }, {  }>;
  msdyn_macroactionid_guid: WebAttribute<msdyn_productivityagentscriptstep_Select, { msdyn_macroactionid_guid: string | null }, { msdyn_macroactionid_formatted?: string }>;
  msdyn_name: WebAttribute<msdyn_productivityagentscriptstep_Select, { msdyn_name: string | null }, {  }>;
  msdyn_order: WebAttribute<msdyn_productivityagentscriptstep_Select, { msdyn_order: number | null }, {  }>;
  msdyn_productivityagentscriptstepid: WebAttribute<msdyn_productivityagentscriptstep_Select, { msdyn_productivityagentscriptstepid: string | null }, {  }>;
  msdyn_routeactionid_guid: WebAttribute<msdyn_productivityagentscriptstep_Select, { msdyn_routeactionid_guid: string | null }, { msdyn_routeactionid_formatted?: string }>;
  msdyn_textinstruction: WebAttribute<msdyn_productivityagentscriptstep_Select, { msdyn_textinstruction: string | null }, {  }>;
  msdyn_uniquename: WebAttribute<msdyn_productivityagentscriptstep_Select, { msdyn_uniquename: string | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_productivityagentscriptstep_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  overwritetime: WebAttribute<msdyn_productivityagentscriptstep_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_productivityagentscriptstep_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_productivityagentscriptstep_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_productivityagentscriptstep_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_productivityagentscriptstep_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  solutionid: WebAttribute<msdyn_productivityagentscriptstep_Select, { solutionid: string | null }, {  }>;
  statecode: WebAttribute<msdyn_productivityagentscriptstep_Select, { statecode: msdyn_productivityagentscriptstep_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_productivityagentscriptstep_Select, { statuscode: msdyn_productivityagentscriptstep_statuscode | null }, { statuscode_formatted?: string }>;
  supportingsolutionid: WebAttribute<msdyn_productivityagentscriptstep_Select, { supportingsolutionid: string | null }, {  }>;
  timezoneruleversionnumber: WebAttribute<msdyn_productivityagentscriptstep_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_productivityagentscriptstep_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_productivityagentscriptstep_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_productivityagentscriptstep_Filter {
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
  msdyn_actiontype: msdyn_productivityagentscriptstep_msdyn_actiontype;
  msdyn_agentscriptid_guid: XQW.Guid;
  msdyn_description: string;
  msdyn_macroactionid_guid: XQW.Guid;
  msdyn_name: string;
  msdyn_order: number;
  msdyn_productivityagentscriptstepid: XQW.Guid;
  msdyn_routeactionid_guid: XQW.Guid;
  msdyn_textinstruction: string;
  msdyn_uniquename: string;
  overriddencreatedon: Date;
  overwritetime: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  solutionid: XQW.Guid;
  statecode: msdyn_productivityagentscriptstep_statecode;
  statuscode: msdyn_productivityagentscriptstep_statuscode;
  supportingsolutionid: XQW.Guid;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_productivityagentscriptstep_Expand {
  createdby: WebExpand<msdyn_productivityagentscriptstep_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_productivityagentscriptstep_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_productivityagentscriptstep_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_productivityagentscriptstep_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_agentscriptid: WebExpand<msdyn_productivityagentscriptstep_Expand, msdyn_productivityagentscript_Select, msdyn_productivityagentscript_Filter, { msdyn_agentscriptid: msdyn_productivityagentscript_Result }>;
  msdyn_macroactionid: WebExpand<msdyn_productivityagentscriptstep_Expand, Workflow_Select, Workflow_Filter, { msdyn_macroactionid: Workflow_Result }>;
  msdyn_productivityagentscriptstep_AsyncOperations: WebExpand<msdyn_productivityagentscriptstep_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_productivityagentscriptstep_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_productivityagentscriptstep_BulkDeleteFailures: WebExpand<msdyn_productivityagentscriptstep_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_productivityagentscriptstep_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_productivityagentscriptstep_DuplicateBaseRecord: WebExpand<msdyn_productivityagentscriptstep_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_productivityagentscriptstep_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_productivityagentscriptstep_DuplicateMatchingRecord: WebExpand<msdyn_productivityagentscriptstep_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_productivityagentscriptstep_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_productivityagentscriptstep_MailboxTrackingFolders: WebExpand<msdyn_productivityagentscriptstep_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_productivityagentscriptstep_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_productivityagentscriptstep_PrincipalObjectAttributeAccesses: WebExpand<msdyn_productivityagentscriptstep_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_productivityagentscriptstep_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_productivityagentscriptstep_ProcessSession: WebExpand<msdyn_productivityagentscriptstep_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_productivityagentscriptstep_ProcessSession: ProcessSession_Result[] }>;
  msdyn_productivityagentscriptstep_SyncErrors: WebExpand<msdyn_productivityagentscriptstep_Expand, SyncError_Select, SyncError_Filter, { msdyn_productivityagentscriptstep_SyncErrors: SyncError_Result[] }>;
  msdyn_productivityagentscriptstep_UserEntityInstanceDatas: WebExpand<msdyn_productivityagentscriptstep_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_productivityagentscriptstep_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_routeactionid: WebExpand<msdyn_productivityagentscriptstep_Expand, msdyn_productivityagentscript_Select, msdyn_productivityagentscript_Filter, { msdyn_routeactionid: msdyn_productivityagentscript_Result }>;
  ownerid: WebExpand<msdyn_productivityagentscriptstep_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_productivityagentscriptstep_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_productivityagentscriptstep_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_productivityagentscriptstep_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_productivityagentscriptstep_FormattedResult {
  componentstate_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_actiontype_formatted?: string;
  msdyn_agentscriptid_formatted?: string;
  msdyn_macroactionid_formatted?: string;
  msdyn_routeactionid_formatted?: string;
  overriddencreatedon_formatted?: string;
  overwritetime_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_productivityagentscriptstep_Result extends msdyn_productivityagentscriptstep_Base, msdyn_productivityagentscriptstep_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_agentscriptid_guid: string | null;
  msdyn_macroactionid_guid: string | null;
  msdyn_routeactionid_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_productivityagentscriptstep_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_agentscriptid: WebMappingRetrieve<msdyn_productivityagentscript_Select,msdyn_productivityagentscript_Expand,msdyn_productivityagentscript_Filter,msdyn_productivityagentscript_Fixed,msdyn_productivityagentscript_Result,msdyn_productivityagentscript_FormattedResult>;
  msdyn_macroactionid: WebMappingRetrieve<Workflow_Select,Workflow_Expand,Workflow_Filter,Workflow_Fixed,Workflow_Result,Workflow_FormattedResult>;
  msdyn_routeactionid: WebMappingRetrieve<msdyn_productivityagentscript_Select,msdyn_productivityagentscript_Expand,msdyn_productivityagentscript_Filter,msdyn_productivityagentscript_Fixed,msdyn_productivityagentscript_Result,msdyn_productivityagentscript_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_productivityagentscriptstep_RelatedMany {
  msdyn_productivityagentscriptstep_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_productivityagentscriptstep_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_productivityagentscriptstep_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_productivityagentscriptstep_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_productivityagentscriptstep_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_productivityagentscriptstep_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_productivityagentscriptstep_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_productivityagentscriptstep_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_productivityagentscriptstep_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_productivityagentscriptsteps: WebMappingRetrieve<msdyn_productivityagentscriptstep_Select,msdyn_productivityagentscriptstep_Expand,msdyn_productivityagentscriptstep_Filter,msdyn_productivityagentscriptstep_Fixed,msdyn_productivityagentscriptstep_Result,msdyn_productivityagentscriptstep_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_productivityagentscriptsteps: WebMappingRelated<msdyn_productivityagentscriptstep_RelatedOne,msdyn_productivityagentscriptstep_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_productivityagentscriptsteps: WebMappingCUDA<msdyn_productivityagentscriptstep_Create,msdyn_productivityagentscriptstep_Update,msdyn_productivityagentscriptstep_Select>;
}
