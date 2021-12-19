interface WebWizard_Base extends WebEntity {
  accessprivileges?: string | null;
  componentstate?: componentstate | null;
  createdon?: Date | null;
  introducedversion?: string | null;
  ismanaged?: boolean | null;
  isstaticpagesequence?: boolean | null;
  modifiedon?: Date | null;
  name?: string | null;
  overwritetime?: Date | null;
  solutionid?: string | null;
  startpagesequencenumber?: number | null;
  supportingsolutionid?: string | null;
  titleresourcestring?: string | null;
  versionnumber?: number | null;
  webwizardid?: string | null;
  webwizardidunique?: string | null;
  wizardpageheight?: number | null;
  wizardpagewidth?: number | null;
}
interface WebWizard_Relationships {
  lk_wizardaccessprivilege_webwizardid?: WizardAccessPrivilege_Result[] | null;
  lk_wizardpage_webwizardid?: WizardPage_Result[] | null;
  userentityinstancedata_webwizard?: UserEntityInstanceData_Result[] | null;
}
interface WebWizard extends WebWizard_Base, WebWizard_Relationships {
}
interface WebWizard_Create extends WebWizard {
}
interface WebWizard_Update extends WebWizard {
}
interface WebWizard_Select {
  accessprivileges: WebAttribute<WebWizard_Select, { accessprivileges: string | null }, {  }>;
  componentstate: WebAttribute<WebWizard_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  createdby_guid: WebAttribute<WebWizard_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<WebWizard_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<WebWizard_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  introducedversion: WebAttribute<WebWizard_Select, { introducedversion: string | null }, {  }>;
  ismanaged: WebAttribute<WebWizard_Select, { ismanaged: boolean | null }, {  }>;
  isstaticpagesequence: WebAttribute<WebWizard_Select, { isstaticpagesequence: boolean | null }, {  }>;
  modifiedby_guid: WebAttribute<WebWizard_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<WebWizard_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<WebWizard_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  name: WebAttribute<WebWizard_Select, { name: string | null }, {  }>;
  organizationid_guid: WebAttribute<WebWizard_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overwritetime: WebAttribute<WebWizard_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  solutionid: WebAttribute<WebWizard_Select, { solutionid: string | null }, {  }>;
  startpagesequencenumber: WebAttribute<WebWizard_Select, { startpagesequencenumber: number | null }, {  }>;
  supportingsolutionid: WebAttribute<WebWizard_Select, { supportingsolutionid: string | null }, {  }>;
  titleresourcestring: WebAttribute<WebWizard_Select, { titleresourcestring: string | null }, {  }>;
  versionnumber: WebAttribute<WebWizard_Select, { versionnumber: number | null }, {  }>;
  webwizardid: WebAttribute<WebWizard_Select, { webwizardid: string | null }, {  }>;
  webwizardidunique: WebAttribute<WebWizard_Select, { webwizardidunique: string | null }, {  }>;
  wizardpageheight: WebAttribute<WebWizard_Select, { wizardpageheight: number | null }, {  }>;
  wizardpagewidth: WebAttribute<WebWizard_Select, { wizardpagewidth: number | null }, {  }>;
}
interface WebWizard_Filter {
  accessprivileges: string;
  componentstate: componentstate;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  introducedversion: string;
  ismanaged: boolean;
  isstaticpagesequence: boolean;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  name: string;
  organizationid_guid: XQW.Guid;
  overwritetime: Date;
  solutionid: XQW.Guid;
  startpagesequencenumber: number;
  supportingsolutionid: XQW.Guid;
  titleresourcestring: string;
  versionnumber: number;
  webwizardid: XQW.Guid;
  webwizardidunique: XQW.Guid;
  wizardpageheight: number;
  wizardpagewidth: number;
}
interface WebWizard_Expand {
  createdby: WebExpand<WebWizard_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<WebWizard_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  lk_wizardaccessprivilege_webwizardid: WebExpand<WebWizard_Expand, WizardAccessPrivilege_Select, WizardAccessPrivilege_Filter, { lk_wizardaccessprivilege_webwizardid: WizardAccessPrivilege_Result[] }>;
  lk_wizardpage_webwizardid: WebExpand<WebWizard_Expand, WizardPage_Select, WizardPage_Filter, { lk_wizardpage_webwizardid: WizardPage_Result[] }>;
  modifiedby: WebExpand<WebWizard_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<WebWizard_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  organizationid: WebExpand<WebWizard_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
  userentityinstancedata_webwizard: WebExpand<WebWizard_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { userentityinstancedata_webwizard: UserEntityInstanceData_Result[] }>;
}
interface WebWizard_FormattedResult {
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
interface WebWizard_Result extends WebWizard_Base, WebWizard_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
}
interface WebWizard_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
}
interface WebWizard_RelatedMany {
  lk_wizardaccessprivilege_webwizardid: WebMappingRetrieve<WizardAccessPrivilege_Select,WizardAccessPrivilege_Expand,WizardAccessPrivilege_Filter,WizardAccessPrivilege_Fixed,WizardAccessPrivilege_Result,WizardAccessPrivilege_FormattedResult>;
  lk_wizardpage_webwizardid: WebMappingRetrieve<WizardPage_Select,WizardPage_Expand,WizardPage_Filter,WizardPage_Fixed,WizardPage_Result,WizardPage_FormattedResult>;
  userentityinstancedata_webwizard: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  webwizards: WebMappingRetrieve<WebWizard_Select,WebWizard_Expand,WebWizard_Filter,WebWizard_Fixed,WebWizard_Result,WebWizard_FormattedResult>;
}
interface WebEntitiesRelated {
  webwizards: WebMappingRelated<WebWizard_RelatedOne,WebWizard_RelatedMany>;
}
interface WebEntitiesCUDA {
  webwizards: WebMappingCUDA<WebWizard_Create,WebWizard_Update,WebWizard_Select>;
}
