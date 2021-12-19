interface RoleTemplatePrivileges_Base extends WebEntity {
  isbasic?: boolean | null;
  isdeep?: boolean | null;
  isglobal?: boolean | null;
  islocal?: boolean | null;
  privilegeid?: string | null;
  roletemplateid?: string | null;
  roletemplateprivilegeid?: string | null;
  upgrading?: boolean | null;
}
interface RoleTemplatePrivileges_Relationships {
  roletemplateprivileges_association?: Privilege_Result[] | null;
}
interface RoleTemplatePrivileges extends RoleTemplatePrivileges_Base, RoleTemplatePrivileges_Relationships {
}
interface RoleTemplatePrivileges_Create extends RoleTemplatePrivileges {
}
interface RoleTemplatePrivileges_Update extends RoleTemplatePrivileges {
}
interface RoleTemplatePrivileges_Select {
  isbasic: WebAttribute<RoleTemplatePrivileges_Select, { isbasic: boolean | null }, {  }>;
  isdeep: WebAttribute<RoleTemplatePrivileges_Select, { isdeep: boolean | null }, {  }>;
  isglobal: WebAttribute<RoleTemplatePrivileges_Select, { isglobal: boolean | null }, {  }>;
  islocal: WebAttribute<RoleTemplatePrivileges_Select, { islocal: boolean | null }, {  }>;
  privilegeid: WebAttribute<RoleTemplatePrivileges_Select, { privilegeid: string | null }, {  }>;
  roletemplateid: WebAttribute<RoleTemplatePrivileges_Select, { roletemplateid: string | null }, {  }>;
  roletemplateprivilegeid: WebAttribute<RoleTemplatePrivileges_Select, { roletemplateprivilegeid: string | null }, {  }>;
  upgrading: WebAttribute<RoleTemplatePrivileges_Select, { upgrading: boolean | null }, {  }>;
}
interface RoleTemplatePrivileges_Filter {
  isbasic: boolean;
  isdeep: boolean;
  isglobal: boolean;
  islocal: boolean;
  privilegeid: XQW.Guid;
  roletemplateid: XQW.Guid;
  roletemplateprivilegeid: XQW.Guid;
  upgrading: boolean;
}
interface RoleTemplatePrivileges_Expand {
  roletemplateprivileges_association: WebExpand<RoleTemplatePrivileges_Expand, Privilege_Select, Privilege_Filter, { roletemplateprivileges_association: Privilege_Result[] }>;
}
interface RoleTemplatePrivileges_FormattedResult {
}
interface RoleTemplatePrivileges_Result extends RoleTemplatePrivileges_Base, RoleTemplatePrivileges_Relationships {
  "@odata.etag": string;
}
interface RoleTemplatePrivileges_RelatedOne {
}
interface RoleTemplatePrivileges_RelatedMany {
  roletemplateprivileges_association: WebMappingRetrieve<Privilege_Select,Privilege_Expand,Privilege_Filter,Privilege_Fixed,Privilege_Result,Privilege_FormattedResult>;
}
interface WebEntitiesRetrieve {
  roletemplateprivilegescollection: WebMappingRetrieve<RoleTemplatePrivileges_Select,RoleTemplatePrivileges_Expand,RoleTemplatePrivileges_Filter,RoleTemplatePrivileges_Fixed,RoleTemplatePrivileges_Result,RoleTemplatePrivileges_FormattedResult>;
}
interface WebEntitiesRelated {
  roletemplateprivilegescollection: WebMappingRelated<RoleTemplatePrivileges_RelatedOne,RoleTemplatePrivileges_RelatedMany>;
}
interface WebEntitiesCUDA {
  roletemplateprivilegescollection: WebMappingCUDA<RoleTemplatePrivileges_Create,RoleTemplatePrivileges_Update,RoleTemplatePrivileges_Select>;
}
