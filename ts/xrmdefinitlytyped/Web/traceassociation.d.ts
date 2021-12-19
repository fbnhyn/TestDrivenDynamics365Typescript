interface TraceAssociation_Base extends WebEntity {
  traceassociationid?: string | null;
}
interface TraceAssociation_Relationships {
}
interface TraceAssociation extends TraceAssociation_Base, TraceAssociation_Relationships {
}
interface TraceAssociation_Create extends TraceAssociation {
  tracelogid_bind$tracelogs?: string | null;
}
interface TraceAssociation_Update extends TraceAssociation {
}
interface TraceAssociation_Select {
  organizationid_guid: WebAttribute<TraceAssociation_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  regardingobjectid_guid: WebAttribute<TraceAssociation_Select, { regardingobjectid_guid: string | null }, { regardingobjectid_formatted?: string }>;
  traceassociationid: WebAttribute<TraceAssociation_Select, { traceassociationid: string | null }, {  }>;
  tracelogid_guid: WebAttribute<TraceAssociation_Select, { tracelogid_guid: string | null }, { tracelogid_formatted?: string }>;
}
interface TraceAssociation_Filter {
  organizationid_guid: XQW.Guid;
  regardingobjectid_guid: XQW.Guid;
  traceassociationid: XQW.Guid;
  tracelogid_guid: XQW.Guid;
}
interface TraceAssociation_Expand {
  organizationid: WebExpand<TraceAssociation_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
  tracelogid: WebExpand<TraceAssociation_Expand, TraceLog_Select, TraceLog_Filter, { tracelogid: TraceLog_Result }>;
}
interface TraceAssociation_FormattedResult {
  organizationid_formatted?: string;
  regardingobjectid_formatted?: string;
  tracelogid_formatted?: string;
}
interface TraceAssociation_Result extends TraceAssociation_Base, TraceAssociation_Relationships {
  "@odata.etag": string;
  organizationid_guid: string | null;
  regardingobjectid_guid: string | null;
  tracelogid_guid: string | null;
}
interface TraceAssociation_RelatedOne {
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
  tracelogid: WebMappingRetrieve<TraceLog_Select,TraceLog_Expand,TraceLog_Filter,TraceLog_Fixed,TraceLog_Result,TraceLog_FormattedResult>;
}
interface TraceAssociation_RelatedMany {
}
interface WebEntitiesRetrieve {
  traceassociations: WebMappingRetrieve<TraceAssociation_Select,TraceAssociation_Expand,TraceAssociation_Filter,TraceAssociation_Fixed,TraceAssociation_Result,TraceAssociation_FormattedResult>;
}
interface WebEntitiesRelated {
  traceassociations: WebMappingRelated<TraceAssociation_RelatedOne,TraceAssociation_RelatedMany>;
}
interface WebEntitiesCUDA {
  traceassociations: WebMappingCUDA<TraceAssociation_Create,TraceAssociation_Update,TraceAssociation_Select>;
}
