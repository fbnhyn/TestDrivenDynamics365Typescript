interface msdyn_liveworkitemevent_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_eventtime?: Date | null;
  msdyn_liveworkitemevent?: msdyn_liveworkitemeventtype | null;
  msdyn_liveworkitemeventdata?: string | null;
  msdyn_liveworkitemeventid?: string | null;
  msdyn_name?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_liveworkitemevent_statecode | null;
  statuscode?: msdyn_liveworkitemevent_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_liveworkitemevent_Relationships {
  msdyn_liveworkitemevent_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_liveworkitemevent_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_liveworkitemevent_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_liveworkitemevent_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_liveworkitemevent_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_liveworkitemevent_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_liveworkitemevent_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_liveworkitemevent_SyncErrors?: SyncError_Result[] | null;
  msdyn_liveworkitemevent_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_liveworkitemevent extends msdyn_liveworkitemevent_Base, msdyn_liveworkitemevent_Relationships {
  msdyn_liveworkitemid_bind$msdyn_ocliveworkitems?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_liveworkitemevent_Create extends msdyn_liveworkitemevent {
}
interface msdyn_liveworkitemevent_Update extends msdyn_liveworkitemevent {
}
interface msdyn_liveworkitemevent_Select {
  createdby_guid: WebAttribute<msdyn_liveworkitemevent_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_liveworkitemevent_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_liveworkitemevent_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_liveworkitemevent_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_liveworkitemevent_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_liveworkitemevent_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_liveworkitemevent_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_eventtime: WebAttribute<msdyn_liveworkitemevent_Select, { msdyn_eventtime: Date | null }, { msdyn_eventtime_formatted?: string }>;
  msdyn_liveworkitemevent1;
  msdyn_liveworkitemeventdata: WebAttribute<msdyn_liveworkitemevent_Select, { msdyn_liveworkitemeventdata: string | null }, {  }>;
  msdyn_liveworkitemeventid: WebAttribute<msdyn_liveworkitemevent_Select, { msdyn_liveworkitemeventid: string | null }, {  }>;
  msdyn_liveworkitemid_guid: WebAttribute<msdyn_liveworkitemevent_Select, { msdyn_liveworkitemid_guid: string | null }, { msdyn_liveworkitemid_formatted?: string }>;
  msdyn_name: WebAttribute<msdyn_liveworkitemevent_Select, { msdyn_name: string | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_liveworkitemevent_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_liveworkitemevent_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_liveworkitemevent_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_liveworkitemevent_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_liveworkitemevent_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_liveworkitemevent_Select, { statecode: msdyn_liveworkitemevent_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_liveworkitemevent_Select, { statuscode: msdyn_liveworkitemevent_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_liveworkitemevent_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_liveworkitemevent_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_liveworkitemevent_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_liveworkitemevent_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_eventtime: Date;
  msdyn_liveworkitemevent: msdyn_liveworkitemeventtype;
  msdyn_liveworkitemeventdata: string;
  msdyn_liveworkitemeventid: XQW.Guid;
  msdyn_liveworkitemid_guid: XQW.Guid;
  msdyn_name: string;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_liveworkitemevent_statecode;
  statuscode: msdyn_liveworkitemevent_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_liveworkitemevent_Expand {
  createdby: WebExpand<msdyn_liveworkitemevent_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_liveworkitemevent_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_liveworkitemevent_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_liveworkitemevent_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_liveworkitemevent_AsyncOperations: WebExpand<msdyn_liveworkitemevent_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_liveworkitemevent_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_liveworkitemevent_BulkDeleteFailures: WebExpand<msdyn_liveworkitemevent_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_liveworkitemevent_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_liveworkitemevent_DuplicateBaseRecord: WebExpand<msdyn_liveworkitemevent_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_liveworkitemevent_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_liveworkitemevent_DuplicateMatchingRecord: WebExpand<msdyn_liveworkitemevent_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_liveworkitemevent_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_liveworkitemevent_MailboxTrackingFolders: WebExpand<msdyn_liveworkitemevent_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_liveworkitemevent_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_liveworkitemevent_PrincipalObjectAttributeAccesses: WebExpand<msdyn_liveworkitemevent_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_liveworkitemevent_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_liveworkitemevent_ProcessSession: WebExpand<msdyn_liveworkitemevent_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_liveworkitemevent_ProcessSession: ProcessSession_Result[] }>;
  msdyn_liveworkitemevent_SyncErrors: WebExpand<msdyn_liveworkitemevent_Expand, SyncError_Select, SyncError_Filter, { msdyn_liveworkitemevent_SyncErrors: SyncError_Result[] }>;
  msdyn_liveworkitemevent_UserEntityInstanceDatas: WebExpand<msdyn_liveworkitemevent_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_liveworkitemevent_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_liveworkitemid: WebExpand<msdyn_liveworkitemevent_Expand, msdyn_ocliveworkitem_Select, msdyn_ocliveworkitem_Filter, { msdyn_liveworkitemid: msdyn_ocliveworkitem_Result }>;
  ownerid: WebExpand<msdyn_liveworkitemevent_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_liveworkitemevent_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_liveworkitemevent_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_liveworkitemevent_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_liveworkitemevent_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_eventtime_formatted?: string;
  msdyn_liveworkitemevent_formatted?: string;
  msdyn_liveworkitemid_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_liveworkitemevent_Result extends msdyn_liveworkitemevent_Base, msdyn_liveworkitemevent_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_liveworkitemid_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_liveworkitemevent_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_liveworkitemid: WebMappingRetrieve<msdyn_ocliveworkitem_Select,msdyn_ocliveworkitem_Expand,msdyn_ocliveworkitem_Filter,msdyn_ocliveworkitem_Fixed,msdyn_ocliveworkitem_Result,msdyn_ocliveworkitem_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_liveworkitemevent_RelatedMany {
  msdyn_liveworkitemevent_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_liveworkitemevent_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_liveworkitemevent_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_liveworkitemevent_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_liveworkitemevent_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_liveworkitemevent_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_liveworkitemevent_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_liveworkitemevent_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_liveworkitemevent_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_liveworkitemevents: WebMappingRetrieve<msdyn_liveworkitemevent_Select,msdyn_liveworkitemevent_Expand,msdyn_liveworkitemevent_Filter,msdyn_liveworkitemevent_Fixed,msdyn_liveworkitemevent_Result,msdyn_liveworkitemevent_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_liveworkitemevents: WebMappingRelated<msdyn_liveworkitemevent_RelatedOne,msdyn_liveworkitemevent_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_liveworkitemevents: WebMappingCUDA<msdyn_liveworkitemevent_Create,msdyn_liveworkitemevent_Update,msdyn_liveworkitemevent_Select>;
}
