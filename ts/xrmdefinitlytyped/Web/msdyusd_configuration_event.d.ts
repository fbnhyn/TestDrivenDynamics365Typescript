interface msdyusd_configuration_event_Base extends WebEntity {
  msdyusd_configuration_eventid?: string | null;
  msdyusd_configurationid?: string | null;
  msdyusd_uiieventid?: string | null;
  versionnumber?: number | null;
}
interface msdyusd_configuration_event_Relationships {
  msdyusd_configuration_event?: msdyusd_uiievent_Result[] | null;
}
interface msdyusd_configuration_event extends msdyusd_configuration_event_Base, msdyusd_configuration_event_Relationships {
}
interface msdyusd_configuration_event_Create extends msdyusd_configuration_event {
}
interface msdyusd_configuration_event_Update extends msdyusd_configuration_event {
}
interface msdyusd_configuration_event_Select {
  msdyusd_configuration_eventid: WebAttribute<msdyusd_configuration_event_Select, { msdyusd_configuration_eventid: string | null }, {  }>;
  msdyusd_configurationid: WebAttribute<msdyusd_configuration_event_Select, { msdyusd_configurationid: string | null }, {  }>;
  msdyusd_uiieventid: WebAttribute<msdyusd_configuration_event_Select, { msdyusd_uiieventid: string | null }, {  }>;
  versionnumber: WebAttribute<msdyusd_configuration_event_Select, { versionnumber: number | null }, {  }>;
}
interface msdyusd_configuration_event_Filter {
  msdyusd_configuration_eventid: XQW.Guid;
  msdyusd_configurationid: XQW.Guid;
  msdyusd_uiieventid: XQW.Guid;
  versionnumber: number;
}
interface msdyusd_configuration_event_Expand {
  msdyusd_configuration_event: WebExpand<msdyusd_configuration_event_Expand, msdyusd_uiievent_Select, msdyusd_uiievent_Filter, { msdyusd_configuration_event: msdyusd_uiievent_Result[] }>;
}
interface msdyusd_configuration_event_FormattedResult {
}
interface msdyusd_configuration_event_Result extends msdyusd_configuration_event_Base, msdyusd_configuration_event_Relationships {
  "@odata.etag": string;
}
interface msdyusd_configuration_event_RelatedOne {
}
interface msdyusd_configuration_event_RelatedMany {
  msdyusd_configuration_event: WebMappingRetrieve<msdyusd_uiievent_Select,msdyusd_uiievent_Expand,msdyusd_uiievent_Filter,msdyusd_uiievent_Fixed,msdyusd_uiievent_Result,msdyusd_uiievent_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyusd_configuration_eventset: WebMappingRetrieve<msdyusd_configuration_event_Select,msdyusd_configuration_event_Expand,msdyusd_configuration_event_Filter,msdyusd_configuration_event_Fixed,msdyusd_configuration_event_Result,msdyusd_configuration_event_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyusd_configuration_eventset: WebMappingRelated<msdyusd_configuration_event_RelatedOne,msdyusd_configuration_event_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyusd_configuration_eventset: WebMappingCUDA<msdyusd_configuration_event_Create,msdyusd_configuration_event_Update,msdyusd_configuration_event_Select>;
}
