interface msdyn_kbattachment_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_fileiconid?: string | null;
  msdyn_filename?: string | null;
  msdyn_filesize?: number | null;
  msdyn_filetype?: string | null;
  msdyn_kbattachmentid?: string | null;
  msdyn_relatedannotations?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_kbattachment_statecode | null;
  statuscode?: msdyn_kbattachment_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_kbattachment_Relationships {
  msdyn_fileattachment?: FileAttachment_Result | null;
  msdyn_fileiconid_imagedescriptor?: ImageDescriptor_Result | null;
  msdyn_kbattachment_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_kbattachment_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_kbattachment_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_kbattachment_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_kbattachment_FileAttachments?: FileAttachment_Result[] | null;
  msdyn_kbattachment_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_kbattachment_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_kbattachment_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_kbattachment_SyncErrors?: SyncError_Result[] | null;
  msdyn_kbattachment_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  msdyn_msdyn_kbattachment_knowledgearticle?: KnowledgeArticle_Result[] | null;
}
interface msdyn_kbattachment extends msdyn_kbattachment_Base, msdyn_kbattachment_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_kbattachment_Create extends msdyn_kbattachment {
}
interface msdyn_kbattachment_Update extends msdyn_kbattachment {
}
interface msdyn_kbattachment_Select {
  createdby_guid: WebAttribute<msdyn_kbattachment_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_kbattachment_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_kbattachment_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_kbattachment_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_kbattachment_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_kbattachment_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_kbattachment_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_fileiconid: WebAttribute<msdyn_kbattachment_Select, { msdyn_fileiconid: string | null }, {  }>;
  msdyn_filename: WebAttribute<msdyn_kbattachment_Select, { msdyn_filename: string | null }, {  }>;
  msdyn_filesize: WebAttribute<msdyn_kbattachment_Select, { msdyn_filesize: number | null }, {  }>;
  msdyn_filetype: WebAttribute<msdyn_kbattachment_Select, { msdyn_filetype: string | null }, {  }>;
  msdyn_kbattachmentid: WebAttribute<msdyn_kbattachment_Select, { msdyn_kbattachmentid: string | null }, {  }>;
  msdyn_relatedannotations: WebAttribute<msdyn_kbattachment_Select, { msdyn_relatedannotations: string | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_kbattachment_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_kbattachment_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_kbattachment_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_kbattachment_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_kbattachment_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_kbattachment_Select, { statecode: msdyn_kbattachment_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_kbattachment_Select, { statuscode: msdyn_kbattachment_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_kbattachment_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_kbattachment_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_kbattachment_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_kbattachment_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_fileiconid: XQW.Guid;
  msdyn_filename: string;
  msdyn_filesize: number;
  msdyn_filetype: string;
  msdyn_kbattachmentid: XQW.Guid;
  msdyn_relatedannotations: string;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_kbattachment_statecode;
  statuscode: msdyn_kbattachment_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_kbattachment_Expand {
  createdby: WebExpand<msdyn_kbattachment_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_kbattachment_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_kbattachment_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_kbattachment_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_fileattachment: WebExpand<msdyn_kbattachment_Expand, FileAttachment_Select, FileAttachment_Filter, { msdyn_fileattachment: FileAttachment_Result }>;
  msdyn_fileiconid_imagedescriptor: WebExpand<msdyn_kbattachment_Expand, ImageDescriptor_Select, ImageDescriptor_Filter, { msdyn_fileiconid_imagedescriptor: ImageDescriptor_Result }>;
  msdyn_kbattachment_AsyncOperations: WebExpand<msdyn_kbattachment_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_kbattachment_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_kbattachment_BulkDeleteFailures: WebExpand<msdyn_kbattachment_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_kbattachment_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_kbattachment_DuplicateBaseRecord: WebExpand<msdyn_kbattachment_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_kbattachment_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_kbattachment_DuplicateMatchingRecord: WebExpand<msdyn_kbattachment_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_kbattachment_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_kbattachment_FileAttachments: WebExpand<msdyn_kbattachment_Expand, FileAttachment_Select, FileAttachment_Filter, { msdyn_kbattachment_FileAttachments: FileAttachment_Result[] }>;
  msdyn_kbattachment_MailboxTrackingFolders: WebExpand<msdyn_kbattachment_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_kbattachment_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_kbattachment_PrincipalObjectAttributeAccesses: WebExpand<msdyn_kbattachment_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_kbattachment_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_kbattachment_ProcessSession: WebExpand<msdyn_kbattachment_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_kbattachment_ProcessSession: ProcessSession_Result[] }>;
  msdyn_kbattachment_SyncErrors: WebExpand<msdyn_kbattachment_Expand, SyncError_Select, SyncError_Filter, { msdyn_kbattachment_SyncErrors: SyncError_Result[] }>;
  msdyn_kbattachment_UserEntityInstanceDatas: WebExpand<msdyn_kbattachment_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_kbattachment_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_msdyn_kbattachment_knowledgearticle: WebExpand<msdyn_kbattachment_Expand, KnowledgeArticle_Select, KnowledgeArticle_Filter, { msdyn_msdyn_kbattachment_knowledgearticle: KnowledgeArticle_Result[] }>;
  ownerid: WebExpand<msdyn_kbattachment_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_kbattachment_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_kbattachment_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_kbattachment_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_kbattachment_FormattedResult {
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
interface msdyn_kbattachment_Result extends msdyn_kbattachment_Base, msdyn_kbattachment_Relationships {
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
interface msdyn_kbattachment_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_fileattachment: WebMappingRetrieve<FileAttachment_Select,FileAttachment_Expand,FileAttachment_Filter,FileAttachment_Fixed,FileAttachment_Result,FileAttachment_FormattedResult>;
  msdyn_fileiconid_imagedescriptor: WebMappingRetrieve<ImageDescriptor_Select,ImageDescriptor_Expand,ImageDescriptor_Filter,ImageDescriptor_Fixed,ImageDescriptor_Result,ImageDescriptor_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_kbattachment_RelatedMany {
  msdyn_kbattachment_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_kbattachment_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_kbattachment_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_kbattachment_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_kbattachment_FileAttachments: WebMappingRetrieve<FileAttachment_Select,FileAttachment_Expand,FileAttachment_Filter,FileAttachment_Fixed,FileAttachment_Result,FileAttachment_FormattedResult>;
  msdyn_kbattachment_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_kbattachment_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_kbattachment_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_kbattachment_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_kbattachment_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  msdyn_msdyn_kbattachment_knowledgearticle: WebMappingRetrieve<KnowledgeArticle_Select,KnowledgeArticle_Expand,KnowledgeArticle_Filter,KnowledgeArticle_Fixed,KnowledgeArticle_Result,KnowledgeArticle_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_kbattachments: WebMappingRetrieve<msdyn_kbattachment_Select,msdyn_kbattachment_Expand,msdyn_kbattachment_Filter,msdyn_kbattachment_Fixed,msdyn_kbattachment_Result,msdyn_kbattachment_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_kbattachments: WebMappingRelated<msdyn_kbattachment_RelatedOne,msdyn_kbattachment_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_kbattachments: WebMappingCUDA<msdyn_kbattachment_Create,msdyn_kbattachment_Update,msdyn_kbattachment_Select>;
}
