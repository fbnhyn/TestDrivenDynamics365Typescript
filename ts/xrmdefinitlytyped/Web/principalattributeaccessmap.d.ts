interface PrincipalAttributeAccessMap_Base extends WebEntity {
  attributeid?: string | null;
  createaccess?: field_security_permission_type | null;
  principalattributeaccessmapid?: string | null;
  principalid?: string | null;
  readaccess?: field_security_permission_type | null;
  updateaccess?: field_security_permission_type | null;
  versionnumber?: number | null;
}
interface PrincipalAttributeAccessMap_Relationships {
  principalid_owner?: Team_Result | null;
  principalid_owner1?: SystemUser_Result | null;
  userentityinstancedata_principalattributeaccessmap?: UserEntityInstanceData_Result[] | null;
}
interface PrincipalAttributeAccessMap extends PrincipalAttributeAccessMap_Base, PrincipalAttributeAccessMap_Relationships {
}
interface PrincipalAttributeAccessMap_Create extends PrincipalAttributeAccessMap {
  principalid_owner_bind$systemusers?: string | null;
  principalid_owner_bind$teams?: string | null;
}
interface PrincipalAttributeAccessMap_Update extends PrincipalAttributeAccessMap {
}
interface PrincipalAttributeAccessMap_Select {
  attributeid: WebAttribute<PrincipalAttributeAccessMap_Select, { attributeid: string | null }, {  }>;
  createaccess: WebAttribute<PrincipalAttributeAccessMap_Select, { createaccess: field_security_permission_type | null }, { createaccess_formatted?: string }>;
  principalattributeaccessmapid: WebAttribute<PrincipalAttributeAccessMap_Select, { principalattributeaccessmapid: string | null }, {  }>;
  principalid: WebAttribute<PrincipalAttributeAccessMap_Select, { principalid: string | null }, {  }>;
  readaccess: WebAttribute<PrincipalAttributeAccessMap_Select, { readaccess: field_security_permission_type | null }, { readaccess_formatted?: string }>;
  updateaccess: WebAttribute<PrincipalAttributeAccessMap_Select, { updateaccess: field_security_permission_type | null }, { updateaccess_formatted?: string }>;
  versionnumber: WebAttribute<PrincipalAttributeAccessMap_Select, { versionnumber: number | null }, {  }>;
}
interface PrincipalAttributeAccessMap_Filter {
  attributeid: XQW.Guid;
  createaccess: field_security_permission_type;
  principalattributeaccessmapid: XQW.Guid;
  principalid: XQW.Guid;
  readaccess: field_security_permission_type;
  updateaccess: field_security_permission_type;
  versionnumber: number;
}
interface PrincipalAttributeAccessMap_Expand {
  principalid_owner: WebExpand<PrincipalAttributeAccessMap_Expand, Team_Select, Team_Filter, { principalid_owner: Team_Result }>;
  principalid_owner1: WebExpand<PrincipalAttributeAccessMap_Expand, SystemUser_Select, SystemUser_Filter, { principalid_owner: SystemUser_Result }>;
  userentityinstancedata_principalattributeaccessmap: WebExpand<PrincipalAttributeAccessMap_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { userentityinstancedata_principalattributeaccessmap: UserEntityInstanceData_Result[] }>;
}
interface PrincipalAttributeAccessMap_FormattedResult {
  createaccess_formatted?: string;
  readaccess_formatted?: string;
  updateaccess_formatted?: string;
}
interface PrincipalAttributeAccessMap_Result extends PrincipalAttributeAccessMap_Base, PrincipalAttributeAccessMap_Relationships {
  "@odata.etag": string;
}
interface PrincipalAttributeAccessMap_RelatedOne {
  principalid_owner: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  principalid_owner1: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface PrincipalAttributeAccessMap_RelatedMany {
  userentityinstancedata_principalattributeaccessmap: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  principalattributeaccessmaps: WebMappingRetrieve<PrincipalAttributeAccessMap_Select,PrincipalAttributeAccessMap_Expand,PrincipalAttributeAccessMap_Filter,PrincipalAttributeAccessMap_Fixed,PrincipalAttributeAccessMap_Result,PrincipalAttributeAccessMap_FormattedResult>;
}
interface WebEntitiesRelated {
  principalattributeaccessmaps: WebMappingRelated<PrincipalAttributeAccessMap_RelatedOne,PrincipalAttributeAccessMap_RelatedMany>;
}
interface WebEntitiesCUDA {
  principalattributeaccessmaps: WebMappingCUDA<PrincipalAttributeAccessMap_Create,PrincipalAttributeAccessMap_Update,PrincipalAttributeAccessMap_Select>;
}
