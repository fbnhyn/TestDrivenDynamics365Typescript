interface msdyusd_windowroute_agentscriptaction_Base extends WebEntity {
  msdyusd_agentscriptactionid?: string | null;
  msdyusd_windowroute_agentscriptactionid?: string | null;
  msdyusd_windowrouteid?: string | null;
  versionnumber?: number | null;
}
interface msdyusd_windowroute_agentscriptaction_Relationships {
  msdyusd_windowroute_agentscriptaction?: msdyusd_agentscriptaction_Result[] | null;
}
interface msdyusd_windowroute_agentscriptaction extends msdyusd_windowroute_agentscriptaction_Base, msdyusd_windowroute_agentscriptaction_Relationships {
}
interface msdyusd_windowroute_agentscriptaction_Create extends msdyusd_windowroute_agentscriptaction {
}
interface msdyusd_windowroute_agentscriptaction_Update extends msdyusd_windowroute_agentscriptaction {
}
interface msdyusd_windowroute_agentscriptaction_Select {
  msdyusd_agentscriptactionid: WebAttribute<msdyusd_windowroute_agentscriptaction_Select, { msdyusd_agentscriptactionid: string | null }, {  }>;
  msdyusd_windowroute_agentscriptactionid: WebAttribute<msdyusd_windowroute_agentscriptaction_Select, { msdyusd_windowroute_agentscriptactionid: string | null }, {  }>;
  msdyusd_windowrouteid: WebAttribute<msdyusd_windowroute_agentscriptaction_Select, { msdyusd_windowrouteid: string | null }, {  }>;
  versionnumber: WebAttribute<msdyusd_windowroute_agentscriptaction_Select, { versionnumber: number | null }, {  }>;
}
interface msdyusd_windowroute_agentscriptaction_Filter {
  msdyusd_agentscriptactionid: XQW.Guid;
  msdyusd_windowroute_agentscriptactionid: XQW.Guid;
  msdyusd_windowrouteid: XQW.Guid;
  versionnumber: number;
}
interface msdyusd_windowroute_agentscriptaction_Expand {
  msdyusd_windowroute_agentscriptaction: WebExpand<msdyusd_windowroute_agentscriptaction_Expand, msdyusd_agentscriptaction_Select, msdyusd_agentscriptaction_Filter, { msdyusd_windowroute_agentscriptaction: msdyusd_agentscriptaction_Result[] }>;
}
interface msdyusd_windowroute_agentscriptaction_FormattedResult {
}
interface msdyusd_windowroute_agentscriptaction_Result extends msdyusd_windowroute_agentscriptaction_Base, msdyusd_windowroute_agentscriptaction_Relationships {
  "@odata.etag": string;
}
interface msdyusd_windowroute_agentscriptaction_RelatedOne {
}
interface msdyusd_windowroute_agentscriptaction_RelatedMany {
  msdyusd_windowroute_agentscriptaction: WebMappingRetrieve<msdyusd_agentscriptaction_Select,msdyusd_agentscriptaction_Expand,msdyusd_agentscriptaction_Filter,msdyusd_agentscriptaction_Fixed,msdyusd_agentscriptaction_Result,msdyusd_agentscriptaction_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyusd_windowroute_agentscriptactionset: WebMappingRetrieve<msdyusd_windowroute_agentscriptaction_Select,msdyusd_windowroute_agentscriptaction_Expand,msdyusd_windowroute_agentscriptaction_Filter,msdyusd_windowroute_agentscriptaction_Fixed,msdyusd_windowroute_agentscriptaction_Result,msdyusd_windowroute_agentscriptaction_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyusd_windowroute_agentscriptactionset: WebMappingRelated<msdyusd_windowroute_agentscriptaction_RelatedOne,msdyusd_windowroute_agentscriptaction_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyusd_windowroute_agentscriptactionset: WebMappingCUDA<msdyusd_windowroute_agentscriptaction_Create,msdyusd_windowroute_agentscriptaction_Update,msdyusd_windowroute_agentscriptaction_Select>;
}
