interface Catalog_Base extends WebEntity {
  catalogid?: string | null;
  componentidunique?: string | null;
  componentstate?: componentstate | null;
  createdon?: Date | null;
  description?: string | null;
  displayname?: string | null;
  importsequencenumber?: number | null;
  iscustomizable?: any | null;
  ismanaged?: boolean | null;
  modifiedon?: Date | null;
  name?: string | null;
  overriddencreatedon?: Date | null;
  overwritetime?: Date | null;
  solutionid?: string | null;
  statecode?: catalog_statecode | null;
  statuscode?: catalog_statuscode | null;
  supportingsolutionid?: string | null;
  timezoneruleversionnumber?: number | null;
  uniquename?: string | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface Catalog_Relationships {
  Catalog_CatalogAssignment?: CatalogAssignment_Result[] | null;
  InternalCatalogAssignmentId?: InternalCatalogAssignment_Result[] | null;
  ParentCatalogId?: Catalog_Result | null;
  SubCatalogs?: Catalog_Result[] | null;
  catalog_AsyncOperations?: AsyncOperation_Result[] | null;
  catalog_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  catalog_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  catalog_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  catalog_ProcessSession?: ProcessSession_Result[] | null;
  catalog_SyncErrors?: SyncError_Result[] | null;
  catalog_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface Catalog extends Catalog_Base, Catalog_Relationships {
}
interface Catalog_Create extends Catalog {
  ParentCatalogId_bind$catalogs?: string | null;
}
interface Catalog_Update extends Catalog {
}
interface Catalog_Select {
  catalogid: WebAttribute<Catalog_Select, { catalogid: string | null }, {  }>;
  componentidunique: WebAttribute<Catalog_Select, { componentidunique: string | null }, {  }>;
  componentstate: WebAttribute<Catalog_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  createdby_guid: WebAttribute<Catalog_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<Catalog_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<Catalog_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  description: WebAttribute<Catalog_Select, { description: string | null }, {  }>;
  displayname: WebAttribute<Catalog_Select, { displayname: string | null }, {  }>;
  importsequencenumber: WebAttribute<Catalog_Select, { importsequencenumber: number | null }, {  }>;
  iscustomizable: WebAttribute<Catalog_Select, { iscustomizable: any | null }, {  }>;
  ismanaged: WebAttribute<Catalog_Select, { ismanaged: boolean | null }, {  }>;
  modifiedby_guid: WebAttribute<Catalog_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<Catalog_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<Catalog_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  name: WebAttribute<Catalog_Select, { name: string | null }, {  }>;
  organizationid_guid: WebAttribute<Catalog_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overriddencreatedon: WebAttribute<Catalog_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  overwritetime: WebAttribute<Catalog_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  parentcatalogid_guid: WebAttribute<Catalog_Select, { parentcatalogid_guid: string | null }, { parentcatalogid_formatted?: string }>;
  solutionid: WebAttribute<Catalog_Select, { solutionid: string | null }, {  }>;
  statecode: WebAttribute<Catalog_Select, { statecode: catalog_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<Catalog_Select, { statuscode: catalog_statuscode | null }, { statuscode_formatted?: string }>;
  supportingsolutionid: WebAttribute<Catalog_Select, { supportingsolutionid: string | null }, {  }>;
  timezoneruleversionnumber: WebAttribute<Catalog_Select, { timezoneruleversionnumber: number | null }, {  }>;
  uniquename: WebAttribute<Catalog_Select, { uniquename: string | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<Catalog_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<Catalog_Select, { versionnumber: number | null }, {  }>;
}
interface Catalog_Filter {
  catalogid: XQW.Guid;
  componentidunique: XQW.Guid;
  componentstate: componentstate;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  description: string;
  displayname: string;
  importsequencenumber: number;
  iscustomizable: any;
  ismanaged: boolean;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  name: string;
  organizationid_guid: XQW.Guid;
  overriddencreatedon: Date;
  overwritetime: Date;
  parentcatalogid_guid: XQW.Guid;
  solutionid: XQW.Guid;
  statecode: catalog_statecode;
  statuscode: catalog_statuscode;
  supportingsolutionid: XQW.Guid;
  timezoneruleversionnumber: number;
  uniquename: string;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface Catalog_Expand {
  Catalog_CatalogAssignment: WebExpand<Catalog_Expand, CatalogAssignment_Select, CatalogAssignment_Filter, { Catalog_CatalogAssignment: CatalogAssignment_Result[] }>;
  InternalCatalogAssignmentId: WebExpand<Catalog_Expand, InternalCatalogAssignment_Select, InternalCatalogAssignment_Filter, { InternalCatalogAssignmentId: InternalCatalogAssignment_Result[] }>;
  ParentCatalogId: WebExpand<Catalog_Expand, Catalog_Select, Catalog_Filter, { ParentCatalogId: Catalog_Result }>;
  SubCatalogs: WebExpand<Catalog_Expand, Catalog_Select, Catalog_Filter, { SubCatalogs: Catalog_Result[] }>;
  catalog_AsyncOperations: WebExpand<Catalog_Expand, AsyncOperation_Select, AsyncOperation_Filter, { catalog_AsyncOperations: AsyncOperation_Result[] }>;
  catalog_BulkDeleteFailures: WebExpand<Catalog_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { catalog_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  catalog_MailboxTrackingFolders: WebExpand<Catalog_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { catalog_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  catalog_PrincipalObjectAttributeAccesses: WebExpand<Catalog_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { catalog_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  catalog_ProcessSession: WebExpand<Catalog_Expand, ProcessSession_Select, ProcessSession_Filter, { catalog_ProcessSession: ProcessSession_Result[] }>;
  catalog_SyncErrors: WebExpand<Catalog_Expand, SyncError_Select, SyncError_Filter, { catalog_SyncErrors: SyncError_Result[] }>;
  catalog_UserEntityInstanceDatas: WebExpand<Catalog_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { catalog_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  createdby: WebExpand<Catalog_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<Catalog_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<Catalog_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<Catalog_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  organizationid: WebExpand<Catalog_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
}
interface Catalog_FormattedResult {
  componentstate_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  organizationid_formatted?: string;
  overriddencreatedon_formatted?: string;
  overwritetime_formatted?: string;
  parentcatalogid_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface Catalog_Result extends Catalog_Base, Catalog_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
  parentcatalogid_guid: string | null;
}
interface Catalog_RelatedOne {
  ParentCatalogId: WebMappingRetrieve<Catalog_Select,Catalog_Expand,Catalog_Filter,Catalog_Fixed,Catalog_Result,Catalog_FormattedResult>;
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
}
interface Catalog_RelatedMany {
  Catalog_CatalogAssignment: WebMappingRetrieve<CatalogAssignment_Select,CatalogAssignment_Expand,CatalogAssignment_Filter,CatalogAssignment_Fixed,CatalogAssignment_Result,CatalogAssignment_FormattedResult>;
  InternalCatalogAssignmentId: WebMappingRetrieve<InternalCatalogAssignment_Select,InternalCatalogAssignment_Expand,InternalCatalogAssignment_Filter,InternalCatalogAssignment_Fixed,InternalCatalogAssignment_Result,InternalCatalogAssignment_FormattedResult>;
  SubCatalogs: WebMappingRetrieve<Catalog_Select,Catalog_Expand,Catalog_Filter,Catalog_Fixed,Catalog_Result,Catalog_FormattedResult>;
  catalog_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  catalog_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  catalog_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  catalog_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  catalog_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  catalog_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  catalog_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  catalogs: WebMappingRetrieve<Catalog_Select,Catalog_Expand,Catalog_Filter,Catalog_Fixed,Catalog_Result,Catalog_FormattedResult>;
}
interface WebEntitiesRelated {
  catalogs: WebMappingRelated<Catalog_RelatedOne,Catalog_RelatedMany>;
}
interface WebEntitiesCUDA {
  catalogs: WebMappingCUDA<Catalog_Create,Catalog_Update,Catalog_Select>;
}
