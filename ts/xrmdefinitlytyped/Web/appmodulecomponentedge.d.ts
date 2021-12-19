interface AppModuleComponentEdge_Base extends WebEntity {
  appmodulecomponentedgeid?: string | null;
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  name?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: appmodulecomponentedge_statecode | null;
  statuscode?: appmodulecomponentedge_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface AppModuleComponentEdge_Relationships {
  ComponentNodeFrom?: AppModuleComponentNode_Result | null;
  ComponentNodeTo?: AppModuleComponentNode_Result | null;
  appmodulecomponentedge_AsyncOperations?: AsyncOperation_Result[] | null;
  appmodulecomponentedge_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  appmodulecomponentedge_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  appmodulecomponentedge_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  appmodulecomponentedge_ProcessSession?: ProcessSession_Result[] | null;
  appmodulecomponentedge_SyncErrors?: SyncError_Result[] | null;
  appmodulecomponentedge_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface AppModuleComponentEdge extends AppModuleComponentEdge_Base, AppModuleComponentEdge_Relationships {
  ComponentNodeFrom_bind$appmodulecomponentnodes?: string | null;
  ComponentNodeTo_bind$appmodulecomponentnodes?: string | null;
}
interface AppModuleComponentEdge_Create extends AppModuleComponentEdge {
}
interface AppModuleComponentEdge_Update extends AppModuleComponentEdge {
}
interface AppModuleComponentEdge_Select {
  appmodulecomponentedgeid: WebAttribute<AppModuleComponentEdge_Select, { appmodulecomponentedgeid: string | null }, {  }>;
  componentnodefrom_guid: WebAttribute<AppModuleComponentEdge_Select, { componentnodefrom_guid: string | null }, { componentnodefrom_formatted?: string }>;
  componentnodeto_guid: WebAttribute<AppModuleComponentEdge_Select, { componentnodeto_guid: string | null }, { componentnodeto_formatted?: string }>;
  createdby_guid: WebAttribute<AppModuleComponentEdge_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<AppModuleComponentEdge_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<AppModuleComponentEdge_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<AppModuleComponentEdge_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<AppModuleComponentEdge_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<AppModuleComponentEdge_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<AppModuleComponentEdge_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  name: WebAttribute<AppModuleComponentEdge_Select, { name: string | null }, {  }>;
  organizationid_guid: WebAttribute<AppModuleComponentEdge_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overriddencreatedon: WebAttribute<AppModuleComponentEdge_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  statecode: WebAttribute<AppModuleComponentEdge_Select, { statecode: appmodulecomponentedge_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<AppModuleComponentEdge_Select, { statuscode: appmodulecomponentedge_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<AppModuleComponentEdge_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<AppModuleComponentEdge_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<AppModuleComponentEdge_Select, { versionnumber: number | null }, {  }>;
}
interface AppModuleComponentEdge_Filter {
  appmodulecomponentedgeid: XQW.Guid;
  componentnodefrom_guid: XQW.Guid;
  componentnodeto_guid: XQW.Guid;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  name: string;
  organizationid_guid: XQW.Guid;
  overriddencreatedon: Date;
  statecode: appmodulecomponentedge_statecode;
  statuscode: appmodulecomponentedge_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface AppModuleComponentEdge_Expand {
  ComponentNodeFrom: WebExpand<AppModuleComponentEdge_Expand, AppModuleComponentNode_Select, AppModuleComponentNode_Filter, { ComponentNodeFrom: AppModuleComponentNode_Result }>;
  ComponentNodeTo: WebExpand<AppModuleComponentEdge_Expand, AppModuleComponentNode_Select, AppModuleComponentNode_Filter, { ComponentNodeTo: AppModuleComponentNode_Result }>;
  appmodulecomponentedge_AsyncOperations: WebExpand<AppModuleComponentEdge_Expand, AsyncOperation_Select, AsyncOperation_Filter, { appmodulecomponentedge_AsyncOperations: AsyncOperation_Result[] }>;
  appmodulecomponentedge_BulkDeleteFailures: WebExpand<AppModuleComponentEdge_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { appmodulecomponentedge_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  appmodulecomponentedge_MailboxTrackingFolders: WebExpand<AppModuleComponentEdge_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { appmodulecomponentedge_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  appmodulecomponentedge_PrincipalObjectAttributeAccesses: WebExpand<AppModuleComponentEdge_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { appmodulecomponentedge_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  appmodulecomponentedge_ProcessSession: WebExpand<AppModuleComponentEdge_Expand, ProcessSession_Select, ProcessSession_Filter, { appmodulecomponentedge_ProcessSession: ProcessSession_Result[] }>;
  appmodulecomponentedge_SyncErrors: WebExpand<AppModuleComponentEdge_Expand, SyncError_Select, SyncError_Filter, { appmodulecomponentedge_SyncErrors: SyncError_Result[] }>;
  appmodulecomponentedge_UserEntityInstanceDatas: WebExpand<AppModuleComponentEdge_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { appmodulecomponentedge_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  createdby: WebExpand<AppModuleComponentEdge_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<AppModuleComponentEdge_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<AppModuleComponentEdge_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<AppModuleComponentEdge_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  organizationid: WebExpand<AppModuleComponentEdge_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
}
interface AppModuleComponentEdge_FormattedResult {
  componentnodefrom_formatted?: string;
  componentnodeto_formatted?: string;
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
interface AppModuleComponentEdge_Result extends AppModuleComponentEdge_Base, AppModuleComponentEdge_Relationships {
  "@odata.etag": string;
  componentnodefrom_guid: string | null;
  componentnodeto_guid: string | null;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
}
interface AppModuleComponentEdge_RelatedOne {
  ComponentNodeFrom: WebMappingRetrieve<AppModuleComponentNode_Select,AppModuleComponentNode_Expand,AppModuleComponentNode_Filter,AppModuleComponentNode_Fixed,AppModuleComponentNode_Result,AppModuleComponentNode_FormattedResult>;
  ComponentNodeTo: WebMappingRetrieve<AppModuleComponentNode_Select,AppModuleComponentNode_Expand,AppModuleComponentNode_Filter,AppModuleComponentNode_Fixed,AppModuleComponentNode_Result,AppModuleComponentNode_FormattedResult>;
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
}
interface AppModuleComponentEdge_RelatedMany {
  appmodulecomponentedge_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  appmodulecomponentedge_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  appmodulecomponentedge_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  appmodulecomponentedge_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  appmodulecomponentedge_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  appmodulecomponentedge_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  appmodulecomponentedge_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  appmodulecomponentedges: WebMappingRetrieve<AppModuleComponentEdge_Select,AppModuleComponentEdge_Expand,AppModuleComponentEdge_Filter,AppModuleComponentEdge_Fixed,AppModuleComponentEdge_Result,AppModuleComponentEdge_FormattedResult>;
}
interface WebEntitiesRelated {
  appmodulecomponentedges: WebMappingRelated<AppModuleComponentEdge_RelatedOne,AppModuleComponentEdge_RelatedMany>;
}
interface WebEntitiesCUDA {
  appmodulecomponentedges: WebMappingCUDA<AppModuleComponentEdge_Create,AppModuleComponentEdge_Update,AppModuleComponentEdge_Select>;
}
