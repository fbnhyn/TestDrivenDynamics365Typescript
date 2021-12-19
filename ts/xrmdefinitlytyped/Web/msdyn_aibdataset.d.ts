interface msdyn_AIBDataset_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_aibdatasetid?: string | null;
  msdyn_metadata?: string | null;
  msdyn_name?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_aibdataset_statecode | null;
  statuscode?: msdyn_aibdataset_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_AIBDataset_Relationships {
  msdyn_AIBDatasetFile_msdyn_AIBDatas?: msdyn_AIBDatasetFile_Result[] | null;
  msdyn_AIBDatasetRecord_msdyn_AIBDataset?: msdyn_AIBDatasetRecord_Result[] | null;
  msdyn_AIBDatasetsContainerId?: msdyn_AIBDatasetsContainer_Result | null;
  msdyn_aibdataset_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_aibdataset_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_aibdataset_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_aibdataset_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_aibdataset_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_aibdataset_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_aibdataset_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_aibdataset_SyncErrors?: SyncError_Result[] | null;
  msdyn_aibdataset_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_AIBDataset extends msdyn_AIBDataset_Base, msdyn_AIBDataset_Relationships {
  msdyn_AIBDatasetsContainerId_bind$msdyn_aibdatasetscontainers?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_AIBDataset_Create extends msdyn_AIBDataset {
}
interface msdyn_AIBDataset_Update extends msdyn_AIBDataset {
}
interface msdyn_AIBDataset_Select {
  createdby_guid: WebAttribute<msdyn_AIBDataset_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_AIBDataset_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_AIBDataset_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_AIBDataset_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_AIBDataset_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_AIBDataset_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_AIBDataset_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_aibdatasetid: WebAttribute<msdyn_AIBDataset_Select, { msdyn_aibdatasetid: string | null }, {  }>;
  msdyn_aibdatasetscontainerid_guid: WebAttribute<msdyn_AIBDataset_Select, { msdyn_aibdatasetscontainerid_guid: string | null }, { msdyn_aibdatasetscontainerid_formatted?: string }>;
  msdyn_metadata: WebAttribute<msdyn_AIBDataset_Select, { msdyn_metadata: string | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_AIBDataset_Select, { msdyn_name: string | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_AIBDataset_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_AIBDataset_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_AIBDataset_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_AIBDataset_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_AIBDataset_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_AIBDataset_Select, { statecode: msdyn_aibdataset_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_AIBDataset_Select, { statuscode: msdyn_aibdataset_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_AIBDataset_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_AIBDataset_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_AIBDataset_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_AIBDataset_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_aibdatasetid: XQW.Guid;
  msdyn_aibdatasetscontainerid_guid: XQW.Guid;
  msdyn_metadata: string;
  msdyn_name: string;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_aibdataset_statecode;
  statuscode: msdyn_aibdataset_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_AIBDataset_Expand {
  createdby: WebExpand<msdyn_AIBDataset_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_AIBDataset_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_AIBDataset_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_AIBDataset_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_AIBDatasetFile_msdyn_AIBDatas: WebExpand<msdyn_AIBDataset_Expand, msdyn_AIBDatasetFile_Select, msdyn_AIBDatasetFile_Filter, { msdyn_AIBDatasetFile_msdyn_AIBDatas: msdyn_AIBDatasetFile_Result[] }>;
  msdyn_AIBDatasetRecord_msdyn_AIBDataset: WebExpand<msdyn_AIBDataset_Expand, msdyn_AIBDatasetRecord_Select, msdyn_AIBDatasetRecord_Filter, { msdyn_AIBDatasetRecord_msdyn_AIBDataset: msdyn_AIBDatasetRecord_Result[] }>;
  msdyn_AIBDatasetsContainerId: WebExpand<msdyn_AIBDataset_Expand, msdyn_AIBDatasetsContainer_Select, msdyn_AIBDatasetsContainer_Filter, { msdyn_AIBDatasetsContainerId: msdyn_AIBDatasetsContainer_Result }>;
  msdyn_aibdataset_AsyncOperations: WebExpand<msdyn_AIBDataset_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_aibdataset_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_aibdataset_BulkDeleteFailures: WebExpand<msdyn_AIBDataset_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_aibdataset_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_aibdataset_DuplicateBaseRecord: WebExpand<msdyn_AIBDataset_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_aibdataset_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_aibdataset_DuplicateMatchingRecord: WebExpand<msdyn_AIBDataset_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_aibdataset_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_aibdataset_MailboxTrackingFolders: WebExpand<msdyn_AIBDataset_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_aibdataset_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_aibdataset_PrincipalObjectAttributeAccesses: WebExpand<msdyn_AIBDataset_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_aibdataset_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_aibdataset_ProcessSession: WebExpand<msdyn_AIBDataset_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_aibdataset_ProcessSession: ProcessSession_Result[] }>;
  msdyn_aibdataset_SyncErrors: WebExpand<msdyn_AIBDataset_Expand, SyncError_Select, SyncError_Filter, { msdyn_aibdataset_SyncErrors: SyncError_Result[] }>;
  msdyn_aibdataset_UserEntityInstanceDatas: WebExpand<msdyn_AIBDataset_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_aibdataset_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  ownerid: WebExpand<msdyn_AIBDataset_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_AIBDataset_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_AIBDataset_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_AIBDataset_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_AIBDataset_FormattedResult {
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
interface msdyn_AIBDataset_Result extends msdyn_AIBDataset_Base, msdyn_AIBDataset_Relationships {
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
interface msdyn_AIBDataset_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_AIBDatasetsContainerId: WebMappingRetrieve<msdyn_AIBDatasetsContainer_Select,msdyn_AIBDatasetsContainer_Expand,msdyn_AIBDatasetsContainer_Filter,msdyn_AIBDatasetsContainer_Fixed,msdyn_AIBDatasetsContainer_Result,msdyn_AIBDatasetsContainer_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_AIBDataset_RelatedMany {
  msdyn_AIBDatasetFile_msdyn_AIBDatas: WebMappingRetrieve<msdyn_AIBDatasetFile_Select,msdyn_AIBDatasetFile_Expand,msdyn_AIBDatasetFile_Filter,msdyn_AIBDatasetFile_Fixed,msdyn_AIBDatasetFile_Result,msdyn_AIBDatasetFile_FormattedResult>;
  msdyn_AIBDatasetRecord_msdyn_AIBDataset: WebMappingRetrieve<msdyn_AIBDatasetRecord_Select,msdyn_AIBDatasetRecord_Expand,msdyn_AIBDatasetRecord_Filter,msdyn_AIBDatasetRecord_Fixed,msdyn_AIBDatasetRecord_Result,msdyn_AIBDatasetRecord_FormattedResult>;
  msdyn_aibdataset_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_aibdataset_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_aibdataset_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_aibdataset_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_aibdataset_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_aibdataset_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_aibdataset_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_aibdataset_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_aibdataset_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_aibdatasets: WebMappingRetrieve<msdyn_AIBDataset_Select,msdyn_AIBDataset_Expand,msdyn_AIBDataset_Filter,msdyn_AIBDataset_Fixed,msdyn_AIBDataset_Result,msdyn_AIBDataset_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_aibdatasets: WebMappingRelated<msdyn_AIBDataset_RelatedOne,msdyn_AIBDataset_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_aibdatasets: WebMappingCUDA<msdyn_AIBDataset_Create,msdyn_AIBDataset_Update,msdyn_AIBDataset_Select>;
}
