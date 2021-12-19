interface TimeZoneRule_Base extends WebEntity {
  bias?: number | null;
  createdon?: Date | null;
  daylightbias?: number | null;
  daylightday?: number | null;
  daylightdayofweek?: number | null;
  daylighthour?: number | null;
  daylightminute?: number | null;
  daylightmonth?: number | null;
  daylightsecond?: number | null;
  daylightyear?: number | null;
  effectivedatetime?: Date | null;
  modifiedon?: Date | null;
  standardbias?: number | null;
  standardday?: number | null;
  standarddayofweek?: number | null;
  standardhour?: number | null;
  standardminute?: number | null;
  standardmonth?: number | null;
  standardsecond?: number | null;
  standardyear?: number | null;
  timezoneruleid?: string | null;
  timezoneruleversionnumber?: number | null;
  versionnumber?: number | null;
}
interface TimeZoneRule_Relationships {
  userentityinstancedata_timezonerule?: UserEntityInstanceData_Result[] | null;
}
interface TimeZoneRule extends TimeZoneRule_Base, TimeZoneRule_Relationships {
  timezonedefinitionid_bind$timezonedefinitions?: string | null;
}
interface TimeZoneRule_Create extends TimeZoneRule {
}
interface TimeZoneRule_Update extends TimeZoneRule {
}
interface TimeZoneRule_Select {
  bias: WebAttribute<TimeZoneRule_Select, { bias: number | null }, {  }>;
  createdby_guid: WebAttribute<TimeZoneRule_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<TimeZoneRule_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<TimeZoneRule_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  daylightbias: WebAttribute<TimeZoneRule_Select, { daylightbias: number | null }, {  }>;
  daylightday: WebAttribute<TimeZoneRule_Select, { daylightday: number | null }, {  }>;
  daylightdayofweek: WebAttribute<TimeZoneRule_Select, { daylightdayofweek: number | null }, {  }>;
  daylighthour: WebAttribute<TimeZoneRule_Select, { daylighthour: number | null }, {  }>;
  daylightminute: WebAttribute<TimeZoneRule_Select, { daylightminute: number | null }, {  }>;
  daylightmonth: WebAttribute<TimeZoneRule_Select, { daylightmonth: number | null }, {  }>;
  daylightsecond: WebAttribute<TimeZoneRule_Select, { daylightsecond: number | null }, {  }>;
  daylightyear: WebAttribute<TimeZoneRule_Select, { daylightyear: number | null }, {  }>;
  effectivedatetime: WebAttribute<TimeZoneRule_Select, { effectivedatetime: Date | null }, { effectivedatetime_formatted?: string }>;
  modifiedby_guid: WebAttribute<TimeZoneRule_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<TimeZoneRule_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<TimeZoneRule_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  organizationid_guid: WebAttribute<TimeZoneRule_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  standardbias: WebAttribute<TimeZoneRule_Select, { standardbias: number | null }, {  }>;
  standardday: WebAttribute<TimeZoneRule_Select, { standardday: number | null }, {  }>;
  standarddayofweek: WebAttribute<TimeZoneRule_Select, { standarddayofweek: number | null }, {  }>;
  standardhour: WebAttribute<TimeZoneRule_Select, { standardhour: number | null }, {  }>;
  standardminute: WebAttribute<TimeZoneRule_Select, { standardminute: number | null }, {  }>;
  standardmonth: WebAttribute<TimeZoneRule_Select, { standardmonth: number | null }, {  }>;
  standardsecond: WebAttribute<TimeZoneRule_Select, { standardsecond: number | null }, {  }>;
  standardyear: WebAttribute<TimeZoneRule_Select, { standardyear: number | null }, {  }>;
  timezonedefinitionid_guid: WebAttribute<TimeZoneRule_Select, { timezonedefinitionid_guid: string | null }, { timezonedefinitionid_formatted?: string }>;
  timezoneruleid: WebAttribute<TimeZoneRule_Select, { timezoneruleid: string | null }, {  }>;
  timezoneruleversionnumber: WebAttribute<TimeZoneRule_Select, { timezoneruleversionnumber: number | null }, {  }>;
  versionnumber: WebAttribute<TimeZoneRule_Select, { versionnumber: number | null }, {  }>;
}
interface TimeZoneRule_Filter {
  bias: number;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  daylightbias: number;
  daylightday: number;
  daylightdayofweek: number;
  daylighthour: number;
  daylightminute: number;
  daylightmonth: number;
  daylightsecond: number;
  daylightyear: number;
  effectivedatetime: Date;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  organizationid_guid: XQW.Guid;
  standardbias: number;
  standardday: number;
  standarddayofweek: number;
  standardhour: number;
  standardminute: number;
  standardmonth: number;
  standardsecond: number;
  standardyear: number;
  timezonedefinitionid_guid: XQW.Guid;
  timezoneruleid: XQW.Guid;
  timezoneruleversionnumber: number;
  versionnumber: number;
}
interface TimeZoneRule_Expand {
  createdby: WebExpand<TimeZoneRule_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<TimeZoneRule_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<TimeZoneRule_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<TimeZoneRule_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  timezonedefinitionid: WebExpand<TimeZoneRule_Expand, TimeZoneDefinition_Select, TimeZoneDefinition_Filter, { timezonedefinitionid: TimeZoneDefinition_Result }>;
  userentityinstancedata_timezonerule: WebExpand<TimeZoneRule_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { userentityinstancedata_timezonerule: UserEntityInstanceData_Result[] }>;
}
interface TimeZoneRule_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  effectivedatetime_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  organizationid_formatted?: string;
  timezonedefinitionid_formatted?: string;
}
interface TimeZoneRule_Result extends TimeZoneRule_Base, TimeZoneRule_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
  timezonedefinitionid_guid: string | null;
}
interface TimeZoneRule_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  timezonedefinitionid: WebMappingRetrieve<TimeZoneDefinition_Select,TimeZoneDefinition_Expand,TimeZoneDefinition_Filter,TimeZoneDefinition_Fixed,TimeZoneDefinition_Result,TimeZoneDefinition_FormattedResult>;
}
interface TimeZoneRule_RelatedMany {
  userentityinstancedata_timezonerule: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  timezonerules: WebMappingRetrieve<TimeZoneRule_Select,TimeZoneRule_Expand,TimeZoneRule_Filter,TimeZoneRule_Fixed,TimeZoneRule_Result,TimeZoneRule_FormattedResult>;
}
interface WebEntitiesRelated {
  timezonerules: WebMappingRelated<TimeZoneRule_RelatedOne,TimeZoneRule_RelatedMany>;
}
interface WebEntitiesCUDA {
  timezonerules: WebMappingCUDA<TimeZoneRule_Create,TimeZoneRule_Update,TimeZoneRule_Select>;
}
