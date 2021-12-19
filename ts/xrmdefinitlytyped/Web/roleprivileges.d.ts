interface RolePrivileges_Base extends WebEntity {
  canbedeleted?: any | null;
  componentstate?: componentstate | null;
  ismanaged?: boolean | null;
  overwritetime?: Date | null;
  privilegedepthmask?: number | null;
  privilegeid?: string | null;
  roleid?: string | null;
  roleprivilegeid?: string | null;
  roleprivilegeidunique?: string | null;
  solutionid?: string | null;
  supportingsolutionid?: string | null;
  versionnumber?: number | null;
}
interface RolePrivileges_Relationships {
  roleprivileges_association?: Role_Result[] | null;
}
interface RolePrivileges extends RolePrivileges_Base, RolePrivileges_Relationships {
}
interface RolePrivileges_Create extends RolePrivileges {
}
interface RolePrivileges_Update extends RolePrivileges {
}
interface RolePrivileges_Select {
  canbedeleted: WebAttribute<RolePrivileges_Select, { canbedeleted: any | null }, {  }>;
  componentstate: WebAttribute<RolePrivileges_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  ismanaged: WebAttribute<RolePrivileges_Select, { ismanaged: boolean | null }, {  }>;
  overwritetime: WebAttribute<RolePrivileges_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  privilegedepthmask: WebAttribute<RolePrivileges_Select, { privilegedepthmask: number | null }, {  }>;
  privilegeid: WebAttribute<RolePrivileges_Select, { privilegeid: string | null }, {  }>;
  roleid: WebAttribute<RolePrivileges_Select, { roleid: string | null }, {  }>;
  roleprivilegeid: WebAttribute<RolePrivileges_Select, { roleprivilegeid: string | null }, {  }>;
  roleprivilegeidunique: WebAttribute<RolePrivileges_Select, { roleprivilegeidunique: string | null }, {  }>;
  solutionid: WebAttribute<RolePrivileges_Select, { solutionid: string | null }, {  }>;
  supportingsolutionid: WebAttribute<RolePrivileges_Select, { supportingsolutionid: string | null }, {  }>;
  versionnumber: WebAttribute<RolePrivileges_Select, { versionnumber: number | null }, {  }>;
}
interface RolePrivileges_Filter {
  canbedeleted: any;
  componentstate: componentstate;
  ismanaged: boolean;
  overwritetime: Date;
  privilegedepthmask: number;
  privilegeid: XQW.Guid;
  roleid: XQW.Guid;
  roleprivilegeid: XQW.Guid;
  roleprivilegeidunique: XQW.Guid;
  solutionid: XQW.Guid;
  supportingsolutionid: XQW.Guid;
  versionnumber: number;
}
interface RolePrivileges_Expand {
  roleprivileges_association: WebExpand<RolePrivileges_Expand, Role_Select, Role_Filter, { roleprivileges_association: Role_Result[] }>;
  solutionid: WebExpand<RolePrivileges_Expand, Solution_Select, Solution_Filter, { solutionid: Solution_Result }>;
}
interface RolePrivileges_FormattedResult {
  componentstate_formatted?: string;
  overwritetime_formatted?: string;
}
interface RolePrivileges_Result extends RolePrivileges_Base, RolePrivileges_Relationships {
  "@odata.etag": string;
}
interface RolePrivileges_RelatedOne {
  solutionid: WebMappingRetrieve<Solution_Select,Solution_Expand,Solution_Filter,Solution_Fixed,Solution_Result,Solution_FormattedResult>;
}
interface RolePrivileges_RelatedMany {
  roleprivileges_association: WebMappingRetrieve<Role_Select,Role_Expand,Role_Filter,Role_Fixed,Role_Result,Role_FormattedResult>;
}
interface WebEntitiesRetrieve {
  roleprivilegescollection: WebMappingRetrieve<RolePrivileges_Select,RolePrivileges_Expand,RolePrivileges_Filter,RolePrivileges_Fixed,RolePrivileges_Result,RolePrivileges_FormattedResult>;
}
interface WebEntitiesRelated {
  roleprivilegescollection: WebMappingRelated<RolePrivileges_RelatedOne,RolePrivileges_RelatedMany>;
}
interface WebEntitiesCUDA {
  roleprivilegescollection: WebMappingCUDA<RolePrivileges_Create,RolePrivileges_Update,RolePrivileges_Select>;
}
