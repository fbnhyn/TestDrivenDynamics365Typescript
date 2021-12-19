interface MultiSelectAttributeOptionValues_Base extends WebEntity {
  multiselectfulltextidkey?: number | null;
  objectcolumnnumber?: number | null;
  selectedoptionvalues?: string | null;
}
interface MultiSelectAttributeOptionValues_Relationships {
}
interface MultiSelectAttributeOptionValues extends MultiSelectAttributeOptionValues_Base, MultiSelectAttributeOptionValues_Relationships {
}
interface MultiSelectAttributeOptionValues_Create extends MultiSelectAttributeOptionValues {
}
interface MultiSelectAttributeOptionValues_Update extends MultiSelectAttributeOptionValues {
}
interface MultiSelectAttributeOptionValues_Select {
  multiselectfulltextidkey: WebAttribute<MultiSelectAttributeOptionValues_Select, { multiselectfulltextidkey: number | null }, {  }>;
  objectcolumnnumber: WebAttribute<MultiSelectAttributeOptionValues_Select, { objectcolumnnumber: number | null }, {  }>;
  objectid_guid: WebAttribute<MultiSelectAttributeOptionValues_Select, { objectid_guid: string | null }, { objectid_formatted?: string }>;
  selectedoptionvalues: WebAttribute<MultiSelectAttributeOptionValues_Select, { selectedoptionvalues: string | null }, {  }>;
}
interface MultiSelectAttributeOptionValues_Filter {
  multiselectfulltextidkey: number;
  objectcolumnnumber: number;
  objectid_guid: XQW.Guid;
  selectedoptionvalues: string;
}
interface MultiSelectAttributeOptionValues_Expand {
}
interface MultiSelectAttributeOptionValues_FormattedResult {
  objectid_formatted?: string;
}
interface MultiSelectAttributeOptionValues_Result extends MultiSelectAttributeOptionValues_Base, MultiSelectAttributeOptionValues_Relationships {
  "@odata.etag": string;
  objectid_guid: string | null;
}
interface MultiSelectAttributeOptionValues_RelatedOne {
}
interface MultiSelectAttributeOptionValues_RelatedMany {
}
interface WebEntitiesRetrieve {
  multiselectattributeoptionvaluescollection: WebMappingRetrieve<MultiSelectAttributeOptionValues_Select,MultiSelectAttributeOptionValues_Expand,MultiSelectAttributeOptionValues_Filter,MultiSelectAttributeOptionValues_Fixed,MultiSelectAttributeOptionValues_Result,MultiSelectAttributeOptionValues_FormattedResult>;
}
interface WebEntitiesRelated {
  multiselectattributeoptionvaluescollection: WebMappingRelated<MultiSelectAttributeOptionValues_RelatedOne,MultiSelectAttributeOptionValues_RelatedMany>;
}
interface WebEntitiesCUDA {
  multiselectattributeoptionvaluescollection: WebMappingCUDA<MultiSelectAttributeOptionValues_Create,MultiSelectAttributeOptionValues_Update,MultiSelectAttributeOptionValues_Select>;
}
