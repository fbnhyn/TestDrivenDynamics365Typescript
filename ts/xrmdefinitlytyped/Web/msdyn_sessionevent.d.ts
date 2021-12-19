interface msdyn_sessionevent_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_eventinfo?: msdyn_sessionevent_msdyn_eventinfo | null;
  msdyn_eventreason?: msdyn_sessionevent_msdyn_eventreason | null;
  msdyn_eventtime?: Date | null;
  msdyn_eventtype?: msdyn_sessionevent_msdyn_eventtype | null;
  msdyn_name?: string | null;
  msdyn_sessioneventid?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_sessionevent_statecode | null;
  statuscode?: msdyn_sessionevent_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_sessionevent_Relationships {
  msdyn_sessionevent_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_sessionevent_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_sessionevent_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_sessionevent_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_sessionevent_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_sessionevent_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_sessionevent_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_sessionevent_SyncErrors?: SyncError_Result[] | null;
  msdyn_sessionevent_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_sessionevent extends msdyn_sessionevent_Base, msdyn_sessionevent_Relationships {
  msdyn_omnichannelsession_bind$msdyn_ocsessions?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_sessionevent_Create extends msdyn_sessionevent {
}
interface msdyn_sessionevent_Update extends msdyn_sessionevent {
}
interface msdyn_sessionevent_Select {
  createdby_guid: WebAttribute<msdyn_sessionevent_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_sessionevent_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_sessionevent_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_sessionevent_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_sessionevent_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_sessionevent_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_sessionevent_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_eventinfo: WebAttribute<msdyn_sessionevent_Select, { msdyn_eventinfo: msdyn_sessionevent_msdyn_eventinfo | null }, { msdyn_eventinfo_formatted?: string }>;
  msdyn_eventreason: WebAttribute<msdyn_sessionevent_Select, { msdyn_eventreason: msdyn_sessionevent_msdyn_eventreason | null }, { msdyn_eventreason_formatted?: string }>;
  msdyn_eventtime: WebAttribute<msdyn_sessionevent_Select, { msdyn_eventtime: Date | null }, { msdyn_eventtime_formatted?: string }>;
  msdyn_eventtype: WebAttribute<msdyn_sessionevent_Select, { msdyn_eventtype: msdyn_sessionevent_msdyn_eventtype | null }, { msdyn_eventtype_formatted?: string }>;
  msdyn_name: WebAttribute<msdyn_sessionevent_Select, { msdyn_name: string | null }, {  }>;
  msdyn_omnichannelsession_guid: WebAttribute<msdyn_sessionevent_Select, { msdyn_omnichannelsession_guid: string | null }, { msdyn_omnichannelsession_formatted?: string }>;
  msdyn_sessioneventid: WebAttribute<msdyn_sessionevent_Select, { msdyn_sessioneventid: string | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_sessionevent_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_sessionevent_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_sessionevent_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_sessionevent_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_sessionevent_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_sessionevent_Select, { statecode: msdyn_sessionevent_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_sessionevent_Select, { statuscode: msdyn_sessionevent_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_sessionevent_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_sessionevent_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_sessionevent_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_sessionevent_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_eventinfo: msdyn_sessionevent_msdyn_eventinfo;
  msdyn_eventreason: msdyn_sessionevent_msdyn_eventreason;
  msdyn_eventtime: Date;
  msdyn_eventtype: msdyn_sessionevent_msdyn_eventtype;
  msdyn_name: string;
  msdyn_omnichannelsession_guid: XQW.Guid;
  msdyn_sessioneventid: XQW.Guid;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_sessionevent_statecode;
  statuscode: msdyn_sessionevent_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_sessionevent_Expand {
  createdby: WebExpand<msdyn_sessionevent_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_sessionevent_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_sessionevent_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_sessionevent_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_omnichannelsession: WebExpand<msdyn_sessionevent_Expand, msdyn_ocsession_Select, msdyn_ocsession_Filter, { msdyn_omnichannelsession: msdyn_ocsession_Result }>;
  msdyn_sessionevent_AsyncOperations: WebExpand<msdyn_sessionevent_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_sessionevent_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_sessionevent_BulkDeleteFailures: WebExpand<msdyn_sessionevent_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_sessionevent_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_sessionevent_DuplicateBaseRecord: WebExpand<msdyn_sessionevent_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_sessionevent_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_sessionevent_DuplicateMatchingRecord: WebExpand<msdyn_sessionevent_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_sessionevent_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_sessionevent_MailboxTrackingFolders: WebExpand<msdyn_sessionevent_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_sessionevent_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_sessionevent_PrincipalObjectAttributeAccesses: WebExpand<msdyn_sessionevent_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_sessionevent_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_sessionevent_ProcessSession: WebExpand<msdyn_sessionevent_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_sessionevent_ProcessSession: ProcessSession_Result[] }>;
  msdyn_sessionevent_SyncErrors: WebExpand<msdyn_sessionevent_Expand, SyncError_Select, SyncError_Filter, { msdyn_sessionevent_SyncErrors: SyncError_Result[] }>;
  msdyn_sessionevent_UserEntityInstanceDatas: WebExpand<msdyn_sessionevent_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_sessionevent_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  ownerid: WebExpand<msdyn_sessionevent_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_sessionevent_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_sessionevent_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_sessionevent_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_sessionevent_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_eventinfo_formatted?: string;
  msdyn_eventreason_formatted?: string;
  msdyn_eventtime_formatted?: string;
  msdyn_eventtype_formatted?: string;
  msdyn_omnichannelsession_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_sessionevent_Result extends msdyn_sessionevent_Base, msdyn_sessionevent_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_omnichannelsession_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_sessionevent_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_omnichannelsession: WebMappingRetrieve<msdyn_ocsession_Select,msdyn_ocsession_Expand,msdyn_ocsession_Filter,msdyn_ocsession_Fixed,msdyn_ocsession_Result,msdyn_ocsession_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_sessionevent_RelatedMany {
  msdyn_sessionevent_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_sessionevent_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_sessionevent_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_sessionevent_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_sessionevent_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_sessionevent_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_sessionevent_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_sessionevent_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_sessionevent_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_sessionevents: WebMappingRetrieve<msdyn_sessionevent_Select,msdyn_sessionevent_Expand,msdyn_sessionevent_Filter,msdyn_sessionevent_Fixed,msdyn_sessionevent_Result,msdyn_sessionevent_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_sessionevents: WebMappingRelated<msdyn_sessionevent_RelatedOne,msdyn_sessionevent_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_sessionevents: WebMappingCUDA<msdyn_sessionevent_Create,msdyn_sessionevent_Update,msdyn_sessionevent_Select>;
}
