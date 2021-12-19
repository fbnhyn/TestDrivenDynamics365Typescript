interface cascadegrantrevokeaccessversiontracker_Base extends WebEntity {
  cascadegrantrevokeaccessversiontrackerid?: string | null;
  createdon?: Date | null;
  importsequencenumber?: number | null;
  messagename?: string | null;
  modifiedon?: Date | null;
  name?: string | null;
  overriddencreatedon?: Date | null;
  parententityid?: string | null;
  parentobjecttypecode?: number | null;
  statecode?: cascadegrantrevokeaccessversiontracker_statecode | null;
  statuscode?: cascadegrantrevokeaccessversiontracker_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
}
interface cascadegrantrevokeaccessversiontracker_Relationships {
  SyncTrackerIdLookup?: cascadegrantrevokeaccessrecordstracker_Result[] | null;
  cascadegrantrevokeaccessversiontracker_AsyncOperations?: AsyncOperation_Result[] | null;
  cascadegrantrevokeaccessversiontracker_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  cascadegrantrevokeaccessversiontracker_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  cascadegrantrevokeaccessversiontracker_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  cascadegrantrevokeaccessversiontracker_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  cascadegrantrevokeaccessversiontracker_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  cascadegrantrevokeaccessversiontracker_ProcessSession?: ProcessSession_Result[] | null;
  cascadegrantrevokeaccessversiontracker_SyncErrors?: SyncError_Result[] | null;
  cascadegrantrevokeaccessversiontracker_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface cascadegrantrevokeaccessversiontracker extends cascadegrantrevokeaccessversiontracker_Base, cascadegrantrevokeaccessversiontracker_Relationships {
}
interface cascadegrantrevokeaccessversiontracker_Create extends cascadegrantrevokeaccessversiontracker {
}
interface cascadegrantrevokeaccessversiontracker_Update extends cascadegrantrevokeaccessversiontracker {
}
interface cascadegrantrevokeaccessversiontracker_Select {
  cascadegrantrevokeaccessversiontrackerid: WebAttribute<cascadegrantrevokeaccessversiontracker_Select, { cascadegrantrevokeaccessversiontrackerid: string | null }, {  }>;
  createdby_guid: WebAttribute<cascadegrantrevokeaccessversiontracker_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<cascadegrantrevokeaccessversiontracker_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<cascadegrantrevokeaccessversiontracker_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<cascadegrantrevokeaccessversiontracker_Select, { importsequencenumber: number | null }, {  }>;
  messagename: WebAttribute<cascadegrantrevokeaccessversiontracker_Select, { messagename: string | null }, {  }>;
  modifiedby_guid: WebAttribute<cascadegrantrevokeaccessversiontracker_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<cascadegrantrevokeaccessversiontracker_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<cascadegrantrevokeaccessversiontracker_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  name: WebAttribute<cascadegrantrevokeaccessversiontracker_Select, { name: string | null }, {  }>;
  overriddencreatedon: WebAttribute<cascadegrantrevokeaccessversiontracker_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  parententityid: WebAttribute<cascadegrantrevokeaccessversiontracker_Select, { parententityid: string | null }, {  }>;
  parentobjecttypecode: WebAttribute<cascadegrantrevokeaccessversiontracker_Select, { parentobjecttypecode: number | null }, {  }>;
  statecode: WebAttribute<cascadegrantrevokeaccessversiontracker_Select, { statecode: cascadegrantrevokeaccessversiontracker_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<cascadegrantrevokeaccessversiontracker_Select, { statuscode: cascadegrantrevokeaccessversiontracker_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<cascadegrantrevokeaccessversiontracker_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<cascadegrantrevokeaccessversiontracker_Select, { utcconversiontimezonecode: number | null }, {  }>;
}
interface cascadegrantrevokeaccessversiontracker_Filter {
  cascadegrantrevokeaccessversiontrackerid: XQW.Guid;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  messagename: string;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  name: string;
  overriddencreatedon: Date;
  parententityid: string;
  parentobjecttypecode: number;
  statecode: cascadegrantrevokeaccessversiontracker_statecode;
  statuscode: cascadegrantrevokeaccessversiontracker_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
}
interface cascadegrantrevokeaccessversiontracker_Expand {
  SyncTrackerIdLookup: WebExpand<cascadegrantrevokeaccessversiontracker_Expand, cascadegrantrevokeaccessrecordstracker_Select, cascadegrantrevokeaccessrecordstracker_Filter, { SyncTrackerIdLookup: cascadegrantrevokeaccessrecordstracker_Result[] }>;
  cascadegrantrevokeaccessversiontracker_AsyncOperations: WebExpand<cascadegrantrevokeaccessversiontracker_Expand, AsyncOperation_Select, AsyncOperation_Filter, { cascadegrantrevokeaccessversiontracker_AsyncOperations: AsyncOperation_Result[] }>;
  cascadegrantrevokeaccessversiontracker_BulkDeleteFailures: WebExpand<cascadegrantrevokeaccessversiontracker_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { cascadegrantrevokeaccessversiontracker_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  cascadegrantrevokeaccessversiontracker_DuplicateBaseRecord: WebExpand<cascadegrantrevokeaccessversiontracker_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { cascadegrantrevokeaccessversiontracker_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  cascadegrantrevokeaccessversiontracker_DuplicateMatchingRecord: WebExpand<cascadegrantrevokeaccessversiontracker_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { cascadegrantrevokeaccessversiontracker_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  cascadegrantrevokeaccessversiontracker_MailboxTrackingFolders: WebExpand<cascadegrantrevokeaccessversiontracker_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { cascadegrantrevokeaccessversiontracker_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  cascadegrantrevokeaccessversiontracker_PrincipalObjectAttributeAccesses: WebExpand<cascadegrantrevokeaccessversiontracker_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { cascadegrantrevokeaccessversiontracker_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  cascadegrantrevokeaccessversiontracker_ProcessSession: WebExpand<cascadegrantrevokeaccessversiontracker_Expand, ProcessSession_Select, ProcessSession_Filter, { cascadegrantrevokeaccessversiontracker_ProcessSession: ProcessSession_Result[] }>;
  cascadegrantrevokeaccessversiontracker_SyncErrors: WebExpand<cascadegrantrevokeaccessversiontracker_Expand, SyncError_Select, SyncError_Filter, { cascadegrantrevokeaccessversiontracker_SyncErrors: SyncError_Result[] }>;
  cascadegrantrevokeaccessversiontracker_UserEntityInstanceDatas: WebExpand<cascadegrantrevokeaccessversiontracker_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { cascadegrantrevokeaccessversiontracker_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
}
interface cascadegrantrevokeaccessversiontracker_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  overriddencreatedon_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface cascadegrantrevokeaccessversiontracker_Result extends cascadegrantrevokeaccessversiontracker_Base, cascadegrantrevokeaccessversiontracker_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
}
interface cascadegrantrevokeaccessversiontracker_RelatedOne {
}
interface cascadegrantrevokeaccessversiontracker_RelatedMany {
  SyncTrackerIdLookup: WebMappingRetrieve<cascadegrantrevokeaccessrecordstracker_Select,cascadegrantrevokeaccessrecordstracker_Expand,cascadegrantrevokeaccessrecordstracker_Filter,cascadegrantrevokeaccessrecordstracker_Fixed,cascadegrantrevokeaccessrecordstracker_Result,cascadegrantrevokeaccessrecordstracker_FormattedResult>;
  cascadegrantrevokeaccessversiontracker_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  cascadegrantrevokeaccessversiontracker_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  cascadegrantrevokeaccessversiontracker_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  cascadegrantrevokeaccessversiontracker_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  cascadegrantrevokeaccessversiontracker_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  cascadegrantrevokeaccessversiontracker_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  cascadegrantrevokeaccessversiontracker_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  cascadegrantrevokeaccessversiontracker_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  cascadegrantrevokeaccessversiontracker_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  cascadegrantrevokeaccessversiontrackers: WebMappingRetrieve<cascadegrantrevokeaccessversiontracker_Select,cascadegrantrevokeaccessversiontracker_Expand,cascadegrantrevokeaccessversiontracker_Filter,cascadegrantrevokeaccessversiontracker_Fixed,cascadegrantrevokeaccessversiontracker_Result,cascadegrantrevokeaccessversiontracker_FormattedResult>;
}
interface WebEntitiesRelated {
  cascadegrantrevokeaccessversiontrackers: WebMappingRelated<cascadegrantrevokeaccessversiontracker_RelatedOne,cascadegrantrevokeaccessversiontracker_RelatedMany>;
}
interface WebEntitiesCUDA {
  cascadegrantrevokeaccessversiontrackers: WebMappingCUDA<cascadegrantrevokeaccessversiontracker_Create,cascadegrantrevokeaccessversiontracker_Update,cascadegrantrevokeaccessversiontracker_Select>;
}
