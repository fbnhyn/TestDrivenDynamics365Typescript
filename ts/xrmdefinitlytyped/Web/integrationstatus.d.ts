interface IntegrationStatus_Base extends WebEntity {
  createdon?: Date | null;
  integrationentryid?: string | null;
  modifiedon?: Date | null;
  objectid?: string | null;
  objecttypecode?: string | null;
  organizationid?: string | null;
  statecode?: integrationstatus_statecode | null;
  statedescription?: string | null;
  statuscode?: integrationstatus_statuscode | null;
  statusdescription?: string | null;
  systemname?: string | null;
  versionnumber?: number | null;
}
interface IntegrationStatus_Relationships {
  organizationid_organization?: Organization_Result | null;
}
interface IntegrationStatus extends IntegrationStatus_Base, IntegrationStatus_Relationships {
}
interface IntegrationStatus_Create extends IntegrationStatus {
}
interface IntegrationStatus_Update extends IntegrationStatus {
}
interface IntegrationStatus_Select {
  createdby_guid: WebAttribute<IntegrationStatus_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<IntegrationStatus_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<IntegrationStatus_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  integrationentryid: WebAttribute<IntegrationStatus_Select, { integrationentryid: string | null }, {  }>;
  modifiedby_guid: WebAttribute<IntegrationStatus_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<IntegrationStatus_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<IntegrationStatus_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  objectid: WebAttribute<IntegrationStatus_Select, { objectid: string | null }, {  }>;
  objecttypecode: WebAttribute<IntegrationStatus_Select, { objecttypecode: string | null }, {  }>;
  organizationid: WebAttribute<IntegrationStatus_Select, { organizationid: string | null }, {  }>;
  statecode: WebAttribute<IntegrationStatus_Select, { statecode: integrationstatus_statecode | null }, { statecode_formatted?: string }>;
  statedescription: WebAttribute<IntegrationStatus_Select, { statedescription: string | null }, {  }>;
  statuscode: WebAttribute<IntegrationStatus_Select, { statuscode: integrationstatus_statuscode | null }, { statuscode_formatted?: string }>;
  statusdescription: WebAttribute<IntegrationStatus_Select, { statusdescription: string | null }, {  }>;
  systemname: WebAttribute<IntegrationStatus_Select, { systemname: string | null }, {  }>;
  versionnumber: WebAttribute<IntegrationStatus_Select, { versionnumber: number | null }, {  }>;
}
interface IntegrationStatus_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  integrationentryid: XQW.Guid;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  objectid: XQW.Guid;
  objecttypecode: string;
  organizationid: XQW.Guid;
  statecode: integrationstatus_statecode;
  statedescription: string;
  statuscode: integrationstatus_statuscode;
  statusdescription: string;
  systemname: string;
  versionnumber: number;
}
interface IntegrationStatus_Expand {
  createdby: WebExpand<IntegrationStatus_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<IntegrationStatus_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<IntegrationStatus_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<IntegrationStatus_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  organizationid_organization: WebExpand<IntegrationStatus_Expand, Organization_Select, Organization_Filter, { organizationid_organization: Organization_Result }>;
}
interface IntegrationStatus_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface IntegrationStatus_Result extends IntegrationStatus_Base, IntegrationStatus_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
}
interface IntegrationStatus_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  organizationid_organization: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
}
interface IntegrationStatus_RelatedMany {
}
interface WebEntitiesRetrieve {
  integrationstatuses: WebMappingRetrieve<IntegrationStatus_Select,IntegrationStatus_Expand,IntegrationStatus_Filter,IntegrationStatus_Fixed,IntegrationStatus_Result,IntegrationStatus_FormattedResult>;
}
interface WebEntitiesRelated {
  integrationstatuses: WebMappingRelated<IntegrationStatus_RelatedOne,IntegrationStatus_RelatedMany>;
}
interface WebEntitiesCUDA {
  integrationstatuses: WebMappingCUDA<IntegrationStatus_Create,IntegrationStatus_Update,IntegrationStatus_Select>;
}
