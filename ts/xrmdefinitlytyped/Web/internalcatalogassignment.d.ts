interface InternalCatalogAssignment_Base extends WebEntity {
  componentidunique?: string | null;
  componentstate?: componentstate | null;
  createdon?: Date | null;
  importsequencenumber?: number | null;
  internalcatalogassignmentid?: string | null;
  iscustomizable?: any | null;
  ismanaged?: boolean | null;
  modifiedon?: Date | null;
  name?: string | null;
  overriddencreatedon?: Date | null;
  overwritetime?: Date | null;
  solutionid?: string | null;
  statecode?: internalcatalogassignment_statecode | null;
  statuscode?: internalcatalogassignment_statuscode | null;
  supportingsolutionid?: string | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface InternalCatalogAssignment_Relationships {
  CatalogId?: Catalog_Result | null;
  SdkMessageFilterId?: SdkMessageFilter_Result | null;
  internalcatalogassignment_AsyncOperations?: AsyncOperation_Result[] | null;
  internalcatalogassignment_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  internalcatalogassignment_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  internalcatalogassignment_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  internalcatalogassignment_ProcessSession?: ProcessSession_Result[] | null;
  internalcatalogassignment_SyncErrors?: SyncError_Result[] | null;
  internalcatalogassignment_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface InternalCatalogAssignment extends InternalCatalogAssignment_Base, InternalCatalogAssignment_Relationships {
}
interface InternalCatalogAssignment_Create extends InternalCatalogAssignment {
  CatalogId_bind$catalogs?: string | null;
  SdkMessageFilterId_bind$sdkmessagefilters?: string | null;
}
interface InternalCatalogAssignment_Update extends InternalCatalogAssignment {
}
interface InternalCatalogAssignment_Select {
  catalogid_guid: WebAttribute<InternalCatalogAssignment_Select, { catalogid_guid: string | null }, { catalogid_formatted?: string }>;
  componentidunique: WebAttribute<InternalCatalogAssignment_Select, { componentidunique: string | null }, {  }>;
  componentstate: WebAttribute<InternalCatalogAssignment_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  createdby_guid: WebAttribute<InternalCatalogAssignment_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<InternalCatalogAssignment_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<InternalCatalogAssignment_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<InternalCatalogAssignment_Select, { importsequencenumber: number | null }, {  }>;
  internalcatalogassignmentid: WebAttribute<InternalCatalogAssignment_Select, { internalcatalogassignmentid: string | null }, {  }>;
  iscustomizable: WebAttribute<InternalCatalogAssignment_Select, { iscustomizable: any | null }, {  }>;
  ismanaged: WebAttribute<InternalCatalogAssignment_Select, { ismanaged: boolean | null }, {  }>;
  modifiedby_guid: WebAttribute<InternalCatalogAssignment_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<InternalCatalogAssignment_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<InternalCatalogAssignment_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  name: WebAttribute<InternalCatalogAssignment_Select, { name: string | null }, {  }>;
  object_guid: WebAttribute<InternalCatalogAssignment_Select, { object_guid: string | null }, { object_formatted?: string }>;
  organizationid_guid: WebAttribute<InternalCatalogAssignment_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overriddencreatedon: WebAttribute<InternalCatalogAssignment_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  overwritetime: WebAttribute<InternalCatalogAssignment_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  solutionid: WebAttribute<InternalCatalogAssignment_Select, { solutionid: string | null }, {  }>;
  statecode: WebAttribute<InternalCatalogAssignment_Select, { statecode: internalcatalogassignment_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<InternalCatalogAssignment_Select, { statuscode: internalcatalogassignment_statuscode | null }, { statuscode_formatted?: string }>;
  supportingsolutionid: WebAttribute<InternalCatalogAssignment_Select, { supportingsolutionid: string | null }, {  }>;
  timezoneruleversionnumber: WebAttribute<InternalCatalogAssignment_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<InternalCatalogAssignment_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<InternalCatalogAssignment_Select, { versionnumber: number | null }, {  }>;
}
interface InternalCatalogAssignment_Filter {
  catalogid_guid: XQW.Guid;
  componentidunique: XQW.Guid;
  componentstate: componentstate;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  internalcatalogassignmentid: XQW.Guid;
  iscustomizable: any;
  ismanaged: boolean;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  name: string;
  object_guid: XQW.Guid;
  organizationid_guid: XQW.Guid;
  overriddencreatedon: Date;
  overwritetime: Date;
  solutionid: XQW.Guid;
  statecode: internalcatalogassignment_statecode;
  statuscode: internalcatalogassignment_statuscode;
  supportingsolutionid: XQW.Guid;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface InternalCatalogAssignment_Expand {
  CatalogId: WebExpand<InternalCatalogAssignment_Expand, Catalog_Select, Catalog_Filter, { CatalogId: Catalog_Result }>;
  SdkMessageFilterId: WebExpand<InternalCatalogAssignment_Expand, SdkMessageFilter_Select, SdkMessageFilter_Filter, { SdkMessageFilterId: SdkMessageFilter_Result }>;
  createdby: WebExpand<InternalCatalogAssignment_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<InternalCatalogAssignment_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  internalcatalogassignment_AsyncOperations: WebExpand<InternalCatalogAssignment_Expand, AsyncOperation_Select, AsyncOperation_Filter, { internalcatalogassignment_AsyncOperations: AsyncOperation_Result[] }>;
  internalcatalogassignment_BulkDeleteFailures: WebExpand<InternalCatalogAssignment_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { internalcatalogassignment_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  internalcatalogassignment_MailboxTrackingFolders: WebExpand<InternalCatalogAssignment_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { internalcatalogassignment_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  internalcatalogassignment_PrincipalObjectAttributeAccesses: WebExpand<InternalCatalogAssignment_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { internalcatalogassignment_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  internalcatalogassignment_ProcessSession: WebExpand<InternalCatalogAssignment_Expand, ProcessSession_Select, ProcessSession_Filter, { internalcatalogassignment_ProcessSession: ProcessSession_Result[] }>;
  internalcatalogassignment_SyncErrors: WebExpand<InternalCatalogAssignment_Expand, SyncError_Select, SyncError_Filter, { internalcatalogassignment_SyncErrors: SyncError_Result[] }>;
  internalcatalogassignment_UserEntityInstanceDatas: WebExpand<InternalCatalogAssignment_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { internalcatalogassignment_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  modifiedby: WebExpand<InternalCatalogAssignment_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<InternalCatalogAssignment_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  organizationid: WebExpand<InternalCatalogAssignment_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
}
interface InternalCatalogAssignment_FormattedResult {
  catalogid_formatted?: string;
  componentstate_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  object_formatted?: string;
  organizationid_formatted?: string;
  overriddencreatedon_formatted?: string;
  overwritetime_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface InternalCatalogAssignment_Result extends InternalCatalogAssignment_Base, InternalCatalogAssignment_Relationships {
  "@odata.etag": string;
  catalogid_guid: string | null;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  object_guid: string | null;
  organizationid_guid: string | null;
}
interface InternalCatalogAssignment_RelatedOne {
  CatalogId: WebMappingRetrieve<Catalog_Select,Catalog_Expand,Catalog_Filter,Catalog_Fixed,Catalog_Result,Catalog_FormattedResult>;
  SdkMessageFilterId: WebMappingRetrieve<SdkMessageFilter_Select,SdkMessageFilter_Expand,SdkMessageFilter_Filter,SdkMessageFilter_Fixed,SdkMessageFilter_Result,SdkMessageFilter_FormattedResult>;
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
}
interface InternalCatalogAssignment_RelatedMany {
  internalcatalogassignment_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  internalcatalogassignment_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  internalcatalogassignment_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  internalcatalogassignment_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  internalcatalogassignment_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  internalcatalogassignment_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  internalcatalogassignment_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  internalcatalogassignments: WebMappingRetrieve<InternalCatalogAssignment_Select,InternalCatalogAssignment_Expand,InternalCatalogAssignment_Filter,InternalCatalogAssignment_Fixed,InternalCatalogAssignment_Result,InternalCatalogAssignment_FormattedResult>;
}
interface WebEntitiesRelated {
  internalcatalogassignments: WebMappingRelated<InternalCatalogAssignment_RelatedOne,InternalCatalogAssignment_RelatedMany>;
}
interface WebEntitiesCUDA {
  internalcatalogassignments: WebMappingCUDA<InternalCatalogAssignment_Create,InternalCatalogAssignment_Update,InternalCatalogAssignment_Select>;
}
