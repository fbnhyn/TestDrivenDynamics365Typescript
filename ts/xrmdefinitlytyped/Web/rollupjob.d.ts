interface RollupJob_Base extends WebEntity {
  depthprocessed?: number | null;
  postponeuntil?: Date | null;
  recordcreatedon?: Date | null;
  retrycount?: number | null;
  rollupjobid?: number | null;
  sourceentitytypecode?: number | null;
  statecode?: rollupjob_statecode | null;
  statuscode?: rollupjob_statuscode | null;
}
interface RollupJob_Relationships {
}
interface RollupJob extends RollupJob_Base, RollupJob_Relationships {
}
interface RollupJob_Create extends RollupJob {
}
interface RollupJob_Update extends RollupJob {
}
interface RollupJob_Select {
  depthprocessed: WebAttribute<RollupJob_Select, { depthprocessed: number | null }, {  }>;
  postponeuntil: WebAttribute<RollupJob_Select, { postponeuntil: Date | null }, { postponeuntil_formatted?: string }>;
  recordcreatedon: WebAttribute<RollupJob_Select, { recordcreatedon: Date | null }, { recordcreatedon_formatted?: string }>;
  regardingobjectid_guid: WebAttribute<RollupJob_Select, { regardingobjectid_guid: string | null }, { regardingobjectid_formatted?: string }>;
  retrycount: WebAttribute<RollupJob_Select, { retrycount: number | null }, {  }>;
  rollupjobid: WebAttribute<RollupJob_Select, { rollupjobid: number | null }, {  }>;
  rolluppropertiesid_guid: WebAttribute<RollupJob_Select, { rolluppropertiesid_guid: string | null }, { rolluppropertiesid_formatted?: string }>;
  sourceentitytypecode: WebAttribute<RollupJob_Select, { sourceentitytypecode: number | null }, {  }>;
  statecode: WebAttribute<RollupJob_Select, { statecode: rollupjob_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<RollupJob_Select, { statuscode: rollupjob_statuscode | null }, { statuscode_formatted?: string }>;
}
interface RollupJob_Filter {
  depthprocessed: number;
  postponeuntil: Date;
  recordcreatedon: Date;
  regardingobjectid_guid: XQW.Guid;
  retrycount: number;
  rollupjobid: number;
  rolluppropertiesid_guid: XQW.Guid;
  sourceentitytypecode: number;
  statecode: rollupjob_statecode;
  statuscode: rollupjob_statuscode;
}
interface RollupJob_Expand {
  rolluppropertiesid: WebExpand<RollupJob_Expand, RollupProperties_Select, RollupProperties_Filter, { rolluppropertiesid: RollupProperties_Result }>;
}
interface RollupJob_FormattedResult {
  postponeuntil_formatted?: string;
  recordcreatedon_formatted?: string;
  regardingobjectid_formatted?: string;
  rolluppropertiesid_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface RollupJob_Result extends RollupJob_Base, RollupJob_Relationships {
  "@odata.etag": string;
  regardingobjectid_guid: string | null;
  rolluppropertiesid_guid: string | null;
}
interface RollupJob_RelatedOne {
  rolluppropertiesid: WebMappingRetrieve<RollupProperties_Select,RollupProperties_Expand,RollupProperties_Filter,RollupProperties_Fixed,RollupProperties_Result,RollupProperties_FormattedResult>;
}
interface RollupJob_RelatedMany {
}
interface WebEntitiesRetrieve {
  rollupjobs: WebMappingRetrieve<RollupJob_Select,RollupJob_Expand,RollupJob_Filter,RollupJob_Fixed,RollupJob_Result,RollupJob_FormattedResult>;
}
interface WebEntitiesRelated {
  rollupjobs: WebMappingRelated<RollupJob_RelatedOne,RollupJob_RelatedMany>;
}
interface WebEntitiesCUDA {
  rollupjobs: WebMappingCUDA<RollupJob_Create,RollupJob_Update,RollupJob_Select>;
}
