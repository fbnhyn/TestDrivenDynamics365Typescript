interface SavedOrgInsightsConfiguration_Base extends WebEntity {
  createdon?: Date | null;
  description?: string | null;
  isdefault?: boolean | null;
  isdrilldown?: boolean | null;
  jsondata?: string | null;
  jsondataendtime?: Date | null;
  jsondatastarttime?: Date | null;
  lookback?: orginsightsconfiguration_lookback | null;
  metrictype?: savedorginsightsconfiguration_metrictype | null;
  modifiedon?: Date | null;
  name?: string | null;
  parameters?: string | null;
  plotoption?: orginsightsconfiguration_plotoption | null;
  savedorginsightsconfigurationid?: string | null;
}
interface SavedOrgInsightsConfiguration_Relationships {
  lk_savedorginsightsconfiguration_createdby?: SystemUser_Result | null;
  lk_savedorginsightsconfiguration_createdonbehalfby?: SystemUser_Result | null;
  lk_savedorginsightsconfiguration_modifiedby?: SystemUser_Result | null;
  lk_savedorginsightsconfiguration_modifiedonbehalfby?: SystemUser_Result | null;
  organization_savedorginsightsconfiguration?: Organization_Result | null;
}
interface SavedOrgInsightsConfiguration extends SavedOrgInsightsConfiguration_Base, SavedOrgInsightsConfiguration_Relationships {
}
interface SavedOrgInsightsConfiguration_Create extends SavedOrgInsightsConfiguration {
}
interface SavedOrgInsightsConfiguration_Update extends SavedOrgInsightsConfiguration {
}
interface SavedOrgInsightsConfiguration_Select {
  createdby_guid: WebAttribute<SavedOrgInsightsConfiguration_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<SavedOrgInsightsConfiguration_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<SavedOrgInsightsConfiguration_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  description: WebAttribute<SavedOrgInsightsConfiguration_Select, { description: string | null }, {  }>;
  isdefault: WebAttribute<SavedOrgInsightsConfiguration_Select, { isdefault: boolean | null }, {  }>;
  isdrilldown: WebAttribute<SavedOrgInsightsConfiguration_Select, { isdrilldown: boolean | null }, {  }>;
  jsondata: WebAttribute<SavedOrgInsightsConfiguration_Select, { jsondata: string | null }, {  }>;
  jsondataendtime: WebAttribute<SavedOrgInsightsConfiguration_Select, { jsondataendtime: Date | null }, { jsondataendtime_formatted?: string }>;
  jsondatastarttime: WebAttribute<SavedOrgInsightsConfiguration_Select, { jsondatastarttime: Date | null }, { jsondatastarttime_formatted?: string }>;
  lookback: WebAttribute<SavedOrgInsightsConfiguration_Select, { lookback: orginsightsconfiguration_lookback | null }, { lookback_formatted?: string }>;
  metrictype: WebAttribute<SavedOrgInsightsConfiguration_Select, { metrictype: savedorginsightsconfiguration_metrictype | null }, { metrictype_formatted?: string }>;
  modifiedby_guid: WebAttribute<SavedOrgInsightsConfiguration_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<SavedOrgInsightsConfiguration_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<SavedOrgInsightsConfiguration_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  name: WebAttribute<SavedOrgInsightsConfiguration_Select, { name: string | null }, {  }>;
  organizationid_guid: WebAttribute<SavedOrgInsightsConfiguration_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  parameters: WebAttribute<SavedOrgInsightsConfiguration_Select, { parameters: string | null }, {  }>;
  plotoption: WebAttribute<SavedOrgInsightsConfiguration_Select, { plotoption: orginsightsconfiguration_plotoption | null }, { plotoption_formatted?: string }>;
  savedorginsightsconfigurationid: WebAttribute<SavedOrgInsightsConfiguration_Select, { savedorginsightsconfigurationid: string | null }, {  }>;
}
interface SavedOrgInsightsConfiguration_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  description: string;
  isdefault: boolean;
  isdrilldown: boolean;
  jsondata: string;
  jsondataendtime: Date;
  jsondatastarttime: Date;
  lookback: orginsightsconfiguration_lookback;
  metrictype: savedorginsightsconfiguration_metrictype;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  name: string;
  organizationid_guid: XQW.Guid;
  parameters: string;
  plotoption: orginsightsconfiguration_plotoption;
  savedorginsightsconfigurationid: XQW.Guid;
}
interface SavedOrgInsightsConfiguration_Expand {
  lk_savedorginsightsconfiguration_createdby: WebExpand<SavedOrgInsightsConfiguration_Expand, SystemUser_Select, SystemUser_Filter, { lk_savedorginsightsconfiguration_createdby: SystemUser_Result }>;
  lk_savedorginsightsconfiguration_createdonbehalfby: WebExpand<SavedOrgInsightsConfiguration_Expand, SystemUser_Select, SystemUser_Filter, { lk_savedorginsightsconfiguration_createdonbehalfby: SystemUser_Result }>;
  lk_savedorginsightsconfiguration_modifiedby: WebExpand<SavedOrgInsightsConfiguration_Expand, SystemUser_Select, SystemUser_Filter, { lk_savedorginsightsconfiguration_modifiedby: SystemUser_Result }>;
  lk_savedorginsightsconfiguration_modifiedonbehalfby: WebExpand<SavedOrgInsightsConfiguration_Expand, SystemUser_Select, SystemUser_Filter, { lk_savedorginsightsconfiguration_modifiedonbehalfby: SystemUser_Result }>;
  organization_savedorginsightsconfiguration: WebExpand<SavedOrgInsightsConfiguration_Expand, Organization_Select, Organization_Filter, { organization_savedorginsightsconfiguration: Organization_Result }>;
}
interface SavedOrgInsightsConfiguration_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  jsondataendtime_formatted?: string;
  jsondatastarttime_formatted?: string;
  lookback_formatted?: string;
  metrictype_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  organizationid_formatted?: string;
  plotoption_formatted?: string;
}
interface SavedOrgInsightsConfiguration_Result extends SavedOrgInsightsConfiguration_Base, SavedOrgInsightsConfiguration_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
}
interface SavedOrgInsightsConfiguration_RelatedOne {
  lk_savedorginsightsconfiguration_createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  lk_savedorginsightsconfiguration_createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  lk_savedorginsightsconfiguration_modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  lk_savedorginsightsconfiguration_modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  organization_savedorginsightsconfiguration: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
}
interface SavedOrgInsightsConfiguration_RelatedMany {
}
interface WebEntitiesRetrieve {
  savedorginsightsconfigurations: WebMappingRetrieve<SavedOrgInsightsConfiguration_Select,SavedOrgInsightsConfiguration_Expand,SavedOrgInsightsConfiguration_Filter,SavedOrgInsightsConfiguration_Fixed,SavedOrgInsightsConfiguration_Result,SavedOrgInsightsConfiguration_FormattedResult>;
}
interface WebEntitiesRelated {
  savedorginsightsconfigurations: WebMappingRelated<SavedOrgInsightsConfiguration_RelatedOne,SavedOrgInsightsConfiguration_RelatedMany>;
}
interface WebEntitiesCUDA {
  savedorginsightsconfigurations: WebMappingCUDA<SavedOrgInsightsConfiguration_Create,SavedOrgInsightsConfiguration_Update,SavedOrgInsightsConfiguration_Select>;
}
