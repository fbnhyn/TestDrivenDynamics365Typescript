interface msdyusd_configuration_agentscript_Base extends WebEntity {
  msdyusd_configuration_agentscriptid?: string | null;
  msdyusd_configurationid?: string | null;
  msdyusd_taskid?: string | null;
  versionnumber?: number | null;
}
interface msdyusd_configuration_agentscript_Relationships {
  msdyusd_configuration_agentscript?: msdyusd_task_Result[] | null;
}
interface msdyusd_configuration_agentscript extends msdyusd_configuration_agentscript_Base, msdyusd_configuration_agentscript_Relationships {
}
interface msdyusd_configuration_agentscript_Create extends msdyusd_configuration_agentscript {
}
interface msdyusd_configuration_agentscript_Update extends msdyusd_configuration_agentscript {
}
interface msdyusd_configuration_agentscript_Select {
  msdyusd_configuration_agentscriptid: WebAttribute<msdyusd_configuration_agentscript_Select, { msdyusd_configuration_agentscriptid: string | null }, {  }>;
  msdyusd_configurationid: WebAttribute<msdyusd_configuration_agentscript_Select, { msdyusd_configurationid: string | null }, {  }>;
  msdyusd_taskid: WebAttribute<msdyusd_configuration_agentscript_Select, { msdyusd_taskid: string | null }, {  }>;
  versionnumber: WebAttribute<msdyusd_configuration_agentscript_Select, { versionnumber: number | null }, {  }>;
}
interface msdyusd_configuration_agentscript_Filter {
  msdyusd_configuration_agentscriptid: XQW.Guid;
  msdyusd_configurationid: XQW.Guid;
  msdyusd_taskid: XQW.Guid;
  versionnumber: number;
}
interface msdyusd_configuration_agentscript_Expand {
  msdyusd_configuration_agentscript: WebExpand<msdyusd_configuration_agentscript_Expand, msdyusd_task_Select, msdyusd_task_Filter, { msdyusd_configuration_agentscript: msdyusd_task_Result[] }>;
}
interface msdyusd_configuration_agentscript_FormattedResult {
}
interface msdyusd_configuration_agentscript_Result extends msdyusd_configuration_agentscript_Base, msdyusd_configuration_agentscript_Relationships {
  "@odata.etag": string;
}
interface msdyusd_configuration_agentscript_RelatedOne {
}
interface msdyusd_configuration_agentscript_RelatedMany {
  msdyusd_configuration_agentscript: WebMappingRetrieve<msdyusd_task_Select,msdyusd_task_Expand,msdyusd_task_Filter,msdyusd_task_Fixed,msdyusd_task_Result,msdyusd_task_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyusd_configuration_agentscriptset: WebMappingRetrieve<msdyusd_configuration_agentscript_Select,msdyusd_configuration_agentscript_Expand,msdyusd_configuration_agentscript_Filter,msdyusd_configuration_agentscript_Fixed,msdyusd_configuration_agentscript_Result,msdyusd_configuration_agentscript_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyusd_configuration_agentscriptset: WebMappingRelated<msdyusd_configuration_agentscript_RelatedOne,msdyusd_configuration_agentscript_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyusd_configuration_agentscriptset: WebMappingCUDA<msdyusd_configuration_agentscript_Create,msdyusd_configuration_agentscript_Update,msdyusd_configuration_agentscript_Select>;
}
