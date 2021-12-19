interface AppConfigInstance_Base extends WebEntity {
  appconfigidunique?: string | null;
  appconfiginstanceid?: string | null;
  appconfiginstanceidunique?: string | null;
  componentstate?: componentstate | null;
  componenttype?: string | null;
  createdon?: Date | null;
  importsequencenumber?: number | null;
  introducedversion?: string | null;
  ismanaged?: boolean | null;
  modifiedon?: Date | null;
  objectid?: string | null;
  overriddencreatedon?: Date | null;
  overwritetime?: Date | null;
  solutionid?: string | null;
  supportingsolutionid?: string | null;
  value?: string | null;
  versionnumber?: number | null;
}
interface AppConfigInstance_Relationships {
  appconfiginstance_appconfig?: AppConfig_Result | null;
  appconfiginstance_appconfigmaster?: AppConfigMaster_Result | null;
  appconfiginstance_createdby?: SystemUser_Result | null;
  appconfiginstance_createdonbehalfby?: SystemUser_Result | null;
  appconfiginstance_modifiedby?: SystemUser_Result | null;
  appconfiginstance_modifiedonbehalfby?: SystemUser_Result | null;
  organization_appconfiginstance_appconfiginstance?: Organization_Result | null;
}
interface AppConfigInstance extends AppConfigInstance_Base, AppConfigInstance_Relationships {
  appconfiginstance_appconfig_bind$appconfigs?: string | null;
  appconfiginstance_appconfigmaster_bind$appconfigmasters?: string | null;
}
interface AppConfigInstance_Create extends AppConfigInstance {
}
interface AppConfigInstance_Update extends AppConfigInstance {
}
interface AppConfigInstance_Select {
  appconfigid_guid: WebAttribute<AppConfigInstance_Select, { appconfigid_guid: string | null }, { appconfigid_formatted?: string }>;
  appconfigidunique: WebAttribute<AppConfigInstance_Select, { appconfigidunique: string | null }, {  }>;
  appconfiginstanceid: WebAttribute<AppConfigInstance_Select, { appconfiginstanceid: string | null }, {  }>;
  appconfiginstanceidunique: WebAttribute<AppConfigInstance_Select, { appconfiginstanceidunique: string | null }, {  }>;
  appconfigmasterid_guid: WebAttribute<AppConfigInstance_Select, { appconfigmasterid_guid: string | null }, { appconfigmasterid_formatted?: string }>;
  componentstate: WebAttribute<AppConfigInstance_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  componenttype: WebAttribute<AppConfigInstance_Select, { componenttype: string | null }, {  }>;
  createdby_guid: WebAttribute<AppConfigInstance_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<AppConfigInstance_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<AppConfigInstance_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<AppConfigInstance_Select, { importsequencenumber: number | null }, {  }>;
  introducedversion: WebAttribute<AppConfigInstance_Select, { introducedversion: string | null }, {  }>;
  ismanaged: WebAttribute<AppConfigInstance_Select, { ismanaged: boolean | null }, {  }>;
  modifiedby_guid: WebAttribute<AppConfigInstance_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<AppConfigInstance_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<AppConfigInstance_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  objectid: WebAttribute<AppConfigInstance_Select, { objectid: string | null }, {  }>;
  organizationid_guid: WebAttribute<AppConfigInstance_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overriddencreatedon: WebAttribute<AppConfigInstance_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  overwritetime: WebAttribute<AppConfigInstance_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  solutionid: WebAttribute<AppConfigInstance_Select, { solutionid: string | null }, {  }>;
  supportingsolutionid: WebAttribute<AppConfigInstance_Select, { supportingsolutionid: string | null }, {  }>;
  value: WebAttribute<AppConfigInstance_Select, { value: string | null }, {  }>;
  versionnumber: WebAttribute<AppConfigInstance_Select, { versionnumber: number | null }, {  }>;
}
interface AppConfigInstance_Filter {
  appconfigid_guid: XQW.Guid;
  appconfigidunique: XQW.Guid;
  appconfiginstanceid: XQW.Guid;
  appconfiginstanceidunique: XQW.Guid;
  appconfigmasterid_guid: XQW.Guid;
  componentstate: componentstate;
  componenttype: string;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  introducedversion: string;
  ismanaged: boolean;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  objectid: XQW.Guid;
  organizationid_guid: XQW.Guid;
  overriddencreatedon: Date;
  overwritetime: Date;
  solutionid: XQW.Guid;
  supportingsolutionid: XQW.Guid;
  value: string;
  versionnumber: number;
}
interface AppConfigInstance_Expand {
  appconfiginstance_appconfig: WebExpand<AppConfigInstance_Expand, AppConfig_Select, AppConfig_Filter, { appconfiginstance_appconfig: AppConfig_Result }>;
  appconfiginstance_appconfigmaster: WebExpand<AppConfigInstance_Expand, AppConfigMaster_Select, AppConfigMaster_Filter, { appconfiginstance_appconfigmaster: AppConfigMaster_Result }>;
  appconfiginstance_createdby: WebExpand<AppConfigInstance_Expand, SystemUser_Select, SystemUser_Filter, { appconfiginstance_createdby: SystemUser_Result }>;
  appconfiginstance_createdonbehalfby: WebExpand<AppConfigInstance_Expand, SystemUser_Select, SystemUser_Filter, { appconfiginstance_createdonbehalfby: SystemUser_Result }>;
  appconfiginstance_modifiedby: WebExpand<AppConfigInstance_Expand, SystemUser_Select, SystemUser_Filter, { appconfiginstance_modifiedby: SystemUser_Result }>;
  appconfiginstance_modifiedonbehalfby: WebExpand<AppConfigInstance_Expand, SystemUser_Select, SystemUser_Filter, { appconfiginstance_modifiedonbehalfby: SystemUser_Result }>;
  organization_appconfiginstance_appconfiginstance: WebExpand<AppConfigInstance_Expand, Organization_Select, Organization_Filter, { organization_appconfiginstance_appconfiginstance: Organization_Result }>;
}
interface AppConfigInstance_FormattedResult {
  appconfigid_formatted?: string;
  appconfigmasterid_formatted?: string;
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
}
interface AppConfigInstance_Result extends AppConfigInstance_Base, AppConfigInstance_Relationships {
  "@odata.etag": string;
  appconfigid_guid: string | null;
  appconfigmasterid_guid: string | null;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
}
interface AppConfigInstance_RelatedOne {
  appconfiginstance_appconfig: WebMappingRetrieve<AppConfig_Select,AppConfig_Expand,AppConfig_Filter,AppConfig_Fixed,AppConfig_Result,AppConfig_FormattedResult>;
  appconfiginstance_appconfigmaster: WebMappingRetrieve<AppConfigMaster_Select,AppConfigMaster_Expand,AppConfigMaster_Filter,AppConfigMaster_Fixed,AppConfigMaster_Result,AppConfigMaster_FormattedResult>;
  appconfiginstance_createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  appconfiginstance_createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  appconfiginstance_modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  appconfiginstance_modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  organization_appconfiginstance_appconfiginstance: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
}
interface AppConfigInstance_RelatedMany {
}
interface WebEntitiesRetrieve {
  appconfiginstances: WebMappingRetrieve<AppConfigInstance_Select,AppConfigInstance_Expand,AppConfigInstance_Filter,AppConfigInstance_Fixed,AppConfigInstance_Result,AppConfigInstance_FormattedResult>;
}
interface WebEntitiesRelated {
  appconfiginstances: WebMappingRelated<AppConfigInstance_RelatedOne,AppConfigInstance_RelatedMany>;
}
interface WebEntitiesCUDA {
  appconfiginstances: WebMappingCUDA<AppConfigInstance_Create,AppConfigInstance_Update,AppConfigInstance_Select>;
}
