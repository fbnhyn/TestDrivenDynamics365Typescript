interface msdyusd_configuration_actioncalls_Base extends WebEntity {
  msdyusd_agentscriptactionid?: string | null;
  msdyusd_configuration_actioncallsid?: string | null;
  msdyusd_configurationid?: string | null;
  versionnumber?: number | null;
}
interface msdyusd_configuration_actioncalls_Relationships {
  msdyusd_configuration_actioncalls?: msdyusd_agentscriptaction_Result[] | null;
}
interface msdyusd_configuration_actioncalls extends msdyusd_configuration_actioncalls_Base, msdyusd_configuration_actioncalls_Relationships {
}
interface msdyusd_configuration_actioncalls_Create extends msdyusd_configuration_actioncalls {
}
interface msdyusd_configuration_actioncalls_Update extends msdyusd_configuration_actioncalls {
}
interface msdyusd_configuration_actioncalls_Select {
  msdyusd_agentscriptactionid: WebAttribute<msdyusd_configuration_actioncalls_Select, { msdyusd_agentscriptactionid: string | null }, {  }>;
  msdyusd_configuration_actioncallsid: WebAttribute<msdyusd_configuration_actioncalls_Select, { msdyusd_configuration_actioncallsid: string | null }, {  }>;
  msdyusd_configurationid: WebAttribute<msdyusd_configuration_actioncalls_Select, { msdyusd_configurationid: string | null }, {  }>;
  versionnumber: WebAttribute<msdyusd_configuration_actioncalls_Select, { versionnumber: number | null }, {  }>;
}
interface msdyusd_configuration_actioncalls_Filter {
  msdyusd_agentscriptactionid: XQW.Guid;
  msdyusd_configuration_actioncallsid: XQW.Guid;
  msdyusd_configurationid: XQW.Guid;
  versionnumber: number;
}
interface msdyusd_configuration_actioncalls_Expand {
  msdyusd_configuration_actioncalls: WebExpand<msdyusd_configuration_actioncalls_Expand, msdyusd_agentscriptaction_Select, msdyusd_agentscriptaction_Filter, { msdyusd_configuration_actioncalls: msdyusd_agentscriptaction_Result[] }>;
}
interface msdyusd_configuration_actioncalls_FormattedResult {
}
interface msdyusd_configuration_actioncalls_Result extends msdyusd_configuration_actioncalls_Base, msdyusd_configuration_actioncalls_Relationships {
  "@odata.etag": string;
}
interface msdyusd_configuration_actioncalls_RelatedOne {
}
interface msdyusd_configuration_actioncalls_RelatedMany {
  msdyusd_configuration_actioncalls: WebMappingRetrieve<msdyusd_agentscriptaction_Select,msdyusd_agentscriptaction_Expand,msdyusd_agentscriptaction_Filter,msdyusd_agentscriptaction_Fixed,msdyusd_agentscriptaction_Result,msdyusd_agentscriptaction_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyusd_configuration_actioncallsset: WebMappingRetrieve<msdyusd_configuration_actioncalls_Select,msdyusd_configuration_actioncalls_Expand,msdyusd_configuration_actioncalls_Filter,msdyusd_configuration_actioncalls_Fixed,msdyusd_configuration_actioncalls_Result,msdyusd_configuration_actioncalls_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyusd_configuration_actioncallsset: WebMappingRelated<msdyusd_configuration_actioncalls_RelatedOne,msdyusd_configuration_actioncalls_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyusd_configuration_actioncallsset: WebMappingCUDA<msdyusd_configuration_actioncalls_Create,msdyusd_configuration_actioncalls_Update,msdyusd_configuration_actioncalls_Select>;
}
