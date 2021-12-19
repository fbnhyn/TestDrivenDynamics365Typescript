interface msdyusd_task_answer_Base extends WebEntity {
  msdyusd_answerid?: string | null;
  msdyusd_task_answerid?: string | null;
  msdyusd_taskid?: string | null;
  versionnumber?: number | null;
}
interface msdyusd_task_answer_Relationships {
  msdyusd_task_answer?: msdyusd_answer_Result[] | null;
}
interface msdyusd_task_answer extends msdyusd_task_answer_Base, msdyusd_task_answer_Relationships {
}
interface msdyusd_task_answer_Create extends msdyusd_task_answer {
}
interface msdyusd_task_answer_Update extends msdyusd_task_answer {
}
interface msdyusd_task_answer_Select {
  msdyusd_answerid: WebAttribute<msdyusd_task_answer_Select, { msdyusd_answerid: string | null }, {  }>;
  msdyusd_task_answerid: WebAttribute<msdyusd_task_answer_Select, { msdyusd_task_answerid: string | null }, {  }>;
  msdyusd_taskid: WebAttribute<msdyusd_task_answer_Select, { msdyusd_taskid: string | null }, {  }>;
  versionnumber: WebAttribute<msdyusd_task_answer_Select, { versionnumber: number | null }, {  }>;
}
interface msdyusd_task_answer_Filter {
  msdyusd_answerid: XQW.Guid;
  msdyusd_task_answerid: XQW.Guid;
  msdyusd_taskid: XQW.Guid;
  versionnumber: number;
}
interface msdyusd_task_answer_Expand {
  msdyusd_task_answer: WebExpand<msdyusd_task_answer_Expand, msdyusd_answer_Select, msdyusd_answer_Filter, { msdyusd_task_answer: msdyusd_answer_Result[] }>;
}
interface msdyusd_task_answer_FormattedResult {
}
interface msdyusd_task_answer_Result extends msdyusd_task_answer_Base, msdyusd_task_answer_Relationships {
  "@odata.etag": string;
}
interface msdyusd_task_answer_RelatedOne {
}
interface msdyusd_task_answer_RelatedMany {
  msdyusd_task_answer: WebMappingRetrieve<msdyusd_answer_Select,msdyusd_answer_Expand,msdyusd_answer_Filter,msdyusd_answer_Fixed,msdyusd_answer_Result,msdyusd_answer_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyusd_task_answerset: WebMappingRetrieve<msdyusd_task_answer_Select,msdyusd_task_answer_Expand,msdyusd_task_answer_Filter,msdyusd_task_answer_Fixed,msdyusd_task_answer_Result,msdyusd_task_answer_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyusd_task_answerset: WebMappingRelated<msdyusd_task_answer_RelatedOne,msdyusd_task_answer_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyusd_task_answerset: WebMappingCUDA<msdyusd_task_answer_Create,msdyusd_task_answer_Update,msdyusd_task_answer_Select>;
}
