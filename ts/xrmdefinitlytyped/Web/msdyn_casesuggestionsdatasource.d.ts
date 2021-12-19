interface msdyn_casesuggestionsdatasource_Base extends WebEntity {
  msdyn_casesuggestionsdatasourceid?: string | null;
  msdyn_name?: string | null;
}
interface msdyn_casesuggestionsdatasource_Relationships {
}
interface msdyn_casesuggestionsdatasource extends msdyn_casesuggestionsdatasource_Base, msdyn_casesuggestionsdatasource_Relationships {
}
interface msdyn_casesuggestionsdatasource_Create extends msdyn_casesuggestionsdatasource {
}
interface msdyn_casesuggestionsdatasource_Update extends msdyn_casesuggestionsdatasource {
}
interface msdyn_casesuggestionsdatasource_Select {
  msdyn_casesuggestionsdatasourceid: WebAttribute<msdyn_casesuggestionsdatasource_Select, { msdyn_casesuggestionsdatasourceid: string | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_casesuggestionsdatasource_Select, { msdyn_name: string | null }, {  }>;
}
interface msdyn_casesuggestionsdatasource_Filter {
  msdyn_casesuggestionsdatasourceid: XQW.Guid;
  msdyn_name: string;
}
interface msdyn_casesuggestionsdatasource_Expand {
}
interface msdyn_casesuggestionsdatasource_FormattedResult {
}
interface msdyn_casesuggestionsdatasource_Result extends msdyn_casesuggestionsdatasource_Base, msdyn_casesuggestionsdatasource_Relationships {
  "@odata.etag": string;
}
interface msdyn_casesuggestionsdatasource_RelatedOne {
}
interface msdyn_casesuggestionsdatasource_RelatedMany {
}
interface WebEntitiesRetrieve {
  msdyn_casesuggestionsdatasources: WebMappingRetrieve<msdyn_casesuggestionsdatasource_Select,msdyn_casesuggestionsdatasource_Expand,msdyn_casesuggestionsdatasource_Filter,msdyn_casesuggestionsdatasource_Fixed,msdyn_casesuggestionsdatasource_Result,msdyn_casesuggestionsdatasource_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_casesuggestionsdatasources: WebMappingRelated<msdyn_casesuggestionsdatasource_RelatedOne,msdyn_casesuggestionsdatasource_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_casesuggestionsdatasources: WebMappingCUDA<msdyn_casesuggestionsdatasource_Create,msdyn_casesuggestionsdatasource_Update,msdyn_casesuggestionsdatasource_Select>;
}
