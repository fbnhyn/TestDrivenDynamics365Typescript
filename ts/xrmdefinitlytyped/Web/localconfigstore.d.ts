interface LocalConfigStore_Base extends WebEntity {
  assemblyname?: string | null;
  id?: string | null;
  isvalueset?: boolean | null;
  keyname?: string | null;
  publictoken?: string | null;
  value?: string | null;
}
interface LocalConfigStore_Relationships {
}
interface LocalConfigStore extends LocalConfigStore_Base, LocalConfigStore_Relationships {
}
interface LocalConfigStore_Create extends LocalConfigStore {
}
interface LocalConfigStore_Update extends LocalConfigStore {
}
interface LocalConfigStore_Select {
  assemblyname: WebAttribute<LocalConfigStore_Select, { assemblyname: string | null }, {  }>;
  id: WebAttribute<LocalConfigStore_Select, { id: string | null }, {  }>;
  isvalueset: WebAttribute<LocalConfigStore_Select, { isvalueset: boolean | null }, {  }>;
  keyname: WebAttribute<LocalConfigStore_Select, { keyname: string | null }, {  }>;
  publictoken: WebAttribute<LocalConfigStore_Select, { publictoken: string | null }, {  }>;
  value: WebAttribute<LocalConfigStore_Select, { value: string | null }, {  }>;
}
interface LocalConfigStore_Filter {
  assemblyname: string;
  id: XQW.Guid;
  isvalueset: boolean;
  keyname: string;
  publictoken: string;
  value: string;
}
interface LocalConfigStore_Expand {
}
interface LocalConfigStore_FormattedResult {
}
interface LocalConfigStore_Result extends LocalConfigStore_Base, LocalConfigStore_Relationships {
  "@odata.etag": string;
}
interface LocalConfigStore_RelatedOne {
}
interface LocalConfigStore_RelatedMany {
}
interface WebEntitiesRetrieve {
  localconfigstores: WebMappingRetrieve<LocalConfigStore_Select,LocalConfigStore_Expand,LocalConfigStore_Filter,LocalConfigStore_Fixed,LocalConfigStore_Result,LocalConfigStore_FormattedResult>;
}
interface WebEntitiesRelated {
  localconfigstores: WebMappingRelated<LocalConfigStore_RelatedOne,LocalConfigStore_RelatedMany>;
}
interface WebEntitiesCUDA {
  localconfigstores: WebMappingCUDA<LocalConfigStore_Create,LocalConfigStore_Update,LocalConfigStore_Select>;
}
