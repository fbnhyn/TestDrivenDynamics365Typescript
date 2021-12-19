interface availabletimesdatasource_Base extends WebEntity {
  availabletimesdatasourceid?: string | null;
  name?: string | null;
}
interface availabletimesdatasource_Relationships {
}
interface availabletimesdatasource extends availabletimesdatasource_Base, availabletimesdatasource_Relationships {
}
interface availabletimesdatasource_Create extends availabletimesdatasource {
}
interface availabletimesdatasource_Update extends availabletimesdatasource {
}
interface availabletimesdatasource_Select {
  availabletimesdatasourceid: WebAttribute<availabletimesdatasource_Select, { availabletimesdatasourceid: string | null }, {  }>;
  name: WebAttribute<availabletimesdatasource_Select, { name: string | null }, {  }>;
}
interface availabletimesdatasource_Filter {
  availabletimesdatasourceid: XQW.Guid;
  name: string;
}
interface availabletimesdatasource_Expand {
}
interface availabletimesdatasource_FormattedResult {
}
interface availabletimesdatasource_Result extends availabletimesdatasource_Base, availabletimesdatasource_Relationships {
  "@odata.etag": string;
}
interface availabletimesdatasource_RelatedOne {
}
interface availabletimesdatasource_RelatedMany {
}
interface WebEntitiesRetrieve {
  availabletimesdatasources: WebMappingRetrieve<availabletimesdatasource_Select,availabletimesdatasource_Expand,availabletimesdatasource_Filter,availabletimesdatasource_Fixed,availabletimesdatasource_Result,availabletimesdatasource_FormattedResult>;
}
interface WebEntitiesRelated {
  availabletimesdatasources: WebMappingRelated<availabletimesdatasource_RelatedOne,availabletimesdatasource_RelatedMany>;
}
interface WebEntitiesCUDA {
  availabletimesdatasources: WebMappingCUDA<availabletimesdatasource_Create,availabletimesdatasource_Update,availabletimesdatasource_Select>;
}
