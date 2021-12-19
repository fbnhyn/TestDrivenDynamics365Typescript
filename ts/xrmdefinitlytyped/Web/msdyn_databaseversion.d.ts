interface msdyn_databaseversion_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_databaseversionid?: string | null;
  msdyn_dbversion?: number | null;
  msdyn_solutionname?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_databaseversion_statecode | null;
  statuscode?: msdyn_databaseversion_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_databaseversion_Relationships {
  msdyn_databaseversion_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_databaseversion_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_databaseversion_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_databaseversion_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_databaseversion_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_databaseversion_SyncErrors?: SyncError_Result[] | null;
  msdyn_databaseversion_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_databaseversion extends msdyn_databaseversion_Base, msdyn_databaseversion_Relationships {
}
interface msdyn_databaseversion_Create extends msdyn_databaseversion {
}
interface msdyn_databaseversion_Update extends msdyn_databaseversion {
}
interface msdyn_databaseversion_Select {
  createdby_guid: WebAttribute<msdyn_databaseversion_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_databaseversion_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_databaseversion_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_databaseversion_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_databaseversion_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_databaseversion_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_databaseversion_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_databaseversionid: WebAttribute<msdyn_databaseversion_Select, { msdyn_databaseversionid: string | null }, {  }>;
  msdyn_dbversion: WebAttribute<msdyn_databaseversion_Select, { msdyn_dbversion: number | null }, {  }>;
  msdyn_solutionname: WebAttribute<msdyn_databaseversion_Select, { msdyn_solutionname: string | null }, {  }>;
  organizationid_guid: WebAttribute<msdyn_databaseversion_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_databaseversion_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  statecode: WebAttribute<msdyn_databaseversion_Select, { statecode: msdyn_databaseversion_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_databaseversion_Select, { statuscode: msdyn_databaseversion_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_databaseversion_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_databaseversion_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_databaseversion_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_databaseversion_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_databaseversionid: XQW.Guid;
  msdyn_dbversion: number;
  msdyn_solutionname: string;
  organizationid_guid: XQW.Guid;
  overriddencreatedon: Date;
  statecode: msdyn_databaseversion_statecode;
  statuscode: msdyn_databaseversion_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_databaseversion_Expand {
  createdby: WebExpand<msdyn_databaseversion_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_databaseversion_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_databaseversion_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_databaseversion_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_databaseversion_AsyncOperations: WebExpand<msdyn_databaseversion_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_databaseversion_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_databaseversion_BulkDeleteFailures: WebExpand<msdyn_databaseversion_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_databaseversion_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_databaseversion_MailboxTrackingFolders: WebExpand<msdyn_databaseversion_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_databaseversion_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_databaseversion_PrincipalObjectAttributeAccesses: WebExpand<msdyn_databaseversion_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_databaseversion_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_databaseversion_ProcessSession: WebExpand<msdyn_databaseversion_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_databaseversion_ProcessSession: ProcessSession_Result[] }>;
  msdyn_databaseversion_SyncErrors: WebExpand<msdyn_databaseversion_Expand, SyncError_Select, SyncError_Filter, { msdyn_databaseversion_SyncErrors: SyncError_Result[] }>;
  msdyn_databaseversion_UserEntityInstanceDatas: WebExpand<msdyn_databaseversion_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_databaseversion_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  organizationid: WebExpand<msdyn_databaseversion_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
}
interface msdyn_databaseversion_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  organizationid_formatted?: string;
  overriddencreatedon_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_databaseversion_Result extends msdyn_databaseversion_Base, msdyn_databaseversion_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
}
interface msdyn_databaseversion_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
}
interface msdyn_databaseversion_RelatedMany {
  msdyn_databaseversion_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_databaseversion_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_databaseversion_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_databaseversion_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_databaseversion_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_databaseversion_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_databaseversion_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_databaseversions: WebMappingRetrieve<msdyn_databaseversion_Select,msdyn_databaseversion_Expand,msdyn_databaseversion_Filter,msdyn_databaseversion_Fixed,msdyn_databaseversion_Result,msdyn_databaseversion_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_databaseversions: WebMappingRelated<msdyn_databaseversion_RelatedOne,msdyn_databaseversion_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_databaseversions: WebMappingCUDA<msdyn_databaseversion_Create,msdyn_databaseversion_Update,msdyn_databaseversion_Select>;
}
