interface searchtelemetry_Base extends WebEntity {
  correlationid?: string | null;
  createdon?: Date | null;
  eyesonanalyticsallowed?: boolean | null;
  feedbackdata?: string | null;
  requestid?: string | null;
  scenarioname?: string | null;
  searchtelemetryid?: string | null;
  sessionid?: string | null;
  ttlinseconds?: number | null;
  userquery?: string | null;
}
interface searchtelemetry_Relationships {
}
interface searchtelemetry extends searchtelemetry_Base, searchtelemetry_Relationships {
}
interface searchtelemetry_Create extends searchtelemetry {
}
interface searchtelemetry_Update extends searchtelemetry {
}
interface searchtelemetry_Select {
  correlationid: WebAttribute<searchtelemetry_Select, { correlationid: string | null }, {  }>;
  createdon: WebAttribute<searchtelemetry_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  eyesonanalyticsallowed: WebAttribute<searchtelemetry_Select, { eyesonanalyticsallowed: boolean | null }, {  }>;
  feedbackdata: WebAttribute<searchtelemetry_Select, { feedbackdata: string | null }, {  }>;
  requestid: WebAttribute<searchtelemetry_Select, { requestid: string | null }, {  }>;
  scenarioname: WebAttribute<searchtelemetry_Select, { scenarioname: string | null }, {  }>;
  searchtelemetryid: WebAttribute<searchtelemetry_Select, { searchtelemetryid: string | null }, {  }>;
  sessionid: WebAttribute<searchtelemetry_Select, { sessionid: string | null }, {  }>;
  ttlinseconds: WebAttribute<searchtelemetry_Select, { ttlinseconds: number | null }, {  }>;
  userquery: WebAttribute<searchtelemetry_Select, { userquery: string | null }, {  }>;
}
interface searchtelemetry_Filter {
  correlationid: string;
  createdon: Date;
  eyesonanalyticsallowed: boolean;
  feedbackdata: string;
  requestid: string;
  scenarioname: string;
  searchtelemetryid: XQW.Guid;
  sessionid: string;
  ttlinseconds: number;
  userquery: string;
}
interface searchtelemetry_Expand {
}
interface searchtelemetry_FormattedResult {
  createdon_formatted?: string;
}
interface searchtelemetry_Result extends searchtelemetry_Base, searchtelemetry_Relationships {
  "@odata.etag": string;
}
interface searchtelemetry_RelatedOne {
}
interface searchtelemetry_RelatedMany {
}
interface WebEntitiesRetrieve {
  searchtelemetries: WebMappingRetrieve<searchtelemetry_Select,searchtelemetry_Expand,searchtelemetry_Filter,searchtelemetry_Fixed,searchtelemetry_Result,searchtelemetry_FormattedResult>;
}
interface WebEntitiesRelated {
  searchtelemetries: WebMappingRelated<searchtelemetry_RelatedOne,searchtelemetry_RelatedMany>;
}
interface WebEntitiesCUDA {
  searchtelemetries: WebMappingCUDA<searchtelemetry_Create,searchtelemetry_Update,searchtelemetry_Select>;
}
