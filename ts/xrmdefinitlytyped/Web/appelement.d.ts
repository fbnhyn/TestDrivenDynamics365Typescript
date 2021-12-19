interface AppElement_Base extends WebEntity {
  appelementid?: string | null;
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
  publishconfiguration?: string | null;
  solutionid?: string | null;
  statecode?: appelement_statecode | null;
  statuscode?: appelement_statuscode | null;
  supportingsolutionid?: string | null;
  timezoneruleversionnumber?: number | null;
  uniquename?: string | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface AppElement_Relationships {
  appelement_AsyncOperations?: AsyncOperation_Result[] | null;
  appelement_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  appelement_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  appelement_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  appelement_ProcessSession?: ProcessSession_Result[] | null;
  appelement_SyncErrors?: SyncError_Result[] | null;
  appelement_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface AppElement extends AppElement_Base, AppElement_Relationships {
}
interface AppElement_Create extends AppElement {
  canvasappid_bind$canvasapps?: string | null;
  parentappmoduleid_bind$appmodules?: string | null;
}
interface AppElement_Update extends AppElement {
}
interface AppElement_Select {
  appelementid: WebAttribute<AppElement_Select, { appelementid: string | null }, {  }>;
  canvasappid_guid: WebAttribute<AppElement_Select, { canvasappid_guid: string | null }, { canvasappid_formatted?: string }>;
  componentidunique: WebAttribute<AppElement_Select, { componentidunique: string | null }, {  }>;
  componentstate: WebAttribute<AppElement_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  createdby_guid: WebAttribute<AppElement_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<AppElement_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<AppElement_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<AppElement_Select, { importsequencenumber: number | null }, {  }>;
  iscustomizable: WebAttribute<AppElement_Select, { iscustomizable: any | null }, {  }>;
  ismanaged: WebAttribute<AppElement_Select, { ismanaged: boolean | null }, {  }>;
  modifiedby_guid: WebAttribute<AppElement_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<AppElement_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<AppElement_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  name: WebAttribute<AppElement_Select, { name: string | null }, {  }>;
  organizationid_guid: WebAttribute<AppElement_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overriddencreatedon: WebAttribute<AppElement_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  overwritetime: WebAttribute<AppElement_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  parentappmoduleid_guid: WebAttribute<AppElement_Select, { parentappmoduleid_guid: string | null }, { parentappmoduleid_formatted?: string }>;
  publishconfiguration: WebAttribute<AppElement_Select, { publishconfiguration: string | null }, {  }>;
  solutionid: WebAttribute<AppElement_Select, { solutionid: string | null }, {  }>;
  statecode: WebAttribute<AppElement_Select, { statecode: appelement_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<AppElement_Select, { statuscode: appelement_statuscode | null }, { statuscode_formatted?: string }>;
  supportingsolutionid: WebAttribute<AppElement_Select, { supportingsolutionid: string | null }, {  }>;
  timezoneruleversionnumber: WebAttribute<AppElement_Select, { timezoneruleversionnumber: number | null }, {  }>;
  uniquename: WebAttribute<AppElement_Select, { uniquename: string | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<AppElement_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<AppElement_Select, { versionnumber: number | null }, {  }>;
}
interface AppElement_Filter {
  appelementid: XQW.Guid;
  canvasappid_guid: XQW.Guid;
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
  organizationid_guid: XQW.Guid;
  overriddencreatedon: Date;
  overwritetime: Date;
  parentappmoduleid_guid: XQW.Guid;
  publishconfiguration: string;
  solutionid: XQW.Guid;
  statecode: appelement_statecode;
  statuscode: appelement_statuscode;
  supportingsolutionid: XQW.Guid;
  timezoneruleversionnumber: number;
  uniquename: string;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface AppElement_Expand {
  appelement_AsyncOperations: WebExpand<AppElement_Expand, AsyncOperation_Select, AsyncOperation_Filter, { appelement_AsyncOperations: AsyncOperation_Result[] }>;
  appelement_BulkDeleteFailures: WebExpand<AppElement_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { appelement_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  appelement_MailboxTrackingFolders: WebExpand<AppElement_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { appelement_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  appelement_PrincipalObjectAttributeAccesses: WebExpand<AppElement_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { appelement_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  appelement_ProcessSession: WebExpand<AppElement_Expand, ProcessSession_Select, ProcessSession_Filter, { appelement_ProcessSession: ProcessSession_Result[] }>;
  appelement_SyncErrors: WebExpand<AppElement_Expand, SyncError_Select, SyncError_Filter, { appelement_SyncErrors: SyncError_Result[] }>;
  appelement_UserEntityInstanceDatas: WebExpand<AppElement_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { appelement_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  canvasappid: WebExpand<AppElement_Expand, CanvasApp_Select, CanvasApp_Filter, { canvasappid: CanvasApp_Result }>;
  createdby: WebExpand<AppElement_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<AppElement_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<AppElement_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<AppElement_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  organizationid: WebExpand<AppElement_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
  parentappmoduleid: WebExpand<AppElement_Expand, AppModule_Select, AppModule_Filter, { parentappmoduleid: AppModule_Result }>;
}
interface AppElement_FormattedResult {
  canvasappid_formatted?: string;
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
  parentappmoduleid_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface AppElement_Result extends AppElement_Base, AppElement_Relationships {
  "@odata.etag": string;
  canvasappid_guid: string | null;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
  parentappmoduleid_guid: string | null;
}
interface AppElement_RelatedOne {
  canvasappid: WebMappingRetrieve<CanvasApp_Select,CanvasApp_Expand,CanvasApp_Filter,CanvasApp_Fixed,CanvasApp_Result,CanvasApp_FormattedResult>;
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
  parentappmoduleid: WebMappingRetrieve<AppModule_Select,AppModule_Expand,AppModule_Filter,AppModule_Fixed,AppModule_Result,AppModule_FormattedResult>;
}
interface AppElement_RelatedMany {
  appelement_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  appelement_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  appelement_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  appelement_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  appelement_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  appelement_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  appelement_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  appelements: WebMappingRetrieve<AppElement_Select,AppElement_Expand,AppElement_Filter,AppElement_Fixed,AppElement_Result,AppElement_FormattedResult>;
}
interface WebEntitiesRelated {
  appelements: WebMappingRelated<AppElement_RelatedOne,AppElement_RelatedMany>;
}
interface WebEntitiesCUDA {
  appelements: WebMappingCUDA<AppElement_Create,AppElement_Update,AppElement_Select>;
}
