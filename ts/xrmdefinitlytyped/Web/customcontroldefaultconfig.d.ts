interface CustomControlDefaultConfig_Base extends WebEntity {
  componentstate?: componentstate | null;
  controldescriptionjson?: string | null;
  controldescriptionxml?: string | null;
  createdon?: Date | null;
  customcontroldefaultconfigid?: string | null;
  customcontroldefaultconfigidunique?: string | null;
  eventsxml?: string | null;
  introducedversion?: string | null;
  ismanaged?: boolean | null;
  modifiedon?: Date | null;
  overwritetime?: Date | null;
  primaryentitytypecode?: string | null;
  solutionid?: string | null;
  supportingsolutionid?: string | null;
  versionnumber?: number | null;
}
interface CustomControlDefaultConfig_Relationships {
}
interface CustomControlDefaultConfig extends CustomControlDefaultConfig_Base, CustomControlDefaultConfig_Relationships {
}
interface CustomControlDefaultConfig_Create extends CustomControlDefaultConfig {
}
interface CustomControlDefaultConfig_Update extends CustomControlDefaultConfig {
}
interface CustomControlDefaultConfig_Select {
  componentstate: WebAttribute<CustomControlDefaultConfig_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  controldescriptionjson: WebAttribute<CustomControlDefaultConfig_Select, { controldescriptionjson: string | null }, {  }>;
  controldescriptionxml: WebAttribute<CustomControlDefaultConfig_Select, { controldescriptionxml: string | null }, {  }>;
  createdby_guid: WebAttribute<CustomControlDefaultConfig_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<CustomControlDefaultConfig_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<CustomControlDefaultConfig_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  customcontroldefaultconfigid: WebAttribute<CustomControlDefaultConfig_Select, { customcontroldefaultconfigid: string | null }, {  }>;
  customcontroldefaultconfigidunique: WebAttribute<CustomControlDefaultConfig_Select, { customcontroldefaultconfigidunique: string | null }, {  }>;
  eventsxml: WebAttribute<CustomControlDefaultConfig_Select, { eventsxml: string | null }, {  }>;
  introducedversion: WebAttribute<CustomControlDefaultConfig_Select, { introducedversion: string | null }, {  }>;
  ismanaged: WebAttribute<CustomControlDefaultConfig_Select, { ismanaged: boolean | null }, {  }>;
  modifiedby_guid: WebAttribute<CustomControlDefaultConfig_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<CustomControlDefaultConfig_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<CustomControlDefaultConfig_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  organizationid_guid: WebAttribute<CustomControlDefaultConfig_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overwritetime: WebAttribute<CustomControlDefaultConfig_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  primaryentitytypecode: WebAttribute<CustomControlDefaultConfig_Select, { primaryentitytypecode: string | null }, {  }>;
  solutionid: WebAttribute<CustomControlDefaultConfig_Select, { solutionid: string | null }, {  }>;
  supportingsolutionid: WebAttribute<CustomControlDefaultConfig_Select, { supportingsolutionid: string | null }, {  }>;
  versionnumber: WebAttribute<CustomControlDefaultConfig_Select, { versionnumber: number | null }, {  }>;
}
interface CustomControlDefaultConfig_Filter {
  componentstate: componentstate;
  controldescriptionjson: string;
  controldescriptionxml: string;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  customcontroldefaultconfigid: XQW.Guid;
  customcontroldefaultconfigidunique: XQW.Guid;
  eventsxml: string;
  introducedversion: string;
  ismanaged: boolean;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  organizationid_guid: XQW.Guid;
  overwritetime: Date;
  primaryentitytypecode: string;
  solutionid: XQW.Guid;
  supportingsolutionid: XQW.Guid;
  versionnumber: number;
}
interface CustomControlDefaultConfig_Expand {
  createdby: WebExpand<CustomControlDefaultConfig_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<CustomControlDefaultConfig_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<CustomControlDefaultConfig_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<CustomControlDefaultConfig_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  organizationid: WebExpand<CustomControlDefaultConfig_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
}
interface CustomControlDefaultConfig_FormattedResult {
  componentstate_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  organizationid_formatted?: string;
  overwritetime_formatted?: string;
}
interface CustomControlDefaultConfig_Result extends CustomControlDefaultConfig_Base, CustomControlDefaultConfig_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
}
interface CustomControlDefaultConfig_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
}
interface CustomControlDefaultConfig_RelatedMany {
}
interface WebEntitiesRetrieve {
  customcontroldefaultconfigs: WebMappingRetrieve<CustomControlDefaultConfig_Select,CustomControlDefaultConfig_Expand,CustomControlDefaultConfig_Filter,CustomControlDefaultConfig_Fixed,CustomControlDefaultConfig_Result,CustomControlDefaultConfig_FormattedResult>;
}
interface WebEntitiesRelated {
  customcontroldefaultconfigs: WebMappingRelated<CustomControlDefaultConfig_RelatedOne,CustomControlDefaultConfig_RelatedMany>;
}
interface WebEntitiesCUDA {
  customcontroldefaultconfigs: WebMappingCUDA<CustomControlDefaultConfig_Create,CustomControlDefaultConfig_Update,CustomControlDefaultConfig_Select>;
}
