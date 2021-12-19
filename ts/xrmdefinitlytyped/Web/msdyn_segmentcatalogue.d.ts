interface msdyn_segmentcatalogue_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_name?: string | null;
  msdyn_segmentcatalogueid?: string | null;
  msdyn_segmentcatalogueuniquekey?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_segmentcatalogue_statecode | null;
  statuscode?: msdyn_segmentcatalogue_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_segmentcatalogue_Relationships {
  msdyn_segmentcatalogue_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_segmentcatalogue_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_segmentcatalogue_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_segmentcatalogue_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_segmentcatalogue_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_segmentcatalogue_SyncErrors?: SyncError_Result[] | null;
  msdyn_segmentcatalogue_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_segmentcatalogue extends msdyn_segmentcatalogue_Base, msdyn_segmentcatalogue_Relationships {
}
interface msdyn_segmentcatalogue_Create extends msdyn_segmentcatalogue {
}
interface msdyn_segmentcatalogue_Update extends msdyn_segmentcatalogue {
}
interface msdyn_segmentcatalogue_Select {
  createdby_guid: WebAttribute<msdyn_segmentcatalogue_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_segmentcatalogue_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_segmentcatalogue_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_segmentcatalogue_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_segmentcatalogue_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_segmentcatalogue_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_segmentcatalogue_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_name: WebAttribute<msdyn_segmentcatalogue_Select, { msdyn_name: string | null }, {  }>;
  msdyn_segmentcatalogueid: WebAttribute<msdyn_segmentcatalogue_Select, { msdyn_segmentcatalogueid: string | null }, {  }>;
  msdyn_segmentcatalogueuniquekey: WebAttribute<msdyn_segmentcatalogue_Select, { msdyn_segmentcatalogueuniquekey: string | null }, {  }>;
  organizationid_guid: WebAttribute<msdyn_segmentcatalogue_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_segmentcatalogue_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  statecode: WebAttribute<msdyn_segmentcatalogue_Select, { statecode: msdyn_segmentcatalogue_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_segmentcatalogue_Select, { statuscode: msdyn_segmentcatalogue_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_segmentcatalogue_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_segmentcatalogue_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_segmentcatalogue_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_segmentcatalogue_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_name: string;
  msdyn_segmentcatalogueid: XQW.Guid;
  msdyn_segmentcatalogueuniquekey: string;
  organizationid_guid: XQW.Guid;
  overriddencreatedon: Date;
  statecode: msdyn_segmentcatalogue_statecode;
  statuscode: msdyn_segmentcatalogue_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_segmentcatalogue_Expand {
  createdby: WebExpand<msdyn_segmentcatalogue_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_segmentcatalogue_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_segmentcatalogue_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_segmentcatalogue_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_segmentcatalogue_AsyncOperations: WebExpand<msdyn_segmentcatalogue_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_segmentcatalogue_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_segmentcatalogue_BulkDeleteFailures: WebExpand<msdyn_segmentcatalogue_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_segmentcatalogue_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_segmentcatalogue_MailboxTrackingFolders: WebExpand<msdyn_segmentcatalogue_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_segmentcatalogue_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_segmentcatalogue_PrincipalObjectAttributeAccesses: WebExpand<msdyn_segmentcatalogue_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_segmentcatalogue_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_segmentcatalogue_ProcessSession: WebExpand<msdyn_segmentcatalogue_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_segmentcatalogue_ProcessSession: ProcessSession_Result[] }>;
  msdyn_segmentcatalogue_SyncErrors: WebExpand<msdyn_segmentcatalogue_Expand, SyncError_Select, SyncError_Filter, { msdyn_segmentcatalogue_SyncErrors: SyncError_Result[] }>;
  msdyn_segmentcatalogue_UserEntityInstanceDatas: WebExpand<msdyn_segmentcatalogue_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_segmentcatalogue_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  organizationid: WebExpand<msdyn_segmentcatalogue_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
}
interface msdyn_segmentcatalogue_FormattedResult {
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
interface msdyn_segmentcatalogue_Result extends msdyn_segmentcatalogue_Base, msdyn_segmentcatalogue_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
}
interface msdyn_segmentcatalogue_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
}
interface msdyn_segmentcatalogue_RelatedMany {
  msdyn_segmentcatalogue_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_segmentcatalogue_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_segmentcatalogue_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_segmentcatalogue_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_segmentcatalogue_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_segmentcatalogue_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_segmentcatalogue_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_segmentcatalogues: WebMappingRetrieve<msdyn_segmentcatalogue_Select,msdyn_segmentcatalogue_Expand,msdyn_segmentcatalogue_Filter,msdyn_segmentcatalogue_Fixed,msdyn_segmentcatalogue_Result,msdyn_segmentcatalogue_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_segmentcatalogues: WebMappingRelated<msdyn_segmentcatalogue_RelatedOne,msdyn_segmentcatalogue_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_segmentcatalogues: WebMappingCUDA<msdyn_segmentcatalogue_Create,msdyn_segmentcatalogue_Update,msdyn_segmentcatalogue_Select>;
}
