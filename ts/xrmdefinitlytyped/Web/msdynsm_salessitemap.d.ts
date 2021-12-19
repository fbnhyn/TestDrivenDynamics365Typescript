interface msdynsm_salessitemap_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdynsm_name?: string | null;
  msdynsm_salessitemapid?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdynsm_salessitemap_statecode | null;
  statuscode?: msdynsm_salessitemap_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdynsm_salessitemap_Relationships {
  msdynsm_salessitemap_AsyncOperations?: AsyncOperation_Result[] | null;
  msdynsm_salessitemap_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdynsm_salessitemap_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdynsm_salessitemap_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdynsm_salessitemap_ProcessSession?: ProcessSession_Result[] | null;
  msdynsm_salessitemap_SyncErrors?: SyncError_Result[] | null;
  msdynsm_salessitemap_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdynsm_salessitemap extends msdynsm_salessitemap_Base, msdynsm_salessitemap_Relationships {
}
interface msdynsm_salessitemap_Create extends msdynsm_salessitemap {
}
interface msdynsm_salessitemap_Update extends msdynsm_salessitemap {
}
interface msdynsm_salessitemap_Select {
  createdby_guid: WebAttribute<msdynsm_salessitemap_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdynsm_salessitemap_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdynsm_salessitemap_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdynsm_salessitemap_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdynsm_salessitemap_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdynsm_salessitemap_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdynsm_salessitemap_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdynsm_name: WebAttribute<msdynsm_salessitemap_Select, { msdynsm_name: string | null }, {  }>;
  msdynsm_salessitemapid: WebAttribute<msdynsm_salessitemap_Select, { msdynsm_salessitemapid: string | null }, {  }>;
  organizationid_guid: WebAttribute<msdynsm_salessitemap_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdynsm_salessitemap_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  statecode: WebAttribute<msdynsm_salessitemap_Select, { statecode: msdynsm_salessitemap_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdynsm_salessitemap_Select, { statuscode: msdynsm_salessitemap_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdynsm_salessitemap_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdynsm_salessitemap_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdynsm_salessitemap_Select, { versionnumber: number | null }, {  }>;
}
interface msdynsm_salessitemap_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdynsm_name: string;
  msdynsm_salessitemapid: XQW.Guid;
  organizationid_guid: XQW.Guid;
  overriddencreatedon: Date;
  statecode: msdynsm_salessitemap_statecode;
  statuscode: msdynsm_salessitemap_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdynsm_salessitemap_Expand {
  createdby: WebExpand<msdynsm_salessitemap_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdynsm_salessitemap_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdynsm_salessitemap_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdynsm_salessitemap_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdynsm_salessitemap_AsyncOperations: WebExpand<msdynsm_salessitemap_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdynsm_salessitemap_AsyncOperations: AsyncOperation_Result[] }>;
  msdynsm_salessitemap_BulkDeleteFailures: WebExpand<msdynsm_salessitemap_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdynsm_salessitemap_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdynsm_salessitemap_MailboxTrackingFolders: WebExpand<msdynsm_salessitemap_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdynsm_salessitemap_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdynsm_salessitemap_PrincipalObjectAttributeAccesses: WebExpand<msdynsm_salessitemap_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdynsm_salessitemap_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdynsm_salessitemap_ProcessSession: WebExpand<msdynsm_salessitemap_Expand, ProcessSession_Select, ProcessSession_Filter, { msdynsm_salessitemap_ProcessSession: ProcessSession_Result[] }>;
  msdynsm_salessitemap_SyncErrors: WebExpand<msdynsm_salessitemap_Expand, SyncError_Select, SyncError_Filter, { msdynsm_salessitemap_SyncErrors: SyncError_Result[] }>;
  msdynsm_salessitemap_UserEntityInstanceDatas: WebExpand<msdynsm_salessitemap_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdynsm_salessitemap_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  organizationid: WebExpand<msdynsm_salessitemap_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
}
interface msdynsm_salessitemap_FormattedResult {
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
interface msdynsm_salessitemap_Result extends msdynsm_salessitemap_Base, msdynsm_salessitemap_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
}
interface msdynsm_salessitemap_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
}
interface msdynsm_salessitemap_RelatedMany {
  msdynsm_salessitemap_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdynsm_salessitemap_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdynsm_salessitemap_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdynsm_salessitemap_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdynsm_salessitemap_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdynsm_salessitemap_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdynsm_salessitemap_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdynsm_salessitemaps: WebMappingRetrieve<msdynsm_salessitemap_Select,msdynsm_salessitemap_Expand,msdynsm_salessitemap_Filter,msdynsm_salessitemap_Fixed,msdynsm_salessitemap_Result,msdynsm_salessitemap_FormattedResult>;
}
interface WebEntitiesRelated {
  msdynsm_salessitemaps: WebMappingRelated<msdynsm_salessitemap_RelatedOne,msdynsm_salessitemap_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdynsm_salessitemaps: WebMappingCUDA<msdynsm_salessitemap_Create,msdynsm_salessitemap_Update,msdynsm_salessitemap_Select>;
}
