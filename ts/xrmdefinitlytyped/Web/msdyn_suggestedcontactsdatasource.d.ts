interface msdyn_suggestedcontactsdatasource_Base extends WebEntity {
  msdyn_name?: string | null;
  msdyn_suggestedcontactsdatasourceid?: string | null;
}
interface msdyn_suggestedcontactsdatasource_Relationships {
}
interface msdyn_suggestedcontactsdatasource extends msdyn_suggestedcontactsdatasource_Base, msdyn_suggestedcontactsdatasource_Relationships {
}
interface msdyn_suggestedcontactsdatasource_Create extends msdyn_suggestedcontactsdatasource {
}
interface msdyn_suggestedcontactsdatasource_Update extends msdyn_suggestedcontactsdatasource {
}
interface msdyn_suggestedcontactsdatasource_Select {
  msdyn_name: WebAttribute<msdyn_suggestedcontactsdatasource_Select, { msdyn_name: string | null }, {  }>;
  msdyn_suggestedcontactsdatasourceid: WebAttribute<msdyn_suggestedcontactsdatasource_Select, { msdyn_suggestedcontactsdatasourceid: string | null }, {  }>;
}
interface msdyn_suggestedcontactsdatasource_Filter {
  msdyn_name: string;
  msdyn_suggestedcontactsdatasourceid: XQW.Guid;
}
interface msdyn_suggestedcontactsdatasource_Expand {
}
interface msdyn_suggestedcontactsdatasource_FormattedResult {
}
interface msdyn_suggestedcontactsdatasource_Result extends msdyn_suggestedcontactsdatasource_Base, msdyn_suggestedcontactsdatasource_Relationships {
  "@odata.etag": string;
}
interface msdyn_suggestedcontactsdatasource_RelatedOne {
}
interface msdyn_suggestedcontactsdatasource_RelatedMany {
}
interface WebEntitiesRetrieve {
  msdyn_suggestedcontactsdatasources: WebMappingRetrieve<msdyn_suggestedcontactsdatasource_Select,msdyn_suggestedcontactsdatasource_Expand,msdyn_suggestedcontactsdatasource_Filter,msdyn_suggestedcontactsdatasource_Fixed,msdyn_suggestedcontactsdatasource_Result,msdyn_suggestedcontactsdatasource_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_suggestedcontactsdatasources: WebMappingRelated<msdyn_suggestedcontactsdatasource_RelatedOne,msdyn_suggestedcontactsdatasource_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_suggestedcontactsdatasources: WebMappingCUDA<msdyn_suggestedcontactsdatasource_Create,msdyn_suggestedcontactsdatasource_Update,msdyn_suggestedcontactsdatasource_Select>;
}
