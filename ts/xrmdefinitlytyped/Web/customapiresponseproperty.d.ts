interface CustomAPIResponseProperty_Base extends WebEntity {
  componentidunique?: string | null;
  componentstate?: componentstate | null;
  createdon?: Date | null;
  customapiresponsepropertyid?: string | null;
  description?: string | null;
  displayname?: string | null;
  importsequencenumber?: number | null;
  iscustomizable?: any | null;
  ismanaged?: boolean | null;
  logicalentityname?: string | null;
  modifiedon?: Date | null;
  name?: string | null;
  overriddencreatedon?: Date | null;
  overwritetime?: Date | null;
  solutionid?: string | null;
  statecode?: customapiresponseproperty_statecode | null;
  statuscode?: customapiresponseproperty_statuscode | null;
  supportingsolutionid?: string | null;
  timezoneruleversionnumber?: number | null;
  type?: customapifieldtype | null;
  uniquename?: string | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface CustomAPIResponseProperty_Relationships {
  CustomAPIId?: CustomAPI_Result | null;
  customapiresponseproperty_AsyncOperations?: AsyncOperation_Result[] | null;
  customapiresponseproperty_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  customapiresponseproperty_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  customapiresponseproperty_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  customapiresponseproperty_ProcessSession?: ProcessSession_Result[] | null;
  customapiresponseproperty_SyncErrors?: SyncError_Result[] | null;
  customapiresponseproperty_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface CustomAPIResponseProperty extends CustomAPIResponseProperty_Base, CustomAPIResponseProperty_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface CustomAPIResponseProperty_Create extends CustomAPIResponseProperty {
  CustomAPIId_bind$customapis?: string | null;
}
interface CustomAPIResponseProperty_Update extends CustomAPIResponseProperty {
}
interface CustomAPIResponseProperty_Select {
  componentidunique: WebAttribute<CustomAPIResponseProperty_Select, { componentidunique: string | null }, {  }>;
  componentstate: WebAttribute<CustomAPIResponseProperty_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  createdby_guid: WebAttribute<CustomAPIResponseProperty_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<CustomAPIResponseProperty_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<CustomAPIResponseProperty_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  customapiid_guid: WebAttribute<CustomAPIResponseProperty_Select, { customapiid_guid: string | null }, { customapiid_formatted?: string }>;
  customapiresponsepropertyid: WebAttribute<CustomAPIResponseProperty_Select, { customapiresponsepropertyid: string | null }, {  }>;
  description: WebAttribute<CustomAPIResponseProperty_Select, { description: string | null }, {  }>;
  displayname: WebAttribute<CustomAPIResponseProperty_Select, { displayname: string | null }, {  }>;
  importsequencenumber: WebAttribute<CustomAPIResponseProperty_Select, { importsequencenumber: number | null }, {  }>;
  iscustomizable: WebAttribute<CustomAPIResponseProperty_Select, { iscustomizable: any | null }, {  }>;
  ismanaged: WebAttribute<CustomAPIResponseProperty_Select, { ismanaged: boolean | null }, {  }>;
  logicalentityname: WebAttribute<CustomAPIResponseProperty_Select, { logicalentityname: string | null }, {  }>;
  modifiedby_guid: WebAttribute<CustomAPIResponseProperty_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<CustomAPIResponseProperty_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<CustomAPIResponseProperty_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  name: WebAttribute<CustomAPIResponseProperty_Select, { name: string | null }, {  }>;
  overriddencreatedon: WebAttribute<CustomAPIResponseProperty_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  overwritetime: WebAttribute<CustomAPIResponseProperty_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  ownerid_guid: WebAttribute<CustomAPIResponseProperty_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<CustomAPIResponseProperty_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<CustomAPIResponseProperty_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<CustomAPIResponseProperty_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  solutionid: WebAttribute<CustomAPIResponseProperty_Select, { solutionid: string | null }, {  }>;
  statecode: WebAttribute<CustomAPIResponseProperty_Select, { statecode: customapiresponseproperty_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<CustomAPIResponseProperty_Select, { statuscode: customapiresponseproperty_statuscode | null }, { statuscode_formatted?: string }>;
  supportingsolutionid: WebAttribute<CustomAPIResponseProperty_Select, { supportingsolutionid: string | null }, {  }>;
  timezoneruleversionnumber: WebAttribute<CustomAPIResponseProperty_Select, { timezoneruleversionnumber: number | null }, {  }>;
  type: WebAttribute<CustomAPIResponseProperty_Select, { type: customapifieldtype | null }, { type_formatted?: string }>;
  uniquename: WebAttribute<CustomAPIResponseProperty_Select, { uniquename: string | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<CustomAPIResponseProperty_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<CustomAPIResponseProperty_Select, { versionnumber: number | null }, {  }>;
}
interface CustomAPIResponseProperty_Filter {
  componentidunique: XQW.Guid;
  componentstate: componentstate;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  customapiid_guid: XQW.Guid;
  customapiresponsepropertyid: XQW.Guid;
  description: string;
  displayname: string;
  importsequencenumber: number;
  iscustomizable: any;
  ismanaged: boolean;
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
  statecode: customapiresponseproperty_statecode;
  statuscode: customapiresponseproperty_statuscode;
  supportingsolutionid: XQW.Guid;
  timezoneruleversionnumber: number;
  type: customapifieldtype;
  uniquename: string;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface CustomAPIResponseProperty_Expand {
  CustomAPIId: WebExpand<CustomAPIResponseProperty_Expand, CustomAPI_Select, CustomAPI_Filter, { CustomAPIId: CustomAPI_Result }>;
  createdby: WebExpand<CustomAPIResponseProperty_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<CustomAPIResponseProperty_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  customapiresponseproperty_AsyncOperations: WebExpand<CustomAPIResponseProperty_Expand, AsyncOperation_Select, AsyncOperation_Filter, { customapiresponseproperty_AsyncOperations: AsyncOperation_Result[] }>;
  customapiresponseproperty_BulkDeleteFailures: WebExpand<CustomAPIResponseProperty_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { customapiresponseproperty_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  customapiresponseproperty_MailboxTrackingFolders: WebExpand<CustomAPIResponseProperty_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { customapiresponseproperty_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  customapiresponseproperty_PrincipalObjectAttributeAccesses: WebExpand<CustomAPIResponseProperty_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { customapiresponseproperty_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  customapiresponseproperty_ProcessSession: WebExpand<CustomAPIResponseProperty_Expand, ProcessSession_Select, ProcessSession_Filter, { customapiresponseproperty_ProcessSession: ProcessSession_Result[] }>;
  customapiresponseproperty_SyncErrors: WebExpand<CustomAPIResponseProperty_Expand, SyncError_Select, SyncError_Filter, { customapiresponseproperty_SyncErrors: SyncError_Result[] }>;
  customapiresponseproperty_UserEntityInstanceDatas: WebExpand<CustomAPIResponseProperty_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { customapiresponseproperty_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  modifiedby: WebExpand<CustomAPIResponseProperty_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<CustomAPIResponseProperty_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  ownerid: WebExpand<CustomAPIResponseProperty_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<CustomAPIResponseProperty_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<CustomAPIResponseProperty_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<CustomAPIResponseProperty_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface CustomAPIResponseProperty_FormattedResult {
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
interface CustomAPIResponseProperty_Result extends CustomAPIResponseProperty_Base, CustomAPIResponseProperty_Relationships {
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
interface CustomAPIResponseProperty_RelatedOne {
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
interface CustomAPIResponseProperty_RelatedMany {
  customapiresponseproperty_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  customapiresponseproperty_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  customapiresponseproperty_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  customapiresponseproperty_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  customapiresponseproperty_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  customapiresponseproperty_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  customapiresponseproperty_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  customapiresponseproperties: WebMappingRetrieve<CustomAPIResponseProperty_Select,CustomAPIResponseProperty_Expand,CustomAPIResponseProperty_Filter,CustomAPIResponseProperty_Fixed,CustomAPIResponseProperty_Result,CustomAPIResponseProperty_FormattedResult>;
}
interface WebEntitiesRelated {
  customapiresponseproperties: WebMappingRelated<CustomAPIResponseProperty_RelatedOne,CustomAPIResponseProperty_RelatedMany>;
}
interface WebEntitiesCUDA {
  customapiresponseproperties: WebMappingCUDA<CustomAPIResponseProperty_Create,CustomAPIResponseProperty_Update,CustomAPIResponseProperty_Select>;
}
