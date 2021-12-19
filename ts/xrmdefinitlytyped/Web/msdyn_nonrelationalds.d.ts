interface msdyn_nonrelationalds_Base extends WebEntity {
  msdyn_name?: string | null;
  msdyn_nonrelationaldsid?: string | null;
}
interface msdyn_nonrelationalds_Relationships {
}
interface msdyn_nonrelationalds extends msdyn_nonrelationalds_Base, msdyn_nonrelationalds_Relationships {
}
interface msdyn_nonrelationalds_Create extends msdyn_nonrelationalds {
}
interface msdyn_nonrelationalds_Update extends msdyn_nonrelationalds {
}
interface msdyn_nonrelationalds_Select {
  msdyn_name: WebAttribute<msdyn_nonrelationalds_Select, { msdyn_name: string | null }, {  }>;
  msdyn_nonrelationaldsid: WebAttribute<msdyn_nonrelationalds_Select, { msdyn_nonrelationaldsid: string | null }, {  }>;
}
interface msdyn_nonrelationalds_Filter {
  msdyn_name: string;
  msdyn_nonrelationaldsid: XQW.Guid;
}
interface msdyn_nonrelationalds_Expand {
}
interface msdyn_nonrelationalds_FormattedResult {
}
interface msdyn_nonrelationalds_Result extends msdyn_nonrelationalds_Base, msdyn_nonrelationalds_Relationships {
  "@odata.etag": string;
}
interface msdyn_nonrelationalds_RelatedOne {
}
interface msdyn_nonrelationalds_RelatedMany {
}
interface WebEntitiesRetrieve {
  msdyn_nonrelationaldses: WebMappingRetrieve<msdyn_nonrelationalds_Select,msdyn_nonrelationalds_Expand,msdyn_nonrelationalds_Filter,msdyn_nonrelationalds_Fixed,msdyn_nonrelationalds_Result,msdyn_nonrelationalds_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_nonrelationaldses: WebMappingRelated<msdyn_nonrelationalds_RelatedOne,msdyn_nonrelationalds_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_nonrelationaldses: WebMappingCUDA<msdyn_nonrelationalds_Create,msdyn_nonrelationalds_Update,msdyn_nonrelationalds_Select>;
}
