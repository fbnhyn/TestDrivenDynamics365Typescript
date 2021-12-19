interface RoleTemplate_Base extends WebEntity {
  name?: string | null;
  roletemplateid?: string | null;
  upgrading?: boolean | null;
}
interface RoleTemplate_Relationships {
  role_template_roles?: Role_Result[] | null;
  roletemplateprivileges_association?: Privilege_Result[] | null;
  userentityinstancedata_roletemplate?: UserEntityInstanceData_Result[] | null;
}
interface RoleTemplate extends RoleTemplate_Base, RoleTemplate_Relationships {
}
interface RoleTemplate_Create extends RoleTemplate {
}
interface RoleTemplate_Update extends RoleTemplate {
}
interface RoleTemplate_Select {
  name: WebAttribute<RoleTemplate_Select, { name: string | null }, {  }>;
  roletemplateid: WebAttribute<RoleTemplate_Select, { roletemplateid: string | null }, {  }>;
  upgrading: WebAttribute<RoleTemplate_Select, { upgrading: boolean | null }, {  }>;
}
interface RoleTemplate_Filter {
  name: string;
  roletemplateid: XQW.Guid;
  upgrading: boolean;
}
interface RoleTemplate_Expand {
  role_template_roles: WebExpand<RoleTemplate_Expand, Role_Select, Role_Filter, { role_template_roles: Role_Result[] }>;
  roletemplateprivileges_association: WebExpand<RoleTemplate_Expand, Privilege_Select, Privilege_Filter, { roletemplateprivileges_association: Privilege_Result[] }>;
  userentityinstancedata_roletemplate: WebExpand<RoleTemplate_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { userentityinstancedata_roletemplate: UserEntityInstanceData_Result[] }>;
}
interface RoleTemplate_FormattedResult {
}
interface RoleTemplate_Result extends RoleTemplate_Base, RoleTemplate_Relationships {
  "@odata.etag": string;
}
interface RoleTemplate_RelatedOne {
}
interface RoleTemplate_RelatedMany {
  role_template_roles: WebMappingRetrieve<Role_Select,Role_Expand,Role_Filter,Role_Fixed,Role_Result,Role_FormattedResult>;
  roletemplateprivileges_association: WebMappingRetrieve<Privilege_Select,Privilege_Expand,Privilege_Filter,Privilege_Fixed,Privilege_Result,Privilege_FormattedResult>;
  userentityinstancedata_roletemplate: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  roletemplates: WebMappingRetrieve<RoleTemplate_Select,RoleTemplate_Expand,RoleTemplate_Filter,RoleTemplate_Fixed,RoleTemplate_Result,RoleTemplate_FormattedResult>;
}
interface WebEntitiesRelated {
  roletemplates: WebMappingRelated<RoleTemplate_RelatedOne,RoleTemplate_RelatedMany>;
}
interface WebEntitiesCUDA {
  roletemplates: WebMappingCUDA<RoleTemplate_Create,RoleTemplate_Update,RoleTemplate_Select>;
}
