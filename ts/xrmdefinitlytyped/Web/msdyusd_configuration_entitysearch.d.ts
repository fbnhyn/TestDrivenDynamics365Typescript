interface msdyusd_configuration_entitysearch_Base extends WebEntity {
  msdyusd_configuration_entitysearchid?: string | null;
  msdyusd_configurationid?: string | null;
  msdyusd_entitysearchid?: string | null;
  versionnumber?: number | null;
}
interface msdyusd_configuration_entitysearch_Relationships {
  msdyusd_configuration_entitysearch?: msdyusd_entitysearch_Result[] | null;
}
interface msdyusd_configuration_entitysearch extends msdyusd_configuration_entitysearch_Base, msdyusd_configuration_entitysearch_Relationships {
}
interface msdyusd_configuration_entitysearch_Create extends msdyusd_configuration_entitysearch {
}
interface msdyusd_configuration_entitysearch_Update extends msdyusd_configuration_entitysearch {
}
interface msdyusd_configuration_entitysearch_Select {
  msdyusd_configuration_entitysearchid: WebAttribute<msdyusd_configuration_entitysearch_Select, { msdyusd_configuration_entitysearchid: string | null }, {  }>;
  msdyusd_configurationid: WebAttribute<msdyusd_configuration_entitysearch_Select, { msdyusd_configurationid: string | null }, {  }>;
  msdyusd_entitysearchid: WebAttribute<msdyusd_configuration_entitysearch_Select, { msdyusd_entitysearchid: string | null }, {  }>;
  versionnumber: WebAttribute<msdyusd_configuration_entitysearch_Select, { versionnumber: number | null }, {  }>;
}
interface msdyusd_configuration_entitysearch_Filter {
  msdyusd_configuration_entitysearchid: XQW.Guid;
  msdyusd_configurationid: XQW.Guid;
  msdyusd_entitysearchid: XQW.Guid;
  versionnumber: number;
}
interface msdyusd_configuration_entitysearch_Expand {
  msdyusd_configuration_entitysearch: WebExpand<msdyusd_configuration_entitysearch_Expand, msdyusd_entitysearch_Select, msdyusd_entitysearch_Filter, { msdyusd_configuration_entitysearch: msdyusd_entitysearch_Result[] }>;
}
interface msdyusd_configuration_entitysearch_FormattedResult {
}
interface msdyusd_configuration_entitysearch_Result extends msdyusd_configuration_entitysearch_Base, msdyusd_configuration_entitysearch_Relationships {
  "@odata.etag": string;
}
interface msdyusd_configuration_entitysearch_RelatedOne {
}
interface msdyusd_configuration_entitysearch_RelatedMany {
  msdyusd_configuration_entitysearch: WebMappingRetrieve<msdyusd_entitysearch_Select,msdyusd_entitysearch_Expand,msdyusd_entitysearch_Filter,msdyusd_entitysearch_Fixed,msdyusd_entitysearch_Result,msdyusd_entitysearch_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyusd_configuration_entitysearchset: WebMappingRetrieve<msdyusd_configuration_entitysearch_Select,msdyusd_configuration_entitysearch_Expand,msdyusd_configuration_entitysearch_Filter,msdyusd_configuration_entitysearch_Fixed,msdyusd_configuration_entitysearch_Result,msdyusd_configuration_entitysearch_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyusd_configuration_entitysearchset: WebMappingRelated<msdyusd_configuration_entitysearch_RelatedOne,msdyusd_configuration_entitysearch_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyusd_configuration_entitysearchset: WebMappingCUDA<msdyusd_configuration_entitysearch_Create,msdyusd_configuration_entitysearch_Update,msdyusd_configuration_entitysearch_Select>;
}
