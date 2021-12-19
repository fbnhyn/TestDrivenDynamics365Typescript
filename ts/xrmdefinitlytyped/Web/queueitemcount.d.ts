interface QueueItemCount_Base extends WebEntity {
  queueid?: string | null;
  queueitemcount?: string | null;
  queueitemcountid?: string | null;
}
interface QueueItemCount_Relationships {
  lk_queue_QueueItemCount?: Queue_Result[] | null;
}
interface QueueItemCount extends QueueItemCount_Base, QueueItemCount_Relationships {
}
interface QueueItemCount_Create extends QueueItemCount {
}
interface QueueItemCount_Update extends QueueItemCount {
}
interface QueueItemCount_Select {
  queueid: WebAttribute<QueueItemCount_Select, { queueid: string | null }, {  }>;
  queueitemcount1;
  queueitemcountid: WebAttribute<QueueItemCount_Select, { queueitemcountid: string | null }, {  }>;
}
interface QueueItemCount_Filter {
  queueid: XQW.Guid;
  queueitemcount: string;
  queueitemcountid: XQW.Guid;
}
interface QueueItemCount_Expand {
  lk_queue_QueueItemCount: WebExpand<QueueItemCount_Expand, Queue_Select, Queue_Filter, { lk_queue_QueueItemCount: Queue_Result[] }>;
}
interface QueueItemCount_FormattedResult {
}
interface QueueItemCount_Result extends QueueItemCount_Base, QueueItemCount_Relationships {
  "@odata.etag": string;
}
interface QueueItemCount_RelatedOne {
}
interface QueueItemCount_RelatedMany {
  lk_queue_QueueItemCount: WebMappingRetrieve<Queue_Select,Queue_Expand,Queue_Filter,Queue_Fixed,Queue_Result,Queue_FormattedResult>;
}
interface WebEntitiesRetrieve {
  queueitemcounts: WebMappingRetrieve<QueueItemCount_Select,QueueItemCount_Expand,QueueItemCount_Filter,QueueItemCount_Fixed,QueueItemCount_Result,QueueItemCount_FormattedResult>;
}
interface WebEntitiesRelated {
  queueitemcounts: WebMappingRelated<QueueItemCount_RelatedOne,QueueItemCount_RelatedMany>;
}
interface WebEntitiesCUDA {
  queueitemcounts: WebMappingCUDA<QueueItemCount_Create,QueueItemCount_Update,QueueItemCount_Select>;
}
