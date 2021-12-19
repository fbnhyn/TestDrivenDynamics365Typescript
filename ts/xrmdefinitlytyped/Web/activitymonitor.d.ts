interface activitymonitor_Base extends WebEntity {
  activitymonitorid?: string | null;
  advancedsettings?: string | null;
  contactcreatedbyrule?: boolean | null;
  createdon?: Date | null;
  currentstate?: activitymonitor_currentstate | null;
  entitlementcheck?: boolean | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  name?: string | null;
  overriddencreatedon?: Date | null;
  reason?: activitymonitor_reason | null;
  statecode?: activitymonitor_statecode | null;
  statuscode?: activitymonitor_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface activitymonitor_Relationships {
  activitymonitor_AsyncOperations?: AsyncOperation_Result[] | null;
  activitymonitor_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  activitymonitor_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  activitymonitor_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  activitymonitor_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  activitymonitor_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  activitymonitor_ProcessSession?: ProcessSession_Result[] | null;
  activitymonitor_SyncErrors?: SyncError_Result[] | null;
  activitymonitor_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  monitoredactivityitemid_email?: Email_Result | null;
  monitoredactivityitemid_task?: Task_Result | null;
}
interface activitymonitor extends activitymonitor_Base, activitymonitor_Relationships {
  conditionid_bind$convertruleitems?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface activitymonitor_Create extends activitymonitor {
  monitoredactivityitemid_email_bind$emails?: string | null;
  monitoredactivityitemid_task_bind$tasks?: string | null;
  ruleid_bind$convertrules?: string | null;
}
interface activitymonitor_Update extends activitymonitor {
}
interface activitymonitor_Select {
  activitymonitorid: WebAttribute<activitymonitor_Select, { activitymonitorid: string | null }, {  }>;
  advancedsettings: WebAttribute<activitymonitor_Select, { advancedsettings: string | null }, {  }>;
  conditionid_guid: WebAttribute<activitymonitor_Select, { conditionid_guid: string | null }, { conditionid_formatted?: string }>;
  contactcreatedbyrule: WebAttribute<activitymonitor_Select, { contactcreatedbyrule: boolean | null }, {  }>;
  createdby_guid: WebAttribute<activitymonitor_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<activitymonitor_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<activitymonitor_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  currentstate: WebAttribute<activitymonitor_Select, { currentstate: activitymonitor_currentstate | null }, { currentstate_formatted?: string }>;
  entitlementcheck: WebAttribute<activitymonitor_Select, { entitlementcheck: boolean | null }, {  }>;
  importsequencenumber: WebAttribute<activitymonitor_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<activitymonitor_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<activitymonitor_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<activitymonitor_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  monitoredactivityitemid_guid: WebAttribute<activitymonitor_Select, { monitoredactivityitemid_guid: string | null }, { monitoredactivityitemid_formatted?: string }>;
  name: WebAttribute<activitymonitor_Select, { name: string | null }, {  }>;
  overriddencreatedon: WebAttribute<activitymonitor_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<activitymonitor_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<activitymonitor_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<activitymonitor_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<activitymonitor_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  reason: WebAttribute<activitymonitor_Select, { reason: activitymonitor_reason | null }, { reason_formatted?: string }>;
  ruleid_guid: WebAttribute<activitymonitor_Select, { ruleid_guid: string | null }, { ruleid_formatted?: string }>;
  statecode: WebAttribute<activitymonitor_Select, { statecode: activitymonitor_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<activitymonitor_Select, { statuscode: activitymonitor_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<activitymonitor_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<activitymonitor_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<activitymonitor_Select, { versionnumber: number | null }, {  }>;
}
interface activitymonitor_Filter {
  activitymonitorid: XQW.Guid;
  advancedsettings: string;
  conditionid_guid: XQW.Guid;
  contactcreatedbyrule: boolean;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  currentstate: activitymonitor_currentstate;
  entitlementcheck: boolean;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  monitoredactivityitemid_guid: XQW.Guid;
  name: string;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  reason: activitymonitor_reason;
  ruleid_guid: XQW.Guid;
  statecode: activitymonitor_statecode;
  statuscode: activitymonitor_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface activitymonitor_Expand {
  activitymonitor_AsyncOperations: WebExpand<activitymonitor_Expand, AsyncOperation_Select, AsyncOperation_Filter, { activitymonitor_AsyncOperations: AsyncOperation_Result[] }>;
  activitymonitor_BulkDeleteFailures: WebExpand<activitymonitor_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { activitymonitor_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  activitymonitor_DuplicateBaseRecord: WebExpand<activitymonitor_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { activitymonitor_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  activitymonitor_DuplicateMatchingRecord: WebExpand<activitymonitor_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { activitymonitor_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  activitymonitor_MailboxTrackingFolders: WebExpand<activitymonitor_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { activitymonitor_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  activitymonitor_PrincipalObjectAttributeAccesses: WebExpand<activitymonitor_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { activitymonitor_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  activitymonitor_ProcessSession: WebExpand<activitymonitor_Expand, ProcessSession_Select, ProcessSession_Filter, { activitymonitor_ProcessSession: ProcessSession_Result[] }>;
  activitymonitor_SyncErrors: WebExpand<activitymonitor_Expand, SyncError_Select, SyncError_Filter, { activitymonitor_SyncErrors: SyncError_Result[] }>;
  activitymonitor_UserEntityInstanceDatas: WebExpand<activitymonitor_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { activitymonitor_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  conditionid: WebExpand<activitymonitor_Expand, ConvertRuleItem_Select, ConvertRuleItem_Filter, { conditionid: ConvertRuleItem_Result }>;
  createdby: WebExpand<activitymonitor_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<activitymonitor_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<activitymonitor_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<activitymonitor_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  monitoredactivityitemid_email: WebExpand<activitymonitor_Expand, Email_Select, Email_Filter, { monitoredactivityitemid_email: Email_Result }>;
  monitoredactivityitemid_task: WebExpand<activitymonitor_Expand, Task_Select, Task_Filter, { monitoredactivityitemid_task: Task_Result }>;
  ownerid: WebExpand<activitymonitor_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<activitymonitor_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<activitymonitor_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<activitymonitor_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
  ruleid: WebExpand<activitymonitor_Expand, ConvertRule_Select, ConvertRule_Filter, { ruleid: ConvertRule_Result }>;
}
interface activitymonitor_FormattedResult {
  conditionid_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  currentstate_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  monitoredactivityitemid_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  reason_formatted?: string;
  ruleid_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface activitymonitor_Result extends activitymonitor_Base, activitymonitor_Relationships {
  "@odata.etag": string;
  conditionid_guid: string | null;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  monitoredactivityitemid_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
  ruleid_guid: string | null;
}
interface activitymonitor_RelatedOne {
  conditionid: WebMappingRetrieve<ConvertRuleItem_Select,ConvertRuleItem_Expand,ConvertRuleItem_Filter,ConvertRuleItem_Fixed,ConvertRuleItem_Result,ConvertRuleItem_FormattedResult>;
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  monitoredactivityitemid_email: WebMappingRetrieve<Email_Select,Email_Expand,Email_Filter,Email_Fixed,Email_Result,Email_FormattedResult>;
  monitoredactivityitemid_task: WebMappingRetrieve<Task_Select,Task_Expand,Task_Filter,Task_Fixed,Task_Result,Task_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ruleid: WebMappingRetrieve<ConvertRule_Select,ConvertRule_Expand,ConvertRule_Filter,ConvertRule_Fixed,ConvertRule_Result,ConvertRule_FormattedResult>;
}
interface activitymonitor_RelatedMany {
  activitymonitor_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  activitymonitor_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  activitymonitor_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  activitymonitor_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  activitymonitor_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  activitymonitor_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  activitymonitor_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  activitymonitor_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  activitymonitor_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  activitymonitors: WebMappingRetrieve<activitymonitor_Select,activitymonitor_Expand,activitymonitor_Filter,activitymonitor_Fixed,activitymonitor_Result,activitymonitor_FormattedResult>;
}
interface WebEntitiesRelated {
  activitymonitors: WebMappingRelated<activitymonitor_RelatedOne,activitymonitor_RelatedMany>;
}
interface WebEntitiesCUDA {
  activitymonitors: WebMappingCUDA<activitymonitor_Create,activitymonitor_Update,activitymonitor_Select>;
}
