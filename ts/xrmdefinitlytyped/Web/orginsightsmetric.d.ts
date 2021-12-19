interface OrgInsightsMetric_Base extends WebEntity {
  createdon?: Date | null;
  internalname?: string | null;
  metrictype?: orginsightsmetric_metrictype | null;
  name?: string | null;
  orginsightsmetricid?: string | null;
}
interface OrgInsightsMetric_Relationships {
  organization_orginsightsmetric?: Organization_Result | null;
}
interface OrgInsightsMetric extends OrgInsightsMetric_Base, OrgInsightsMetric_Relationships {
}
interface OrgInsightsMetric_Create extends OrgInsightsMetric {
}
interface OrgInsightsMetric_Update extends OrgInsightsMetric {
}
interface OrgInsightsMetric_Select {
  createdon: WebAttribute<OrgInsightsMetric_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  internalname: WebAttribute<OrgInsightsMetric_Select, { internalname: string | null }, {  }>;
  metrictype: WebAttribute<OrgInsightsMetric_Select, { metrictype: orginsightsmetric_metrictype | null }, { metrictype_formatted?: string }>;
  name: WebAttribute<OrgInsightsMetric_Select, { name: string | null }, {  }>;
  organizationid_guid: WebAttribute<OrgInsightsMetric_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  orginsightsmetricid: WebAttribute<OrgInsightsMetric_Select, { orginsightsmetricid: string | null }, {  }>;
}
interface OrgInsightsMetric_Filter {
  createdon: Date;
  internalname: string;
  metrictype: orginsightsmetric_metrictype;
  name: string;
  organizationid_guid: XQW.Guid;
  orginsightsmetricid: XQW.Guid;
}
interface OrgInsightsMetric_Expand {
  organization_orginsightsmetric: WebExpand<OrgInsightsMetric_Expand, Organization_Select, Organization_Filter, { organization_orginsightsmetric: Organization_Result }>;
}
interface OrgInsightsMetric_FormattedResult {
  createdon_formatted?: string;
  metrictype_formatted?: string;
  organizationid_formatted?: string;
}
interface OrgInsightsMetric_Result extends OrgInsightsMetric_Base, OrgInsightsMetric_Relationships {
  "@odata.etag": string;
  organizationid_guid: string | null;
}
interface OrgInsightsMetric_RelatedOne {
  organization_orginsightsmetric: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
}
interface OrgInsightsMetric_RelatedMany {
}
interface WebEntitiesRetrieve {
  orginsightsmetrics: WebMappingRetrieve<OrgInsightsMetric_Select,OrgInsightsMetric_Expand,OrgInsightsMetric_Filter,OrgInsightsMetric_Fixed,OrgInsightsMetric_Result,OrgInsightsMetric_FormattedResult>;
}
interface WebEntitiesRelated {
  orginsightsmetrics: WebMappingRelated<OrgInsightsMetric_RelatedOne,OrgInsightsMetric_RelatedMany>;
}
interface WebEntitiesCUDA {
  orginsightsmetrics: WebMappingCUDA<OrgInsightsMetric_Create,OrgInsightsMetric_Update,OrgInsightsMetric_Select>;
}
