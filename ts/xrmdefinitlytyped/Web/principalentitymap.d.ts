interface PrincipalEntityMap_Base extends WebEntity {
  objecttypecode?: string | null;
  principalentitymapid?: string | null;
  principalid?: string | null;
  versionnumber?: number | null;
}
interface PrincipalEntityMap_Relationships {
  principalid_owner?: Team_Result | null;
  principalid_owner1?: SystemUser_Result | null;
  userentityinstancedata_principalentitymap?: UserEntityInstanceData_Result[] | null;
}
interface PrincipalEntityMap extends PrincipalEntityMap_Base, PrincipalEntityMap_Relationships {
}
interface PrincipalEntityMap_Create extends PrincipalEntityMap {
}
interface PrincipalEntityMap_Update extends PrincipalEntityMap {
}
interface PrincipalEntityMap_Select {
  objecttypecode: WebAttribute<PrincipalEntityMap_Select, { objecttypecode: string | null }, {  }>;
  principalentitymapid: WebAttribute<PrincipalEntityMap_Select, { principalentitymapid: string | null }, {  }>;
  principalid: WebAttribute<PrincipalEntityMap_Select, { principalid: string | null }, {  }>;
  versionnumber: WebAttribute<PrincipalEntityMap_Select, { versionnumber: number | null }, {  }>;
}
interface PrincipalEntityMap_Filter {
  objecttypecode: string;
  principalentitymapid: XQW.Guid;
  principalid: XQW.Guid;
  versionnumber: number;
}
interface PrincipalEntityMap_Expand {
  principalid_owner: WebExpand<PrincipalEntityMap_Expand, Team_Select, Team_Filter, { principalid_owner: Team_Result }>;
  principalid_owner1: WebExpand<PrincipalEntityMap_Expand, SystemUser_Select, SystemUser_Filter, { principalid_owner: SystemUser_Result }>;
  userentityinstancedata_principalentitymap: WebExpand<PrincipalEntityMap_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { userentityinstancedata_principalentitymap: UserEntityInstanceData_Result[] }>;
}
interface PrincipalEntityMap_FormattedResult {
}
interface PrincipalEntityMap_Result extends PrincipalEntityMap_Base, PrincipalEntityMap_Relationships {
  "@odata.etag": string;
}
interface PrincipalEntityMap_RelatedOne {
  principalid_owner: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  principalid_owner1: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface PrincipalEntityMap_RelatedMany {
  userentityinstancedata_principalentitymap: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  principalentitymaps: WebMappingRetrieve<PrincipalEntityMap_Select,PrincipalEntityMap_Expand,PrincipalEntityMap_Filter,PrincipalEntityMap_Fixed,PrincipalEntityMap_Result,PrincipalEntityMap_FormattedResult>;
}
interface WebEntitiesRelated {
  principalentitymaps: WebMappingRelated<PrincipalEntityMap_RelatedOne,PrincipalEntityMap_RelatedMany>;
}
interface WebEntitiesCUDA {
  principalentitymaps: WebMappingCUDA<PrincipalEntityMap_Create,PrincipalEntityMap_Update,PrincipalEntityMap_Select>;
}
