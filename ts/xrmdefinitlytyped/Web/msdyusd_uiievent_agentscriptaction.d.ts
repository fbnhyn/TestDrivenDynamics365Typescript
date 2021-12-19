interface msdyusd_uiievent_agentscriptaction_Base extends WebEntity {
  msdyusd_agentscriptactionid?: string | null;
  msdyusd_uiievent_agentscriptactionid?: string | null;
  msdyusd_uiieventid?: string | null;
  versionnumber?: number | null;
}
interface msdyusd_uiievent_agentscriptaction_Relationships {
  msdyusd_uiievent_agentscriptaction?: msdyusd_agentscriptaction_Result[] | null;
}
interface msdyusd_uiievent_agentscriptaction extends msdyusd_uiievent_agentscriptaction_Base, msdyusd_uiievent_agentscriptaction_Relationships {
}
interface msdyusd_uiievent_agentscriptaction_Create extends msdyusd_uiievent_agentscriptaction {
}
interface msdyusd_uiievent_agentscriptaction_Update extends msdyusd_uiievent_agentscriptaction {
}
interface msdyusd_uiievent_agentscriptaction_Select {
  msdyusd_agentscriptactionid: WebAttribute<msdyusd_uiievent_agentscriptaction_Select, { msdyusd_agentscriptactionid: string | null }, {  }>;
  msdyusd_uiievent_agentscriptactionid: WebAttribute<msdyusd_uiievent_agentscriptaction_Select, { msdyusd_uiievent_agentscriptactionid: string | null }, {  }>;
  msdyusd_uiieventid: WebAttribute<msdyusd_uiievent_agentscriptaction_Select, { msdyusd_uiieventid: string | null }, {  }>;
  versionnumber: WebAttribute<msdyusd_uiievent_agentscriptaction_Select, { versionnumber: number | null }, {  }>;
}
interface msdyusd_uiievent_agentscriptaction_Filter {
  msdyusd_agentscriptactionid: XQW.Guid;
  msdyusd_uiievent_agentscriptactionid: XQW.Guid;
  msdyusd_uiieventid: XQW.Guid;
  versionnumber: number;
}
interface msdyusd_uiievent_agentscriptaction_Expand {
  msdyusd_uiievent_agentscriptaction: WebExpand<msdyusd_uiievent_agentscriptaction_Expand, msdyusd_agentscriptaction_Select, msdyusd_agentscriptaction_Filter, { msdyusd_uiievent_agentscriptaction: msdyusd_agentscriptaction_Result[] }>;
}
interface msdyusd_uiievent_agentscriptaction_FormattedResult {
}
interface msdyusd_uiievent_agentscriptaction_Result extends msdyusd_uiievent_agentscriptaction_Base, msdyusd_uiievent_agentscriptaction_Relationships {
  "@odata.etag": string;
}
interface msdyusd_uiievent_agentscriptaction_RelatedOne {
}
interface msdyusd_uiievent_agentscriptaction_RelatedMany {
  msdyusd_uiievent_agentscriptaction: WebMappingRetrieve<msdyusd_agentscriptaction_Select,msdyusd_agentscriptaction_Expand,msdyusd_agentscriptaction_Filter,msdyusd_agentscriptaction_Fixed,msdyusd_agentscriptaction_Result,msdyusd_agentscriptaction_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyusd_uiievent_agentscriptactionset: WebMappingRetrieve<msdyusd_uiievent_agentscriptaction_Select,msdyusd_uiievent_agentscriptaction_Expand,msdyusd_uiievent_agentscriptaction_Filter,msdyusd_uiievent_agentscriptaction_Fixed,msdyusd_uiievent_agentscriptaction_Result,msdyusd_uiievent_agentscriptaction_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyusd_uiievent_agentscriptactionset: WebMappingRelated<msdyusd_uiievent_agentscriptaction_RelatedOne,msdyusd_uiievent_agentscriptaction_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyusd_uiievent_agentscriptactionset: WebMappingCUDA<msdyusd_uiievent_agentscriptaction_Create,msdyusd_uiievent_agentscriptaction_Update,msdyusd_uiievent_agentscriptaction_Select>;
}
