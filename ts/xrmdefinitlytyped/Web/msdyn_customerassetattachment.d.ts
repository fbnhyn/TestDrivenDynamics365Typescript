interface msdyn_customerassetattachment_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_attachmenttype?: msdyn_attachmenttype | null;
  msdyn_category?: msdyn_customerassetattachment_msdyn_category | null;
  msdyn_customerassetattachmentid?: string | null;
  msdyn_imageid?: string | null;
  msdyn_name?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_customerassetattachment_statecode | null;
  statuscode?: msdyn_customerassetattachment_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_customerassetattachment_Relationships {
  msdyn_CustomerAsset?: msdyn_customerasset_Result | null;
  msdyn_customerassetattachment_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_customerassetattachment_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_customerassetattachment_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_customerassetattachment_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_customerassetattachment_FileAttachments?: FileAttachment_Result[] | null;
  msdyn_customerassetattachment_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_customerassetattachment_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_customerassetattachment_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_customerassetattachment_SyncErrors?: SyncError_Result[] | null;
  msdyn_customerassetattachment_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  msdyn_file?: FileAttachment_Result | null;
  msdyn_imageid_imagedescriptor?: ImageDescriptor_Result | null;
}
interface msdyn_customerassetattachment extends msdyn_customerassetattachment_Base, msdyn_customerassetattachment_Relationships {
  msdyn_CustomerAsset_bind$msdyn_customerassets?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_customerassetattachment_Create extends msdyn_customerassetattachment {
}
interface msdyn_customerassetattachment_Update extends msdyn_customerassetattachment {
}
interface msdyn_customerassetattachment_Select {
  createdby_guid: WebAttribute<msdyn_customerassetattachment_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_customerassetattachment_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_customerassetattachment_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_customerassetattachment_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_customerassetattachment_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_customerassetattachment_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_customerassetattachment_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_attachmenttype: WebAttribute<msdyn_customerassetattachment_Select, { msdyn_attachmenttype: msdyn_attachmenttype | null }, { msdyn_attachmenttype_formatted?: string }>;
  msdyn_category: WebAttribute<msdyn_customerassetattachment_Select, { msdyn_category: msdyn_customerassetattachment_msdyn_category | null }, { msdyn_category_formatted?: string }>;
  msdyn_customerasset_guid: WebAttribute<msdyn_customerassetattachment_Select, { msdyn_customerasset_guid: string | null }, { msdyn_customerasset_formatted?: string }>;
  msdyn_customerassetattachmentid: WebAttribute<msdyn_customerassetattachment_Select, { msdyn_customerassetattachmentid: string | null }, {  }>;
  msdyn_imageid: WebAttribute<msdyn_customerassetattachment_Select, { msdyn_imageid: string | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_customerassetattachment_Select, { msdyn_name: string | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_customerassetattachment_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_customerassetattachment_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_customerassetattachment_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_customerassetattachment_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_customerassetattachment_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_customerassetattachment_Select, { statecode: msdyn_customerassetattachment_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_customerassetattachment_Select, { statuscode: msdyn_customerassetattachment_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_customerassetattachment_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_customerassetattachment_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_customerassetattachment_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_customerassetattachment_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_attachmenttype: msdyn_attachmenttype;
  msdyn_category: msdyn_customerassetattachment_msdyn_category;
  msdyn_customerasset_guid: XQW.Guid;
  msdyn_customerassetattachmentid: XQW.Guid;
  msdyn_imageid: XQW.Guid;
  msdyn_name: string;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_customerassetattachment_statecode;
  statuscode: msdyn_customerassetattachment_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_customerassetattachment_Expand {
  createdby: WebExpand<msdyn_customerassetattachment_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_customerassetattachment_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_customerassetattachment_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_customerassetattachment_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_CustomerAsset: WebExpand<msdyn_customerassetattachment_Expand, msdyn_customerasset_Select, msdyn_customerasset_Filter, { msdyn_CustomerAsset: msdyn_customerasset_Result }>;
  msdyn_customerassetattachment_AsyncOperations: WebExpand<msdyn_customerassetattachment_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_customerassetattachment_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_customerassetattachment_BulkDeleteFailures: WebExpand<msdyn_customerassetattachment_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_customerassetattachment_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_customerassetattachment_DuplicateBaseRecord: WebExpand<msdyn_customerassetattachment_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_customerassetattachment_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_customerassetattachment_DuplicateMatchingRecord: WebExpand<msdyn_customerassetattachment_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_customerassetattachment_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_customerassetattachment_FileAttachments: WebExpand<msdyn_customerassetattachment_Expand, FileAttachment_Select, FileAttachment_Filter, { msdyn_customerassetattachment_FileAttachments: FileAttachment_Result[] }>;
  msdyn_customerassetattachment_MailboxTrackingFolders: WebExpand<msdyn_customerassetattachment_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_customerassetattachment_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_customerassetattachment_PrincipalObjectAttributeAccesses: WebExpand<msdyn_customerassetattachment_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_customerassetattachment_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_customerassetattachment_ProcessSession: WebExpand<msdyn_customerassetattachment_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_customerassetattachment_ProcessSession: ProcessSession_Result[] }>;
  msdyn_customerassetattachment_SyncErrors: WebExpand<msdyn_customerassetattachment_Expand, SyncError_Select, SyncError_Filter, { msdyn_customerassetattachment_SyncErrors: SyncError_Result[] }>;
  msdyn_customerassetattachment_UserEntityInstanceDatas: WebExpand<msdyn_customerassetattachment_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_customerassetattachment_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_file: WebExpand<msdyn_customerassetattachment_Expand, FileAttachment_Select, FileAttachment_Filter, { msdyn_file: FileAttachment_Result }>;
  msdyn_imageid_imagedescriptor: WebExpand<msdyn_customerassetattachment_Expand, ImageDescriptor_Select, ImageDescriptor_Filter, { msdyn_imageid_imagedescriptor: ImageDescriptor_Result }>;
  ownerid: WebExpand<msdyn_customerassetattachment_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_customerassetattachment_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_customerassetattachment_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_customerassetattachment_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_customerassetattachment_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_attachmenttype_formatted?: string;
  msdyn_category_formatted?: string;
  msdyn_customerasset_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_customerassetattachment_Result extends msdyn_customerassetattachment_Base, msdyn_customerassetattachment_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_customerasset_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_customerassetattachment_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_CustomerAsset: WebMappingRetrieve<msdyn_customerasset_Select,msdyn_customerasset_Expand,msdyn_customerasset_Filter,msdyn_customerasset_Fixed,msdyn_customerasset_Result,msdyn_customerasset_FormattedResult>;
  msdyn_file: WebMappingRetrieve<FileAttachment_Select,FileAttachment_Expand,FileAttachment_Filter,FileAttachment_Fixed,FileAttachment_Result,FileAttachment_FormattedResult>;
  msdyn_imageid_imagedescriptor: WebMappingRetrieve<ImageDescriptor_Select,ImageDescriptor_Expand,ImageDescriptor_Filter,ImageDescriptor_Fixed,ImageDescriptor_Result,ImageDescriptor_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_customerassetattachment_RelatedMany {
  msdyn_customerassetattachment_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_customerassetattachment_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_customerassetattachment_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_customerassetattachment_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_customerassetattachment_FileAttachments: WebMappingRetrieve<FileAttachment_Select,FileAttachment_Expand,FileAttachment_Filter,FileAttachment_Fixed,FileAttachment_Result,FileAttachment_FormattedResult>;
  msdyn_customerassetattachment_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_customerassetattachment_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_customerassetattachment_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_customerassetattachment_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_customerassetattachment_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_customerassetattachments: WebMappingRetrieve<msdyn_customerassetattachment_Select,msdyn_customerassetattachment_Expand,msdyn_customerassetattachment_Filter,msdyn_customerassetattachment_Fixed,msdyn_customerassetattachment_Result,msdyn_customerassetattachment_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_customerassetattachments: WebMappingRelated<msdyn_customerassetattachment_RelatedOne,msdyn_customerassetattachment_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_customerassetattachments: WebMappingCUDA<msdyn_customerassetattachment_Create,msdyn_customerassetattachment_Update,msdyn_customerassetattachment_Select>;
}
