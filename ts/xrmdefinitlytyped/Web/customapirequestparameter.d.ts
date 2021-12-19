interface CustomAPIRequestParameter_Base extends WebEntity {
  componentidunique?: string | null;
  componentstate?: componentstate | null;
  createdon?: Date | null;
  customapirequestparameterid?: string | null;
  description?: string | null;
  displayname?: string | null;
  importsequencenumber?: number | null;
  iscustomizable?: any | null;
  ismanaged?: boolean | null;
  isoptional?: boolean | null;
  logicalentityname?: string | null;
  modifiedon?: Date | null;
  name?: string | null;
  overriddencreatedon?: Date | null;
  overwritetime?: Date | null;
  solutionid?: string | null;
  statecode?: customapirequestparameter_statecode | null;
  statuscode?: customapirequestparameter_statuscode | null;
  supportingsolutionid?: string | null;
  timezoneruleversionnumber?: number | null;
  type?: customapifieldtype | null;
  uniquename?: string | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface CustomAPIRequestParameter_Relationships {
  CustomAPIId?: CustomAPI_Result | null;
  customapirequestparameter_AsyncOperations?: AsyncOperation_Result[] | null;
  customapirequestparameter_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  customapirequestparameter_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  customapirequestparameter_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  customapirequestparameter_ProcessSession?: ProcessSession_Result[] | null;
  customapirequestparameter_SyncErrors?: SyncError_Result[] | null;
  customapirequestparameter_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface CustomAPIRequestParameter extends CustomAPIRequestParameter_Base, CustomAPIRequestParameter_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface CustomAPIRequestParameter_Create extends CustomAPIRequestParameter {
  CustomAPIId_bind$customapis?: string | null;
}
interface CustomAPIRequestParameter_Update extends CustomAPIRequestParameter {
}
interface CustomAPIRequestParameter_Select {
  componentidunique: WebAttribute<CustomAPIRequestParameter_Select, { componentidunique: string | null }, {  }>;
  componentstate: WebAttribute<CustomAPIRequestParameter_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  createdby_guid: WebAttribute<CustomAPIRequestParameter_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<CustomAPIRequestParameter_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<CustomAPIRequestParameter_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  customapiid_guid: WebAttribute<CustomAPIRequestParameter_Select, { customapiid_guid: string | null }, { customapiid_formatted?: string }>;
  customapirequestparameterid: WebAttribute<CustomAPIRequestParameter_Select, { customapirequestparameterid: string | null }, {  }>;
  description: WebAttribute<CustomAPIRequestParameter_Select, { description: string | null }, {  }>;
  displayname: WebAttribute<CustomAPIRequestParameter_Select, { displayname: string | null }, {  }>;
  importsequencenumber: WebAttribute<CustomAPIRequestParameter_Select, { importsequencenumber: number | null }, {  }>;
  iscustomizable: WebAttribute<CustomAPIRequestParameter_Select, { iscustomizable: any | null }, {  }>;
  ismanaged: WebAttribute<CustomAPIRequestParameter_Select, { ismanaged: boolean | null }, {  }>;
  isoptional: WebAttribute<CustomAPIRequestParameter_Select, { isoptional: boolean | null }, {  }>;
  logicalentityname: WebAttribute<CustomAPIRequestParameter_Select, { logicalentityname: string | null }, {  }>;
  modifiedby_guid: WebAttribute<CustomAPIRequestParameter_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<CustomAPIRequestParameter_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<CustomAPIRequestParameter_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  name: WebAttribute<CustomAPIRequestParameter_Select, { name: string | null }, {  }>;
  overriddencreatedon: WebAttribute<CustomAPIRequestParameter_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  overwritetime: WebAttribute<CustomAPIRequestParameter_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  ownerid_guid: WebAttribute<CustomAPIRequestParameter_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<CustomAPIRequestParameter_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<CustomAPIRequestParameter_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<CustomAPIRequestParameter_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  solutionid: WebAttribute<CustomAPIRequestParameter_Select, { solutionid: string | null }, {  }>;
  statecode: WebAttribute<CustomAPIRequestParameter_Select, { statecode: customapirequestparameter_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<CustomAPIRequestParameter_Select, { statuscode: customapirequestparameter_statuscode | null }, { statuscode_formatted?: string }>;
  supportingsolutionid: WebAttribute<CustomAPIRequestParameter_Select, { supportingsolutionid: string | null }, {  }>;
  timezoneruleversionnumber: WebAttribute<CustomAPIRequestParameter_Select, { timezoneruleversionnumber: number | null }, {  }>;
  type: WebAttribute<CustomAPIRequestParameter_Select, { type: customapifieldtype | null }, { type_formatted?: string }>;
  uniquename: WebAttribute<CustomAPIRequestParameter_Select, { uniquename: string | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<CustomAPIRequestParameter_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<CustomAPIRequestParameter_Select, { versionnumber: number | null }, {  }>;
}
interface CustomAPIRequestParameter_Filter {
  componentidunique: XQW.Guid;
  componentstate: componentstate;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  customapiid_guid: XQW.Guid;
  customapirequestparameterid: XQW.Guid;
  description: string;
  displayname: string;
  importsequencenumber: number;
  iscustomizable: any;
  ismanaged: boolean;
  isoptional: boolean;
  logicalentityname: string;
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
  solutionid: XQW.Guid;
  statecode: customapirequestparameter_statecode;
  statuscode: customapirequestparameter_statuscode;
  supportingsolutionid: XQW.Guid;
  timezoneruleversionnumber: number;
  type: customapifieldtype;
  uniquename: string;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface CustomAPIRequestParameter_Expand {
  CustomAPIId: WebExpand<CustomAPIRequestParameter_Expand, CustomAPI_Select, CustomAPI_Filter, { CustomAPIId: CustomAPI_Result }>;
  createdby: WebExpand<CustomAPIRequestParameter_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<CustomAPIRequestParameter_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  customapirequestparameter_AsyncOperations: WebExpand<CustomAPIRequestParameter_Expand, AsyncOperation_Select, AsyncOperation_Filter, { customapirequestparameter_AsyncOperations: AsyncOperation_Result[] }>;
  customapirequestparameter_BulkDeleteFailures: WebExpand<CustomAPIRequestParameter_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { customapirequestparameter_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  customapirequestparameter_MailboxTrackingFolders: WebExpand<CustomAPIRequestParameter_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { customapirequestparameter_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  customapirequestparameter_PrincipalObjectAttributeAccesses: WebExpand<CustomAPIRequestParameter_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { customapirequestparameter_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  customapirequestparameter_ProcessSession: WebExpand<CustomAPIRequestParameter_Expand, ProcessSession_Select, ProcessSession_Filter, { customapirequestparameter_ProcessSession: ProcessSession_Result[] }>;
  customapirequestparameter_SyncErrors: WebExpand<CustomAPIRequestParameter_Expand, SyncError_Select, SyncError_Filter, { customapirequestparameter_SyncErrors: SyncError_Result[] }>;
  customapirequestparameter_UserEntityInstanceDatas: WebExpand<CustomAPIRequestParameter_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { customapirequestparameter_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  modifiedby: WebExpand<CustomAPIRequestParameter_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<CustomAPIRequestParameter_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  ownerid: WebExpand<CustomAPIRequestParameter_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<CustomAPIRequestParameter_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<CustomAPIRequestParameter_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<CustomAPIRequestParameter_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface CustomAPIRequestParameter_FormattedResult {
  componentstate_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  customapiid_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  overriddencreatedon_formatted?: string;
  overwritetime_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
  type_formatted?: string;
}
interface CustomAPIRequestParameter_Result extends CustomAPIRequestParameter_Base, CustomAPIRequestParameter_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  customapiid_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface CustomAPIRequestParameter_RelatedOne {
  CustomAPIId: WebMappingRetrieve<CustomAPI_Select,CustomAPI_Expand,CustomAPI_Filter,CustomAPI_Fixed,CustomAPI_Result,CustomAPI_FormattedResult>;
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface CustomAPIRequestParameter_RelatedMany {
  customapirequestparameter_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  customapirequestparameter_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  customapirequestparameter_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  customapirequestparameter_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  customapirequestparameter_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  customapirequestparameter_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  customapirequestparameter_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  customapirequestparameters: WebMappingRetrieve<CustomAPIRequestParameter_Select,CustomAPIRequestParameter_Expand,CustomAPIRequestParameter_Filter,CustomAPIRequestParameter_Fixed,CustomAPIRequestParameter_Result,CustomAPIRequestParameter_FormattedResult>;
}
interface WebEntitiesRelated {
  customapirequestparameters: WebMappingRelated<CustomAPIRequestParameter_RelatedOne,CustomAPIRequestParameter_RelatedMany>;
}
interface WebEntitiesCUDA {
  customapirequestparameters: WebMappingCUDA<CustomAPIRequestParameter_Create,CustomAPIRequestParameter_Update,CustomAPIRequestParameter_Select>;
}
