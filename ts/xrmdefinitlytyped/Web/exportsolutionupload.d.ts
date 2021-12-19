interface ExportSolutionUpload_Base extends WebEntity {
  createdon?: Date | null;
  exportsolutionuploadid?: string | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  name?: string | null;
  overriddencreatedon?: Date | null;
  solutionfilename?: string | null;
  solutionuniquename?: string | null;
  statecode?: exportsolutionupload_statecode | null;
  statuscode?: exportsolutionupload_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface ExportSolutionUpload_Relationships {
  exportsolutionupload_AsyncOperations?: AsyncOperation_Result[] | null;
  exportsolutionupload_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  exportsolutionupload_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  exportsolutionupload_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  exportsolutionupload_FileAttachments?: FileAttachment_Result[] | null;
  exportsolutionupload_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  exportsolutionupload_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  exportsolutionupload_ProcessSession?: ProcessSession_Result[] | null;
  exportsolutionupload_SyncErrors?: SyncError_Result[] | null;
  exportsolutionupload_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  solutionfile?: FileAttachment_Result | null;
}
interface ExportSolutionUpload extends ExportSolutionUpload_Base, ExportSolutionUpload_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface ExportSolutionUpload_Create extends ExportSolutionUpload {
}
interface ExportSolutionUpload_Update extends ExportSolutionUpload {
}
interface ExportSolutionUpload_Select {
  asyncoperationid_guid: WebAttribute<ExportSolutionUpload_Select, { asyncoperationid_guid: string | null }, { asyncoperationid_formatted?: string }>;
  createdby_guid: WebAttribute<ExportSolutionUpload_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<ExportSolutionUpload_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<ExportSolutionUpload_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  exportsolutionuploadid: WebAttribute<ExportSolutionUpload_Select, { exportsolutionuploadid: string | null }, {  }>;
  importsequencenumber: WebAttribute<ExportSolutionUpload_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<ExportSolutionUpload_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<ExportSolutionUpload_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<ExportSolutionUpload_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  name: WebAttribute<ExportSolutionUpload_Select, { name: string | null }, {  }>;
  overriddencreatedon: WebAttribute<ExportSolutionUpload_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<ExportSolutionUpload_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<ExportSolutionUpload_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<ExportSolutionUpload_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<ExportSolutionUpload_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  solutionfilename: WebAttribute<ExportSolutionUpload_Select, { solutionfilename: string | null }, {  }>;
  solutionuniquename: WebAttribute<ExportSolutionUpload_Select, { solutionuniquename: string | null }, {  }>;
  statecode: WebAttribute<ExportSolutionUpload_Select, { statecode: exportsolutionupload_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<ExportSolutionUpload_Select, { statuscode: exportsolutionupload_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<ExportSolutionUpload_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<ExportSolutionUpload_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<ExportSolutionUpload_Select, { versionnumber: number | null }, {  }>;
}
interface ExportSolutionUpload_Filter {
  asyncoperationid_guid: XQW.Guid;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  exportsolutionuploadid: XQW.Guid;
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
  statecode: exportsolutionupload_statecode;
  statuscode: exportsolutionupload_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface ExportSolutionUpload_Expand {
  createdby: WebExpand<ExportSolutionUpload_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<ExportSolutionUpload_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  exportsolutionupload_AsyncOperations: WebExpand<ExportSolutionUpload_Expand, AsyncOperation_Select, AsyncOperation_Filter, { exportsolutionupload_AsyncOperations: AsyncOperation_Result[] }>;
  exportsolutionupload_BulkDeleteFailures: WebExpand<ExportSolutionUpload_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { exportsolutionupload_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  exportsolutionupload_DuplicateBaseRecord: WebExpand<ExportSolutionUpload_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { exportsolutionupload_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  exportsolutionupload_DuplicateMatchingRecord: WebExpand<ExportSolutionUpload_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { exportsolutionupload_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  exportsolutionupload_FileAttachments: WebExpand<ExportSolutionUpload_Expand, FileAttachment_Select, FileAttachment_Filter, { exportsolutionupload_FileAttachments: FileAttachment_Result[] }>;
  exportsolutionupload_MailboxTrackingFolders: WebExpand<ExportSolutionUpload_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { exportsolutionupload_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  exportsolutionupload_PrincipalObjectAttributeAccesses: WebExpand<ExportSolutionUpload_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { exportsolutionupload_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  exportsolutionupload_ProcessSession: WebExpand<ExportSolutionUpload_Expand, ProcessSession_Select, ProcessSession_Filter, { exportsolutionupload_ProcessSession: ProcessSession_Result[] }>;
  exportsolutionupload_SyncErrors: WebExpand<ExportSolutionUpload_Expand, SyncError_Select, SyncError_Filter, { exportsolutionupload_SyncErrors: SyncError_Result[] }>;
  exportsolutionupload_UserEntityInstanceDatas: WebExpand<ExportSolutionUpload_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { exportsolutionupload_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  modifiedby: WebExpand<ExportSolutionUpload_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<ExportSolutionUpload_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  ownerid: WebExpand<ExportSolutionUpload_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<ExportSolutionUpload_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<ExportSolutionUpload_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<ExportSolutionUpload_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
  solutionfile: WebExpand<ExportSolutionUpload_Expand, FileAttachment_Select, FileAttachment_Filter, { solutionfile: FileAttachment_Result }>;
}
interface ExportSolutionUpload_FormattedResult {
  asyncoperationid_formatted?: string;
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
interface ExportSolutionUpload_Result extends ExportSolutionUpload_Base, ExportSolutionUpload_Relationships {
  "@odata.etag": string;
  asyncoperationid_guid: string | null;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface ExportSolutionUpload_RelatedOne {
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
interface ExportSolutionUpload_RelatedMany {
  exportsolutionupload_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  exportsolutionupload_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  exportsolutionupload_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  exportsolutionupload_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  exportsolutionupload_FileAttachments: WebMappingRetrieve<FileAttachment_Select,FileAttachment_Expand,FileAttachment_Filter,FileAttachment_Fixed,FileAttachment_Result,FileAttachment_FormattedResult>;
  exportsolutionupload_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  exportsolutionupload_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  exportsolutionupload_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  exportsolutionupload_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  exportsolutionupload_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  exportsolutionuploads: WebMappingRetrieve<ExportSolutionUpload_Select,ExportSolutionUpload_Expand,ExportSolutionUpload_Filter,ExportSolutionUpload_Fixed,ExportSolutionUpload_Result,ExportSolutionUpload_FormattedResult>;
}
interface WebEntitiesRelated {
  exportsolutionuploads: WebMappingRelated<ExportSolutionUpload_RelatedOne,ExportSolutionUpload_RelatedMany>;
}
interface WebEntitiesCUDA {
  exportsolutionuploads: WebMappingCUDA<ExportSolutionUpload_Create,ExportSolutionUpload_Update,ExportSolutionUpload_Select>;
}
