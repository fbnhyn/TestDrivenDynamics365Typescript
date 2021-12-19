interface TimeZoneLocalizedName_Base extends WebEntity {
  createdon?: Date | null;
  cultureid?: number | null;
  daylightname?: string | null;
  modifiedon?: Date | null;
  standardname?: string | null;
  timezonelocalizednameid?: string | null;
  userinterfacename?: string | null;
  versionnumber?: number | null;
}
interface TimeZoneLocalizedName_Relationships {
  userentityinstancedata_timezonelocalizedname?: UserEntityInstanceData_Result[] | null;
}
interface TimeZoneLocalizedName extends TimeZoneLocalizedName_Base, TimeZoneLocalizedName_Relationships {
  timezonedefinitionid_bind$timezonedefinitions?: string | null;
}
interface TimeZoneLocalizedName_Create extends TimeZoneLocalizedName {
}
interface TimeZoneLocalizedName_Update extends TimeZoneLocalizedName {
}
interface TimeZoneLocalizedName_Select {
  createdby_guid: WebAttribute<TimeZoneLocalizedName_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<TimeZoneLocalizedName_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<TimeZoneLocalizedName_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  cultureid: WebAttribute<TimeZoneLocalizedName_Select, { cultureid: number | null }, {  }>;
  daylightname: WebAttribute<TimeZoneLocalizedName_Select, { daylightname: string | null }, {  }>;
  modifiedby_guid: WebAttribute<TimeZoneLocalizedName_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<TimeZoneLocalizedName_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<TimeZoneLocalizedName_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  organizationid_guid: WebAttribute<TimeZoneLocalizedName_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  standardname: WebAttribute<TimeZoneLocalizedName_Select, { standardname: string | null }, {  }>;
  timezonedefinitionid_guid: WebAttribute<TimeZoneLocalizedName_Select, { timezonedefinitionid_guid: string | null }, { timezonedefinitionid_formatted?: string }>;
  timezonelocalizednameid: WebAttribute<TimeZoneLocalizedName_Select, { timezonelocalizednameid: string | null }, {  }>;
  userinterfacename: WebAttribute<TimeZoneLocalizedName_Select, { userinterfacename: string | null }, {  }>;
  versionnumber: WebAttribute<TimeZoneLocalizedName_Select, { versionnumber: number | null }, {  }>;
}
interface TimeZoneLocalizedName_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  cultureid: number;
  daylightname: string;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  organizationid_guid: XQW.Guid;
  standardname: string;
  timezonedefinitionid_guid: XQW.Guid;
  timezonelocalizednameid: XQW.Guid;
  userinterfacename: string;
  versionnumber: number;
}
interface TimeZoneLocalizedName_Expand {
  createdby: WebExpand<TimeZoneLocalizedName_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<TimeZoneLocalizedName_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<TimeZoneLocalizedName_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<TimeZoneLocalizedName_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  timezonedefinitionid: WebExpand<TimeZoneLocalizedName_Expand, TimeZoneDefinition_Select, TimeZoneDefinition_Filter, { timezonedefinitionid: TimeZoneDefinition_Result }>;
  userentityinstancedata_timezonelocalizedname: WebExpand<TimeZoneLocalizedName_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { userentityinstancedata_timezonelocalizedname: UserEntityInstanceData_Result[] }>;
}
interface TimeZoneLocalizedName_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  organizationid_formatted?: string;
  timezonedefinitionid_formatted?: string;
}
interface TimeZoneLocalizedName_Result extends TimeZoneLocalizedName_Base, TimeZoneLocalizedName_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
  timezonedefinitionid_guid: string | null;
}
interface TimeZoneLocalizedName_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  timezonedefinitionid: WebMappingRetrieve<TimeZoneDefinition_Select,TimeZoneDefinition_Expand,TimeZoneDefinition_Filter,TimeZoneDefinition_Fixed,TimeZoneDefinition_Result,TimeZoneDefinition_FormattedResult>;
}
interface TimeZoneLocalizedName_RelatedMany {
  userentityinstancedata_timezonelocalizedname: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  timezonelocalizednames: WebMappingRetrieve<TimeZoneLocalizedName_Select,TimeZoneLocalizedName_Expand,TimeZoneLocalizedName_Filter,TimeZoneLocalizedName_Fixed,TimeZoneLocalizedName_Result,TimeZoneLocalizedName_FormattedResult>;
}
interface WebEntitiesRelated {
  timezonelocalizednames: WebMappingRelated<TimeZoneLocalizedName_RelatedOne,TimeZoneLocalizedName_RelatedMany>;
}
interface WebEntitiesCUDA {
  timezonelocalizednames: WebMappingCUDA<TimeZoneLocalizedName_Create,TimeZoneLocalizedName_Update,TimeZoneLocalizedName_Select>;
}
