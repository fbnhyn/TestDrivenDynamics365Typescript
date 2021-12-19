interface msdyn_workqueuestate_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_isread?: boolean | null;
  msdyn_nextactionid?: string | null;
  msdyn_nextactionsource?: string | null;
  msdyn_primaryname?: string | null;
  msdyn_workqueuestateid?: string | null;
  msdyn_wqstateuniquekey?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_workqueuestate_statecode | null;
  statuscode?: msdyn_workqueuestate_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_workqueuestate_Relationships {
  msdyn_workqueuestate_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_workqueuestate_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_workqueuestate_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_workqueuestate_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_workqueuestate_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_workqueuestate_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_workqueuestate_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_workqueuestate_SyncErrors?: SyncError_Result[] | null;
  msdyn_workqueuestate_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_workqueuestate extends msdyn_workqueuestate_Base, msdyn_workqueuestate_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_workqueuestate_Create extends msdyn_workqueuestate {
}
interface msdyn_workqueuestate_Update extends msdyn_workqueuestate {
}
interface msdyn_workqueuestate_Select {
  createdby_guid: WebAttribute<msdyn_workqueuestate_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_workqueuestate_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_workqueuestate_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_workqueuestate_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_workqueuestate_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_workqueuestate_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_workqueuestate_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_isread: WebAttribute<msdyn_workqueuestate_Select, { msdyn_isread: boolean | null }, {  }>;
  msdyn_nextactionid: WebAttribute<msdyn_workqueuestate_Select, { msdyn_nextactionid: string | null }, {  }>;
  msdyn_nextactionsource: WebAttribute<msdyn_workqueuestate_Select, { msdyn_nextactionsource: string | null }, {  }>;
  msdyn_primaryname: WebAttribute<msdyn_workqueuestate_Select, { msdyn_primaryname: string | null }, {  }>;
  msdyn_workqueuestateid: WebAttribute<msdyn_workqueuestate_Select, { msdyn_workqueuestateid: string | null }, {  }>;
  msdyn_wqstateuniquekey: WebAttribute<msdyn_workqueuestate_Select, { msdyn_wqstateuniquekey: string | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_workqueuestate_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_workqueuestate_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_workqueuestate_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_workqueuestate_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_workqueuestate_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_workqueuestate_Select, { statecode: msdyn_workqueuestate_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_workqueuestate_Select, { statuscode: msdyn_workqueuestate_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_workqueuestate_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_workqueuestate_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_workqueuestate_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_workqueuestate_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_isread: boolean;
  msdyn_nextactionid: XQW.Guid;
  msdyn_nextactionsource: string;
  msdyn_primaryname: string;
  msdyn_workqueuestateid: XQW.Guid;
  msdyn_wqstateuniquekey: string;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_workqueuestate_statecode;
  statuscode: msdyn_workqueuestate_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_workqueuestate_Expand {
  createdby: WebExpand<msdyn_workqueuestate_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_workqueuestate_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_workqueuestate_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_workqueuestate_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_workqueuestate_AsyncOperations: WebExpand<msdyn_workqueuestate_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_workqueuestate_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_workqueuestate_BulkDeleteFailures: WebExpand<msdyn_workqueuestate_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_workqueuestate_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_workqueuestate_DuplicateBaseRecord: WebExpand<msdyn_workqueuestate_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_workqueuestate_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_workqueuestate_DuplicateMatchingRecord: WebExpand<msdyn_workqueuestate_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_workqueuestate_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_workqueuestate_MailboxTrackingFolders: WebExpand<msdyn_workqueuestate_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_workqueuestate_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_workqueuestate_PrincipalObjectAttributeAccesses: WebExpand<msdyn_workqueuestate_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_workqueuestate_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_workqueuestate_ProcessSession: WebExpand<msdyn_workqueuestate_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_workqueuestate_ProcessSession: ProcessSession_Result[] }>;
  msdyn_workqueuestate_SyncErrors: WebExpand<msdyn_workqueuestate_Expand, SyncError_Select, SyncError_Filter, { msdyn_workqueuestate_SyncErrors: SyncError_Result[] }>;
  msdyn_workqueuestate_UserEntityInstanceDatas: WebExpand<msdyn_workqueuestate_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_workqueuestate_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  ownerid: WebExpand<msdyn_workqueuestate_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_workqueuestate_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_workqueuestate_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_workqueuestate_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_workqueuestate_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_workqueuestate_Result extends msdyn_workqueuestate_Base, msdyn_workqueuestate_Relationships {
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
interface msdyn_workqueuestate_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_workqueuestate_RelatedMany {
  msdyn_workqueuestate_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_workqueuestate_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_workqueuestate_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_workqueuestate_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_workqueuestate_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_workqueuestate_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_workqueuestate_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_workqueuestate_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_workqueuestate_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_workqueuestates: WebMappingRetrieve<msdyn_workqueuestate_Select,msdyn_workqueuestate_Expand,msdyn_workqueuestate_Filter,msdyn_workqueuestate_Fixed,msdyn_workqueuestate_Result,msdyn_workqueuestate_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_workqueuestates: WebMappingRelated<msdyn_workqueuestate_RelatedOne,msdyn_workqueuestate_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_workqueuestates: WebMappingCUDA<msdyn_workqueuestate_Create,msdyn_workqueuestate_Update,msdyn_workqueuestate_Select>;
}
