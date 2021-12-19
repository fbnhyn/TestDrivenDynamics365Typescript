interface OrgInsightsNotification_Base extends WebEntity {
  createdon?: Date | null;
  internalname?: string | null;
  jsondata?: string | null;
  name?: string | null;
  orginsightsnotificationid?: string | null;
}
interface OrgInsightsNotification_Relationships {
  organization_orginsightsnotification?: Organization_Result | null;
}
interface OrgInsightsNotification extends OrgInsightsNotification_Base, OrgInsightsNotification_Relationships {
}
interface OrgInsightsNotification_Create extends OrgInsightsNotification {
}
interface OrgInsightsNotification_Update extends OrgInsightsNotification {
}
interface OrgInsightsNotification_Select {
  createdon: WebAttribute<OrgInsightsNotification_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  internalname: WebAttribute<OrgInsightsNotification_Select, { internalname: string | null }, {  }>;
  jsondata: WebAttribute<OrgInsightsNotification_Select, { jsondata: string | null }, {  }>;
  name: WebAttribute<OrgInsightsNotification_Select, { name: string | null }, {  }>;
  organizationid_guid: WebAttribute<OrgInsightsNotification_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  orginsightsnotificationid: WebAttribute<OrgInsightsNotification_Select, { orginsightsnotificationid: string | null }, {  }>;
}
interface OrgInsightsNotification_Filter {
  createdon: Date;
  internalname: string;
  jsondata: string;
  name: string;
  organizationid_guid: XQW.Guid;
  orginsightsnotificationid: XQW.Guid;
}
interface OrgInsightsNotification_Expand {
  organization_orginsightsnotification: WebExpand<OrgInsightsNotification_Expand, Organization_Select, Organization_Filter, { organization_orginsightsnotification: Organization_Result }>;
}
interface OrgInsightsNotification_FormattedResult {
  createdon_formatted?: string;
  organizationid_formatted?: string;
}
interface OrgInsightsNotification_Result extends OrgInsightsNotification_Base, OrgInsightsNotification_Relationships {
  "@odata.etag": string;
  organizationid_guid: string | null;
}
interface OrgInsightsNotification_RelatedOne {
  organization_orginsightsnotification: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
}
interface OrgInsightsNotification_RelatedMany {
}
interface WebEntitiesRetrieve {
  orginsightsnotifications: WebMappingRetrieve<OrgInsightsNotification_Select,OrgInsightsNotification_Expand,OrgInsightsNotification_Filter,OrgInsightsNotification_Fixed,OrgInsightsNotification_Result,OrgInsightsNotification_FormattedResult>;
}
interface WebEntitiesRelated {
  orginsightsnotifications: WebMappingRelated<OrgInsightsNotification_RelatedOne,OrgInsightsNotification_RelatedMany>;
}
interface WebEntitiesCUDA {
  orginsightsnotifications: WebMappingCUDA<OrgInsightsNotification_Create,OrgInsightsNotification_Update,OrgInsightsNotification_Select>;
}
