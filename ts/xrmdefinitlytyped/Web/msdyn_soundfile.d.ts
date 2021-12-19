interface msdyn_soundfile_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_name?: string | null;
  msdyn_soundfileid?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_soundfile_statecode | null;
  statuscode?: msdyn_soundfile_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_soundfile_Relationships {
  msdyn_Personalsoundsetting_msdyn_linksoun?: msdyn_Personalsoundsetting_Result[] | null;
  msdyn_soundfile_Annotations?: Annotation_Result[] | null;
  msdyn_soundfile_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_soundfile_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_soundfile_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_soundfile_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_soundfile_FileAttachments?: FileAttachment_Result[] | null;
  msdyn_soundfile_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_soundfile_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_soundfile_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_soundfile_SyncErrors?: SyncError_Result[] | null;
  msdyn_soundfile_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  msdyn_soundnotificationsetting_linksoundf?: msdyn_soundnotificationsetting_Result[] | null;
  msdyn_uploadsoundfile?: FileAttachment_Result | null;
}
interface msdyn_soundfile extends msdyn_soundfile_Base, msdyn_soundfile_Relationships {
}
interface msdyn_soundfile_Create extends msdyn_soundfile {
}
interface msdyn_soundfile_Update extends msdyn_soundfile {
}
interface msdyn_soundfile_Select {
  createdby_guid: WebAttribute<msdyn_soundfile_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_soundfile_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_soundfile_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_soundfile_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_soundfile_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_soundfile_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_soundfile_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_name: WebAttribute<msdyn_soundfile_Select, { msdyn_name: string | null }, {  }>;
  msdyn_soundfileid: WebAttribute<msdyn_soundfile_Select, { msdyn_soundfileid: string | null }, {  }>;
  organizationid_guid: WebAttribute<msdyn_soundfile_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_soundfile_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  statecode: WebAttribute<msdyn_soundfile_Select, { statecode: msdyn_soundfile_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_soundfile_Select, { statuscode: msdyn_soundfile_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_soundfile_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_soundfile_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_soundfile_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_soundfile_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_name: string;
  msdyn_soundfileid: XQW.Guid;
  organizationid_guid: XQW.Guid;
  overriddencreatedon: Date;
  statecode: msdyn_soundfile_statecode;
  statuscode: msdyn_soundfile_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_soundfile_Expand {
  createdby: WebExpand<msdyn_soundfile_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_soundfile_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_soundfile_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_soundfile_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_Personalsoundsetting_msdyn_linksoun: WebExpand<msdyn_soundfile_Expand, msdyn_Personalsoundsetting_Select, msdyn_Personalsoundsetting_Filter, { msdyn_Personalsoundsetting_msdyn_linksoun: msdyn_Personalsoundsetting_Result[] }>;
  msdyn_soundfile_Annotations: WebExpand<msdyn_soundfile_Expand, Annotation_Select, Annotation_Filter, { msdyn_soundfile_Annotations: Annotation_Result[] }>;
  msdyn_soundfile_AsyncOperations: WebExpand<msdyn_soundfile_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_soundfile_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_soundfile_BulkDeleteFailures: WebExpand<msdyn_soundfile_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_soundfile_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_soundfile_DuplicateBaseRecord: WebExpand<msdyn_soundfile_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_soundfile_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_soundfile_DuplicateMatchingRecord: WebExpand<msdyn_soundfile_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_soundfile_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_soundfile_FileAttachments: WebExpand<msdyn_soundfile_Expand, FileAttachment_Select, FileAttachment_Filter, { msdyn_soundfile_FileAttachments: FileAttachment_Result[] }>;
  msdyn_soundfile_MailboxTrackingFolders: WebExpand<msdyn_soundfile_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_soundfile_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_soundfile_PrincipalObjectAttributeAccesses: WebExpand<msdyn_soundfile_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_soundfile_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_soundfile_ProcessSession: WebExpand<msdyn_soundfile_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_soundfile_ProcessSession: ProcessSession_Result[] }>;
  msdyn_soundfile_SyncErrors: WebExpand<msdyn_soundfile_Expand, SyncError_Select, SyncError_Filter, { msdyn_soundfile_SyncErrors: SyncError_Result[] }>;
  msdyn_soundfile_UserEntityInstanceDatas: WebExpand<msdyn_soundfile_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_soundfile_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_soundnotificationsetting_linksoundf: WebExpand<msdyn_soundfile_Expand, msdyn_soundnotificationsetting_Select, msdyn_soundnotificationsetting_Filter, { msdyn_soundnotificationsetting_linksoundf: msdyn_soundnotificationsetting_Result[] }>;
  msdyn_uploadsoundfile: WebExpand<msdyn_soundfile_Expand, FileAttachment_Select, FileAttachment_Filter, { msdyn_uploadsoundfile: FileAttachment_Result }>;
  organizationid: WebExpand<msdyn_soundfile_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
}
interface msdyn_soundfile_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  organizationid_formatted?: string;
  overriddencreatedon_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_soundfile_Result extends msdyn_soundfile_Base, msdyn_soundfile_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
}
interface msdyn_soundfile_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_uploadsoundfile: WebMappingRetrieve<FileAttachment_Select,FileAttachment_Expand,FileAttachment_Filter,FileAttachment_Fixed,FileAttachment_Result,FileAttachment_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
}
interface msdyn_soundfile_RelatedMany {
  msdyn_Personalsoundsetting_msdyn_linksoun: WebMappingRetrieve<msdyn_Personalsoundsetting_Select,msdyn_Personalsoundsetting_Expand,msdyn_Personalsoundsetting_Filter,msdyn_Personalsoundsetting_Fixed,msdyn_Personalsoundsetting_Result,msdyn_Personalsoundsetting_FormattedResult>;
  msdyn_soundfile_Annotations: WebMappingRetrieve<Annotation_Select,Annotation_Expand,Annotation_Filter,Annotation_Fixed,Annotation_Result,Annotation_FormattedResult>;
  msdyn_soundfile_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_soundfile_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_soundfile_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_soundfile_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_soundfile_FileAttachments: WebMappingRetrieve<FileAttachment_Select,FileAttachment_Expand,FileAttachment_Filter,FileAttachment_Fixed,FileAttachment_Result,FileAttachment_FormattedResult>;
  msdyn_soundfile_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_soundfile_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_soundfile_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_soundfile_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_soundfile_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  msdyn_soundnotificationsetting_linksoundf: WebMappingRetrieve<msdyn_soundnotificationsetting_Select,msdyn_soundnotificationsetting_Expand,msdyn_soundnotificationsetting_Filter,msdyn_soundnotificationsetting_Fixed,msdyn_soundnotificationsetting_Result,msdyn_soundnotificationsetting_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_soundfiles: WebMappingRetrieve<msdyn_soundfile_Select,msdyn_soundfile_Expand,msdyn_soundfile_Filter,msdyn_soundfile_Fixed,msdyn_soundfile_Result,msdyn_soundfile_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_soundfiles: WebMappingRelated<msdyn_soundfile_RelatedOne,msdyn_soundfile_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_soundfiles: WebMappingCUDA<msdyn_soundfile_Create,msdyn_soundfile_Update,msdyn_soundfile_Select>;
}
