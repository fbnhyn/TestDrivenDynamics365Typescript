interface msdyn_AIOdImage_Base extends WebEntity {
  createdon?: Date | null;
  entityimageid?: string | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_aiodimageid?: string | null;
  msdyn_checksum?: string | null;
  msdyn_description?: string | null;
  msdyn_metadata?: string | null;
  msdyn_name?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_aiodimage_statecode | null;
  statuscode?: msdyn_aiodimage_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_AIOdImage_Relationships {
  entityimageid_imagedescriptor?: ImageDescriptor_Result | null;
  msdyn_aiodimage_Annotations?: Annotation_Result[] | null;
  msdyn_aiodimage_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_aiodimage_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_aiodimage_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_aiodimage_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_aiodimage_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_aiodimage_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_aiodimage_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_aiodimage_SyncErrors?: SyncError_Result[] | null;
  msdyn_aiodimage_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  msdyn_aiodimage_msdyn_aiodtrainingimage?: msdyn_AIOdTrainingImage_Result[] | null;
}
interface msdyn_AIOdImage extends msdyn_AIOdImage_Base, msdyn_AIOdImage_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_AIOdImage_Create extends msdyn_AIOdImage {
}
interface msdyn_AIOdImage_Update extends msdyn_AIOdImage {
}
interface msdyn_AIOdImage_Select {
  createdby_guid: WebAttribute<msdyn_AIOdImage_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_AIOdImage_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_AIOdImage_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  entityimageid: WebAttribute<msdyn_AIOdImage_Select, { entityimageid: string | null }, {  }>;
  importsequencenumber: WebAttribute<msdyn_AIOdImage_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_AIOdImage_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_AIOdImage_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_AIOdImage_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_aiodimageid: WebAttribute<msdyn_AIOdImage_Select, { msdyn_aiodimageid: string | null }, {  }>;
  msdyn_checksum: WebAttribute<msdyn_AIOdImage_Select, { msdyn_checksum: string | null }, {  }>;
  msdyn_description: WebAttribute<msdyn_AIOdImage_Select, { msdyn_description: string | null }, {  }>;
  msdyn_metadata: WebAttribute<msdyn_AIOdImage_Select, { msdyn_metadata: string | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_AIOdImage_Select, { msdyn_name: string | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_AIOdImage_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_AIOdImage_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_AIOdImage_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_AIOdImage_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_AIOdImage_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_AIOdImage_Select, { statecode: msdyn_aiodimage_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_AIOdImage_Select, { statuscode: msdyn_aiodimage_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_AIOdImage_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_AIOdImage_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_AIOdImage_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_AIOdImage_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  entityimageid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_aiodimageid: XQW.Guid;
  msdyn_checksum: string;
  msdyn_description: string;
  msdyn_metadata: string;
  msdyn_name: string;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_aiodimage_statecode;
  statuscode: msdyn_aiodimage_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_AIOdImage_Expand {
  createdby: WebExpand<msdyn_AIOdImage_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_AIOdImage_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  entityimageid_imagedescriptor: WebExpand<msdyn_AIOdImage_Expand, ImageDescriptor_Select, ImageDescriptor_Filter, { entityimageid_imagedescriptor: ImageDescriptor_Result }>;
  modifiedby: WebExpand<msdyn_AIOdImage_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_AIOdImage_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_aiodimage_Annotations: WebExpand<msdyn_AIOdImage_Expand, Annotation_Select, Annotation_Filter, { msdyn_aiodimage_Annotations: Annotation_Result[] }>;
  msdyn_aiodimage_AsyncOperations: WebExpand<msdyn_AIOdImage_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_aiodimage_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_aiodimage_BulkDeleteFailures: WebExpand<msdyn_AIOdImage_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_aiodimage_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_aiodimage_DuplicateBaseRecord: WebExpand<msdyn_AIOdImage_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_aiodimage_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_aiodimage_DuplicateMatchingRecord: WebExpand<msdyn_AIOdImage_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_aiodimage_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_aiodimage_MailboxTrackingFolders: WebExpand<msdyn_AIOdImage_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_aiodimage_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_aiodimage_PrincipalObjectAttributeAccesses: WebExpand<msdyn_AIOdImage_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_aiodimage_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_aiodimage_ProcessSession: WebExpand<msdyn_AIOdImage_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_aiodimage_ProcessSession: ProcessSession_Result[] }>;
  msdyn_aiodimage_SyncErrors: WebExpand<msdyn_AIOdImage_Expand, SyncError_Select, SyncError_Filter, { msdyn_aiodimage_SyncErrors: SyncError_Result[] }>;
  msdyn_aiodimage_UserEntityInstanceDatas: WebExpand<msdyn_AIOdImage_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_aiodimage_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_aiodimage_msdyn_aiodtrainingimage: WebExpand<msdyn_AIOdImage_Expand, msdyn_AIOdTrainingImage_Select, msdyn_AIOdTrainingImage_Filter, { msdyn_aiodimage_msdyn_aiodtrainingimage: msdyn_AIOdTrainingImage_Result[] }>;
  ownerid: WebExpand<msdyn_AIOdImage_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_AIOdImage_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_AIOdImage_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_AIOdImage_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_AIOdImage_FormattedResult {
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
interface msdyn_AIOdImage_Result extends msdyn_AIOdImage_Base, msdyn_AIOdImage_Relationships {
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
interface msdyn_AIOdImage_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  entityimageid_imagedescriptor: WebMappingRetrieve<ImageDescriptor_Select,ImageDescriptor_Expand,ImageDescriptor_Filter,ImageDescriptor_Fixed,ImageDescriptor_Result,ImageDescriptor_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_AIOdImage_RelatedMany {
  msdyn_aiodimage_Annotations: WebMappingRetrieve<Annotation_Select,Annotation_Expand,Annotation_Filter,Annotation_Fixed,Annotation_Result,Annotation_FormattedResult>;
  msdyn_aiodimage_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_aiodimage_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_aiodimage_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_aiodimage_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_aiodimage_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_aiodimage_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_aiodimage_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_aiodimage_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_aiodimage_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  msdyn_aiodimage_msdyn_aiodtrainingimage: WebMappingRetrieve<msdyn_AIOdTrainingImage_Select,msdyn_AIOdTrainingImage_Expand,msdyn_AIOdTrainingImage_Filter,msdyn_AIOdTrainingImage_Fixed,msdyn_AIOdTrainingImage_Result,msdyn_AIOdTrainingImage_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_aiodimages: WebMappingRetrieve<msdyn_AIOdImage_Select,msdyn_AIOdImage_Expand,msdyn_AIOdImage_Filter,msdyn_AIOdImage_Fixed,msdyn_AIOdImage_Result,msdyn_AIOdImage_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_aiodimages: WebMappingRelated<msdyn_AIOdImage_RelatedOne,msdyn_AIOdImage_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_aiodimages: WebMappingCUDA<msdyn_AIOdImage_Create,msdyn_AIOdImage_Update,msdyn_AIOdImage_Select>;
}
