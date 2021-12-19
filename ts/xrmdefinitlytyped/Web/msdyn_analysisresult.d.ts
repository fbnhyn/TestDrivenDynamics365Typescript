interface msdyn_analysisresult_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_analysiscomponenttype?: msdyn_analysisresult_msdyn_analysiscomponenttype | null;
  msdyn_analysisresultid?: string | null;
  msdyn_category?: msdyn_analysisresult_msdyn_category | null;
  msdyn_componenttype?: msdyn_analysisresult_msdyn_componenttype | null;
  msdyn_entityname?: string | null;
  msdyn_fileuri?: string | null;
  msdyn_hasresolution?: boolean | null;
  msdyn_helplink?: string | null;
  msdyn_level?: msdyn_analysisresult_msdyn_level | null;
  msdyn_line?: number | null;
  msdyn_member?: string | null;
  msdyn_message?: string | null;
  msdyn_messagearguments?: string | null;
  msdyn_messageid?: string | null;
  msdyn_module?: string | null;
  msdyn_name?: string | null;
  msdyn_repairissuetype?: string | null;
  msdyn_returnstatus?: msdyn_analysisresult_msdyn_returnstatus | null;
  msdyn_ruleid?: string | null;
  msdyn_rulereferenceuri?: string | null;
  msdyn_severity?: msdyn_analysisresult_msdyn_severity | null;
  msdyn_snippet?: string | null;
  msdyn_solutionhealthmessage?: string | null;
  msdyn_type?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_analysisresult_statecode | null;
  statuscode?: msdyn_analysisresult_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_analysisresult_Relationships {
  msdyn_AnalysisComponentId?: msdyn_analysiscomponent_Result | null;
  msdyn_AnalysisJobId?: msdyn_analysisjob_Result | null;
  msdyn_analysisresult_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_analysisresult_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_analysisresult_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_analysisresult_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_analysisresult_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_analysisresult_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_analysisresult_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_analysisresult_SyncErrors?: SyncError_Result[] | null;
  msdyn_analysisresult_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  msdyn_msdyn_analysisresult_msdyn_analysisresultdetail_AnalysisResult?: msdyn_analysisresultdetail_Result[] | null;
}
interface msdyn_analysisresult extends msdyn_analysisresult_Base, msdyn_analysisresult_Relationships {
  msdyn_AnalysisComponentId_bind$msdyn_analysiscomponents?: string | null;
  msdyn_AnalysisJobId_bind$msdyn_analysisjobs?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_analysisresult_Create extends msdyn_analysisresult {
}
interface msdyn_analysisresult_Update extends msdyn_analysisresult {
}
interface msdyn_analysisresult_Select {
  createdby_guid: WebAttribute<msdyn_analysisresult_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_analysisresult_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_analysisresult_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_analysisresult_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_analysisresult_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_analysisresult_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_analysisresult_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_analysiscomponentid_guid: WebAttribute<msdyn_analysisresult_Select, { msdyn_analysiscomponentid_guid: string | null }, { msdyn_analysiscomponentid_formatted?: string }>;
  msdyn_analysiscomponenttype: WebAttribute<msdyn_analysisresult_Select, { msdyn_analysiscomponenttype: msdyn_analysisresult_msdyn_analysiscomponenttype | null }, { msdyn_analysiscomponenttype_formatted?: string }>;
  msdyn_analysisjobid_guid: WebAttribute<msdyn_analysisresult_Select, { msdyn_analysisjobid_guid: string | null }, { msdyn_analysisjobid_formatted?: string }>;
  msdyn_analysisresultid: WebAttribute<msdyn_analysisresult_Select, { msdyn_analysisresultid: string | null }, {  }>;
  msdyn_category: WebAttribute<msdyn_analysisresult_Select, { msdyn_category: msdyn_analysisresult_msdyn_category | null }, { msdyn_category_formatted?: string }>;
  msdyn_componenttype: WebAttribute<msdyn_analysisresult_Select, { msdyn_componenttype: msdyn_analysisresult_msdyn_componenttype | null }, { msdyn_componenttype_formatted?: string }>;
  msdyn_entityname: WebAttribute<msdyn_analysisresult_Select, { msdyn_entityname: string | null }, {  }>;
  msdyn_fileuri: WebAttribute<msdyn_analysisresult_Select, { msdyn_fileuri: string | null }, {  }>;
  msdyn_hasresolution: WebAttribute<msdyn_analysisresult_Select, { msdyn_hasresolution: boolean | null }, {  }>;
  msdyn_helplink: WebAttribute<msdyn_analysisresult_Select, { msdyn_helplink: string | null }, {  }>;
  msdyn_level: WebAttribute<msdyn_analysisresult_Select, { msdyn_level: msdyn_analysisresult_msdyn_level | null }, { msdyn_level_formatted?: string }>;
  msdyn_line: WebAttribute<msdyn_analysisresult_Select, { msdyn_line: number | null }, {  }>;
  msdyn_member: WebAttribute<msdyn_analysisresult_Select, { msdyn_member: string | null }, {  }>;
  msdyn_message: WebAttribute<msdyn_analysisresult_Select, { msdyn_message: string | null }, {  }>;
  msdyn_messagearguments: WebAttribute<msdyn_analysisresult_Select, { msdyn_messagearguments: string | null }, {  }>;
  msdyn_messageid: WebAttribute<msdyn_analysisresult_Select, { msdyn_messageid: string | null }, {  }>;
  msdyn_module: WebAttribute<msdyn_analysisresult_Select, { msdyn_module: string | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_analysisresult_Select, { msdyn_name: string | null }, {  }>;
  msdyn_repairissuetype: WebAttribute<msdyn_analysisresult_Select, { msdyn_repairissuetype: string | null }, {  }>;
  msdyn_returnstatus: WebAttribute<msdyn_analysisresult_Select, { msdyn_returnstatus: msdyn_analysisresult_msdyn_returnstatus | null }, { msdyn_returnstatus_formatted?: string }>;
  msdyn_ruleid: WebAttribute<msdyn_analysisresult_Select, { msdyn_ruleid: string | null }, {  }>;
  msdyn_rulereferenceuri: WebAttribute<msdyn_analysisresult_Select, { msdyn_rulereferenceuri: string | null }, {  }>;
  msdyn_severity: WebAttribute<msdyn_analysisresult_Select, { msdyn_severity: msdyn_analysisresult_msdyn_severity | null }, { msdyn_severity_formatted?: string }>;
  msdyn_snippet: WebAttribute<msdyn_analysisresult_Select, { msdyn_snippet: string | null }, {  }>;
  msdyn_solutionhealthmessage: WebAttribute<msdyn_analysisresult_Select, { msdyn_solutionhealthmessage: string | null }, {  }>;
  msdyn_type: WebAttribute<msdyn_analysisresult_Select, { msdyn_type: string | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_analysisresult_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_analysisresult_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_analysisresult_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_analysisresult_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_analysisresult_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_analysisresult_Select, { statecode: msdyn_analysisresult_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_analysisresult_Select, { statuscode: msdyn_analysisresult_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_analysisresult_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_analysisresult_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_analysisresult_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_analysisresult_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_analysiscomponentid_guid: XQW.Guid;
  msdyn_analysiscomponenttype: msdyn_analysisresult_msdyn_analysiscomponenttype;
  msdyn_analysisjobid_guid: XQW.Guid;
  msdyn_analysisresultid: XQW.Guid;
  msdyn_category: msdyn_analysisresult_msdyn_category;
  msdyn_componenttype: msdyn_analysisresult_msdyn_componenttype;
  msdyn_entityname: string;
  msdyn_fileuri: string;
  msdyn_hasresolution: boolean;
  msdyn_helplink: string;
  msdyn_level: msdyn_analysisresult_msdyn_level;
  msdyn_line: number;
  msdyn_member: string;
  msdyn_message: string;
  msdyn_messagearguments: string;
  msdyn_messageid: string;
  msdyn_module: string;
  msdyn_name: string;
  msdyn_repairissuetype: string;
  msdyn_returnstatus: msdyn_analysisresult_msdyn_returnstatus;
  msdyn_ruleid: string;
  msdyn_rulereferenceuri: string;
  msdyn_severity: msdyn_analysisresult_msdyn_severity;
  msdyn_snippet: string;
  msdyn_solutionhealthmessage: string;
  msdyn_type: string;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_analysisresult_statecode;
  statuscode: msdyn_analysisresult_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_analysisresult_Expand {
  createdby: WebExpand<msdyn_analysisresult_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_analysisresult_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_analysisresult_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_analysisresult_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_AnalysisComponentId: WebExpand<msdyn_analysisresult_Expand, msdyn_analysiscomponent_Select, msdyn_analysiscomponent_Filter, { msdyn_AnalysisComponentId: msdyn_analysiscomponent_Result }>;
  msdyn_AnalysisJobId: WebExpand<msdyn_analysisresult_Expand, msdyn_analysisjob_Select, msdyn_analysisjob_Filter, { msdyn_AnalysisJobId: msdyn_analysisjob_Result }>;
  msdyn_analysisresult_AsyncOperations: WebExpand<msdyn_analysisresult_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_analysisresult_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_analysisresult_BulkDeleteFailures: WebExpand<msdyn_analysisresult_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_analysisresult_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_analysisresult_DuplicateBaseRecord: WebExpand<msdyn_analysisresult_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_analysisresult_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_analysisresult_DuplicateMatchingRecord: WebExpand<msdyn_analysisresult_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_analysisresult_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_analysisresult_MailboxTrackingFolders: WebExpand<msdyn_analysisresult_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_analysisresult_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_analysisresult_PrincipalObjectAttributeAccesses: WebExpand<msdyn_analysisresult_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_analysisresult_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_analysisresult_ProcessSession: WebExpand<msdyn_analysisresult_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_analysisresult_ProcessSession: ProcessSession_Result[] }>;
  msdyn_analysisresult_SyncErrors: WebExpand<msdyn_analysisresult_Expand, SyncError_Select, SyncError_Filter, { msdyn_analysisresult_SyncErrors: SyncError_Result[] }>;
  msdyn_analysisresult_UserEntityInstanceDatas: WebExpand<msdyn_analysisresult_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_analysisresult_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_msdyn_analysisresult_msdyn_analysisresultdetail_AnalysisResult: WebExpand<msdyn_analysisresult_Expand, msdyn_analysisresultdetail_Select, msdyn_analysisresultdetail_Filter, { msdyn_msdyn_analysisresult_msdyn_analysisresultdetail_AnalysisResult: msdyn_analysisresultdetail_Result[] }>;
  ownerid: WebExpand<msdyn_analysisresult_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_analysisresult_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_analysisresult_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_analysisresult_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_analysisresult_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_analysiscomponentid_formatted?: string;
  msdyn_analysiscomponenttype_formatted?: string;
  msdyn_analysisjobid_formatted?: string;
  msdyn_category_formatted?: string;
  msdyn_componenttype_formatted?: string;
  msdyn_level_formatted?: string;
  msdyn_returnstatus_formatted?: string;
  msdyn_severity_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_analysisresult_Result extends msdyn_analysisresult_Base, msdyn_analysisresult_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_analysiscomponentid_guid: string | null;
  msdyn_analysisjobid_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_analysisresult_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_AnalysisComponentId: WebMappingRetrieve<msdyn_analysiscomponent_Select,msdyn_analysiscomponent_Expand,msdyn_analysiscomponent_Filter,msdyn_analysiscomponent_Fixed,msdyn_analysiscomponent_Result,msdyn_analysiscomponent_FormattedResult>;
  msdyn_AnalysisJobId: WebMappingRetrieve<msdyn_analysisjob_Select,msdyn_analysisjob_Expand,msdyn_analysisjob_Filter,msdyn_analysisjob_Fixed,msdyn_analysisjob_Result,msdyn_analysisjob_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_analysisresult_RelatedMany {
  msdyn_analysisresult_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_analysisresult_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_analysisresult_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_analysisresult_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_analysisresult_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_analysisresult_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_analysisresult_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_analysisresult_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_analysisresult_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  msdyn_msdyn_analysisresult_msdyn_analysisresultdetail_AnalysisResult: WebMappingRetrieve<msdyn_analysisresultdetail_Select,msdyn_analysisresultdetail_Expand,msdyn_analysisresultdetail_Filter,msdyn_analysisresultdetail_Fixed,msdyn_analysisresultdetail_Result,msdyn_analysisresultdetail_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_analysisresults: WebMappingRetrieve<msdyn_analysisresult_Select,msdyn_analysisresult_Expand,msdyn_analysisresult_Filter,msdyn_analysisresult_Fixed,msdyn_analysisresult_Result,msdyn_analysisresult_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_analysisresults: WebMappingRelated<msdyn_analysisresult_RelatedOne,msdyn_analysisresult_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_analysisresults: WebMappingCUDA<msdyn_analysisresult_Create,msdyn_analysisresult_Update,msdyn_analysisresult_Select>;
}
