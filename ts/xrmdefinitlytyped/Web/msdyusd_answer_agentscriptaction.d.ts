interface msdyusd_answer_agentscriptaction_Base extends WebEntity {
  msdyusd_agentscriptactionid?: string | null;
  msdyusd_answer_agentscriptactionid?: string | null;
  msdyusd_answerid?: string | null;
  versionnumber?: number | null;
}
interface msdyusd_answer_agentscriptaction_Relationships {
  msdyusd_answer_agentscriptaction?: msdyusd_agentscriptaction_Result[] | null;
}
interface msdyusd_answer_agentscriptaction extends msdyusd_answer_agentscriptaction_Base, msdyusd_answer_agentscriptaction_Relationships {
}
interface msdyusd_answer_agentscriptaction_Create extends msdyusd_answer_agentscriptaction {
}
interface msdyusd_answer_agentscriptaction_Update extends msdyusd_answer_agentscriptaction {
}
interface msdyusd_answer_agentscriptaction_Select {
  msdyusd_agentscriptactionid: WebAttribute<msdyusd_answer_agentscriptaction_Select, { msdyusd_agentscriptactionid: string | null }, {  }>;
  msdyusd_answer_agentscriptactionid: WebAttribute<msdyusd_answer_agentscriptaction_Select, { msdyusd_answer_agentscriptactionid: string | null }, {  }>;
  msdyusd_answerid: WebAttribute<msdyusd_answer_agentscriptaction_Select, { msdyusd_answerid: string | null }, {  }>;
  versionnumber: WebAttribute<msdyusd_answer_agentscriptaction_Select, { versionnumber: number | null }, {  }>;
}
interface msdyusd_answer_agentscriptaction_Filter {
  msdyusd_agentscriptactionid: XQW.Guid;
  msdyusd_answer_agentscriptactionid: XQW.Guid;
  msdyusd_answerid: XQW.Guid;
  versionnumber: number;
}
interface msdyusd_answer_agentscriptaction_Expand {
  msdyusd_answer_agentscriptaction: WebExpand<msdyusd_answer_agentscriptaction_Expand, msdyusd_agentscriptaction_Select, msdyusd_agentscriptaction_Filter, { msdyusd_answer_agentscriptaction: msdyusd_agentscriptaction_Result[] }>;
}
interface msdyusd_answer_agentscriptaction_FormattedResult {
}
interface msdyusd_answer_agentscriptaction_Result extends msdyusd_answer_agentscriptaction_Base, msdyusd_answer_agentscriptaction_Relationships {
  "@odata.etag": string;
}
interface msdyusd_answer_agentscriptaction_RelatedOne {
}
interface msdyusd_answer_agentscriptaction_RelatedMany {
  msdyusd_answer_agentscriptaction: WebMappingRetrieve<msdyusd_agentscriptaction_Select,msdyusd_agentscriptaction_Expand,msdyusd_agentscriptaction_Filter,msdyusd_agentscriptaction_Fixed,msdyusd_agentscriptaction_Result,msdyusd_agentscriptaction_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyusd_answer_agentscriptactionset: WebMappingRetrieve<msdyusd_answer_agentscriptaction_Select,msdyusd_answer_agentscriptaction_Expand,msdyusd_answer_agentscriptaction_Filter,msdyusd_answer_agentscriptaction_Fixed,msdyusd_answer_agentscriptaction_Result,msdyusd_answer_agentscriptaction_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyusd_answer_agentscriptactionset: WebMappingRelated<msdyusd_answer_agentscriptaction_RelatedOne,msdyusd_answer_agentscriptaction_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyusd_answer_agentscriptactionset: WebMappingCUDA<msdyusd_answer_agentscriptaction_Create,msdyusd_answer_agentscriptaction_Update,msdyusd_answer_agentscriptaction_Select>;
}
