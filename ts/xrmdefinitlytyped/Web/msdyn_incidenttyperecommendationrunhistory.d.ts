interface msdyn_incidenttyperecommendationrunhistory_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_description?: string | null;
  msdyn_incidenttyperecommendationrunhistoryid?: string | null;
  msdyn_name?: string | null;
  msdyn_recommendationmodelversion?: string | null;
  msdyn_runresult?: boolean | null;
  msdyn_runresultcount?: number | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_incidenttyperecommendationrunhistory_statecode | null;
  statuscode?: msdyn_incidenttyperecommendationrunhistory_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_incidenttyperecommendationrunhistory_Relationships {
  msdyn_incidenttyperecommendationrunhistory_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_incidenttyperecommendationrunhistory_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_incidenttyperecommendationrunhistory_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_incidenttyperecommendationrunhistory_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_incidenttyperecommendationrunhistory_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_incidenttyperecommendationrunhistory_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_incidenttyperecommendationrunhistory_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_incidenttyperecommendationrunhistory_SyncErrors?: SyncError_Result[] | null;
  msdyn_incidenttyperecommendationrunhistory_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  msdyn_msdyn_incidenttyperecommendationrunhistory_msdyn_incidenttyperecommendationresult_RunHistoryId?: msdyn_incidenttyperecommendationresult_Result[] | null;
}
interface msdyn_incidenttyperecommendationrunhistory extends msdyn_incidenttyperecommendationrunhistory_Base, msdyn_incidenttyperecommendationrunhistory_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_incidenttyperecommendationrunhistory_Create extends msdyn_incidenttyperecommendationrunhistory {
}
interface msdyn_incidenttyperecommendationrunhistory_Update extends msdyn_incidenttyperecommendationrunhistory {
}
interface msdyn_incidenttyperecommendationrunhistory_Select {
  createdby_guid: WebAttribute<msdyn_incidenttyperecommendationrunhistory_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_incidenttyperecommendationrunhistory_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_incidenttyperecommendationrunhistory_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_incidenttyperecommendationrunhistory_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_incidenttyperecommendationrunhistory_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_incidenttyperecommendationrunhistory_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_incidenttyperecommendationrunhistory_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_description: WebAttribute<msdyn_incidenttyperecommendationrunhistory_Select, { msdyn_description: string | null }, {  }>;
  msdyn_incidenttyperecommendationrunhistoryid: WebAttribute<msdyn_incidenttyperecommendationrunhistory_Select, { msdyn_incidenttyperecommendationrunhistoryid: string | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_incidenttyperecommendationrunhistory_Select, { msdyn_name: string | null }, {  }>;
  msdyn_recommendationmodelversion: WebAttribute<msdyn_incidenttyperecommendationrunhistory_Select, { msdyn_recommendationmodelversion: string | null }, {  }>;
  msdyn_runresult: WebAttribute<msdyn_incidenttyperecommendationrunhistory_Select, { msdyn_runresult: boolean | null }, {  }>;
  msdyn_runresultcount: WebAttribute<msdyn_incidenttyperecommendationrunhistory_Select, { msdyn_runresultcount: number | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_incidenttyperecommendationrunhistory_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_incidenttyperecommendationrunhistory_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_incidenttyperecommendationrunhistory_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_incidenttyperecommendationrunhistory_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_incidenttyperecommendationrunhistory_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_incidenttyperecommendationrunhistory_Select, { statecode: msdyn_incidenttyperecommendationrunhistory_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_incidenttyperecommendationrunhistory_Select, { statuscode: msdyn_incidenttyperecommendationrunhistory_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_incidenttyperecommendationrunhistory_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_incidenttyperecommendationrunhistory_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_incidenttyperecommendationrunhistory_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_incidenttyperecommendationrunhistory_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_description: string;
  msdyn_incidenttyperecommendationrunhistoryid: XQW.Guid;
  msdyn_name: string;
  msdyn_recommendationmodelversion: string;
  msdyn_runresult: boolean;
  msdyn_runresultcount: number;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_incidenttyperecommendationrunhistory_statecode;
  statuscode: msdyn_incidenttyperecommendationrunhistory_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_incidenttyperecommendationrunhistory_Expand {
  createdby: WebExpand<msdyn_incidenttyperecommendationrunhistory_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_incidenttyperecommendationrunhistory_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_incidenttyperecommendationrunhistory_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_incidenttyperecommendationrunhistory_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_incidenttyperecommendationrunhistory_AsyncOperations: WebExpand<msdyn_incidenttyperecommendationrunhistory_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_incidenttyperecommendationrunhistory_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_incidenttyperecommendationrunhistory_BulkDeleteFailures: WebExpand<msdyn_incidenttyperecommendationrunhistory_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_incidenttyperecommendationrunhistory_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_incidenttyperecommendationrunhistory_DuplicateBaseRecord: WebExpand<msdyn_incidenttyperecommendationrunhistory_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_incidenttyperecommendationrunhistory_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_incidenttyperecommendationrunhistory_DuplicateMatchingRecord: WebExpand<msdyn_incidenttyperecommendationrunhistory_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_incidenttyperecommendationrunhistory_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_incidenttyperecommendationrunhistory_MailboxTrackingFolders: WebExpand<msdyn_incidenttyperecommendationrunhistory_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_incidenttyperecommendationrunhistory_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_incidenttyperecommendationrunhistory_PrincipalObjectAttributeAccesses: WebExpand<msdyn_incidenttyperecommendationrunhistory_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_incidenttyperecommendationrunhistory_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_incidenttyperecommendationrunhistory_ProcessSession: WebExpand<msdyn_incidenttyperecommendationrunhistory_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_incidenttyperecommendationrunhistory_ProcessSession: ProcessSession_Result[] }>;
  msdyn_incidenttyperecommendationrunhistory_SyncErrors: WebExpand<msdyn_incidenttyperecommendationrunhistory_Expand, SyncError_Select, SyncError_Filter, { msdyn_incidenttyperecommendationrunhistory_SyncErrors: SyncError_Result[] }>;
  msdyn_incidenttyperecommendationrunhistory_UserEntityInstanceDatas: WebExpand<msdyn_incidenttyperecommendationrunhistory_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_incidenttyperecommendationrunhistory_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_msdyn_incidenttyperecommendationrunhistory_msdyn_incidenttyperecommendationresult_RunHistoryId: WebExpand<msdyn_incidenttyperecommendationrunhistory_Expand, msdyn_incidenttyperecommendationresult_Select, msdyn_incidenttyperecommendationresult_Filter, { msdyn_msdyn_incidenttyperecommendationrunhistory_msdyn_incidenttyperecommendationresult_RunHistoryId: msdyn_incidenttyperecommendationresult_Result[] }>;
  ownerid: WebExpand<msdyn_incidenttyperecommendationrunhistory_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_incidenttyperecommendationrunhistory_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_incidenttyperecommendationrunhistory_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_incidenttyperecommendationrunhistory_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_incidenttyperecommendationrunhistory_FormattedResult {
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
interface msdyn_incidenttyperecommendationrunhistory_Result extends msdyn_incidenttyperecommendationrunhistory_Base, msdyn_incidenttyperecommendationrunhistory_Relationships {
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
interface msdyn_incidenttyperecommendationrunhistory_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_incidenttyperecommendationrunhistory_RelatedMany {
  msdyn_incidenttyperecommendationrunhistory_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_incidenttyperecommendationrunhistory_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_incidenttyperecommendationrunhistory_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_incidenttyperecommendationrunhistory_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_incidenttyperecommendationrunhistory_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_incidenttyperecommendationrunhistory_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_incidenttyperecommendationrunhistory_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_incidenttyperecommendationrunhistory_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_incidenttyperecommendationrunhistory_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  msdyn_msdyn_incidenttyperecommendationrunhistory_msdyn_incidenttyperecommendationresult_RunHistoryId: WebMappingRetrieve<msdyn_incidenttyperecommendationresult_Select,msdyn_incidenttyperecommendationresult_Expand,msdyn_incidenttyperecommendationresult_Filter,msdyn_incidenttyperecommendationresult_Fixed,msdyn_incidenttyperecommendationresult_Result,msdyn_incidenttyperecommendationresult_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_incidenttyperecommendationrunhistories: WebMappingRetrieve<msdyn_incidenttyperecommendationrunhistory_Select,msdyn_incidenttyperecommendationrunhistory_Expand,msdyn_incidenttyperecommendationrunhistory_Filter,msdyn_incidenttyperecommendationrunhistory_Fixed,msdyn_incidenttyperecommendationrunhistory_Result,msdyn_incidenttyperecommendationrunhistory_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_incidenttyperecommendationrunhistories: WebMappingRelated<msdyn_incidenttyperecommendationrunhistory_RelatedOne,msdyn_incidenttyperecommendationrunhistory_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_incidenttyperecommendationrunhistories: WebMappingCUDA<msdyn_incidenttyperecommendationrunhistory_Create,msdyn_incidenttyperecommendationrunhistory_Update,msdyn_incidenttyperecommendationrunhistory_Select>;
}
