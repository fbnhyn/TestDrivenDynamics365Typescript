interface cascadegrantrevokeaccessrecordstracker_Base extends WebEntity {
  cascadegrantrevokeaccessrecordstrackerid?: string | null;
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  name?: string | null;
  overriddencreatedon?: Date | null;
  processedrecords?: number | null;
  recordsjson?: string | null;
  statecode?: cascadegrantrevokeaccessrecordstracker_statecode | null;
  statuscode?: cascadegrantrevokeaccessrecordstracker_statuscode | null;
  timezoneruleversionnumber?: number | null;
  totalrecords?: number | null;
  utcconversiontimezonecode?: number | null;
}
interface cascadegrantrevokeaccessrecordstracker_Relationships {
  SyncTrackerId?: cascadegrantrevokeaccessversiontracker_Result | null;
  cascadegrantrevokeaccessrecordstracker_AsyncOperations?: AsyncOperation_Result[] | null;
  cascadegrantrevokeaccessrecordstracker_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  cascadegrantrevokeaccessrecordstracker_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  cascadegrantrevokeaccessrecordstracker_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  cascadegrantrevokeaccessrecordstracker_FileAttachments?: FileAttachment_Result[] | null;
  cascadegrantrevokeaccessrecordstracker_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  cascadegrantrevokeaccessrecordstracker_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  cascadegrantrevokeaccessrecordstracker_ProcessSession?: ProcessSession_Result[] | null;
  cascadegrantrevokeaccessrecordstracker_SyncErrors?: SyncError_Result[] | null;
  cascadegrantrevokeaccessrecordstracker_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  recordsattachment?: FileAttachment_Result | null;
}
interface cascadegrantrevokeaccessrecordstracker extends cascadegrantrevokeaccessrecordstracker_Base, cascadegrantrevokeaccessrecordstracker_Relationships {
  SyncTrackerId_bind$cascadegrantrevokeaccessversiontrackers?: string | null;
}
interface cascadegrantrevokeaccessrecordstracker_Create extends cascadegrantrevokeaccessrecordstracker {
}
interface cascadegrantrevokeaccessrecordstracker_Update extends cascadegrantrevokeaccessrecordstracker {
}
interface cascadegrantrevokeaccessrecordstracker_Select {
  cascadegrantrevokeaccessrecordstrackerid: WebAttribute<cascadegrantrevokeaccessrecordstracker_Select, { cascadegrantrevokeaccessrecordstrackerid: string | null }, {  }>;
  createdby_guid: WebAttribute<cascadegrantrevokeaccessrecordstracker_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<cascadegrantrevokeaccessrecordstracker_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<cascadegrantrevokeaccessrecordstracker_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<cascadegrantrevokeaccessrecordstracker_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<cascadegrantrevokeaccessrecordstracker_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<cascadegrantrevokeaccessrecordstracker_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<cascadegrantrevokeaccessrecordstracker_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  name: WebAttribute<cascadegrantrevokeaccessrecordstracker_Select, { name: string | null }, {  }>;
  overriddencreatedon: WebAttribute<cascadegrantrevokeaccessrecordstracker_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  processedrecords: WebAttribute<cascadegrantrevokeaccessrecordstracker_Select, { processedrecords: number | null }, {  }>;
  recordsjson: WebAttribute<cascadegrantrevokeaccessrecordstracker_Select, { recordsjson: string | null }, {  }>;
  statecode: WebAttribute<cascadegrantrevokeaccessrecordstracker_Select, { statecode: cascadegrantrevokeaccessrecordstracker_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<cascadegrantrevokeaccessrecordstracker_Select, { statuscode: cascadegrantrevokeaccessrecordstracker_statuscode | null }, { statuscode_formatted?: string }>;
  synctrackerid_guid: WebAttribute<cascadegrantrevokeaccessrecordstracker_Select, { synctrackerid_guid: string | null }, { synctrackerid_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<cascadegrantrevokeaccessrecordstracker_Select, { timezoneruleversionnumber: number | null }, {  }>;
  totalrecords: WebAttribute<cascadegrantrevokeaccessrecordstracker_Select, { totalrecords: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<cascadegrantrevokeaccessrecordstracker_Select, { utcconversiontimezonecode: number | null }, {  }>;
}
interface cascadegrantrevokeaccessrecordstracker_Filter {
  cascadegrantrevokeaccessrecordstrackerid: XQW.Guid;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  name: string;
  overriddencreatedon: Date;
  processedrecords: number;
  recordsjson: string;
  statecode: cascadegrantrevokeaccessrecordstracker_statecode;
  statuscode: cascadegrantrevokeaccessrecordstracker_statuscode;
  synctrackerid_guid: XQW.Guid;
  timezoneruleversionnumber: number;
  totalrecords: number;
  utcconversiontimezonecode: number;
}
interface cascadegrantrevokeaccessrecordstracker_Expand {
  SyncTrackerId: WebExpand<cascadegrantrevokeaccessrecordstracker_Expand, cascadegrantrevokeaccessversiontracker_Select, cascadegrantrevokeaccessversiontracker_Filter, { SyncTrackerId: cascadegrantrevokeaccessversiontracker_Result }>;
  cascadegrantrevokeaccessrecordstracker_AsyncOperations: WebExpand<cascadegrantrevokeaccessrecordstracker_Expand, AsyncOperation_Select, AsyncOperation_Filter, { cascadegrantrevokeaccessrecordstracker_AsyncOperations: AsyncOperation_Result[] }>;
  cascadegrantrevokeaccessrecordstracker_BulkDeleteFailures: WebExpand<cascadegrantrevokeaccessrecordstracker_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { cascadegrantrevokeaccessrecordstracker_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  cascadegrantrevokeaccessrecordstracker_DuplicateBaseRecord: WebExpand<cascadegrantrevokeaccessrecordstracker_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { cascadegrantrevokeaccessrecordstracker_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  cascadegrantrevokeaccessrecordstracker_DuplicateMatchingRecord: WebExpand<cascadegrantrevokeaccessrecordstracker_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { cascadegrantrevokeaccessrecordstracker_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  cascadegrantrevokeaccessrecordstracker_FileAttachments: WebExpand<cascadegrantrevokeaccessrecordstracker_Expand, FileAttachment_Select, FileAttachment_Filter, { cascadegrantrevokeaccessrecordstracker_FileAttachments: FileAttachment_Result[] }>;
  cascadegrantrevokeaccessrecordstracker_MailboxTrackingFolders: WebExpand<cascadegrantrevokeaccessrecordstracker_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { cascadegrantrevokeaccessrecordstracker_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  cascadegrantrevokeaccessrecordstracker_PrincipalObjectAttributeAccesses: WebExpand<cascadegrantrevokeaccessrecordstracker_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { cascadegrantrevokeaccessrecordstracker_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  cascadegrantrevokeaccessrecordstracker_ProcessSession: WebExpand<cascadegrantrevokeaccessrecordstracker_Expand, ProcessSession_Select, ProcessSession_Filter, { cascadegrantrevokeaccessrecordstracker_ProcessSession: ProcessSession_Result[] }>;
  cascadegrantrevokeaccessrecordstracker_SyncErrors: WebExpand<cascadegrantrevokeaccessrecordstracker_Expand, SyncError_Select, SyncError_Filter, { cascadegrantrevokeaccessrecordstracker_SyncErrors: SyncError_Result[] }>;
  cascadegrantrevokeaccessrecordstracker_UserEntityInstanceDatas: WebExpand<cascadegrantrevokeaccessrecordstracker_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { cascadegrantrevokeaccessrecordstracker_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  recordsattachment: WebExpand<cascadegrantrevokeaccessrecordstracker_Expand, FileAttachment_Select, FileAttachment_Filter, { recordsattachment: FileAttachment_Result }>;
}
interface cascadegrantrevokeaccessrecordstracker_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  overriddencreatedon_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
  synctrackerid_formatted?: string;
}
interface cascadegrantrevokeaccessrecordstracker_Result extends cascadegrantrevokeaccessrecordstracker_Base, cascadegrantrevokeaccessrecordstracker_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  synctrackerid_guid: string | null;
}
interface cascadegrantrevokeaccessrecordstracker_RelatedOne {
  SyncTrackerId: WebMappingRetrieve<cascadegrantrevokeaccessversiontracker_Select,cascadegrantrevokeaccessversiontracker_Expand,cascadegrantrevokeaccessversiontracker_Filter,cascadegrantrevokeaccessversiontracker_Fixed,cascadegrantrevokeaccessversiontracker_Result,cascadegrantrevokeaccessversiontracker_FormattedResult>;
  recordsattachment: WebMappingRetrieve<FileAttachment_Select,FileAttachment_Expand,FileAttachment_Filter,FileAttachment_Fixed,FileAttachment_Result,FileAttachment_FormattedResult>;
}
interface cascadegrantrevokeaccessrecordstracker_RelatedMany {
  cascadegrantrevokeaccessrecordstracker_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  cascadegrantrevokeaccessrecordstracker_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  cascadegrantrevokeaccessrecordstracker_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  cascadegrantrevokeaccessrecordstracker_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  cascadegrantrevokeaccessrecordstracker_FileAttachments: WebMappingRetrieve<FileAttachment_Select,FileAttachment_Expand,FileAttachment_Filter,FileAttachment_Fixed,FileAttachment_Result,FileAttachment_FormattedResult>;
  cascadegrantrevokeaccessrecordstracker_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  cascadegrantrevokeaccessrecordstracker_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  cascadegrantrevokeaccessrecordstracker_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  cascadegrantrevokeaccessrecordstracker_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  cascadegrantrevokeaccessrecordstracker_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  cascadegrantrevokeaccessrecordstrackers: WebMappingRetrieve<cascadegrantrevokeaccessrecordstracker_Select,cascadegrantrevokeaccessrecordstracker_Expand,cascadegrantrevokeaccessrecordstracker_Filter,cascadegrantrevokeaccessrecordstracker_Fixed,cascadegrantrevokeaccessrecordstracker_Result,cascadegrantrevokeaccessrecordstracker_FormattedResult>;
}
interface WebEntitiesRelated {
  cascadegrantrevokeaccessrecordstrackers: WebMappingRelated<cascadegrantrevokeaccessrecordstracker_RelatedOne,cascadegrantrevokeaccessrecordstracker_RelatedMany>;
}
interface WebEntitiesCUDA {
  cascadegrantrevokeaccessrecordstrackers: WebMappingCUDA<cascadegrantrevokeaccessrecordstracker_Create,cascadegrantrevokeaccessrecordstracker_Update,cascadegrantrevokeaccessrecordstracker_Select>;
}
