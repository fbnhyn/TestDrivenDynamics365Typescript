interface MultiEntitySearch_Base extends WebEntity {
  createdon?: Date | null;
  modifiedon?: Date | null;
  multientitysearchid?: string | null;
  name?: string | null;
  versionnumber?: number | null;
}
interface MultiEntitySearch_Relationships {
  multientitysearch_multientitysearchentities?: MultiEntitySearchEntities_Result[] | null;
}
interface MultiEntitySearch extends MultiEntitySearch_Base, MultiEntitySearch_Relationships {
}
interface MultiEntitySearch_Create extends MultiEntitySearch {
}
interface MultiEntitySearch_Update extends MultiEntitySearch {
}
interface MultiEntitySearch_Select {
  createdby_guid: WebAttribute<MultiEntitySearch_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<MultiEntitySearch_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<MultiEntitySearch_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  modifiedby_guid: WebAttribute<MultiEntitySearch_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<MultiEntitySearch_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<MultiEntitySearch_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  multientitysearchid: WebAttribute<MultiEntitySearch_Select, { multientitysearchid: string | null }, {  }>;
  name: WebAttribute<MultiEntitySearch_Select, { name: string | null }, {  }>;
  versionnumber: WebAttribute<MultiEntitySearch_Select, { versionnumber: number | null }, {  }>;
}
interface MultiEntitySearch_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  multientitysearchid: XQW.Guid;
  name: string;
  versionnumber: number;
}
interface MultiEntitySearch_Expand {
  createdby: WebExpand<MultiEntitySearch_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<MultiEntitySearch_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<MultiEntitySearch_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<MultiEntitySearch_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  multientitysearch_multientitysearchentities: WebExpand<MultiEntitySearch_Expand, MultiEntitySearchEntities_Select, MultiEntitySearchEntities_Filter, { multientitysearch_multientitysearchentities: MultiEntitySearchEntities_Result[] }>;
}
interface MultiEntitySearch_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
}
interface MultiEntitySearch_Result extends MultiEntitySearch_Base, MultiEntitySearch_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
}
interface MultiEntitySearch_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface MultiEntitySearch_RelatedMany {
  multientitysearch_multientitysearchentities: WebMappingRetrieve<MultiEntitySearchEntities_Select,MultiEntitySearchEntities_Expand,MultiEntitySearchEntities_Filter,MultiEntitySearchEntities_Fixed,MultiEntitySearchEntities_Result,MultiEntitySearchEntities_FormattedResult>;
}
interface WebEntitiesRetrieve {
  multientitysearches: WebMappingRetrieve<MultiEntitySearch_Select,MultiEntitySearch_Expand,MultiEntitySearch_Filter,MultiEntitySearch_Fixed,MultiEntitySearch_Result,MultiEntitySearch_FormattedResult>;
}
interface WebEntitiesRelated {
  multientitysearches: WebMappingRelated<MultiEntitySearch_RelatedOne,MultiEntitySearch_RelatedMany>;
}
interface WebEntitiesCUDA {
  multientitysearches: WebMappingCUDA<MultiEntitySearch_Create,MultiEntitySearch_Update,MultiEntitySearch_Select>;
}
