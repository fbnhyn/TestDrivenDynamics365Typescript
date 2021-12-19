interface RecurrenceRule_Base extends WebEntity {
  createdon?: Date | null;
  dayofmonth?: number | null;
  daysofweekmask?: number | null;
  duration?: number | null;
  effectiveenddate?: Date | null;
  effectivestartdate?: Date | null;
  endtime?: Date | null;
  firstdayofweek?: number | null;
  instance?: recurrencerule_instance | null;
  interval?: number | null;
  isnthmonthly?: boolean | null;
  isnthyearly?: boolean | null;
  isregenerate?: boolean | null;
  isweekdaypattern?: boolean | null;
  modifiedon?: Date | null;
  monthofyear?: recurrencerule_monthofyear | null;
  occurrences?: number | null;
  patternenddate?: Date | null;
  patternendtype?: recurrencerule_patternendtype | null;
  patternstartdate?: Date | null;
  recurrencepatterntype?: recurrencerule_recurrencepatterntype | null;
  ruleid?: string | null;
  starttime?: Date | null;
  versionnumber?: number | null;
}
interface RecurrenceRule_Relationships {
  recurrencerule_recurringappointmentmaster?: RecurringAppointmentMaster_Result[] | null;
}
interface RecurrenceRule extends RecurrenceRule_Base, RecurrenceRule_Relationships {
  objectid_bind$activitypointers?: string | null;
}
interface RecurrenceRule_Create extends RecurrenceRule {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface RecurrenceRule_Update extends RecurrenceRule {
}
interface RecurrenceRule_Select {
  createdby_guid: WebAttribute<RecurrenceRule_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<RecurrenceRule_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<RecurrenceRule_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  dayofmonth: WebAttribute<RecurrenceRule_Select, { dayofmonth: number | null }, {  }>;
  daysofweekmask: WebAttribute<RecurrenceRule_Select, { daysofweekmask: number | null }, {  }>;
  duration: WebAttribute<RecurrenceRule_Select, { duration: number | null }, {  }>;
  effectiveenddate: WebAttribute<RecurrenceRule_Select, { effectiveenddate: Date | null }, { effectiveenddate_formatted?: string }>;
  effectivestartdate: WebAttribute<RecurrenceRule_Select, { effectivestartdate: Date | null }, { effectivestartdate_formatted?: string }>;
  endtime: WebAttribute<RecurrenceRule_Select, { endtime: Date | null }, { endtime_formatted?: string }>;
  firstdayofweek: WebAttribute<RecurrenceRule_Select, { firstdayofweek: number | null }, {  }>;
  instance: WebAttribute<RecurrenceRule_Select, { instance: recurrencerule_instance | null }, { instance_formatted?: string }>;
  interval: WebAttribute<RecurrenceRule_Select, { interval: number | null }, {  }>;
  isnthmonthly: WebAttribute<RecurrenceRule_Select, { isnthmonthly: boolean | null }, {  }>;
  isnthyearly: WebAttribute<RecurrenceRule_Select, { isnthyearly: boolean | null }, {  }>;
  isregenerate: WebAttribute<RecurrenceRule_Select, { isregenerate: boolean | null }, {  }>;
  isweekdaypattern: WebAttribute<RecurrenceRule_Select, { isweekdaypattern: boolean | null }, {  }>;
  modifiedby_guid: WebAttribute<RecurrenceRule_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<RecurrenceRule_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<RecurrenceRule_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  monthofyear: WebAttribute<RecurrenceRule_Select, { monthofyear: recurrencerule_monthofyear | null }, { monthofyear_formatted?: string }>;
  objectid_guid: WebAttribute<RecurrenceRule_Select, { objectid_guid: string | null }, { objectid_formatted?: string }>;
  occurrences: WebAttribute<RecurrenceRule_Select, { occurrences: number | null }, {  }>;
  ownerid_guid: WebAttribute<RecurrenceRule_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<RecurrenceRule_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<RecurrenceRule_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<RecurrenceRule_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  patternenddate: WebAttribute<RecurrenceRule_Select, { patternenddate: Date | null }, { patternenddate_formatted?: string }>;
  patternendtype: WebAttribute<RecurrenceRule_Select, { patternendtype: recurrencerule_patternendtype | null }, { patternendtype_formatted?: string }>;
  patternstartdate: WebAttribute<RecurrenceRule_Select, { patternstartdate: Date | null }, { patternstartdate_formatted?: string }>;
  recurrencepatterntype: WebAttribute<RecurrenceRule_Select, { recurrencepatterntype: recurrencerule_recurrencepatterntype | null }, { recurrencepatterntype_formatted?: string }>;
  ruleid: WebAttribute<RecurrenceRule_Select, { ruleid: string | null }, {  }>;
  starttime: WebAttribute<RecurrenceRule_Select, { starttime: Date | null }, { starttime_formatted?: string }>;
  versionnumber: WebAttribute<RecurrenceRule_Select, { versionnumber: number | null }, {  }>;
}
interface RecurrenceRule_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  dayofmonth: number;
  daysofweekmask: number;
  duration: number;
  effectiveenddate: Date;
  effectivestartdate: Date;
  endtime: Date;
  firstdayofweek: number;
  instance: recurrencerule_instance;
  interval: number;
  isnthmonthly: boolean;
  isnthyearly: boolean;
  isregenerate: boolean;
  isweekdaypattern: boolean;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  monthofyear: recurrencerule_monthofyear;
  objectid_guid: XQW.Guid;
  occurrences: number;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  patternenddate: Date;
  patternendtype: recurrencerule_patternendtype;
  patternstartdate: Date;
  recurrencepatterntype: recurrencerule_recurrencepatterntype;
  ruleid: XQW.Guid;
  starttime: Date;
  versionnumber: number;
}
interface RecurrenceRule_Expand {
  createdby: WebExpand<RecurrenceRule_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<RecurrenceRule_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<RecurrenceRule_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<RecurrenceRule_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  objectid: WebExpand<RecurrenceRule_Expand, ActivityPointer_Select, ActivityPointer_Filter, { objectid: ActivityPointer_Result }>;
  ownerid: WebExpand<RecurrenceRule_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<RecurrenceRule_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  recurrencerule_recurringappointmentmaster: WebExpand<RecurrenceRule_Expand, RecurringAppointmentMaster_Select, RecurringAppointmentMaster_Filter, { recurrencerule_recurringappointmentmaster: RecurringAppointmentMaster_Result[] }>;
}
interface RecurrenceRule_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  effectiveenddate_formatted?: string;
  effectivestartdate_formatted?: string;
  endtime_formatted?: string;
  instance_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  monthofyear_formatted?: string;
  objectid_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  patternenddate_formatted?: string;
  patternendtype_formatted?: string;
  patternstartdate_formatted?: string;
  recurrencepatterntype_formatted?: string;
  starttime_formatted?: string;
}
interface RecurrenceRule_Result extends RecurrenceRule_Base, RecurrenceRule_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  objectid_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface RecurrenceRule_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  objectid: WebMappingRetrieve<ActivityPointer_Select,ActivityPointer_Expand,ActivityPointer_Filter,ActivityPointer_Fixed,ActivityPointer_Result,ActivityPointer_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
}
interface RecurrenceRule_RelatedMany {
  recurrencerule_recurringappointmentmaster: WebMappingRetrieve<RecurringAppointmentMaster_Select,RecurringAppointmentMaster_Expand,RecurringAppointmentMaster_Filter,RecurringAppointmentMaster_Fixed,RecurringAppointmentMaster_Result,RecurringAppointmentMaster_FormattedResult>;
}
interface WebEntitiesRetrieve {
  recurrencerules: WebMappingRetrieve<RecurrenceRule_Select,RecurrenceRule_Expand,RecurrenceRule_Filter,RecurrenceRule_Fixed,RecurrenceRule_Result,RecurrenceRule_FormattedResult>;
}
interface WebEntitiesRelated {
  recurrencerules: WebMappingRelated<RecurrenceRule_RelatedOne,RecurrenceRule_RelatedMany>;
}
interface WebEntitiesCUDA {
  recurrencerules: WebMappingCUDA<RecurrenceRule_Create,RecurrenceRule_Update,RecurrenceRule_Select>;
}
