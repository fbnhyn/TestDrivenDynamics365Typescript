interface msdyusd_configuration_scriptlet_Base extends WebEntity {
  msdyusd_configuration_scriptletid?: string | null;
  msdyusd_configurationid?: string | null;
  msdyusd_scriptletid?: string | null;
  versionnumber?: number | null;
}
interface msdyusd_configuration_scriptlet_Relationships {
  msdyusd_configuration_scriptlet?: msdyusd_scriptlet_Result[] | null;
}
interface msdyusd_configuration_scriptlet extends msdyusd_configuration_scriptlet_Base, msdyusd_configuration_scriptlet_Relationships {
}
interface msdyusd_configuration_scriptlet_Create extends msdyusd_configuration_scriptlet {
}
interface msdyusd_configuration_scriptlet_Update extends msdyusd_configuration_scriptlet {
}
interface msdyusd_configuration_scriptlet_Select {
  msdyusd_configuration_scriptletid: WebAttribute<msdyusd_configuration_scriptlet_Select, { msdyusd_configuration_scriptletid: string | null }, {  }>;
  msdyusd_configurationid: WebAttribute<msdyusd_configuration_scriptlet_Select, { msdyusd_configurationid: string | null }, {  }>;
  msdyusd_scriptletid: WebAttribute<msdyusd_configuration_scriptlet_Select, { msdyusd_scriptletid: string | null }, {  }>;
  versionnumber: WebAttribute<msdyusd_configuration_scriptlet_Select, { versionnumber: number | null }, {  }>;
}
interface msdyusd_configuration_scriptlet_Filter {
  msdyusd_configuration_scriptletid: XQW.Guid;
  msdyusd_configurationid: XQW.Guid;
  msdyusd_scriptletid: XQW.Guid;
  versionnumber: number;
}
interface msdyusd_configuration_scriptlet_Expand {
  msdyusd_configuration_scriptlet: WebExpand<msdyusd_configuration_scriptlet_Expand, msdyusd_scriptlet_Select, msdyusd_scriptlet_Filter, { msdyusd_configuration_scriptlet: msdyusd_scriptlet_Result[] }>;
}
interface msdyusd_configuration_scriptlet_FormattedResult {
}
interface msdyusd_configuration_scriptlet_Result extends msdyusd_configuration_scriptlet_Base, msdyusd_configuration_scriptlet_Relationships {
  "@odata.etag": string;
}
interface msdyusd_configuration_scriptlet_RelatedOne {
}
interface msdyusd_configuration_scriptlet_RelatedMany {
  msdyusd_configuration_scriptlet: WebMappingRetrieve<msdyusd_scriptlet_Select,msdyusd_scriptlet_Expand,msdyusd_scriptlet_Filter,msdyusd_scriptlet_Fixed,msdyusd_scriptlet_Result,msdyusd_scriptlet_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyusd_configuration_scriptletset: WebMappingRetrieve<msdyusd_configuration_scriptlet_Select,msdyusd_configuration_scriptlet_Expand,msdyusd_configuration_scriptlet_Filter,msdyusd_configuration_scriptlet_Fixed,msdyusd_configuration_scriptlet_Result,msdyusd_configuration_scriptlet_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyusd_configuration_scriptletset: WebMappingRelated<msdyusd_configuration_scriptlet_RelatedOne,msdyusd_configuration_scriptlet_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyusd_configuration_scriptletset: WebMappingCUDA<msdyusd_configuration_scriptlet_Create,msdyusd_configuration_scriptlet_Update,msdyusd_configuration_scriptlet_Select>;
}
