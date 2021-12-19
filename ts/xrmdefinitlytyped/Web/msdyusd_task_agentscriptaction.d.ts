interface msdyusd_task_agentscriptaction_Base extends WebEntity {
  msdyusd_agentscriptactionid?: string | null;
  msdyusd_task_agentscriptactionid?: string | null;
  msdyusd_taskid?: string | null;
  versionnumber?: number | null;
}
interface msdyusd_task_agentscriptaction_Relationships {
  msdyusd_task_agentscriptaction?: msdyusd_agentscriptaction_Result[] | null;
}
interface msdyusd_task_agentscriptaction extends msdyusd_task_agentscriptaction_Base, msdyusd_task_agentscriptaction_Relationships {
}
interface msdyusd_task_agentscriptaction_Create extends msdyusd_task_agentscriptaction {
}
interface msdyusd_task_agentscriptaction_Update extends msdyusd_task_agentscriptaction {
}
interface msdyusd_task_agentscriptaction_Select {
  msdyusd_agentscriptactionid: WebAttribute<msdyusd_task_agentscriptaction_Select, { msdyusd_agentscriptactionid: string | null }, {  }>;
  msdyusd_task_agentscriptactionid: WebAttribute<msdyusd_task_agentscriptaction_Select, { msdyusd_task_agentscriptactionid: string | null }, {  }>;
  msdyusd_taskid: WebAttribute<msdyusd_task_agentscriptaction_Select, { msdyusd_taskid: string | null }, {  }>;
  versionnumber: WebAttribute<msdyusd_task_agentscriptaction_Select, { versionnumber: number | null }, {  }>;
}
interface msdyusd_task_agentscriptaction_Filter {
  msdyusd_agentscriptactionid: XQW.Guid;
  msdyusd_task_agentscriptactionid: XQW.Guid;
  msdyusd_taskid: XQW.Guid;
  versionnumber: number;
}
interface msdyusd_task_agentscriptaction_Expand {
  msdyusd_task_agentscriptaction: WebExpand<msdyusd_task_agentscriptaction_Expand, msdyusd_agentscriptaction_Select, msdyusd_agentscriptaction_Filter, { msdyusd_task_agentscriptaction: msdyusd_agentscriptaction_Result[] }>;
}
interface msdyusd_task_agentscriptaction_FormattedResult {
}
interface msdyusd_task_agentscriptaction_Result extends msdyusd_task_agentscriptaction_Base, msdyusd_task_agentscriptaction_Relationships {
  "@odata.etag": string;
}
interface msdyusd_task_agentscriptaction_RelatedOne {
}
interface msdyusd_task_agentscriptaction_RelatedMany {
  msdyusd_task_agentscriptaction: WebMappingRetrieve<msdyusd_agentscriptaction_Select,msdyusd_agentscriptaction_Expand,msdyusd_agentscriptaction_Filter,msdyusd_agentscriptaction_Fixed,msdyusd_agentscriptaction_Result,msdyusd_agentscriptaction_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyusd_task_agentscriptactionset: WebMappingRetrieve<msdyusd_task_agentscriptaction_Select,msdyusd_task_agentscriptaction_Expand,msdyusd_task_agentscriptaction_Filter,msdyusd_task_agentscriptaction_Fixed,msdyusd_task_agentscriptaction_Result,msdyusd_task_agentscriptaction_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyusd_task_agentscriptactionset: WebMappingRelated<msdyusd_task_agentscriptaction_RelatedOne,msdyusd_task_agentscriptaction_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyusd_task_agentscriptactionset: WebMappingCUDA<msdyusd_task_agentscriptaction_Create,msdyusd_task_agentscriptaction_Update,msdyusd_task_agentscriptaction_Select>;
}
