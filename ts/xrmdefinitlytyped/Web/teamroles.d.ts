interface TeamRoles_Base extends WebEntity {
  roleid?: string | null;
  teamid?: string | null;
  teamroleid?: string | null;
  versionnumber?: number | null;
}
interface TeamRoles_Relationships {
  teamroles_association?: Role_Result[] | null;
}
interface TeamRoles extends TeamRoles_Base, TeamRoles_Relationships {
}
interface TeamRoles_Create extends TeamRoles {
}
interface TeamRoles_Update extends TeamRoles {
}
interface TeamRoles_Select {
  roleid: WebAttribute<TeamRoles_Select, { roleid: string | null }, {  }>;
  teamid: WebAttribute<TeamRoles_Select, { teamid: string | null }, {  }>;
  teamroleid: WebAttribute<TeamRoles_Select, { teamroleid: string | null }, {  }>;
  versionnumber: WebAttribute<TeamRoles_Select, { versionnumber: number | null }, {  }>;
}
interface TeamRoles_Filter {
  roleid: XQW.Guid;
  teamid: XQW.Guid;
  teamroleid: XQW.Guid;
  versionnumber: number;
}
interface TeamRoles_Expand {
  teamroles_association: WebExpand<TeamRoles_Expand, Role_Select, Role_Filter, { teamroles_association: Role_Result[] }>;
}
interface TeamRoles_FormattedResult {
}
interface TeamRoles_Result extends TeamRoles_Base, TeamRoles_Relationships {
  "@odata.etag": string;
}
interface TeamRoles_RelatedOne {
}
interface TeamRoles_RelatedMany {
  teamroles_association: WebMappingRetrieve<Role_Select,Role_Expand,Role_Filter,Role_Fixed,Role_Result,Role_FormattedResult>;
}
interface WebEntitiesRetrieve {
  teamrolescollection: WebMappingRetrieve<TeamRoles_Select,TeamRoles_Expand,TeamRoles_Filter,TeamRoles_Fixed,TeamRoles_Result,TeamRoles_FormattedResult>;
}
interface WebEntitiesRelated {
  teamrolescollection: WebMappingRelated<TeamRoles_RelatedOne,TeamRoles_RelatedMany>;
}
interface WebEntitiesCUDA {
  teamrolescollection: WebMappingCUDA<TeamRoles_Create,TeamRoles_Update,TeamRoles_Select>;
}
