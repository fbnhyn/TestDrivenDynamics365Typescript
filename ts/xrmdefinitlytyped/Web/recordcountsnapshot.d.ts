interface RecordCountSnapshot_Base extends WebEntity {
  count?: number | null;
  lastupdated?: Date | null;
  objecttypecode?: number | null;
  recordcountsnapshotid?: string | null;
  versionnumberconverted?: number | null;
}
interface RecordCountSnapshot_Relationships {
}
interface RecordCountSnapshot extends RecordCountSnapshot_Base, RecordCountSnapshot_Relationships {
}
interface RecordCountSnapshot_Create extends RecordCountSnapshot {
}
interface RecordCountSnapshot_Update extends RecordCountSnapshot {
}
interface RecordCountSnapshot_Select {
  count: WebAttribute<RecordCountSnapshot_Select, { count: number | null }, {  }>;
  lastupdated: WebAttribute<RecordCountSnapshot_Select, { lastupdated: Date | null }, { lastupdated_formatted?: string }>;
  objecttypecode: WebAttribute<RecordCountSnapshot_Select, { objecttypecode: number | null }, {  }>;
  recordcountsnapshotid: WebAttribute<RecordCountSnapshot_Select, { recordcountsnapshotid: string | null }, {  }>;
  versionnumberconverted: WebAttribute<RecordCountSnapshot_Select, { versionnumberconverted: number | null }, {  }>;
}
interface RecordCountSnapshot_Filter {
  count: number;
  lastupdated: Date;
  objecttypecode: number;
  recordcountsnapshotid: XQW.Guid;
  versionnumberconverted: number;
}
interface RecordCountSnapshot_Expand {
}
interface RecordCountSnapshot_FormattedResult {
  lastupdated_formatted?: string;
}
interface RecordCountSnapshot_Result extends RecordCountSnapshot_Base, RecordCountSnapshot_Relationships {
  "@odata.etag": string;
}
interface RecordCountSnapshot_RelatedOne {
}
interface RecordCountSnapshot_RelatedMany {
}
interface WebEntitiesRetrieve {
  recordcountsnapshots: WebMappingRetrieve<RecordCountSnapshot_Select,RecordCountSnapshot_Expand,RecordCountSnapshot_Filter,RecordCountSnapshot_Fixed,RecordCountSnapshot_Result,RecordCountSnapshot_FormattedResult>;
}
interface WebEntitiesRelated {
  recordcountsnapshots: WebMappingRelated<RecordCountSnapshot_RelatedOne,RecordCountSnapshot_RelatedMany>;
}
interface WebEntitiesCUDA {
  recordcountsnapshots: WebMappingCUDA<RecordCountSnapshot_Create,RecordCountSnapshot_Update,RecordCountSnapshot_Select>;
}
