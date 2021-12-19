interface HierarchySecurityConfiguration_Base extends WebEntity {
  entityname?: string | null;
  hierarchysecuritymodelingsettingid?: string | null;
  objecttypecode?: string | null;
  versionnumber?: number | null;
}
interface HierarchySecurityConfiguration_Relationships {
}
interface HierarchySecurityConfiguration extends HierarchySecurityConfiguration_Base, HierarchySecurityConfiguration_Relationships {
}
interface HierarchySecurityConfiguration_Create extends HierarchySecurityConfiguration {
}
interface HierarchySecurityConfiguration_Update extends HierarchySecurityConfiguration {
}
interface HierarchySecurityConfiguration_Select {
  entityname: WebAttribute<HierarchySecurityConfiguration_Select, { entityname: string | null }, {  }>;
  hierarchysecuritymodelingsettingid: WebAttribute<HierarchySecurityConfiguration_Select, { hierarchysecuritymodelingsettingid: string | null }, {  }>;
  objecttypecode: WebAttribute<HierarchySecurityConfiguration_Select, { objecttypecode: string | null }, {  }>;
  versionnumber: WebAttribute<HierarchySecurityConfiguration_Select, { versionnumber: number | null }, {  }>;
}
interface HierarchySecurityConfiguration_Filter {
  entityname: string;
  hierarchysecuritymodelingsettingid: XQW.Guid;
  objecttypecode: string;
  versionnumber: number;
}
interface HierarchySecurityConfiguration_Expand {
}
interface HierarchySecurityConfiguration_FormattedResult {
}
interface HierarchySecurityConfiguration_Result extends HierarchySecurityConfiguration_Base, HierarchySecurityConfiguration_Relationships {
  "@odata.etag": string;
}
interface HierarchySecurityConfiguration_RelatedOne {
}
interface HierarchySecurityConfiguration_RelatedMany {
}
interface WebEntitiesRetrieve {
  hierarchysecurityconfigurations: WebMappingRetrieve<HierarchySecurityConfiguration_Select,HierarchySecurityConfiguration_Expand,HierarchySecurityConfiguration_Filter,HierarchySecurityConfiguration_Fixed,HierarchySecurityConfiguration_Result,HierarchySecurityConfiguration_FormattedResult>;
}
interface WebEntitiesRelated {
  hierarchysecurityconfigurations: WebMappingRelated<HierarchySecurityConfiguration_RelatedOne,HierarchySecurityConfiguration_RelatedMany>;
}
interface WebEntitiesCUDA {
  hierarchysecurityconfigurations: WebMappingCUDA<HierarchySecurityConfiguration_Create,HierarchySecurityConfiguration_Update,HierarchySecurityConfiguration_Select>;
}
