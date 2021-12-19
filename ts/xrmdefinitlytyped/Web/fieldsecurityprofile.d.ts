interface FieldSecurityProfile_Base extends WebEntity {
  componentstate?: componentstate | null;
  createdon?: Date | null;
  description?: string | null;
  fieldsecurityprofileid?: string | null;
  fieldsecurityprofileidunique?: string | null;
  ismanaged?: boolean | null;
  modifiedon?: Date | null;
  name?: string | null;
  overwritetime?: Date | null;
  solutionid?: string | null;
  supportingsolutionid?: string | null;
  versionnumber?: number | null;
}
interface FieldSecurityProfile_Relationships {
  FieldSecurityProfile_SyncErrors?: SyncError_Result[] | null;
  applicationuserprofile?: ApplicationUser_Result[] | null;
  lk_fieldpermission_fieldsecurityprofileid?: FieldPermission_Result[] | null;
  solution_fieldsecurityprofile?: Solution_Result | null;
  systemuserprofiles_association?: SystemUser_Result[] | null;
  teamprofiles_association?: Team_Result[] | null;
  userentityinstancedata_fieldsecurityprofile?: UserEntityInstanceData_Result[] | null;
}
interface FieldSecurityProfile extends FieldSecurityProfile_Base, FieldSecurityProfile_Relationships {
}
interface FieldSecurityProfile_Create extends FieldSecurityProfile {
}
interface FieldSecurityProfile_Update extends FieldSecurityProfile {
}
interface FieldSecurityProfile_Select {
  componentstate: WebAttribute<FieldSecurityProfile_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  createdby_guid: WebAttribute<FieldSecurityProfile_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<FieldSecurityProfile_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<FieldSecurityProfile_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  description: WebAttribute<FieldSecurityProfile_Select, { description: string | null }, {  }>;
  fieldsecurityprofileid: WebAttribute<FieldSecurityProfile_Select, { fieldsecurityprofileid: string | null }, {  }>;
  fieldsecurityprofileidunique: WebAttribute<FieldSecurityProfile_Select, { fieldsecurityprofileidunique: string | null }, {  }>;
  ismanaged: WebAttribute<FieldSecurityProfile_Select, { ismanaged: boolean | null }, {  }>;
  modifiedby_guid: WebAttribute<FieldSecurityProfile_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<FieldSecurityProfile_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<FieldSecurityProfile_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  name: WebAttribute<FieldSecurityProfile_Select, { name: string | null }, {  }>;
  organizationid_guid: WebAttribute<FieldSecurityProfile_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overwritetime: WebAttribute<FieldSecurityProfile_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  solutionid: WebAttribute<FieldSecurityProfile_Select, { solutionid: string | null }, {  }>;
  supportingsolutionid: WebAttribute<FieldSecurityProfile_Select, { supportingsolutionid: string | null }, {  }>;
  versionnumber: WebAttribute<FieldSecurityProfile_Select, { versionnumber: number | null }, {  }>;
}
interface FieldSecurityProfile_Filter {
  componentstate: componentstate;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  description: string;
  fieldsecurityprofileid: XQW.Guid;
  fieldsecurityprofileidunique: XQW.Guid;
  ismanaged: boolean;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  name: string;
  organizationid_guid: XQW.Guid;
  overwritetime: Date;
  solutionid: XQW.Guid;
  supportingsolutionid: XQW.Guid;
  versionnumber: number;
}
interface FieldSecurityProfile_Expand {
  FieldSecurityProfile_SyncErrors: WebExpand<FieldSecurityProfile_Expand, SyncError_Select, SyncError_Filter, { FieldSecurityProfile_SyncErrors: SyncError_Result[] }>;
  applicationuserprofile: WebExpand<FieldSecurityProfile_Expand, ApplicationUser_Select, ApplicationUser_Filter, { applicationuserprofile: ApplicationUser_Result[] }>;
  createdby: WebExpand<FieldSecurityProfile_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<FieldSecurityProfile_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  lk_fieldpermission_fieldsecurityprofileid: WebExpand<FieldSecurityProfile_Expand, FieldPermission_Select, FieldPermission_Filter, { lk_fieldpermission_fieldsecurityprofileid: FieldPermission_Result[] }>;
  modifiedby: WebExpand<FieldSecurityProfile_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<FieldSecurityProfile_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  organizationid: WebExpand<FieldSecurityProfile_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
  solution_fieldsecurityprofile: WebExpand<FieldSecurityProfile_Expand, Solution_Select, Solution_Filter, { solution_fieldsecurityprofile: Solution_Result }>;
  systemuserprofiles_association: WebExpand<FieldSecurityProfile_Expand, SystemUser_Select, SystemUser_Filter, { systemuserprofiles_association: SystemUser_Result[] }>;
  teamprofiles_association: WebExpand<FieldSecurityProfile_Expand, Team_Select, Team_Filter, { teamprofiles_association: Team_Result[] }>;
  userentityinstancedata_fieldsecurityprofile: WebExpand<FieldSecurityProfile_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { userentityinstancedata_fieldsecurityprofile: UserEntityInstanceData_Result[] }>;
}
interface FieldSecurityProfile_FormattedResult {
  componentstate_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  organizationid_formatted?: string;
  overwritetime_formatted?: string;
}
interface FieldSecurityProfile_Result extends FieldSecurityProfile_Base, FieldSecurityProfile_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
}
interface FieldSecurityProfile_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
  solution_fieldsecurityprofile: WebMappingRetrieve<Solution_Select,Solution_Expand,Solution_Filter,Solution_Fixed,Solution_Result,Solution_FormattedResult>;
}
interface FieldSecurityProfile_RelatedMany {
  FieldSecurityProfile_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  applicationuserprofile: WebMappingRetrieve<ApplicationUser_Select,ApplicationUser_Expand,ApplicationUser_Filter,ApplicationUser_Fixed,ApplicationUser_Result,ApplicationUser_FormattedResult>;
  lk_fieldpermission_fieldsecurityprofileid: WebMappingRetrieve<FieldPermission_Select,FieldPermission_Expand,FieldPermission_Filter,FieldPermission_Fixed,FieldPermission_Result,FieldPermission_FormattedResult>;
  systemuserprofiles_association: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  teamprofiles_association: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  userentityinstancedata_fieldsecurityprofile: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  fieldsecurityprofiles: WebMappingRetrieve<FieldSecurityProfile_Select,FieldSecurityProfile_Expand,FieldSecurityProfile_Filter,FieldSecurityProfile_Fixed,FieldSecurityProfile_Result,FieldSecurityProfile_FormattedResult>;
}
interface WebEntitiesRelated {
  fieldsecurityprofiles: WebMappingRelated<FieldSecurityProfile_RelatedOne,FieldSecurityProfile_RelatedMany>;
}
interface WebEntitiesCUDA {
  fieldsecurityprofiles: WebMappingCUDA<FieldSecurityProfile_Create,FieldSecurityProfile_Update,FieldSecurityProfile_Select>;
}
