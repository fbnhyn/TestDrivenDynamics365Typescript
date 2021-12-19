interface msdyn_solutionhistory_Base extends WebEntity {
  msdyn_activityid?: string | null;
  msdyn_correlationid?: string | null;
  msdyn_endtime?: Date | null;
  msdyn_errorcode?: string | null;
  msdyn_exceptionmessage?: string | null;
  msdyn_exceptionstack?: string | null;
  msdyn_ismanaged?: boolean | null;
  msdyn_isoverwritecustomizations?: boolean | null;
  msdyn_ispatch?: boolean | null;
  msdyn_maxretries?: number | null;
  msdyn_name?: string | null;
  msdyn_operation?: msdyn_solutionhistory_msdyn_operation | null;
  msdyn_packagename?: string | null;
  msdyn_packageversion?: string | null;
  msdyn_publisherid?: string | null;
  msdyn_publishername?: string | null;
  msdyn_result?: boolean | null;
  msdyn_retrycount?: number | null;
  msdyn_solutionhistoryid?: string | null;
  msdyn_solutionid?: string | null;
  msdyn_solutionversion?: string | null;
  msdyn_starttime?: Date | null;
  msdyn_status?: msdyn_solutionhistory_msdyn_status | null;
  msdyn_suboperation?: msdyn_solutionhistory_msdyn_suboperation | null;
  msdyn_totaltime?: number | null;
}
interface msdyn_solutionhistory_Relationships {
}
interface msdyn_solutionhistory extends msdyn_solutionhistory_Base, msdyn_solutionhistory_Relationships {
}
interface msdyn_solutionhistory_Create extends msdyn_solutionhistory {
}
interface msdyn_solutionhistory_Update extends msdyn_solutionhistory {
}
interface msdyn_solutionhistory_Select {
  msdyn_activityid: WebAttribute<msdyn_solutionhistory_Select, { msdyn_activityid: string | null }, {  }>;
  msdyn_correlationid: WebAttribute<msdyn_solutionhistory_Select, { msdyn_correlationid: string | null }, {  }>;
  msdyn_endtime: WebAttribute<msdyn_solutionhistory_Select, { msdyn_endtime: Date | null }, { msdyn_endtime_formatted?: string }>;
  msdyn_errorcode: WebAttribute<msdyn_solutionhistory_Select, { msdyn_errorcode: string | null }, {  }>;
  msdyn_exceptionmessage: WebAttribute<msdyn_solutionhistory_Select, { msdyn_exceptionmessage: string | null }, {  }>;
  msdyn_exceptionstack: WebAttribute<msdyn_solutionhistory_Select, { msdyn_exceptionstack: string | null }, {  }>;
  msdyn_ismanaged: WebAttribute<msdyn_solutionhistory_Select, { msdyn_ismanaged: boolean | null }, {  }>;
  msdyn_isoverwritecustomizations: WebAttribute<msdyn_solutionhistory_Select, { msdyn_isoverwritecustomizations: boolean | null }, {  }>;
  msdyn_ispatch: WebAttribute<msdyn_solutionhistory_Select, { msdyn_ispatch: boolean | null }, {  }>;
  msdyn_maxretries: WebAttribute<msdyn_solutionhistory_Select, { msdyn_maxretries: number | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_solutionhistory_Select, { msdyn_name: string | null }, {  }>;
  msdyn_operation: WebAttribute<msdyn_solutionhistory_Select, { msdyn_operation: msdyn_solutionhistory_msdyn_operation | null }, { msdyn_operation_formatted?: string }>;
  msdyn_packagename: WebAttribute<msdyn_solutionhistory_Select, { msdyn_packagename: string | null }, {  }>;
  msdyn_packageversion: WebAttribute<msdyn_solutionhistory_Select, { msdyn_packageversion: string | null }, {  }>;
  msdyn_publisherid: WebAttribute<msdyn_solutionhistory_Select, { msdyn_publisherid: string | null }, {  }>;
  msdyn_publishername: WebAttribute<msdyn_solutionhistory_Select, { msdyn_publishername: string | null }, {  }>;
  msdyn_result: WebAttribute<msdyn_solutionhistory_Select, { msdyn_result: boolean | null }, {  }>;
  msdyn_retrycount: WebAttribute<msdyn_solutionhistory_Select, { msdyn_retrycount: number | null }, {  }>;
  msdyn_solutionhistoryid: WebAttribute<msdyn_solutionhistory_Select, { msdyn_solutionhistoryid: string | null }, {  }>;
  msdyn_solutionid: WebAttribute<msdyn_solutionhistory_Select, { msdyn_solutionid: string | null }, {  }>;
  msdyn_solutionversion: WebAttribute<msdyn_solutionhistory_Select, { msdyn_solutionversion: string | null }, {  }>;
  msdyn_starttime: WebAttribute<msdyn_solutionhistory_Select, { msdyn_starttime: Date | null }, { msdyn_starttime_formatted?: string }>;
  msdyn_status: WebAttribute<msdyn_solutionhistory_Select, { msdyn_status: msdyn_solutionhistory_msdyn_status | null }, { msdyn_status_formatted?: string }>;
  msdyn_suboperation: WebAttribute<msdyn_solutionhistory_Select, { msdyn_suboperation: msdyn_solutionhistory_msdyn_suboperation | null }, { msdyn_suboperation_formatted?: string }>;
  msdyn_totaltime: WebAttribute<msdyn_solutionhistory_Select, { msdyn_totaltime: number | null }, {  }>;
}
interface msdyn_solutionhistory_Filter {
  msdyn_activityid: string;
  msdyn_correlationid: string;
  msdyn_endtime: Date;
  msdyn_errorcode: string;
  msdyn_exceptionmessage: string;
  msdyn_exceptionstack: string;
  msdyn_ismanaged: boolean;
  msdyn_isoverwritecustomizations: boolean;
  msdyn_ispatch: boolean;
  msdyn_maxretries: number;
  msdyn_name: string;
  msdyn_operation: msdyn_solutionhistory_msdyn_operation;
  msdyn_packagename: string;
  msdyn_packageversion: string;
  msdyn_publisherid: string;
  msdyn_publishername: string;
  msdyn_result: boolean;
  msdyn_retrycount: number;
  msdyn_solutionhistoryid: XQW.Guid;
  msdyn_solutionid: string;
  msdyn_solutionversion: string;
  msdyn_starttime: Date;
  msdyn_status: msdyn_solutionhistory_msdyn_status;
  msdyn_suboperation: msdyn_solutionhistory_msdyn_suboperation;
  msdyn_totaltime: number;
}
interface msdyn_solutionhistory_Expand {
}
interface msdyn_solutionhistory_FormattedResult {
  msdyn_endtime_formatted?: string;
  msdyn_operation_formatted?: string;
  msdyn_starttime_formatted?: string;
  msdyn_status_formatted?: string;
  msdyn_suboperation_formatted?: string;
}
interface msdyn_solutionhistory_Result extends msdyn_solutionhistory_Base, msdyn_solutionhistory_Relationships {
  "@odata.etag": string;
}
interface msdyn_solutionhistory_RelatedOne {
}
interface msdyn_solutionhistory_RelatedMany {
}
interface WebEntitiesRetrieve {
  msdyn_solutionhistories: WebMappingRetrieve<msdyn_solutionhistory_Select,msdyn_solutionhistory_Expand,msdyn_solutionhistory_Filter,msdyn_solutionhistory_Fixed,msdyn_solutionhistory_Result,msdyn_solutionhistory_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_solutionhistories: WebMappingRelated<msdyn_solutionhistory_RelatedOne,msdyn_solutionhistory_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_solutionhistories: WebMappingCUDA<msdyn_solutionhistory_Create,msdyn_solutionhistory_Update,msdyn_solutionhistory_Select>;
}
