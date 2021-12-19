interface FilterTemplate_Base extends WebEntity {
  description?: string | null;
  fetchxml?: string | null;
  filtertemplateid?: string | null;
  name?: string | null;
  querytype?: number | null;
  returnedtypecode?: string | null;
}
interface FilterTemplate_Relationships {
  userentityinstancedata_filtertemplate?: UserEntityInstanceData_Result[] | null;
}
interface FilterTemplate extends FilterTemplate_Base, FilterTemplate_Relationships {
}
interface FilterTemplate_Create extends FilterTemplate {
}
interface FilterTemplate_Update extends FilterTemplate {
}
interface FilterTemplate_Select {
  description: WebAttribute<FilterTemplate_Select, { description: string | null }, {  }>;
  fetchxml: WebAttribute<FilterTemplate_Select, { fetchxml: string | null }, {  }>;
  filtertemplateid: WebAttribute<FilterTemplate_Select, { filtertemplateid: string | null }, {  }>;
  name: WebAttribute<FilterTemplate_Select, { name: string | null }, {  }>;
  querytype: WebAttribute<FilterTemplate_Select, { querytype: number | null }, {  }>;
  returnedtypecode: WebAttribute<FilterTemplate_Select, { returnedtypecode: string | null }, {  }>;
}
interface FilterTemplate_Filter {
  description: string;
  fetchxml: string;
  filtertemplateid: XQW.Guid;
  name: string;
  querytype: number;
  returnedtypecode: string;
}
interface FilterTemplate_Expand {
  userentityinstancedata_filtertemplate: WebExpand<FilterTemplate_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { userentityinstancedata_filtertemplate: UserEntityInstanceData_Result[] }>;
}
interface FilterTemplate_FormattedResult {
}
interface FilterTemplate_Result extends FilterTemplate_Base, FilterTemplate_Relationships {
  "@odata.etag": string;
}
interface FilterTemplate_RelatedOne {
}
interface FilterTemplate_RelatedMany {
  userentityinstancedata_filtertemplate: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  filtertemplates: WebMappingRetrieve<FilterTemplate_Select,FilterTemplate_Expand,FilterTemplate_Filter,FilterTemplate_Fixed,FilterTemplate_Result,FilterTemplate_FormattedResult>;
}
interface WebEntitiesRelated {
  filtertemplates: WebMappingRelated<FilterTemplate_RelatedOne,FilterTemplate_RelatedMany>;
}
interface WebEntitiesCUDA {
  filtertemplates: WebMappingCUDA<FilterTemplate_Create,FilterTemplate_Update,FilterTemplate_Select>;
}
