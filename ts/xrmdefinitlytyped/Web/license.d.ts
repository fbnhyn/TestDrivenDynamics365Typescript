interface License_Base extends WebEntity {
  installedon?: Date | null;
  licenseid?: string | null;
  licensekey?: string | null;
  licensetype?: string | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
}
interface License_Relationships {
  userentityinstancedata_license?: UserEntityInstanceData_Result[] | null;
}
interface License extends License_Base, License_Relationships {
}
interface License_Create extends License {
}
interface License_Update extends License {
}
interface License_Select {
  installedon: WebAttribute<License_Select, { installedon: Date | null }, { installedon_formatted?: string }>;
  licenseid: WebAttribute<License_Select, { licenseid: string | null }, {  }>;
  licensekey: WebAttribute<License_Select, { licensekey: string | null }, {  }>;
  licensetype: WebAttribute<License_Select, { licensetype: string | null }, {  }>;
  organizationid_guid: WebAttribute<License_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<License_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<License_Select, { utcconversiontimezonecode: number | null }, {  }>;
}
interface License_Filter {
  installedon: Date;
  licenseid: XQW.Guid;
  licensekey: string;
  licensetype: XQW.Guid;
  organizationid_guid: XQW.Guid;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
}
interface License_Expand {
  organizationid: WebExpand<License_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
  userentityinstancedata_license: WebExpand<License_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { userentityinstancedata_license: UserEntityInstanceData_Result[] }>;
}
interface License_FormattedResult {
  installedon_formatted?: string;
  organizationid_formatted?: string;
}
interface License_Result extends License_Base, License_Relationships {
  "@odata.etag": string;
  organizationid_guid: string | null;
}
interface License_RelatedOne {
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
}
interface License_RelatedMany {
  userentityinstancedata_license: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  licenses: WebMappingRetrieve<License_Select,License_Expand,License_Filter,License_Fixed,License_Result,License_FormattedResult>;
}
interface WebEntitiesRelated {
  licenses: WebMappingRelated<License_RelatedOne,License_RelatedMany>;
}
interface WebEntitiesCUDA {
  licenses: WebMappingCUDA<License_Create,License_Update,License_Select>;
}
