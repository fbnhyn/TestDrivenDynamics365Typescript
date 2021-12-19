interface ACIViewMapper_Base extends WebEntity {
  aciviewmapperid?: string | null;
  createdon?: Date | null;
  modifiedon?: Date | null;
  statecode?: aciviewmapper_statecode | null;
  statuscode?: aciviewmapper_statuscode | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
  viewname?: string | null;
  webapplicationendpoint?: string | null;
}
interface ACIViewMapper_Relationships {
}
interface ACIViewMapper extends ACIViewMapper_Base, ACIViewMapper_Relationships {
}
interface ACIViewMapper_Create extends ACIViewMapper {
}
interface ACIViewMapper_Update extends ACIViewMapper {
}
interface ACIViewMapper_Select {
  aciviewmapperid: WebAttribute<ACIViewMapper_Select, { aciviewmapperid: string | null }, {  }>;
  createdby_guid: WebAttribute<ACIViewMapper_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<ACIViewMapper_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<ACIViewMapper_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  modifiedby_guid: WebAttribute<ACIViewMapper_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<ACIViewMapper_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<ACIViewMapper_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  organizationid_guid: WebAttribute<ACIViewMapper_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  statecode: WebAttribute<ACIViewMapper_Select, { statecode: aciviewmapper_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<ACIViewMapper_Select, { statuscode: aciviewmapper_statuscode | null }, { statuscode_formatted?: string }>;
  utcconversiontimezonecode: WebAttribute<ACIViewMapper_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<ACIViewMapper_Select, { versionnumber: number | null }, {  }>;
  viewname: WebAttribute<ACIViewMapper_Select, { viewname: string | null }, {  }>;
  webapplicationendpoint: WebAttribute<ACIViewMapper_Select, { webapplicationendpoint: string | null }, {  }>;
}
interface ACIViewMapper_Filter {
  aciviewmapperid: XQW.Guid;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  organizationid_guid: XQW.Guid;
  statecode: aciviewmapper_statecode;
  statuscode: aciviewmapper_statuscode;
  utcconversiontimezonecode: number;
  versionnumber: number;
  viewname: string;
  webapplicationendpoint: string;
}
interface ACIViewMapper_Expand {
  createdby: WebExpand<ACIViewMapper_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<ACIViewMapper_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<ACIViewMapper_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<ACIViewMapper_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  organizationid: WebExpand<ACIViewMapper_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
}
interface ACIViewMapper_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  organizationid_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface ACIViewMapper_Result extends ACIViewMapper_Base, ACIViewMapper_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
}
interface ACIViewMapper_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
}
interface ACIViewMapper_RelatedMany {
}
interface WebEntitiesRetrieve {
  aciviewmappers: WebMappingRetrieve<ACIViewMapper_Select,ACIViewMapper_Expand,ACIViewMapper_Filter,ACIViewMapper_Fixed,ACIViewMapper_Result,ACIViewMapper_FormattedResult>;
}
interface WebEntitiesRelated {
  aciviewmappers: WebMappingRelated<ACIViewMapper_RelatedOne,ACIViewMapper_RelatedMany>;
}
interface WebEntitiesCUDA {
  aciviewmappers: WebMappingCUDA<ACIViewMapper_Create,ACIViewMapper_Update,ACIViewMapper_Select>;
}
