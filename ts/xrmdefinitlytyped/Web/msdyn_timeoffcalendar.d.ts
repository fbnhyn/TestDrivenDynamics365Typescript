interface msdyn_timeoffcalendar_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_calendar?: string | null;
  msdyn_name?: string | null;
  msdyn_timeoffcalendarid?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_timeoffcalendar_statecode | null;
  statuscode?: msdyn_timeoffcalendar_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_timeoffcalendar_Relationships {
  msdyn_timeEntry?: msdyn_timeentry_Result | null;
  msdyn_timeoffcalendar_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_timeoffcalendar_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_timeoffcalendar_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_timeoffcalendar_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_timeoffcalendar_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_timeoffcalendar_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_timeoffcalendar_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_timeoffcalendar_SyncErrors?: SyncError_Result[] | null;
  msdyn_timeoffcalendar_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_timeoffcalendar extends msdyn_timeoffcalendar_Base, msdyn_timeoffcalendar_Relationships {
  msdyn_timeEntry_bind$msdyn_timeentries?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_timeoffcalendar_Create extends msdyn_timeoffcalendar {
}
interface msdyn_timeoffcalendar_Update extends msdyn_timeoffcalendar {
}
interface msdyn_timeoffcalendar_Select {
  createdby_guid: WebAttribute<msdyn_timeoffcalendar_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_timeoffcalendar_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_timeoffcalendar_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_timeoffcalendar_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_timeoffcalendar_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_timeoffcalendar_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_timeoffcalendar_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_calendar: WebAttribute<msdyn_timeoffcalendar_Select, { msdyn_calendar: string | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_timeoffcalendar_Select, { msdyn_name: string | null }, {  }>;
  msdyn_timeentry_guid: WebAttribute<msdyn_timeoffcalendar_Select, { msdyn_timeentry_guid: string | null }, { msdyn_timeentry_formatted?: string }>;
  msdyn_timeoffcalendarid: WebAttribute<msdyn_timeoffcalendar_Select, { msdyn_timeoffcalendarid: string | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_timeoffcalendar_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_timeoffcalendar_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_timeoffcalendar_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_timeoffcalendar_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_timeoffcalendar_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_timeoffcalendar_Select, { statecode: msdyn_timeoffcalendar_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_timeoffcalendar_Select, { statuscode: msdyn_timeoffcalendar_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_timeoffcalendar_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_timeoffcalendar_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_timeoffcalendar_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_timeoffcalendar_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_calendar: string;
  msdyn_name: string;
  msdyn_timeentry_guid: XQW.Guid;
  msdyn_timeoffcalendarid: XQW.Guid;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_timeoffcalendar_statecode;
  statuscode: msdyn_timeoffcalendar_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_timeoffcalendar_Expand {
  createdby: WebExpand<msdyn_timeoffcalendar_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_timeoffcalendar_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_timeoffcalendar_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_timeoffcalendar_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_timeEntry: WebExpand<msdyn_timeoffcalendar_Expand, msdyn_timeentry_Select, msdyn_timeentry_Filter, { msdyn_timeEntry: msdyn_timeentry_Result }>;
  msdyn_timeoffcalendar_AsyncOperations: WebExpand<msdyn_timeoffcalendar_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_timeoffcalendar_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_timeoffcalendar_BulkDeleteFailures: WebExpand<msdyn_timeoffcalendar_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_timeoffcalendar_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_timeoffcalendar_DuplicateBaseRecord: WebExpand<msdyn_timeoffcalendar_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_timeoffcalendar_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_timeoffcalendar_DuplicateMatchingRecord: WebExpand<msdyn_timeoffcalendar_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_timeoffcalendar_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_timeoffcalendar_MailboxTrackingFolders: WebExpand<msdyn_timeoffcalendar_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_timeoffcalendar_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_timeoffcalendar_PrincipalObjectAttributeAccesses: WebExpand<msdyn_timeoffcalendar_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_timeoffcalendar_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_timeoffcalendar_ProcessSession: WebExpand<msdyn_timeoffcalendar_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_timeoffcalendar_ProcessSession: ProcessSession_Result[] }>;
  msdyn_timeoffcalendar_SyncErrors: WebExpand<msdyn_timeoffcalendar_Expand, SyncError_Select, SyncError_Filter, { msdyn_timeoffcalendar_SyncErrors: SyncError_Result[] }>;
  msdyn_timeoffcalendar_UserEntityInstanceDatas: WebExpand<msdyn_timeoffcalendar_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_timeoffcalendar_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  ownerid: WebExpand<msdyn_timeoffcalendar_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_timeoffcalendar_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_timeoffcalendar_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_timeoffcalendar_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_timeoffcalendar_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_timeentry_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_timeoffcalendar_Result extends msdyn_timeoffcalendar_Base, msdyn_timeoffcalendar_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_timeentry_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_timeoffcalendar_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_timeEntry: WebMappingRetrieve<msdyn_timeentry_Select,msdyn_timeentry_Expand,msdyn_timeentry_Filter,msdyn_timeentry_Fixed,msdyn_timeentry_Result,msdyn_timeentry_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_timeoffcalendar_RelatedMany {
  msdyn_timeoffcalendar_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_timeoffcalendar_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_timeoffcalendar_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_timeoffcalendar_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_timeoffcalendar_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_timeoffcalendar_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_timeoffcalendar_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_timeoffcalendar_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_timeoffcalendar_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_timeoffcalendars: WebMappingRetrieve<msdyn_timeoffcalendar_Select,msdyn_timeoffcalendar_Expand,msdyn_timeoffcalendar_Filter,msdyn_timeoffcalendar_Fixed,msdyn_timeoffcalendar_Result,msdyn_timeoffcalendar_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_timeoffcalendars: WebMappingRelated<msdyn_timeoffcalendar_RelatedOne,msdyn_timeoffcalendar_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_timeoffcalendars: WebMappingCUDA<msdyn_timeoffcalendar_Create,msdyn_timeoffcalendar_Update,msdyn_timeoffcalendar_Select>;
}
