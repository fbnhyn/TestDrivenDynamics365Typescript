interface msdyn_wqdatasource_Base extends WebEntity {
  msdyn_name?: string | null;
  msdyn_wqdatasourceid?: string | null;
}
interface msdyn_wqdatasource_Relationships {
}
interface msdyn_wqdatasource extends msdyn_wqdatasource_Base, msdyn_wqdatasource_Relationships {
}
interface msdyn_wqdatasource_Create extends msdyn_wqdatasource {
}
interface msdyn_wqdatasource_Update extends msdyn_wqdatasource {
}
interface msdyn_wqdatasource_Select {
  msdyn_name: WebAttribute<msdyn_wqdatasource_Select, { msdyn_name: string | null }, {  }>;
  msdyn_wqdatasourceid: WebAttribute<msdyn_wqdatasource_Select, { msdyn_wqdatasourceid: string | null }, {  }>;
}
interface msdyn_wqdatasource_Filter {
  msdyn_name: string;
  msdyn_wqdatasourceid: XQW.Guid;
}
interface msdyn_wqdatasource_Expand {
}
interface msdyn_wqdatasource_FormattedResult {
}
interface msdyn_wqdatasource_Result extends msdyn_wqdatasource_Base, msdyn_wqdatasource_Relationships {
  "@odata.etag": string;
}
interface msdyn_wqdatasource_RelatedOne {
}
interface msdyn_wqdatasource_RelatedMany {
}
interface WebEntitiesRetrieve {
  msdyn_wqdatasources: WebMappingRetrieve<msdyn_wqdatasource_Select,msdyn_wqdatasource_Expand,msdyn_wqdatasource_Filter,msdyn_wqdatasource_Fixed,msdyn_wqdatasource_Result,msdyn_wqdatasource_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_wqdatasources: WebMappingRelated<msdyn_wqdatasource_RelatedOne,msdyn_wqdatasource_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_wqdatasources: WebMappingCUDA<msdyn_wqdatasource_Create,msdyn_wqdatasource_Update,msdyn_wqdatasource_Select>;
}
