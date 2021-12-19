interface TimeZoneDefinition_Base extends WebEntity {
  bias?: number | null;
  createdon?: Date | null;
  daylightname?: string | null;
  modifiedon?: Date | null;
  retiredorder?: number | null;
  standardname?: string | null;
  timezonecode?: number | null;
  timezonedefinitionid?: string | null;
  userinterfacename?: string | null;
  versionnumber?: number | null;
}
interface TimeZoneDefinition_Relationships {
  lk_timezonelocalizedname_timezonedefinitionid?: TimeZoneLocalizedName_Result[] | null;
  lk_timezonerule_timezonedefinitionid?: TimeZoneRule_Result[] | null;
  userentityinstancedata_timezonedefinition?: UserEntityInstanceData_Result[] | null;
}
interface TimeZoneDefinition extends TimeZoneDefinition_Base, TimeZoneDefinition_Relationships {
}
interface TimeZoneDefinition_Create extends TimeZoneDefinition {
}
interface TimeZoneDefinition_Update extends TimeZoneDefinition {
}
interface TimeZoneDefinition_Select {
  bias: WebAttribute<TimeZoneDefinition_Select, { bias: number | null }, {  }>;
  createdby_guid: WebAttribute<TimeZoneDefinition_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<TimeZoneDefinition_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<TimeZoneDefinition_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  daylightname: WebAttribute<TimeZoneDefinition_Select, { daylightname: string | null }, {  }>;
  modifiedby_guid: WebAttribute<TimeZoneDefinition_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<TimeZoneDefinition_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<TimeZoneDefinition_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  organizationid_guid: WebAttribute<TimeZoneDefinition_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  retiredorder: WebAttribute<TimeZoneDefinition_Select, { retiredorder: number | null }, {  }>;
  standardname: WebAttribute<TimeZoneDefinition_Select, { standardname: string | null }, {  }>;
  timezonecode: WebAttribute<TimeZoneDefinition_Select, { timezonecode: number | null }, {  }>;
  timezonedefinitionid: WebAttribute<TimeZoneDefinition_Select, { timezonedefinitionid: string | null }, {  }>;
  userinterfacename: WebAttribute<TimeZoneDefinition_Select, { userinterfacename: string | null }, {  }>;
  versionnumber: WebAttribute<TimeZoneDefinition_Select, { versionnumber: number | null }, {  }>;
}
interface TimeZoneDefinition_Filter {
  bias: number;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  daylightname: string;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  organizationid_guid: XQW.Guid;
  retiredorder: number;
  standardname: string;
  timezonecode: number;
  timezonedefinitionid: XQW.Guid;
  userinterfacename: string;
  versionnumber: number;
}
interface TimeZoneDefinition_Expand {
  createdby: WebExpand<TimeZoneDefinition_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<TimeZoneDefinition_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  lk_timezonelocalizedname_timezonedefinitionid: WebExpand<TimeZoneDefinition_Expand, TimeZoneLocalizedName_Select, TimeZoneLocalizedName_Filter, { lk_timezonelocalizedname_timezonedefinitionid: TimeZoneLocalizedName_Result[] }>;
  lk_timezonerule_timezonedefinitionid: WebExpand<TimeZoneDefinition_Expand, TimeZoneRule_Select, TimeZoneRule_Filter, { lk_timezonerule_timezonedefinitionid: TimeZoneRule_Result[] }>;
  modifiedby: WebExpand<TimeZoneDefinition_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<TimeZoneDefinition_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  userentityinstancedata_timezonedefinition: WebExpand<TimeZoneDefinition_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { userentityinstancedata_timezonedefinition: UserEntityInstanceData_Result[] }>;
}
interface TimeZoneDefinition_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  organizationid_formatted?: string;
}
interface TimeZoneDefinition_Result extends TimeZoneDefinition_Base, TimeZoneDefinition_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
}
interface TimeZoneDefinition_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface TimeZoneDefinition_RelatedMany {
  lk_timezonelocalizedname_timezonedefinitionid: WebMappingRetrieve<TimeZoneLocalizedName_Select,TimeZoneLocalizedName_Expand,TimeZoneLocalizedName_Filter,TimeZoneLocalizedName_Fixed,TimeZoneLocalizedName_Result,TimeZoneLocalizedName_FormattedResult>;
  lk_timezonerule_timezonedefinitionid: WebMappingRetrieve<TimeZoneRule_Select,TimeZoneRule_Expand,TimeZoneRule_Filter,TimeZoneRule_Fixed,TimeZoneRule_Result,TimeZoneRule_FormattedResult>;
  userentityinstancedata_timezonedefinition: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  timezonedefinitions: WebMappingRetrieve<TimeZoneDefinition_Select,TimeZoneDefinition_Expand,TimeZoneDefinition_Filter,TimeZoneDefinition_Fixed,TimeZoneDefinition_Result,TimeZoneDefinition_FormattedResult>;
}
interface WebEntitiesRelated {
  timezonedefinitions: WebMappingRelated<TimeZoneDefinition_RelatedOne,TimeZoneDefinition_RelatedMany>;
}
interface WebEntitiesCUDA {
  timezonedefinitions: WebMappingCUDA<TimeZoneDefinition_Create,TimeZoneDefinition_Update,TimeZoneDefinition_Select>;
}
