interface appaction_Base extends WebEntity {
  appactionid?: string | null;
  buttonaccessibilitytext?: string | null;
  buttonlabeltext?: string | null;
  buttonsequencepriority?: number | null;
  buttontooltipdescription?: string | null;
  buttontooltiptitle?: string | null;
  clienttype?: appaction_clienttype | null;
  componentidunique?: string | null;
  componentstate?: componentstate | null;
  context?: appaction_context | null;
  contextvalue?: string | null;
  createdon?: Date | null;
  fonticon?: string | null;
  hidden?: boolean | null;
  importsequencenumber?: number | null;
  iscustomizable?: any | null;
  ismanaged?: boolean | null;
  location?: appaction_location | null;
  modifiedon?: Date | null;
  name?: string | null;
  onclickeventformulacomponentlibrary?: string | null;
  onclickeventformulacomponentname?: string | null;
  onclickeventformulafunctionname?: string | null;
  onclickeventjavascriptfunctionname?: string | null;
  onclickeventjavascriptparameters?: string | null;
  onclickeventtype?: appaction_onclickeventtype | null;
  overriddencreatedon?: Date | null;
  overwritetime?: Date | null;
  solutionid?: string | null;
  statecode?: appaction_statecode | null;
  statuscode?: appaction_statuscode | null;
  supportingsolutionid?: string | null;
  timezoneruleversionnumber?: number | null;
  type?: appaction_type | null;
  uniquename?: string | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
  visibilityformulacomponentlibrary?: string | null;
  visibilityformulacomponentname?: string | null;
  visibilityformulafunctionname?: string | null;
}
interface appaction_Relationships {
  AppModuleId?: AppModule_Result | null;
  ContextEntity?: Entity_Result | null;
  IconWebResourceId?: WebResource_Result | null;
  OnClickEventFormulaComponentLibraryId?: CanvasApp_Result | null;
  OnClickEventJavaScriptWebResourceId?: WebResource_Result | null;
  VisibilityFormulaComponentLibraryId?: CanvasApp_Result | null;
  appaction_AsyncOperations?: AsyncOperation_Result[] | null;
  appaction_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  appaction_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  appaction_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  appaction_ProcessSession?: ProcessSession_Result[] | null;
  appaction_SyncErrors?: SyncError_Result[] | null;
  appaction_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface appaction extends appaction_Base, appaction_Relationships {
  IconWebResourceId_bind$webresourceset?: string | null;
  OnClickEventFormulaComponentLibraryId_bind$canvasapps?: string | null;
  OnClickEventJavaScriptWebResourceId_bind$webresourceset?: string | null;
  VisibilityFormulaComponentLibraryId_bind$canvasapps?: string | null;
}
interface appaction_Create extends appaction {
  AppModuleId_bind$appmodules?: string | null;
  ContextEntity_bind$entities?: string | null;
}
interface appaction_Update extends appaction {
}
interface appaction_Select {
  appactionid: WebAttribute<appaction_Select, { appactionid: string | null }, {  }>;
  appmoduleid_guid: WebAttribute<appaction_Select, { appmoduleid_guid: string | null }, { appmoduleid_formatted?: string }>;
  buttonaccessibilitytext: WebAttribute<appaction_Select, { buttonaccessibilitytext: string | null }, {  }>;
  buttonlabeltext: WebAttribute<appaction_Select, { buttonlabeltext: string | null }, {  }>;
  buttonsequencepriority: WebAttribute<appaction_Select, { buttonsequencepriority: number | null }, {  }>;
  buttontooltipdescription: WebAttribute<appaction_Select, { buttontooltipdescription: string | null }, {  }>;
  buttontooltiptitle: WebAttribute<appaction_Select, { buttontooltiptitle: string | null }, {  }>;
  clienttype: WebAttribute<appaction_Select, { clienttype: appaction_clienttype | null }, { clienttype_formatted?: string }>;
  componentidunique: WebAttribute<appaction_Select, { componentidunique: string | null }, {  }>;
  componentstate: WebAttribute<appaction_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  context: WebAttribute<appaction_Select, { context: appaction_context | null }, { context_formatted?: string }>;
  contextentity_guid: WebAttribute<appaction_Select, { contextentity_guid: string | null }, { contextentity_formatted?: string }>;
  contextvalue: WebAttribute<appaction_Select, { contextvalue: string | null }, {  }>;
  createdby_guid: WebAttribute<appaction_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<appaction_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<appaction_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  fonticon: WebAttribute<appaction_Select, { fonticon: string | null }, {  }>;
  hidden: WebAttribute<appaction_Select, { hidden: boolean | null }, {  }>;
  iconwebresourceid_guid: WebAttribute<appaction_Select, { iconwebresourceid_guid: string | null }, { iconwebresourceid_formatted?: string }>;
  importsequencenumber: WebAttribute<appaction_Select, { importsequencenumber: number | null }, {  }>;
  iscustomizable: WebAttribute<appaction_Select, { iscustomizable: any | null }, {  }>;
  ismanaged: WebAttribute<appaction_Select, { ismanaged: boolean | null }, {  }>;
  location: WebAttribute<appaction_Select, { location: appaction_location | null }, { location_formatted?: string }>;
  modifiedby_guid: WebAttribute<appaction_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<appaction_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<appaction_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  name: WebAttribute<appaction_Select, { name: string | null }, {  }>;
  onclickeventformulacomponentlibrary: WebAttribute<appaction_Select, { onclickeventformulacomponentlibrary: string | null }, {  }>;
  onclickeventformulacomponentlibraryid_guid: WebAttribute<appaction_Select, { onclickeventformulacomponentlibraryid_guid: string | null }, { onclickeventformulacomponentlibraryid_formatted?: string }>;
  onclickeventformulacomponentname: WebAttribute<appaction_Select, { onclickeventformulacomponentname: string | null }, {  }>;
  onclickeventformulafunctionname: WebAttribute<appaction_Select, { onclickeventformulafunctionname: string | null }, {  }>;
  onclickeventjavascriptfunctionname: WebAttribute<appaction_Select, { onclickeventjavascriptfunctionname: string | null }, {  }>;
  onclickeventjavascriptparameters: WebAttribute<appaction_Select, { onclickeventjavascriptparameters: string | null }, {  }>;
  onclickeventjavascriptwebresourceid_guid: WebAttribute<appaction_Select, { onclickeventjavascriptwebresourceid_guid: string | null }, { onclickeventjavascriptwebresourceid_formatted?: string }>;
  onclickeventtype: WebAttribute<appaction_Select, { onclickeventtype: appaction_onclickeventtype | null }, { onclickeventtype_formatted?: string }>;
  organizationid_guid: WebAttribute<appaction_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overriddencreatedon: WebAttribute<appaction_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  overwritetime: WebAttribute<appaction_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  solutionid: WebAttribute<appaction_Select, { solutionid: string | null }, {  }>;
  statecode: WebAttribute<appaction_Select, { statecode: appaction_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<appaction_Select, { statuscode: appaction_statuscode | null }, { statuscode_formatted?: string }>;
  supportingsolutionid: WebAttribute<appaction_Select, { supportingsolutionid: string | null }, {  }>;
  timezoneruleversionnumber: WebAttribute<appaction_Select, { timezoneruleversionnumber: number | null }, {  }>;
  type: WebAttribute<appaction_Select, { type: appaction_type | null }, { type_formatted?: string }>;
  uniquename: WebAttribute<appaction_Select, { uniquename: string | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<appaction_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<appaction_Select, { versionnumber: number | null }, {  }>;
  visibilityformulacomponentlibrary: WebAttribute<appaction_Select, { visibilityformulacomponentlibrary: string | null }, {  }>;
  visibilityformulacomponentlibraryid_guid: WebAttribute<appaction_Select, { visibilityformulacomponentlibraryid_guid: string | null }, { visibilityformulacomponentlibraryid_formatted?: string }>;
  visibilityformulacomponentname: WebAttribute<appaction_Select, { visibilityformulacomponentname: string | null }, {  }>;
  visibilityformulafunctionname: WebAttribute<appaction_Select, { visibilityformulafunctionname: string | null }, {  }>;
}
interface appaction_Filter {
  appactionid: XQW.Guid;
  appmoduleid_guid: XQW.Guid;
  buttonaccessibilitytext: string;
  buttonlabeltext: string;
  buttonsequencepriority: any;
  buttontooltipdescription: string;
  buttontooltiptitle: string;
  clienttype: appaction_clienttype;
  componentidunique: XQW.Guid;
  componentstate: componentstate;
  context: appaction_context;
  contextentity_guid: XQW.Guid;
  contextvalue: string;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  fonticon: string;
  hidden: boolean;
  iconwebresourceid_guid: XQW.Guid;
  importsequencenumber: number;
  iscustomizable: any;
  ismanaged: boolean;
  location: appaction_location;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  name: string;
  onclickeventformulacomponentlibrary: string;
  onclickeventformulacomponentlibraryid_guid: XQW.Guid;
  onclickeventformulacomponentname: string;
  onclickeventformulafunctionname: string;
  onclickeventjavascriptfunctionname: string;
  onclickeventjavascriptparameters: string;
  onclickeventjavascriptwebresourceid_guid: XQW.Guid;
  onclickeventtype: appaction_onclickeventtype;
  organizationid_guid: XQW.Guid;
  overriddencreatedon: Date;
  overwritetime: Date;
  solutionid: XQW.Guid;
  statecode: appaction_statecode;
  statuscode: appaction_statuscode;
  supportingsolutionid: XQW.Guid;
  timezoneruleversionnumber: number;
  type: appaction_type;
  uniquename: string;
  utcconversiontimezonecode: number;
  versionnumber: number;
  visibilityformulacomponentlibrary: string;
  visibilityformulacomponentlibraryid_guid: XQW.Guid;
  visibilityformulacomponentname: string;
  visibilityformulafunctionname: string;
}
interface appaction_Expand {
  AppModuleId: WebExpand<appaction_Expand, AppModule_Select, AppModule_Filter, { AppModuleId: AppModule_Result }>;
  ContextEntity: WebExpand<appaction_Expand, Entity_Select, Entity_Filter, { ContextEntity: Entity_Result }>;
  IconWebResourceId: WebExpand<appaction_Expand, WebResource_Select, WebResource_Filter, { IconWebResourceId: WebResource_Result }>;
  OnClickEventFormulaComponentLibraryId: WebExpand<appaction_Expand, CanvasApp_Select, CanvasApp_Filter, { OnClickEventFormulaComponentLibraryId: CanvasApp_Result }>;
  OnClickEventJavaScriptWebResourceId: WebExpand<appaction_Expand, WebResource_Select, WebResource_Filter, { OnClickEventJavaScriptWebResourceId: WebResource_Result }>;
  VisibilityFormulaComponentLibraryId: WebExpand<appaction_Expand, CanvasApp_Select, CanvasApp_Filter, { VisibilityFormulaComponentLibraryId: CanvasApp_Result }>;
  appaction_AsyncOperations: WebExpand<appaction_Expand, AsyncOperation_Select, AsyncOperation_Filter, { appaction_AsyncOperations: AsyncOperation_Result[] }>;
  appaction_BulkDeleteFailures: WebExpand<appaction_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { appaction_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  appaction_MailboxTrackingFolders: WebExpand<appaction_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { appaction_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  appaction_PrincipalObjectAttributeAccesses: WebExpand<appaction_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { appaction_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  appaction_ProcessSession: WebExpand<appaction_Expand, ProcessSession_Select, ProcessSession_Filter, { appaction_ProcessSession: ProcessSession_Result[] }>;
  appaction_SyncErrors: WebExpand<appaction_Expand, SyncError_Select, SyncError_Filter, { appaction_SyncErrors: SyncError_Result[] }>;
  appaction_UserEntityInstanceDatas: WebExpand<appaction_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { appaction_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  createdby: WebExpand<appaction_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<appaction_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<appaction_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<appaction_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  organizationid: WebExpand<appaction_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
}
interface appaction_FormattedResult {
  appmoduleid_formatted?: string;
  clienttype_formatted?: string;
  componentstate_formatted?: string;
  context_formatted?: string;
  contextentity_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  iconwebresourceid_formatted?: string;
  location_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  onclickeventformulacomponentlibraryid_formatted?: string;
  onclickeventjavascriptwebresourceid_formatted?: string;
  onclickeventtype_formatted?: string;
  organizationid_formatted?: string;
  overriddencreatedon_formatted?: string;
  overwritetime_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
  type_formatted?: string;
  visibilityformulacomponentlibraryid_formatted?: string;
}
interface appaction_Result extends appaction_Base, appaction_Relationships {
  "@odata.etag": string;
  appmoduleid_guid: string | null;
  contextentity_guid: string | null;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  iconwebresourceid_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  onclickeventformulacomponentlibraryid_guid: string | null;
  onclickeventjavascriptwebresourceid_guid: string | null;
  organizationid_guid: string | null;
  visibilityformulacomponentlibraryid_guid: string | null;
}
interface appaction_RelatedOne {
  AppModuleId: WebMappingRetrieve<AppModule_Select,AppModule_Expand,AppModule_Filter,AppModule_Fixed,AppModule_Result,AppModule_FormattedResult>;
  ContextEntity: WebMappingRetrieve<Entity_Select,Entity_Expand,Entity_Filter,Entity_Fixed,Entity_Result,Entity_FormattedResult>;
  IconWebResourceId: WebMappingRetrieve<WebResource_Select,WebResource_Expand,WebResource_Filter,WebResource_Fixed,WebResource_Result,WebResource_FormattedResult>;
  OnClickEventFormulaComponentLibraryId: WebMappingRetrieve<CanvasApp_Select,CanvasApp_Expand,CanvasApp_Filter,CanvasApp_Fixed,CanvasApp_Result,CanvasApp_FormattedResult>;
  OnClickEventJavaScriptWebResourceId: WebMappingRetrieve<WebResource_Select,WebResource_Expand,WebResource_Filter,WebResource_Fixed,WebResource_Result,WebResource_FormattedResult>;
  VisibilityFormulaComponentLibraryId: WebMappingRetrieve<CanvasApp_Select,CanvasApp_Expand,CanvasApp_Filter,CanvasApp_Fixed,CanvasApp_Result,CanvasApp_FormattedResult>;
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
}
interface appaction_RelatedMany {
  appaction_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  appaction_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  appaction_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  appaction_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  appaction_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  appaction_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  appaction_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  appactions: WebMappingRetrieve<appaction_Select,appaction_Expand,appaction_Filter,appaction_Fixed,appaction_Result,appaction_FormattedResult>;
}
interface WebEntitiesRelated {
  appactions: WebMappingRelated<appaction_RelatedOne,appaction_RelatedMany>;
}
interface WebEntitiesCUDA {
  appactions: WebMappingCUDA<appaction_Create,appaction_Update,appaction_Select>;
}
