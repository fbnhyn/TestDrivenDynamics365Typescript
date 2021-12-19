interface TimeStampDateMapping_Base extends WebEntity {
  date?: Date | null;
  timestamp?: number | null;
  timestampdatemappingid?: string | null;
}
interface TimeStampDateMapping_Relationships {
}
interface TimeStampDateMapping extends TimeStampDateMapping_Base, TimeStampDateMapping_Relationships {
}
interface TimeStampDateMapping_Create extends TimeStampDateMapping {
}
interface TimeStampDateMapping_Update extends TimeStampDateMapping {
}
interface TimeStampDateMapping_Select {
  date: WebAttribute<TimeStampDateMapping_Select, { date: Date | null }, { date_formatted?: string }>;
  timestamp: WebAttribute<TimeStampDateMapping_Select, { timestamp: number | null }, {  }>;
  timestampdatemappingid: WebAttribute<TimeStampDateMapping_Select, { timestampdatemappingid: string | null }, {  }>;
}
interface TimeStampDateMapping_Filter {
  date: Date;
  timestamp: number;
  timestampdatemappingid: XQW.Guid;
}
interface TimeStampDateMapping_Expand {
}
interface TimeStampDateMapping_FormattedResult {
  date_formatted?: string;
}
interface TimeStampDateMapping_Result extends TimeStampDateMapping_Base, TimeStampDateMapping_Relationships {
  "@odata.etag": string;
}
interface TimeStampDateMapping_RelatedOne {
}
interface TimeStampDateMapping_RelatedMany {
}
interface WebEntitiesRetrieve {
  timestampdatemappings: WebMappingRetrieve<TimeStampDateMapping_Select,TimeStampDateMapping_Expand,TimeStampDateMapping_Filter,TimeStampDateMapping_Fixed,TimeStampDateMapping_Result,TimeStampDateMapping_FormattedResult>;
}
interface WebEntitiesRelated {
  timestampdatemappings: WebMappingRelated<TimeStampDateMapping_RelatedOne,TimeStampDateMapping_RelatedMany>;
}
interface WebEntitiesCUDA {
  timestampdatemappings: WebMappingCUDA<TimeStampDateMapping_Create,TimeStampDateMapping_Update,TimeStampDateMapping_Select>;
}
