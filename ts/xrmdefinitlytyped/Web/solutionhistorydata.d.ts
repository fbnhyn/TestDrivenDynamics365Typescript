interface SolutionHistoryData_Base extends WebEntity {
  activityid?: string | null;
  correlationid?: string | null;
  endtime?: Date | null;
  errorcode?: number | null;
  exceptionmessage?: string | null;
  exceptionstack?: string | null;
  ismanaged?: boolean | null;
  ismicrosoftpublisher?: boolean | null;
  isoverwritecustomizations?: boolean | null;
  ispatch?: boolean | null;
  operation?: solutionhistorydata_operation | null;
  packagename?: string | null;
  packageversion?: string | null;
  publishername?: string | null;
  result?: number | null;
  solutionhistorydataid?: string | null;
  solutionid?: string | null;
  solutionname?: string | null;
  solutionversion?: string | null;
  starttime?: Date | null;
  status?: solutionhistorydata_status | null;
  suboperation?: solutionhistorydata_suboperation | null;
}
interface SolutionHistoryData_Relationships {
}
interface SolutionHistoryData extends SolutionHistoryData_Base, SolutionHistoryData_Relationships {
}
interface SolutionHistoryData_Create extends SolutionHistoryData {
}
interface SolutionHistoryData_Update extends SolutionHistoryData {
}
interface SolutionHistoryData_Select {
  activityid: WebAttribute<SolutionHistoryData_Select, { activityid: string | null }, {  }>;
  correlationid: WebAttribute<SolutionHistoryData_Select, { correlationid: string | null }, {  }>;
  endtime: WebAttribute<SolutionHistoryData_Select, { endtime: Date | null }, { endtime_formatted?: string }>;
  errorcode: WebAttribute<SolutionHistoryData_Select, { errorcode: number | null }, {  }>;
  exceptionmessage: WebAttribute<SolutionHistoryData_Select, { exceptionmessage: string | null }, {  }>;
  exceptionstack: WebAttribute<SolutionHistoryData_Select, { exceptionstack: string | null }, {  }>;
  ismanaged: WebAttribute<SolutionHistoryData_Select, { ismanaged: boolean | null }, {  }>;
  ismicrosoftpublisher: WebAttribute<SolutionHistoryData_Select, { ismicrosoftpublisher: boolean | null }, {  }>;
  isoverwritecustomizations: WebAttribute<SolutionHistoryData_Select, { isoverwritecustomizations: boolean | null }, {  }>;
  ispatch: WebAttribute<SolutionHistoryData_Select, { ispatch: boolean | null }, {  }>;
  operation: WebAttribute<SolutionHistoryData_Select, { operation: solutionhistorydata_operation | null }, { operation_formatted?: string }>;
  packagename: WebAttribute<SolutionHistoryData_Select, { packagename: string | null }, {  }>;
  packageversion: WebAttribute<SolutionHistoryData_Select, { packageversion: string | null }, {  }>;
  publishername: WebAttribute<SolutionHistoryData_Select, { publishername: string | null }, {  }>;
  result: WebAttribute<SolutionHistoryData_Select, { result: number | null }, {  }>;
  solutionhistorydataid: WebAttribute<SolutionHistoryData_Select, { solutionhistorydataid: string | null }, {  }>;
  solutionid: WebAttribute<SolutionHistoryData_Select, { solutionid: string | null }, {  }>;
  solutionname: WebAttribute<SolutionHistoryData_Select, { solutionname: string | null }, {  }>;
  solutionversion: WebAttribute<SolutionHistoryData_Select, { solutionversion: string | null }, {  }>;
  starttime: WebAttribute<SolutionHistoryData_Select, { starttime: Date | null }, { starttime_formatted?: string }>;
  status: WebAttribute<SolutionHistoryData_Select, { status: solutionhistorydata_status | null }, { status_formatted?: string }>;
  suboperation: WebAttribute<SolutionHistoryData_Select, { suboperation: solutionhistorydata_suboperation | null }, { suboperation_formatted?: string }>;
}
interface SolutionHistoryData_Filter {
  activityid: XQW.Guid;
  correlationid: XQW.Guid;
  endtime: Date;
  errorcode: number;
  exceptionmessage: string;
  exceptionstack: string;
  ismanaged: boolean;
  ismicrosoftpublisher: boolean;
  isoverwritecustomizations: boolean;
  ispatch: boolean;
  operation: solutionhistorydata_operation;
  packagename: string;
  packageversion: string;
  publishername: string;
  result: number;
  solutionhistorydataid: XQW.Guid;
  solutionid: XQW.Guid;
  solutionname: string;
  solutionversion: string;
  starttime: Date;
  status: solutionhistorydata_status;
  suboperation: solutionhistorydata_suboperation;
}
interface SolutionHistoryData_Expand {
}
interface SolutionHistoryData_FormattedResult {
  endtime_formatted?: string;
  operation_formatted?: string;
  starttime_formatted?: string;
  status_formatted?: string;
  suboperation_formatted?: string;
}
interface SolutionHistoryData_Result extends SolutionHistoryData_Base, SolutionHistoryData_Relationships {
  "@odata.etag": string;
}
interface SolutionHistoryData_RelatedOne {
}
interface SolutionHistoryData_RelatedMany {
}
interface WebEntitiesRetrieve {
  solutionhistories: WebMappingRetrieve<SolutionHistoryData_Select,SolutionHistoryData_Expand,SolutionHistoryData_Filter,SolutionHistoryData_Fixed,SolutionHistoryData_Result,SolutionHistoryData_FormattedResult>;
}
interface WebEntitiesRelated {
  solutionhistories: WebMappingRelated<SolutionHistoryData_RelatedOne,SolutionHistoryData_RelatedMany>;
}
interface WebEntitiesCUDA {
  solutionhistories: WebMappingCUDA<SolutionHistoryData_Create,SolutionHistoryData_Update,SolutionHistoryData_Select>;
}
