interface msdyn_batchjob_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_batchjobid?: string | null;
  msdyn_data?: string | null;
  msdyn_data1?: string | null;
  msdyn_frequency?: msdyn_batchjob_msdyn_frequency | null;
  msdyn_isactive?: boolean | null;
  msdyn_jobtype?: msdyn_batchjob_msdyn_jobtype | null;
  msdyn_lastrundate?: Date | null;
  msdyn_name?: string | null;
  msdyn_operationtype?: msdyn_batchjob_msdyn_operationtype | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_batchjob_statecode | null;
  statuscode?: msdyn_batchjob_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_batchjob_Relationships {
  msdyn_batchjob_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_batchjob_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_batchjob_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_batchjob_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_batchjob_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_batchjob_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_batchjob_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_batchjob_SyncErrors?: SyncError_Result[] | null;
  msdyn_batchjob_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_batchjob extends msdyn_batchjob_Base, msdyn_batchjob_Relationships {
}
interface msdyn_batchjob_Create extends msdyn_batchjob {
}
interface msdyn_batchjob_Update extends msdyn_batchjob {
}
interface msdyn_batchjob_Select {
  createdby_guid: WebAttribute<msdyn_batchjob_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_batchjob_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_batchjob_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_batchjob_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_batchjob_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_batchjob_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_batchjob_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_batchjobid: WebAttribute<msdyn_batchjob_Select, { msdyn_batchjobid: string | null }, {  }>;
  msdyn_data: WebAttribute<msdyn_batchjob_Select, { msdyn_data: string | null }, {  }>;
  msdyn_data1: WebAttribute<msdyn_batchjob_Select, { msdyn_data1: string | null }, {  }>;
  msdyn_frequency: WebAttribute<msdyn_batchjob_Select, { msdyn_frequency: msdyn_batchjob_msdyn_frequency | null }, { msdyn_frequency_formatted?: string }>;
  msdyn_isactive: WebAttribute<msdyn_batchjob_Select, { msdyn_isactive: boolean | null }, {  }>;
  msdyn_jobtype: WebAttribute<msdyn_batchjob_Select, { msdyn_jobtype: msdyn_batchjob_msdyn_jobtype | null }, { msdyn_jobtype_formatted?: string }>;
  msdyn_lastrundate: WebAttribute<msdyn_batchjob_Select, { msdyn_lastrundate: Date | null }, { msdyn_lastrundate_formatted?: string }>;
  msdyn_name: WebAttribute<msdyn_batchjob_Select, { msdyn_name: string | null }, {  }>;
  msdyn_operationtype: WebAttribute<msdyn_batchjob_Select, { msdyn_operationtype: msdyn_batchjob_msdyn_operationtype | null }, { msdyn_operationtype_formatted?: string }>;
  organizationid_guid: WebAttribute<msdyn_batchjob_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_batchjob_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  statecode: WebAttribute<msdyn_batchjob_Select, { statecode: msdyn_batchjob_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_batchjob_Select, { statuscode: msdyn_batchjob_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_batchjob_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_batchjob_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_batchjob_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_batchjob_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_batchjobid: XQW.Guid;
  msdyn_data: string;
  msdyn_data1: string;
  msdyn_frequency: msdyn_batchjob_msdyn_frequency;
  msdyn_isactive: boolean;
  msdyn_jobtype: msdyn_batchjob_msdyn_jobtype;
  msdyn_lastrundate: Date;
  msdyn_name: string;
  msdyn_operationtype: msdyn_batchjob_msdyn_operationtype;
  organizationid_guid: XQW.Guid;
  overriddencreatedon: Date;
  statecode: msdyn_batchjob_statecode;
  statuscode: msdyn_batchjob_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_batchjob_Expand {
  createdby: WebExpand<msdyn_batchjob_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_batchjob_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_batchjob_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_batchjob_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_batchjob_AsyncOperations: WebExpand<msdyn_batchjob_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_batchjob_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_batchjob_BulkDeleteFailures: WebExpand<msdyn_batchjob_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_batchjob_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_batchjob_DuplicateBaseRecord: WebExpand<msdyn_batchjob_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_batchjob_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_batchjob_DuplicateMatchingRecord: WebExpand<msdyn_batchjob_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_batchjob_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_batchjob_MailboxTrackingFolders: WebExpand<msdyn_batchjob_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_batchjob_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_batchjob_PrincipalObjectAttributeAccesses: WebExpand<msdyn_batchjob_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_batchjob_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_batchjob_ProcessSession: WebExpand<msdyn_batchjob_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_batchjob_ProcessSession: ProcessSession_Result[] }>;
  msdyn_batchjob_SyncErrors: WebExpand<msdyn_batchjob_Expand, SyncError_Select, SyncError_Filter, { msdyn_batchjob_SyncErrors: SyncError_Result[] }>;
  msdyn_batchjob_UserEntityInstanceDatas: WebExpand<msdyn_batchjob_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_batchjob_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  organizationid: WebExpand<msdyn_batchjob_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
}
interface msdyn_batchjob_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_frequency_formatted?: string;
  msdyn_jobtype_formatted?: string;
  msdyn_lastrundate_formatted?: string;
  msdyn_operationtype_formatted?: string;
  organizationid_formatted?: string;
  overriddencreatedon_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_batchjob_Result extends msdyn_batchjob_Base, msdyn_batchjob_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
}
interface msdyn_batchjob_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
}
interface msdyn_batchjob_RelatedMany {
  msdyn_batchjob_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_batchjob_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_batchjob_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_batchjob_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_batchjob_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_batchjob_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_batchjob_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_batchjob_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_batchjob_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_batchjobs: WebMappingRetrieve<msdyn_batchjob_Select,msdyn_batchjob_Expand,msdyn_batchjob_Filter,msdyn_batchjob_Fixed,msdyn_batchjob_Result,msdyn_batchjob_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_batchjobs: WebMappingRelated<msdyn_batchjob_RelatedOne,msdyn_batchjob_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_batchjobs: WebMappingCUDA<msdyn_batchjob_Create,msdyn_batchjob_Update,msdyn_batchjob_Select>;
}
