interface AppUserSetting_Base extends WebEntity {
  appusersettingid?: string | null;
  createdon?: Date | null;
  displayname?: string | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  overriddencreatedon?: Date | null;
  statecode?: appusersetting_statecode | null;
  statuscode?: appusersetting_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  value?: string | null;
  versionnumber?: number | null;
}
interface AppUserSetting_Relationships {
  UserId?: SystemUser_Result | null;
  appusersetting_AsyncOperations?: AsyncOperation_Result[] | null;
  appusersetting_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  appusersetting_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  appusersetting_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  appusersetting_ProcessSession?: ProcessSession_Result[] | null;
  appusersetting_SyncErrors?: SyncError_Result[] | null;
  appusersetting_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface AppUserSetting extends AppUserSetting_Base, AppUserSetting_Relationships {
  UserId_bind$systemusers?: string | null;
}
interface AppUserSetting_Create extends AppUserSetting {
  parentappmoduleid_bind$appmodules?: string | null;
  settingdefinitionid_bind$settingdefinitions?: string | null;
}
interface AppUserSetting_Update extends AppUserSetting {
}
interface AppUserSetting_Select {
  appusersettingid: WebAttribute<AppUserSetting_Select, { appusersettingid: string | null }, {  }>;
  createdby_guid: WebAttribute<AppUserSetting_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<AppUserSetting_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<AppUserSetting_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  displayname: WebAttribute<AppUserSetting_Select, { displayname: string | null }, {  }>;
  importsequencenumber: WebAttribute<AppUserSetting_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<AppUserSetting_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<AppUserSetting_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<AppUserSetting_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  organizationid_guid: WebAttribute<AppUserSetting_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overriddencreatedon: WebAttribute<AppUserSetting_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  parentappmoduleid_guid: WebAttribute<AppUserSetting_Select, { parentappmoduleid_guid: string | null }, { parentappmoduleid_formatted?: string }>;
  settingdefinitionid_guid: WebAttribute<AppUserSetting_Select, { settingdefinitionid_guid: string | null }, { settingdefinitionid_formatted?: string }>;
  statecode: WebAttribute<AppUserSetting_Select, { statecode: appusersetting_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<AppUserSetting_Select, { statuscode: appusersetting_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<AppUserSetting_Select, { timezoneruleversionnumber: number | null }, {  }>;
  userid_guid: WebAttribute<AppUserSetting_Select, { userid_guid: string | null }, { userid_formatted?: string }>;
  utcconversiontimezonecode: WebAttribute<AppUserSetting_Select, { utcconversiontimezonecode: number | null }, {  }>;
  value: WebAttribute<AppUserSetting_Select, { value: string | null }, {  }>;
  versionnumber: WebAttribute<AppUserSetting_Select, { versionnumber: number | null }, {  }>;
}
interface AppUserSetting_Filter {
  appusersettingid: XQW.Guid;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  displayname: string;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  organizationid_guid: XQW.Guid;
  overriddencreatedon: Date;
  parentappmoduleid_guid: XQW.Guid;
  settingdefinitionid_guid: XQW.Guid;
  statecode: appusersetting_statecode;
  statuscode: appusersetting_statuscode;
  timezoneruleversionnumber: number;
  userid_guid: XQW.Guid;
  utcconversiontimezonecode: number;
  value: string;
  versionnumber: number;
}
interface AppUserSetting_Expand {
  UserId: WebExpand<AppUserSetting_Expand, SystemUser_Select, SystemUser_Filter, { UserId: SystemUser_Result }>;
  appusersetting_AsyncOperations: WebExpand<AppUserSetting_Expand, AsyncOperation_Select, AsyncOperation_Filter, { appusersetting_AsyncOperations: AsyncOperation_Result[] }>;
  appusersetting_BulkDeleteFailures: WebExpand<AppUserSetting_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { appusersetting_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  appusersetting_MailboxTrackingFolders: WebExpand<AppUserSetting_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { appusersetting_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  appusersetting_PrincipalObjectAttributeAccesses: WebExpand<AppUserSetting_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { appusersetting_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  appusersetting_ProcessSession: WebExpand<AppUserSetting_Expand, ProcessSession_Select, ProcessSession_Filter, { appusersetting_ProcessSession: ProcessSession_Result[] }>;
  appusersetting_SyncErrors: WebExpand<AppUserSetting_Expand, SyncError_Select, SyncError_Filter, { appusersetting_SyncErrors: SyncError_Result[] }>;
  appusersetting_UserEntityInstanceDatas: WebExpand<AppUserSetting_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { appusersetting_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  createdby: WebExpand<AppUserSetting_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<AppUserSetting_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<AppUserSetting_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<AppUserSetting_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  organizationid: WebExpand<AppUserSetting_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
  parentappmoduleid: WebExpand<AppUserSetting_Expand, AppModule_Select, AppModule_Filter, { parentappmoduleid: AppModule_Result }>;
  settingdefinitionid: WebExpand<AppUserSetting_Expand, SettingDefinition_Select, SettingDefinition_Filter, { settingdefinitionid: SettingDefinition_Result }>;
}
interface AppUserSetting_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  organizationid_formatted?: string;
  overriddencreatedon_formatted?: string;
  parentappmoduleid_formatted?: string;
  settingdefinitionid_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
  userid_formatted?: string;
}
interface AppUserSetting_Result extends AppUserSetting_Base, AppUserSetting_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
  parentappmoduleid_guid: string | null;
  settingdefinitionid_guid: string | null;
  userid_guid: string | null;
}
interface AppUserSetting_RelatedOne {
  UserId: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
  parentappmoduleid: WebMappingRetrieve<AppModule_Select,AppModule_Expand,AppModule_Filter,AppModule_Fixed,AppModule_Result,AppModule_FormattedResult>;
  settingdefinitionid: WebMappingRetrieve<SettingDefinition_Select,SettingDefinition_Expand,SettingDefinition_Filter,SettingDefinition_Fixed,SettingDefinition_Result,SettingDefinition_FormattedResult>;
}
interface AppUserSetting_RelatedMany {
  appusersetting_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  appusersetting_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  appusersetting_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  appusersetting_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  appusersetting_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  appusersetting_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  appusersetting_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  appusersettings: WebMappingRetrieve<AppUserSetting_Select,AppUserSetting_Expand,AppUserSetting_Filter,AppUserSetting_Fixed,AppUserSetting_Result,AppUserSetting_FormattedResult>;
}
interface WebEntitiesRelated {
  appusersettings: WebMappingRelated<AppUserSetting_RelatedOne,AppUserSetting_RelatedMany>;
}
interface WebEntitiesCUDA {
  appusersettings: WebMappingCUDA<AppUserSetting_Create,AppUserSetting_Update,AppUserSetting_Select>;
}
