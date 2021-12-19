interface msdyusd_configuration_option_Base extends WebEntity {
  msdyusd_configuration_optionid?: string | null;
  msdyusd_configurationid?: string | null;
  uii_optionid?: string | null;
  versionnumber?: number | null;
}
interface msdyusd_configuration_option_Relationships {
  msdyusd_configuration_option?: uii_option_Result[] | null;
}
interface msdyusd_configuration_option extends msdyusd_configuration_option_Base, msdyusd_configuration_option_Relationships {
}
interface msdyusd_configuration_option_Create extends msdyusd_configuration_option {
}
interface msdyusd_configuration_option_Update extends msdyusd_configuration_option {
}
interface msdyusd_configuration_option_Select {
  msdyusd_configuration_optionid: WebAttribute<msdyusd_configuration_option_Select, { msdyusd_configuration_optionid: string | null }, {  }>;
  msdyusd_configurationid: WebAttribute<msdyusd_configuration_option_Select, { msdyusd_configurationid: string | null }, {  }>;
  uii_optionid: WebAttribute<msdyusd_configuration_option_Select, { uii_optionid: string | null }, {  }>;
  versionnumber: WebAttribute<msdyusd_configuration_option_Select, { versionnumber: number | null }, {  }>;
}
interface msdyusd_configuration_option_Filter {
  msdyusd_configuration_optionid: XQW.Guid;
  msdyusd_configurationid: XQW.Guid;
  uii_optionid: XQW.Guid;
  versionnumber: number;
}
interface msdyusd_configuration_option_Expand {
  msdyusd_configuration_option: WebExpand<msdyusd_configuration_option_Expand, uii_option_Select, uii_option_Filter, { msdyusd_configuration_option: uii_option_Result[] }>;
}
interface msdyusd_configuration_option_FormattedResult {
}
interface msdyusd_configuration_option_Result extends msdyusd_configuration_option_Base, msdyusd_configuration_option_Relationships {
  "@odata.etag": string;
}
interface msdyusd_configuration_option_RelatedOne {
}
interface msdyusd_configuration_option_RelatedMany {
  msdyusd_configuration_option: WebMappingRetrieve<uii_option_Select,uii_option_Expand,uii_option_Filter,uii_option_Fixed,uii_option_Result,uii_option_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyusd_configuration_optionset: WebMappingRetrieve<msdyusd_configuration_option_Select,msdyusd_configuration_option_Expand,msdyusd_configuration_option_Filter,msdyusd_configuration_option_Fixed,msdyusd_configuration_option_Result,msdyusd_configuration_option_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyusd_configuration_optionset: WebMappingRelated<msdyusd_configuration_option_RelatedOne,msdyusd_configuration_option_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyusd_configuration_optionset: WebMappingCUDA<msdyusd_configuration_option_Create,msdyusd_configuration_option_Update,msdyusd_configuration_option_Select>;
}
