interface NavigationSetting_Base extends WebEntity {
  advancedsettingorder?: number | null;
  appconfigidunique?: string | null;
  componentstate?: componentstate | null;
  createdon?: Date | null;
  description?: string | null;
  groupname?: string | null;
  iconresourceid?: string | null;
  importsequencenumber?: number | null;
  introducedversion?: string | null;
  ismanaged?: boolean | null;
  modifiedon?: Date | null;
  name?: string | null;
  navigationsettingid?: string | null;
  navigationsettingidunique?: string | null;
  objecttypecode?: number | null;
  overriddencreatedon?: Date | null;
  overwritetime?: Date | null;
  pageurl?: string | null;
  parentnavigationsettingid?: string | null;
  privileges?: number | null;
  progressstate?: boolean | null;
  quicksettingorder?: number | null;
  resourceid?: string | null;
  settingtype?: navigationsetting_settingtype | null;
  solutionid?: string | null;
  supportingsolutionid?: string | null;
}
interface NavigationSetting_Relationships {
  navigationsetting_appconfig?: AppConfig_Result | null;
  navigationsetting_createdby?: SystemUser_Result | null;
  navigationsetting_createdonbehalfby?: SystemUser_Result | null;
  navigationsetting_modifiedby?: SystemUser_Result | null;
  navigationsetting_modifiedonbehalfby?: SystemUser_Result | null;
  organization_navigationsetting_navigationsetting?: Organization_Result | null;
}
interface NavigationSetting extends NavigationSetting_Base, NavigationSetting_Relationships {
  navigationsetting_appconfig_bind$appconfigs?: string | null;
}
interface NavigationSetting_Create extends NavigationSetting {
}
interface NavigationSetting_Update extends NavigationSetting {
}
interface NavigationSetting_Select {
  advancedsettingorder: WebAttribute<NavigationSetting_Select, { advancedsettingorder: number | null }, {  }>;
  appconfigid_guid: WebAttribute<NavigationSetting_Select, { appconfigid_guid: string | null }, { appconfigid_formatted?: string }>;
  appconfigidunique: WebAttribute<NavigationSetting_Select, { appconfigidunique: string | null }, {  }>;
  componentstate: WebAttribute<NavigationSetting_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  createdby_guid: WebAttribute<NavigationSetting_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<NavigationSetting_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<NavigationSetting_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  description: WebAttribute<NavigationSetting_Select, { description: string | null }, {  }>;
  groupname: WebAttribute<NavigationSetting_Select, { groupname: string | null }, {  }>;
  iconresourceid: WebAttribute<NavigationSetting_Select, { iconresourceid: string | null }, {  }>;
  importsequencenumber: WebAttribute<NavigationSetting_Select, { importsequencenumber: number | null }, {  }>;
  introducedversion: WebAttribute<NavigationSetting_Select, { introducedversion: string | null }, {  }>;
  ismanaged: WebAttribute<NavigationSetting_Select, { ismanaged: boolean | null }, {  }>;
  modifiedby_guid: WebAttribute<NavigationSetting_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<NavigationSetting_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<NavigationSetting_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  name: WebAttribute<NavigationSetting_Select, { name: string | null }, {  }>;
  navigationsettingid: WebAttribute<NavigationSetting_Select, { navigationsettingid: string | null }, {  }>;
  navigationsettingidunique: WebAttribute<NavigationSetting_Select, { navigationsettingidunique: string | null }, {  }>;
  objecttypecode: WebAttribute<NavigationSetting_Select, { objecttypecode: number | null }, {  }>;
  organizationid_guid: WebAttribute<NavigationSetting_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overriddencreatedon: WebAttribute<NavigationSetting_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  overwritetime: WebAttribute<NavigationSetting_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  pageurl: WebAttribute<NavigationSetting_Select, { pageurl: string | null }, {  }>;
  parentnavigationsettingid: WebAttribute<NavigationSetting_Select, { parentnavigationsettingid: string | null }, {  }>;
  privileges: WebAttribute<NavigationSetting_Select, { privileges: number | null }, {  }>;
  progressstate: WebAttribute<NavigationSetting_Select, { progressstate: boolean | null }, {  }>;
  quicksettingorder: WebAttribute<NavigationSetting_Select, { quicksettingorder: number | null }, {  }>;
  resourceid: WebAttribute<NavigationSetting_Select, { resourceid: string | null }, {  }>;
  settingtype: WebAttribute<NavigationSetting_Select, { settingtype: navigationsetting_settingtype | null }, { settingtype_formatted?: string }>;
  solutionid: WebAttribute<NavigationSetting_Select, { solutionid: string | null }, {  }>;
  supportingsolutionid: WebAttribute<NavigationSetting_Select, { supportingsolutionid: string | null }, {  }>;
}
interface NavigationSetting_Filter {
  advancedsettingorder: number;
  appconfigid_guid: XQW.Guid;
  appconfigidunique: XQW.Guid;
  componentstate: componentstate;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  description: string;
  groupname: string;
  iconresourceid: XQW.Guid;
  importsequencenumber: number;
  introducedversion: string;
  ismanaged: boolean;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  name: string;
  navigationsettingid: XQW.Guid;
  navigationsettingidunique: XQW.Guid;
  objecttypecode: number;
  organizationid_guid: XQW.Guid;
  overriddencreatedon: Date;
  overwritetime: Date;
  pageurl: string;
  parentnavigationsettingid: XQW.Guid;
  privileges: number;
  progressstate: boolean;
  quicksettingorder: number;
  resourceid: XQW.Guid;
  settingtype: navigationsetting_settingtype;
  solutionid: XQW.Guid;
  supportingsolutionid: XQW.Guid;
}
interface NavigationSetting_Expand {
  navigationsetting_appconfig: WebExpand<NavigationSetting_Expand, AppConfig_Select, AppConfig_Filter, { navigationsetting_appconfig: AppConfig_Result }>;
  navigationsetting_createdby: WebExpand<NavigationSetting_Expand, SystemUser_Select, SystemUser_Filter, { navigationsetting_createdby: SystemUser_Result }>;
  navigationsetting_createdonbehalfby: WebExpand<NavigationSetting_Expand, SystemUser_Select, SystemUser_Filter, { navigationsetting_createdonbehalfby: SystemUser_Result }>;
  navigationsetting_modifiedby: WebExpand<NavigationSetting_Expand, SystemUser_Select, SystemUser_Filter, { navigationsetting_modifiedby: SystemUser_Result }>;
  navigationsetting_modifiedonbehalfby: WebExpand<NavigationSetting_Expand, SystemUser_Select, SystemUser_Filter, { navigationsetting_modifiedonbehalfby: SystemUser_Result }>;
  organization_navigationsetting_navigationsetting: WebExpand<NavigationSetting_Expand, Organization_Select, Organization_Filter, { organization_navigationsetting_navigationsetting: Organization_Result }>;
}
interface NavigationSetting_FormattedResult {
  appconfigid_formatted?: string;
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
  settingtype_formatted?: string;
}
interface NavigationSetting_Result extends NavigationSetting_Base, NavigationSetting_Relationships {
  "@odata.etag": string;
  appconfigid_guid: string | null;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
}
interface NavigationSetting_RelatedOne {
  navigationsetting_appconfig: WebMappingRetrieve<AppConfig_Select,AppConfig_Expand,AppConfig_Filter,AppConfig_Fixed,AppConfig_Result,AppConfig_FormattedResult>;
  navigationsetting_createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  navigationsetting_createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  navigationsetting_modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  navigationsetting_modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  organization_navigationsetting_navigationsetting: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
}
interface NavigationSetting_RelatedMany {
}
interface WebEntitiesRetrieve {
  navigationsettings: WebMappingRetrieve<NavigationSetting_Select,NavigationSetting_Expand,NavigationSetting_Filter,NavigationSetting_Fixed,NavigationSetting_Result,NavigationSetting_FormattedResult>;
}
interface WebEntitiesRelated {
  navigationsettings: WebMappingRelated<NavigationSetting_RelatedOne,NavigationSetting_RelatedMany>;
}
interface WebEntitiesCUDA {
  navigationsettings: WebMappingCUDA<NavigationSetting_Create,NavigationSetting_Update,NavigationSetting_Select>;
}
