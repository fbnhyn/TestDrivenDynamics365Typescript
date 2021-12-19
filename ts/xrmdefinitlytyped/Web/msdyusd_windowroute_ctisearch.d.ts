interface msdyusd_windowroute_ctisearch_Base extends WebEntity {
  msdyusd_searchid?: string | null;
  msdyusd_windowroute_ctisearchid?: string | null;
  msdyusd_windowrouteid?: string | null;
  versionnumber?: number | null;
}
interface msdyusd_windowroute_ctisearch_Relationships {
  msdyusd_windowroute_ctisearch?: msdyusd_search_Result[] | null;
}
interface msdyusd_windowroute_ctisearch extends msdyusd_windowroute_ctisearch_Base, msdyusd_windowroute_ctisearch_Relationships {
}
interface msdyusd_windowroute_ctisearch_Create extends msdyusd_windowroute_ctisearch {
}
interface msdyusd_windowroute_ctisearch_Update extends msdyusd_windowroute_ctisearch {
}
interface msdyusd_windowroute_ctisearch_Select {
  msdyusd_searchid: WebAttribute<msdyusd_windowroute_ctisearch_Select, { msdyusd_searchid: string | null }, {  }>;
  msdyusd_windowroute_ctisearchid: WebAttribute<msdyusd_windowroute_ctisearch_Select, { msdyusd_windowroute_ctisearchid: string | null }, {  }>;
  msdyusd_windowrouteid: WebAttribute<msdyusd_windowroute_ctisearch_Select, { msdyusd_windowrouteid: string | null }, {  }>;
  versionnumber: WebAttribute<msdyusd_windowroute_ctisearch_Select, { versionnumber: number | null }, {  }>;
}
interface msdyusd_windowroute_ctisearch_Filter {
  msdyusd_searchid: XQW.Guid;
  msdyusd_windowroute_ctisearchid: XQW.Guid;
  msdyusd_windowrouteid: XQW.Guid;
  versionnumber: number;
}
interface msdyusd_windowroute_ctisearch_Expand {
  msdyusd_windowroute_ctisearch: WebExpand<msdyusd_windowroute_ctisearch_Expand, msdyusd_search_Select, msdyusd_search_Filter, { msdyusd_windowroute_ctisearch: msdyusd_search_Result[] }>;
}
interface msdyusd_windowroute_ctisearch_FormattedResult {
}
interface msdyusd_windowroute_ctisearch_Result extends msdyusd_windowroute_ctisearch_Base, msdyusd_windowroute_ctisearch_Relationships {
  "@odata.etag": string;
}
interface msdyusd_windowroute_ctisearch_RelatedOne {
}
interface msdyusd_windowroute_ctisearch_RelatedMany {
  msdyusd_windowroute_ctisearch: WebMappingRetrieve<msdyusd_search_Select,msdyusd_search_Expand,msdyusd_search_Filter,msdyusd_search_Fixed,msdyusd_search_Result,msdyusd_search_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyusd_windowroute_ctisearchset: WebMappingRetrieve<msdyusd_windowroute_ctisearch_Select,msdyusd_windowroute_ctisearch_Expand,msdyusd_windowroute_ctisearch_Filter,msdyusd_windowroute_ctisearch_Fixed,msdyusd_windowroute_ctisearch_Result,msdyusd_windowroute_ctisearch_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyusd_windowroute_ctisearchset: WebMappingRelated<msdyusd_windowroute_ctisearch_RelatedOne,msdyusd_windowroute_ctisearch_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyusd_windowroute_ctisearchset: WebMappingCUDA<msdyusd_windowroute_ctisearch_Create,msdyusd_windowroute_ctisearch_Update,msdyusd_windowroute_ctisearch_Select>;
}
