interface MultiEntitySearchEntities_Base extends WebEntity {
  entityname?: string | null;
  entityorder?: number | null;
  multientitysearchentityid?: string | null;
  versionnumber?: number | null;
}
interface MultiEntitySearchEntities_Relationships {
}
interface MultiEntitySearchEntities extends MultiEntitySearchEntities_Base, MultiEntitySearchEntities_Relationships {
}
interface MultiEntitySearchEntities_Create extends MultiEntitySearchEntities {
}
interface MultiEntitySearchEntities_Update extends MultiEntitySearchEntities {
}
interface MultiEntitySearchEntities_Select {
  entityname: WebAttribute<MultiEntitySearchEntities_Select, { entityname: string | null }, {  }>;
  entityorder: WebAttribute<MultiEntitySearchEntities_Select, { entityorder: number | null }, {  }>;
  multientitysearchentityid: WebAttribute<MultiEntitySearchEntities_Select, { multientitysearchentityid: string | null }, {  }>;
  multientitysearchid_guid: WebAttribute<MultiEntitySearchEntities_Select, { multientitysearchid_guid: string | null }, { multientitysearchid_formatted?: string }>;
  versionnumber: WebAttribute<MultiEntitySearchEntities_Select, { versionnumber: number | null }, {  }>;
}
interface MultiEntitySearchEntities_Filter {
  entityname: string;
  entityorder: number;
  multientitysearchentityid: XQW.Guid;
  multientitysearchid_guid: XQW.Guid;
  versionnumber: number;
}
interface MultiEntitySearchEntities_Expand {
  multientitysearchid: WebExpand<MultiEntitySearchEntities_Expand, MultiEntitySearch_Select, MultiEntitySearch_Filter, { multientitysearchid: MultiEntitySearch_Result }>;
}
interface MultiEntitySearchEntities_FormattedResult {
  multientitysearchid_formatted?: string;
}
interface MultiEntitySearchEntities_Result extends MultiEntitySearchEntities_Base, MultiEntitySearchEntities_Relationships {
  "@odata.etag": string;
  multientitysearchid_guid: string | null;
}
interface MultiEntitySearchEntities_RelatedOne {
  multientitysearchid: WebMappingRetrieve<MultiEntitySearch_Select,MultiEntitySearch_Expand,MultiEntitySearch_Filter,MultiEntitySearch_Fixed,MultiEntitySearch_Result,MultiEntitySearch_FormattedResult>;
}
interface MultiEntitySearchEntities_RelatedMany {
}
interface WebEntitiesRetrieve {
  multientitysearchentitiescollection: WebMappingRetrieve<MultiEntitySearchEntities_Select,MultiEntitySearchEntities_Expand,MultiEntitySearchEntities_Filter,MultiEntitySearchEntities_Fixed,MultiEntitySearchEntities_Result,MultiEntitySearchEntities_FormattedResult>;
}
interface WebEntitiesRelated {
  multientitysearchentitiescollection: WebMappingRelated<MultiEntitySearchEntities_RelatedOne,MultiEntitySearchEntities_RelatedMany>;
}
interface WebEntitiesCUDA {
  multientitysearchentitiescollection: WebMappingCUDA<MultiEntitySearchEntities_Create,MultiEntitySearchEntities_Update,MultiEntitySearchEntities_Select>;
}
