interface AppModuleRoles_Base extends WebEntity {
  appmoduleroleid?: string | null;
  appmoduleroleidunique?: string | null;
  componentstate?: componentstate | null;
  introducedversion?: string | null;
  ismanaged?: boolean | null;
  overwritetime?: Date | null;
  solutionid?: string | null;
  supportingsolutionid?: string | null;
  versionnumber?: number | null;
}
interface AppModuleRoles_Relationships {
  appmoduleroles_association?: Role_Result[] | null;
}
interface AppModuleRoles extends AppModuleRoles_Base, AppModuleRoles_Relationships {
}
interface AppModuleRoles_Create extends AppModuleRoles {
}
interface AppModuleRoles_Update extends AppModuleRoles {
}
interface AppModuleRoles_Select {
  appmoduleid_guid: WebAttribute<AppModuleRoles_Select, { appmoduleid_guid: string | null }, { appmoduleid_formatted?: string }>;
  appmoduleroleid: WebAttribute<AppModuleRoles_Select, { appmoduleroleid: string | null }, {  }>;
  appmoduleroleidunique: WebAttribute<AppModuleRoles_Select, { appmoduleroleidunique: string | null }, {  }>;
  componentstate: WebAttribute<AppModuleRoles_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  introducedversion: WebAttribute<AppModuleRoles_Select, { introducedversion: string | null }, {  }>;
  ismanaged: WebAttribute<AppModuleRoles_Select, { ismanaged: boolean | null }, {  }>;
  overwritetime: WebAttribute<AppModuleRoles_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  roleid_guid: WebAttribute<AppModuleRoles_Select, { roleid_guid: string | null }, { roleid_formatted?: string }>;
  solutionid: WebAttribute<AppModuleRoles_Select, { solutionid: string | null }, {  }>;
  supportingsolutionid: WebAttribute<AppModuleRoles_Select, { supportingsolutionid: string | null }, {  }>;
  versionnumber: WebAttribute<AppModuleRoles_Select, { versionnumber: number | null }, {  }>;
}
interface AppModuleRoles_Filter {
  appmoduleid_guid: XQW.Guid;
  appmoduleroleid: XQW.Guid;
  appmoduleroleidunique: XQW.Guid;
  componentstate: componentstate;
  introducedversion: string;
  ismanaged: boolean;
  overwritetime: Date;
  roleid_guid: XQW.Guid;
  solutionid: XQW.Guid;
  supportingsolutionid: XQW.Guid;
  versionnumber: number;
}
interface AppModuleRoles_Expand {
  appmoduleroles_association: WebExpand<AppModuleRoles_Expand, Role_Select, Role_Filter, { appmoduleroles_association: Role_Result[] }>;
}
interface AppModuleRoles_FormattedResult {
  appmoduleid_formatted?: string;
  componentstate_formatted?: string;
  overwritetime_formatted?: string;
  roleid_formatted?: string;
}
interface AppModuleRoles_Result extends AppModuleRoles_Base, AppModuleRoles_Relationships {
  "@odata.etag": string;
  appmoduleid_guid: string | null;
  roleid_guid: string | null;
}
interface AppModuleRoles_RelatedOne {
}
interface AppModuleRoles_RelatedMany {
  appmoduleroles_association: WebMappingRetrieve<Role_Select,Role_Expand,Role_Filter,Role_Fixed,Role_Result,Role_FormattedResult>;
}
interface WebEntitiesRetrieve {
  appmodulerolescollection: WebMappingRetrieve<AppModuleRoles_Select,AppModuleRoles_Expand,AppModuleRoles_Filter,AppModuleRoles_Fixed,AppModuleRoles_Result,AppModuleRoles_FormattedResult>;
}
interface WebEntitiesRelated {
  appmodulerolescollection: WebMappingRelated<AppModuleRoles_RelatedOne,AppModuleRoles_RelatedMany>;
}
interface WebEntitiesCUDA {
  appmodulerolescollection: WebMappingCUDA<AppModuleRoles_Create,AppModuleRoles_Update,AppModuleRoles_Select>;
}
