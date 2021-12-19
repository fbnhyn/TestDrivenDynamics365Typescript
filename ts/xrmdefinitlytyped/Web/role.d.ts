interface Role_Base extends WebEntity {
  canbedeleted?: any | null;
  componentstate?: componentstate | null;
  createdon?: Date | null;
  importsequencenumber?: number | null;
  iscustomizable?: any | null;
  isinherited?: isinherited | null;
  ismanaged?: boolean | null;
  modifiedon?: Date | null;
  name?: string | null;
  organizationid?: string | null;
  overriddencreatedon?: Date | null;
  overwritetime?: Date | null;
  roleid?: string | null;
  roleidunique?: string | null;
  solutionid?: string | null;
  supportingsolutionid?: string | null;
  versionnumber?: number | null;
}
interface Role_Relationships {
  Role_AsyncOperations?: AsyncOperation_Result[] | null;
  Role_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  Role_SyncErrors?: SyncError_Result[] | null;
  applicationuserrole?: ApplicationUser_Result[] | null;
  appmoduleroles_association?: AppModule_Result[] | null;
  msdyn_role_msdyn_actioncardrolesetting?: msdyn_actioncardrolesetting_Result[] | null;
  msdyn_role_msdyn_personasecurityrolemapping?: msdyn_personasecurityrolemapping_Result[] | null;
  organizationid_organization?: Organization_Result | null;
  role_parent_role?: Role_Result[] | null;
  role_parent_root_role?: Role_Result[] | null;
  roleprivileges_association?: Privilege_Result[] | null;
  solution_role?: Solution_Result | null;
  systemuserroles_association?: SystemUser_Result[] | null;
  teamroles_association?: Team_Result[] | null;
  userentityinstancedata_role?: UserEntityInstanceData_Result[] | null;
}
interface Role extends Role_Base, Role_Relationships {
}
interface Role_Create extends Role {
  businessunitid_bind$businessunits?: string | null;
}
interface Role_Update extends Role {
}
interface Role_Select {
  businessunitid_guid: WebAttribute<Role_Select, { businessunitid_guid: string | null }, { businessunitid_formatted?: string }>;
  canbedeleted: WebAttribute<Role_Select, { canbedeleted: any | null }, {  }>;
  componentstate: WebAttribute<Role_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  createdby_guid: WebAttribute<Role_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<Role_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<Role_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<Role_Select, { importsequencenumber: number | null }, {  }>;
  iscustomizable: WebAttribute<Role_Select, { iscustomizable: any | null }, {  }>;
  isinherited: WebAttribute<Role_Select, { isinherited: isinherited | null }, { isinherited_formatted?: string }>;
  ismanaged: WebAttribute<Role_Select, { ismanaged: boolean | null }, {  }>;
  modifiedby_guid: WebAttribute<Role_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<Role_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<Role_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  name: WebAttribute<Role_Select, { name: string | null }, {  }>;
  organizationid: WebAttribute<Role_Select, { organizationid: string | null }, {  }>;
  overriddencreatedon: WebAttribute<Role_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  overwritetime: WebAttribute<Role_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  parentroleid_guid: WebAttribute<Role_Select, { parentroleid_guid: string | null }, { parentroleid_formatted?: string }>;
  parentrootroleid_guid: WebAttribute<Role_Select, { parentrootroleid_guid: string | null }, { parentrootroleid_formatted?: string }>;
  roleid: WebAttribute<Role_Select, { roleid: string | null }, {  }>;
  roleidunique: WebAttribute<Role_Select, { roleidunique: string | null }, {  }>;
  roletemplateid_guid: WebAttribute<Role_Select, { roletemplateid_guid: string | null }, { roletemplateid_formatted?: string }>;
  solutionid: WebAttribute<Role_Select, { solutionid: string | null }, {  }>;
  supportingsolutionid: WebAttribute<Role_Select, { supportingsolutionid: string | null }, {  }>;
  versionnumber: WebAttribute<Role_Select, { versionnumber: number | null }, {  }>;
}
interface Role_Filter {
  businessunitid_guid: XQW.Guid;
  canbedeleted: any;
  componentstate: componentstate;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  iscustomizable: any;
  isinherited: isinherited;
  ismanaged: boolean;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  name: string;
  organizationid: XQW.Guid;
  overriddencreatedon: Date;
  overwritetime: Date;
  parentroleid_guid: XQW.Guid;
  parentrootroleid_guid: XQW.Guid;
  roleid: XQW.Guid;
  roleidunique: XQW.Guid;
  roletemplateid_guid: XQW.Guid;
  solutionid: XQW.Guid;
  supportingsolutionid: XQW.Guid;
  versionnumber: number;
}
interface Role_Expand {
  Role_AsyncOperations: WebExpand<Role_Expand, AsyncOperation_Select, AsyncOperation_Filter, { Role_AsyncOperations: AsyncOperation_Result[] }>;
  Role_BulkDeleteFailures: WebExpand<Role_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { Role_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  Role_SyncErrors: WebExpand<Role_Expand, SyncError_Select, SyncError_Filter, { Role_SyncErrors: SyncError_Result[] }>;
  applicationuserrole: WebExpand<Role_Expand, ApplicationUser_Select, ApplicationUser_Filter, { applicationuserrole: ApplicationUser_Result[] }>;
  appmoduleroles_association: WebExpand<Role_Expand, AppModule_Select, AppModule_Filter, { appmoduleroles_association: AppModule_Result[] }>;
  businessunitid: WebExpand<Role_Expand, BusinessUnit_Select, BusinessUnit_Filter, { businessunitid: BusinessUnit_Result }>;
  createdby: WebExpand<Role_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<Role_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<Role_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<Role_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_role_msdyn_actioncardrolesetting: WebExpand<Role_Expand, msdyn_actioncardrolesetting_Select, msdyn_actioncardrolesetting_Filter, { msdyn_role_msdyn_actioncardrolesetting: msdyn_actioncardrolesetting_Result[] }>;
  msdyn_role_msdyn_personasecurityrolemapping: WebExpand<Role_Expand, msdyn_personasecurityrolemapping_Select, msdyn_personasecurityrolemapping_Filter, { msdyn_role_msdyn_personasecurityrolemapping: msdyn_personasecurityrolemapping_Result[] }>;
  organizationid_organization: WebExpand<Role_Expand, Organization_Select, Organization_Filter, { organizationid_organization: Organization_Result }>;
  parentroleid: WebExpand<Role_Expand, Role_Select, Role_Filter, { parentroleid: Role_Result }>;
  parentrootroleid: WebExpand<Role_Expand, Role_Select, Role_Filter, { parentrootroleid: Role_Result }>;
  role_parent_role: WebExpand<Role_Expand, Role_Select, Role_Filter, { role_parent_role: Role_Result[] }>;
  role_parent_root_role: WebExpand<Role_Expand, Role_Select, Role_Filter, { role_parent_root_role: Role_Result[] }>;
  roleprivileges_association: WebExpand<Role_Expand, Privilege_Select, Privilege_Filter, { roleprivileges_association: Privilege_Result[] }>;
  roletemplateid: WebExpand<Role_Expand, RoleTemplate_Select, RoleTemplate_Filter, { roletemplateid: RoleTemplate_Result }>;
  solution_role: WebExpand<Role_Expand, Solution_Select, Solution_Filter, { solution_role: Solution_Result }>;
  systemuserroles_association: WebExpand<Role_Expand, SystemUser_Select, SystemUser_Filter, { systemuserroles_association: SystemUser_Result[] }>;
  teamroles_association: WebExpand<Role_Expand, Team_Select, Team_Filter, { teamroles_association: Team_Result[] }>;
  userentityinstancedata_role: WebExpand<Role_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { userentityinstancedata_role: UserEntityInstanceData_Result[] }>;
}
interface Role_FormattedResult {
  businessunitid_formatted?: string;
  componentstate_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  isinherited_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  overriddencreatedon_formatted?: string;
  overwritetime_formatted?: string;
  parentroleid_formatted?: string;
  parentrootroleid_formatted?: string;
  roletemplateid_formatted?: string;
}
interface Role_Result extends Role_Base, Role_Relationships {
  "@odata.etag": string;
  businessunitid_guid: string | null;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  parentroleid_guid: string | null;
  parentrootroleid_guid: string | null;
  roletemplateid_guid: string | null;
}
interface Role_RelatedOne {
  businessunitid: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  organizationid_organization: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
  parentroleid: WebMappingRetrieve<Role_Select,Role_Expand,Role_Filter,Role_Fixed,Role_Result,Role_FormattedResult>;
  parentrootroleid: WebMappingRetrieve<Role_Select,Role_Expand,Role_Filter,Role_Fixed,Role_Result,Role_FormattedResult>;
  roletemplateid: WebMappingRetrieve<RoleTemplate_Select,RoleTemplate_Expand,RoleTemplate_Filter,RoleTemplate_Fixed,RoleTemplate_Result,RoleTemplate_FormattedResult>;
  solution_role: WebMappingRetrieve<Solution_Select,Solution_Expand,Solution_Filter,Solution_Fixed,Solution_Result,Solution_FormattedResult>;
}
interface Role_RelatedMany {
  Role_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  Role_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  Role_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  applicationuserrole: WebMappingRetrieve<ApplicationUser_Select,ApplicationUser_Expand,ApplicationUser_Filter,ApplicationUser_Fixed,ApplicationUser_Result,ApplicationUser_FormattedResult>;
  appmoduleroles_association: WebMappingRetrieve<AppModule_Select,AppModule_Expand,AppModule_Filter,AppModule_Fixed,AppModule_Result,AppModule_FormattedResult>;
  msdyn_role_msdyn_actioncardrolesetting: WebMappingRetrieve<msdyn_actioncardrolesetting_Select,msdyn_actioncardrolesetting_Expand,msdyn_actioncardrolesetting_Filter,msdyn_actioncardrolesetting_Fixed,msdyn_actioncardrolesetting_Result,msdyn_actioncardrolesetting_FormattedResult>;
  msdyn_role_msdyn_personasecurityrolemapping: WebMappingRetrieve<msdyn_personasecurityrolemapping_Select,msdyn_personasecurityrolemapping_Expand,msdyn_personasecurityrolemapping_Filter,msdyn_personasecurityrolemapping_Fixed,msdyn_personasecurityrolemapping_Result,msdyn_personasecurityrolemapping_FormattedResult>;
  role_parent_role: WebMappingRetrieve<Role_Select,Role_Expand,Role_Filter,Role_Fixed,Role_Result,Role_FormattedResult>;
  role_parent_root_role: WebMappingRetrieve<Role_Select,Role_Expand,Role_Filter,Role_Fixed,Role_Result,Role_FormattedResult>;
  roleprivileges_association: WebMappingRetrieve<Privilege_Select,Privilege_Expand,Privilege_Filter,Privilege_Fixed,Privilege_Result,Privilege_FormattedResult>;
  systemuserroles_association: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  teamroles_association: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  userentityinstancedata_role: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  roles: WebMappingRetrieve<Role_Select,Role_Expand,Role_Filter,Role_Fixed,Role_Result,Role_FormattedResult>;
}
interface WebEntitiesRelated {
  roles: WebMappingRelated<Role_RelatedOne,Role_RelatedMany>;
}
interface WebEntitiesCUDA {
  roles: WebMappingCUDA<Role_Create,Role_Update,Role_Select>;
}
