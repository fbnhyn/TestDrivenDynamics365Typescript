interface msdyusd_configuration_sessionlines_Base extends WebEntity {
  msdyusd_configuration_sessionlinesid?: string | null;
  msdyusd_configurationid?: string | null;
  msdyusd_sessioninformationid?: string | null;
  versionnumber?: number | null;
}
interface msdyusd_configuration_sessionlines_Relationships {
  msdyusd_configuration_sessionlines?: msdyusd_sessioninformation_Result[] | null;
}
interface msdyusd_configuration_sessionlines extends msdyusd_configuration_sessionlines_Base, msdyusd_configuration_sessionlines_Relationships {
}
interface msdyusd_configuration_sessionlines_Create extends msdyusd_configuration_sessionlines {
}
interface msdyusd_configuration_sessionlines_Update extends msdyusd_configuration_sessionlines {
}
interface msdyusd_configuration_sessionlines_Select {
  msdyusd_configuration_sessionlinesid: WebAttribute<msdyusd_configuration_sessionlines_Select, { msdyusd_configuration_sessionlinesid: string | null }, {  }>;
  msdyusd_configurationid: WebAttribute<msdyusd_configuration_sessionlines_Select, { msdyusd_configurationid: string | null }, {  }>;
  msdyusd_sessioninformationid: WebAttribute<msdyusd_configuration_sessionlines_Select, { msdyusd_sessioninformationid: string | null }, {  }>;
  versionnumber: WebAttribute<msdyusd_configuration_sessionlines_Select, { versionnumber: number | null }, {  }>;
}
interface msdyusd_configuration_sessionlines_Filter {
  msdyusd_configuration_sessionlinesid: XQW.Guid;
  msdyusd_configurationid: XQW.Guid;
  msdyusd_sessioninformationid: XQW.Guid;
  versionnumber: number;
}
interface msdyusd_configuration_sessionlines_Expand {
  msdyusd_configuration_sessionlines: WebExpand<msdyusd_configuration_sessionlines_Expand, msdyusd_sessioninformation_Select, msdyusd_sessioninformation_Filter, { msdyusd_configuration_sessionlines: msdyusd_sessioninformation_Result[] }>;
}
interface msdyusd_configuration_sessionlines_FormattedResult {
}
interface msdyusd_configuration_sessionlines_Result extends msdyusd_configuration_sessionlines_Base, msdyusd_configuration_sessionlines_Relationships {
  "@odata.etag": string;
}
interface msdyusd_configuration_sessionlines_RelatedOne {
}
interface msdyusd_configuration_sessionlines_RelatedMany {
  msdyusd_configuration_sessionlines: WebMappingRetrieve<msdyusd_sessioninformation_Select,msdyusd_sessioninformation_Expand,msdyusd_sessioninformation_Filter,msdyusd_sessioninformation_Fixed,msdyusd_sessioninformation_Result,msdyusd_sessioninformation_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyusd_configuration_sessionlinesset: WebMappingRetrieve<msdyusd_configuration_sessionlines_Select,msdyusd_configuration_sessionlines_Expand,msdyusd_configuration_sessionlines_Filter,msdyusd_configuration_sessionlines_Fixed,msdyusd_configuration_sessionlines_Result,msdyusd_configuration_sessionlines_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyusd_configuration_sessionlinesset: WebMappingRelated<msdyusd_configuration_sessionlines_RelatedOne,msdyusd_configuration_sessionlines_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyusd_configuration_sessionlinesset: WebMappingCUDA<msdyusd_configuration_sessionlines_Create,msdyusd_configuration_sessionlines_Update,msdyusd_configuration_sessionlines_Select>;
}
