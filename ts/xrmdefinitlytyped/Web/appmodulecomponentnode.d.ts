interface AppModuleComponentNode_Base extends WebEntity {
  appmodulecomponentnodeid?: string | null;
  componentdatabaseversion?: string | null;
  componentobjectid?: string | null;
  componenttype?: number | null;
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  name?: string | null;
  overriddencreatedon?: Date | null;
  snapshotversionnumber?: number | null;
  statecode?: appmodulecomponentnode_statecode | null;
  statuscode?: appmodulecomponentnode_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  validationresult?: string | null;
  validationstatus?: appmodulecomponentnode_validationstatus | null;
  versionnumber?: number | null;
}
interface AppModuleComponentNode_Relationships {
  appmodulecomponentnode_AsyncOperations?: AsyncOperation_Result[] | null;
  appmodulecomponentnode_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  appmodulecomponentnode_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  appmodulecomponentnode_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  appmodulecomponentnode_ProcessSession?: ProcessSession_Result[] | null;
  appmodulecomponentnode_SyncErrors?: SyncError_Result[] | null;
  appmodulecomponentnode_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  appmodulecomponentnode_appmodulecomponentedge_ComponentNodeFrom?: AppModuleComponentEdge_Result[] | null;
  appmodulecomponentnode_appmodulecomponentedge_ComponentNodeTo?: AppModuleComponentEdge_Result[] | null;
}
interface AppModuleComponentNode extends AppModuleComponentNode_Base, AppModuleComponentNode_Relationships {
}
interface AppModuleComponentNode_Create extends AppModuleComponentNode {
}
interface AppModuleComponentNode_Update extends AppModuleComponentNode {
}
interface AppModuleComponentNode_Select {
  appmodulecomponentnodeid: WebAttribute<AppModuleComponentNode_Select, { appmodulecomponentnodeid: string | null }, {  }>;
  componentdatabaseversion: WebAttribute<AppModuleComponentNode_Select, { componentdatabaseversion: string | null }, {  }>;
  componentobjectid: WebAttribute<AppModuleComponentNode_Select, { componentobjectid: string | null }, {  }>;
  componenttype: WebAttribute<AppModuleComponentNode_Select, { componenttype: number | null }, {  }>;
  createdby_guid: WebAttribute<AppModuleComponentNode_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<AppModuleComponentNode_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<AppModuleComponentNode_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<AppModuleComponentNode_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<AppModuleComponentNode_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<AppModuleComponentNode_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<AppModuleComponentNode_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  name: WebAttribute<AppModuleComponentNode_Select, { name: string | null }, {  }>;
  organizationid_guid: WebAttribute<AppModuleComponentNode_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overriddencreatedon: WebAttribute<AppModuleComponentNode_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  snapshotversionnumber: WebAttribute<AppModuleComponentNode_Select, { snapshotversionnumber: number | null }, {  }>;
  statecode: WebAttribute<AppModuleComponentNode_Select, { statecode: appmodulecomponentnode_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<AppModuleComponentNode_Select, { statuscode: appmodulecomponentnode_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<AppModuleComponentNode_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<AppModuleComponentNode_Select, { utcconversiontimezonecode: number | null }, {  }>;
  validationresult: WebAttribute<AppModuleComponentNode_Select, { validationresult: string | null }, {  }>;
  validationstatus: WebAttribute<AppModuleComponentNode_Select, { validationstatus: appmodulecomponentnode_validationstatus | null }, { validationstatus_formatted?: string }>;
  versionnumber: WebAttribute<AppModuleComponentNode_Select, { versionnumber: number | null }, {  }>;
}
interface AppModuleComponentNode_Filter {
  appmodulecomponentnodeid: XQW.Guid;
  componentdatabaseversion: string;
  componentobjectid: string;
  componenttype: number;
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
  snapshotversionnumber: number;
  statecode: appmodulecomponentnode_statecode;
  statuscode: appmodulecomponentnode_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  validationresult: string;
  validationstatus: appmodulecomponentnode_validationstatus;
  versionnumber: number;
}
interface AppModuleComponentNode_Expand {
  appmodulecomponentnode_AsyncOperations: WebExpand<AppModuleComponentNode_Expand, AsyncOperation_Select, AsyncOperation_Filter, { appmodulecomponentnode_AsyncOperations: AsyncOperation_Result[] }>;
  appmodulecomponentnode_BulkDeleteFailures: WebExpand<AppModuleComponentNode_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { appmodulecomponentnode_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  appmodulecomponentnode_MailboxTrackingFolders: WebExpand<AppModuleComponentNode_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { appmodulecomponentnode_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  appmodulecomponentnode_PrincipalObjectAttributeAccesses: WebExpand<AppModuleComponentNode_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { appmodulecomponentnode_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  appmodulecomponentnode_ProcessSession: WebExpand<AppModuleComponentNode_Expand, ProcessSession_Select, ProcessSession_Filter, { appmodulecomponentnode_ProcessSession: ProcessSession_Result[] }>;
  appmodulecomponentnode_SyncErrors: WebExpand<AppModuleComponentNode_Expand, SyncError_Select, SyncError_Filter, { appmodulecomponentnode_SyncErrors: SyncError_Result[] }>;
  appmodulecomponentnode_UserEntityInstanceDatas: WebExpand<AppModuleComponentNode_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { appmodulecomponentnode_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  appmodulecomponentnode_appmodulecomponentedge_ComponentNodeFrom: WebExpand<AppModuleComponentNode_Expand, AppModuleComponentEdge_Select, AppModuleComponentEdge_Filter, { appmodulecomponentnode_appmodulecomponentedge_ComponentNodeFrom: AppModuleComponentEdge_Result[] }>;
  appmodulecomponentnode_appmodulecomponentedge_ComponentNodeTo: WebExpand<AppModuleComponentNode_Expand, AppModuleComponentEdge_Select, AppModuleComponentEdge_Filter, { appmodulecomponentnode_appmodulecomponentedge_ComponentNodeTo: AppModuleComponentEdge_Result[] }>;
  createdby: WebExpand<AppModuleComponentNode_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<AppModuleComponentNode_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<AppModuleComponentNode_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<AppModuleComponentNode_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  organizationid: WebExpand<AppModuleComponentNode_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
}
interface AppModuleComponentNode_FormattedResult {
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
  validationstatus_formatted?: string;
}
interface AppModuleComponentNode_Result extends AppModuleComponentNode_Base, AppModuleComponentNode_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
}
interface AppModuleComponentNode_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
}
interface AppModuleComponentNode_RelatedMany {
  appmodulecomponentnode_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  appmodulecomponentnode_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  appmodulecomponentnode_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  appmodulecomponentnode_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  appmodulecomponentnode_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  appmodulecomponentnode_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  appmodulecomponentnode_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  appmodulecomponentnode_appmodulecomponentedge_ComponentNodeFrom: WebMappingRetrieve<AppModuleComponentEdge_Select,AppModuleComponentEdge_Expand,AppModuleComponentEdge_Filter,AppModuleComponentEdge_Fixed,AppModuleComponentEdge_Result,AppModuleComponentEdge_FormattedResult>;
  appmodulecomponentnode_appmodulecomponentedge_ComponentNodeTo: WebMappingRetrieve<AppModuleComponentEdge_Select,AppModuleComponentEdge_Expand,AppModuleComponentEdge_Filter,AppModuleComponentEdge_Fixed,AppModuleComponentEdge_Result,AppModuleComponentEdge_FormattedResult>;
}
interface WebEntitiesRetrieve {
  appmodulecomponentnodes: WebMappingRetrieve<AppModuleComponentNode_Select,AppModuleComponentNode_Expand,AppModuleComponentNode_Filter,AppModuleComponentNode_Fixed,AppModuleComponentNode_Result,AppModuleComponentNode_FormattedResult>;
}
interface WebEntitiesRelated {
  appmodulecomponentnodes: WebMappingRelated<AppModuleComponentNode_RelatedOne,AppModuleComponentNode_RelatedMany>;
}
interface WebEntitiesCUDA {
  appmodulecomponentnodes: WebMappingCUDA<AppModuleComponentNode_Create,AppModuleComponentNode_Update,AppModuleComponentNode_Select>;
}
