interface PrincipalObjectAccess_Base extends WebEntity {
  accessrightsmask?: number | null;
  changedon?: Date | null;
  inheritedaccessrightsmask?: number | null;
  objectid?: string | null;
  objecttypecode?: string | null;
  principalid?: string | null;
  principalobjectaccessid?: string | null;
  principaltypecode?: string | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface PrincipalObjectAccess_Relationships {
  userentityinstancedata_principalobjectaccess?: UserEntityInstanceData_Result[] | null;
}
interface PrincipalObjectAccess extends PrincipalObjectAccess_Base, PrincipalObjectAccess_Relationships {
}
interface PrincipalObjectAccess_Create extends PrincipalObjectAccess {
}
interface PrincipalObjectAccess_Update extends PrincipalObjectAccess {
}
interface PrincipalObjectAccess_Select {
  accessrightsmask: WebAttribute<PrincipalObjectAccess_Select, { accessrightsmask: number | null }, {  }>;
  changedon: WebAttribute<PrincipalObjectAccess_Select, { changedon: Date | null }, { changedon_formatted?: string }>;
  inheritedaccessrightsmask: WebAttribute<PrincipalObjectAccess_Select, { inheritedaccessrightsmask: number | null }, {  }>;
  objectid: WebAttribute<PrincipalObjectAccess_Select, { objectid: string | null }, {  }>;
  objecttypecode: WebAttribute<PrincipalObjectAccess_Select, { objecttypecode: string | null }, {  }>;
  principalid: WebAttribute<PrincipalObjectAccess_Select, { principalid: string | null }, {  }>;
  principalobjectaccessid: WebAttribute<PrincipalObjectAccess_Select, { principalobjectaccessid: string | null }, {  }>;
  principaltypecode: WebAttribute<PrincipalObjectAccess_Select, { principaltypecode: string | null }, {  }>;
  timezoneruleversionnumber: WebAttribute<PrincipalObjectAccess_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<PrincipalObjectAccess_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<PrincipalObjectAccess_Select, { versionnumber: number | null }, {  }>;
}
interface PrincipalObjectAccess_Filter {
  accessrightsmask: number;
  changedon: Date;
  inheritedaccessrightsmask: number;
  objectid: XQW.Guid;
  objecttypecode: string;
  principalid: XQW.Guid;
  principalobjectaccessid: XQW.Guid;
  principaltypecode: string;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface PrincipalObjectAccess_Expand {
  userentityinstancedata_principalobjectaccess: WebExpand<PrincipalObjectAccess_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { userentityinstancedata_principalobjectaccess: UserEntityInstanceData_Result[] }>;
}
interface PrincipalObjectAccess_FormattedResult {
  changedon_formatted?: string;
}
interface PrincipalObjectAccess_Result extends PrincipalObjectAccess_Base, PrincipalObjectAccess_Relationships {
  "@odata.etag": string;
}
interface PrincipalObjectAccess_RelatedOne {
}
interface PrincipalObjectAccess_RelatedMany {
  userentityinstancedata_principalobjectaccess: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  principalobjectaccessset: WebMappingRetrieve<PrincipalObjectAccess_Select,PrincipalObjectAccess_Expand,PrincipalObjectAccess_Filter,PrincipalObjectAccess_Fixed,PrincipalObjectAccess_Result,PrincipalObjectAccess_FormattedResult>;
}
interface WebEntitiesRelated {
  principalobjectaccessset: WebMappingRelated<PrincipalObjectAccess_RelatedOne,PrincipalObjectAccess_RelatedMany>;
}
interface WebEntitiesCUDA {
  principalobjectaccessset: WebMappingCUDA<PrincipalObjectAccess_Create,PrincipalObjectAccess_Update,PrincipalObjectAccess_Select>;
}
