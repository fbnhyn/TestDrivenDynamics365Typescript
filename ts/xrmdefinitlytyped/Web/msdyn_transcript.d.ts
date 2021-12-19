interface msdyn_transcript_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_name?: string | null;
  msdyn_transcriptid?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_transcript_statecode | null;
  statuscode?: msdyn_transcript_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_transcript_Relationships {
  msdyn_LiveWorkItemIdId?: msdyn_ocliveworkitem_Result | null;
  msdyn_transcript_Annotations?: Annotation_Result[] | null;
  msdyn_transcript_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_transcript_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_transcript_FileAttachments?: FileAttachment_Result[] | null;
  msdyn_transcript_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_transcript_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_transcript_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_transcript_SyncErrors?: SyncError_Result[] | null;
  msdyn_transcript_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  msdyn_voicetranscript?: FileAttachment_Result | null;
  msdyn_voicetranscript_formatted?: FileAttachment_Result | null;
}
interface msdyn_transcript extends msdyn_transcript_Base, msdyn_transcript_Relationships {
  msdyn_LiveWorkItemIdId_bind$msdyn_ocliveworkitems?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_transcript_Create extends msdyn_transcript {
}
interface msdyn_transcript_Update extends msdyn_transcript {
}
interface msdyn_transcript_Select {
  createdby_guid: WebAttribute<msdyn_transcript_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_transcript_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_transcript_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_transcript_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_transcript_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_transcript_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_transcript_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_liveworkitemidid_guid: WebAttribute<msdyn_transcript_Select, { msdyn_liveworkitemidid_guid: string | null }, { msdyn_liveworkitemidid_formatted?: string }>;
  msdyn_name: WebAttribute<msdyn_transcript_Select, { msdyn_name: string | null }, {  }>;
  msdyn_transcriptid: WebAttribute<msdyn_transcript_Select, { msdyn_transcriptid: string | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_transcript_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_transcript_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_transcript_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_transcript_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_transcript_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_transcript_Select, { statecode: msdyn_transcript_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_transcript_Select, { statuscode: msdyn_transcript_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_transcript_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_transcript_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_transcript_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_transcript_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_liveworkitemidid_guid: XQW.Guid;
  msdyn_name: string;
  msdyn_transcriptid: XQW.Guid;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_transcript_statecode;
  statuscode: msdyn_transcript_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_transcript_Expand {
  createdby: WebExpand<msdyn_transcript_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_transcript_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_transcript_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_transcript_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_LiveWorkItemIdId: WebExpand<msdyn_transcript_Expand, msdyn_ocliveworkitem_Select, msdyn_ocliveworkitem_Filter, { msdyn_LiveWorkItemIdId: msdyn_ocliveworkitem_Result }>;
  msdyn_transcript_Annotations: WebExpand<msdyn_transcript_Expand, Annotation_Select, Annotation_Filter, { msdyn_transcript_Annotations: Annotation_Result[] }>;
  msdyn_transcript_AsyncOperations: WebExpand<msdyn_transcript_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_transcript_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_transcript_BulkDeleteFailures: WebExpand<msdyn_transcript_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_transcript_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_transcript_FileAttachments: WebExpand<msdyn_transcript_Expand, FileAttachment_Select, FileAttachment_Filter, { msdyn_transcript_FileAttachments: FileAttachment_Result[] }>;
  msdyn_transcript_MailboxTrackingFolders: WebExpand<msdyn_transcript_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_transcript_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_transcript_PrincipalObjectAttributeAccesses: WebExpand<msdyn_transcript_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_transcript_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_transcript_ProcessSession: WebExpand<msdyn_transcript_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_transcript_ProcessSession: ProcessSession_Result[] }>;
  msdyn_transcript_SyncErrors: WebExpand<msdyn_transcript_Expand, SyncError_Select, SyncError_Filter, { msdyn_transcript_SyncErrors: SyncError_Result[] }>;
  msdyn_transcript_UserEntityInstanceDatas: WebExpand<msdyn_transcript_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_transcript_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_voicetranscript: WebExpand<msdyn_transcript_Expand, FileAttachment_Select, FileAttachment_Filter, { msdyn_voicetranscript: FileAttachment_Result }>;
  msdyn_voicetranscript_formatted: WebExpand<msdyn_transcript_Expand, FileAttachment_Select, FileAttachment_Filter, { msdyn_voicetranscript_formatted: FileAttachment_Result }>;
  ownerid: WebExpand<msdyn_transcript_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_transcript_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_transcript_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_transcript_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_transcript_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_liveworkitemidid_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_transcript_Result extends msdyn_transcript_Base, msdyn_transcript_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_liveworkitemidid_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_transcript_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_LiveWorkItemIdId: WebMappingRetrieve<msdyn_ocliveworkitem_Select,msdyn_ocliveworkitem_Expand,msdyn_ocliveworkitem_Filter,msdyn_ocliveworkitem_Fixed,msdyn_ocliveworkitem_Result,msdyn_ocliveworkitem_FormattedResult>;
  msdyn_voicetranscript: WebMappingRetrieve<FileAttachment_Select,FileAttachment_Expand,FileAttachment_Filter,FileAttachment_Fixed,FileAttachment_Result,FileAttachment_FormattedResult>;
  msdyn_voicetranscript_formatted: WebMappingRetrieve<FileAttachment_Select,FileAttachment_Expand,FileAttachment_Filter,FileAttachment_Fixed,FileAttachment_Result,FileAttachment_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_transcript_RelatedMany {
  msdyn_transcript_Annotations: WebMappingRetrieve<Annotation_Select,Annotation_Expand,Annotation_Filter,Annotation_Fixed,Annotation_Result,Annotation_FormattedResult>;
  msdyn_transcript_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_transcript_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_transcript_FileAttachments: WebMappingRetrieve<FileAttachment_Select,FileAttachment_Expand,FileAttachment_Filter,FileAttachment_Fixed,FileAttachment_Result,FileAttachment_FormattedResult>;
  msdyn_transcript_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_transcript_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_transcript_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_transcript_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_transcript_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_transcripts: WebMappingRetrieve<msdyn_transcript_Select,msdyn_transcript_Expand,msdyn_transcript_Filter,msdyn_transcript_Fixed,msdyn_transcript_Result,msdyn_transcript_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_transcripts: WebMappingRelated<msdyn_transcript_RelatedOne,msdyn_transcript_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_transcripts: WebMappingCUDA<msdyn_transcript_Create,msdyn_transcript_Update,msdyn_transcript_Select>;
}
