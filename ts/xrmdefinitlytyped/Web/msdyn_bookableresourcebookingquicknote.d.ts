interface msdyn_bookableresourcebookingquicknote_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_bookableresourcebookingquicknoteid?: string | null;
  msdyn_imageid?: string | null;
  msdyn_name?: string | null;
  msdyn_order?: number | null;
  msdyn_text?: string | null;
  msdyn_type?: msdyn_quicknote_type | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_bookableresourcebookingquicknote_statecode | null;
  statuscode?: msdyn_bookableresourcebookingquicknote_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_bookableresourcebookingquicknote_Relationships {
  msdyn_bookableresourcebookingquicknote_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_bookableresourcebookingquicknote_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_bookableresourcebookingquicknote_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_bookableresourcebookingquicknote_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_bookableresourcebookingquicknote_FileAttachments?: FileAttachment_Result[] | null;
  msdyn_bookableresourcebookingquicknote_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_bookableresourcebookingquicknote_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_bookableresourcebookingquicknote_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_bookableresourcebookingquicknote_SyncErrors?: SyncError_Result[] | null;
  msdyn_bookableresourcebookingquicknote_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  msdyn_file?: FileAttachment_Result | null;
  msdyn_imageid_imagedescriptor?: ImageDescriptor_Result | null;
}
interface msdyn_bookableresourcebookingquicknote extends msdyn_bookableresourcebookingquicknote_Base, msdyn_bookableresourcebookingquicknote_Relationships {
  msdyn_quicknote_lookup_entity_bind$bookableresourcebookings?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_bookableresourcebookingquicknote_Create extends msdyn_bookableresourcebookingquicknote {
}
interface msdyn_bookableresourcebookingquicknote_Update extends msdyn_bookableresourcebookingquicknote {
}
interface msdyn_bookableresourcebookingquicknote_Select {
  createdby_guid: WebAttribute<msdyn_bookableresourcebookingquicknote_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_bookableresourcebookingquicknote_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_bookableresourcebookingquicknote_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_bookableresourcebookingquicknote_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_bookableresourcebookingquicknote_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_bookableresourcebookingquicknote_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_bookableresourcebookingquicknote_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_bookableresourcebookingquicknoteid: WebAttribute<msdyn_bookableresourcebookingquicknote_Select, { msdyn_bookableresourcebookingquicknoteid: string | null }, {  }>;
  msdyn_imageid: WebAttribute<msdyn_bookableresourcebookingquicknote_Select, { msdyn_imageid: string | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_bookableresourcebookingquicknote_Select, { msdyn_name: string | null }, {  }>;
  msdyn_order: WebAttribute<msdyn_bookableresourcebookingquicknote_Select, { msdyn_order: number | null }, {  }>;
  msdyn_quicknote_lookup_entity_guid: WebAttribute<msdyn_bookableresourcebookingquicknote_Select, { msdyn_quicknote_lookup_entity_guid: string | null }, { msdyn_quicknote_lookup_entity_formatted?: string }>;
  msdyn_text: WebAttribute<msdyn_bookableresourcebookingquicknote_Select, { msdyn_text: string | null }, {  }>;
  msdyn_type: WebAttribute<msdyn_bookableresourcebookingquicknote_Select, { msdyn_type: msdyn_quicknote_type | null }, { msdyn_type_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_bookableresourcebookingquicknote_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_bookableresourcebookingquicknote_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_bookableresourcebookingquicknote_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_bookableresourcebookingquicknote_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_bookableresourcebookingquicknote_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_bookableresourcebookingquicknote_Select, { statecode: msdyn_bookableresourcebookingquicknote_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_bookableresourcebookingquicknote_Select, { statuscode: msdyn_bookableresourcebookingquicknote_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_bookableresourcebookingquicknote_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_bookableresourcebookingquicknote_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_bookableresourcebookingquicknote_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_bookableresourcebookingquicknote_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_bookableresourcebookingquicknoteid: XQW.Guid;
  msdyn_imageid: XQW.Guid;
  msdyn_name: string;
  msdyn_order: number;
  msdyn_quicknote_lookup_entity_guid: XQW.Guid;
  msdyn_text: string;
  msdyn_type: msdyn_quicknote_type;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_bookableresourcebookingquicknote_statecode;
  statuscode: msdyn_bookableresourcebookingquicknote_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_bookableresourcebookingquicknote_Expand {
  createdby: WebExpand<msdyn_bookableresourcebookingquicknote_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_bookableresourcebookingquicknote_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_bookableresourcebookingquicknote_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_bookableresourcebookingquicknote_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_bookableresourcebookingquicknote_AsyncOperations: WebExpand<msdyn_bookableresourcebookingquicknote_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_bookableresourcebookingquicknote_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_bookableresourcebookingquicknote_BulkDeleteFailures: WebExpand<msdyn_bookableresourcebookingquicknote_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_bookableresourcebookingquicknote_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_bookableresourcebookingquicknote_DuplicateBaseRecord: WebExpand<msdyn_bookableresourcebookingquicknote_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_bookableresourcebookingquicknote_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_bookableresourcebookingquicknote_DuplicateMatchingRecord: WebExpand<msdyn_bookableresourcebookingquicknote_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_bookableresourcebookingquicknote_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_bookableresourcebookingquicknote_FileAttachments: WebExpand<msdyn_bookableresourcebookingquicknote_Expand, FileAttachment_Select, FileAttachment_Filter, { msdyn_bookableresourcebookingquicknote_FileAttachments: FileAttachment_Result[] }>;
  msdyn_bookableresourcebookingquicknote_MailboxTrackingFolders: WebExpand<msdyn_bookableresourcebookingquicknote_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_bookableresourcebookingquicknote_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_bookableresourcebookingquicknote_PrincipalObjectAttributeAccesses: WebExpand<msdyn_bookableresourcebookingquicknote_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_bookableresourcebookingquicknote_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_bookableresourcebookingquicknote_ProcessSession: WebExpand<msdyn_bookableresourcebookingquicknote_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_bookableresourcebookingquicknote_ProcessSession: ProcessSession_Result[] }>;
  msdyn_bookableresourcebookingquicknote_SyncErrors: WebExpand<msdyn_bookableresourcebookingquicknote_Expand, SyncError_Select, SyncError_Filter, { msdyn_bookableresourcebookingquicknote_SyncErrors: SyncError_Result[] }>;
  msdyn_bookableresourcebookingquicknote_UserEntityInstanceDatas: WebExpand<msdyn_bookableresourcebookingquicknote_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_bookableresourcebookingquicknote_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_file: WebExpand<msdyn_bookableresourcebookingquicknote_Expand, FileAttachment_Select, FileAttachment_Filter, { msdyn_file: FileAttachment_Result }>;
  msdyn_imageid_imagedescriptor: WebExpand<msdyn_bookableresourcebookingquicknote_Expand, ImageDescriptor_Select, ImageDescriptor_Filter, { msdyn_imageid_imagedescriptor: ImageDescriptor_Result }>;
  msdyn_quicknote_lookup_entity: WebExpand<msdyn_bookableresourcebookingquicknote_Expand, BookableResourceBooking_Select, BookableResourceBooking_Filter, { msdyn_quicknote_lookup_entity: BookableResourceBooking_Result }>;
  ownerid: WebExpand<msdyn_bookableresourcebookingquicknote_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_bookableresourcebookingquicknote_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_bookableresourcebookingquicknote_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_bookableresourcebookingquicknote_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_bookableresourcebookingquicknote_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_quicknote_lookup_entity_formatted?: string;
  msdyn_type_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_bookableresourcebookingquicknote_Result extends msdyn_bookableresourcebookingquicknote_Base, msdyn_bookableresourcebookingquicknote_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_quicknote_lookup_entity_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_bookableresourcebookingquicknote_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_file: WebMappingRetrieve<FileAttachment_Select,FileAttachment_Expand,FileAttachment_Filter,FileAttachment_Fixed,FileAttachment_Result,FileAttachment_FormattedResult>;
  msdyn_imageid_imagedescriptor: WebMappingRetrieve<ImageDescriptor_Select,ImageDescriptor_Expand,ImageDescriptor_Filter,ImageDescriptor_Fixed,ImageDescriptor_Result,ImageDescriptor_FormattedResult>;
  msdyn_quicknote_lookup_entity: WebMappingRetrieve<BookableResourceBooking_Select,BookableResourceBooking_Expand,BookableResourceBooking_Filter,BookableResourceBooking_Fixed,BookableResourceBooking_Result,BookableResourceBooking_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_bookableresourcebookingquicknote_RelatedMany {
  msdyn_bookableresourcebookingquicknote_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_bookableresourcebookingquicknote_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_bookableresourcebookingquicknote_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_bookableresourcebookingquicknote_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_bookableresourcebookingquicknote_FileAttachments: WebMappingRetrieve<FileAttachment_Select,FileAttachment_Expand,FileAttachment_Filter,FileAttachment_Fixed,FileAttachment_Result,FileAttachment_FormattedResult>;
  msdyn_bookableresourcebookingquicknote_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_bookableresourcebookingquicknote_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_bookableresourcebookingquicknote_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_bookableresourcebookingquicknote_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_bookableresourcebookingquicknote_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_bookableresourcebookingquicknotes: WebMappingRetrieve<msdyn_bookableresourcebookingquicknote_Select,msdyn_bookableresourcebookingquicknote_Expand,msdyn_bookableresourcebookingquicknote_Filter,msdyn_bookableresourcebookingquicknote_Fixed,msdyn_bookableresourcebookingquicknote_Result,msdyn_bookableresourcebookingquicknote_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_bookableresourcebookingquicknotes: WebMappingRelated<msdyn_bookableresourcebookingquicknote_RelatedOne,msdyn_bookableresourcebookingquicknote_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_bookableresourcebookingquicknotes: WebMappingCUDA<msdyn_bookableresourcebookingquicknote_Create,msdyn_bookableresourcebookingquicknote_Update,msdyn_bookableresourcebookingquicknote_Select>;
}
