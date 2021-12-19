interface StageSolutionUpload_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  name?: string | null;
  overriddencreatedon?: Date | null;
  solutionfilename?: string | null;
  solutionuniquename?: string | null;
  stagesolutionuploadid?: string | null;
  statecode?: stagesolutionupload_statecode | null;
  statuscode?: stagesolutionupload_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface StageSolutionUpload_Relationships {
  solutionfile?: FileAttachment_Result | null;
  stagesolutionupload_AsyncOperations?: AsyncOperation_Result[] | null;
  stagesolutionupload_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  stagesolutionupload_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  stagesolutionupload_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  stagesolutionupload_FileAttachments?: FileAttachment_Result[] | null;
  stagesolutionupload_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  stagesolutionupload_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  stagesolutionupload_ProcessSession?: ProcessSession_Result[] | null;
  stagesolutionupload_SyncErrors?: SyncError_Result[] | null;
  stagesolutionupload_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface StageSolutionUpload extends StageSolutionUpload_Base, StageSolutionUpload_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface StageSolutionUpload_Create extends StageSolutionUpload {
}
interface StageSolutionUpload_Update extends StageSolutionUpload {
}
interface StageSolutionUpload_Select {
  createdby_guid: WebAttribute<StageSolutionUpload_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<StageSolutionUpload_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<StageSolutionUpload_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<StageSolutionUpload_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<StageSolutionUpload_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<StageSolutionUpload_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<StageSolutionUpload_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  name: WebAttribute<StageSolutionUpload_Select, { name: string | null }, {  }>;
  overriddencreatedon: WebAttribute<StageSolutionUpload_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<StageSolutionUpload_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<StageSolutionUpload_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<StageSolutionUpload_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<StageSolutionUpload_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  solutionfilename: WebAttribute<StageSolutionUpload_Select, { solutionfilename: string | null }, {  }>;
  solutionuniquename: WebAttribute<StageSolutionUpload_Select, { solutionuniquename: string | null }, {  }>;
  stagesolutionuploadid: WebAttribute<StageSolutionUpload_Select, { stagesolutionuploadid: string | null }, {  }>;
  statecode: WebAttribute<StageSolutionUpload_Select, { statecode: stagesolutionupload_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<StageSolutionUpload_Select, { statuscode: stagesolutionupload_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<StageSolutionUpload_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<StageSolutionUpload_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<StageSolutionUpload_Select, { versionnumber: number | null }, {  }>;
}
interface StageSolutionUpload_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  name: string;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  solutionfilename: string;
  solutionuniquename: string;
  stagesolutionuploadid: XQW.Guid;
  statecode: stagesolutionupload_statecode;
  statuscode: stagesolutionupload_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface StageSolutionUpload_Expand {
  createdby: WebExpand<StageSolutionUpload_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<StageSolutionUpload_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<StageSolutionUpload_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<StageSolutionUpload_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  ownerid: WebExpand<StageSolutionUpload_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<StageSolutionUpload_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<StageSolutionUpload_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<StageSolutionUpload_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
  solutionfile: WebExpand<StageSolutionUpload_Expand, FileAttachment_Select, FileAttachment_Filter, { solutionfile: FileAttachment_Result }>;
  stagesolutionupload_AsyncOperations: WebExpand<StageSolutionUpload_Expand, AsyncOperation_Select, AsyncOperation_Filter, { stagesolutionupload_AsyncOperations: AsyncOperation_Result[] }>;
  stagesolutionupload_BulkDeleteFailures: WebExpand<StageSolutionUpload_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { stagesolutionupload_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  stagesolutionupload_DuplicateBaseRecord: WebExpand<StageSolutionUpload_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { stagesolutionupload_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  stagesolutionupload_DuplicateMatchingRecord: WebExpand<StageSolutionUpload_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { stagesolutionupload_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  stagesolutionupload_FileAttachments: WebExpand<StageSolutionUpload_Expand, FileAttachment_Select, FileAttachment_Filter, { stagesolutionupload_FileAttachments: FileAttachment_Result[] }>;
  stagesolutionupload_MailboxTrackingFolders: WebExpand<StageSolutionUpload_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { stagesolutionupload_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  stagesolutionupload_PrincipalObjectAttributeAccesses: WebExpand<StageSolutionUpload_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { stagesolutionupload_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  stagesolutionupload_ProcessSession: WebExpand<StageSolutionUpload_Expand, ProcessSession_Select, ProcessSession_Filter, { stagesolutionupload_ProcessSession: ProcessSession_Result[] }>;
  stagesolutionupload_SyncErrors: WebExpand<StageSolutionUpload_Expand, SyncError_Select, SyncError_Filter, { stagesolutionupload_SyncErrors: SyncError_Result[] }>;
  stagesolutionupload_UserEntityInstanceDatas: WebExpand<StageSolutionUpload_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { stagesolutionupload_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
}
interface StageSolutionUpload_FormattedResult {
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
interface StageSolutionUpload_Result extends StageSolutionUpload_Base, StageSolutionUpload_Relationships {
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
interface StageSolutionUpload_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  solutionfile: WebMappingRetrieve<FileAttachment_Select,FileAttachment_Expand,FileAttachment_Filter,FileAttachment_Fixed,FileAttachment_Result,FileAttachment_FormattedResult>;
}
interface StageSolutionUpload_RelatedMany {
  stagesolutionupload_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  stagesolutionupload_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  stagesolutionupload_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  stagesolutionupload_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  stagesolutionupload_FileAttachments: WebMappingRetrieve<FileAttachment_Select,FileAttachment_Expand,FileAttachment_Filter,FileAttachment_Fixed,FileAttachment_Result,FileAttachment_FormattedResult>;
  stagesolutionupload_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  stagesolutionupload_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  stagesolutionupload_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  stagesolutionupload_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  stagesolutionupload_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  stagesolutionuploads: WebMappingRetrieve<StageSolutionUpload_Select,StageSolutionUpload_Expand,StageSolutionUpload_Filter,StageSolutionUpload_Fixed,StageSolutionUpload_Result,StageSolutionUpload_FormattedResult>;
}
interface WebEntitiesRelated {
  stagesolutionuploads: WebMappingRelated<StageSolutionUpload_RelatedOne,StageSolutionUpload_RelatedMany>;
}
interface WebEntitiesCUDA {
  stagesolutionuploads: WebMappingCUDA<StageSolutionUpload_Create,StageSolutionUpload_Update,StageSolutionUpload_Select>;
}
