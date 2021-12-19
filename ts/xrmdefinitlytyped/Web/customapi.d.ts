interface CustomAPI_Base extends WebEntity {
  allowedcustomprocessingsteptype?: customapi_allowedcustomprocessingsteptype | null;
  bindingtype?: customapi_bindingtype | null;
  boundentitylogicalname?: string | null;
  componentidunique?: string | null;
  componentstate?: componentstate | null;
  createdon?: Date | null;
  customapiid?: string | null;
  description?: string | null;
  displayname?: string | null;
  executeprivilegename?: string | null;
  importsequencenumber?: number | null;
  iscustomizable?: any | null;
  isfunction?: boolean | null;
  ismanaged?: boolean | null;
  isprivate?: boolean | null;
  modifiedon?: Date | null;
  name?: string | null;
  overriddencreatedon?: Date | null;
  overwritetime?: Date | null;
  solutionid?: string | null;
  statecode?: customapi_statecode | null;
  statuscode?: customapi_statuscode | null;
  supportingsolutionid?: string | null;
  timezoneruleversionnumber?: number | null;
  uniquename?: string | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
  workflowsdkstepenabled?: boolean | null;
}
interface CustomAPI_Relationships {
  CatalogAssignments?: CatalogAssignment_Result[] | null;
  CustomAPIRequestParameters?: CustomAPIRequestParameter_Result[] | null;
  CustomAPIResponseProperties?: CustomAPIResponseProperty_Result[] | null;
  PluginTypeId?: PluginType_Result | null;
  SdkMessageId?: SdkMessage_Result | null;
  customapi_AsyncOperations?: AsyncOperation_Result[] | null;
  customapi_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  customapi_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  customapi_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  customapi_ProcessSession?: ProcessSession_Result[] | null;
  customapi_SyncErrors?: SyncError_Result[] | null;
  customapi_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface CustomAPI extends CustomAPI_Base, CustomAPI_Relationships {
  PluginTypeId_bind$plugintypes?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface CustomAPI_Create extends CustomAPI {
  SdkMessageId_bind$sdkmessages?: string | null;
}
interface CustomAPI_Update extends CustomAPI {
}
interface CustomAPI_Select {
  allowedcustomprocessingsteptype: WebAttribute<CustomAPI_Select, { allowedcustomprocessingsteptype: customapi_allowedcustomprocessingsteptype | null }, { allowedcustomprocessingsteptype_formatted?: string }>;
  bindingtype: WebAttribute<CustomAPI_Select, { bindingtype: customapi_bindingtype | null }, { bindingtype_formatted?: string }>;
  boundentitylogicalname: WebAttribute<CustomAPI_Select, { boundentitylogicalname: string | null }, {  }>;
  componentidunique: WebAttribute<CustomAPI_Select, { componentidunique: string | null }, {  }>;
  componentstate: WebAttribute<CustomAPI_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  createdby_guid: WebAttribute<CustomAPI_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<CustomAPI_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<CustomAPI_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  customapiid: WebAttribute<CustomAPI_Select, { customapiid: string | null }, {  }>;
  description: WebAttribute<CustomAPI_Select, { description: string | null }, {  }>;
  displayname: WebAttribute<CustomAPI_Select, { displayname: string | null }, {  }>;
  executeprivilegename: WebAttribute<CustomAPI_Select, { executeprivilegename: string | null }, {  }>;
  importsequencenumber: WebAttribute<CustomAPI_Select, { importsequencenumber: number | null }, {  }>;
  iscustomizable: WebAttribute<CustomAPI_Select, { iscustomizable: any | null }, {  }>;
  isfunction: WebAttribute<CustomAPI_Select, { isfunction: boolean | null }, {  }>;
  ismanaged: WebAttribute<CustomAPI_Select, { ismanaged: boolean | null }, {  }>;
  isprivate: WebAttribute<CustomAPI_Select, { isprivate: boolean | null }, {  }>;
  modifiedby_guid: WebAttribute<CustomAPI_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<CustomAPI_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<CustomAPI_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  name: WebAttribute<CustomAPI_Select, { name: string | null }, {  }>;
  overriddencreatedon: WebAttribute<CustomAPI_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  overwritetime: WebAttribute<CustomAPI_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  ownerid_guid: WebAttribute<CustomAPI_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<CustomAPI_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<CustomAPI_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<CustomAPI_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  plugintypeid_guid: WebAttribute<CustomAPI_Select, { plugintypeid_guid: string | null }, { plugintypeid_formatted?: string }>;
  sdkmessageid_guid: WebAttribute<CustomAPI_Select, { sdkmessageid_guid: string | null }, { sdkmessageid_formatted?: string }>;
  solutionid: WebAttribute<CustomAPI_Select, { solutionid: string | null }, {  }>;
  statecode: WebAttribute<CustomAPI_Select, { statecode: customapi_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<CustomAPI_Select, { statuscode: customapi_statuscode | null }, { statuscode_formatted?: string }>;
  supportingsolutionid: WebAttribute<CustomAPI_Select, { supportingsolutionid: string | null }, {  }>;
  timezoneruleversionnumber: WebAttribute<CustomAPI_Select, { timezoneruleversionnumber: number | null }, {  }>;
  uniquename: WebAttribute<CustomAPI_Select, { uniquename: string | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<CustomAPI_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<CustomAPI_Select, { versionnumber: number | null }, {  }>;
  workflowsdkstepenabled: WebAttribute<CustomAPI_Select, { workflowsdkstepenabled: boolean | null }, {  }>;
}
interface CustomAPI_Filter {
  allowedcustomprocessingsteptype: customapi_allowedcustomprocessingsteptype;
  bindingtype: customapi_bindingtype;
  boundentitylogicalname: string;
  componentidunique: XQW.Guid;
  componentstate: componentstate;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  customapiid: XQW.Guid;
  description: string;
  displayname: string;
  executeprivilegename: string;
  importsequencenumber: number;
  iscustomizable: any;
  isfunction: boolean;
  ismanaged: boolean;
  isprivate: boolean;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  name: string;
  overriddencreatedon: Date;
  overwritetime: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  plugintypeid_guid: XQW.Guid;
  sdkmessageid_guid: XQW.Guid;
  solutionid: XQW.Guid;
  statecode: customapi_statecode;
  statuscode: customapi_statuscode;
  supportingsolutionid: XQW.Guid;
  timezoneruleversionnumber: number;
  uniquename: string;
  utcconversiontimezonecode: number;
  versionnumber: number;
  workflowsdkstepenabled: boolean;
}
interface CustomAPI_Expand {
  CatalogAssignments: WebExpand<CustomAPI_Expand, CatalogAssignment_Select, CatalogAssignment_Filter, { CatalogAssignments: CatalogAssignment_Result[] }>;
  CustomAPIRequestParameters: WebExpand<CustomAPI_Expand, CustomAPIRequestParameter_Select, CustomAPIRequestParameter_Filter, { CustomAPIRequestParameters: CustomAPIRequestParameter_Result[] }>;
  CustomAPIResponseProperties: WebExpand<CustomAPI_Expand, CustomAPIResponseProperty_Select, CustomAPIResponseProperty_Filter, { CustomAPIResponseProperties: CustomAPIResponseProperty_Result[] }>;
  PluginTypeId: WebExpand<CustomAPI_Expand, PluginType_Select, PluginType_Filter, { PluginTypeId: PluginType_Result }>;
  SdkMessageId: WebExpand<CustomAPI_Expand, SdkMessage_Select, SdkMessage_Filter, { SdkMessageId: SdkMessage_Result }>;
  createdby: WebExpand<CustomAPI_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<CustomAPI_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  customapi_AsyncOperations: WebExpand<CustomAPI_Expand, AsyncOperation_Select, AsyncOperation_Filter, { customapi_AsyncOperations: AsyncOperation_Result[] }>;
  customapi_BulkDeleteFailures: WebExpand<CustomAPI_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { customapi_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  customapi_MailboxTrackingFolders: WebExpand<CustomAPI_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { customapi_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  customapi_PrincipalObjectAttributeAccesses: WebExpand<CustomAPI_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { customapi_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  customapi_ProcessSession: WebExpand<CustomAPI_Expand, ProcessSession_Select, ProcessSession_Filter, { customapi_ProcessSession: ProcessSession_Result[] }>;
  customapi_SyncErrors: WebExpand<CustomAPI_Expand, SyncError_Select, SyncError_Filter, { customapi_SyncErrors: SyncError_Result[] }>;
  customapi_UserEntityInstanceDatas: WebExpand<CustomAPI_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { customapi_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  modifiedby: WebExpand<CustomAPI_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<CustomAPI_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  ownerid: WebExpand<CustomAPI_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<CustomAPI_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<CustomAPI_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<CustomAPI_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface CustomAPI_FormattedResult {
  allowedcustomprocessingsteptype_formatted?: string;
  bindingtype_formatted?: string;
  componentstate_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  overriddencreatedon_formatted?: string;
  overwritetime_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  plugintypeid_formatted?: string;
  sdkmessageid_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface CustomAPI_Result extends CustomAPI_Base, CustomAPI_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
  plugintypeid_guid: string | null;
  sdkmessageid_guid: string | null;
}
interface CustomAPI_RelatedOne {
  PluginTypeId: WebMappingRetrieve<PluginType_Select,PluginType_Expand,PluginType_Filter,PluginType_Fixed,PluginType_Result,PluginType_FormattedResult>;
  SdkMessageId: WebMappingRetrieve<SdkMessage_Select,SdkMessage_Expand,SdkMessage_Filter,SdkMessage_Fixed,SdkMessage_Result,SdkMessage_FormattedResult>;
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface CustomAPI_RelatedMany {
  CatalogAssignments: WebMappingRetrieve<CatalogAssignment_Select,CatalogAssignment_Expand,CatalogAssignment_Filter,CatalogAssignment_Fixed,CatalogAssignment_Result,CatalogAssignment_FormattedResult>;
  CustomAPIRequestParameters: WebMappingRetrieve<CustomAPIRequestParameter_Select,CustomAPIRequestParameter_Expand,CustomAPIRequestParameter_Filter,CustomAPIRequestParameter_Fixed,CustomAPIRequestParameter_Result,CustomAPIRequestParameter_FormattedResult>;
  CustomAPIResponseProperties: WebMappingRetrieve<CustomAPIResponseProperty_Select,CustomAPIResponseProperty_Expand,CustomAPIResponseProperty_Filter,CustomAPIResponseProperty_Fixed,CustomAPIResponseProperty_Result,CustomAPIResponseProperty_FormattedResult>;
  customapi_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  customapi_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  customapi_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  customapi_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  customapi_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  customapi_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  customapi_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  customapis: WebMappingRetrieve<CustomAPI_Select,CustomAPI_Expand,CustomAPI_Filter,CustomAPI_Fixed,CustomAPI_Result,CustomAPI_FormattedResult>;
}
interface WebEntitiesRelated {
  customapis: WebMappingRelated<CustomAPI_RelatedOne,CustomAPI_RelatedMany>;
}
interface WebEntitiesCUDA {
  customapis: WebMappingCUDA<CustomAPI_Create,CustomAPI_Update,CustomAPI_Select>;
}
