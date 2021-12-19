interface msdyn_suggestedactivity_Base extends WebEntity {
  msdyn_activitytype?: string | null;
  msdyn_bodypreview?: string | null;
  msdyn_createddate?: Date | null;
  msdyn_duration?: string | null;
  msdyn_endtime?: Date | null;
  msdyn_exchangeweblink?: string | null;
  msdyn_importance?: string | null;
  msdyn_location?: string | null;
  msdyn_regardingname?: string | null;
  msdyn_sender?: string | null;
  msdyn_sendername?: string | null;
  msdyn_starttime?: Date | null;
  msdyn_subject?: string | null;
  msdyn_suggestedactivityid?: string | null;
  msdyn_to?: string | null;
}
interface msdyn_suggestedactivity_Relationships {
}
interface msdyn_suggestedactivity extends msdyn_suggestedactivity_Base, msdyn_suggestedactivity_Relationships {
}
interface msdyn_suggestedactivity_Create extends msdyn_suggestedactivity {
}
interface msdyn_suggestedactivity_Update extends msdyn_suggestedactivity {
}
interface msdyn_suggestedactivity_Select {
  msdyn_activitytype: WebAttribute<msdyn_suggestedactivity_Select, { msdyn_activitytype: string | null }, {  }>;
  msdyn_bodypreview: WebAttribute<msdyn_suggestedactivity_Select, { msdyn_bodypreview: string | null }, {  }>;
  msdyn_createddate: WebAttribute<msdyn_suggestedactivity_Select, { msdyn_createddate: Date | null }, { msdyn_createddate_formatted?: string }>;
  msdyn_duration: WebAttribute<msdyn_suggestedactivity_Select, { msdyn_duration: string | null }, {  }>;
  msdyn_endtime: WebAttribute<msdyn_suggestedactivity_Select, { msdyn_endtime: Date | null }, { msdyn_endtime_formatted?: string }>;
  msdyn_exchangeweblink: WebAttribute<msdyn_suggestedactivity_Select, { msdyn_exchangeweblink: string | null }, {  }>;
  msdyn_importance: WebAttribute<msdyn_suggestedactivity_Select, { msdyn_importance: string | null }, {  }>;
  msdyn_location: WebAttribute<msdyn_suggestedactivity_Select, { msdyn_location: string | null }, {  }>;
  msdyn_regardingid_guid: WebAttribute<msdyn_suggestedactivity_Select, { msdyn_regardingid_guid: string | null }, { msdyn_regardingid_formatted?: string }>;
  msdyn_regardingname: WebAttribute<msdyn_suggestedactivity_Select, { msdyn_regardingname: string | null }, {  }>;
  msdyn_sender: WebAttribute<msdyn_suggestedactivity_Select, { msdyn_sender: string | null }, {  }>;
  msdyn_sendername: WebAttribute<msdyn_suggestedactivity_Select, { msdyn_sendername: string | null }, {  }>;
  msdyn_starttime: WebAttribute<msdyn_suggestedactivity_Select, { msdyn_starttime: Date | null }, { msdyn_starttime_formatted?: string }>;
  msdyn_subject: WebAttribute<msdyn_suggestedactivity_Select, { msdyn_subject: string | null }, {  }>;
  msdyn_suggestedactivityid: WebAttribute<msdyn_suggestedactivity_Select, { msdyn_suggestedactivityid: string | null }, {  }>;
  msdyn_to: WebAttribute<msdyn_suggestedactivity_Select, { msdyn_to: string | null }, {  }>;
}
interface msdyn_suggestedactivity_Filter {
  msdyn_activitytype: string;
  msdyn_bodypreview: string;
  msdyn_createddate: Date;
  msdyn_duration: string;
  msdyn_endtime: Date;
  msdyn_exchangeweblink: string;
  msdyn_importance: string;
  msdyn_location: string;
  msdyn_regardingid_guid: XQW.Guid;
  msdyn_regardingname: string;
  msdyn_sender: string;
  msdyn_sendername: string;
  msdyn_starttime: Date;
  msdyn_subject: string;
  msdyn_suggestedactivityid: XQW.Guid;
  msdyn_to: string;
}
interface msdyn_suggestedactivity_Expand {
}
interface msdyn_suggestedactivity_FormattedResult {
  msdyn_createddate_formatted?: string;
  msdyn_endtime_formatted?: string;
  msdyn_regardingid_formatted?: string;
  msdyn_starttime_formatted?: string;
}
interface msdyn_suggestedactivity_Result extends msdyn_suggestedactivity_Base, msdyn_suggestedactivity_Relationships {
  "@odata.etag": string;
  msdyn_regardingid_guid: string | null;
}
interface msdyn_suggestedactivity_RelatedOne {
}
interface msdyn_suggestedactivity_RelatedMany {
}
interface WebEntitiesRetrieve {
  msdyn_suggestedactivities: WebMappingRetrieve<msdyn_suggestedactivity_Select,msdyn_suggestedactivity_Expand,msdyn_suggestedactivity_Filter,msdyn_suggestedactivity_Fixed,msdyn_suggestedactivity_Result,msdyn_suggestedactivity_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_suggestedactivities: WebMappingRelated<msdyn_suggestedactivity_RelatedOne,msdyn_suggestedactivity_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_suggestedactivities: WebMappingCUDA<msdyn_suggestedactivity_Create,msdyn_suggestedactivity_Update,msdyn_suggestedactivity_Select>;
}
