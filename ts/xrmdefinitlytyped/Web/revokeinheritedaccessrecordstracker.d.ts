interface revokeinheritedaccessrecordstracker_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  overriddencreatedon?: Date | null;
  recordsjson?: string | null;
  revokeinheritedaccessrecordstracker?: string | null;
  revokeinheritedaccessrecordstrackerid?: string | null;
  statecode?: revokeinheritedaccessrecordstracker_statecode | null;
  statuscode?: revokeinheritedaccessrecordstracker_statuscode | null;
  timezoneruleversionnumber?: number | null;
  totalrecords?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface revokeinheritedaccessrecordstracker_Relationships {
  RecordsAttachment?: FileAttachment_Result | null;
  revokeinheritedaccessrecordstracker_AsyncOperations?: AsyncOperation_Result[] | null;
  revokeinheritedaccessrecordstracker_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  revokeinheritedaccessrecordstracker_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  revokeinheritedaccessrecordstracker_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  revokeinheritedaccessrecordstracker_FileAttachments?: FileAttachment_Result[] | null;
  revokeinheritedaccessrecordstracker_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  revokeinheritedaccessrecordstracker_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  revokeinheritedaccessrecordstracker_ProcessSession?: ProcessSession_Result[] | null;
  revokeinheritedaccessrecordstracker_SyncErrors?: SyncError_Result[] | null;
  revokeinheritedaccessrecordstracker_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface revokeinheritedaccessrecordstracker extends revokeinheritedaccessrecordstracker_Base, revokeinheritedaccessrecordstracker_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface revokeinheritedaccessrecordstracker_Create extends revokeinheritedaccessrecordstracker {
}
interface revokeinheritedaccessrecordstracker_Update extends revokeinheritedaccessrecordstracker {
}
interface revokeinheritedaccessrecordstracker_Select {
  createdby_guid: WebAttribute<revokeinheritedaccessrecordstracker_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<revokeinheritedaccessrecordstracker_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<revokeinheritedaccessrecordstracker_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<revokeinheritedaccessrecordstracker_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<revokeinheritedaccessrecordstracker_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<revokeinheritedaccessrecordstracker_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<revokeinheritedaccessrecordstracker_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  overriddencreatedon: WebAttribute<revokeinheritedaccessrecordstracker_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<revokeinheritedaccessrecordstracker_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<revokeinheritedaccessrecordstracker_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<revokeinheritedaccessrecordstracker_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<revokeinheritedaccessrecordstracker_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  recordsjson: WebAttribute<revokeinheritedaccessrecordstracker_Select, { recordsjson: string | null }, {  }>;
  revokeinheritedaccessrecordstracker1;
  revokeinheritedaccessrecordstrackerid: WebAttribute<revokeinheritedaccessrecordstracker_Select, { revokeinheritedaccessrecordstrackerid: string | null }, {  }>;
  statecode: WebAttribute<revokeinheritedaccessrecordstracker_Select, { statecode: revokeinheritedaccessrecordstracker_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<revokeinheritedaccessrecordstracker_Select, { statuscode: revokeinheritedaccessrecordstracker_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<revokeinheritedaccessrecordstracker_Select, { timezoneruleversionnumber: number | null }, {  }>;
  totalrecords: WebAttribute<revokeinheritedaccessrecordstracker_Select, { totalrecords: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<revokeinheritedaccessrecordstracker_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<revokeinheritedaccessrecordstracker_Select, { versionnumber: number | null }, {  }>;
}
interface revokeinheritedaccessrecordstracker_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  recordsjson: string;
  revokeinheritedaccessrecordstracker: string;
  revokeinheritedaccessrecordstrackerid: XQW.Guid;
  statecode: revokeinheritedaccessrecordstracker_statecode;
  statuscode: revokeinheritedaccessrecordstracker_statuscode;
  timezoneruleversionnumber: number;
  totalrecords: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface revokeinheritedaccessrecordstracker_Expand {
  RecordsAttachment: WebExpand<revokeinheritedaccessrecordstracker_Expand, FileAttachment_Select, FileAttachment_Filter, { RecordsAttachment: FileAttachment_Result }>;
  createdby: WebExpand<revokeinheritedaccessrecordstracker_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<revokeinheritedaccessrecordstracker_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<revokeinheritedaccessrecordstracker_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<revokeinheritedaccessrecordstracker_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  ownerid: WebExpand<revokeinheritedaccessrecordstracker_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<revokeinheritedaccessrecordstracker_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<revokeinheritedaccessrecordstracker_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<revokeinheritedaccessrecordstracker_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
  revokeinheritedaccessrecordstracker_AsyncOperations: WebExpand<revokeinheritedaccessrecordstracker_Expand, AsyncOperation_Select, AsyncOperation_Filter, { revokeinheritedaccessrecordstracker_AsyncOperations: AsyncOperation_Result[] }>;
  revokeinheritedaccessrecordstracker_BulkDeleteFailures: WebExpand<revokeinheritedaccessrecordstracker_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { revokeinheritedaccessrecordstracker_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  revokeinheritedaccessrecordstracker_DuplicateBaseRecord: WebExpand<revokeinheritedaccessrecordstracker_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { revokeinheritedaccessrecordstracker_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  revokeinheritedaccessrecordstracker_DuplicateMatchingRecord: WebExpand<revokeinheritedaccessrecordstracker_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { revokeinheritedaccessrecordstracker_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  revokeinheritedaccessrecordstracker_FileAttachments: WebExpand<revokeinheritedaccessrecordstracker_Expand, FileAttachment_Select, FileAttachment_Filter, { revokeinheritedaccessrecordstracker_FileAttachments: FileAttachment_Result[] }>;
  revokeinheritedaccessrecordstracker_MailboxTrackingFolders: WebExpand<revokeinheritedaccessrecordstracker_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { revokeinheritedaccessrecordstracker_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  revokeinheritedaccessrecordstracker_PrincipalObjectAttributeAccesses: WebExpand<revokeinheritedaccessrecordstracker_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { revokeinheritedaccessrecordstracker_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  revokeinheritedaccessrecordstracker_ProcessSession: WebExpand<revokeinheritedaccessrecordstracker_Expand, ProcessSession_Select, ProcessSession_Filter, { revokeinheritedaccessrecordstracker_ProcessSession: ProcessSession_Result[] }>;
  revokeinheritedaccessrecordstracker_SyncErrors: WebExpand<revokeinheritedaccessrecordstracker_Expand, SyncError_Select, SyncError_Filter, { revokeinheritedaccessrecordstracker_SyncErrors: SyncError_Result[] }>;
  revokeinheritedaccessrecordstracker_UserEntityInstanceDatas: WebExpand<revokeinheritedaccessrecordstracker_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { revokeinheritedaccessrecordstracker_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
}
interface revokeinheritedaccessrecordstracker_FormattedResult {
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
interface revokeinheritedaccessrecordstracker_Result extends revokeinheritedaccessrecordstracker_Base, revokeinheritedaccessrecordstracker_Relationships {
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
interface revokeinheritedaccessrecordstracker_RelatedOne {
  RecordsAttachment: WebMappingRetrieve<FileAttachment_Select,FileAttachment_Expand,FileAttachment_Filter,FileAttachment_Fixed,FileAttachment_Result,FileAttachment_FormattedResult>;
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface revokeinheritedaccessrecordstracker_RelatedMany {
  revokeinheritedaccessrecordstracker_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  revokeinheritedaccessrecordstracker_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  revokeinheritedaccessrecordstracker_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  revokeinheritedaccessrecordstracker_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  revokeinheritedaccessrecordstracker_FileAttachments: WebMappingRetrieve<FileAttachment_Select,FileAttachment_Expand,FileAttachment_Filter,FileAttachment_Fixed,FileAttachment_Result,FileAttachment_FormattedResult>;
  revokeinheritedaccessrecordstracker_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  revokeinheritedaccessrecordstracker_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  revokeinheritedaccessrecordstracker_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  revokeinheritedaccessrecordstracker_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  revokeinheritedaccessrecordstracker_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  revokeinheritedaccessrecordstrackers: WebMappingRetrieve<revokeinheritedaccessrecordstracker_Select,revokeinheritedaccessrecordstracker_Expand,revokeinheritedaccessrecordstracker_Filter,revokeinheritedaccessrecordstracker_Fixed,revokeinheritedaccessrecordstracker_Result,revokeinheritedaccessrecordstracker_FormattedResult>;
}
interface WebEntitiesRelated {
  revokeinheritedaccessrecordstrackers: WebMappingRelated<revokeinheritedaccessrecordstracker_RelatedOne,revokeinheritedaccessrecordstracker_RelatedMany>;
}
interface WebEntitiesCUDA {
  revokeinheritedaccessrecordstrackers: WebMappingCUDA<revokeinheritedaccessrecordstracker_Create,revokeinheritedaccessrecordstracker_Update,revokeinheritedaccessrecordstracker_Select>;
}
