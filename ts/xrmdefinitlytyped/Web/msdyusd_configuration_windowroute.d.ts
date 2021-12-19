interface msdyusd_configuration_windowroute_Base extends WebEntity {
  msdyusd_configuration_windowrouteid?: string | null;
  msdyusd_configurationid?: string | null;
  msdyusd_windowrouteid?: string | null;
  versionnumber?: number | null;
}
interface msdyusd_configuration_windowroute_Relationships {
  msdyusd_configuration_windowroute?: msdyusd_windowroute_Result[] | null;
}
interface msdyusd_configuration_windowroute extends msdyusd_configuration_windowroute_Base, msdyusd_configuration_windowroute_Relationships {
}
interface msdyusd_configuration_windowroute_Create extends msdyusd_configuration_windowroute {
}
interface msdyusd_configuration_windowroute_Update extends msdyusd_configuration_windowroute {
}
interface msdyusd_configuration_windowroute_Select {
  msdyusd_configuration_windowrouteid: WebAttribute<msdyusd_configuration_windowroute_Select, { msdyusd_configuration_windowrouteid: string | null }, {  }>;
  msdyusd_configurationid: WebAttribute<msdyusd_configuration_windowroute_Select, { msdyusd_configurationid: string | null }, {  }>;
  msdyusd_windowrouteid: WebAttribute<msdyusd_configuration_windowroute_Select, { msdyusd_windowrouteid: string | null }, {  }>;
  versionnumber: WebAttribute<msdyusd_configuration_windowroute_Select, { versionnumber: number | null }, {  }>;
}
interface msdyusd_configuration_windowroute_Filter {
  msdyusd_configuration_windowrouteid: XQW.Guid;
  msdyusd_configurationid: XQW.Guid;
  msdyusd_windowrouteid: XQW.Guid;
  versionnumber: number;
}
interface msdyusd_configuration_windowroute_Expand {
  msdyusd_configuration_windowroute: WebExpand<msdyusd_configuration_windowroute_Expand, msdyusd_windowroute_Select, msdyusd_windowroute_Filter, { msdyusd_configuration_windowroute: msdyusd_windowroute_Result[] }>;
}
interface msdyusd_configuration_windowroute_FormattedResult {
}
interface msdyusd_configuration_windowroute_Result extends msdyusd_configuration_windowroute_Base, msdyusd_configuration_windowroute_Relationships {
  "@odata.etag": string;
}
interface msdyusd_configuration_windowroute_RelatedOne {
}
interface msdyusd_configuration_windowroute_RelatedMany {
  msdyusd_configuration_windowroute: WebMappingRetrieve<msdyusd_windowroute_Select,msdyusd_windowroute_Expand,msdyusd_windowroute_Filter,msdyusd_windowroute_Fixed,msdyusd_windowroute_Result,msdyusd_windowroute_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyusd_configuration_windowrouteset: WebMappingRetrieve<msdyusd_configuration_windowroute_Select,msdyusd_configuration_windowroute_Expand,msdyusd_configuration_windowroute_Filter,msdyusd_configuration_windowroute_Fixed,msdyusd_configuration_windowroute_Result,msdyusd_configuration_windowroute_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyusd_configuration_windowrouteset: WebMappingRelated<msdyusd_configuration_windowroute_RelatedOne,msdyusd_configuration_windowroute_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyusd_configuration_windowrouteset: WebMappingCUDA<msdyusd_configuration_windowroute_Create,msdyusd_configuration_windowroute_Update,msdyusd_configuration_windowroute_Select>;
}
