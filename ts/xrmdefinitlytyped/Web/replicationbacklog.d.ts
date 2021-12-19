interface ReplicationBacklog_Base extends WebEntity {
  data?: string | null;
  replicationbacklogid?: string | null;
  replicationbacklogtype?: replicationbacklog_replicationbacklogtype | null;
  targetdatacenterid?: string | null;
}
interface ReplicationBacklog_Relationships {
}
interface ReplicationBacklog extends ReplicationBacklog_Base, ReplicationBacklog_Relationships {
}
interface ReplicationBacklog_Create extends ReplicationBacklog {
}
interface ReplicationBacklog_Update extends ReplicationBacklog {
}
interface ReplicationBacklog_Select {
  data: WebAttribute<ReplicationBacklog_Select, { data: string | null }, {  }>;
  replicationbacklogid: WebAttribute<ReplicationBacklog_Select, { replicationbacklogid: string | null }, {  }>;
  replicationbacklogtype: WebAttribute<ReplicationBacklog_Select, { replicationbacklogtype: replicationbacklog_replicationbacklogtype | null }, { replicationbacklogtype_formatted?: string }>;
  targetdatacenterid: WebAttribute<ReplicationBacklog_Select, { targetdatacenterid: string | null }, {  }>;
  targetobjectid_guid: WebAttribute<ReplicationBacklog_Select, { targetobjectid_guid: string | null }, { targetobjectid_formatted?: string }>;
}
interface ReplicationBacklog_Filter {
  data: string;
  replicationbacklogid: XQW.Guid;
  replicationbacklogtype: replicationbacklog_replicationbacklogtype;
  targetdatacenterid: XQW.Guid;
  targetobjectid_guid: XQW.Guid;
}
interface ReplicationBacklog_Expand {
  targetobjectid: WebExpand<ReplicationBacklog_Expand, Report_Select, Report_Filter, { targetobjectid: Report_Result }>;
}
interface ReplicationBacklog_FormattedResult {
  replicationbacklogtype_formatted?: string;
  targetobjectid_formatted?: string;
}
interface ReplicationBacklog_Result extends ReplicationBacklog_Base, ReplicationBacklog_Relationships {
  "@odata.etag": string;
  targetobjectid_guid: string | null;
}
interface ReplicationBacklog_RelatedOne {
  targetobjectid: WebMappingRetrieve<Report_Select,Report_Expand,Report_Filter,Report_Fixed,Report_Result,Report_FormattedResult>;
}
interface ReplicationBacklog_RelatedMany {
}
interface WebEntitiesRetrieve {
  replicationbacklogs: WebMappingRetrieve<ReplicationBacklog_Select,ReplicationBacklog_Expand,ReplicationBacklog_Filter,ReplicationBacklog_Fixed,ReplicationBacklog_Result,ReplicationBacklog_FormattedResult>;
}
interface WebEntitiesRelated {
  replicationbacklogs: WebMappingRelated<ReplicationBacklog_RelatedOne,ReplicationBacklog_RelatedMany>;
}
interface WebEntitiesCUDA {
  replicationbacklogs: WebMappingCUDA<ReplicationBacklog_Create,ReplicationBacklog_Update,ReplicationBacklog_Select>;
}
