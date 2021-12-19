interface msdyn_decisionruleset_Base extends WebEntity {
  componentidunique?: string | null;
  componentstate?: componentstate | null;
  createdon?: Date | null;
  importsequencenumber?: number | null;
  iscustomizable?: any | null;
  ismanaged?: boolean | null;
  modifiedon?: Date | null;
  msdyn_authoringmode?: msdyn_rulesetauthoringmode | null;
  msdyn_decisionrulesetid?: string | null;
  msdyn_description?: string | null;
  msdyn_isinputcollection?: boolean | null;
  msdyn_mlmodeltype?: msdyn_mlmodeltype | null;
  msdyn_name?: string | null;
  msdyn_rulesetdefinition?: string | null;
  msdyn_rulesettype?: msdyn_decisionrulesettype | null;
  msdyn_uniquename?: string | null;
  overriddencreatedon?: Date | null;
  overwritetime?: Date | null;
  solutionid?: string | null;
  statecode?: msdyn_decisionruleset_statecode | null;
  statuscode?: msdyn_decisionruleset_statuscode | null;
  supportingsolutionid?: string | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_decisionruleset_Relationships {
  msdyn_decisionruleset_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_decisionruleset_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_decisionruleset_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_decisionruleset_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_decisionruleset_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_decisionruleset_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_decisionruleset_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_decisionruleset_SyncErrors?: SyncError_Result[] | null;
  msdyn_decisionruleset_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  msdyn_decisionruleset_msdyn_assignmentconfigurationstep_rulesetid?: msdyn_assignmentconfigurationstep_Result[] | null;
  msdyn_decisionruleset_msdyn_routingconfigurationstep_rulesetid?: msdyn_routingconfigurationstep_Result[] | null;
  msdyn_decisionruleset_msdyn_rulesetdependencymapping_msdyn_referencedpolymorphicentityid?: msdyn_rulesetdependencymapping_Result[] | null;
  msdyn_decisionruleset_msdyn_rulesetdependencymapping_msdyn_referencingrulesetid?: msdyn_rulesetdependencymapping_Result[] | null;
  msdyn_msdyn_decisionruleset_msdyn_masterentityroutingconfiguration_rulesetid?: msdyn_masterentityroutingconfiguration_Result[] | null;
  msdyn_msdyn_decisionruleset_msdyn_unifiedroutingdiagnostic_decisionrulesetid?: msdyn_unifiedroutingdiagnostic_Result[] | null;
}
interface msdyn_decisionruleset extends msdyn_decisionruleset_Base, msdyn_decisionruleset_Relationships {
  msdyn_aibmodelid_bind$msdyn_aimodels?: string | null;
  msdyn_inputcontractid_bind$msdyn_decisioncontracts?: string | null;
  msdyn_outputcontractid_bind$msdyn_decisioncontracts?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_decisionruleset_Create extends msdyn_decisionruleset {
}
interface msdyn_decisionruleset_Update extends msdyn_decisionruleset {
}
interface msdyn_decisionruleset_Select {
  componentidunique: WebAttribute<msdyn_decisionruleset_Select, { componentidunique: string | null }, {  }>;
  componentstate: WebAttribute<msdyn_decisionruleset_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  createdby_guid: WebAttribute<msdyn_decisionruleset_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_decisionruleset_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_decisionruleset_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_decisionruleset_Select, { importsequencenumber: number | null }, {  }>;
  iscustomizable: WebAttribute<msdyn_decisionruleset_Select, { iscustomizable: any | null }, {  }>;
  ismanaged: WebAttribute<msdyn_decisionruleset_Select, { ismanaged: boolean | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_decisionruleset_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_decisionruleset_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_decisionruleset_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_aibmodelid_guid: WebAttribute<msdyn_decisionruleset_Select, { msdyn_aibmodelid_guid: string | null }, { msdyn_aibmodelid_formatted?: string }>;
  msdyn_authoringmode: WebAttribute<msdyn_decisionruleset_Select, { msdyn_authoringmode: msdyn_rulesetauthoringmode | null }, { msdyn_authoringmode_formatted?: string }>;
  msdyn_decisionrulesetid: WebAttribute<msdyn_decisionruleset_Select, { msdyn_decisionrulesetid: string | null }, {  }>;
  msdyn_description: WebAttribute<msdyn_decisionruleset_Select, { msdyn_description: string | null }, {  }>;
  msdyn_inputcontractid_guid: WebAttribute<msdyn_decisionruleset_Select, { msdyn_inputcontractid_guid: string | null }, { msdyn_inputcontractid_formatted?: string }>;
  msdyn_isinputcollection: WebAttribute<msdyn_decisionruleset_Select, { msdyn_isinputcollection: boolean | null }, {  }>;
  msdyn_mlmodeltype: WebAttribute<msdyn_decisionruleset_Select, { msdyn_mlmodeltype: msdyn_mlmodeltype | null }, { msdyn_mlmodeltype_formatted?: string }>;
  msdyn_name: WebAttribute<msdyn_decisionruleset_Select, { msdyn_name: string | null }, {  }>;
  msdyn_outputcontractid_guid: WebAttribute<msdyn_decisionruleset_Select, { msdyn_outputcontractid_guid: string | null }, { msdyn_outputcontractid_formatted?: string }>;
  msdyn_rulesetdefinition: WebAttribute<msdyn_decisionruleset_Select, { msdyn_rulesetdefinition: string | null }, {  }>;
  msdyn_rulesettype: WebAttribute<msdyn_decisionruleset_Select, { msdyn_rulesettype: msdyn_decisionrulesettype | null }, { msdyn_rulesettype_formatted?: string }>;
  msdyn_uniquename: WebAttribute<msdyn_decisionruleset_Select, { msdyn_uniquename: string | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_decisionruleset_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  overwritetime: WebAttribute<msdyn_decisionruleset_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_decisionruleset_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_decisionruleset_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_decisionruleset_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_decisionruleset_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  solutionid: WebAttribute<msdyn_decisionruleset_Select, { solutionid: string | null }, {  }>;
  statecode: WebAttribute<msdyn_decisionruleset_Select, { statecode: msdyn_decisionruleset_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_decisionruleset_Select, { statuscode: msdyn_decisionruleset_statuscode | null }, { statuscode_formatted?: string }>;
  supportingsolutionid: WebAttribute<msdyn_decisionruleset_Select, { supportingsolutionid: string | null }, {  }>;
  timezoneruleversionnumber: WebAttribute<msdyn_decisionruleset_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_decisionruleset_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_decisionruleset_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_decisionruleset_Filter {
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
  msdyn_aibmodelid_guid: XQW.Guid;
  msdyn_authoringmode: msdyn_rulesetauthoringmode;
  msdyn_decisionrulesetid: XQW.Guid;
  msdyn_description: string;
  msdyn_inputcontractid_guid: XQW.Guid;
  msdyn_isinputcollection: boolean;
  msdyn_mlmodeltype: msdyn_mlmodeltype;
  msdyn_name: string;
  msdyn_outputcontractid_guid: XQW.Guid;
  msdyn_rulesetdefinition: string;
  msdyn_rulesettype: msdyn_decisionrulesettype;
  msdyn_uniquename: string;
  overriddencreatedon: Date;
  overwritetime: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  solutionid: XQW.Guid;
  statecode: msdyn_decisionruleset_statecode;
  statuscode: msdyn_decisionruleset_statuscode;
  supportingsolutionid: XQW.Guid;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_decisionruleset_Expand {
  createdby: WebExpand<msdyn_decisionruleset_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_decisionruleset_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_decisionruleset_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_decisionruleset_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_aibmodelid: WebExpand<msdyn_decisionruleset_Expand, msdyn_AIModel_Select, msdyn_AIModel_Filter, { msdyn_aibmodelid: msdyn_AIModel_Result }>;
  msdyn_decisionruleset_AsyncOperations: WebExpand<msdyn_decisionruleset_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_decisionruleset_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_decisionruleset_BulkDeleteFailures: WebExpand<msdyn_decisionruleset_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_decisionruleset_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_decisionruleset_DuplicateBaseRecord: WebExpand<msdyn_decisionruleset_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_decisionruleset_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_decisionruleset_DuplicateMatchingRecord: WebExpand<msdyn_decisionruleset_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_decisionruleset_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_decisionruleset_MailboxTrackingFolders: WebExpand<msdyn_decisionruleset_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_decisionruleset_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_decisionruleset_PrincipalObjectAttributeAccesses: WebExpand<msdyn_decisionruleset_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_decisionruleset_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_decisionruleset_ProcessSession: WebExpand<msdyn_decisionruleset_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_decisionruleset_ProcessSession: ProcessSession_Result[] }>;
  msdyn_decisionruleset_SyncErrors: WebExpand<msdyn_decisionruleset_Expand, SyncError_Select, SyncError_Filter, { msdyn_decisionruleset_SyncErrors: SyncError_Result[] }>;
  msdyn_decisionruleset_UserEntityInstanceDatas: WebExpand<msdyn_decisionruleset_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_decisionruleset_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_decisionruleset_msdyn_assignmentconfigurationstep_rulesetid: WebExpand<msdyn_decisionruleset_Expand, msdyn_assignmentconfigurationstep_Select, msdyn_assignmentconfigurationstep_Filter, { msdyn_decisionruleset_msdyn_assignmentconfigurationstep_rulesetid: msdyn_assignmentconfigurationstep_Result[] }>;
  msdyn_decisionruleset_msdyn_routingconfigurationstep_rulesetid: WebExpand<msdyn_decisionruleset_Expand, msdyn_routingconfigurationstep_Select, msdyn_routingconfigurationstep_Filter, { msdyn_decisionruleset_msdyn_routingconfigurationstep_rulesetid: msdyn_routingconfigurationstep_Result[] }>;
  msdyn_decisionruleset_msdyn_rulesetdependencymapping_msdyn_referencedpolymorphicentityid: WebExpand<msdyn_decisionruleset_Expand, msdyn_rulesetdependencymapping_Select, msdyn_rulesetdependencymapping_Filter, { msdyn_decisionruleset_msdyn_rulesetdependencymapping_msdyn_referencedpolymorphicentityid: msdyn_rulesetdependencymapping_Result[] }>;
  msdyn_decisionruleset_msdyn_rulesetdependencymapping_msdyn_referencingrulesetid: WebExpand<msdyn_decisionruleset_Expand, msdyn_rulesetdependencymapping_Select, msdyn_rulesetdependencymapping_Filter, { msdyn_decisionruleset_msdyn_rulesetdependencymapping_msdyn_referencingrulesetid: msdyn_rulesetdependencymapping_Result[] }>;
  msdyn_inputcontractid: WebExpand<msdyn_decisionruleset_Expand, msdyn_decisioncontract_Select, msdyn_decisioncontract_Filter, { msdyn_inputcontractid: msdyn_decisioncontract_Result }>;
  msdyn_msdyn_decisionruleset_msdyn_masterentityroutingconfiguration_rulesetid: WebExpand<msdyn_decisionruleset_Expand, msdyn_masterentityroutingconfiguration_Select, msdyn_masterentityroutingconfiguration_Filter, { msdyn_msdyn_decisionruleset_msdyn_masterentityroutingconfiguration_rulesetid: msdyn_masterentityroutingconfiguration_Result[] }>;
  msdyn_msdyn_decisionruleset_msdyn_unifiedroutingdiagnostic_decisionrulesetid: WebExpand<msdyn_decisionruleset_Expand, msdyn_unifiedroutingdiagnostic_Select, msdyn_unifiedroutingdiagnostic_Filter, { msdyn_msdyn_decisionruleset_msdyn_unifiedroutingdiagnostic_decisionrulesetid: msdyn_unifiedroutingdiagnostic_Result[] }>;
  msdyn_outputcontractid: WebExpand<msdyn_decisionruleset_Expand, msdyn_decisioncontract_Select, msdyn_decisioncontract_Filter, { msdyn_outputcontractid: msdyn_decisioncontract_Result }>;
  ownerid: WebExpand<msdyn_decisionruleset_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_decisionruleset_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_decisionruleset_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_decisionruleset_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_decisionruleset_FormattedResult {
  componentstate_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_aibmodelid_formatted?: string;
  msdyn_authoringmode_formatted?: string;
  msdyn_inputcontractid_formatted?: string;
  msdyn_mlmodeltype_formatted?: string;
  msdyn_outputcontractid_formatted?: string;
  msdyn_rulesettype_formatted?: string;
  overriddencreatedon_formatted?: string;
  overwritetime_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_decisionruleset_Result extends msdyn_decisionruleset_Base, msdyn_decisionruleset_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_aibmodelid_guid: string | null;
  msdyn_inputcontractid_guid: string | null;
  msdyn_outputcontractid_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_decisionruleset_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_aibmodelid: WebMappingRetrieve<msdyn_AIModel_Select,msdyn_AIModel_Expand,msdyn_AIModel_Filter,msdyn_AIModel_Fixed,msdyn_AIModel_Result,msdyn_AIModel_FormattedResult>;
  msdyn_inputcontractid: WebMappingRetrieve<msdyn_decisioncontract_Select,msdyn_decisioncontract_Expand,msdyn_decisioncontract_Filter,msdyn_decisioncontract_Fixed,msdyn_decisioncontract_Result,msdyn_decisioncontract_FormattedResult>;
  msdyn_outputcontractid: WebMappingRetrieve<msdyn_decisioncontract_Select,msdyn_decisioncontract_Expand,msdyn_decisioncontract_Filter,msdyn_decisioncontract_Fixed,msdyn_decisioncontract_Result,msdyn_decisioncontract_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_decisionruleset_RelatedMany {
  msdyn_decisionruleset_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_decisionruleset_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_decisionruleset_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_decisionruleset_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_decisionruleset_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_decisionruleset_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_decisionruleset_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_decisionruleset_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_decisionruleset_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  msdyn_decisionruleset_msdyn_assignmentconfigurationstep_rulesetid: WebMappingRetrieve<msdyn_assignmentconfigurationstep_Select,msdyn_assignmentconfigurationstep_Expand,msdyn_assignmentconfigurationstep_Filter,msdyn_assignmentconfigurationstep_Fixed,msdyn_assignmentconfigurationstep_Result,msdyn_assignmentconfigurationstep_FormattedResult>;
  msdyn_decisionruleset_msdyn_routingconfigurationstep_rulesetid: WebMappingRetrieve<msdyn_routingconfigurationstep_Select,msdyn_routingconfigurationstep_Expand,msdyn_routingconfigurationstep_Filter,msdyn_routingconfigurationstep_Fixed,msdyn_routingconfigurationstep_Result,msdyn_routingconfigurationstep_FormattedResult>;
  msdyn_decisionruleset_msdyn_rulesetdependencymapping_msdyn_referencedpolymorphicentityid: WebMappingRetrieve<msdyn_rulesetdependencymapping_Select,msdyn_rulesetdependencymapping_Expand,msdyn_rulesetdependencymapping_Filter,msdyn_rulesetdependencymapping_Fixed,msdyn_rulesetdependencymapping_Result,msdyn_rulesetdependencymapping_FormattedResult>;
  msdyn_decisionruleset_msdyn_rulesetdependencymapping_msdyn_referencingrulesetid: WebMappingRetrieve<msdyn_rulesetdependencymapping_Select,msdyn_rulesetdependencymapping_Expand,msdyn_rulesetdependencymapping_Filter,msdyn_rulesetdependencymapping_Fixed,msdyn_rulesetdependencymapping_Result,msdyn_rulesetdependencymapping_FormattedResult>;
  msdyn_msdyn_decisionruleset_msdyn_masterentityroutingconfiguration_rulesetid: WebMappingRetrieve<msdyn_masterentityroutingconfiguration_Select,msdyn_masterentityroutingconfiguration_Expand,msdyn_masterentityroutingconfiguration_Filter,msdyn_masterentityroutingconfiguration_Fixed,msdyn_masterentityroutingconfiguration_Result,msdyn_masterentityroutingconfiguration_FormattedResult>;
  msdyn_msdyn_decisionruleset_msdyn_unifiedroutingdiagnostic_decisionrulesetid: WebMappingRetrieve<msdyn_unifiedroutingdiagnostic_Select,msdyn_unifiedroutingdiagnostic_Expand,msdyn_unifiedroutingdiagnostic_Filter,msdyn_unifiedroutingdiagnostic_Fixed,msdyn_unifiedroutingdiagnostic_Result,msdyn_unifiedroutingdiagnostic_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_decisionrulesets: WebMappingRetrieve<msdyn_decisionruleset_Select,msdyn_decisionruleset_Expand,msdyn_decisionruleset_Filter,msdyn_decisionruleset_Fixed,msdyn_decisionruleset_Result,msdyn_decisionruleset_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_decisionrulesets: WebMappingRelated<msdyn_decisionruleset_RelatedOne,msdyn_decisionruleset_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_decisionrulesets: WebMappingCUDA<msdyn_decisionruleset_Create,msdyn_decisionruleset_Update,msdyn_decisionruleset_Select>;
}
