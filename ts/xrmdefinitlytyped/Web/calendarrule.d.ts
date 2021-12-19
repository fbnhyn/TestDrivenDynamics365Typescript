interface CalendarRule_Base extends WebEntity {
  businessunitid?: string | null;
  calendarruleid?: string | null;
  createdon?: Date | null;
  description?: string | null;
  duration?: number | null;
  effectiveintervalend?: Date | null;
  effectiveintervalstart?: Date | null;
  effort?: number | null;
  endtime?: Date | null;
  extentcode?: number | null;
  groupdesignator?: string | null;
  ismodified?: boolean | null;
  isselected?: boolean | null;
  issimple?: boolean | null;
  isvaried?: boolean | null;
  modifiedon?: Date | null;
  name?: string | null;
  offset?: number | null;
  organizationid?: string | null;
  pattern?: string | null;
  rank?: number | null;
  starttime?: Date | null;
  subcode?: number | null;
  timecode?: number | null;
  timezonecode?: number | null;
  versionnumber?: number | null;
}
interface CalendarRule_Relationships {
  userentityinstancedata_calendarrule?: UserEntityInstanceData_Result[] | null;
}
interface CalendarRule extends CalendarRule_Base, CalendarRule_Relationships {
  calendarid_bind$calendars?: string | null;
  innercalendarid_bind$calendars?: string | null;
  serviceid_bind$services?: string | null;
}
interface CalendarRule_Create extends CalendarRule {
}
interface CalendarRule_Update extends CalendarRule {
}
interface CalendarRule_Select {
  businessunitid: WebAttribute<CalendarRule_Select, { businessunitid: string | null }, {  }>;
  calendarid_guid: WebAttribute<CalendarRule_Select, { calendarid_guid: string | null }, { calendarid_formatted?: string }>;
  calendarruleid: WebAttribute<CalendarRule_Select, { calendarruleid: string | null }, {  }>;
  createdby_guid: WebAttribute<CalendarRule_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<CalendarRule_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<CalendarRule_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  description: WebAttribute<CalendarRule_Select, { description: string | null }, {  }>;
  duration: WebAttribute<CalendarRule_Select, { duration: number | null }, {  }>;
  effectiveintervalend: WebAttribute<CalendarRule_Select, { effectiveintervalend: Date | null }, { effectiveintervalend_formatted?: string }>;
  effectiveintervalstart: WebAttribute<CalendarRule_Select, { effectiveintervalstart: Date | null }, { effectiveintervalstart_formatted?: string }>;
  effort: WebAttribute<CalendarRule_Select, { effort: number | null }, {  }>;
  endtime: WebAttribute<CalendarRule_Select, { endtime: Date | null }, { endtime_formatted?: string }>;
  extentcode: WebAttribute<CalendarRule_Select, { extentcode: number | null }, {  }>;
  groupdesignator: WebAttribute<CalendarRule_Select, { groupdesignator: string | null }, {  }>;
  innercalendarid_guid: WebAttribute<CalendarRule_Select, { innercalendarid_guid: string | null }, { innercalendarid_formatted?: string }>;
  ismodified: WebAttribute<CalendarRule_Select, { ismodified: boolean | null }, {  }>;
  isselected: WebAttribute<CalendarRule_Select, { isselected: boolean | null }, {  }>;
  issimple: WebAttribute<CalendarRule_Select, { issimple: boolean | null }, {  }>;
  isvaried: WebAttribute<CalendarRule_Select, { isvaried: boolean | null }, {  }>;
  modifiedby_guid: WebAttribute<CalendarRule_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<CalendarRule_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<CalendarRule_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  name: WebAttribute<CalendarRule_Select, { name: string | null }, {  }>;
  offset: WebAttribute<CalendarRule_Select, { offset: number | null }, {  }>;
  organizationid: WebAttribute<CalendarRule_Select, { organizationid: string | null }, {  }>;
  pattern: WebAttribute<CalendarRule_Select, { pattern: string | null }, {  }>;
  rank: WebAttribute<CalendarRule_Select, { rank: number | null }, {  }>;
  serviceid_guid: WebAttribute<CalendarRule_Select, { serviceid_guid: string | null }, { serviceid_formatted?: string }>;
  starttime: WebAttribute<CalendarRule_Select, { starttime: Date | null }, { starttime_formatted?: string }>;
  subcode: WebAttribute<CalendarRule_Select, { subcode: number | null }, {  }>;
  timecode: WebAttribute<CalendarRule_Select, { timecode: number | null }, {  }>;
  timezonecode: WebAttribute<CalendarRule_Select, { timezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<CalendarRule_Select, { versionnumber: number | null }, {  }>;
}
interface CalendarRule_Filter {
  businessunitid: XQW.Guid;
  calendarid_guid: XQW.Guid;
  calendarruleid: XQW.Guid;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  description: string;
  duration: number;
  effectiveintervalend: Date;
  effectiveintervalstart: Date;
  effort: number;
  endtime: Date;
  extentcode: number;
  groupdesignator: string;
  innercalendarid_guid: XQW.Guid;
  ismodified: boolean;
  isselected: boolean;
  issimple: boolean;
  isvaried: boolean;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  name: string;
  offset: number;
  organizationid: XQW.Guid;
  pattern: string;
  rank: number;
  serviceid_guid: XQW.Guid;
  starttime: Date;
  subcode: number;
  timecode: number;
  timezonecode: number;
  versionnumber: number;
}
interface CalendarRule_Expand {
  calendarid: WebExpand<CalendarRule_Expand, Calendar_Select, Calendar_Filter, { calendarid: Calendar_Result }>;
  createdby: WebExpand<CalendarRule_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<CalendarRule_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  innercalendarid: WebExpand<CalendarRule_Expand, Calendar_Select, Calendar_Filter, { innercalendarid: Calendar_Result }>;
  modifiedby: WebExpand<CalendarRule_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<CalendarRule_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  serviceid: WebExpand<CalendarRule_Expand, Service_Select, Service_Filter, { serviceid: Service_Result }>;
  userentityinstancedata_calendarrule: WebExpand<CalendarRule_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { userentityinstancedata_calendarrule: UserEntityInstanceData_Result[] }>;
}
interface CalendarRule_FormattedResult {
  calendarid_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  effectiveintervalend_formatted?: string;
  effectiveintervalstart_formatted?: string;
  endtime_formatted?: string;
  innercalendarid_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  serviceid_formatted?: string;
  starttime_formatted?: string;
}
interface CalendarRule_Result extends CalendarRule_Base, CalendarRule_Relationships {
  "@odata.etag": string;
  calendarid_guid: string | null;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  innercalendarid_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  serviceid_guid: string | null;
}
interface CalendarRule_RelatedOne {
  calendarid: WebMappingRetrieve<Calendar_Select,Calendar_Expand,Calendar_Filter,Calendar_Fixed,Calendar_Result,Calendar_FormattedResult>;
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  innercalendarid: WebMappingRetrieve<Calendar_Select,Calendar_Expand,Calendar_Filter,Calendar_Fixed,Calendar_Result,Calendar_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  serviceid: WebMappingRetrieve<Service_Select,Service_Expand,Service_Filter,Service_Fixed,Service_Result,Service_FormattedResult>;
}
interface CalendarRule_RelatedMany {
  userentityinstancedata_calendarrule: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  calendarrules: WebMappingRetrieve<CalendarRule_Select,CalendarRule_Expand,CalendarRule_Filter,CalendarRule_Fixed,CalendarRule_Result,CalendarRule_FormattedResult>;
}
interface WebEntitiesRelated {
  calendarrules: WebMappingRelated<CalendarRule_RelatedOne,CalendarRule_RelatedMany>;
}
interface WebEntitiesCUDA {
  calendarrules: WebMappingCUDA<CalendarRule_Create,CalendarRule_Update,CalendarRule_Select>;
}
