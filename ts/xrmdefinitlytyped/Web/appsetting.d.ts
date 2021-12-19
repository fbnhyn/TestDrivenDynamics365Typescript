interface AppSetting_Base extends WebEntity {
  appsettingid?: string | null;
  componentidunique?: string | null;
  componentstate?: componentstate | null;
  createdon?: Date | null;
  description?: string | null;
  displayname?: string | null;
  importsequencenumber?: number | null;
  iscustomizable?: any | null;
  ismanaged?: boolean | null;
  modifiedon?: Date | null;
  overriddencreatedon?: Date | null;
  overwritetime?: Date | null;
  solutionid?: string | null;
  statecode?: appsetting_statecode | null;
  statuscode?: appsetting_statuscode | null;
  supportingsolutionid?: string | null;
  timezoneruleversionnumber?: number | null;
  uniquename?: string | null;
  utcconversiontimezonecode?: number | null;
  value?: string | null;
  versionnumber?: number | null;
}
interface AppSetting_Relationships {
  appsetting_AsyncOperations?: AsyncOperation_Result[] | null;
  appsetting_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  appsetting_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  appsetting_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  appsetting_ProcessSession?: ProcessSession_Result[] | null;
  appsetting_SyncErrors?: SyncError_Result[] | null;
  appsetting_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface AppSetting extends AppSetting_Base, AppSetting_Relationships {
}
interface AppSetting_Create extends AppSetting {
  parentappmoduleid_bind$appmodules?: string | null;
  settingdefinitionid_bind$settingdefinitions?: string | null;
}
interface AppSetting_Update extends AppSetting {
}
interface AppSetting_Select {
  appsettingid: WebAttribute<AppSetting_Select, { appsettingid: string | null }, {  }>;
  componentidunique: WebAttribute<AppSetting_Select, { componentidunique: string | null }, {  }>;
  componentstate: WebAttribute<AppSetting_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  createdby_guid: WebAttribute<AppSetting_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<AppSetting_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<AppSetting_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  description: WebAttribute<AppSetting_Select, { description: string | null }, {  }>;
  displayname: WebAttribute<AppSetting_Select, { displayname: string | null }, {  }>;
  importsequencenumber: WebAttribute<AppSetting_Select, { importsequencenumber: number | null }, {  }>;
  iscustomizable: WebAttribute<AppSetting_Select, { iscustomizable: any | null }, {  }>;
  ismanaged: WebAttribute<AppSetting_Select, { ismanaged: boolean | null }, {  }>;
  modifiedby_guid: WebAttribute<AppSetting_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<AppSetting_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<AppSetting_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  organizationid_guid: WebAttribute<AppSetting_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overriddencreatedon: WebAttribute<AppSetting_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  overwritetime: WebAttribute<AppSetting_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  parentappmoduleid_guid: WebAttribute<AppSetting_Select, { parentappmoduleid_guid: string | null }, { parentappmoduleid_formatted?: string }>;
  settingdefinitionid_guid: WebAttribute<AppSetting_Select, { settingdefinitionid_guid: string | null }, { settingdefinitionid_formatted?: string }>;
  solutionid: WebAttribute<AppSetting_Select, { solutionid: string | null }, {  }>;
  statecode: WebAttribute<AppSetting_Select, { statecode: appsetting_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<AppSetting_Select, { statuscode: appsetting_statuscode | null }, { statuscode_formatted?: string }>;
  supportingsolutionid: WebAttribute<AppSetting_Select, { supportingsolutionid: string | null }, {  }>;
  timezoneruleversionnumber: WebAttribute<AppSetting_Select, { timezoneruleversionnumber: number | null }, {  }>;
  uniquename: WebAttribute<AppSetting_Select, { uniquename: string | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<AppSetting_Select, { utcconversiontimezonecode: number | null }, {  }>;
  value: WebAttribute<AppSetting_Select, { value: string | null }, {  }>;
  versionnumber: WebAttribute<AppSetting_Select, { versionnumber: number | null }, {  }>;
}
interface AppSetting_Filter {
  appsettingid: XQW.Guid;
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
  organizationid_guid: XQW.Guid;
  overriddencreatedon: Date;
  overwritetime: Date;
  parentappmoduleid_guid: XQW.Guid;
  settingdefinitionid_guid: XQW.Guid;
  solutionid: XQW.Guid;
  statecode: appsetting_statecode;
  statuscode: appsetting_statuscode;
  supportingsolutionid: XQW.Guid;
  timezoneruleversionnumber: number;
  uniquename: string;
  utcconversiontimezonecode: number;
  value: string;
  versionnumber: number;
}
interface AppSetting_Expand {
  appsetting_AsyncOperations: WebExpand<AppSetting_Expand, AsyncOperation_Select, AsyncOperation_Filter, { appsetting_AsyncOperations: AsyncOperation_Result[] }>;
  appsetting_BulkDeleteFailures: WebExpand<AppSetting_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { appsetting_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  appsetting_MailboxTrackingFolders: WebExpand<AppSetting_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { appsetting_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  appsetting_PrincipalObjectAttributeAccesses: WebExpand<AppSetting_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { appsetting_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  appsetting_ProcessSession: WebExpand<AppSetting_Expand, ProcessSession_Select, ProcessSession_Filter, { appsetting_ProcessSession: ProcessSession_Result[] }>;
  appsetting_SyncErrors: WebExpand<AppSetting_Expand, SyncError_Select, SyncError_Filter, { appsetting_SyncErrors: SyncError_Result[] }>;
  appsetting_UserEntityInstanceDatas: WebExpand<AppSetting_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { appsetting_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  createdby: WebExpand<AppSetting_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<AppSetting_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<AppSetting_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<AppSetting_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  organizationid: WebExpand<AppSetting_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
  parentappmoduleid: WebExpand<AppSetting_Expand, AppModule_Select, AppModule_Filter, { parentappmoduleid: AppModule_Result }>;
  settingdefinitionid: WebExpand<AppSetting_Expand, SettingDefinition_Select, SettingDefinition_Filter, { settingdefinitionid: SettingDefinition_Result }>;
}
interface AppSetting_FormattedResult {
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
  settingdefinitionid_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface AppSetting_Result extends AppSetting_Base, AppSetting_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
  parentappmoduleid_guid: string | null;
  settingdefinitionid_guid: string | null;
}
interface AppSetting_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
  parentappmoduleid: WebMappingRetrieve<AppModule_Select,AppModule_Expand,AppModule_Filter,AppModule_Fixed,AppModule_Result,AppModule_FormattedResult>;
  settingdefinitionid: WebMappingRetrieve<SettingDefinition_Select,SettingDefinition_Expand,SettingDefinition_Filter,SettingDefinition_Fixed,SettingDefinition_Result,SettingDefinition_FormattedResult>;
}
interface AppSetting_RelatedMany {
  appsetting_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  appsetting_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  appsetting_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  appsetting_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  appsetting_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  appsetting_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  appsetting_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  appsettings: WebMappingRetrieve<AppSetting_Select,AppSetting_Expand,AppSetting_Filter,AppSetting_Fixed,AppSetting_Result,AppSetting_FormattedResult>;
}
interface WebEntitiesRelated {
  appsettings: WebMappingRelated<AppSetting_RelatedOne,AppSetting_RelatedMany>;
}
interface WebEntitiesCUDA {
  appsettings: WebMappingCUDA<AppSetting_Create,AppSetting_Update,AppSetting_Select>;
}
