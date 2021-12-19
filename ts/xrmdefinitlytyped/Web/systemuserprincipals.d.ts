interface SystemUserPrincipals_Base extends WebEntity {
  principalid?: string | null;
  systemuserid?: string | null;
  systemuserprincipalid?: string | null;
  versionnumber?: number | null;
}
interface SystemUserPrincipals_Relationships {
  systemuserid_systemuser?: SystemUser_Result | null;
}
interface SystemUserPrincipals extends SystemUserPrincipals_Base, SystemUserPrincipals_Relationships {
}
interface SystemUserPrincipals_Create extends SystemUserPrincipals {
  systemuserid_systemuser_bind$systemusers?: string | null;
}
interface SystemUserPrincipals_Update extends SystemUserPrincipals {
}
interface SystemUserPrincipals_Select {
  principalid: WebAttribute<SystemUserPrincipals_Select, { principalid: string | null }, {  }>;
  systemuserid: WebAttribute<SystemUserPrincipals_Select, { systemuserid: string | null }, {  }>;
  systemuserprincipalid: WebAttribute<SystemUserPrincipals_Select, { systemuserprincipalid: string | null }, {  }>;
  versionnumber: WebAttribute<SystemUserPrincipals_Select, { versionnumber: number | null }, {  }>;
}
interface SystemUserPrincipals_Filter {
  principalid: XQW.Guid;
  systemuserid: XQW.Guid;
  systemuserprincipalid: XQW.Guid;
  versionnumber: number;
}
interface SystemUserPrincipals_Expand {
  systemuserid_systemuser: WebExpand<SystemUserPrincipals_Expand, SystemUser_Select, SystemUser_Filter, { systemuserid_systemuser: SystemUser_Result }>;
}
interface SystemUserPrincipals_FormattedResult {
}
interface SystemUserPrincipals_Result extends SystemUserPrincipals_Base, SystemUserPrincipals_Relationships {
  "@odata.etag": string;
}
interface SystemUserPrincipals_RelatedOne {
  systemuserid_systemuser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface SystemUserPrincipals_RelatedMany {
}
interface WebEntitiesRetrieve {
  systemuserprincipalsset: WebMappingRetrieve<SystemUserPrincipals_Select,SystemUserPrincipals_Expand,SystemUserPrincipals_Filter,SystemUserPrincipals_Fixed,SystemUserPrincipals_Result,SystemUserPrincipals_FormattedResult>;
}
interface WebEntitiesRelated {
  systemuserprincipalsset: WebMappingRelated<SystemUserPrincipals_RelatedOne,SystemUserPrincipals_RelatedMany>;
}
interface WebEntitiesCUDA {
  systemuserprincipalsset: WebMappingCUDA<SystemUserPrincipals_Create,SystemUserPrincipals_Update,SystemUserPrincipals_Select>;
}
