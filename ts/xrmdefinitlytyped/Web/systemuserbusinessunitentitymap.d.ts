interface SystemUserBusinessUnitEntityMap_Base extends WebEntity {
  businessunitid?: string | null;
  objecttypecode?: string | null;
  readprivilegedepth?: number | null;
  systemuserbusinessunitentitymapid?: string | null;
  systemuserid?: string | null;
  versionnumber?: number | null;
}
interface SystemUserBusinessUnitEntityMap_Relationships {
  businessunitid_businessunit?: BusinessUnit_Result | null;
  systemuserid_systemuser?: SystemUser_Result | null;
  userentityinstancedata_systemuserbusinessunitentitymap?: UserEntityInstanceData_Result[] | null;
}
interface SystemUserBusinessUnitEntityMap extends SystemUserBusinessUnitEntityMap_Base, SystemUserBusinessUnitEntityMap_Relationships {
}
interface SystemUserBusinessUnitEntityMap_Create extends SystemUserBusinessUnitEntityMap {
}
interface SystemUserBusinessUnitEntityMap_Update extends SystemUserBusinessUnitEntityMap {
}
interface SystemUserBusinessUnitEntityMap_Select {
  businessunitid: WebAttribute<SystemUserBusinessUnitEntityMap_Select, { businessunitid: string | null }, {  }>;
  objecttypecode: WebAttribute<SystemUserBusinessUnitEntityMap_Select, { objecttypecode: string | null }, {  }>;
  readprivilegedepth: WebAttribute<SystemUserBusinessUnitEntityMap_Select, { readprivilegedepth: number | null }, {  }>;
  systemuserbusinessunitentitymapid: WebAttribute<SystemUserBusinessUnitEntityMap_Select, { systemuserbusinessunitentitymapid: string | null }, {  }>;
  systemuserid: WebAttribute<SystemUserBusinessUnitEntityMap_Select, { systemuserid: string | null }, {  }>;
  versionnumber: WebAttribute<SystemUserBusinessUnitEntityMap_Select, { versionnumber: number | null }, {  }>;
}
interface SystemUserBusinessUnitEntityMap_Filter {
  businessunitid: XQW.Guid;
  objecttypecode: string;
  readprivilegedepth: number;
  systemuserbusinessunitentitymapid: XQW.Guid;
  systemuserid: XQW.Guid;
  versionnumber: number;
}
interface SystemUserBusinessUnitEntityMap_Expand {
  businessunitid_businessunit: WebExpand<SystemUserBusinessUnitEntityMap_Expand, BusinessUnit_Select, BusinessUnit_Filter, { businessunitid_businessunit: BusinessUnit_Result }>;
  systemuserid_systemuser: WebExpand<SystemUserBusinessUnitEntityMap_Expand, SystemUser_Select, SystemUser_Filter, { systemuserid_systemuser: SystemUser_Result }>;
  userentityinstancedata_systemuserbusinessunitentitymap: WebExpand<SystemUserBusinessUnitEntityMap_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { userentityinstancedata_systemuserbusinessunitentitymap: UserEntityInstanceData_Result[] }>;
}
interface SystemUserBusinessUnitEntityMap_FormattedResult {
}
interface SystemUserBusinessUnitEntityMap_Result extends SystemUserBusinessUnitEntityMap_Base, SystemUserBusinessUnitEntityMap_Relationships {
  "@odata.etag": string;
}
interface SystemUserBusinessUnitEntityMap_RelatedOne {
  businessunitid_businessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  systemuserid_systemuser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface SystemUserBusinessUnitEntityMap_RelatedMany {
  userentityinstancedata_systemuserbusinessunitentitymap: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  systemuserbusinessunitentitymaps: WebMappingRetrieve<SystemUserBusinessUnitEntityMap_Select,SystemUserBusinessUnitEntityMap_Expand,SystemUserBusinessUnitEntityMap_Filter,SystemUserBusinessUnitEntityMap_Fixed,SystemUserBusinessUnitEntityMap_Result,SystemUserBusinessUnitEntityMap_FormattedResult>;
}
interface WebEntitiesRelated {
  systemuserbusinessunitentitymaps: WebMappingRelated<SystemUserBusinessUnitEntityMap_RelatedOne,SystemUserBusinessUnitEntityMap_RelatedMany>;
}
interface WebEntitiesCUDA {
  systemuserbusinessunitentitymaps: WebMappingCUDA<SystemUserBusinessUnitEntityMap_Create,SystemUserBusinessUnitEntityMap_Update,SystemUserBusinessUnitEntityMap_Select>;
}
