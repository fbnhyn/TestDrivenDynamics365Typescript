interface msdyn_AIOdTrainingImage_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_aiodtrainingimageid?: string | null;
  msdyn_lastmodifieddate?: Date | null;
  msdyn_name?: string | null;
  msdyn_sourcetype?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_aiodtrainingimage_statecode | null;
  statuscode?: msdyn_aiodtrainingimage_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_AIOdTrainingImage_Relationships {
  msdyn_AIConfigurationId?: msdyn_AIConfiguration_Result | null;
  msdyn_AIOdImageId?: msdyn_AIOdImage_Result | null;
  msdyn_aiodtrainingimage_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_aiodtrainingimage_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_aiodtrainingimage_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_aiodtrainingimage_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_aiodtrainingimage_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_aiodtrainingimage_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_aiodtrainingimage_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_aiodtrainingimage_SyncErrors?: SyncError_Result[] | null;
  msdyn_aiodtrainingimage_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  msdyn_aiodtrainingimage_msdyn_aiodtrainingboundingbox?: msdyn_AIOdTrainingBoundingBox_Result[] | null;
}
interface msdyn_AIOdTrainingImage extends msdyn_AIOdTrainingImage_Base, msdyn_AIOdTrainingImage_Relationships {
  msdyn_AIConfigurationId_bind$msdyn_aiconfigurations?: string | null;
  msdyn_AIOdImageId_bind$msdyn_aiodimages?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_AIOdTrainingImage_Create extends msdyn_AIOdTrainingImage {
}
interface msdyn_AIOdTrainingImage_Update extends msdyn_AIOdTrainingImage {
}
interface msdyn_AIOdTrainingImage_Select {
  createdby_guid: WebAttribute<msdyn_AIOdTrainingImage_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_AIOdTrainingImage_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_AIOdTrainingImage_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_AIOdTrainingImage_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_AIOdTrainingImage_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_AIOdTrainingImage_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_AIOdTrainingImage_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_aiconfigurationid_guid: WebAttribute<msdyn_AIOdTrainingImage_Select, { msdyn_aiconfigurationid_guid: string | null }, { msdyn_aiconfigurationid_formatted?: string }>;
  msdyn_aiodimageid_guid: WebAttribute<msdyn_AIOdTrainingImage_Select, { msdyn_aiodimageid_guid: string | null }, { msdyn_aiodimageid_formatted?: string }>;
  msdyn_aiodtrainingimageid: WebAttribute<msdyn_AIOdTrainingImage_Select, { msdyn_aiodtrainingimageid: string | null }, {  }>;
  msdyn_lastmodifieddate: WebAttribute<msdyn_AIOdTrainingImage_Select, { msdyn_lastmodifieddate: Date | null }, { msdyn_lastmodifieddate_formatted?: string }>;
  msdyn_name: WebAttribute<msdyn_AIOdTrainingImage_Select, { msdyn_name: string | null }, {  }>;
  msdyn_sourcetype: WebAttribute<msdyn_AIOdTrainingImage_Select, { msdyn_sourcetype: string | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_AIOdTrainingImage_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_AIOdTrainingImage_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_AIOdTrainingImage_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_AIOdTrainingImage_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_AIOdTrainingImage_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_AIOdTrainingImage_Select, { statecode: msdyn_aiodtrainingimage_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_AIOdTrainingImage_Select, { statuscode: msdyn_aiodtrainingimage_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_AIOdTrainingImage_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_AIOdTrainingImage_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_AIOdTrainingImage_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_AIOdTrainingImage_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_aiconfigurationid_guid: XQW.Guid;
  msdyn_aiodimageid_guid: XQW.Guid;
  msdyn_aiodtrainingimageid: XQW.Guid;
  msdyn_lastmodifieddate: Date;
  msdyn_name: string;
  msdyn_sourcetype: string;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_aiodtrainingimage_statecode;
  statuscode: msdyn_aiodtrainingimage_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_AIOdTrainingImage_Expand {
  createdby: WebExpand<msdyn_AIOdTrainingImage_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_AIOdTrainingImage_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_AIOdTrainingImage_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_AIOdTrainingImage_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_AIConfigurationId: WebExpand<msdyn_AIOdTrainingImage_Expand, msdyn_AIConfiguration_Select, msdyn_AIConfiguration_Filter, { msdyn_AIConfigurationId: msdyn_AIConfiguration_Result }>;
  msdyn_AIOdImageId: WebExpand<msdyn_AIOdTrainingImage_Expand, msdyn_AIOdImage_Select, msdyn_AIOdImage_Filter, { msdyn_AIOdImageId: msdyn_AIOdImage_Result }>;
  msdyn_aiodtrainingimage_AsyncOperations: WebExpand<msdyn_AIOdTrainingImage_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_aiodtrainingimage_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_aiodtrainingimage_BulkDeleteFailures: WebExpand<msdyn_AIOdTrainingImage_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_aiodtrainingimage_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_aiodtrainingimage_DuplicateBaseRecord: WebExpand<msdyn_AIOdTrainingImage_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_aiodtrainingimage_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_aiodtrainingimage_DuplicateMatchingRecord: WebExpand<msdyn_AIOdTrainingImage_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_aiodtrainingimage_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_aiodtrainingimage_MailboxTrackingFolders: WebExpand<msdyn_AIOdTrainingImage_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_aiodtrainingimage_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_aiodtrainingimage_PrincipalObjectAttributeAccesses: WebExpand<msdyn_AIOdTrainingImage_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_aiodtrainingimage_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_aiodtrainingimage_ProcessSession: WebExpand<msdyn_AIOdTrainingImage_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_aiodtrainingimage_ProcessSession: ProcessSession_Result[] }>;
  msdyn_aiodtrainingimage_SyncErrors: WebExpand<msdyn_AIOdTrainingImage_Expand, SyncError_Select, SyncError_Filter, { msdyn_aiodtrainingimage_SyncErrors: SyncError_Result[] }>;
  msdyn_aiodtrainingimage_UserEntityInstanceDatas: WebExpand<msdyn_AIOdTrainingImage_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_aiodtrainingimage_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_aiodtrainingimage_msdyn_aiodtrainingboundingbox: WebExpand<msdyn_AIOdTrainingImage_Expand, msdyn_AIOdTrainingBoundingBox_Select, msdyn_AIOdTrainingBoundingBox_Filter, { msdyn_aiodtrainingimage_msdyn_aiodtrainingboundingbox: msdyn_AIOdTrainingBoundingBox_Result[] }>;
  ownerid: WebExpand<msdyn_AIOdTrainingImage_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_AIOdTrainingImage_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_AIOdTrainingImage_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_AIOdTrainingImage_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_AIOdTrainingImage_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_aiconfigurationid_formatted?: string;
  msdyn_aiodimageid_formatted?: string;
  msdyn_lastmodifieddate_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_AIOdTrainingImage_Result extends msdyn_AIOdTrainingImage_Base, msdyn_AIOdTrainingImage_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_aiconfigurationid_guid: string | null;
  msdyn_aiodimageid_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_AIOdTrainingImage_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_AIConfigurationId: WebMappingRetrieve<msdyn_AIConfiguration_Select,msdyn_AIConfiguration_Expand,msdyn_AIConfiguration_Filter,msdyn_AIConfiguration_Fixed,msdyn_AIConfiguration_Result,msdyn_AIConfiguration_FormattedResult>;
  msdyn_AIOdImageId: WebMappingRetrieve<msdyn_AIOdImage_Select,msdyn_AIOdImage_Expand,msdyn_AIOdImage_Filter,msdyn_AIOdImage_Fixed,msdyn_AIOdImage_Result,msdyn_AIOdImage_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_AIOdTrainingImage_RelatedMany {
  msdyn_aiodtrainingimage_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_aiodtrainingimage_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_aiodtrainingimage_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_aiodtrainingimage_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_aiodtrainingimage_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_aiodtrainingimage_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_aiodtrainingimage_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_aiodtrainingimage_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_aiodtrainingimage_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  msdyn_aiodtrainingimage_msdyn_aiodtrainingboundingbox: WebMappingRetrieve<msdyn_AIOdTrainingBoundingBox_Select,msdyn_AIOdTrainingBoundingBox_Expand,msdyn_AIOdTrainingBoundingBox_Filter,msdyn_AIOdTrainingBoundingBox_Fixed,msdyn_AIOdTrainingBoundingBox_Result,msdyn_AIOdTrainingBoundingBox_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_aiodtrainingimages: WebMappingRetrieve<msdyn_AIOdTrainingImage_Select,msdyn_AIOdTrainingImage_Expand,msdyn_AIOdTrainingImage_Filter,msdyn_AIOdTrainingImage_Fixed,msdyn_AIOdTrainingImage_Result,msdyn_AIOdTrainingImage_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_aiodtrainingimages: WebMappingRelated<msdyn_AIOdTrainingImage_RelatedOne,msdyn_AIOdTrainingImage_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_aiodtrainingimages: WebMappingCUDA<msdyn_AIOdTrainingImage_Create,msdyn_AIOdTrainingImage_Update,msdyn_AIOdTrainingImage_Select>;
}
