interface msdyn_AIBDatasetRecord_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_aibdatasetrecordid?: string | null;
  msdyn_data?: string | null;
  msdyn_name?: string | null;
  msdyn_recordtype?: msdyn_aibdatasetrecord_msdyn_recordtype | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_aibdatasetrecord_statecode | null;
  statuscode?: msdyn_aibdatasetrecord_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_AIBDatasetRecord_Relationships {
  msdyn_AIBDatasetsId?: msdyn_AIBDataset_Result | null;
  msdyn_aibdatasetrecord_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_aibdatasetrecord_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_aibdatasetrecord_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_aibdatasetrecord_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_aibdatasetrecord_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_aibdatasetrecord_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_aibdatasetrecord_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_aibdatasetrecord_SyncErrors?: SyncError_Result[] | null;
  msdyn_aibdatasetrecord_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_AIBDatasetRecord extends msdyn_AIBDatasetRecord_Base, msdyn_AIBDatasetRecord_Relationships {
  msdyn_AIBDatasetsId_bind$msdyn_aibdatasets?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_AIBDatasetRecord_Create extends msdyn_AIBDatasetRecord {
}
interface msdyn_AIBDatasetRecord_Update extends msdyn_AIBDatasetRecord {
}
interface msdyn_AIBDatasetRecord_Select {
  createdby_guid: WebAttribute<msdyn_AIBDatasetRecord_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_AIBDatasetRecord_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_AIBDatasetRecord_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_AIBDatasetRecord_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_AIBDatasetRecord_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_AIBDatasetRecord_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_AIBDatasetRecord_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_aibdatasetrecordid: WebAttribute<msdyn_AIBDatasetRecord_Select, { msdyn_aibdatasetrecordid: string | null }, {  }>;
  msdyn_aibdatasetsid_guid: WebAttribute<msdyn_AIBDatasetRecord_Select, { msdyn_aibdatasetsid_guid: string | null }, { msdyn_aibdatasetsid_formatted?: string }>;
  msdyn_data: WebAttribute<msdyn_AIBDatasetRecord_Select, { msdyn_data: string | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_AIBDatasetRecord_Select, { msdyn_name: string | null }, {  }>;
  msdyn_recordtype: WebAttribute<msdyn_AIBDatasetRecord_Select, { msdyn_recordtype: msdyn_aibdatasetrecord_msdyn_recordtype | null }, { msdyn_recordtype_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_AIBDatasetRecord_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_AIBDatasetRecord_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_AIBDatasetRecord_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_AIBDatasetRecord_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_AIBDatasetRecord_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_AIBDatasetRecord_Select, { statecode: msdyn_aibdatasetrecord_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_AIBDatasetRecord_Select, { statuscode: msdyn_aibdatasetrecord_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_AIBDatasetRecord_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_AIBDatasetRecord_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_AIBDatasetRecord_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_AIBDatasetRecord_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_aibdatasetrecordid: XQW.Guid;
  msdyn_aibdatasetsid_guid: XQW.Guid;
  msdyn_data: string;
  msdyn_name: string;
  msdyn_recordtype: msdyn_aibdatasetrecord_msdyn_recordtype;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_aibdatasetrecord_statecode;
  statuscode: msdyn_aibdatasetrecord_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_AIBDatasetRecord_Expand {
  createdby: WebExpand<msdyn_AIBDatasetRecord_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_AIBDatasetRecord_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_AIBDatasetRecord_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_AIBDatasetRecord_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_AIBDatasetsId: WebExpand<msdyn_AIBDatasetRecord_Expand, msdyn_AIBDataset_Select, msdyn_AIBDataset_Filter, { msdyn_AIBDatasetsId: msdyn_AIBDataset_Result }>;
  msdyn_aibdatasetrecord_AsyncOperations: WebExpand<msdyn_AIBDatasetRecord_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_aibdatasetrecord_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_aibdatasetrecord_BulkDeleteFailures: WebExpand<msdyn_AIBDatasetRecord_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_aibdatasetrecord_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_aibdatasetrecord_DuplicateBaseRecord: WebExpand<msdyn_AIBDatasetRecord_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_aibdatasetrecord_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_aibdatasetrecord_DuplicateMatchingRecord: WebExpand<msdyn_AIBDatasetRecord_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_aibdatasetrecord_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_aibdatasetrecord_MailboxTrackingFolders: WebExpand<msdyn_AIBDatasetRecord_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_aibdatasetrecord_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_aibdatasetrecord_PrincipalObjectAttributeAccesses: WebExpand<msdyn_AIBDatasetRecord_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_aibdatasetrecord_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_aibdatasetrecord_ProcessSession: WebExpand<msdyn_AIBDatasetRecord_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_aibdatasetrecord_ProcessSession: ProcessSession_Result[] }>;
  msdyn_aibdatasetrecord_SyncErrors: WebExpand<msdyn_AIBDatasetRecord_Expand, SyncError_Select, SyncError_Filter, { msdyn_aibdatasetrecord_SyncErrors: SyncError_Result[] }>;
  msdyn_aibdatasetrecord_UserEntityInstanceDatas: WebExpand<msdyn_AIBDatasetRecord_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_aibdatasetrecord_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  ownerid: WebExpand<msdyn_AIBDatasetRecord_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_AIBDatasetRecord_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_AIBDatasetRecord_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_AIBDatasetRecord_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_AIBDatasetRecord_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_aibdatasetsid_formatted?: string;
  msdyn_recordtype_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_AIBDatasetRecord_Result extends msdyn_AIBDatasetRecord_Base, msdyn_AIBDatasetRecord_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_aibdatasetsid_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_AIBDatasetRecord_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_AIBDatasetsId: WebMappingRetrieve<msdyn_AIBDataset_Select,msdyn_AIBDataset_Expand,msdyn_AIBDataset_Filter,msdyn_AIBDataset_Fixed,msdyn_AIBDataset_Result,msdyn_AIBDataset_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_AIBDatasetRecord_RelatedMany {
  msdyn_aibdatasetrecord_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_aibdatasetrecord_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_aibdatasetrecord_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_aibdatasetrecord_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_aibdatasetrecord_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_aibdatasetrecord_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_aibdatasetrecord_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_aibdatasetrecord_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_aibdatasetrecord_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_aibdatasetrecords: WebMappingRetrieve<msdyn_AIBDatasetRecord_Select,msdyn_AIBDatasetRecord_Expand,msdyn_AIBDatasetRecord_Filter,msdyn_AIBDatasetRecord_Fixed,msdyn_AIBDatasetRecord_Result,msdyn_AIBDatasetRecord_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_aibdatasetrecords: WebMappingRelated<msdyn_AIBDatasetRecord_RelatedOne,msdyn_AIBDatasetRecord_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_aibdatasetrecords: WebMappingCUDA<msdyn_AIBDatasetRecord_Create,msdyn_AIBDatasetRecord_Update,msdyn_AIBDatasetRecord_Select>;
}
