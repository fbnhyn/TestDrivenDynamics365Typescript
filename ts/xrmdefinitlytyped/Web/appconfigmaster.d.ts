interface AppConfigMaster_Base extends WebEntity {
  appconfigmasterid?: string | null;
  configtype?: string | null;
  createdon?: Date | null;
  defaultvalue?: string | null;
  importsequencenumber?: number | null;
  isnavigationsetting?: number | null;
  modifiedon?: Date | null;
  name?: string | null;
  overriddencreatedon?: Date | null;
  parentappconfigmasterid?: string | null;
  validator?: string | null;
  versionnumber?: number | null;
}
interface AppConfigMaster_Relationships {
  appconfigmaster_appconfiginstance?: AppConfigInstance_Result[] | null;
  appconfigmaster_createdby?: SystemUser_Result | null;
  appconfigmaster_createdonbehalfby?: SystemUser_Result | null;
  appconfigmaster_modifiedby?: SystemUser_Result | null;
  appconfigmaster_modifiedonbehalfby?: SystemUser_Result | null;
  organization_appconfigmaster_appconfigmaster?: Organization_Result | null;
}
interface AppConfigMaster extends AppConfigMaster_Base, AppConfigMaster_Relationships {
}
interface AppConfigMaster_Create extends AppConfigMaster {
}
interface AppConfigMaster_Update extends AppConfigMaster {
}
interface AppConfigMaster_Select {
  appconfigmasterid: WebAttribute<AppConfigMaster_Select, { appconfigmasterid: string | null }, {  }>;
  configtype: WebAttribute<AppConfigMaster_Select, { configtype: string | null }, {  }>;
  createdby_guid: WebAttribute<AppConfigMaster_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<AppConfigMaster_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<AppConfigMaster_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  defaultvalue: WebAttribute<AppConfigMaster_Select, { defaultvalue: string | null }, {  }>;
  importsequencenumber: WebAttribute<AppConfigMaster_Select, { importsequencenumber: number | null }, {  }>;
  isnavigationsetting: WebAttribute<AppConfigMaster_Select, { isnavigationsetting: number | null }, {  }>;
  modifiedby_guid: WebAttribute<AppConfigMaster_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<AppConfigMaster_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<AppConfigMaster_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  name: WebAttribute<AppConfigMaster_Select, { name: string | null }, {  }>;
  organizationid_guid: WebAttribute<AppConfigMaster_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overriddencreatedon: WebAttribute<AppConfigMaster_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  parentappconfigmasterid: WebAttribute<AppConfigMaster_Select, { parentappconfigmasterid: string | null }, {  }>;
  validator: WebAttribute<AppConfigMaster_Select, { validator: string | null }, {  }>;
  versionnumber: WebAttribute<AppConfigMaster_Select, { versionnumber: number | null }, {  }>;
}
interface AppConfigMaster_Filter {
  appconfigmasterid: XQW.Guid;
  configtype: string;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  defaultvalue: string;
  importsequencenumber: number;
  isnavigationsetting: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  name: string;
  organizationid_guid: XQW.Guid;
  overriddencreatedon: Date;
  parentappconfigmasterid: string;
  validator: string;
  versionnumber: number;
}
interface AppConfigMaster_Expand {
  appconfigmaster_appconfiginstance: WebExpand<AppConfigMaster_Expand, AppConfigInstance_Select, AppConfigInstance_Filter, { appconfigmaster_appconfiginstance: AppConfigInstance_Result[] }>;
  appconfigmaster_createdby: WebExpand<AppConfigMaster_Expand, SystemUser_Select, SystemUser_Filter, { appconfigmaster_createdby: SystemUser_Result }>;
  appconfigmaster_createdonbehalfby: WebExpand<AppConfigMaster_Expand, SystemUser_Select, SystemUser_Filter, { appconfigmaster_createdonbehalfby: SystemUser_Result }>;
  appconfigmaster_modifiedby: WebExpand<AppConfigMaster_Expand, SystemUser_Select, SystemUser_Filter, { appconfigmaster_modifiedby: SystemUser_Result }>;
  appconfigmaster_modifiedonbehalfby: WebExpand<AppConfigMaster_Expand, SystemUser_Select, SystemUser_Filter, { appconfigmaster_modifiedonbehalfby: SystemUser_Result }>;
  organization_appconfigmaster_appconfigmaster: WebExpand<AppConfigMaster_Expand, Organization_Select, Organization_Filter, { organization_appconfigmaster_appconfigmaster: Organization_Result }>;
}
interface AppConfigMaster_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  organizationid_formatted?: string;
  overriddencreatedon_formatted?: string;
}
interface AppConfigMaster_Result extends AppConfigMaster_Base, AppConfigMaster_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
}
interface AppConfigMaster_RelatedOne {
  appconfigmaster_createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  appconfigmaster_createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  appconfigmaster_modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  appconfigmaster_modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  organization_appconfigmaster_appconfigmaster: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
}
interface AppConfigMaster_RelatedMany {
  appconfigmaster_appconfiginstance: WebMappingRetrieve<AppConfigInstance_Select,AppConfigInstance_Expand,AppConfigInstance_Filter,AppConfigInstance_Fixed,AppConfigInstance_Result,AppConfigInstance_FormattedResult>;
}
interface WebEntitiesRetrieve {
  appconfigmasters: WebMappingRetrieve<AppConfigMaster_Select,AppConfigMaster_Expand,AppConfigMaster_Filter,AppConfigMaster_Fixed,AppConfigMaster_Result,AppConfigMaster_FormattedResult>;
}
interface WebEntitiesRelated {
  appconfigmasters: WebMappingRelated<AppConfigMaster_RelatedOne,AppConfigMaster_RelatedMany>;
}
interface WebEntitiesCUDA {
  appconfigmasters: WebMappingCUDA<AppConfigMaster_Create,AppConfigMaster_Update,AppConfigMaster_Select>;
}
