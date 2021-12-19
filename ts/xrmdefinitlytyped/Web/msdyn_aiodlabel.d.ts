interface msdyn_AIOdLabel_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_aiodlabelid?: string | null;
  msdyn_labelstring?: string | null;
  msdyn_name?: string | null;
  msdyn_sourceattributelogicalname?: string | null;
  msdyn_sourceentitysetname?: string | null;
  msdyn_sourcerecordid?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_aiodlabel_statecode | null;
  statuscode?: msdyn_aiodlabel_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_AIOdLabel_Relationships {
  msdyn_aiodlabel_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_aiodlabel_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_aiodlabel_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_aiodlabel_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_aiodlabel_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_aiodlabel_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_aiodlabel_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_aiodlabel_SyncErrors?: SyncError_Result[] | null;
  msdyn_aiodlabel_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  msdyn_aiodlabel_msdyn_aiconfiguration?: msdyn_AIConfiguration_Result[] | null;
  msdyn_aiodlabel_msdyn_aiodtrainingboundingbox?: msdyn_AIOdTrainingBoundingBox_Result[] | null;
}
interface msdyn_AIOdLabel extends msdyn_AIOdLabel_Base, msdyn_AIOdLabel_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_AIOdLabel_Create extends msdyn_AIOdLabel {
}
interface msdyn_AIOdLabel_Update extends msdyn_AIOdLabel {
}
interface msdyn_AIOdLabel_Select {
  createdby_guid: WebAttribute<msdyn_AIOdLabel_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_AIOdLabel_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_AIOdLabel_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_AIOdLabel_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_AIOdLabel_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_AIOdLabel_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_AIOdLabel_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_aiodlabelid: WebAttribute<msdyn_AIOdLabel_Select, { msdyn_aiodlabelid: string | null }, {  }>;
  msdyn_labelstring: WebAttribute<msdyn_AIOdLabel_Select, { msdyn_labelstring: string | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_AIOdLabel_Select, { msdyn_name: string | null }, {  }>;
  msdyn_sourceattributelogicalname: WebAttribute<msdyn_AIOdLabel_Select, { msdyn_sourceattributelogicalname: string | null }, {  }>;
  msdyn_sourceentitysetname: WebAttribute<msdyn_AIOdLabel_Select, { msdyn_sourceentitysetname: string | null }, {  }>;
  msdyn_sourcerecordid: WebAttribute<msdyn_AIOdLabel_Select, { msdyn_sourcerecordid: string | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_AIOdLabel_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_AIOdLabel_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_AIOdLabel_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_AIOdLabel_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_AIOdLabel_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_AIOdLabel_Select, { statecode: msdyn_aiodlabel_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_AIOdLabel_Select, { statuscode: msdyn_aiodlabel_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_AIOdLabel_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_AIOdLabel_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_AIOdLabel_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_AIOdLabel_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_aiodlabelid: XQW.Guid;
  msdyn_labelstring: string;
  msdyn_name: string;
  msdyn_sourceattributelogicalname: string;
  msdyn_sourceentitysetname: string;
  msdyn_sourcerecordid: string;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_aiodlabel_statecode;
  statuscode: msdyn_aiodlabel_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_AIOdLabel_Expand {
  createdby: WebExpand<msdyn_AIOdLabel_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_AIOdLabel_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_AIOdLabel_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_AIOdLabel_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_aiodlabel_AsyncOperations: WebExpand<msdyn_AIOdLabel_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_aiodlabel_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_aiodlabel_BulkDeleteFailures: WebExpand<msdyn_AIOdLabel_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_aiodlabel_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_aiodlabel_DuplicateBaseRecord: WebExpand<msdyn_AIOdLabel_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_aiodlabel_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_aiodlabel_DuplicateMatchingRecord: WebExpand<msdyn_AIOdLabel_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_aiodlabel_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_aiodlabel_MailboxTrackingFolders: WebExpand<msdyn_AIOdLabel_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_aiodlabel_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_aiodlabel_PrincipalObjectAttributeAccesses: WebExpand<msdyn_AIOdLabel_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_aiodlabel_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_aiodlabel_ProcessSession: WebExpand<msdyn_AIOdLabel_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_aiodlabel_ProcessSession: ProcessSession_Result[] }>;
  msdyn_aiodlabel_SyncErrors: WebExpand<msdyn_AIOdLabel_Expand, SyncError_Select, SyncError_Filter, { msdyn_aiodlabel_SyncErrors: SyncError_Result[] }>;
  msdyn_aiodlabel_UserEntityInstanceDatas: WebExpand<msdyn_AIOdLabel_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_aiodlabel_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_aiodlabel_msdyn_aiconfiguration: WebExpand<msdyn_AIOdLabel_Expand, msdyn_AIConfiguration_Select, msdyn_AIConfiguration_Filter, { msdyn_aiodlabel_msdyn_aiconfiguration: msdyn_AIConfiguration_Result[] }>;
  msdyn_aiodlabel_msdyn_aiodtrainingboundingbox: WebExpand<msdyn_AIOdLabel_Expand, msdyn_AIOdTrainingBoundingBox_Select, msdyn_AIOdTrainingBoundingBox_Filter, { msdyn_aiodlabel_msdyn_aiodtrainingboundingbox: msdyn_AIOdTrainingBoundingBox_Result[] }>;
  ownerid: WebExpand<msdyn_AIOdLabel_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_AIOdLabel_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_AIOdLabel_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_AIOdLabel_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_AIOdLabel_FormattedResult {
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
interface msdyn_AIOdLabel_Result extends msdyn_AIOdLabel_Base, msdyn_AIOdLabel_Relationships {
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
interface msdyn_AIOdLabel_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_AIOdLabel_RelatedMany {
  msdyn_aiodlabel_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_aiodlabel_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_aiodlabel_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_aiodlabel_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_aiodlabel_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_aiodlabel_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_aiodlabel_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_aiodlabel_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_aiodlabel_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  msdyn_aiodlabel_msdyn_aiconfiguration: WebMappingRetrieve<msdyn_AIConfiguration_Select,msdyn_AIConfiguration_Expand,msdyn_AIConfiguration_Filter,msdyn_AIConfiguration_Fixed,msdyn_AIConfiguration_Result,msdyn_AIConfiguration_FormattedResult>;
  msdyn_aiodlabel_msdyn_aiodtrainingboundingbox: WebMappingRetrieve<msdyn_AIOdTrainingBoundingBox_Select,msdyn_AIOdTrainingBoundingBox_Expand,msdyn_AIOdTrainingBoundingBox_Filter,msdyn_AIOdTrainingBoundingBox_Fixed,msdyn_AIOdTrainingBoundingBox_Result,msdyn_AIOdTrainingBoundingBox_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_aiodlabels: WebMappingRetrieve<msdyn_AIOdLabel_Select,msdyn_AIOdLabel_Expand,msdyn_AIOdLabel_Filter,msdyn_AIOdLabel_Fixed,msdyn_AIOdLabel_Result,msdyn_AIOdLabel_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_aiodlabels: WebMappingRelated<msdyn_AIOdLabel_RelatedOne,msdyn_AIOdLabel_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_aiodlabels: WebMappingCUDA<msdyn_AIOdLabel_Create,msdyn_AIOdLabel_Update,msdyn_AIOdLabel_Select>;
}
