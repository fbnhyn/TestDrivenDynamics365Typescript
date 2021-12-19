interface msdyn_analysiscomponent_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_analysiscomponentid?: string | null;
  msdyn_analysiscomponenttype?: msdyn_analysiscomponent_msdyn_analysiscomponenttype | null;
  msdyn_componentid?: string | null;
  msdyn_componentname?: string | null;
  msdyn_componenttype?: msdyn_analysiscomponent_msdyn_componenttype | null;
  msdyn_componentversion?: string | null;
  msdyn_errorcount?: number | null;
  msdyn_name?: string | null;
  msdyn_retrycount?: number | null;
  msdyn_rulefailcount?: number | null;
  msdyn_rulepasscount?: number | null;
  msdyn_rulepassrate?: number | null;
  msdyn_sevcriticalcount?: number | null;
  msdyn_sevhighcount?: number | null;
  msdyn_sevlowcount?: number | null;
  msdyn_sevmediumcount?: number | null;
  msdyn_suggestioncount?: number | null;
  msdyn_warningcount?: number | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_analysiscomponent_statecode | null;
  statuscode?: msdyn_analysiscomponent_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_analysiscomponent_Relationships {
  msdyn_AnalysisJobId?: msdyn_analysisjob_Result | null;
  msdyn_SolutionHealthRuleSetId?: msdyn_solutionhealthruleset_Result | null;
  msdyn_analysiscomponent_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_analysiscomponent_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_analysiscomponent_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_analysiscomponent_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_analysiscomponent_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_analysiscomponent_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_analysiscomponent_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_analysiscomponent_SyncErrors?: SyncError_Result[] | null;
  msdyn_analysiscomponent_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  msdyn_analysiscomponent_msdyn_analysisresult?: msdyn_analysisresult_Result[] | null;
}
interface msdyn_analysiscomponent extends msdyn_analysiscomponent_Base, msdyn_analysiscomponent_Relationships {
  msdyn_AnalysisJobId_bind$msdyn_analysisjobs?: string | null;
  msdyn_SolutionHealthRuleSetId_bind$msdyn_solutionhealthrulesets?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_analysiscomponent_Create extends msdyn_analysiscomponent {
}
interface msdyn_analysiscomponent_Update extends msdyn_analysiscomponent {
}
interface msdyn_analysiscomponent_Select {
  createdby_guid: WebAttribute<msdyn_analysiscomponent_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_analysiscomponent_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_analysiscomponent_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_analysiscomponent_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_analysiscomponent_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_analysiscomponent_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_analysiscomponent_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_analysiscomponentid: WebAttribute<msdyn_analysiscomponent_Select, { msdyn_analysiscomponentid: string | null }, {  }>;
  msdyn_analysiscomponenttype: WebAttribute<msdyn_analysiscomponent_Select, { msdyn_analysiscomponenttype: msdyn_analysiscomponent_msdyn_analysiscomponenttype | null }, { msdyn_analysiscomponenttype_formatted?: string }>;
  msdyn_analysisjobid_guid: WebAttribute<msdyn_analysiscomponent_Select, { msdyn_analysisjobid_guid: string | null }, { msdyn_analysisjobid_formatted?: string }>;
  msdyn_componentid: WebAttribute<msdyn_analysiscomponent_Select, { msdyn_componentid: string | null }, {  }>;
  msdyn_componentname: WebAttribute<msdyn_analysiscomponent_Select, { msdyn_componentname: string | null }, {  }>;
  msdyn_componenttype: WebAttribute<msdyn_analysiscomponent_Select, { msdyn_componenttype: msdyn_analysiscomponent_msdyn_componenttype | null }, { msdyn_componenttype_formatted?: string }>;
  msdyn_componentversion: WebAttribute<msdyn_analysiscomponent_Select, { msdyn_componentversion: string | null }, {  }>;
  msdyn_errorcount: WebAttribute<msdyn_analysiscomponent_Select, { msdyn_errorcount: number | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_analysiscomponent_Select, { msdyn_name: string | null }, {  }>;
  msdyn_retrycount: WebAttribute<msdyn_analysiscomponent_Select, { msdyn_retrycount: number | null }, {  }>;
  msdyn_rulefailcount: WebAttribute<msdyn_analysiscomponent_Select, { msdyn_rulefailcount: number | null }, {  }>;
  msdyn_rulepasscount: WebAttribute<msdyn_analysiscomponent_Select, { msdyn_rulepasscount: number | null }, {  }>;
  msdyn_rulepassrate: WebAttribute<msdyn_analysiscomponent_Select, { msdyn_rulepassrate: number | null }, {  }>;
  msdyn_sevcriticalcount: WebAttribute<msdyn_analysiscomponent_Select, { msdyn_sevcriticalcount: number | null }, {  }>;
  msdyn_sevhighcount: WebAttribute<msdyn_analysiscomponent_Select, { msdyn_sevhighcount: number | null }, {  }>;
  msdyn_sevlowcount: WebAttribute<msdyn_analysiscomponent_Select, { msdyn_sevlowcount: number | null }, {  }>;
  msdyn_sevmediumcount: WebAttribute<msdyn_analysiscomponent_Select, { msdyn_sevmediumcount: number | null }, {  }>;
  msdyn_solutionhealthrulesetid_guid: WebAttribute<msdyn_analysiscomponent_Select, { msdyn_solutionhealthrulesetid_guid: string | null }, { msdyn_solutionhealthrulesetid_formatted?: string }>;
  msdyn_suggestioncount: WebAttribute<msdyn_analysiscomponent_Select, { msdyn_suggestioncount: number | null }, {  }>;
  msdyn_warningcount: WebAttribute<msdyn_analysiscomponent_Select, { msdyn_warningcount: number | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_analysiscomponent_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_analysiscomponent_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_analysiscomponent_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_analysiscomponent_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_analysiscomponent_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_analysiscomponent_Select, { statecode: msdyn_analysiscomponent_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_analysiscomponent_Select, { statuscode: msdyn_analysiscomponent_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_analysiscomponent_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_analysiscomponent_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_analysiscomponent_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_analysiscomponent_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_analysiscomponentid: XQW.Guid;
  msdyn_analysiscomponenttype: msdyn_analysiscomponent_msdyn_analysiscomponenttype;
  msdyn_analysisjobid_guid: XQW.Guid;
  msdyn_componentid: string;
  msdyn_componentname: string;
  msdyn_componenttype: msdyn_analysiscomponent_msdyn_componenttype;
  msdyn_componentversion: string;
  msdyn_errorcount: number;
  msdyn_name: string;
  msdyn_retrycount: number;
  msdyn_rulefailcount: number;
  msdyn_rulepasscount: number;
  msdyn_rulepassrate: number;
  msdyn_sevcriticalcount: number;
  msdyn_sevhighcount: number;
  msdyn_sevlowcount: number;
  msdyn_sevmediumcount: number;
  msdyn_solutionhealthrulesetid_guid: XQW.Guid;
  msdyn_suggestioncount: number;
  msdyn_warningcount: number;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_analysiscomponent_statecode;
  statuscode: msdyn_analysiscomponent_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_analysiscomponent_Expand {
  createdby: WebExpand<msdyn_analysiscomponent_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_analysiscomponent_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_analysiscomponent_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_analysiscomponent_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_AnalysisJobId: WebExpand<msdyn_analysiscomponent_Expand, msdyn_analysisjob_Select, msdyn_analysisjob_Filter, { msdyn_AnalysisJobId: msdyn_analysisjob_Result }>;
  msdyn_SolutionHealthRuleSetId: WebExpand<msdyn_analysiscomponent_Expand, msdyn_solutionhealthruleset_Select, msdyn_solutionhealthruleset_Filter, { msdyn_SolutionHealthRuleSetId: msdyn_solutionhealthruleset_Result }>;
  msdyn_analysiscomponent_AsyncOperations: WebExpand<msdyn_analysiscomponent_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_analysiscomponent_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_analysiscomponent_BulkDeleteFailures: WebExpand<msdyn_analysiscomponent_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_analysiscomponent_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_analysiscomponent_DuplicateBaseRecord: WebExpand<msdyn_analysiscomponent_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_analysiscomponent_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_analysiscomponent_DuplicateMatchingRecord: WebExpand<msdyn_analysiscomponent_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_analysiscomponent_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_analysiscomponent_MailboxTrackingFolders: WebExpand<msdyn_analysiscomponent_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_analysiscomponent_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_analysiscomponent_PrincipalObjectAttributeAccesses: WebExpand<msdyn_analysiscomponent_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_analysiscomponent_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_analysiscomponent_ProcessSession: WebExpand<msdyn_analysiscomponent_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_analysiscomponent_ProcessSession: ProcessSession_Result[] }>;
  msdyn_analysiscomponent_SyncErrors: WebExpand<msdyn_analysiscomponent_Expand, SyncError_Select, SyncError_Filter, { msdyn_analysiscomponent_SyncErrors: SyncError_Result[] }>;
  msdyn_analysiscomponent_UserEntityInstanceDatas: WebExpand<msdyn_analysiscomponent_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_analysiscomponent_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_analysiscomponent_msdyn_analysisresult: WebExpand<msdyn_analysiscomponent_Expand, msdyn_analysisresult_Select, msdyn_analysisresult_Filter, { msdyn_analysiscomponent_msdyn_analysisresult: msdyn_analysisresult_Result[] }>;
  ownerid: WebExpand<msdyn_analysiscomponent_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_analysiscomponent_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_analysiscomponent_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_analysiscomponent_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_analysiscomponent_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_analysiscomponenttype_formatted?: string;
  msdyn_analysisjobid_formatted?: string;
  msdyn_componenttype_formatted?: string;
  msdyn_solutionhealthrulesetid_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_analysiscomponent_Result extends msdyn_analysiscomponent_Base, msdyn_analysiscomponent_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_analysisjobid_guid: string | null;
  msdyn_solutionhealthrulesetid_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_analysiscomponent_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_AnalysisJobId: WebMappingRetrieve<msdyn_analysisjob_Select,msdyn_analysisjob_Expand,msdyn_analysisjob_Filter,msdyn_analysisjob_Fixed,msdyn_analysisjob_Result,msdyn_analysisjob_FormattedResult>;
  msdyn_SolutionHealthRuleSetId: WebMappingRetrieve<msdyn_solutionhealthruleset_Select,msdyn_solutionhealthruleset_Expand,msdyn_solutionhealthruleset_Filter,msdyn_solutionhealthruleset_Fixed,msdyn_solutionhealthruleset_Result,msdyn_solutionhealthruleset_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_analysiscomponent_RelatedMany {
  msdyn_analysiscomponent_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_analysiscomponent_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_analysiscomponent_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_analysiscomponent_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_analysiscomponent_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_analysiscomponent_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_analysiscomponent_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_analysiscomponent_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_analysiscomponent_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  msdyn_analysiscomponent_msdyn_analysisresult: WebMappingRetrieve<msdyn_analysisresult_Select,msdyn_analysisresult_Expand,msdyn_analysisresult_Filter,msdyn_analysisresult_Fixed,msdyn_analysisresult_Result,msdyn_analysisresult_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_analysiscomponents: WebMappingRetrieve<msdyn_analysiscomponent_Select,msdyn_analysiscomponent_Expand,msdyn_analysiscomponent_Filter,msdyn_analysiscomponent_Fixed,msdyn_analysiscomponent_Result,msdyn_analysiscomponent_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_analysiscomponents: WebMappingRelated<msdyn_analysiscomponent_RelatedOne,msdyn_analysiscomponent_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_analysiscomponents: WebMappingCUDA<msdyn_analysiscomponent_Create,msdyn_analysiscomponent_Update,msdyn_analysiscomponent_Select>;
}
