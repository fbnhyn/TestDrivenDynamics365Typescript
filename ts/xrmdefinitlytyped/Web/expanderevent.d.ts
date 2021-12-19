interface ExpanderEvent_Base extends WebEntity {
  contexturi?: string | null;
  correlationid?: string | null;
  createdon?: Date | null;
  expandereventid?: string | null;
  modifiedon?: Date | null;
  name?: string | null;
  registrations?: string | null;
  versionnumber?: number | null;
}
interface ExpanderEvent_Relationships {
}
interface ExpanderEvent extends ExpanderEvent_Base, ExpanderEvent_Relationships {
}
interface ExpanderEvent_Create extends ExpanderEvent {
}
interface ExpanderEvent_Update extends ExpanderEvent {
}
interface ExpanderEvent_Select {
  contexturi: WebAttribute<ExpanderEvent_Select, { contexturi: string | null }, {  }>;
  correlationid: WebAttribute<ExpanderEvent_Select, { correlationid: string | null }, {  }>;
  createdby_guid: WebAttribute<ExpanderEvent_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<ExpanderEvent_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<ExpanderEvent_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  expandereventid: WebAttribute<ExpanderEvent_Select, { expandereventid: string | null }, {  }>;
  modifiedby_guid: WebAttribute<ExpanderEvent_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<ExpanderEvent_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<ExpanderEvent_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  name: WebAttribute<ExpanderEvent_Select, { name: string | null }, {  }>;
  organizationid_guid: WebAttribute<ExpanderEvent_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  registrations: WebAttribute<ExpanderEvent_Select, { registrations: string | null }, {  }>;
  versionnumber: WebAttribute<ExpanderEvent_Select, { versionnumber: number | null }, {  }>;
}
interface ExpanderEvent_Filter {
  contexturi: string;
  correlationid: XQW.Guid;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  expandereventid: XQW.Guid;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  name: string;
  organizationid_guid: XQW.Guid;
  registrations: string;
  versionnumber: number;
}
interface ExpanderEvent_Expand {
  createdby: WebExpand<ExpanderEvent_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<ExpanderEvent_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<ExpanderEvent_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<ExpanderEvent_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  organizationid: WebExpand<ExpanderEvent_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
}
interface ExpanderEvent_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  organizationid_formatted?: string;
}
interface ExpanderEvent_Result extends ExpanderEvent_Base, ExpanderEvent_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
}
interface ExpanderEvent_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
}
interface ExpanderEvent_RelatedMany {
}
interface WebEntitiesRetrieve {
  expanderevents: WebMappingRetrieve<ExpanderEvent_Select,ExpanderEvent_Expand,ExpanderEvent_Filter,ExpanderEvent_Fixed,ExpanderEvent_Result,ExpanderEvent_FormattedResult>;
}
interface WebEntitiesRelated {
  expanderevents: WebMappingRelated<ExpanderEvent_RelatedOne,ExpanderEvent_RelatedMany>;
}
interface WebEntitiesCUDA {
  expanderevents: WebMappingCUDA<ExpanderEvent_Create,ExpanderEvent_Update,ExpanderEvent_Select>;
}
