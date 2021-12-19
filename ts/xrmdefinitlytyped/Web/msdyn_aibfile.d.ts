interface msdyn_AIBFile_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_aibfileid?: string | null;
  msdyn_checksum?: string | null;
  msdyn_imageid?: string | null;
  msdyn_importmetadata?: string | null;
  msdyn_mimetype?: string | null;
  msdyn_name?: string | null;
  msdyn_size?: number | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_aibfile_statecode | null;
  statuscode?: msdyn_aibfile_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_AIBFile_Relationships {
  msdyn_AIBDatasetFile_msdyn_AIBuilde?: msdyn_AIBDatasetFile_Result[] | null;
  msdyn_AIBDatasetsContainerId?: msdyn_AIBDatasetsContainer_Result | null;
  msdyn_aibfile_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_aibfile_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_aibfile_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_aibfile_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_aibfile_FileAttachments?: FileAttachment_Result[] | null;
  msdyn_aibfile_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_aibfile_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_aibfile_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_aibfile_SyncErrors?: SyncError_Result[] | null;
  msdyn_aibfile_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  msdyn_file?: FileAttachment_Result | null;
  msdyn_imageid_imagedescriptor?: ImageDescriptor_Result | null;
}
interface msdyn_AIBFile extends msdyn_AIBFile_Base, msdyn_AIBFile_Relationships {
  msdyn_AIBDatasetsContainerId_bind$msdyn_aibdatasetscontainers?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_AIBFile_Create extends msdyn_AIBFile {
}
interface msdyn_AIBFile_Update extends msdyn_AIBFile {
}
interface msdyn_AIBFile_Select {
  createdby_guid: WebAttribute<msdyn_AIBFile_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_AIBFile_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_AIBFile_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_AIBFile_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_AIBFile_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_AIBFile_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_AIBFile_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_aibdatasetscontainerid_guid: WebAttribute<msdyn_AIBFile_Select, { msdyn_aibdatasetscontainerid_guid: string | null }, { msdyn_aibdatasetscontainerid_formatted?: string }>;
  msdyn_aibfileid: WebAttribute<msdyn_AIBFile_Select, { msdyn_aibfileid: string | null }, {  }>;
  msdyn_checksum: WebAttribute<msdyn_AIBFile_Select, { msdyn_checksum: string | null }, {  }>;
  msdyn_imageid: WebAttribute<msdyn_AIBFile_Select, { msdyn_imageid: string | null }, {  }>;
  msdyn_importmetadata: WebAttribute<msdyn_AIBFile_Select, { msdyn_importmetadata: string | null }, {  }>;
  msdyn_mimetype: WebAttribute<msdyn_AIBFile_Select, { msdyn_mimetype: string | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_AIBFile_Select, { msdyn_name: string | null }, {  }>;
  msdyn_size: WebAttribute<msdyn_AIBFile_Select, { msdyn_size: number | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_AIBFile_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_AIBFile_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_AIBFile_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_AIBFile_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_AIBFile_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_AIBFile_Select, { statecode: msdyn_aibfile_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_AIBFile_Select, { statuscode: msdyn_aibfile_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_AIBFile_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_AIBFile_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_AIBFile_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_AIBFile_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_aibdatasetscontainerid_guid: XQW.Guid;
  msdyn_aibfileid: XQW.Guid;
  msdyn_checksum: string;
  msdyn_imageid: XQW.Guid;
  msdyn_importmetadata: string;
  msdyn_mimetype: string;
  msdyn_name: string;
  msdyn_size: number;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_aibfile_statecode;
  statuscode: msdyn_aibfile_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_AIBFile_Expand {
  createdby: WebExpand<msdyn_AIBFile_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_AIBFile_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_AIBFile_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_AIBFile_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_AIBDatasetFile_msdyn_AIBuilde: WebExpand<msdyn_AIBFile_Expand, msdyn_AIBDatasetFile_Select, msdyn_AIBDatasetFile_Filter, { msdyn_AIBDatasetFile_msdyn_AIBuilde: msdyn_AIBDatasetFile_Result[] }>;
  msdyn_AIBDatasetsContainerId: WebExpand<msdyn_AIBFile_Expand, msdyn_AIBDatasetsContainer_Select, msdyn_AIBDatasetsContainer_Filter, { msdyn_AIBDatasetsContainerId: msdyn_AIBDatasetsContainer_Result }>;
  msdyn_aibfile_AsyncOperations: WebExpand<msdyn_AIBFile_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_aibfile_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_aibfile_BulkDeleteFailures: WebExpand<msdyn_AIBFile_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_aibfile_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_aibfile_DuplicateBaseRecord: WebExpand<msdyn_AIBFile_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_aibfile_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_aibfile_DuplicateMatchingRecord: WebExpand<msdyn_AIBFile_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_aibfile_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_aibfile_FileAttachments: WebExpand<msdyn_AIBFile_Expand, FileAttachment_Select, FileAttachment_Filter, { msdyn_aibfile_FileAttachments: FileAttachment_Result[] }>;
  msdyn_aibfile_MailboxTrackingFolders: WebExpand<msdyn_AIBFile_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_aibfile_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_aibfile_PrincipalObjectAttributeAccesses: WebExpand<msdyn_AIBFile_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_aibfile_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_aibfile_ProcessSession: WebExpand<msdyn_AIBFile_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_aibfile_ProcessSession: ProcessSession_Result[] }>;
  msdyn_aibfile_SyncErrors: WebExpand<msdyn_AIBFile_Expand, SyncError_Select, SyncError_Filter, { msdyn_aibfile_SyncErrors: SyncError_Result[] }>;
  msdyn_aibfile_UserEntityInstanceDatas: WebExpand<msdyn_AIBFile_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_aibfile_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_file: WebExpand<msdyn_AIBFile_Expand, FileAttachment_Select, FileAttachment_Filter, { msdyn_file: FileAttachment_Result }>;
  msdyn_imageid_imagedescriptor: WebExpand<msdyn_AIBFile_Expand, ImageDescriptor_Select, ImageDescriptor_Filter, { msdyn_imageid_imagedescriptor: ImageDescriptor_Result }>;
  ownerid: WebExpand<msdyn_AIBFile_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_AIBFile_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_AIBFile_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_AIBFile_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_AIBFile_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_aibdatasetscontainerid_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_AIBFile_Result extends msdyn_AIBFile_Base, msdyn_AIBFile_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_aibdatasetscontainerid_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_AIBFile_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_AIBDatasetsContainerId: WebMappingRetrieve<msdyn_AIBDatasetsContainer_Select,msdyn_AIBDatasetsContainer_Expand,msdyn_AIBDatasetsContainer_Filter,msdyn_AIBDatasetsContainer_Fixed,msdyn_AIBDatasetsContainer_Result,msdyn_AIBDatasetsContainer_FormattedResult>;
  msdyn_file: WebMappingRetrieve<FileAttachment_Select,FileAttachment_Expand,FileAttachment_Filter,FileAttachment_Fixed,FileAttachment_Result,FileAttachment_FormattedResult>;
  msdyn_imageid_imagedescriptor: WebMappingRetrieve<ImageDescriptor_Select,ImageDescriptor_Expand,ImageDescriptor_Filter,ImageDescriptor_Fixed,ImageDescriptor_Result,ImageDescriptor_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_AIBFile_RelatedMany {
  msdyn_AIBDatasetFile_msdyn_AIBuilde: WebMappingRetrieve<msdyn_AIBDatasetFile_Select,msdyn_AIBDatasetFile_Expand,msdyn_AIBDatasetFile_Filter,msdyn_AIBDatasetFile_Fixed,msdyn_AIBDatasetFile_Result,msdyn_AIBDatasetFile_FormattedResult>;
  msdyn_aibfile_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_aibfile_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_aibfile_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_aibfile_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_aibfile_FileAttachments: WebMappingRetrieve<FileAttachment_Select,FileAttachment_Expand,FileAttachment_Filter,FileAttachment_Fixed,FileAttachment_Result,FileAttachment_FormattedResult>;
  msdyn_aibfile_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_aibfile_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_aibfile_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_aibfile_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_aibfile_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_aibfiles: WebMappingRetrieve<msdyn_AIBFile_Select,msdyn_AIBFile_Expand,msdyn_AIBFile_Filter,msdyn_AIBFile_Fixed,msdyn_AIBFile_Result,msdyn_AIBFile_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_aibfiles: WebMappingRelated<msdyn_AIBFile_RelatedOne,msdyn_AIBFile_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_aibfiles: WebMappingCUDA<msdyn_AIBFile_Create,msdyn_AIBFile_Update,msdyn_AIBFile_Select>;
}
