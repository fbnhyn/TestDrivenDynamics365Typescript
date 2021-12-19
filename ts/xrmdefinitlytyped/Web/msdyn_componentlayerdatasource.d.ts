interface msdyn_componentlayerdatasource_Base extends WebEntity {
  msdyn_componentlayerdatasourceid?: string | null;
  msdyn_name?: string | null;
}
interface msdyn_componentlayerdatasource_Relationships {
}
interface msdyn_componentlayerdatasource extends msdyn_componentlayerdatasource_Base, msdyn_componentlayerdatasource_Relationships {
}
interface msdyn_componentlayerdatasource_Create extends msdyn_componentlayerdatasource {
}
interface msdyn_componentlayerdatasource_Update extends msdyn_componentlayerdatasource {
}
interface msdyn_componentlayerdatasource_Select {
  msdyn_componentlayerdatasourceid: WebAttribute<msdyn_componentlayerdatasource_Select, { msdyn_componentlayerdatasourceid: string | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_componentlayerdatasource_Select, { msdyn_name: string | null }, {  }>;
}
interface msdyn_componentlayerdatasource_Filter {
  msdyn_componentlayerdatasourceid: XQW.Guid;
  msdyn_name: string;
}
interface msdyn_componentlayerdatasource_Expand {
}
interface msdyn_componentlayerdatasource_FormattedResult {
}
interface msdyn_componentlayerdatasource_Result extends msdyn_componentlayerdatasource_Base, msdyn_componentlayerdatasource_Relationships {
  "@odata.etag": string;
}
interface msdyn_componentlayerdatasource_RelatedOne {
}
interface msdyn_componentlayerdatasource_RelatedMany {
}
interface WebEntitiesRetrieve {
  msdyn_componentlayerdatasources: WebMappingRetrieve<msdyn_componentlayerdatasource_Select,msdyn_componentlayerdatasource_Expand,msdyn_componentlayerdatasource_Filter,msdyn_componentlayerdatasource_Fixed,msdyn_componentlayerdatasource_Result,msdyn_componentlayerdatasource_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_componentlayerdatasources: WebMappingRelated<msdyn_componentlayerdatasource_RelatedOne,msdyn_componentlayerdatasource_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_componentlayerdatasources: WebMappingCUDA<msdyn_componentlayerdatasource_Create,msdyn_componentlayerdatasource_Update,msdyn_componentlayerdatasource_Select>;
}
