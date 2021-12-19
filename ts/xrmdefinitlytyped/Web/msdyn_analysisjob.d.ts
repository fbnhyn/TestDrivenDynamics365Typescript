interface msdyn_analysisjob_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_analysisjobid?: string | null;
  msdyn_customdetails?: string | null;
  msdyn_displaystatus?: string | null;
  msdyn_endtime?: Date | null;
  msdyn_errorcount?: number | null;
  msdyn_exception?: string | null;
  msdyn_inappnotificationenabled?: boolean | null;
  msdyn_name?: string | null;
  msdyn_rulefailcount?: number | null;
  msdyn_rulepasscount?: number | null;
  msdyn_ruleruncount?: number | null;
  msdyn_runcorrelationid?: string | null;
  msdyn_sevcriticalcount?: number | null;
  msdyn_sevhighcount?: number | null;
  msdyn_sevlowcount?: number | null;
  msdyn_sevmediumcount?: number | null;
  msdyn_starttime?: Date | null;
  msdyn_suggestioncount?: number | null;
  msdyn_tenantid?: string | null;
  msdyn_triggertype?: string | null;
  msdyn_warningcount?: number | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_analysisjob_statecode | null;
  statuscode?: msdyn_analysisjob_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_analysisjob_Relationships {
  msdyn_analysisjob_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_analysisjob_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_analysisjob_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_analysisjob_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_analysisjob_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_analysisjob_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_analysisjob_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_analysisjob_SyncErrors?: SyncError_Result[] | null;
  msdyn_analysisjob_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  msdyn_analysisjob_msdyn_analysiscomponent?: msdyn_analysiscomponent_Result[] | null;
  msdyn_analysisjob_msdyn_analysisresult?: msdyn_analysisresult_Result[] | null;
}
interface msdyn_analysisjob extends msdyn_analysisjob_Base, msdyn_analysisjob_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_analysisjob_Create extends msdyn_analysisjob {
}
interface msdyn_analysisjob_Update extends msdyn_analysisjob {
}
interface msdyn_analysisjob_Select {
  createdby_guid: WebAttribute<msdyn_analysisjob_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_analysisjob_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_analysisjob_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_analysisjob_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_analysisjob_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_analysisjob_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_analysisjob_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_analysisjobid: WebAttribute<msdyn_analysisjob_Select, { msdyn_analysisjobid: string | null }, {  }>;
  msdyn_customdetails: WebAttribute<msdyn_analysisjob_Select, { msdyn_customdetails: string | null }, {  }>;
  msdyn_displaystatus: WebAttribute<msdyn_analysisjob_Select, { msdyn_displaystatus: string | null }, {  }>;
  msdyn_endtime: WebAttribute<msdyn_analysisjob_Select, { msdyn_endtime: Date | null }, { msdyn_endtime_formatted?: string }>;
  msdyn_errorcount: WebAttribute<msdyn_analysisjob_Select, { msdyn_errorcount: number | null }, {  }>;
  msdyn_exception: WebAttribute<msdyn_analysisjob_Select, { msdyn_exception: string | null }, {  }>;
  msdyn_inappnotificationenabled: WebAttribute<msdyn_analysisjob_Select, { msdyn_inappnotificationenabled: boolean | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_analysisjob_Select, { msdyn_name: string | null }, {  }>;
  msdyn_rulefailcount: WebAttribute<msdyn_analysisjob_Select, { msdyn_rulefailcount: number | null }, {  }>;
  msdyn_rulepasscount: WebAttribute<msdyn_analysisjob_Select, { msdyn_rulepasscount: number | null }, {  }>;
  msdyn_ruleruncount: WebAttribute<msdyn_analysisjob_Select, { msdyn_ruleruncount: number | null }, {  }>;
  msdyn_runcorrelationid: WebAttribute<msdyn_analysisjob_Select, { msdyn_runcorrelationid: string | null }, {  }>;
  msdyn_sevcriticalcount: WebAttribute<msdyn_analysisjob_Select, { msdyn_sevcriticalcount: number | null }, {  }>;
  msdyn_sevhighcount: WebAttribute<msdyn_analysisjob_Select, { msdyn_sevhighcount: number | null }, {  }>;
  msdyn_sevlowcount: WebAttribute<msdyn_analysisjob_Select, { msdyn_sevlowcount: number | null }, {  }>;
  msdyn_sevmediumcount: WebAttribute<msdyn_analysisjob_Select, { msdyn_sevmediumcount: number | null }, {  }>;
  msdyn_starttime: WebAttribute<msdyn_analysisjob_Select, { msdyn_starttime: Date | null }, { msdyn_starttime_formatted?: string }>;
  msdyn_suggestioncount: WebAttribute<msdyn_analysisjob_Select, { msdyn_suggestioncount: number | null }, {  }>;
  msdyn_tenantid: WebAttribute<msdyn_analysisjob_Select, { msdyn_tenantid: string | null }, {  }>;
  msdyn_triggertype: WebAttribute<msdyn_analysisjob_Select, { msdyn_triggertype: string | null }, {  }>;
  msdyn_warningcount: WebAttribute<msdyn_analysisjob_Select, { msdyn_warningcount: number | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_analysisjob_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_analysisjob_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_analysisjob_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_analysisjob_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_analysisjob_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_analysisjob_Select, { statecode: msdyn_analysisjob_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_analysisjob_Select, { statuscode: msdyn_analysisjob_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_analysisjob_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_analysisjob_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_analysisjob_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_analysisjob_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_analysisjobid: XQW.Guid;
  msdyn_customdetails: string;
  msdyn_displaystatus: string;
  msdyn_endtime: Date;
  msdyn_errorcount: number;
  msdyn_exception: string;
  msdyn_inappnotificationenabled: boolean;
  msdyn_name: string;
  msdyn_rulefailcount: number;
  msdyn_rulepasscount: number;
  msdyn_ruleruncount: number;
  msdyn_runcorrelationid: string;
  msdyn_sevcriticalcount: number;
  msdyn_sevhighcount: number;
  msdyn_sevlowcount: number;
  msdyn_sevmediumcount: number;
  msdyn_starttime: Date;
  msdyn_suggestioncount: number;
  msdyn_tenantid: string;
  msdyn_triggertype: string;
  msdyn_warningcount: number;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_analysisjob_statecode;
  statuscode: msdyn_analysisjob_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_analysisjob_Expand {
  createdby: WebExpand<msdyn_analysisjob_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_analysisjob_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_analysisjob_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_analysisjob_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_analysisjob_AsyncOperations: WebExpand<msdyn_analysisjob_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_analysisjob_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_analysisjob_BulkDeleteFailures: WebExpand<msdyn_analysisjob_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_analysisjob_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_analysisjob_DuplicateBaseRecord: WebExpand<msdyn_analysisjob_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_analysisjob_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_analysisjob_DuplicateMatchingRecord: WebExpand<msdyn_analysisjob_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_analysisjob_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_analysisjob_MailboxTrackingFolders: WebExpand<msdyn_analysisjob_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_analysisjob_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_analysisjob_PrincipalObjectAttributeAccesses: WebExpand<msdyn_analysisjob_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_analysisjob_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_analysisjob_ProcessSession: WebExpand<msdyn_analysisjob_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_analysisjob_ProcessSession: ProcessSession_Result[] }>;
  msdyn_analysisjob_SyncErrors: WebExpand<msdyn_analysisjob_Expand, SyncError_Select, SyncError_Filter, { msdyn_analysisjob_SyncErrors: SyncError_Result[] }>;
  msdyn_analysisjob_UserEntityInstanceDatas: WebExpand<msdyn_analysisjob_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_analysisjob_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_analysisjob_msdyn_analysiscomponent: WebExpand<msdyn_analysisjob_Expand, msdyn_analysiscomponent_Select, msdyn_analysiscomponent_Filter, { msdyn_analysisjob_msdyn_analysiscomponent: msdyn_analysiscomponent_Result[] }>;
  msdyn_analysisjob_msdyn_analysisresult: WebExpand<msdyn_analysisjob_Expand, msdyn_analysisresult_Select, msdyn_analysisresult_Filter, { msdyn_analysisjob_msdyn_analysisresult: msdyn_analysisresult_Result[] }>;
  ownerid: WebExpand<msdyn_analysisjob_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_analysisjob_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_analysisjob_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_analysisjob_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_analysisjob_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_endtime_formatted?: string;
  msdyn_starttime_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_analysisjob_Result extends msdyn_analysisjob_Base, msdyn_analysisjob_Relationships {
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
interface msdyn_analysisjob_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_analysisjob_RelatedMany {
  msdyn_analysisjob_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_analysisjob_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_analysisjob_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_analysisjob_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_analysisjob_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_analysisjob_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_analysisjob_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_analysisjob_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_analysisjob_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  msdyn_analysisjob_msdyn_analysiscomponent: WebMappingRetrieve<msdyn_analysiscomponent_Select,msdyn_analysiscomponent_Expand,msdyn_analysiscomponent_Filter,msdyn_analysiscomponent_Fixed,msdyn_analysiscomponent_Result,msdyn_analysiscomponent_FormattedResult>;
  msdyn_analysisjob_msdyn_analysisresult: WebMappingRetrieve<msdyn_analysisresult_Select,msdyn_analysisresult_Expand,msdyn_analysisresult_Filter,msdyn_analysisresult_Fixed,msdyn_analysisresult_Result,msdyn_analysisresult_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_analysisjobs: WebMappingRetrieve<msdyn_analysisjob_Select,msdyn_analysisjob_Expand,msdyn_analysisjob_Filter,msdyn_analysisjob_Fixed,msdyn_analysisjob_Result,msdyn_analysisjob_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_analysisjobs: WebMappingRelated<msdyn_analysisjob_RelatedOne,msdyn_analysisjob_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_analysisjobs: WebMappingCUDA<msdyn_analysisjob_Create,msdyn_analysisjob_Update,msdyn_analysisjob_Select>;
}
