interface msdyn_AIBDatasetsContainer_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_aibdatasetscontainerid?: string | null;
  msdyn_name?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_aibdatasetscontainer_statecode | null;
  statuscode?: msdyn_aibdatasetscontainer_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_AIBDatasetsContainer_Relationships {
  msdyn_AIBDataset_msdyn_AIBDatasetsContain?: msdyn_AIBDataset_Result[] | null;
  msdyn_AIBFile_msdyn_AIBDatasetsCont?: msdyn_AIBFile_Result[] | null;
  msdyn_AIModelId?: msdyn_AIModel_Result | null;
  msdyn_aibdatasetscontainer_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_aibdatasetscontainer_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_aibdatasetscontainer_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_aibdatasetscontainer_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_aibdatasetscontainer_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_aibdatasetscontainer_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_aibdatasetscontainer_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_aibdatasetscontainer_SyncErrors?: SyncError_Result[] | null;
  msdyn_aibdatasetscontainer_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_AIBDatasetsContainer extends msdyn_AIBDatasetsContainer_Base, msdyn_AIBDatasetsContainer_Relationships {
  msdyn_AIModelId_bind$msdyn_aimodels?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_AIBDatasetsContainer_Create extends msdyn_AIBDatasetsContainer {
}
interface msdyn_AIBDatasetsContainer_Update extends msdyn_AIBDatasetsContainer {
}
interface msdyn_AIBDatasetsContainer_Select {
  createdby_guid: WebAttribute<msdyn_AIBDatasetsContainer_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_AIBDatasetsContainer_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_AIBDatasetsContainer_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_AIBDatasetsContainer_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_AIBDatasetsContainer_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_AIBDatasetsContainer_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_AIBDatasetsContainer_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_aibdatasetscontainerid: WebAttribute<msdyn_AIBDatasetsContainer_Select, { msdyn_aibdatasetscontainerid: string | null }, {  }>;
  msdyn_aimodelid_guid: WebAttribute<msdyn_AIBDatasetsContainer_Select, { msdyn_aimodelid_guid: string | null }, { msdyn_aimodelid_formatted?: string }>;
  msdyn_name: WebAttribute<msdyn_AIBDatasetsContainer_Select, { msdyn_name: string | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_AIBDatasetsContainer_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_AIBDatasetsContainer_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_AIBDatasetsContainer_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_AIBDatasetsContainer_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_AIBDatasetsContainer_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_AIBDatasetsContainer_Select, { statecode: msdyn_aibdatasetscontainer_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_AIBDatasetsContainer_Select, { statuscode: msdyn_aibdatasetscontainer_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_AIBDatasetsContainer_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_AIBDatasetsContainer_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_AIBDatasetsContainer_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_AIBDatasetsContainer_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_aibdatasetscontainerid: XQW.Guid;
  msdyn_aimodelid_guid: XQW.Guid;
  msdyn_name: string;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_aibdatasetscontainer_statecode;
  statuscode: msdyn_aibdatasetscontainer_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_AIBDatasetsContainer_Expand {
  createdby: WebExpand<msdyn_AIBDatasetsContainer_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_AIBDatasetsContainer_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_AIBDatasetsContainer_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_AIBDatasetsContainer_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_AIBDataset_msdyn_AIBDatasetsContain: WebExpand<msdyn_AIBDatasetsContainer_Expand, msdyn_AIBDataset_Select, msdyn_AIBDataset_Filter, { msdyn_AIBDataset_msdyn_AIBDatasetsContain: msdyn_AIBDataset_Result[] }>;
  msdyn_AIBFile_msdyn_AIBDatasetsCont: WebExpand<msdyn_AIBDatasetsContainer_Expand, msdyn_AIBFile_Select, msdyn_AIBFile_Filter, { msdyn_AIBFile_msdyn_AIBDatasetsCont: msdyn_AIBFile_Result[] }>;
  msdyn_AIModelId: WebExpand<msdyn_AIBDatasetsContainer_Expand, msdyn_AIModel_Select, msdyn_AIModel_Filter, { msdyn_AIModelId: msdyn_AIModel_Result }>;
  msdyn_aibdatasetscontainer_AsyncOperations: WebExpand<msdyn_AIBDatasetsContainer_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_aibdatasetscontainer_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_aibdatasetscontainer_BulkDeleteFailures: WebExpand<msdyn_AIBDatasetsContainer_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_aibdatasetscontainer_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_aibdatasetscontainer_DuplicateBaseRecord: WebExpand<msdyn_AIBDatasetsContainer_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_aibdatasetscontainer_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_aibdatasetscontainer_DuplicateMatchingRecord: WebExpand<msdyn_AIBDatasetsContainer_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_aibdatasetscontainer_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_aibdatasetscontainer_MailboxTrackingFolders: WebExpand<msdyn_AIBDatasetsContainer_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_aibdatasetscontainer_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_aibdatasetscontainer_PrincipalObjectAttributeAccesses: WebExpand<msdyn_AIBDatasetsContainer_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_aibdatasetscontainer_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_aibdatasetscontainer_ProcessSession: WebExpand<msdyn_AIBDatasetsContainer_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_aibdatasetscontainer_ProcessSession: ProcessSession_Result[] }>;
  msdyn_aibdatasetscontainer_SyncErrors: WebExpand<msdyn_AIBDatasetsContainer_Expand, SyncError_Select, SyncError_Filter, { msdyn_aibdatasetscontainer_SyncErrors: SyncError_Result[] }>;
  msdyn_aibdatasetscontainer_UserEntityInstanceDatas: WebExpand<msdyn_AIBDatasetsContainer_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_aibdatasetscontainer_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  ownerid: WebExpand<msdyn_AIBDatasetsContainer_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_AIBDatasetsContainer_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_AIBDatasetsContainer_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_AIBDatasetsContainer_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_AIBDatasetsContainer_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_aimodelid_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_AIBDatasetsContainer_Result extends msdyn_AIBDatasetsContainer_Base, msdyn_AIBDatasetsContainer_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_aimodelid_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_AIBDatasetsContainer_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_AIModelId: WebMappingRetrieve<msdyn_AIModel_Select,msdyn_AIModel_Expand,msdyn_AIModel_Filter,msdyn_AIModel_Fixed,msdyn_AIModel_Result,msdyn_AIModel_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_AIBDatasetsContainer_RelatedMany {
  msdyn_AIBDataset_msdyn_AIBDatasetsContain: WebMappingRetrieve<msdyn_AIBDataset_Select,msdyn_AIBDataset_Expand,msdyn_AIBDataset_Filter,msdyn_AIBDataset_Fixed,msdyn_AIBDataset_Result,msdyn_AIBDataset_FormattedResult>;
  msdyn_AIBFile_msdyn_AIBDatasetsCont: WebMappingRetrieve<msdyn_AIBFile_Select,msdyn_AIBFile_Expand,msdyn_AIBFile_Filter,msdyn_AIBFile_Fixed,msdyn_AIBFile_Result,msdyn_AIBFile_FormattedResult>;
  msdyn_aibdatasetscontainer_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_aibdatasetscontainer_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_aibdatasetscontainer_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_aibdatasetscontainer_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_aibdatasetscontainer_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_aibdatasetscontainer_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_aibdatasetscontainer_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_aibdatasetscontainer_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_aibdatasetscontainer_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_aibdatasetscontainers: WebMappingRetrieve<msdyn_AIBDatasetsContainer_Select,msdyn_AIBDatasetsContainer_Expand,msdyn_AIBDatasetsContainer_Filter,msdyn_AIBDatasetsContainer_Fixed,msdyn_AIBDatasetsContainer_Result,msdyn_AIBDatasetsContainer_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_aibdatasetscontainers: WebMappingRelated<msdyn_AIBDatasetsContainer_RelatedOne,msdyn_AIBDatasetsContainer_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_aibdatasetscontainers: WebMappingCUDA<msdyn_AIBDatasetsContainer_Create,msdyn_AIBDatasetsContainer_Update,msdyn_AIBDatasetsContainer_Select>;
}
