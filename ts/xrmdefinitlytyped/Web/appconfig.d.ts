interface AppConfig_Base extends WebEntity {
  appconfigid?: string | null;
  appconfigidunique?: string | null;
  appconfigimportxml?: string | null;
  componentstate?: componentstate | null;
  createdon?: Date | null;
  importsequencenumber?: number | null;
  introducedversion?: string | null;
  ismanaged?: boolean | null;
  modifiedon?: Date | null;
  overriddencreatedon?: Date | null;
  overwritetime?: Date | null;
  solutionid?: string | null;
  statecode?: appconfig_statecode | null;
  statuscode?: appconfig_statuscode | null;
  supportingsolutionid?: string | null;
  versionnumber?: number | null;
}
interface AppConfig_Relationships {
  appconfig_appconfiginstance?: AppConfigInstance_Result[] | null;
  appconfig_createdby?: SystemUser_Result | null;
  appconfig_createdonbehalfby?: SystemUser_Result | null;
  appconfig_modifiedby?: SystemUser_Result | null;
  appconfig_modifiedonbehalfby?: SystemUser_Result | null;
  appconfig_navigationsetting?: NavigationSetting_Result[] | null;
  appmodule_appconfig?: AppModule_Result | null;
  organization_appconfig?: Organization_Result | null;
}
interface AppConfig extends AppConfig_Base, AppConfig_Relationships {
  appmodule_appconfig_bind$appmodules?: string | null;
}
interface AppConfig_Create extends AppConfig {
}
interface AppConfig_Update extends AppConfig {
}
interface AppConfig_Select {
  appconfigid: WebAttribute<AppConfig_Select, { appconfigid: string | null }, {  }>;
  appconfigidunique: WebAttribute<AppConfig_Select, { appconfigidunique: string | null }, {  }>;
  appconfigimportxml: WebAttribute<AppConfig_Select, { appconfigimportxml: string | null }, {  }>;
  appmoduleid_guid: WebAttribute<AppConfig_Select, { appmoduleid_guid: string | null }, { appmoduleid_formatted?: string }>;
  componentstate: WebAttribute<AppConfig_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  createdby_guid: WebAttribute<AppConfig_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<AppConfig_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<AppConfig_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<AppConfig_Select, { importsequencenumber: number | null }, {  }>;
  introducedversion: WebAttribute<AppConfig_Select, { introducedversion: string | null }, {  }>;
  ismanaged: WebAttribute<AppConfig_Select, { ismanaged: boolean | null }, {  }>;
  modifiedby_guid: WebAttribute<AppConfig_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<AppConfig_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<AppConfig_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  organizationid_guid: WebAttribute<AppConfig_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overriddencreatedon: WebAttribute<AppConfig_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  overwritetime: WebAttribute<AppConfig_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  solutionid: WebAttribute<AppConfig_Select, { solutionid: string | null }, {  }>;
  statecode: WebAttribute<AppConfig_Select, { statecode: appconfig_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<AppConfig_Select, { statuscode: appconfig_statuscode | null }, { statuscode_formatted?: string }>;
  supportingsolutionid: WebAttribute<AppConfig_Select, { supportingsolutionid: string | null }, {  }>;
  versionnumber: WebAttribute<AppConfig_Select, { versionnumber: number | null }, {  }>;
}
interface AppConfig_Filter {
  appconfigid: XQW.Guid;
  appconfigidunique: XQW.Guid;
  appconfigimportxml: string;
  appmoduleid_guid: XQW.Guid;
  componentstate: componentstate;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  introducedversion: string;
  ismanaged: boolean;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  organizationid_guid: XQW.Guid;
  overriddencreatedon: Date;
  overwritetime: Date;
  solutionid: XQW.Guid;
  statecode: appconfig_statecode;
  statuscode: appconfig_statuscode;
  supportingsolutionid: XQW.Guid;
  versionnumber: number;
}
interface AppConfig_Expand {
  appconfig_appconfiginstance: WebExpand<AppConfig_Expand, AppConfigInstance_Select, AppConfigInstance_Filter, { appconfig_appconfiginstance: AppConfigInstance_Result[] }>;
  appconfig_createdby: WebExpand<AppConfig_Expand, SystemUser_Select, SystemUser_Filter, { appconfig_createdby: SystemUser_Result }>;
  appconfig_createdonbehalfby: WebExpand<AppConfig_Expand, SystemUser_Select, SystemUser_Filter, { appconfig_createdonbehalfby: SystemUser_Result }>;
  appconfig_modifiedby: WebExpand<AppConfig_Expand, SystemUser_Select, SystemUser_Filter, { appconfig_modifiedby: SystemUser_Result }>;
  appconfig_modifiedonbehalfby: WebExpand<AppConfig_Expand, SystemUser_Select, SystemUser_Filter, { appconfig_modifiedonbehalfby: SystemUser_Result }>;
  appconfig_navigationsetting: WebExpand<AppConfig_Expand, NavigationSetting_Select, NavigationSetting_Filter, { appconfig_navigationsetting: NavigationSetting_Result[] }>;
  appmodule_appconfig: WebExpand<AppConfig_Expand, AppModule_Select, AppModule_Filter, { appmodule_appconfig: AppModule_Result }>;
  organization_appconfig: WebExpand<AppConfig_Expand, Organization_Select, Organization_Filter, { organization_appconfig: Organization_Result }>;
}
interface AppConfig_FormattedResult {
  appmoduleid_formatted?: string;
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
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface AppConfig_Result extends AppConfig_Base, AppConfig_Relationships {
  "@odata.etag": string;
  appmoduleid_guid: string | null;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
}
interface AppConfig_RelatedOne {
  appconfig_createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  appconfig_createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  appconfig_modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  appconfig_modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  appmodule_appconfig: WebMappingRetrieve<AppModule_Select,AppModule_Expand,AppModule_Filter,AppModule_Fixed,AppModule_Result,AppModule_FormattedResult>;
  organization_appconfig: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
}
interface AppConfig_RelatedMany {
  appconfig_appconfiginstance: WebMappingRetrieve<AppConfigInstance_Select,AppConfigInstance_Expand,AppConfigInstance_Filter,AppConfigInstance_Fixed,AppConfigInstance_Result,AppConfigInstance_FormattedResult>;
  appconfig_navigationsetting: WebMappingRetrieve<NavigationSetting_Select,NavigationSetting_Expand,NavigationSetting_Filter,NavigationSetting_Fixed,NavigationSetting_Result,NavigationSetting_FormattedResult>;
}
interface WebEntitiesRetrieve {
  appconfigs: WebMappingRetrieve<AppConfig_Select,AppConfig_Expand,AppConfig_Filter,AppConfig_Fixed,AppConfig_Result,AppConfig_FormattedResult>;
}
interface WebEntitiesRelated {
  appconfigs: WebMappingRelated<AppConfig_RelatedOne,AppConfig_RelatedMany>;
}
interface WebEntitiesCUDA {
  appconfigs: WebMappingCUDA<AppConfig_Create,AppConfig_Update,AppConfig_Select>;
}
