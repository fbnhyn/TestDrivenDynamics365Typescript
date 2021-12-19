interface msdynsm_settingssitemap_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdynsm_name?: string | null;
  msdynsm_settingssitemapid?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdynsm_settingssitemap_statecode | null;
  statuscode?: msdynsm_settingssitemap_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdynsm_settingssitemap_Relationships {
  msdynsm_settingssitemap_AsyncOperations?: AsyncOperation_Result[] | null;
  msdynsm_settingssitemap_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdynsm_settingssitemap_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdynsm_settingssitemap_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdynsm_settingssitemap_ProcessSession?: ProcessSession_Result[] | null;
  msdynsm_settingssitemap_SyncErrors?: SyncError_Result[] | null;
  msdynsm_settingssitemap_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdynsm_settingssitemap extends msdynsm_settingssitemap_Base, msdynsm_settingssitemap_Relationships {
}
interface msdynsm_settingssitemap_Create extends msdynsm_settingssitemap {
}
interface msdynsm_settingssitemap_Update extends msdynsm_settingssitemap {
}
interface msdynsm_settingssitemap_Select {
  createdby_guid: WebAttribute<msdynsm_settingssitemap_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdynsm_settingssitemap_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdynsm_settingssitemap_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdynsm_settingssitemap_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdynsm_settingssitemap_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdynsm_settingssitemap_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdynsm_settingssitemap_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdynsm_name: WebAttribute<msdynsm_settingssitemap_Select, { msdynsm_name: string | null }, {  }>;
  msdynsm_settingssitemapid: WebAttribute<msdynsm_settingssitemap_Select, { msdynsm_settingssitemapid: string | null }, {  }>;
  organizationid_guid: WebAttribute<msdynsm_settingssitemap_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdynsm_settingssitemap_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  statecode: WebAttribute<msdynsm_settingssitemap_Select, { statecode: msdynsm_settingssitemap_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdynsm_settingssitemap_Select, { statuscode: msdynsm_settingssitemap_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdynsm_settingssitemap_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdynsm_settingssitemap_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdynsm_settingssitemap_Select, { versionnumber: number | null }, {  }>;
}
interface msdynsm_settingssitemap_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdynsm_name: string;
  msdynsm_settingssitemapid: XQW.Guid;
  organizationid_guid: XQW.Guid;
  overriddencreatedon: Date;
  statecode: msdynsm_settingssitemap_statecode;
  statuscode: msdynsm_settingssitemap_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdynsm_settingssitemap_Expand {
  createdby: WebExpand<msdynsm_settingssitemap_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdynsm_settingssitemap_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdynsm_settingssitemap_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdynsm_settingssitemap_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdynsm_settingssitemap_AsyncOperations: WebExpand<msdynsm_settingssitemap_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdynsm_settingssitemap_AsyncOperations: AsyncOperation_Result[] }>;
  msdynsm_settingssitemap_BulkDeleteFailures: WebExpand<msdynsm_settingssitemap_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdynsm_settingssitemap_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdynsm_settingssitemap_MailboxTrackingFolders: WebExpand<msdynsm_settingssitemap_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdynsm_settingssitemap_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdynsm_settingssitemap_PrincipalObjectAttributeAccesses: WebExpand<msdynsm_settingssitemap_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdynsm_settingssitemap_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdynsm_settingssitemap_ProcessSession: WebExpand<msdynsm_settingssitemap_Expand, ProcessSession_Select, ProcessSession_Filter, { msdynsm_settingssitemap_ProcessSession: ProcessSession_Result[] }>;
  msdynsm_settingssitemap_SyncErrors: WebExpand<msdynsm_settingssitemap_Expand, SyncError_Select, SyncError_Filter, { msdynsm_settingssitemap_SyncErrors: SyncError_Result[] }>;
  msdynsm_settingssitemap_UserEntityInstanceDatas: WebExpand<msdynsm_settingssitemap_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdynsm_settingssitemap_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  organizationid: WebExpand<msdynsm_settingssitemap_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
}
interface msdynsm_settingssitemap_FormattedResult {
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
interface msdynsm_settingssitemap_Result extends msdynsm_settingssitemap_Base, msdynsm_settingssitemap_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
}
interface msdynsm_settingssitemap_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
}
interface msdynsm_settingssitemap_RelatedMany {
  msdynsm_settingssitemap_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdynsm_settingssitemap_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdynsm_settingssitemap_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdynsm_settingssitemap_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdynsm_settingssitemap_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdynsm_settingssitemap_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdynsm_settingssitemap_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdynsm_settingssitemaps: WebMappingRetrieve<msdynsm_settingssitemap_Select,msdynsm_settingssitemap_Expand,msdynsm_settingssitemap_Filter,msdynsm_settingssitemap_Fixed,msdynsm_settingssitemap_Result,msdynsm_settingssitemap_FormattedResult>;
}
interface WebEntitiesRelated {
  msdynsm_settingssitemaps: WebMappingRelated<msdynsm_settingssitemap_RelatedOne,msdynsm_settingssitemap_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdynsm_settingssitemaps: WebMappingCUDA<msdynsm_settingssitemap_Create,msdynsm_settingssitemap_Update,msdynsm_settingssitemap_Select>;
}
