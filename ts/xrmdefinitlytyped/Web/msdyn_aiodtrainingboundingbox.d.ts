interface msdyn_AIOdTrainingBoundingBox_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_aiodtrainingboundingboxid?: string | null;
  msdyn_height?: number | null;
  msdyn_left?: number | null;
  msdyn_name?: string | null;
  msdyn_top?: number | null;
  msdyn_width?: number | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_aiodtrainingboundingbox_statecode | null;
  statuscode?: msdyn_aiodtrainingboundingbox_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_AIOdTrainingBoundingBox_Relationships {
  msdyn_AIOdLabelId?: msdyn_AIOdLabel_Result | null;
  msdyn_AIOdTrainingImageId?: msdyn_AIOdTrainingImage_Result | null;
  msdyn_aiodtrainingboundingbox_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_aiodtrainingboundingbox_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_aiodtrainingboundingbox_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_aiodtrainingboundingbox_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_aiodtrainingboundingbox_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_aiodtrainingboundingbox_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_aiodtrainingboundingbox_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_aiodtrainingboundingbox_SyncErrors?: SyncError_Result[] | null;
  msdyn_aiodtrainingboundingbox_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_AIOdTrainingBoundingBox extends msdyn_AIOdTrainingBoundingBox_Base, msdyn_AIOdTrainingBoundingBox_Relationships {
  msdyn_AIOdLabelId_bind$msdyn_aiodlabels?: string | null;
  msdyn_AIOdTrainingImageId_bind$msdyn_aiodtrainingimages?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_AIOdTrainingBoundingBox_Create extends msdyn_AIOdTrainingBoundingBox {
}
interface msdyn_AIOdTrainingBoundingBox_Update extends msdyn_AIOdTrainingBoundingBox {
}
interface msdyn_AIOdTrainingBoundingBox_Select {
  createdby_guid: WebAttribute<msdyn_AIOdTrainingBoundingBox_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_AIOdTrainingBoundingBox_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_AIOdTrainingBoundingBox_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_AIOdTrainingBoundingBox_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_AIOdTrainingBoundingBox_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_AIOdTrainingBoundingBox_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_AIOdTrainingBoundingBox_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_aiodlabelid_guid: WebAttribute<msdyn_AIOdTrainingBoundingBox_Select, { msdyn_aiodlabelid_guid: string | null }, { msdyn_aiodlabelid_formatted?: string }>;
  msdyn_aiodtrainingboundingboxid: WebAttribute<msdyn_AIOdTrainingBoundingBox_Select, { msdyn_aiodtrainingboundingboxid: string | null }, {  }>;
  msdyn_aiodtrainingimageid_guid: WebAttribute<msdyn_AIOdTrainingBoundingBox_Select, { msdyn_aiodtrainingimageid_guid: string | null }, { msdyn_aiodtrainingimageid_formatted?: string }>;
  msdyn_height: WebAttribute<msdyn_AIOdTrainingBoundingBox_Select, { msdyn_height: number | null }, {  }>;
  msdyn_left: WebAttribute<msdyn_AIOdTrainingBoundingBox_Select, { msdyn_left: number | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_AIOdTrainingBoundingBox_Select, { msdyn_name: string | null }, {  }>;
  msdyn_top: WebAttribute<msdyn_AIOdTrainingBoundingBox_Select, { msdyn_top: number | null }, {  }>;
  msdyn_width: WebAttribute<msdyn_AIOdTrainingBoundingBox_Select, { msdyn_width: number | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_AIOdTrainingBoundingBox_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_AIOdTrainingBoundingBox_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_AIOdTrainingBoundingBox_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_AIOdTrainingBoundingBox_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_AIOdTrainingBoundingBox_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_AIOdTrainingBoundingBox_Select, { statecode: msdyn_aiodtrainingboundingbox_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_AIOdTrainingBoundingBox_Select, { statuscode: msdyn_aiodtrainingboundingbox_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_AIOdTrainingBoundingBox_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_AIOdTrainingBoundingBox_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_AIOdTrainingBoundingBox_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_AIOdTrainingBoundingBox_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_aiodlabelid_guid: XQW.Guid;
  msdyn_aiodtrainingboundingboxid: XQW.Guid;
  msdyn_aiodtrainingimageid_guid: XQW.Guid;
  msdyn_height: number;
  msdyn_left: number;
  msdyn_name: string;
  msdyn_top: number;
  msdyn_width: number;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_aiodtrainingboundingbox_statecode;
  statuscode: msdyn_aiodtrainingboundingbox_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_AIOdTrainingBoundingBox_Expand {
  createdby: WebExpand<msdyn_AIOdTrainingBoundingBox_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_AIOdTrainingBoundingBox_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_AIOdTrainingBoundingBox_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_AIOdTrainingBoundingBox_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_AIOdLabelId: WebExpand<msdyn_AIOdTrainingBoundingBox_Expand, msdyn_AIOdLabel_Select, msdyn_AIOdLabel_Filter, { msdyn_AIOdLabelId: msdyn_AIOdLabel_Result }>;
  msdyn_AIOdTrainingImageId: WebExpand<msdyn_AIOdTrainingBoundingBox_Expand, msdyn_AIOdTrainingImage_Select, msdyn_AIOdTrainingImage_Filter, { msdyn_AIOdTrainingImageId: msdyn_AIOdTrainingImage_Result }>;
  msdyn_aiodtrainingboundingbox_AsyncOperations: WebExpand<msdyn_AIOdTrainingBoundingBox_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_aiodtrainingboundingbox_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_aiodtrainingboundingbox_BulkDeleteFailures: WebExpand<msdyn_AIOdTrainingBoundingBox_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_aiodtrainingboundingbox_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_aiodtrainingboundingbox_DuplicateBaseRecord: WebExpand<msdyn_AIOdTrainingBoundingBox_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_aiodtrainingboundingbox_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_aiodtrainingboundingbox_DuplicateMatchingRecord: WebExpand<msdyn_AIOdTrainingBoundingBox_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_aiodtrainingboundingbox_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_aiodtrainingboundingbox_MailboxTrackingFolders: WebExpand<msdyn_AIOdTrainingBoundingBox_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_aiodtrainingboundingbox_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_aiodtrainingboundingbox_PrincipalObjectAttributeAccesses: WebExpand<msdyn_AIOdTrainingBoundingBox_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_aiodtrainingboundingbox_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_aiodtrainingboundingbox_ProcessSession: WebExpand<msdyn_AIOdTrainingBoundingBox_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_aiodtrainingboundingbox_ProcessSession: ProcessSession_Result[] }>;
  msdyn_aiodtrainingboundingbox_SyncErrors: WebExpand<msdyn_AIOdTrainingBoundingBox_Expand, SyncError_Select, SyncError_Filter, { msdyn_aiodtrainingboundingbox_SyncErrors: SyncError_Result[] }>;
  msdyn_aiodtrainingboundingbox_UserEntityInstanceDatas: WebExpand<msdyn_AIOdTrainingBoundingBox_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_aiodtrainingboundingbox_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  ownerid: WebExpand<msdyn_AIOdTrainingBoundingBox_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_AIOdTrainingBoundingBox_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_AIOdTrainingBoundingBox_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_AIOdTrainingBoundingBox_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_AIOdTrainingBoundingBox_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_aiodlabelid_formatted?: string;
  msdyn_aiodtrainingimageid_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_AIOdTrainingBoundingBox_Result extends msdyn_AIOdTrainingBoundingBox_Base, msdyn_AIOdTrainingBoundingBox_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_aiodlabelid_guid: string | null;
  msdyn_aiodtrainingimageid_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_AIOdTrainingBoundingBox_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_AIOdLabelId: WebMappingRetrieve<msdyn_AIOdLabel_Select,msdyn_AIOdLabel_Expand,msdyn_AIOdLabel_Filter,msdyn_AIOdLabel_Fixed,msdyn_AIOdLabel_Result,msdyn_AIOdLabel_FormattedResult>;
  msdyn_AIOdTrainingImageId: WebMappingRetrieve<msdyn_AIOdTrainingImage_Select,msdyn_AIOdTrainingImage_Expand,msdyn_AIOdTrainingImage_Filter,msdyn_AIOdTrainingImage_Fixed,msdyn_AIOdTrainingImage_Result,msdyn_AIOdTrainingImage_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_AIOdTrainingBoundingBox_RelatedMany {
  msdyn_aiodtrainingboundingbox_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_aiodtrainingboundingbox_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_aiodtrainingboundingbox_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_aiodtrainingboundingbox_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_aiodtrainingboundingbox_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_aiodtrainingboundingbox_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_aiodtrainingboundingbox_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_aiodtrainingboundingbox_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_aiodtrainingboundingbox_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_aiodtrainingboundingboxes: WebMappingRetrieve<msdyn_AIOdTrainingBoundingBox_Select,msdyn_AIOdTrainingBoundingBox_Expand,msdyn_AIOdTrainingBoundingBox_Filter,msdyn_AIOdTrainingBoundingBox_Fixed,msdyn_AIOdTrainingBoundingBox_Result,msdyn_AIOdTrainingBoundingBox_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_aiodtrainingboundingboxes: WebMappingRelated<msdyn_AIOdTrainingBoundingBox_RelatedOne,msdyn_AIOdTrainingBoundingBox_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_aiodtrainingboundingboxes: WebMappingCUDA<msdyn_AIOdTrainingBoundingBox_Create,msdyn_AIOdTrainingBoundingBox_Update,msdyn_AIOdTrainingBoundingBox_Select>;
}
