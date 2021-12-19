interface msdyn_AIBDatasetFile_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_aibdatasetfileid?: string | null;
  msdyn_lastmodifieddate?: Date | null;
  msdyn_name?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_aibdatasetfile_statecode | null;
  statuscode?: msdyn_aibdatasetfile_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_AIBDatasetFile_Relationships {
  msdyn_AIBDatasetId?: msdyn_AIBDataset_Result | null;
  msdyn_AIBFileAttachedData_msdyn_AIB?: msdyn_AIBFileAttachedData_Result[] | null;
  msdyn_AIBFileId?: msdyn_AIBFile_Result | null;
  msdyn_aibdatasetfile_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_aibdatasetfile_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_aibdatasetfile_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_aibdatasetfile_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_aibdatasetfile_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_aibdatasetfile_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_aibdatasetfile_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_aibdatasetfile_SyncErrors?: SyncError_Result[] | null;
  msdyn_aibdatasetfile_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_AIBDatasetFile extends msdyn_AIBDatasetFile_Base, msdyn_AIBDatasetFile_Relationships {
  msdyn_AIBDatasetId_bind$msdyn_aibdatasets?: string | null;
  msdyn_AIBFileId_bind$msdyn_aibfiles?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_AIBDatasetFile_Create extends msdyn_AIBDatasetFile {
}
interface msdyn_AIBDatasetFile_Update extends msdyn_AIBDatasetFile {
}
interface msdyn_AIBDatasetFile_Select {
  createdby_guid: WebAttribute<msdyn_AIBDatasetFile_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_AIBDatasetFile_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_AIBDatasetFile_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_AIBDatasetFile_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_AIBDatasetFile_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_AIBDatasetFile_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_AIBDatasetFile_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_aibdatasetfileid: WebAttribute<msdyn_AIBDatasetFile_Select, { msdyn_aibdatasetfileid: string | null }, {  }>;
  msdyn_aibdatasetid_guid: WebAttribute<msdyn_AIBDatasetFile_Select, { msdyn_aibdatasetid_guid: string | null }, { msdyn_aibdatasetid_formatted?: string }>;
  msdyn_aibfileid_guid: WebAttribute<msdyn_AIBDatasetFile_Select, { msdyn_aibfileid_guid: string | null }, { msdyn_aibfileid_formatted?: string }>;
  msdyn_lastmodifieddate: WebAttribute<msdyn_AIBDatasetFile_Select, { msdyn_lastmodifieddate: Date | null }, { msdyn_lastmodifieddate_formatted?: string }>;
  msdyn_name: WebAttribute<msdyn_AIBDatasetFile_Select, { msdyn_name: string | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_AIBDatasetFile_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_AIBDatasetFile_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_AIBDatasetFile_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_AIBDatasetFile_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_AIBDatasetFile_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_AIBDatasetFile_Select, { statecode: msdyn_aibdatasetfile_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_AIBDatasetFile_Select, { statuscode: msdyn_aibdatasetfile_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_AIBDatasetFile_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_AIBDatasetFile_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_AIBDatasetFile_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_AIBDatasetFile_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_aibdatasetfileid: XQW.Guid;
  msdyn_aibdatasetid_guid: XQW.Guid;
  msdyn_aibfileid_guid: XQW.Guid;
  msdyn_lastmodifieddate: Date;
  msdyn_name: string;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_aibdatasetfile_statecode;
  statuscode: msdyn_aibdatasetfile_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_AIBDatasetFile_Expand {
  createdby: WebExpand<msdyn_AIBDatasetFile_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_AIBDatasetFile_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_AIBDatasetFile_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_AIBDatasetFile_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_AIBDatasetId: WebExpand<msdyn_AIBDatasetFile_Expand, msdyn_AIBDataset_Select, msdyn_AIBDataset_Filter, { msdyn_AIBDatasetId: msdyn_AIBDataset_Result }>;
  msdyn_AIBFileAttachedData_msdyn_AIB: WebExpand<msdyn_AIBDatasetFile_Expand, msdyn_AIBFileAttachedData_Select, msdyn_AIBFileAttachedData_Filter, { msdyn_AIBFileAttachedData_msdyn_AIB: msdyn_AIBFileAttachedData_Result[] }>;
  msdyn_AIBFileId: WebExpand<msdyn_AIBDatasetFile_Expand, msdyn_AIBFile_Select, msdyn_AIBFile_Filter, { msdyn_AIBFileId: msdyn_AIBFile_Result }>;
  msdyn_aibdatasetfile_AsyncOperations: WebExpand<msdyn_AIBDatasetFile_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_aibdatasetfile_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_aibdatasetfile_BulkDeleteFailures: WebExpand<msdyn_AIBDatasetFile_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_aibdatasetfile_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_aibdatasetfile_DuplicateBaseRecord: WebExpand<msdyn_AIBDatasetFile_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_aibdatasetfile_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_aibdatasetfile_DuplicateMatchingRecord: WebExpand<msdyn_AIBDatasetFile_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_aibdatasetfile_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_aibdatasetfile_MailboxTrackingFolders: WebExpand<msdyn_AIBDatasetFile_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_aibdatasetfile_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_aibdatasetfile_PrincipalObjectAttributeAccesses: WebExpand<msdyn_AIBDatasetFile_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_aibdatasetfile_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_aibdatasetfile_ProcessSession: WebExpand<msdyn_AIBDatasetFile_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_aibdatasetfile_ProcessSession: ProcessSession_Result[] }>;
  msdyn_aibdatasetfile_SyncErrors: WebExpand<msdyn_AIBDatasetFile_Expand, SyncError_Select, SyncError_Filter, { msdyn_aibdatasetfile_SyncErrors: SyncError_Result[] }>;
  msdyn_aibdatasetfile_UserEntityInstanceDatas: WebExpand<msdyn_AIBDatasetFile_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_aibdatasetfile_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  ownerid: WebExpand<msdyn_AIBDatasetFile_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_AIBDatasetFile_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_AIBDatasetFile_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_AIBDatasetFile_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_AIBDatasetFile_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_aibdatasetid_formatted?: string;
  msdyn_aibfileid_formatted?: string;
  msdyn_lastmodifieddate_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_AIBDatasetFile_Result extends msdyn_AIBDatasetFile_Base, msdyn_AIBDatasetFile_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_aibdatasetid_guid: string | null;
  msdyn_aibfileid_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_AIBDatasetFile_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_AIBDatasetId: WebMappingRetrieve<msdyn_AIBDataset_Select,msdyn_AIBDataset_Expand,msdyn_AIBDataset_Filter,msdyn_AIBDataset_Fixed,msdyn_AIBDataset_Result,msdyn_AIBDataset_FormattedResult>;
  msdyn_AIBFileId: WebMappingRetrieve<msdyn_AIBFile_Select,msdyn_AIBFile_Expand,msdyn_AIBFile_Filter,msdyn_AIBFile_Fixed,msdyn_AIBFile_Result,msdyn_AIBFile_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_AIBDatasetFile_RelatedMany {
  msdyn_AIBFileAttachedData_msdyn_AIB: WebMappingRetrieve<msdyn_AIBFileAttachedData_Select,msdyn_AIBFileAttachedData_Expand,msdyn_AIBFileAttachedData_Filter,msdyn_AIBFileAttachedData_Fixed,msdyn_AIBFileAttachedData_Result,msdyn_AIBFileAttachedData_FormattedResult>;
  msdyn_aibdatasetfile_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_aibdatasetfile_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_aibdatasetfile_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_aibdatasetfile_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_aibdatasetfile_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_aibdatasetfile_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_aibdatasetfile_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_aibdatasetfile_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_aibdatasetfile_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_aibdatasetfiles: WebMappingRetrieve<msdyn_AIBDatasetFile_Select,msdyn_AIBDatasetFile_Expand,msdyn_AIBDatasetFile_Filter,msdyn_AIBDatasetFile_Fixed,msdyn_AIBDatasetFile_Result,msdyn_AIBDatasetFile_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_aibdatasetfiles: WebMappingRelated<msdyn_AIBDatasetFile_RelatedOne,msdyn_AIBDatasetFile_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_aibdatasetfiles: WebMappingCUDA<msdyn_AIBDatasetFile_Create,msdyn_AIBDatasetFile_Update,msdyn_AIBDatasetFile_Select>;
}
