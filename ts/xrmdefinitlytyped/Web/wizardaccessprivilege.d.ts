interface WizardAccessPrivilege_Base extends WebEntity {
  createdon?: Date | null;
  entityname?: string | null;
  modifiedon?: Date | null;
  privilegename?: string | null;
  versionnumber?: number | null;
  wizardaccessprivilegeid?: string | null;
}
interface WizardAccessPrivilege_Relationships {
  userentityinstancedata_wizardaccessprivilege?: UserEntityInstanceData_Result[] | null;
}
interface WizardAccessPrivilege extends WizardAccessPrivilege_Base, WizardAccessPrivilege_Relationships {
  webwizardid_bind$webwizards?: string | null;
}
interface WizardAccessPrivilege_Create extends WizardAccessPrivilege {
}
interface WizardAccessPrivilege_Update extends WizardAccessPrivilege {
}
interface WizardAccessPrivilege_Select {
  createdby_guid: WebAttribute<WizardAccessPrivilege_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<WizardAccessPrivilege_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<WizardAccessPrivilege_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  entityname: WebAttribute<WizardAccessPrivilege_Select, { entityname: string | null }, {  }>;
  modifiedby_guid: WebAttribute<WizardAccessPrivilege_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<WizardAccessPrivilege_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<WizardAccessPrivilege_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  organizationid_guid: WebAttribute<WizardAccessPrivilege_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  privilegename: WebAttribute<WizardAccessPrivilege_Select, { privilegename: string | null }, {  }>;
  versionnumber: WebAttribute<WizardAccessPrivilege_Select, { versionnumber: number | null }, {  }>;
  webwizardid_guid: WebAttribute<WizardAccessPrivilege_Select, { webwizardid_guid: string | null }, { webwizardid_formatted?: string }>;
  wizardaccessprivilegeid: WebAttribute<WizardAccessPrivilege_Select, { wizardaccessprivilegeid: string | null }, {  }>;
}
interface WizardAccessPrivilege_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  entityname: string;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  organizationid_guid: XQW.Guid;
  privilegename: string;
  versionnumber: number;
  webwizardid_guid: XQW.Guid;
  wizardaccessprivilegeid: XQW.Guid;
}
interface WizardAccessPrivilege_Expand {
  createdby: WebExpand<WizardAccessPrivilege_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<WizardAccessPrivilege_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<WizardAccessPrivilege_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<WizardAccessPrivilege_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  organizationid: WebExpand<WizardAccessPrivilege_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
  userentityinstancedata_wizardaccessprivilege: WebExpand<WizardAccessPrivilege_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { userentityinstancedata_wizardaccessprivilege: UserEntityInstanceData_Result[] }>;
  webwizardid: WebExpand<WizardAccessPrivilege_Expand, WebWizard_Select, WebWizard_Filter, { webwizardid: WebWizard_Result }>;
}
interface WizardAccessPrivilege_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  organizationid_formatted?: string;
  webwizardid_formatted?: string;
}
interface WizardAccessPrivilege_Result extends WizardAccessPrivilege_Base, WizardAccessPrivilege_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
  webwizardid_guid: string | null;
}
interface WizardAccessPrivilege_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
  webwizardid: WebMappingRetrieve<WebWizard_Select,WebWizard_Expand,WebWizard_Filter,WebWizard_Fixed,WebWizard_Result,WebWizard_FormattedResult>;
}
interface WizardAccessPrivilege_RelatedMany {
  userentityinstancedata_wizardaccessprivilege: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  wizardaccessprivileges: WebMappingRetrieve<WizardAccessPrivilege_Select,WizardAccessPrivilege_Expand,WizardAccessPrivilege_Filter,WizardAccessPrivilege_Fixed,WizardAccessPrivilege_Result,WizardAccessPrivilege_FormattedResult>;
}
interface WebEntitiesRelated {
  wizardaccessprivileges: WebMappingRelated<WizardAccessPrivilege_RelatedOne,WizardAccessPrivilege_RelatedMany>;
}
interface WebEntitiesCUDA {
  wizardaccessprivileges: WebMappingCUDA<WizardAccessPrivilege_Create,WizardAccessPrivilege_Update,WizardAccessPrivilege_Select>;
}
