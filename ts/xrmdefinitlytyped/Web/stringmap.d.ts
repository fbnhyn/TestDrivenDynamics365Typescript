interface StringMap_Base extends WebEntity {
  attributename?: string | null;
  attributevalue?: number | null;
  displayorder?: number | null;
  langid?: number | null;
  objecttypecode?: string | null;
  organizationid?: string | null;
  stringmapid?: string | null;
  value?: string | null;
  versionnumber?: number | null;
}
interface StringMap_Relationships {
  organizationid_organization?: Organization_Result | null;
  userentityinstancedata_stringmap?: UserEntityInstanceData_Result[] | null;
}
interface StringMap extends StringMap_Base, StringMap_Relationships {
}
interface StringMap_Create extends StringMap {
}
interface StringMap_Update extends StringMap {
}
interface StringMap_Select {
  attributename: WebAttribute<StringMap_Select, { attributename: string | null }, {  }>;
  attributevalue: WebAttribute<StringMap_Select, { attributevalue: number | null }, {  }>;
  displayorder: WebAttribute<StringMap_Select, { displayorder: number | null }, {  }>;
  langid: WebAttribute<StringMap_Select, { langid: number | null }, {  }>;
  objecttypecode: WebAttribute<StringMap_Select, { objecttypecode: string | null }, {  }>;
  organizationid: WebAttribute<StringMap_Select, { organizationid: string | null }, {  }>;
  stringmapid: WebAttribute<StringMap_Select, { stringmapid: string | null }, {  }>;
  value: WebAttribute<StringMap_Select, { value: string | null }, {  }>;
  versionnumber: WebAttribute<StringMap_Select, { versionnumber: number | null }, {  }>;
}
interface StringMap_Filter {
  attributename: string;
  attributevalue: number;
  displayorder: number;
  langid: number;
  objecttypecode: string;
  organizationid: XQW.Guid;
  stringmapid: XQW.Guid;
  value: string;
  versionnumber: number;
}
interface StringMap_Expand {
  organizationid_organization: WebExpand<StringMap_Expand, Organization_Select, Organization_Filter, { organizationid_organization: Organization_Result }>;
  userentityinstancedata_stringmap: WebExpand<StringMap_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { userentityinstancedata_stringmap: UserEntityInstanceData_Result[] }>;
}
interface StringMap_FormattedResult {
}
interface StringMap_Result extends StringMap_Base, StringMap_Relationships {
  "@odata.etag": string;
}
interface StringMap_RelatedOne {
  organizationid_organization: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
}
interface StringMap_RelatedMany {
  userentityinstancedata_stringmap: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  stringmaps: WebMappingRetrieve<StringMap_Select,StringMap_Expand,StringMap_Filter,StringMap_Fixed,StringMap_Result,StringMap_FormattedResult>;
}
interface WebEntitiesRelated {
  stringmaps: WebMappingRelated<StringMap_RelatedOne,StringMap_RelatedMany>;
}
interface WebEntitiesCUDA {
  stringmaps: WebMappingCUDA<StringMap_Create,StringMap_Update,StringMap_Select>;
}
