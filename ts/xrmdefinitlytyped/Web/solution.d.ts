interface Solution_Base extends WebEntity {
  createdon?: Date | null;
  description?: string | null;
  friendlyname?: string | null;
  installedon?: Date | null;
  isapimanaged?: boolean | null;
  isinternal?: boolean | null;
  ismanaged?: boolean | null;
  isvisible?: boolean | null;
  modifiedon?: Date | null;
  pinpointassetid?: string | null;
  pinpointpublisherid?: number | null;
  pinpointsolutiondefaultlocale?: string | null;
  pinpointsolutionid?: number | null;
  solutionid?: string | null;
  solutionpackageversion?: string | null;
  solutiontype?: solution_solutiontype | null;
  templatesuffix?: string | null;
  thumbprint?: string | null;
  uniquename?: string | null;
  updatedon?: Date | null;
  upgradeinfo?: string | null;
  version?: string | null;
  versionnumber?: number | null;
}
interface Solution_Relationships {
  FK_CanvasApp_Solution?: CanvasApp_Result[] | null;
  Solution_SyncErrors?: SyncError_Result[] | null;
  fileid?: FileAttachment_Result | null;
  package_solution?: package_Result[] | null;
  regardingobjectid_fileattachment_solution?: FileAttachment_Result[] | null;
  solution_base_dependencynode?: DependencyNode_Result[] | null;
  solution_fieldpermission?: FieldPermission_Result[] | null;
  solution_fieldsecurityprofile?: FieldSecurityProfile_Result[] | null;
  solution_parent_solution?: Solution_Result[] | null;
  solution_privilege?: Privilege_Result[] | null;
  solution_role?: Role_Result[] | null;
  solution_roleprivileges?: RolePrivileges_Result[] | null;
  solution_solutioncomponent?: SolutionComponent_Result[] | null;
  solution_top_dependencynode?: DependencyNode_Result[] | null;
  userentityinstancedata_solution?: UserEntityInstanceData_Result[] | null;
}
interface Solution extends Solution_Base, Solution_Relationships {
  configurationpageid_bind$webresourceset?: string | null;
  publisherid_bind$publishers?: string | null;
}
interface Solution_Create extends Solution {
}
interface Solution_Update extends Solution {
}
interface Solution_Select {
  configurationpageid_guid: WebAttribute<Solution_Select, { configurationpageid_guid: string | null }, { configurationpageid_formatted?: string }>;
  createdby_guid: WebAttribute<Solution_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<Solution_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<Solution_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  description: WebAttribute<Solution_Select, { description: string | null }, {  }>;
  friendlyname: WebAttribute<Solution_Select, { friendlyname: string | null }, {  }>;
  installedon: WebAttribute<Solution_Select, { installedon: Date | null }, { installedon_formatted?: string }>;
  isapimanaged: WebAttribute<Solution_Select, { isapimanaged: boolean | null }, {  }>;
  isinternal: WebAttribute<Solution_Select, { isinternal: boolean | null }, {  }>;
  ismanaged: WebAttribute<Solution_Select, { ismanaged: boolean | null }, {  }>;
  isvisible: WebAttribute<Solution_Select, { isvisible: boolean | null }, {  }>;
  modifiedby_guid: WebAttribute<Solution_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<Solution_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<Solution_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  organizationid_guid: WebAttribute<Solution_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  parentsolutionid_guid: WebAttribute<Solution_Select, { parentsolutionid_guid: string | null }, { parentsolutionid_formatted?: string }>;
  pinpointassetid: WebAttribute<Solution_Select, { pinpointassetid: string | null }, {  }>;
  pinpointpublisherid: WebAttribute<Solution_Select, { pinpointpublisherid: number | null }, {  }>;
  pinpointsolutiondefaultlocale: WebAttribute<Solution_Select, { pinpointsolutiondefaultlocale: string | null }, {  }>;
  pinpointsolutionid: WebAttribute<Solution_Select, { pinpointsolutionid: number | null }, {  }>;
  publisherid_guid: WebAttribute<Solution_Select, { publisherid_guid: string | null }, { publisherid_formatted?: string }>;
  solutionid: WebAttribute<Solution_Select, { solutionid: string | null }, {  }>;
  solutionpackageversion: WebAttribute<Solution_Select, { solutionpackageversion: string | null }, {  }>;
  solutiontype: WebAttribute<Solution_Select, { solutiontype: solution_solutiontype | null }, { solutiontype_formatted?: string }>;
  templatesuffix: WebAttribute<Solution_Select, { templatesuffix: string | null }, {  }>;
  thumbprint: WebAttribute<Solution_Select, { thumbprint: string | null }, {  }>;
  uniquename: WebAttribute<Solution_Select, { uniquename: string | null }, {  }>;
  updatedon: WebAttribute<Solution_Select, { updatedon: Date | null }, { updatedon_formatted?: string }>;
  upgradeinfo: WebAttribute<Solution_Select, { upgradeinfo: string | null }, {  }>;
  version: WebAttribute<Solution_Select, { version: string | null }, {  }>;
  versionnumber: WebAttribute<Solution_Select, { versionnumber: number | null }, {  }>;
}
interface Solution_Filter {
  configurationpageid_guid: XQW.Guid;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  description: string;
  friendlyname: string;
  installedon: Date;
  isapimanaged: boolean;
  isinternal: boolean;
  ismanaged: boolean;
  isvisible: boolean;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  organizationid_guid: XQW.Guid;
  parentsolutionid_guid: XQW.Guid;
  pinpointassetid: string;
  pinpointpublisherid: number;
  pinpointsolutiondefaultlocale: string;
  pinpointsolutionid: number;
  publisherid_guid: XQW.Guid;
  solutionid: XQW.Guid;
  solutionpackageversion: string;
  solutiontype: solution_solutiontype;
  templatesuffix: string;
  thumbprint: string;
  uniquename: string;
  updatedon: Date;
  upgradeinfo: string;
  version: string;
  versionnumber: number;
}
interface Solution_Expand {
  FK_CanvasApp_Solution: WebExpand<Solution_Expand, CanvasApp_Select, CanvasApp_Filter, { FK_CanvasApp_Solution: CanvasApp_Result[] }>;
  Solution_SyncErrors: WebExpand<Solution_Expand, SyncError_Select, SyncError_Filter, { Solution_SyncErrors: SyncError_Result[] }>;
  configurationpageid: WebExpand<Solution_Expand, WebResource_Select, WebResource_Filter, { configurationpageid: WebResource_Result }>;
  createdby: WebExpand<Solution_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<Solution_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  fileid: WebExpand<Solution_Expand, FileAttachment_Select, FileAttachment_Filter, { fileid: FileAttachment_Result }>;
  modifiedby: WebExpand<Solution_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<Solution_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  organizationid: WebExpand<Solution_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
  package_solution: WebExpand<Solution_Expand, package_Select, package_Filter, { package_solution: package_Result[] }>;
  parentsolutionid: WebExpand<Solution_Expand, Solution_Select, Solution_Filter, { parentsolutionid: Solution_Result }>;
  publisherid: WebExpand<Solution_Expand, Publisher_Select, Publisher_Filter, { publisherid: Publisher_Result }>;
  regardingobjectid_fileattachment_solution: WebExpand<Solution_Expand, FileAttachment_Select, FileAttachment_Filter, { regardingobjectid_fileattachment_solution: FileAttachment_Result[] }>;
  solution_base_dependencynode: WebExpand<Solution_Expand, DependencyNode_Select, DependencyNode_Filter, { solution_base_dependencynode: DependencyNode_Result[] }>;
  solution_fieldpermission: WebExpand<Solution_Expand, FieldPermission_Select, FieldPermission_Filter, { solution_fieldpermission: FieldPermission_Result[] }>;
  solution_fieldsecurityprofile: WebExpand<Solution_Expand, FieldSecurityProfile_Select, FieldSecurityProfile_Filter, { solution_fieldsecurityprofile: FieldSecurityProfile_Result[] }>;
  solution_parent_solution: WebExpand<Solution_Expand, Solution_Select, Solution_Filter, { solution_parent_solution: Solution_Result[] }>;
  solution_privilege: WebExpand<Solution_Expand, Privilege_Select, Privilege_Filter, { solution_privilege: Privilege_Result[] }>;
  solution_role: WebExpand<Solution_Expand, Role_Select, Role_Filter, { solution_role: Role_Result[] }>;
  solution_roleprivileges: WebExpand<Solution_Expand, RolePrivileges_Select, RolePrivileges_Filter, { solution_roleprivileges: RolePrivileges_Result[] }>;
  solution_solutioncomponent: WebExpand<Solution_Expand, SolutionComponent_Select, SolutionComponent_Filter, { solution_solutioncomponent: SolutionComponent_Result[] }>;
  solution_top_dependencynode: WebExpand<Solution_Expand, DependencyNode_Select, DependencyNode_Filter, { solution_top_dependencynode: DependencyNode_Result[] }>;
  userentityinstancedata_solution: WebExpand<Solution_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { userentityinstancedata_solution: UserEntityInstanceData_Result[] }>;
}
interface Solution_FormattedResult {
  configurationpageid_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  installedon_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  organizationid_formatted?: string;
  parentsolutionid_formatted?: string;
  publisherid_formatted?: string;
  solutiontype_formatted?: string;
  updatedon_formatted?: string;
}
interface Solution_Result extends Solution_Base, Solution_Relationships {
  "@odata.etag": string;
  configurationpageid_guid: string | null;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
  parentsolutionid_guid: string | null;
  publisherid_guid: string | null;
}
interface Solution_RelatedOne {
  configurationpageid: WebMappingRetrieve<WebResource_Select,WebResource_Expand,WebResource_Filter,WebResource_Fixed,WebResource_Result,WebResource_FormattedResult>;
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  fileid: WebMappingRetrieve<FileAttachment_Select,FileAttachment_Expand,FileAttachment_Filter,FileAttachment_Fixed,FileAttachment_Result,FileAttachment_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
  parentsolutionid: WebMappingRetrieve<Solution_Select,Solution_Expand,Solution_Filter,Solution_Fixed,Solution_Result,Solution_FormattedResult>;
  publisherid: WebMappingRetrieve<Publisher_Select,Publisher_Expand,Publisher_Filter,Publisher_Fixed,Publisher_Result,Publisher_FormattedResult>;
}
interface Solution_RelatedMany {
  FK_CanvasApp_Solution: WebMappingRetrieve<CanvasApp_Select,CanvasApp_Expand,CanvasApp_Filter,CanvasApp_Fixed,CanvasApp_Result,CanvasApp_FormattedResult>;
  Solution_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  package_solution: WebMappingRetrieve<package_Select,package_Expand,package_Filter,package_Fixed,package_Result,package_FormattedResult>;
  regardingobjectid_fileattachment_solution: WebMappingRetrieve<FileAttachment_Select,FileAttachment_Expand,FileAttachment_Filter,FileAttachment_Fixed,FileAttachment_Result,FileAttachment_FormattedResult>;
  solution_base_dependencynode: WebMappingRetrieve<DependencyNode_Select,DependencyNode_Expand,DependencyNode_Filter,DependencyNode_Fixed,DependencyNode_Result,DependencyNode_FormattedResult>;
  solution_fieldpermission: WebMappingRetrieve<FieldPermission_Select,FieldPermission_Expand,FieldPermission_Filter,FieldPermission_Fixed,FieldPermission_Result,FieldPermission_FormattedResult>;
  solution_fieldsecurityprofile: WebMappingRetrieve<FieldSecurityProfile_Select,FieldSecurityProfile_Expand,FieldSecurityProfile_Filter,FieldSecurityProfile_Fixed,FieldSecurityProfile_Result,FieldSecurityProfile_FormattedResult>;
  solution_parent_solution: WebMappingRetrieve<Solution_Select,Solution_Expand,Solution_Filter,Solution_Fixed,Solution_Result,Solution_FormattedResult>;
  solution_privilege: WebMappingRetrieve<Privilege_Select,Privilege_Expand,Privilege_Filter,Privilege_Fixed,Privilege_Result,Privilege_FormattedResult>;
  solution_role: WebMappingRetrieve<Role_Select,Role_Expand,Role_Filter,Role_Fixed,Role_Result,Role_FormattedResult>;
  solution_roleprivileges: WebMappingRetrieve<RolePrivileges_Select,RolePrivileges_Expand,RolePrivileges_Filter,RolePrivileges_Fixed,RolePrivileges_Result,RolePrivileges_FormattedResult>;
  solution_solutioncomponent: WebMappingRetrieve<SolutionComponent_Select,SolutionComponent_Expand,SolutionComponent_Filter,SolutionComponent_Fixed,SolutionComponent_Result,SolutionComponent_FormattedResult>;
  solution_top_dependencynode: WebMappingRetrieve<DependencyNode_Select,DependencyNode_Expand,DependencyNode_Filter,DependencyNode_Fixed,DependencyNode_Result,DependencyNode_FormattedResult>;
  userentityinstancedata_solution: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  solutions: WebMappingRetrieve<Solution_Select,Solution_Expand,Solution_Filter,Solution_Fixed,Solution_Result,Solution_FormattedResult>;
}
interface WebEntitiesRelated {
  solutions: WebMappingRelated<Solution_RelatedOne,Solution_RelatedMany>;
}
interface WebEntitiesCUDA {
  solutions: WebMappingCUDA<Solution_Create,Solution_Update,Solution_Select>;
}
