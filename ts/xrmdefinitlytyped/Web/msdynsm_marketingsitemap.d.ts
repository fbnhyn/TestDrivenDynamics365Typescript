interface msdynsm_marketingsitemap_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdynsm_marketingsitemapid?: string | null;
  msdynsm_name?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdynsm_marketingsitemap_statecode | null;
  statuscode?: msdynsm_marketingsitemap_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdynsm_marketingsitemap_Relationships {
  msdynsm_marketingsitemap_AsyncOperations?: AsyncOperation_Result[] | null;
  msdynsm_marketingsitemap_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdynsm_marketingsitemap_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdynsm_marketingsitemap_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdynsm_marketingsitemap_ProcessSession?: ProcessSession_Result[] | null;
  msdynsm_marketingsitemap_SyncErrors?: SyncError_Result[] | null;
  msdynsm_marketingsitemap_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdynsm_marketingsitemap extends msdynsm_marketingsitemap_Base, msdynsm_marketingsitemap_Relationships {
}
interface msdynsm_marketingsitemap_Create extends msdynsm_marketingsitemap {
}
interface msdynsm_marketingsitemap_Update extends msdynsm_marketingsitemap {
}
interface msdynsm_marketingsitemap_Select {
  createdby_guid: WebAttribute<msdynsm_marketingsitemap_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdynsm_marketingsitemap_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdynsm_marketingsitemap_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdynsm_marketingsitemap_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdynsm_marketingsitemap_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdynsm_marketingsitemap_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdynsm_marketingsitemap_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdynsm_marketingsitemapid: WebAttribute<msdynsm_marketingsitemap_Select, { msdynsm_marketingsitemapid: string | null }, {  }>;
  msdynsm_name: WebAttribute<msdynsm_marketingsitemap_Select, { msdynsm_name: string | null }, {  }>;
  organizationid_guid: WebAttribute<msdynsm_marketingsitemap_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdynsm_marketingsitemap_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  statecode: WebAttribute<msdynsm_marketingsitemap_Select, { statecode: msdynsm_marketingsitemap_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdynsm_marketingsitemap_Select, { statuscode: msdynsm_marketingsitemap_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdynsm_marketingsitemap_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdynsm_marketingsitemap_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdynsm_marketingsitemap_Select, { versionnumber: number | null }, {  }>;
}
interface msdynsm_marketingsitemap_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdynsm_marketingsitemapid: XQW.Guid;
  msdynsm_name: string;
  organizationid_guid: XQW.Guid;
  overriddencreatedon: Date;
  statecode: msdynsm_marketingsitemap_statecode;
  statuscode: msdynsm_marketingsitemap_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdynsm_marketingsitemap_Expand {
  createdby: WebExpand<msdynsm_marketingsitemap_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdynsm_marketingsitemap_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdynsm_marketingsitemap_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdynsm_marketingsitemap_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdynsm_marketingsitemap_AsyncOperations: WebExpand<msdynsm_marketingsitemap_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdynsm_marketingsitemap_AsyncOperations: AsyncOperation_Result[] }>;
  msdynsm_marketingsitemap_BulkDeleteFailures: WebExpand<msdynsm_marketingsitemap_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdynsm_marketingsitemap_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdynsm_marketingsitemap_MailboxTrackingFolders: WebExpand<msdynsm_marketingsitemap_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdynsm_marketingsitemap_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdynsm_marketingsitemap_PrincipalObjectAttributeAccesses: WebExpand<msdynsm_marketingsitemap_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdynsm_marketingsitemap_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdynsm_marketingsitemap_ProcessSession: WebExpand<msdynsm_marketingsitemap_Expand, ProcessSession_Select, ProcessSession_Filter, { msdynsm_marketingsitemap_ProcessSession: ProcessSession_Result[] }>;
  msdynsm_marketingsitemap_SyncErrors: WebExpand<msdynsm_marketingsitemap_Expand, SyncError_Select, SyncError_Filter, { msdynsm_marketingsitemap_SyncErrors: SyncError_Result[] }>;
  msdynsm_marketingsitemap_UserEntityInstanceDatas: WebExpand<msdynsm_marketingsitemap_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdynsm_marketingsitemap_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  organizationid: WebExpand<msdynsm_marketingsitemap_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
}
interface msdynsm_marketingsitemap_FormattedResult {
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
interface msdynsm_marketingsitemap_Result extends msdynsm_marketingsitemap_Base, msdynsm_marketingsitemap_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
}
interface msdynsm_marketingsitemap_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
}
interface msdynsm_marketingsitemap_RelatedMany {
  msdynsm_marketingsitemap_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdynsm_marketingsitemap_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdynsm_marketingsitemap_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdynsm_marketingsitemap_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdynsm_marketingsitemap_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdynsm_marketingsitemap_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdynsm_marketingsitemap_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdynsm_marketingsitemaps: WebMappingRetrieve<msdynsm_marketingsitemap_Select,msdynsm_marketingsitemap_Expand,msdynsm_marketingsitemap_Filter,msdynsm_marketingsitemap_Fixed,msdynsm_marketingsitemap_Result,msdynsm_marketingsitemap_FormattedResult>;
}
interface WebEntitiesRelated {
  msdynsm_marketingsitemaps: WebMappingRelated<msdynsm_marketingsitemap_RelatedOne,msdynsm_marketingsitemap_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdynsm_marketingsitemaps: WebMappingCUDA<msdynsm_marketingsitemap_Create,msdynsm_marketingsitemap_Update,msdynsm_marketingsitemap_Select>;
}
