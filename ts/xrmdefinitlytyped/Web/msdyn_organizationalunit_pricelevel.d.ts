interface msdyn_organizationalunit_pricelevel_Base extends WebEntity {
  msdyn_organizationalunit_pricelevelid?: string | null;
  msdyn_organizationalunitid?: string | null;
  pricelevelid?: string | null;
  versionnumber?: number | null;
}
interface msdyn_organizationalunit_pricelevel_Relationships {
  msdyn_organizationalunit_pricelevel?: PriceLevel_Result[] | null;
}
interface msdyn_organizationalunit_pricelevel extends msdyn_organizationalunit_pricelevel_Base, msdyn_organizationalunit_pricelevel_Relationships {
}
interface msdyn_organizationalunit_pricelevel_Create extends msdyn_organizationalunit_pricelevel {
}
interface msdyn_organizationalunit_pricelevel_Update extends msdyn_organizationalunit_pricelevel {
}
interface msdyn_organizationalunit_pricelevel_Select {
  msdyn_organizationalunit_pricelevelid: WebAttribute<msdyn_organizationalunit_pricelevel_Select, { msdyn_organizationalunit_pricelevelid: string | null }, {  }>;
  msdyn_organizationalunitid: WebAttribute<msdyn_organizationalunit_pricelevel_Select, { msdyn_organizationalunitid: string | null }, {  }>;
  pricelevelid: WebAttribute<msdyn_organizationalunit_pricelevel_Select, { pricelevelid: string | null }, {  }>;
  versionnumber: WebAttribute<msdyn_organizationalunit_pricelevel_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_organizationalunit_pricelevel_Filter {
  msdyn_organizationalunit_pricelevelid: XQW.Guid;
  msdyn_organizationalunitid: XQW.Guid;
  pricelevelid: XQW.Guid;
  versionnumber: number;
}
interface msdyn_organizationalunit_pricelevel_Expand {
  msdyn_organizationalunit_pricelevel: WebExpand<msdyn_organizationalunit_pricelevel_Expand, PriceLevel_Select, PriceLevel_Filter, { msdyn_organizationalunit_pricelevel: PriceLevel_Result[] }>;
}
interface msdyn_organizationalunit_pricelevel_FormattedResult {
}
interface msdyn_organizationalunit_pricelevel_Result extends msdyn_organizationalunit_pricelevel_Base, msdyn_organizationalunit_pricelevel_Relationships {
  "@odata.etag": string;
}
interface msdyn_organizationalunit_pricelevel_RelatedOne {
}
interface msdyn_organizationalunit_pricelevel_RelatedMany {
  msdyn_organizationalunit_pricelevel: WebMappingRetrieve<PriceLevel_Select,PriceLevel_Expand,PriceLevel_Filter,PriceLevel_Fixed,PriceLevel_Result,PriceLevel_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_organizationalunit_pricelevelset: WebMappingRetrieve<msdyn_organizationalunit_pricelevel_Select,msdyn_organizationalunit_pricelevel_Expand,msdyn_organizationalunit_pricelevel_Filter,msdyn_organizationalunit_pricelevel_Fixed,msdyn_organizationalunit_pricelevel_Result,msdyn_organizationalunit_pricelevel_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_organizationalunit_pricelevelset: WebMappingRelated<msdyn_organizationalunit_pricelevel_RelatedOne,msdyn_organizationalunit_pricelevel_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_organizationalunit_pricelevelset: WebMappingCUDA<msdyn_organizationalunit_pricelevel_Create,msdyn_organizationalunit_pricelevel_Update,msdyn_organizationalunit_pricelevel_Select>;
}
