interface Calendar_Base extends WebEntity {
  calendarid?: string | null;
  createdon?: Date | null;
  description?: string | null;
  isshared?: boolean | null;
  modifiedon?: Date | null;
  name?: string | null;
  primaryuserid?: string | null;
  type?: calendar_type | null;
  versionnumber?: number | null;
}
interface Calendar_Relationships {
  BusinessUnit_Calendar?: BusinessUnit_Result[] | null;
  Calendar_Annotation?: Annotation_Result[] | null;
  Calendar_AsyncOperations?: AsyncOperation_Result[] | null;
  Calendar_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  calendar_bookableresources?: BookableResource_Result[] | null;
  calendar_calendar_rules?: CalendarRule_Result[] | null;
  calendar_customercalendar_holidaycalendar?: Calendar_Result[] | null;
  calendar_equipment?: Equipment_Result[] | null;
  calendar_organization?: Organization_Result[] | null;
  calendar_services?: Service_Result[] | null;
  calendar_slaitem?: SLAItem_Result[] | null;
  calendar_system_users?: SystemUser_Result[] | null;
  inner_calendar_calendar_rules?: CalendarRule_Result[] | null;
  slabase_businesshoursid?: SLA_Result[] | null;
  userentityinstancedata_calendar?: UserEntityInstanceData_Result[] | null;
}
interface Calendar extends Calendar_Base, Calendar_Relationships {
  businessunitid_bind$businessunits?: string | null;
  holidayschedulecalendarid_bind$calendars?: string | null;
}
interface Calendar_Create extends Calendar {
}
interface Calendar_Update extends Calendar {
}
interface Calendar_Select {
  businessunitid_guid: WebAttribute<Calendar_Select, { businessunitid_guid: string | null }, { businessunitid_formatted?: string }>;
  calendarid: WebAttribute<Calendar_Select, { calendarid: string | null }, {  }>;
  createdby_guid: WebAttribute<Calendar_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<Calendar_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<Calendar_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  description: WebAttribute<Calendar_Select, { description: string | null }, {  }>;
  holidayschedulecalendarid_guid: WebAttribute<Calendar_Select, { holidayschedulecalendarid_guid: string | null }, { holidayschedulecalendarid_formatted?: string }>;
  isshared: WebAttribute<Calendar_Select, { isshared: boolean | null }, {  }>;
  modifiedby_guid: WebAttribute<Calendar_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<Calendar_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<Calendar_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  name: WebAttribute<Calendar_Select, { name: string | null }, {  }>;
  organizationid_guid: WebAttribute<Calendar_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  primaryuserid: WebAttribute<Calendar_Select, { primaryuserid: string | null }, {  }>;
  type: WebAttribute<Calendar_Select, { type: calendar_type | null }, { type_formatted?: string }>;
  versionnumber: WebAttribute<Calendar_Select, { versionnumber: number | null }, {  }>;
}
interface Calendar_Filter {
  businessunitid_guid: XQW.Guid;
  calendarid: XQW.Guid;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  description: string;
  holidayschedulecalendarid_guid: XQW.Guid;
  isshared: boolean;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  name: string;
  organizationid_guid: XQW.Guid;
  primaryuserid: XQW.Guid;
  type: calendar_type;
  versionnumber: number;
}
interface Calendar_Expand {
  BusinessUnit_Calendar: WebExpand<Calendar_Expand, BusinessUnit_Select, BusinessUnit_Filter, { BusinessUnit_Calendar: BusinessUnit_Result[] }>;
  Calendar_Annotation: WebExpand<Calendar_Expand, Annotation_Select, Annotation_Filter, { Calendar_Annotation: Annotation_Result[] }>;
  Calendar_AsyncOperations: WebExpand<Calendar_Expand, AsyncOperation_Select, AsyncOperation_Filter, { Calendar_AsyncOperations: AsyncOperation_Result[] }>;
  Calendar_BulkDeleteFailures: WebExpand<Calendar_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { Calendar_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  businessunitid: WebExpand<Calendar_Expand, BusinessUnit_Select, BusinessUnit_Filter, { businessunitid: BusinessUnit_Result }>;
  calendar_bookableresources: WebExpand<Calendar_Expand, BookableResource_Select, BookableResource_Filter, { calendar_bookableresources: BookableResource_Result[] }>;
  calendar_calendar_rules: WebExpand<Calendar_Expand, CalendarRule_Select, CalendarRule_Filter, { calendar_calendar_rules: CalendarRule_Result[] }>;
  calendar_customercalendar_holidaycalendar: WebExpand<Calendar_Expand, Calendar_Select, Calendar_Filter, { calendar_customercalendar_holidaycalendar: Calendar_Result[] }>;
  calendar_equipment: WebExpand<Calendar_Expand, Equipment_Select, Equipment_Filter, { calendar_equipment: Equipment_Result[] }>;
  calendar_organization: WebExpand<Calendar_Expand, Organization_Select, Organization_Filter, { calendar_organization: Organization_Result[] }>;
  calendar_services: WebExpand<Calendar_Expand, Service_Select, Service_Filter, { calendar_services: Service_Result[] }>;
  calendar_slaitem: WebExpand<Calendar_Expand, SLAItem_Select, SLAItem_Filter, { calendar_slaitem: SLAItem_Result[] }>;
  calendar_system_users: WebExpand<Calendar_Expand, SystemUser_Select, SystemUser_Filter, { calendar_system_users: SystemUser_Result[] }>;
  createdby: WebExpand<Calendar_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<Calendar_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  holidayschedulecalendarid: WebExpand<Calendar_Expand, Calendar_Select, Calendar_Filter, { holidayschedulecalendarid: Calendar_Result }>;
  inner_calendar_calendar_rules: WebExpand<Calendar_Expand, CalendarRule_Select, CalendarRule_Filter, { inner_calendar_calendar_rules: CalendarRule_Result[] }>;
  modifiedby: WebExpand<Calendar_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<Calendar_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  organizationid: WebExpand<Calendar_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
  slabase_businesshoursid: WebExpand<Calendar_Expand, SLA_Select, SLA_Filter, { slabase_businesshoursid: SLA_Result[] }>;
  userentityinstancedata_calendar: WebExpand<Calendar_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { userentityinstancedata_calendar: UserEntityInstanceData_Result[] }>;
}
interface Calendar_FormattedResult {
  businessunitid_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  holidayschedulecalendarid_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  organizationid_formatted?: string;
  type_formatted?: string;
}
interface Calendar_Result extends Calendar_Base, Calendar_Relationships {
  "@odata.etag": string;
  businessunitid_guid: string | null;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  holidayschedulecalendarid_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
}
interface Calendar_RelatedOne {
  businessunitid: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  holidayschedulecalendarid: WebMappingRetrieve<Calendar_Select,Calendar_Expand,Calendar_Filter,Calendar_Fixed,Calendar_Result,Calendar_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
}
interface Calendar_RelatedMany {
  BusinessUnit_Calendar: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  Calendar_Annotation: WebMappingRetrieve<Annotation_Select,Annotation_Expand,Annotation_Filter,Annotation_Fixed,Annotation_Result,Annotation_FormattedResult>;
  Calendar_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  Calendar_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  calendar_bookableresources: WebMappingRetrieve<BookableResource_Select,BookableResource_Expand,BookableResource_Filter,BookableResource_Fixed,BookableResource_Result,BookableResource_FormattedResult>;
  calendar_calendar_rules: WebMappingRetrieve<CalendarRule_Select,CalendarRule_Expand,CalendarRule_Filter,CalendarRule_Fixed,CalendarRule_Result,CalendarRule_FormattedResult>;
  calendar_customercalendar_holidaycalendar: WebMappingRetrieve<Calendar_Select,Calendar_Expand,Calendar_Filter,Calendar_Fixed,Calendar_Result,Calendar_FormattedResult>;
  calendar_equipment: WebMappingRetrieve<Equipment_Select,Equipment_Expand,Equipment_Filter,Equipment_Fixed,Equipment_Result,Equipment_FormattedResult>;
  calendar_organization: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
  calendar_services: WebMappingRetrieve<Service_Select,Service_Expand,Service_Filter,Service_Fixed,Service_Result,Service_FormattedResult>;
  calendar_slaitem: WebMappingRetrieve<SLAItem_Select,SLAItem_Expand,SLAItem_Filter,SLAItem_Fixed,SLAItem_Result,SLAItem_FormattedResult>;
  calendar_system_users: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  inner_calendar_calendar_rules: WebMappingRetrieve<CalendarRule_Select,CalendarRule_Expand,CalendarRule_Filter,CalendarRule_Fixed,CalendarRule_Result,CalendarRule_FormattedResult>;
  slabase_businesshoursid: WebMappingRetrieve<SLA_Select,SLA_Expand,SLA_Filter,SLA_Fixed,SLA_Result,SLA_FormattedResult>;
  userentityinstancedata_calendar: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  calendars: WebMappingRetrieve<Calendar_Select,Calendar_Expand,Calendar_Filter,Calendar_Fixed,Calendar_Result,Calendar_FormattedResult>;
}
interface WebEntitiesRelated {
  calendars: WebMappingRelated<Calendar_RelatedOne,Calendar_RelatedMany>;
}
interface WebEntitiesCUDA {
  calendars: WebMappingCUDA<Calendar_Create,Calendar_Update,Calendar_Select>;
}
