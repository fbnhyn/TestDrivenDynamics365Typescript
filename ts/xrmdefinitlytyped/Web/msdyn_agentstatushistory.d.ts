interface msdyn_agentstatushistory_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_agentstatushistoryid?: string | null;
  msdyn_availablecapacity?: number | null;
  msdyn_endtime?: Date | null;
  msdyn_isagentloggedin?: boolean | null;
  msdyn_name?: string | null;
  msdyn_starttime?: Date | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_agentstatushistory_statecode | null;
  statuscode?: msdyn_agentstatushistory_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_agentstatushistory_Relationships {
  msdyn_Agentid?: SystemUser_Result | null;
  msdyn_agentstatushistory_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_agentstatushistory_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_agentstatushistory_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_agentstatushistory_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_agentstatushistory_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_agentstatushistory_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_agentstatushistory_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_agentstatushistory_SyncErrors?: SyncError_Result[] | null;
  msdyn_agentstatushistory_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_agentstatushistory extends msdyn_agentstatushistory_Base, msdyn_agentstatushistory_Relationships {
  msdyn_Agentid_bind$systemusers?: string | null;
  msdyn_presenceid_bind$msdyn_presences?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_agentstatushistory_Create extends msdyn_agentstatushistory {
}
interface msdyn_agentstatushistory_Update extends msdyn_agentstatushistory {
}
interface msdyn_agentstatushistory_Select {
  createdby_guid: WebAttribute<msdyn_agentstatushistory_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_agentstatushistory_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_agentstatushistory_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_agentstatushistory_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_agentstatushistory_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_agentstatushistory_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_agentstatushistory_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_agentid_guid: WebAttribute<msdyn_agentstatushistory_Select, { msdyn_agentid_guid: string | null }, { msdyn_agentid_formatted?: string }>;
  msdyn_agentstatushistoryid: WebAttribute<msdyn_agentstatushistory_Select, { msdyn_agentstatushistoryid: string | null }, {  }>;
  msdyn_availablecapacity: WebAttribute<msdyn_agentstatushistory_Select, { msdyn_availablecapacity: number | null }, {  }>;
  msdyn_endtime: WebAttribute<msdyn_agentstatushistory_Select, { msdyn_endtime: Date | null }, { msdyn_endtime_formatted?: string }>;
  msdyn_isagentloggedin: WebAttribute<msdyn_agentstatushistory_Select, { msdyn_isagentloggedin: boolean | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_agentstatushistory_Select, { msdyn_name: string | null }, {  }>;
  msdyn_presenceid_guid: WebAttribute<msdyn_agentstatushistory_Select, { msdyn_presenceid_guid: string | null }, { msdyn_presenceid_formatted?: string }>;
  msdyn_starttime: WebAttribute<msdyn_agentstatushistory_Select, { msdyn_starttime: Date | null }, { msdyn_starttime_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_agentstatushistory_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_agentstatushistory_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_agentstatushistory_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_agentstatushistory_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_agentstatushistory_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_agentstatushistory_Select, { statecode: msdyn_agentstatushistory_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_agentstatushistory_Select, { statuscode: msdyn_agentstatushistory_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_agentstatushistory_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_agentstatushistory_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_agentstatushistory_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_agentstatushistory_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_agentid_guid: XQW.Guid;
  msdyn_agentstatushistoryid: XQW.Guid;
  msdyn_availablecapacity: number;
  msdyn_endtime: Date;
  msdyn_isagentloggedin: boolean;
  msdyn_name: string;
  msdyn_presenceid_guid: XQW.Guid;
  msdyn_starttime: Date;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_agentstatushistory_statecode;
  statuscode: msdyn_agentstatushistory_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_agentstatushistory_Expand {
  createdby: WebExpand<msdyn_agentstatushistory_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_agentstatushistory_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_agentstatushistory_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_agentstatushistory_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_Agentid: WebExpand<msdyn_agentstatushistory_Expand, SystemUser_Select, SystemUser_Filter, { msdyn_Agentid: SystemUser_Result }>;
  msdyn_agentstatushistory_AsyncOperations: WebExpand<msdyn_agentstatushistory_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_agentstatushistory_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_agentstatushistory_BulkDeleteFailures: WebExpand<msdyn_agentstatushistory_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_agentstatushistory_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_agentstatushistory_DuplicateBaseRecord: WebExpand<msdyn_agentstatushistory_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_agentstatushistory_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_agentstatushistory_DuplicateMatchingRecord: WebExpand<msdyn_agentstatushistory_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_agentstatushistory_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_agentstatushistory_MailboxTrackingFolders: WebExpand<msdyn_agentstatushistory_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_agentstatushistory_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_agentstatushistory_PrincipalObjectAttributeAccesses: WebExpand<msdyn_agentstatushistory_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_agentstatushistory_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_agentstatushistory_ProcessSession: WebExpand<msdyn_agentstatushistory_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_agentstatushistory_ProcessSession: ProcessSession_Result[] }>;
  msdyn_agentstatushistory_SyncErrors: WebExpand<msdyn_agentstatushistory_Expand, SyncError_Select, SyncError_Filter, { msdyn_agentstatushistory_SyncErrors: SyncError_Result[] }>;
  msdyn_agentstatushistory_UserEntityInstanceDatas: WebExpand<msdyn_agentstatushistory_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_agentstatushistory_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_presenceid: WebExpand<msdyn_agentstatushistory_Expand, msdyn_presence_Select, msdyn_presence_Filter, { msdyn_presenceid: msdyn_presence_Result }>;
  ownerid: WebExpand<msdyn_agentstatushistory_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_agentstatushistory_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_agentstatushistory_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_agentstatushistory_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_agentstatushistory_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_agentid_formatted?: string;
  msdyn_endtime_formatted?: string;
  msdyn_presenceid_formatted?: string;
  msdyn_starttime_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_agentstatushistory_Result extends msdyn_agentstatushistory_Base, msdyn_agentstatushistory_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_agentid_guid: string | null;
  msdyn_presenceid_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_agentstatushistory_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_Agentid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_presenceid: WebMappingRetrieve<msdyn_presence_Select,msdyn_presence_Expand,msdyn_presence_Filter,msdyn_presence_Fixed,msdyn_presence_Result,msdyn_presence_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_agentstatushistory_RelatedMany {
  msdyn_agentstatushistory_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_agentstatushistory_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_agentstatushistory_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_agentstatushistory_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_agentstatushistory_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_agentstatushistory_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_agentstatushistory_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_agentstatushistory_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_agentstatushistory_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_agentstatushistories: WebMappingRetrieve<msdyn_agentstatushistory_Select,msdyn_agentstatushistory_Expand,msdyn_agentstatushistory_Filter,msdyn_agentstatushistory_Fixed,msdyn_agentstatushistory_Result,msdyn_agentstatushistory_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_agentstatushistories: WebMappingRelated<msdyn_agentstatushistory_RelatedOne,msdyn_agentstatushistory_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_agentstatushistories: WebMappingCUDA<msdyn_agentstatushistory_Create,msdyn_agentstatushistory_Update,msdyn_agentstatushistory_Select>;
}
