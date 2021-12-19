interface msdyn_uniquenumber_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_name?: string | null;
  msdyn_number?: number | null;
  msdyn_uniquenumberid?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_uniquenumber_statecode | null;
  statuscode?: msdyn_uniquenumber_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_uniquenumber_Relationships {
  msdyn_uniquenumber_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_uniquenumber_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_uniquenumber_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_uniquenumber_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_uniquenumber_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_uniquenumber_SyncErrors?: SyncError_Result[] | null;
  msdyn_uniquenumber_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_uniquenumber extends msdyn_uniquenumber_Base, msdyn_uniquenumber_Relationships {
}
interface msdyn_uniquenumber_Create extends msdyn_uniquenumber {
}
interface msdyn_uniquenumber_Update extends msdyn_uniquenumber {
}
interface msdyn_uniquenumber_Select {
  createdby_guid: WebAttribute<msdyn_uniquenumber_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_uniquenumber_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_uniquenumber_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_uniquenumber_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_uniquenumber_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_uniquenumber_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_uniquenumber_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_name: WebAttribute<msdyn_uniquenumber_Select, { msdyn_name: string | null }, {  }>;
  msdyn_number: WebAttribute<msdyn_uniquenumber_Select, { msdyn_number: number | null }, {  }>;
  msdyn_uniquenumberid: WebAttribute<msdyn_uniquenumber_Select, { msdyn_uniquenumberid: string | null }, {  }>;
  organizationid_guid: WebAttribute<msdyn_uniquenumber_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_uniquenumber_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  statecode: WebAttribute<msdyn_uniquenumber_Select, { statecode: msdyn_uniquenumber_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_uniquenumber_Select, { statuscode: msdyn_uniquenumber_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_uniquenumber_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_uniquenumber_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_uniquenumber_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_uniquenumber_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_name: string;
  msdyn_number: number;
  msdyn_uniquenumberid: XQW.Guid;
  organizationid_guid: XQW.Guid;
  overriddencreatedon: Date;
  statecode: msdyn_uniquenumber_statecode;
  statuscode: msdyn_uniquenumber_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_uniquenumber_Expand {
  createdby: WebExpand<msdyn_uniquenumber_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_uniquenumber_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_uniquenumber_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_uniquenumber_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_uniquenumber_AsyncOperations: WebExpand<msdyn_uniquenumber_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_uniquenumber_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_uniquenumber_BulkDeleteFailures: WebExpand<msdyn_uniquenumber_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_uniquenumber_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_uniquenumber_MailboxTrackingFolders: WebExpand<msdyn_uniquenumber_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_uniquenumber_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_uniquenumber_PrincipalObjectAttributeAccesses: WebExpand<msdyn_uniquenumber_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_uniquenumber_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_uniquenumber_ProcessSession: WebExpand<msdyn_uniquenumber_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_uniquenumber_ProcessSession: ProcessSession_Result[] }>;
  msdyn_uniquenumber_SyncErrors: WebExpand<msdyn_uniquenumber_Expand, SyncError_Select, SyncError_Filter, { msdyn_uniquenumber_SyncErrors: SyncError_Result[] }>;
  msdyn_uniquenumber_UserEntityInstanceDatas: WebExpand<msdyn_uniquenumber_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_uniquenumber_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  organizationid: WebExpand<msdyn_uniquenumber_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
}
interface msdyn_uniquenumber_FormattedResult {
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
interface msdyn_uniquenumber_Result extends msdyn_uniquenumber_Base, msdyn_uniquenumber_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
}
interface msdyn_uniquenumber_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
}
interface msdyn_uniquenumber_RelatedMany {
  msdyn_uniquenumber_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_uniquenumber_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_uniquenumber_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_uniquenumber_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_uniquenumber_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_uniquenumber_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_uniquenumber_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_uniquenumbers: WebMappingRetrieve<msdyn_uniquenumber_Select,msdyn_uniquenumber_Expand,msdyn_uniquenumber_Filter,msdyn_uniquenumber_Fixed,msdyn_uniquenumber_Result,msdyn_uniquenumber_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_uniquenumbers: WebMappingRelated<msdyn_uniquenumber_RelatedOne,msdyn_uniquenumber_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_uniquenumbers: WebMappingCUDA<msdyn_uniquenumber_Create,msdyn_uniquenumber_Update,msdyn_uniquenumber_Select>;
}
