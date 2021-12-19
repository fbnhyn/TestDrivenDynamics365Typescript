interface PrincipalEntityBusinessUnitMap_Base extends WebEntity {
  businessunitid?: string | null;
  objecttypecode?: string | null;
  principalentitybusinessunitmapid?: string | null;
  principalid?: string | null;
  versionnumber?: number | null;
}
interface PrincipalEntityBusinessUnitMap_Relationships {
  businessunitid_businessunit?: BusinessUnit_Result | null;
  principalid_owner?: Team_Result | null;
  principalid_owner1?: SystemUser_Result | null;
}
interface PrincipalEntityBusinessUnitMap extends PrincipalEntityBusinessUnitMap_Base, PrincipalEntityBusinessUnitMap_Relationships {
}
interface PrincipalEntityBusinessUnitMap_Create extends PrincipalEntityBusinessUnitMap {
}
interface PrincipalEntityBusinessUnitMap_Update extends PrincipalEntityBusinessUnitMap {
}
interface PrincipalEntityBusinessUnitMap_Select {
  businessunitid: WebAttribute<PrincipalEntityBusinessUnitMap_Select, { businessunitid: string | null }, {  }>;
  objecttypecode: WebAttribute<PrincipalEntityBusinessUnitMap_Select, { objecttypecode: string | null }, {  }>;
  principalentitybusinessunitmapid: WebAttribute<PrincipalEntityBusinessUnitMap_Select, { principalentitybusinessunitmapid: string | null }, {  }>;
  principalid: WebAttribute<PrincipalEntityBusinessUnitMap_Select, { principalid: string | null }, {  }>;
  versionnumber: WebAttribute<PrincipalEntityBusinessUnitMap_Select, { versionnumber: number | null }, {  }>;
}
interface PrincipalEntityBusinessUnitMap_Filter {
  businessunitid: XQW.Guid;
  objecttypecode: string;
  principalentitybusinessunitmapid: XQW.Guid;
  principalid: XQW.Guid;
  versionnumber: number;
}
interface PrincipalEntityBusinessUnitMap_Expand {
  businessunitid_businessunit: WebExpand<PrincipalEntityBusinessUnitMap_Expand, BusinessUnit_Select, BusinessUnit_Filter, { businessunitid_businessunit: BusinessUnit_Result }>;
  principalid_owner: WebExpand<PrincipalEntityBusinessUnitMap_Expand, Team_Select, Team_Filter, { principalid_owner: Team_Result }>;
  principalid_owner1: WebExpand<PrincipalEntityBusinessUnitMap_Expand, SystemUser_Select, SystemUser_Filter, { principalid_owner: SystemUser_Result }>;
}
interface PrincipalEntityBusinessUnitMap_FormattedResult {
}
interface PrincipalEntityBusinessUnitMap_Result extends PrincipalEntityBusinessUnitMap_Base, PrincipalEntityBusinessUnitMap_Relationships {
  "@odata.etag": string;
}
interface PrincipalEntityBusinessUnitMap_RelatedOne {
  businessunitid_businessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  principalid_owner: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  principalid_owner1: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface PrincipalEntityBusinessUnitMap_RelatedMany {
}
interface WebEntitiesRetrieve {
  principalentitybusinessunitmaps: WebMappingRetrieve<PrincipalEntityBusinessUnitMap_Select,PrincipalEntityBusinessUnitMap_Expand,PrincipalEntityBusinessUnitMap_Filter,PrincipalEntityBusinessUnitMap_Fixed,PrincipalEntityBusinessUnitMap_Result,PrincipalEntityBusinessUnitMap_FormattedResult>;
}
interface WebEntitiesRelated {
  principalentitybusinessunitmaps: WebMappingRelated<PrincipalEntityBusinessUnitMap_RelatedOne,PrincipalEntityBusinessUnitMap_RelatedMany>;
}
interface WebEntitiesCUDA {
  principalentitybusinessunitmaps: WebMappingCUDA<PrincipalEntityBusinessUnitMap_Create,PrincipalEntityBusinessUnitMap_Update,PrincipalEntityBusinessUnitMap_Select>;
}
