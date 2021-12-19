interface msdyn_ocsessionparticipantevent_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_eventduration?: number | null;
  msdyn_eventendtime?: Date | null;
  msdyn_eventreason?: msdyn_ocsessionparticipantevent_msdyn_eventreason | null;
  msdyn_eventstarttime?: Date | null;
  msdyn_eventtype?: msdyn_ocsessionparticipantevent_msdyn_eventtype | null;
  msdyn_name?: string | null;
  msdyn_ocsessionparticipanteventid?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_ocsessionparticipantevent_statecode | null;
  statuscode?: msdyn_ocsessionparticipantevent_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_ocsessionparticipantevent_Relationships {
  msdyn_ocsessionparticipantevent_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_ocsessionparticipantevent_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_ocsessionparticipantevent_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_ocsessionparticipantevent_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_ocsessionparticipantevent_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_ocsessionparticipantevent_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_ocsessionparticipantevent_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_ocsessionparticipantevent_SyncErrors?: SyncError_Result[] | null;
  msdyn_ocsessionparticipantevent_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_ocsessionparticipantevent extends msdyn_ocsessionparticipantevent_Base, msdyn_ocsessionparticipantevent_Relationships {
  msdyn_sessionid_bind$msdyn_ocsessions?: string | null;
  msdyn_sessionparticipantid_bind$msdyn_sessionparticipants?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_ocsessionparticipantevent_Create extends msdyn_ocsessionparticipantevent {
}
interface msdyn_ocsessionparticipantevent_Update extends msdyn_ocsessionparticipantevent {
}
interface msdyn_ocsessionparticipantevent_Select {
  createdby_guid: WebAttribute<msdyn_ocsessionparticipantevent_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_ocsessionparticipantevent_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_ocsessionparticipantevent_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_ocsessionparticipantevent_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_ocsessionparticipantevent_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_ocsessionparticipantevent_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_ocsessionparticipantevent_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_eventduration: WebAttribute<msdyn_ocsessionparticipantevent_Select, { msdyn_eventduration: number | null }, {  }>;
  msdyn_eventendtime: WebAttribute<msdyn_ocsessionparticipantevent_Select, { msdyn_eventendtime: Date | null }, { msdyn_eventendtime_formatted?: string }>;
  msdyn_eventreason: WebAttribute<msdyn_ocsessionparticipantevent_Select, { msdyn_eventreason: msdyn_ocsessionparticipantevent_msdyn_eventreason | null }, { msdyn_eventreason_formatted?: string }>;
  msdyn_eventstarttime: WebAttribute<msdyn_ocsessionparticipantevent_Select, { msdyn_eventstarttime: Date | null }, { msdyn_eventstarttime_formatted?: string }>;
  msdyn_eventtype: WebAttribute<msdyn_ocsessionparticipantevent_Select, { msdyn_eventtype: msdyn_ocsessionparticipantevent_msdyn_eventtype | null }, { msdyn_eventtype_formatted?: string }>;
  msdyn_name: WebAttribute<msdyn_ocsessionparticipantevent_Select, { msdyn_name: string | null }, {  }>;
  msdyn_ocsessionparticipanteventid: WebAttribute<msdyn_ocsessionparticipantevent_Select, { msdyn_ocsessionparticipanteventid: string | null }, {  }>;
  msdyn_sessionid_guid: WebAttribute<msdyn_ocsessionparticipantevent_Select, { msdyn_sessionid_guid: string | null }, { msdyn_sessionid_formatted?: string }>;
  msdyn_sessionparticipantid_guid: WebAttribute<msdyn_ocsessionparticipantevent_Select, { msdyn_sessionparticipantid_guid: string | null }, { msdyn_sessionparticipantid_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_ocsessionparticipantevent_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_ocsessionparticipantevent_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_ocsessionparticipantevent_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_ocsessionparticipantevent_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_ocsessionparticipantevent_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_ocsessionparticipantevent_Select, { statecode: msdyn_ocsessionparticipantevent_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_ocsessionparticipantevent_Select, { statuscode: msdyn_ocsessionparticipantevent_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_ocsessionparticipantevent_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_ocsessionparticipantevent_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_ocsessionparticipantevent_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_ocsessionparticipantevent_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_eventduration: any;
  msdyn_eventendtime: Date;
  msdyn_eventreason: msdyn_ocsessionparticipantevent_msdyn_eventreason;
  msdyn_eventstarttime: Date;
  msdyn_eventtype: msdyn_ocsessionparticipantevent_msdyn_eventtype;
  msdyn_name: string;
  msdyn_ocsessionparticipanteventid: XQW.Guid;
  msdyn_sessionid_guid: XQW.Guid;
  msdyn_sessionparticipantid_guid: XQW.Guid;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_ocsessionparticipantevent_statecode;
  statuscode: msdyn_ocsessionparticipantevent_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_ocsessionparticipantevent_Expand {
  createdby: WebExpand<msdyn_ocsessionparticipantevent_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_ocsessionparticipantevent_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_ocsessionparticipantevent_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_ocsessionparticipantevent_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_ocsessionparticipantevent_AsyncOperations: WebExpand<msdyn_ocsessionparticipantevent_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_ocsessionparticipantevent_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_ocsessionparticipantevent_BulkDeleteFailures: WebExpand<msdyn_ocsessionparticipantevent_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_ocsessionparticipantevent_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_ocsessionparticipantevent_DuplicateBaseRecord: WebExpand<msdyn_ocsessionparticipantevent_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_ocsessionparticipantevent_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_ocsessionparticipantevent_DuplicateMatchingRecord: WebExpand<msdyn_ocsessionparticipantevent_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_ocsessionparticipantevent_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_ocsessionparticipantevent_MailboxTrackingFolders: WebExpand<msdyn_ocsessionparticipantevent_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_ocsessionparticipantevent_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_ocsessionparticipantevent_PrincipalObjectAttributeAccesses: WebExpand<msdyn_ocsessionparticipantevent_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_ocsessionparticipantevent_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_ocsessionparticipantevent_ProcessSession: WebExpand<msdyn_ocsessionparticipantevent_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_ocsessionparticipantevent_ProcessSession: ProcessSession_Result[] }>;
  msdyn_ocsessionparticipantevent_SyncErrors: WebExpand<msdyn_ocsessionparticipantevent_Expand, SyncError_Select, SyncError_Filter, { msdyn_ocsessionparticipantevent_SyncErrors: SyncError_Result[] }>;
  msdyn_ocsessionparticipantevent_UserEntityInstanceDatas: WebExpand<msdyn_ocsessionparticipantevent_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_ocsessionparticipantevent_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_sessionid: WebExpand<msdyn_ocsessionparticipantevent_Expand, msdyn_ocsession_Select, msdyn_ocsession_Filter, { msdyn_sessionid: msdyn_ocsession_Result }>;
  msdyn_sessionparticipantid: WebExpand<msdyn_ocsessionparticipantevent_Expand, msdyn_sessionparticipant_Select, msdyn_sessionparticipant_Filter, { msdyn_sessionparticipantid: msdyn_sessionparticipant_Result }>;
  ownerid: WebExpand<msdyn_ocsessionparticipantevent_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_ocsessionparticipantevent_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_ocsessionparticipantevent_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_ocsessionparticipantevent_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_ocsessionparticipantevent_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_eventendtime_formatted?: string;
  msdyn_eventreason_formatted?: string;
  msdyn_eventstarttime_formatted?: string;
  msdyn_eventtype_formatted?: string;
  msdyn_sessionid_formatted?: string;
  msdyn_sessionparticipantid_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_ocsessionparticipantevent_Result extends msdyn_ocsessionparticipantevent_Base, msdyn_ocsessionparticipantevent_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_sessionid_guid: string | null;
  msdyn_sessionparticipantid_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_ocsessionparticipantevent_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_sessionid: WebMappingRetrieve<msdyn_ocsession_Select,msdyn_ocsession_Expand,msdyn_ocsession_Filter,msdyn_ocsession_Fixed,msdyn_ocsession_Result,msdyn_ocsession_FormattedResult>;
  msdyn_sessionparticipantid: WebMappingRetrieve<msdyn_sessionparticipant_Select,msdyn_sessionparticipant_Expand,msdyn_sessionparticipant_Filter,msdyn_sessionparticipant_Fixed,msdyn_sessionparticipant_Result,msdyn_sessionparticipant_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_ocsessionparticipantevent_RelatedMany {
  msdyn_ocsessionparticipantevent_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_ocsessionparticipantevent_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_ocsessionparticipantevent_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_ocsessionparticipantevent_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_ocsessionparticipantevent_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_ocsessionparticipantevent_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_ocsessionparticipantevent_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_ocsessionparticipantevent_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_ocsessionparticipantevent_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_ocsessionparticipantevents: WebMappingRetrieve<msdyn_ocsessionparticipantevent_Select,msdyn_ocsessionparticipantevent_Expand,msdyn_ocsessionparticipantevent_Filter,msdyn_ocsessionparticipantevent_Fixed,msdyn_ocsessionparticipantevent_Result,msdyn_ocsessionparticipantevent_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_ocsessionparticipantevents: WebMappingRelated<msdyn_ocsessionparticipantevent_RelatedOne,msdyn_ocsessionparticipantevent_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_ocsessionparticipantevents: WebMappingCUDA<msdyn_ocsessionparticipantevent_Create,msdyn_ocsessionparticipantevent_Update,msdyn_ocsessionparticipantevent_Select>;
}
