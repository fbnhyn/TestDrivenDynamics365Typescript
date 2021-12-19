interface activityfileattachment_Base extends WebEntity {
  activityfileattachmentid?: string | null;
  componentidunique?: string | null;
  componentstate?: componentstate | null;
  createdon?: Date | null;
  filename?: string | null;
  importsequencenumber?: number | null;
  iscustomizable?: any | null;
  ismanaged?: boolean | null;
  modifiedon?: Date | null;
  objecttypecode?: string | null;
  overriddencreatedon?: Date | null;
  overwritetime?: Date | null;
  solutionid?: string | null;
  statecode?: cr6d5_activityfileattachment_statecode | null;
  statuscode?: cr6d5_activityfileattachment_statuscode | null;
  supportingsolutionid?: string | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface activityfileattachment_Relationships {
  activityfileattachment_AsyncOperations?: AsyncOperation_Result[] | null;
  activityfileattachment_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  activityfileattachment_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  activityfileattachment_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  activityfileattachment_FileAttachments?: FileAttachment_Result[] | null;
  activityfileattachment_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  activityfileattachment_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  activityfileattachment_ProcessSession?: ProcessSession_Result[] | null;
  activityfileattachment_SyncErrors?: SyncError_Result[] | null;
  activityfileattachment_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  filecontent?: FileAttachment_Result | null;
  parentid_post?: Post_Result | null;
  parentid_postcomment?: PostComment_Result | null;
}
interface activityfileattachment extends activityfileattachment_Base, activityfileattachment_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
  parentid_post_bind$posts?: string | null;
  parentid_postcomment_bind$postcomments?: string | null;
}
interface activityfileattachment_Create extends activityfileattachment {
}
interface activityfileattachment_Update extends activityfileattachment {
}
interface activityfileattachment_Select {
  activityfileattachmentid: WebAttribute<activityfileattachment_Select, { activityfileattachmentid: string | null }, {  }>;
  componentidunique: WebAttribute<activityfileattachment_Select, { componentidunique: string | null }, {  }>;
  componentstate: WebAttribute<activityfileattachment_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  createdby_guid: WebAttribute<activityfileattachment_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<activityfileattachment_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<activityfileattachment_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  filename: WebAttribute<activityfileattachment_Select, { filename: string | null }, {  }>;
  importsequencenumber: WebAttribute<activityfileattachment_Select, { importsequencenumber: number | null }, {  }>;
  iscustomizable: WebAttribute<activityfileattachment_Select, { iscustomizable: any | null }, {  }>;
  ismanaged: WebAttribute<activityfileattachment_Select, { ismanaged: boolean | null }, {  }>;
  modifiedby_guid: WebAttribute<activityfileattachment_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<activityfileattachment_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<activityfileattachment_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  objecttypecode: WebAttribute<activityfileattachment_Select, { objecttypecode: string | null }, {  }>;
  overriddencreatedon: WebAttribute<activityfileattachment_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  overwritetime: WebAttribute<activityfileattachment_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  ownerid_guid: WebAttribute<activityfileattachment_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<activityfileattachment_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<activityfileattachment_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<activityfileattachment_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  parentid_guid: WebAttribute<activityfileattachment_Select, { parentid_guid: string | null }, { parentid_formatted?: string }>;
  solutionid: WebAttribute<activityfileattachment_Select, { solutionid: string | null }, {  }>;
  statecode: WebAttribute<activityfileattachment_Select, { statecode: cr6d5_activityfileattachment_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<activityfileattachment_Select, { statuscode: cr6d5_activityfileattachment_statuscode | null }, { statuscode_formatted?: string }>;
  supportingsolutionid: WebAttribute<activityfileattachment_Select, { supportingsolutionid: string | null }, {  }>;
  timezoneruleversionnumber: WebAttribute<activityfileattachment_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<activityfileattachment_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<activityfileattachment_Select, { versionnumber: number | null }, {  }>;
}
interface activityfileattachment_Filter {
  activityfileattachmentid: XQW.Guid;
  componentidunique: XQW.Guid;
  componentstate: componentstate;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  filename: string;
  importsequencenumber: number;
  iscustomizable: any;
  ismanaged: boolean;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  objecttypecode: string;
  overriddencreatedon: Date;
  overwritetime: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  parentid_guid: XQW.Guid;
  solutionid: XQW.Guid;
  statecode: cr6d5_activityfileattachment_statecode;
  statuscode: cr6d5_activityfileattachment_statuscode;
  supportingsolutionid: XQW.Guid;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface activityfileattachment_Expand {
  activityfileattachment_AsyncOperations: WebExpand<activityfileattachment_Expand, AsyncOperation_Select, AsyncOperation_Filter, { activityfileattachment_AsyncOperations: AsyncOperation_Result[] }>;
  activityfileattachment_BulkDeleteFailures: WebExpand<activityfileattachment_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { activityfileattachment_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  activityfileattachment_DuplicateBaseRecord: WebExpand<activityfileattachment_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { activityfileattachment_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  activityfileattachment_DuplicateMatchingRecord: WebExpand<activityfileattachment_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { activityfileattachment_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  activityfileattachment_FileAttachments: WebExpand<activityfileattachment_Expand, FileAttachment_Select, FileAttachment_Filter, { activityfileattachment_FileAttachments: FileAttachment_Result[] }>;
  activityfileattachment_MailboxTrackingFolders: WebExpand<activityfileattachment_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { activityfileattachment_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  activityfileattachment_PrincipalObjectAttributeAccesses: WebExpand<activityfileattachment_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { activityfileattachment_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  activityfileattachment_ProcessSession: WebExpand<activityfileattachment_Expand, ProcessSession_Select, ProcessSession_Filter, { activityfileattachment_ProcessSession: ProcessSession_Result[] }>;
  activityfileattachment_SyncErrors: WebExpand<activityfileattachment_Expand, SyncError_Select, SyncError_Filter, { activityfileattachment_SyncErrors: SyncError_Result[] }>;
  activityfileattachment_UserEntityInstanceDatas: WebExpand<activityfileattachment_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { activityfileattachment_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  createdby: WebExpand<activityfileattachment_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<activityfileattachment_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  filecontent: WebExpand<activityfileattachment_Expand, FileAttachment_Select, FileAttachment_Filter, { filecontent: FileAttachment_Result }>;
  modifiedby: WebExpand<activityfileattachment_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<activityfileattachment_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  ownerid: WebExpand<activityfileattachment_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<activityfileattachment_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<activityfileattachment_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<activityfileattachment_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
  parentid_post: WebExpand<activityfileattachment_Expand, Post_Select, Post_Filter, { parentid_post: Post_Result }>;
  parentid_postcomment: WebExpand<activityfileattachment_Expand, PostComment_Select, PostComment_Filter, { parentid_postcomment: PostComment_Result }>;
}
interface activityfileattachment_FormattedResult {
  componentstate_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  overriddencreatedon_formatted?: string;
  overwritetime_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  parentid_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface activityfileattachment_Result extends activityfileattachment_Base, activityfileattachment_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
  parentid_guid: string | null;
}
interface activityfileattachment_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  filecontent: WebMappingRetrieve<FileAttachment_Select,FileAttachment_Expand,FileAttachment_Filter,FileAttachment_Fixed,FileAttachment_Result,FileAttachment_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  parentid_post: WebMappingRetrieve<Post_Select,Post_Expand,Post_Filter,Post_Fixed,Post_Result,Post_FormattedResult>;
  parentid_postcomment: WebMappingRetrieve<PostComment_Select,PostComment_Expand,PostComment_Filter,PostComment_Fixed,PostComment_Result,PostComment_FormattedResult>;
}
interface activityfileattachment_RelatedMany {
  activityfileattachment_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  activityfileattachment_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  activityfileattachment_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  activityfileattachment_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  activityfileattachment_FileAttachments: WebMappingRetrieve<FileAttachment_Select,FileAttachment_Expand,FileAttachment_Filter,FileAttachment_Fixed,FileAttachment_Result,FileAttachment_FormattedResult>;
  activityfileattachment_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  activityfileattachment_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  activityfileattachment_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  activityfileattachment_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  activityfileattachment_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  activityfileattachments: WebMappingRetrieve<activityfileattachment_Select,activityfileattachment_Expand,activityfileattachment_Filter,activityfileattachment_Fixed,activityfileattachment_Result,activityfileattachment_FormattedResult>;
}
interface WebEntitiesRelated {
  activityfileattachments: WebMappingRelated<activityfileattachment_RelatedOne,activityfileattachment_RelatedMany>;
}
interface WebEntitiesCUDA {
  activityfileattachments: WebMappingCUDA<activityfileattachment_Create,activityfileattachment_Update,activityfileattachment_Select>;
}
