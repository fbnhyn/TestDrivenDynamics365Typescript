interface msdyusd_subactioncalls_Base extends WebEntity {
  msdyusd_agentscriptactionidone?: string | null;
  msdyusd_agentscriptactionidtwo?: string | null;
  msdyusd_subactioncallsid?: string | null;
  versionnumber?: number | null;
}
interface msdyusd_subactioncalls_Relationships {
  msdyusd_subactioncalls?: msdyusd_agentscriptaction_Result[] | null;
}
interface msdyusd_subactioncalls extends msdyusd_subactioncalls_Base, msdyusd_subactioncalls_Relationships {
}
interface msdyusd_subactioncalls_Create extends msdyusd_subactioncalls {
}
interface msdyusd_subactioncalls_Update extends msdyusd_subactioncalls {
}
interface msdyusd_subactioncalls_Select {
  msdyusd_agentscriptactionidone: WebAttribute<msdyusd_subactioncalls_Select, { msdyusd_agentscriptactionidone: string | null }, {  }>;
  msdyusd_agentscriptactionidtwo: WebAttribute<msdyusd_subactioncalls_Select, { msdyusd_agentscriptactionidtwo: string | null }, {  }>;
  msdyusd_subactioncallsid: WebAttribute<msdyusd_subactioncalls_Select, { msdyusd_subactioncallsid: string | null }, {  }>;
  versionnumber: WebAttribute<msdyusd_subactioncalls_Select, { versionnumber: number | null }, {  }>;
}
interface msdyusd_subactioncalls_Filter {
  msdyusd_agentscriptactionidone: XQW.Guid;
  msdyusd_agentscriptactionidtwo: XQW.Guid;
  msdyusd_subactioncallsid: XQW.Guid;
  versionnumber: number;
}
interface msdyusd_subactioncalls_Expand {
  msdyusd_subactioncalls: WebExpand<msdyusd_subactioncalls_Expand, msdyusd_agentscriptaction_Select, msdyusd_agentscriptaction_Filter, { msdyusd_subactioncalls: msdyusd_agentscriptaction_Result[] }>;
}
interface msdyusd_subactioncalls_FormattedResult {
}
interface msdyusd_subactioncalls_Result extends msdyusd_subactioncalls_Base, msdyusd_subactioncalls_Relationships {
  "@odata.etag": string;
}
interface msdyusd_subactioncalls_RelatedOne {
}
interface msdyusd_subactioncalls_RelatedMany {
  msdyusd_subactioncalls: WebMappingRetrieve<msdyusd_agentscriptaction_Select,msdyusd_agentscriptaction_Expand,msdyusd_agentscriptaction_Filter,msdyusd_agentscriptaction_Fixed,msdyusd_agentscriptaction_Result,msdyusd_agentscriptaction_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyusd_subactioncallsset: WebMappingRetrieve<msdyusd_subactioncalls_Select,msdyusd_subactioncalls_Expand,msdyusd_subactioncalls_Filter,msdyusd_subactioncalls_Fixed,msdyusd_subactioncalls_Result,msdyusd_subactioncalls_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyusd_subactioncallsset: WebMappingRelated<msdyusd_subactioncalls_RelatedOne,msdyusd_subactioncalls_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyusd_subactioncallsset: WebMappingCUDA<msdyusd_subactioncalls_Create,msdyusd_subactioncalls_Update,msdyusd_subactioncalls_Select>;
}
