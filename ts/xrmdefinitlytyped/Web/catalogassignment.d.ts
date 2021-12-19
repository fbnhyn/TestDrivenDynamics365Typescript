interface CatalogAssignment_Base extends WebEntity {
  catalogassignmentid?: string | null;
  componentidunique?: string | null;
  componentstate?: componentstate | null;
  createdon?: Date | null;
  importsequencenumber?: number | null;
  iscustomizable?: any | null;
  ismanaged?: boolean | null;
  modifiedon?: Date | null;
  name?: string | null;
  overriddencreatedon?: Date | null;
  overwritetime?: Date | null;
  solutionid?: string | null;
  statecode?: catalogassignment_statecode | null;
  statuscode?: catalogassignment_statuscode | null;
  supportingsolutionid?: string | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface CatalogAssignment_Relationships {
  CatalogId?: Catalog_Result | null;
  CustomAPIId?: CustomAPI_Result | null;
  EntityId?: Entity_Result | null;
  WorkflowId?: Workflow_Result | null;
  catalogassignment_AsyncOperations?: AsyncOperation_Result[] | null;
  catalogassignment_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  catalogassignment_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  catalogassignment_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  catalogassignment_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  catalogassignment_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  catalogassignment_ProcessSession?: ProcessSession_Result[] | null;
  catalogassignment_SyncErrors?: SyncError_Result[] | null;
  catalogassignment_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface CatalogAssignment extends CatalogAssignment_Base, CatalogAssignment_Relationships {
}
interface CatalogAssignment_Create extends CatalogAssignment {
  CatalogId_bind$catalogs?: string | null;
  CustomAPIId_bind$customapis?: string | null;
  EntityId_bind$entities?: string | null;
  WorkflowId_bind$workflows?: string | null;
}
interface CatalogAssignment_Update extends CatalogAssignment {
}
interface CatalogAssignment_Select {
  catalogassignmentid: WebAttribute<CatalogAssignment_Select, { catalogassignmentid: string | null }, {  }>;
  catalogid_guid: WebAttribute<CatalogAssignment_Select, { catalogid_guid: string | null }, { catalogid_formatted?: string }>;
  componentidunique: WebAttribute<CatalogAssignment_Select, { componentidunique: string | null }, {  }>;
  componentstate: WebAttribute<CatalogAssignment_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  createdby_guid: WebAttribute<CatalogAssignment_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<CatalogAssignment_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<CatalogAssignment_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<CatalogAssignment_Select, { importsequencenumber: number | null }, {  }>;
  iscustomizable: WebAttribute<CatalogAssignment_Select, { iscustomizable: any | null }, {  }>;
  ismanaged: WebAttribute<CatalogAssignment_Select, { ismanaged: boolean | null }, {  }>;
  modifiedby_guid: WebAttribute<CatalogAssignment_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<CatalogAssignment_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<CatalogAssignment_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  name: WebAttribute<CatalogAssignment_Select, { name: string | null }, {  }>;
  object_guid: WebAttribute<CatalogAssignment_Select, { object_guid: string | null }, { object_formatted?: string }>;
  organizationid_guid: WebAttribute<CatalogAssignment_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overriddencreatedon: WebAttribute<CatalogAssignment_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  overwritetime: WebAttribute<CatalogAssignment_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  solutionid: WebAttribute<CatalogAssignment_Select, { solutionid: string | null }, {  }>;
  statecode: WebAttribute<CatalogAssignment_Select, { statecode: catalogassignment_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<CatalogAssignment_Select, { statuscode: catalogassignment_statuscode | null }, { statuscode_formatted?: string }>;
  supportingsolutionid: WebAttribute<CatalogAssignment_Select, { supportingsolutionid: string | null }, {  }>;
  timezoneruleversionnumber: WebAttribute<CatalogAssignment_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<CatalogAssignment_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<CatalogAssignment_Select, { versionnumber: number | null }, {  }>;
}
interface CatalogAssignment_Filter {
  catalogassignmentid: XQW.Guid;
  catalogid_guid: XQW.Guid;
  componentidunique: XQW.Guid;
  componentstate: componentstate;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
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
  statecode: catalogassignment_statecode;
  statuscode: catalogassignment_statuscode;
  supportingsolutionid: XQW.Guid;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface CatalogAssignment_Expand {
  CatalogId: WebExpand<CatalogAssignment_Expand, Catalog_Select, Catalog_Filter, { CatalogId: Catalog_Result }>;
  CustomAPIId: WebExpand<CatalogAssignment_Expand, CustomAPI_Select, CustomAPI_Filter, { CustomAPIId: CustomAPI_Result }>;
  EntityId: WebExpand<CatalogAssignment_Expand, Entity_Select, Entity_Filter, { EntityId: Entity_Result }>;
  WorkflowId: WebExpand<CatalogAssignment_Expand, Workflow_Select, Workflow_Filter, { WorkflowId: Workflow_Result }>;
  catalogassignment_AsyncOperations: WebExpand<CatalogAssignment_Expand, AsyncOperation_Select, AsyncOperation_Filter, { catalogassignment_AsyncOperations: AsyncOperation_Result[] }>;
  catalogassignment_BulkDeleteFailures: WebExpand<CatalogAssignment_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { catalogassignment_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  catalogassignment_DuplicateBaseRecord: WebExpand<CatalogAssignment_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { catalogassignment_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  catalogassignment_DuplicateMatchingRecord: WebExpand<CatalogAssignment_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { catalogassignment_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  catalogassignment_MailboxTrackingFolders: WebExpand<CatalogAssignment_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { catalogassignment_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  catalogassignment_PrincipalObjectAttributeAccesses: WebExpand<CatalogAssignment_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { catalogassignment_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  catalogassignment_ProcessSession: WebExpand<CatalogAssignment_Expand, ProcessSession_Select, ProcessSession_Filter, { catalogassignment_ProcessSession: ProcessSession_Result[] }>;
  catalogassignment_SyncErrors: WebExpand<CatalogAssignment_Expand, SyncError_Select, SyncError_Filter, { catalogassignment_SyncErrors: SyncError_Result[] }>;
  catalogassignment_UserEntityInstanceDatas: WebExpand<CatalogAssignment_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { catalogassignment_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  createdby: WebExpand<CatalogAssignment_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<CatalogAssignment_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<CatalogAssignment_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<CatalogAssignment_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  organizationid: WebExpand<CatalogAssignment_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
}
interface CatalogAssignment_FormattedResult {
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
interface CatalogAssignment_Result extends CatalogAssignment_Base, CatalogAssignment_Relationships {
  "@odata.etag": string;
  catalogid_guid: string | null;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  object_guid: string | null;
  organizationid_guid: string | null;
}
interface CatalogAssignment_RelatedOne {
  CatalogId: WebMappingRetrieve<Catalog_Select,Catalog_Expand,Catalog_Filter,Catalog_Fixed,Catalog_Result,Catalog_FormattedResult>;
  CustomAPIId: WebMappingRetrieve<CustomAPI_Select,CustomAPI_Expand,CustomAPI_Filter,CustomAPI_Fixed,CustomAPI_Result,CustomAPI_FormattedResult>;
  EntityId: WebMappingRetrieve<Entity_Select,Entity_Expand,Entity_Filter,Entity_Fixed,Entity_Result,Entity_FormattedResult>;
  WorkflowId: WebMappingRetrieve<Workflow_Select,Workflow_Expand,Workflow_Filter,Workflow_Fixed,Workflow_Result,Workflow_FormattedResult>;
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
}
interface CatalogAssignment_RelatedMany {
  catalogassignment_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  catalogassignment_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  catalogassignment_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  catalogassignment_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  catalogassignment_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  catalogassignment_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  catalogassignment_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  catalogassignment_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  catalogassignment_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  catalogassignments: WebMappingRetrieve<CatalogAssignment_Select,CatalogAssignment_Expand,CatalogAssignment_Filter,CatalogAssignment_Fixed,CatalogAssignment_Result,CatalogAssignment_FormattedResult>;
}
interface WebEntitiesRelated {
  catalogassignments: WebMappingRelated<CatalogAssignment_RelatedOne,CatalogAssignment_RelatedMany>;
}
interface WebEntitiesCUDA {
  catalogassignments: WebMappingCUDA<CatalogAssignment_Create,CatalogAssignment_Update,CatalogAssignment_Select>;
}
