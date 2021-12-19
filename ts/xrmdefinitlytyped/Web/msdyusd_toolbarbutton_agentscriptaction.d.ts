interface msdyusd_toolbarbutton_agentscriptaction_Base extends WebEntity {
  msdyusd_agentscriptactionid?: string | null;
  msdyusd_toolbarbutton_agentscriptactionid?: string | null;
  msdyusd_toolbarbuttonid?: string | null;
  versionnumber?: number | null;
}
interface msdyusd_toolbarbutton_agentscriptaction_Relationships {
  msdyusd_toolbarbutton_agentscriptaction?: msdyusd_agentscriptaction_Result[] | null;
}
interface msdyusd_toolbarbutton_agentscriptaction extends msdyusd_toolbarbutton_agentscriptaction_Base, msdyusd_toolbarbutton_agentscriptaction_Relationships {
}
interface msdyusd_toolbarbutton_agentscriptaction_Create extends msdyusd_toolbarbutton_agentscriptaction {
}
interface msdyusd_toolbarbutton_agentscriptaction_Update extends msdyusd_toolbarbutton_agentscriptaction {
}
interface msdyusd_toolbarbutton_agentscriptaction_Select {
  msdyusd_agentscriptactionid: WebAttribute<msdyusd_toolbarbutton_agentscriptaction_Select, { msdyusd_agentscriptactionid: string | null }, {  }>;
  msdyusd_toolbarbutton_agentscriptactionid: WebAttribute<msdyusd_toolbarbutton_agentscriptaction_Select, { msdyusd_toolbarbutton_agentscriptactionid: string | null }, {  }>;
  msdyusd_toolbarbuttonid: WebAttribute<msdyusd_toolbarbutton_agentscriptaction_Select, { msdyusd_toolbarbuttonid: string | null }, {  }>;
  versionnumber: WebAttribute<msdyusd_toolbarbutton_agentscriptaction_Select, { versionnumber: number | null }, {  }>;
}
interface msdyusd_toolbarbutton_agentscriptaction_Filter {
  msdyusd_agentscriptactionid: XQW.Guid;
  msdyusd_toolbarbutton_agentscriptactionid: XQW.Guid;
  msdyusd_toolbarbuttonid: XQW.Guid;
  versionnumber: number;
}
interface msdyusd_toolbarbutton_agentscriptaction_Expand {
  msdyusd_toolbarbutton_agentscriptaction: WebExpand<msdyusd_toolbarbutton_agentscriptaction_Expand, msdyusd_agentscriptaction_Select, msdyusd_agentscriptaction_Filter, { msdyusd_toolbarbutton_agentscriptaction: msdyusd_agentscriptaction_Result[] }>;
}
interface msdyusd_toolbarbutton_agentscriptaction_FormattedResult {
}
interface msdyusd_toolbarbutton_agentscriptaction_Result extends msdyusd_toolbarbutton_agentscriptaction_Base, msdyusd_toolbarbutton_agentscriptaction_Relationships {
  "@odata.etag": string;
}
interface msdyusd_toolbarbutton_agentscriptaction_RelatedOne {
}
interface msdyusd_toolbarbutton_agentscriptaction_RelatedMany {
  msdyusd_toolbarbutton_agentscriptaction: WebMappingRetrieve<msdyusd_agentscriptaction_Select,msdyusd_agentscriptaction_Expand,msdyusd_agentscriptaction_Filter,msdyusd_agentscriptaction_Fixed,msdyusd_agentscriptaction_Result,msdyusd_agentscriptaction_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyusd_toolbarbutton_agentscriptactionset: WebMappingRetrieve<msdyusd_toolbarbutton_agentscriptaction_Select,msdyusd_toolbarbutton_agentscriptaction_Expand,msdyusd_toolbarbutton_agentscriptaction_Filter,msdyusd_toolbarbutton_agentscriptaction_Fixed,msdyusd_toolbarbutton_agentscriptaction_Result,msdyusd_toolbarbutton_agentscriptaction_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyusd_toolbarbutton_agentscriptactionset: WebMappingRelated<msdyusd_toolbarbutton_agentscriptaction_RelatedOne,msdyusd_toolbarbutton_agentscriptaction_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyusd_toolbarbutton_agentscriptactionset: WebMappingCUDA<msdyusd_toolbarbutton_agentscriptaction_Create,msdyusd_toolbarbutton_agentscriptaction_Update,msdyusd_toolbarbutton_agentscriptaction_Select>;
}
