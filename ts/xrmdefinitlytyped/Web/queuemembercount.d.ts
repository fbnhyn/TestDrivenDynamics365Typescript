interface QueueMemberCount_Base extends WebEntity {
  queueid?: string | null;
  queuemembercount?: string | null;
  queuemembercountid?: string | null;
}
interface QueueMemberCount_Relationships {
  lk_queue_QueueMemberCount?: Queue_Result[] | null;
}
interface QueueMemberCount extends QueueMemberCount_Base, QueueMemberCount_Relationships {
}
interface QueueMemberCount_Create extends QueueMemberCount {
}
interface QueueMemberCount_Update extends QueueMemberCount {
}
interface QueueMemberCount_Select {
  queueid: WebAttribute<QueueMemberCount_Select, { queueid: string | null }, {  }>;
  queuemembercount1;
  queuemembercountid: WebAttribute<QueueMemberCount_Select, { queuemembercountid: string | null }, {  }>;
}
interface QueueMemberCount_Filter {
  queueid: XQW.Guid;
  queuemembercount: string;
  queuemembercountid: XQW.Guid;
}
interface QueueMemberCount_Expand {
  lk_queue_QueueMemberCount: WebExpand<QueueMemberCount_Expand, Queue_Select, Queue_Filter, { lk_queue_QueueMemberCount: Queue_Result[] }>;
}
interface QueueMemberCount_FormattedResult {
}
interface QueueMemberCount_Result extends QueueMemberCount_Base, QueueMemberCount_Relationships {
  "@odata.etag": string;
}
interface QueueMemberCount_RelatedOne {
}
interface QueueMemberCount_RelatedMany {
  lk_queue_QueueMemberCount: WebMappingRetrieve<Queue_Select,Queue_Expand,Queue_Filter,Queue_Fixed,Queue_Result,Queue_FormattedResult>;
}
interface WebEntitiesRetrieve {
  queuemembercounts: WebMappingRetrieve<QueueMemberCount_Select,QueueMemberCount_Expand,QueueMemberCount_Filter,QueueMemberCount_Fixed,QueueMemberCount_Result,QueueMemberCount_FormattedResult>;
}
interface WebEntitiesRelated {
  queuemembercounts: WebMappingRelated<QueueMemberCount_RelatedOne,QueueMemberCount_RelatedMany>;
}
interface WebEntitiesCUDA {
  queuemembercounts: WebMappingCUDA<QueueMemberCount_Create,QueueMemberCount_Update,QueueMemberCount_Select>;
}
