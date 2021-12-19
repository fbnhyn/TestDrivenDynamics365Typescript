interface msdyn_AIBFileAttachedData_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_aibfileattacheddataid?: string | null;
  msdyn_data?: string | null;
  msdyn_key?: string | null;
  msdyn_type?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_aibfileattacheddata_statecode | null;
  statuscode?: msdyn_aibfileattacheddata_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_AIBFileAttachedData_Relationships {
  msdyn_AIBDatasetFileId?: msdyn_AIBDatasetFile_Result | null;
  msdyn_aibfileattacheddata_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_aibfileattacheddata_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_aibfileattacheddata_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_aibfileattacheddata_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_aibfileattacheddata_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_aibfileattacheddata_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_aibfileattacheddata_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_aibfileattacheddata_SyncErrors?: SyncError_Result[] | null;
  msdyn_aibfileattacheddata_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_AIBFileAttachedData extends msdyn_AIBFileAttachedData_Base, msdyn_AIBFileAttachedData_Relationships {
  msdyn_AIBDatasetFileId_bind$msdyn_aibdatasetfiles?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_AIBFileAttachedData_Create extends msdyn_AIBFileAttachedData {
}
interface msdyn_AIBFileAttachedData_Update extends msdyn_AIBFileAttachedData {
}
interface msdyn_AIBFileAttachedData_Select {
  createdby_guid: WebAttribute<msdyn_AIBFileAttachedData_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_AIBFileAttachedData_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_AIBFileAttachedData_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_AIBFileAttachedData_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_AIBFileAttachedData_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_AIBFileAttachedData_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_AIBFileAttachedData_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_aibdatasetfileid_guid: WebAttribute<msdyn_AIBFileAttachedData_Select, { msdyn_aibdatasetfileid_guid: string | null }, { msdyn_aibdatasetfileid_formatted?: string }>;
  msdyn_aibfileattacheddataid: WebAttribute<msdyn_AIBFileAttachedData_Select, { msdyn_aibfileattacheddataid: string | null }, {  }>;
  msdyn_data: WebAttribute<msdyn_AIBFileAttachedData_Select, { msdyn_data: string | null }, {  }>;
  msdyn_key: WebAttribute<msdyn_AIBFileAttachedData_Select, { msdyn_key: string | null }, {  }>;
  msdyn_type: WebAttribute<msdyn_AIBFileAttachedData_Select, { msdyn_type: string | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_AIBFileAttachedData_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_AIBFileAttachedData_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_AIBFileAttachedData_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_AIBFileAttachedData_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_AIBFileAttachedData_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_AIBFileAttachedData_Select, { statecode: msdyn_aibfileattacheddata_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_AIBFileAttachedData_Select, { statuscode: msdyn_aibfileattacheddata_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_AIBFileAttachedData_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_AIBFileAttachedData_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_AIBFileAttachedData_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_AIBFileAttachedData_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_aibdatasetfileid_guid: XQW.Guid;
  msdyn_aibfileattacheddataid: XQW.Guid;
  msdyn_data: string;
  msdyn_key: string;
  msdyn_type: string;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_aibfileattacheddata_statecode;
  statuscode: msdyn_aibfileattacheddata_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_AIBFileAttachedData_Expand {
  createdby: WebExpand<msdyn_AIBFileAttachedData_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_AIBFileAttachedData_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_AIBFileAttachedData_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_AIBFileAttachedData_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_AIBDatasetFileId: WebExpand<msdyn_AIBFileAttachedData_Expand, msdyn_AIBDatasetFile_Select, msdyn_AIBDatasetFile_Filter, { msdyn_AIBDatasetFileId: msdyn_AIBDatasetFile_Result }>;
  msdyn_aibfileattacheddata_AsyncOperations: WebExpand<msdyn_AIBFileAttachedData_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_aibfileattacheddata_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_aibfileattacheddata_BulkDeleteFailures: WebExpand<msdyn_AIBFileAttachedData_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_aibfileattacheddata_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_aibfileattacheddata_DuplicateBaseRecord: WebExpand<msdyn_AIBFileAttachedData_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_aibfileattacheddata_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_aibfileattacheddata_DuplicateMatchingRecord: WebExpand<msdyn_AIBFileAttachedData_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_aibfileattacheddata_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_aibfileattacheddata_MailboxTrackingFolders: WebExpand<msdyn_AIBFileAttachedData_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_aibfileattacheddata_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_aibfileattacheddata_PrincipalObjectAttributeAccesses: WebExpand<msdyn_AIBFileAttachedData_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_aibfileattacheddata_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_aibfileattacheddata_ProcessSession: WebExpand<msdyn_AIBFileAttachedData_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_aibfileattacheddata_ProcessSession: ProcessSession_Result[] }>;
  msdyn_aibfileattacheddata_SyncErrors: WebExpand<msdyn_AIBFileAttachedData_Expand, SyncError_Select, SyncError_Filter, { msdyn_aibfileattacheddata_SyncErrors: SyncError_Result[] }>;
  msdyn_aibfileattacheddata_UserEntityInstanceDatas: WebExpand<msdyn_AIBFileAttachedData_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_aibfileattacheddata_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  ownerid: WebExpand<msdyn_AIBFileAttachedData_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_AIBFileAttachedData_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_AIBFileAttachedData_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_AIBFileAttachedData_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_AIBFileAttachedData_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_aibdatasetfileid_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_AIBFileAttachedData_Result extends msdyn_AIBFileAttachedData_Base, msdyn_AIBFileAttachedData_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_aibdatasetfileid_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_AIBFileAttachedData_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_AIBDatasetFileId: WebMappingRetrieve<msdyn_AIBDatasetFile_Select,msdyn_AIBDatasetFile_Expand,msdyn_AIBDatasetFile_Filter,msdyn_AIBDatasetFile_Fixed,msdyn_AIBDatasetFile_Result,msdyn_AIBDatasetFile_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_AIBFileAttachedData_RelatedMany {
  msdyn_aibfileattacheddata_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_aibfileattacheddata_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_aibfileattacheddata_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_aibfileattacheddata_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_aibfileattacheddata_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_aibfileattacheddata_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_aibfileattacheddata_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_aibfileattacheddata_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_aibfileattacheddata_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_aibfileattacheddatas: WebMappingRetrieve<msdyn_AIBFileAttachedData_Select,msdyn_AIBFileAttachedData_Expand,msdyn_AIBFileAttachedData_Filter,msdyn_AIBFileAttachedData_Fixed,msdyn_AIBFileAttachedData_Result,msdyn_AIBFileAttachedData_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_aibfileattacheddatas: WebMappingRelated<msdyn_AIBFileAttachedData_RelatedOne,msdyn_AIBFileAttachedData_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_aibfileattacheddatas: WebMappingCUDA<msdyn_AIBFileAttachedData_Create,msdyn_AIBFileAttachedData_Update,msdyn_AIBFileAttachedData_Select>;
}
