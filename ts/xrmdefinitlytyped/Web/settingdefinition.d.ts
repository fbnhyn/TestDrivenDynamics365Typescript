interface SettingDefinition_Base extends WebEntity {
  componentidunique?: string | null;
  componentstate?: componentstate | null;
  createdon?: Date | null;
  datatype?: settingdefinition_datatype | null;
  defaultvalue?: string | null;
  description?: string | null;
  displayname?: string | null;
  importsequencenumber?: number | null;
  informationurl?: string | null;
  iscustomizable?: any | null;
  ishidden?: boolean | null;
  ismanaged?: boolean | null;
  isoverridable?: boolean | null;
  isplatform?: boolean | null;
  ispreview?: boolean | null;
  modifiedon?: Date | null;
  overridablelevel?: settingdefinition_overridablelevel | null;
  overriddencreatedon?: Date | null;
  overwritetime?: Date | null;
  releaselevel?: settingdefinition_releaselevel | null;
  settingdefinitionid?: string | null;
  solutionid?: string | null;
  statecode?: settingdefinition_statecode | null;
  statuscode?: settingdefinition_statuscode | null;
  supportingsolutionid?: string | null;
  timezoneruleversionnumber?: number | null;
  uniquename?: string | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface SettingDefinition_Relationships {
  settingdefinition_AsyncOperations?: AsyncOperation_Result[] | null;
  settingdefinition_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  settingdefinition_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  settingdefinition_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  settingdefinition_ProcessSession?: ProcessSession_Result[] | null;
  settingdefinition_SyncErrors?: SyncError_Result[] | null;
  settingdefinition_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  settingdefinition_appsetting_settingdefinitionId?: AppSetting_Result[] | null;
  settingdefinition_appusersetting_settingdefinitionId?: AppUserSetting_Result[] | null;
  settingdefinition_organizationsetting_settingdefinitionid?: OrganizationSetting_Result[] | null;
}
interface SettingDefinition extends SettingDefinition_Base, SettingDefinition_Relationships {
}
interface SettingDefinition_Create extends SettingDefinition {
}
interface SettingDefinition_Update extends SettingDefinition {
}
interface SettingDefinition_Select {
  componentidunique: WebAttribute<SettingDefinition_Select, { componentidunique: string | null }, {  }>;
  componentstate: WebAttribute<SettingDefinition_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  createdby_guid: WebAttribute<SettingDefinition_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<SettingDefinition_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<SettingDefinition_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  datatype: WebAttribute<SettingDefinition_Select, { datatype: settingdefinition_datatype | null }, { datatype_formatted?: string }>;
  defaultvalue: WebAttribute<SettingDefinition_Select, { defaultvalue: string | null }, {  }>;
  description: WebAttribute<SettingDefinition_Select, { description: string | null }, {  }>;
  displayname: WebAttribute<SettingDefinition_Select, { displayname: string | null }, {  }>;
  importsequencenumber: WebAttribute<SettingDefinition_Select, { importsequencenumber: number | null }, {  }>;
  informationurl: WebAttribute<SettingDefinition_Select, { informationurl: string | null }, {  }>;
  iscustomizable: WebAttribute<SettingDefinition_Select, { iscustomizable: any | null }, {  }>;
  ishidden: WebAttribute<SettingDefinition_Select, { ishidden: boolean | null }, {  }>;
  ismanaged: WebAttribute<SettingDefinition_Select, { ismanaged: boolean | null }, {  }>;
  isoverridable: WebAttribute<SettingDefinition_Select, { isoverridable: boolean | null }, {  }>;
  isplatform: WebAttribute<SettingDefinition_Select, { isplatform: boolean | null }, {  }>;
  ispreview: WebAttribute<SettingDefinition_Select, { ispreview: boolean | null }, {  }>;
  modifiedby_guid: WebAttribute<SettingDefinition_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<SettingDefinition_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<SettingDefinition_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  organizationid_guid: WebAttribute<SettingDefinition_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overridablelevel: WebAttribute<SettingDefinition_Select, { overridablelevel: settingdefinition_overridablelevel | null }, { overridablelevel_formatted?: string }>;
  overriddencreatedon: WebAttribute<SettingDefinition_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  overwritetime: WebAttribute<SettingDefinition_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  releaselevel: WebAttribute<SettingDefinition_Select, { releaselevel: settingdefinition_releaselevel | null }, { releaselevel_formatted?: string }>;
  settingdefinitionid: WebAttribute<SettingDefinition_Select, { settingdefinitionid: string | null }, {  }>;
  solutionid: WebAttribute<SettingDefinition_Select, { solutionid: string | null }, {  }>;
  statecode: WebAttribute<SettingDefinition_Select, { statecode: settingdefinition_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<SettingDefinition_Select, { statuscode: settingdefinition_statuscode | null }, { statuscode_formatted?: string }>;
  supportingsolutionid: WebAttribute<SettingDefinition_Select, { supportingsolutionid: string | null }, {  }>;
  timezoneruleversionnumber: WebAttribute<SettingDefinition_Select, { timezoneruleversionnumber: number | null }, {  }>;
  uniquename: WebAttribute<SettingDefinition_Select, { uniquename: string | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<SettingDefinition_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<SettingDefinition_Select, { versionnumber: number | null }, {  }>;
}
interface SettingDefinition_Filter {
  componentidunique: XQW.Guid;
  componentstate: componentstate;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  datatype: settingdefinition_datatype;
  defaultvalue: string;
  description: string;
  displayname: string;
  importsequencenumber: number;
  informationurl: string;
  iscustomizable: any;
  ishidden: boolean;
  ismanaged: boolean;
  isoverridable: boolean;
  isplatform: boolean;
  ispreview: boolean;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  organizationid_guid: XQW.Guid;
  overridablelevel: settingdefinition_overridablelevel;
  overriddencreatedon: Date;
  overwritetime: Date;
  releaselevel: settingdefinition_releaselevel;
  settingdefinitionid: XQW.Guid;
  solutionid: XQW.Guid;
  statecode: settingdefinition_statecode;
  statuscode: settingdefinition_statuscode;
  supportingsolutionid: XQW.Guid;
  timezoneruleversionnumber: number;
  uniquename: string;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface SettingDefinition_Expand {
  createdby: WebExpand<SettingDefinition_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<SettingDefinition_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<SettingDefinition_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<SettingDefinition_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  organizationid: WebExpand<SettingDefinition_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
  settingdefinition_AsyncOperations: WebExpand<SettingDefinition_Expand, AsyncOperation_Select, AsyncOperation_Filter, { settingdefinition_AsyncOperations: AsyncOperation_Result[] }>;
  settingdefinition_BulkDeleteFailures: WebExpand<SettingDefinition_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { settingdefinition_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  settingdefinition_MailboxTrackingFolders: WebExpand<SettingDefinition_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { settingdefinition_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  settingdefinition_PrincipalObjectAttributeAccesses: WebExpand<SettingDefinition_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { settingdefinition_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  settingdefinition_ProcessSession: WebExpand<SettingDefinition_Expand, ProcessSession_Select, ProcessSession_Filter, { settingdefinition_ProcessSession: ProcessSession_Result[] }>;
  settingdefinition_SyncErrors: WebExpand<SettingDefinition_Expand, SyncError_Select, SyncError_Filter, { settingdefinition_SyncErrors: SyncError_Result[] }>;
  settingdefinition_UserEntityInstanceDatas: WebExpand<SettingDefinition_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { settingdefinition_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  settingdefinition_appsetting_settingdefinitionId: WebExpand<SettingDefinition_Expand, AppSetting_Select, AppSetting_Filter, { settingdefinition_appsetting_settingdefinitionId: AppSetting_Result[] }>;
  settingdefinition_appusersetting_settingdefinitionId: WebExpand<SettingDefinition_Expand, AppUserSetting_Select, AppUserSetting_Filter, { settingdefinition_appusersetting_settingdefinitionId: AppUserSetting_Result[] }>;
  settingdefinition_organizationsetting_settingdefinitionid: WebExpand<SettingDefinition_Expand, OrganizationSetting_Select, OrganizationSetting_Filter, { settingdefinition_organizationsetting_settingdefinitionid: OrganizationSetting_Result[] }>;
}
interface SettingDefinition_FormattedResult {
  componentstate_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  datatype_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  organizationid_formatted?: string;
  overridablelevel_formatted?: string;
  overriddencreatedon_formatted?: string;
  overwritetime_formatted?: string;
  releaselevel_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface SettingDefinition_Result extends SettingDefinition_Base, SettingDefinition_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
}
interface SettingDefinition_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
}
interface SettingDefinition_RelatedMany {
  settingdefinition_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  settingdefinition_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  settingdefinition_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  settingdefinition_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  settingdefinition_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  settingdefinition_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  settingdefinition_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  settingdefinition_appsetting_settingdefinitionId: WebMappingRetrieve<AppSetting_Select,AppSetting_Expand,AppSetting_Filter,AppSetting_Fixed,AppSetting_Result,AppSetting_FormattedResult>;
  settingdefinition_appusersetting_settingdefinitionId: WebMappingRetrieve<AppUserSetting_Select,AppUserSetting_Expand,AppUserSetting_Filter,AppUserSetting_Fixed,AppUserSetting_Result,AppUserSetting_FormattedResult>;
  settingdefinition_organizationsetting_settingdefinitionid: WebMappingRetrieve<OrganizationSetting_Select,OrganizationSetting_Expand,OrganizationSetting_Filter,OrganizationSetting_Fixed,OrganizationSetting_Result,OrganizationSetting_FormattedResult>;
}
interface WebEntitiesRetrieve {
  settingdefinitions: WebMappingRetrieve<SettingDefinition_Select,SettingDefinition_Expand,SettingDefinition_Filter,SettingDefinition_Fixed,SettingDefinition_Result,SettingDefinition_FormattedResult>;
}
interface WebEntitiesRelated {
  settingdefinitions: WebMappingRelated<SettingDefinition_RelatedOne,SettingDefinition_RelatedMany>;
}
interface WebEntitiesCUDA {
  settingdefinitions: WebMappingCUDA<SettingDefinition_Create,SettingDefinition_Update,SettingDefinition_Select>;
}
