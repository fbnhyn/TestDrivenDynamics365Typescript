interface TraceRegarding_Base extends WebEntity {
  regardingobjecttypecodeforsharing?: string | null;
  traceregardingid?: string | null;
}
interface TraceRegarding_Relationships {
  regardingobjectid_emailserverprofile?: EmailServerProfile_Result | null;
  regardingobjectid_mailbox?: Mailbox_Result | null;
  tracelog_TraceRegardings?: TraceLog_Result[] | null;
}
interface TraceRegarding extends TraceRegarding_Base, TraceRegarding_Relationships {
}
interface TraceRegarding_Create extends TraceRegarding {
  regardingobjectid_emailserverprofile_bind$emailserverprofiles?: string | null;
  regardingobjectid_mailbox_bind$mailboxes?: string | null;
}
interface TraceRegarding_Update extends TraceRegarding {
}
interface TraceRegarding_Select {
  regardingobjectid_guid: WebAttribute<TraceRegarding_Select, { regardingobjectid_guid: string | null }, { regardingobjectid_formatted?: string }>;
  regardingobjectownerid_guid: WebAttribute<TraceRegarding_Select, { regardingobjectownerid_guid: string | null }, { regardingobjectownerid_formatted?: string }>;
  regardingobjectowningbusinessunit_guid: WebAttribute<TraceRegarding_Select, { regardingobjectowningbusinessunit_guid: string | null }, { regardingobjectowningbusinessunit_formatted?: string }>;
  regardingobjecttypecodeforsharing: WebAttribute<TraceRegarding_Select, { regardingobjecttypecodeforsharing: string | null }, {  }>;
  traceregardingid: WebAttribute<TraceRegarding_Select, { traceregardingid: string | null }, {  }>;
}
interface TraceRegarding_Filter {
  regardingobjectid_guid: XQW.Guid;
  regardingobjectownerid_guid: XQW.Guid;
  regardingobjectowningbusinessunit_guid: XQW.Guid;
  regardingobjecttypecodeforsharing: string;
  traceregardingid: XQW.Guid;
}
interface TraceRegarding_Expand {
  regardingobjectid_emailserverprofile: WebExpand<TraceRegarding_Expand, EmailServerProfile_Select, EmailServerProfile_Filter, { regardingobjectid_emailserverprofile: EmailServerProfile_Result }>;
  regardingobjectid_mailbox: WebExpand<TraceRegarding_Expand, Mailbox_Select, Mailbox_Filter, { regardingobjectid_mailbox: Mailbox_Result }>;
  regardingobjectowningbusinessunit: WebExpand<TraceRegarding_Expand, BusinessUnit_Select, BusinessUnit_Filter, { regardingobjectowningbusinessunit: BusinessUnit_Result }>;
  tracelog_TraceRegardings: WebExpand<TraceRegarding_Expand, TraceLog_Select, TraceLog_Filter, { tracelog_TraceRegardings: TraceLog_Result[] }>;
}
interface TraceRegarding_FormattedResult {
  regardingobjectid_formatted?: string;
  regardingobjectownerid_formatted?: string;
  regardingobjectowningbusinessunit_formatted?: string;
}
interface TraceRegarding_Result extends TraceRegarding_Base, TraceRegarding_Relationships {
  "@odata.etag": string;
  regardingobjectid_guid: string | null;
  regardingobjectownerid_guid: string | null;
  regardingobjectowningbusinessunit_guid: string | null;
}
interface TraceRegarding_RelatedOne {
  regardingobjectid_emailserverprofile: WebMappingRetrieve<EmailServerProfile_Select,EmailServerProfile_Expand,EmailServerProfile_Filter,EmailServerProfile_Fixed,EmailServerProfile_Result,EmailServerProfile_FormattedResult>;
  regardingobjectid_mailbox: WebMappingRetrieve<Mailbox_Select,Mailbox_Expand,Mailbox_Filter,Mailbox_Fixed,Mailbox_Result,Mailbox_FormattedResult>;
  regardingobjectowningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
}
interface TraceRegarding_RelatedMany {
  tracelog_TraceRegardings: WebMappingRetrieve<TraceLog_Select,TraceLog_Expand,TraceLog_Filter,TraceLog_Fixed,TraceLog_Result,TraceLog_FormattedResult>;
}
interface WebEntitiesRetrieve {
  traceregardings: WebMappingRetrieve<TraceRegarding_Select,TraceRegarding_Expand,TraceRegarding_Filter,TraceRegarding_Fixed,TraceRegarding_Result,TraceRegarding_FormattedResult>;
}
interface WebEntitiesRelated {
  traceregardings: WebMappingRelated<TraceRegarding_RelatedOne,TraceRegarding_RelatedMany>;
}
interface WebEntitiesCUDA {
  traceregardings: WebMappingCUDA<TraceRegarding_Create,TraceRegarding_Update,TraceRegarding_Select>;
}
