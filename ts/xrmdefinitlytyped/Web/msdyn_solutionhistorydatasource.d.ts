interface msdyn_solutionhistorydatasource_Base extends WebEntity {
  msdyn_name?: string | null;
  msdyn_solutionhistorydatasourceid?: string | null;
}
interface msdyn_solutionhistorydatasource_Relationships {
}
interface msdyn_solutionhistorydatasource extends msdyn_solutionhistorydatasource_Base, msdyn_solutionhistorydatasource_Relationships {
}
interface msdyn_solutionhistorydatasource_Create extends msdyn_solutionhistorydatasource {
}
interface msdyn_solutionhistorydatasource_Update extends msdyn_solutionhistorydatasource {
}
interface msdyn_solutionhistorydatasource_Select {
  msdyn_name: WebAttribute<msdyn_solutionhistorydatasource_Select, { msdyn_name: string | null }, {  }>;
  msdyn_solutionhistorydatasourceid: WebAttribute<msdyn_solutionhistorydatasource_Select, { msdyn_solutionhistorydatasourceid: string | null }, {  }>;
}
interface msdyn_solutionhistorydatasource_Filter {
  msdyn_name: string;
  msdyn_solutionhistorydatasourceid: XQW.Guid;
}
interface msdyn_solutionhistorydatasource_Expand {
}
interface msdyn_solutionhistorydatasource_FormattedResult {
}
interface msdyn_solutionhistorydatasource_Result extends msdyn_solutionhistorydatasource_Base, msdyn_solutionhistorydatasource_Relationships {
  "@odata.etag": string;
}
interface msdyn_solutionhistorydatasource_RelatedOne {
}
interface msdyn_solutionhistorydatasource_RelatedMany {
}
interface WebEntitiesRetrieve {
  msdyn_solutionhistorydatasources: WebMappingRetrieve<msdyn_solutionhistorydatasource_Select,msdyn_solutionhistorydatasource_Expand,msdyn_solutionhistorydatasource_Filter,msdyn_solutionhistorydatasource_Fixed,msdyn_solutionhistorydatasource_Result,msdyn_solutionhistorydatasource_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_solutionhistorydatasources: WebMappingRelated<msdyn_solutionhistorydatasource_RelatedOne,msdyn_solutionhistorydatasource_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_solutionhistorydatasources: WebMappingCUDA<msdyn_solutionhistorydatasource_Create,msdyn_solutionhistorydatasource_Update,msdyn_solutionhistorydatasource_Select>;
}
