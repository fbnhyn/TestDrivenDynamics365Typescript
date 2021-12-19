interface msdyn_mlresultcache_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_data?: string | null;
  msdyn_entitydescription?: string | null;
  msdyn_expiration?: Date | null;
  msdyn_mlresultcacheid?: string | null;
  msdyn_name?: string | null;
  msdyn_partnumber?: number | null;
  msdyn_userid?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_mlresultcache_statecode | null;
  statuscode?: msdyn_mlresultcache_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_mlresultcache_Relationships {
  msdyn_mlresultcache_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_mlresultcache_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_mlresultcache_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_mlresultcache_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_mlresultcache_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_mlresultcache_SyncErrors?: SyncError_Result[] | null;
  msdyn_mlresultcache_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_mlresultcache extends msdyn_mlresultcache_Base, msdyn_mlresultcache_Relationships {
}
interface msdyn_mlresultcache_Create extends msdyn_mlresultcache {
}
interface msdyn_mlresultcache_Update extends msdyn_mlresultcache {
}
interface msdyn_mlresultcache_Select {
  createdby_guid: WebAttribute<msdyn_mlresultcache_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_mlresultcache_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_mlresultcache_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_mlresultcache_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_mlresultcache_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_mlresultcache_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_mlresultcache_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_data: WebAttribute<msdyn_mlresultcache_Select, { msdyn_data: string | null }, {  }>;
  msdyn_entitydescription: WebAttribute<msdyn_mlresultcache_Select, { msdyn_entitydescription: string | null }, {  }>;
  msdyn_expiration: WebAttribute<msdyn_mlresultcache_Select, { msdyn_expiration: Date | null }, { msdyn_expiration_formatted?: string }>;
  msdyn_mlresultcacheid: WebAttribute<msdyn_mlresultcache_Select, { msdyn_mlresultcacheid: string | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_mlresultcache_Select, { msdyn_name: string | null }, {  }>;
  msdyn_partnumber: WebAttribute<msdyn_mlresultcache_Select, { msdyn_partnumber: number | null }, {  }>;
  msdyn_userid: WebAttribute<msdyn_mlresultcache_Select, { msdyn_userid: string | null }, {  }>;
  organizationid_guid: WebAttribute<msdyn_mlresultcache_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_mlresultcache_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  statecode: WebAttribute<msdyn_mlresultcache_Select, { statecode: msdyn_mlresultcache_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_mlresultcache_Select, { statuscode: msdyn_mlresultcache_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_mlresultcache_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_mlresultcache_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_mlresultcache_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_mlresultcache_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_data: string;
  msdyn_entitydescription: string;
  msdyn_expiration: Date;
  msdyn_mlresultcacheid: XQW.Guid;
  msdyn_name: string;
  msdyn_partnumber: number;
  msdyn_userid: string;
  organizationid_guid: XQW.Guid;
  overriddencreatedon: Date;
  statecode: msdyn_mlresultcache_statecode;
  statuscode: msdyn_mlresultcache_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_mlresultcache_Expand {
  createdby: WebExpand<msdyn_mlresultcache_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_mlresultcache_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_mlresultcache_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_mlresultcache_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_mlresultcache_AsyncOperations: WebExpand<msdyn_mlresultcache_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_mlresultcache_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_mlresultcache_BulkDeleteFailures: WebExpand<msdyn_mlresultcache_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_mlresultcache_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_mlresultcache_MailboxTrackingFolders: WebExpand<msdyn_mlresultcache_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_mlresultcache_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_mlresultcache_PrincipalObjectAttributeAccesses: WebExpand<msdyn_mlresultcache_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_mlresultcache_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_mlresultcache_ProcessSession: WebExpand<msdyn_mlresultcache_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_mlresultcache_ProcessSession: ProcessSession_Result[] }>;
  msdyn_mlresultcache_SyncErrors: WebExpand<msdyn_mlresultcache_Expand, SyncError_Select, SyncError_Filter, { msdyn_mlresultcache_SyncErrors: SyncError_Result[] }>;
  msdyn_mlresultcache_UserEntityInstanceDatas: WebExpand<msdyn_mlresultcache_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_mlresultcache_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  organizationid: WebExpand<msdyn_mlresultcache_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
}
interface msdyn_mlresultcache_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_expiration_formatted?: string;
  organizationid_formatted?: string;
  overriddencreatedon_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_mlresultcache_Result extends msdyn_mlresultcache_Base, msdyn_mlresultcache_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
}
interface msdyn_mlresultcache_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
}
interface msdyn_mlresultcache_RelatedMany {
  msdyn_mlresultcache_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_mlresultcache_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_mlresultcache_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_mlresultcache_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_mlresultcache_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_mlresultcache_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_mlresultcache_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_mlresultcaches: WebMappingRetrieve<msdyn_mlresultcache_Select,msdyn_mlresultcache_Expand,msdyn_mlresultcache_Filter,msdyn_mlresultcache_Fixed,msdyn_mlresultcache_Result,msdyn_mlresultcache_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_mlresultcaches: WebMappingRelated<msdyn_mlresultcache_RelatedOne,msdyn_mlresultcache_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_mlresultcaches: WebMappingCUDA<msdyn_mlresultcache_Create,msdyn_mlresultcache_Update,msdyn_mlresultcache_Select>;
}
