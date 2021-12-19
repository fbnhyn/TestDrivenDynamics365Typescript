interface msdynsm_servicessitemap_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdynsm_name?: string | null;
  msdynsm_servicessitemapid?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdynsm_servicessitemap_statecode | null;
  statuscode?: msdynsm_servicessitemap_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdynsm_servicessitemap_Relationships {
  msdynsm_servicessitemap_AsyncOperations?: AsyncOperation_Result[] | null;
  msdynsm_servicessitemap_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdynsm_servicessitemap_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdynsm_servicessitemap_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdynsm_servicessitemap_ProcessSession?: ProcessSession_Result[] | null;
  msdynsm_servicessitemap_SyncErrors?: SyncError_Result[] | null;
  msdynsm_servicessitemap_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdynsm_servicessitemap extends msdynsm_servicessitemap_Base, msdynsm_servicessitemap_Relationships {
}
interface msdynsm_servicessitemap_Create extends msdynsm_servicessitemap {
}
interface msdynsm_servicessitemap_Update extends msdynsm_servicessitemap {
}
interface msdynsm_servicessitemap_Select {
  createdby_guid: WebAttribute<msdynsm_servicessitemap_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdynsm_servicessitemap_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdynsm_servicessitemap_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdynsm_servicessitemap_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdynsm_servicessitemap_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdynsm_servicessitemap_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdynsm_servicessitemap_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdynsm_name: WebAttribute<msdynsm_servicessitemap_Select, { msdynsm_name: string | null }, {  }>;
  msdynsm_servicessitemapid: WebAttribute<msdynsm_servicessitemap_Select, { msdynsm_servicessitemapid: string | null }, {  }>;
  organizationid_guid: WebAttribute<msdynsm_servicessitemap_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdynsm_servicessitemap_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  statecode: WebAttribute<msdynsm_servicessitemap_Select, { statecode: msdynsm_servicessitemap_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdynsm_servicessitemap_Select, { statuscode: msdynsm_servicessitemap_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdynsm_servicessitemap_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdynsm_servicessitemap_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdynsm_servicessitemap_Select, { versionnumber: number | null }, {  }>;
}
interface msdynsm_servicessitemap_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdynsm_name: string;
  msdynsm_servicessitemapid: XQW.Guid;
  organizationid_guid: XQW.Guid;
  overriddencreatedon: Date;
  statecode: msdynsm_servicessitemap_statecode;
  statuscode: msdynsm_servicessitemap_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdynsm_servicessitemap_Expand {
  createdby: WebExpand<msdynsm_servicessitemap_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdynsm_servicessitemap_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdynsm_servicessitemap_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdynsm_servicessitemap_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdynsm_servicessitemap_AsyncOperations: WebExpand<msdynsm_servicessitemap_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdynsm_servicessitemap_AsyncOperations: AsyncOperation_Result[] }>;
  msdynsm_servicessitemap_BulkDeleteFailures: WebExpand<msdynsm_servicessitemap_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdynsm_servicessitemap_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdynsm_servicessitemap_MailboxTrackingFolders: WebExpand<msdynsm_servicessitemap_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdynsm_servicessitemap_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdynsm_servicessitemap_PrincipalObjectAttributeAccesses: WebExpand<msdynsm_servicessitemap_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdynsm_servicessitemap_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdynsm_servicessitemap_ProcessSession: WebExpand<msdynsm_servicessitemap_Expand, ProcessSession_Select, ProcessSession_Filter, { msdynsm_servicessitemap_ProcessSession: ProcessSession_Result[] }>;
  msdynsm_servicessitemap_SyncErrors: WebExpand<msdynsm_servicessitemap_Expand, SyncError_Select, SyncError_Filter, { msdynsm_servicessitemap_SyncErrors: SyncError_Result[] }>;
  msdynsm_servicessitemap_UserEntityInstanceDatas: WebExpand<msdynsm_servicessitemap_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdynsm_servicessitemap_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  organizationid: WebExpand<msdynsm_servicessitemap_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
}
interface msdynsm_servicessitemap_FormattedResult {
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
interface msdynsm_servicessitemap_Result extends msdynsm_servicessitemap_Base, msdynsm_servicessitemap_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
}
interface msdynsm_servicessitemap_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
}
interface msdynsm_servicessitemap_RelatedMany {
  msdynsm_servicessitemap_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdynsm_servicessitemap_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdynsm_servicessitemap_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdynsm_servicessitemap_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdynsm_servicessitemap_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdynsm_servicessitemap_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdynsm_servicessitemap_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdynsm_servicessitemaps: WebMappingRetrieve<msdynsm_servicessitemap_Select,msdynsm_servicessitemap_Expand,msdynsm_servicessitemap_Filter,msdynsm_servicessitemap_Fixed,msdynsm_servicessitemap_Result,msdynsm_servicessitemap_FormattedResult>;
}
interface WebEntitiesRelated {
  msdynsm_servicessitemaps: WebMappingRelated<msdynsm_servicessitemap_RelatedOne,msdynsm_servicessitemap_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdynsm_servicessitemaps: WebMappingCUDA<msdynsm_servicessitemap_Create,msdynsm_servicessitemap_Update,msdynsm_servicessitemap_Select>;
}
