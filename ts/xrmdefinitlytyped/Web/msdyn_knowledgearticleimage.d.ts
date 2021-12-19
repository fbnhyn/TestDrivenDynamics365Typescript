interface msdyn_knowledgearticleimage_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_filename?: string | null;
  msdyn_knowledgearticleimageid?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_knowledgearticleimage_statecode | null;
  statuscode?: msdyn_knowledgearticleimage_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_knowledgearticleimage_Relationships {
  msdyn_blobfile?: FileAttachment_Result | null;
  msdyn_knowledgearticleimage_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_knowledgearticleimage_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_knowledgearticleimage_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_knowledgearticleimage_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_knowledgearticleimage_FileAttachments?: FileAttachment_Result[] | null;
  msdyn_knowledgearticleimage_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_knowledgearticleimage_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_knowledgearticleimage_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_knowledgearticleimage_SyncErrors?: SyncError_Result[] | null;
  msdyn_knowledgearticleimage_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_knowledgearticleimage extends msdyn_knowledgearticleimage_Base, msdyn_knowledgearticleimage_Relationships {
  msdyn_parentknowledgearticleid_bind$knowledgearticles?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_knowledgearticleimage_Create extends msdyn_knowledgearticleimage {
}
interface msdyn_knowledgearticleimage_Update extends msdyn_knowledgearticleimage {
}
interface msdyn_knowledgearticleimage_Select {
  createdby_guid: WebAttribute<msdyn_knowledgearticleimage_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_knowledgearticleimage_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_knowledgearticleimage_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_knowledgearticleimage_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_knowledgearticleimage_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_knowledgearticleimage_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_knowledgearticleimage_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_filename: WebAttribute<msdyn_knowledgearticleimage_Select, { msdyn_filename: string | null }, {  }>;
  msdyn_knowledgearticleimageid: WebAttribute<msdyn_knowledgearticleimage_Select, { msdyn_knowledgearticleimageid: string | null }, {  }>;
  msdyn_parententityrecordid_guid: WebAttribute<msdyn_knowledgearticleimage_Select, { msdyn_parententityrecordid_guid: string | null }, { msdyn_parententityrecordid_formatted?: string }>;
  msdyn_parentknowledgearticleid_guid: WebAttribute<msdyn_knowledgearticleimage_Select, { msdyn_parentknowledgearticleid_guid: string | null }, { msdyn_parentknowledgearticleid_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_knowledgearticleimage_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_knowledgearticleimage_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_knowledgearticleimage_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_knowledgearticleimage_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_knowledgearticleimage_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_knowledgearticleimage_Select, { statecode: msdyn_knowledgearticleimage_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_knowledgearticleimage_Select, { statuscode: msdyn_knowledgearticleimage_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_knowledgearticleimage_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_knowledgearticleimage_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_knowledgearticleimage_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_knowledgearticleimage_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_filename: string;
  msdyn_knowledgearticleimageid: XQW.Guid;
  msdyn_parententityrecordid_guid: XQW.Guid;
  msdyn_parentknowledgearticleid_guid: XQW.Guid;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_knowledgearticleimage_statecode;
  statuscode: msdyn_knowledgearticleimage_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_knowledgearticleimage_Expand {
  createdby: WebExpand<msdyn_knowledgearticleimage_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_knowledgearticleimage_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_knowledgearticleimage_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_knowledgearticleimage_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_blobfile: WebExpand<msdyn_knowledgearticleimage_Expand, FileAttachment_Select, FileAttachment_Filter, { msdyn_blobfile: FileAttachment_Result }>;
  msdyn_knowledgearticleimage_AsyncOperations: WebExpand<msdyn_knowledgearticleimage_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_knowledgearticleimage_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_knowledgearticleimage_BulkDeleteFailures: WebExpand<msdyn_knowledgearticleimage_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_knowledgearticleimage_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_knowledgearticleimage_DuplicateBaseRecord: WebExpand<msdyn_knowledgearticleimage_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_knowledgearticleimage_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_knowledgearticleimage_DuplicateMatchingRecord: WebExpand<msdyn_knowledgearticleimage_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_knowledgearticleimage_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_knowledgearticleimage_FileAttachments: WebExpand<msdyn_knowledgearticleimage_Expand, FileAttachment_Select, FileAttachment_Filter, { msdyn_knowledgearticleimage_FileAttachments: FileAttachment_Result[] }>;
  msdyn_knowledgearticleimage_MailboxTrackingFolders: WebExpand<msdyn_knowledgearticleimage_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_knowledgearticleimage_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_knowledgearticleimage_PrincipalObjectAttributeAccesses: WebExpand<msdyn_knowledgearticleimage_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_knowledgearticleimage_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_knowledgearticleimage_ProcessSession: WebExpand<msdyn_knowledgearticleimage_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_knowledgearticleimage_ProcessSession: ProcessSession_Result[] }>;
  msdyn_knowledgearticleimage_SyncErrors: WebExpand<msdyn_knowledgearticleimage_Expand, SyncError_Select, SyncError_Filter, { msdyn_knowledgearticleimage_SyncErrors: SyncError_Result[] }>;
  msdyn_knowledgearticleimage_UserEntityInstanceDatas: WebExpand<msdyn_knowledgearticleimage_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_knowledgearticleimage_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_parentknowledgearticleid: WebExpand<msdyn_knowledgearticleimage_Expand, KnowledgeArticle_Select, KnowledgeArticle_Filter, { msdyn_parentknowledgearticleid: KnowledgeArticle_Result }>;
  ownerid: WebExpand<msdyn_knowledgearticleimage_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_knowledgearticleimage_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_knowledgearticleimage_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_knowledgearticleimage_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_knowledgearticleimage_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_parententityrecordid_formatted?: string;
  msdyn_parentknowledgearticleid_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_knowledgearticleimage_Result extends msdyn_knowledgearticleimage_Base, msdyn_knowledgearticleimage_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_parententityrecordid_guid: string | null;
  msdyn_parentknowledgearticleid_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_knowledgearticleimage_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_blobfile: WebMappingRetrieve<FileAttachment_Select,FileAttachment_Expand,FileAttachment_Filter,FileAttachment_Fixed,FileAttachment_Result,FileAttachment_FormattedResult>;
  msdyn_parentknowledgearticleid: WebMappingRetrieve<KnowledgeArticle_Select,KnowledgeArticle_Expand,KnowledgeArticle_Filter,KnowledgeArticle_Fixed,KnowledgeArticle_Result,KnowledgeArticle_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_knowledgearticleimage_RelatedMany {
  msdyn_knowledgearticleimage_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_knowledgearticleimage_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_knowledgearticleimage_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_knowledgearticleimage_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_knowledgearticleimage_FileAttachments: WebMappingRetrieve<FileAttachment_Select,FileAttachment_Expand,FileAttachment_Filter,FileAttachment_Fixed,FileAttachment_Result,FileAttachment_FormattedResult>;
  msdyn_knowledgearticleimage_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_knowledgearticleimage_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_knowledgearticleimage_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_knowledgearticleimage_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_knowledgearticleimage_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_knowledgearticleimages: WebMappingRetrieve<msdyn_knowledgearticleimage_Select,msdyn_knowledgearticleimage_Expand,msdyn_knowledgearticleimage_Filter,msdyn_knowledgearticleimage_Fixed,msdyn_knowledgearticleimage_Result,msdyn_knowledgearticleimage_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_knowledgearticleimages: WebMappingRelated<msdyn_knowledgearticleimage_RelatedOne,msdyn_knowledgearticleimage_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_knowledgearticleimages: WebMappingCUDA<msdyn_knowledgearticleimage_Create,msdyn_knowledgearticleimage_Update,msdyn_knowledgearticleimage_Select>;
}
