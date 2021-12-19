interface msdyn_suggestedactivitydatasource_Base extends WebEntity {
  msdyn_name?: string | null;
  msdyn_suggestedactivitydatasourceid?: string | null;
}
interface msdyn_suggestedactivitydatasource_Relationships {
}
interface msdyn_suggestedactivitydatasource extends msdyn_suggestedactivitydatasource_Base, msdyn_suggestedactivitydatasource_Relationships {
}
interface msdyn_suggestedactivitydatasource_Create extends msdyn_suggestedactivitydatasource {
}
interface msdyn_suggestedactivitydatasource_Update extends msdyn_suggestedactivitydatasource {
}
interface msdyn_suggestedactivitydatasource_Select {
  msdyn_name: WebAttribute<msdyn_suggestedactivitydatasource_Select, { msdyn_name: string | null }, {  }>;
  msdyn_suggestedactivitydatasourceid: WebAttribute<msdyn_suggestedactivitydatasource_Select, { msdyn_suggestedactivitydatasourceid: string | null }, {  }>;
}
interface msdyn_suggestedactivitydatasource_Filter {
  msdyn_name: string;
  msdyn_suggestedactivitydatasourceid: XQW.Guid;
}
interface msdyn_suggestedactivitydatasource_Expand {
}
interface msdyn_suggestedactivitydatasource_FormattedResult {
}
interface msdyn_suggestedactivitydatasource_Result extends msdyn_suggestedactivitydatasource_Base, msdyn_suggestedactivitydatasource_Relationships {
  "@odata.etag": string;
}
interface msdyn_suggestedactivitydatasource_RelatedOne {
}
interface msdyn_suggestedactivitydatasource_RelatedMany {
}
interface WebEntitiesRetrieve {
  msdyn_suggestedactivitydatasources: WebMappingRetrieve<msdyn_suggestedactivitydatasource_Select,msdyn_suggestedactivitydatasource_Expand,msdyn_suggestedactivitydatasource_Filter,msdyn_suggestedactivitydatasource_Fixed,msdyn_suggestedactivitydatasource_Result,msdyn_suggestedactivitydatasource_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_suggestedactivitydatasources: WebMappingRelated<msdyn_suggestedactivitydatasource_RelatedOne,msdyn_suggestedactivitydatasource_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_suggestedactivitydatasources: WebMappingCUDA<msdyn_suggestedactivitydatasource_Create,msdyn_suggestedactivitydatasource_Update,msdyn_suggestedactivitydatasource_Select>;
}
