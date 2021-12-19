interface resourcegroupdatasource_Base extends WebEntity {
  name?: string | null;
  resourcegroupdatasourceid?: string | null;
}
interface resourcegroupdatasource_Relationships {
}
interface resourcegroupdatasource extends resourcegroupdatasource_Base, resourcegroupdatasource_Relationships {
}
interface resourcegroupdatasource_Create extends resourcegroupdatasource {
}
interface resourcegroupdatasource_Update extends resourcegroupdatasource {
}
interface resourcegroupdatasource_Select {
  name: WebAttribute<resourcegroupdatasource_Select, { name: string | null }, {  }>;
  resourcegroupdatasourceid: WebAttribute<resourcegroupdatasource_Select, { resourcegroupdatasourceid: string | null }, {  }>;
}
interface resourcegroupdatasource_Filter {
  name: string;
  resourcegroupdatasourceid: XQW.Guid;
}
interface resourcegroupdatasource_Expand {
}
interface resourcegroupdatasource_FormattedResult {
}
interface resourcegroupdatasource_Result extends resourcegroupdatasource_Base, resourcegroupdatasource_Relationships {
  "@odata.etag": string;
}
interface resourcegroupdatasource_RelatedOne {
}
interface resourcegroupdatasource_RelatedMany {
}
interface WebEntitiesRetrieve {
  resourcegroupdatasources: WebMappingRetrieve<resourcegroupdatasource_Select,resourcegroupdatasource_Expand,resourcegroupdatasource_Filter,resourcegroupdatasource_Fixed,resourcegroupdatasource_Result,resourcegroupdatasource_FormattedResult>;
}
interface WebEntitiesRelated {
  resourcegroupdatasources: WebMappingRelated<resourcegroupdatasource_RelatedOne,resourcegroupdatasource_RelatedMany>;
}
interface WebEntitiesCUDA {
  resourcegroupdatasources: WebMappingCUDA<resourcegroupdatasource_Create,resourcegroupdatasource_Update,resourcegroupdatasource_Select>;
}
