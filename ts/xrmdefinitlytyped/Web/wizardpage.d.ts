interface WizardPage_Base extends WebEntity {
  createdon?: Date | null;
  modifiedon?: Date | null;
  pagedatatopost?: string | null;
  pagesequencenumber?: number | null;
  pageurl?: string | null;
  versionnumber?: number | null;
  wizardpageid?: string | null;
}
interface WizardPage_Relationships {
  userentityinstancedata_wizardpage?: UserEntityInstanceData_Result[] | null;
}
interface WizardPage extends WizardPage_Base, WizardPage_Relationships {
  webwizardid_bind$webwizards?: string | null;
}
interface WizardPage_Create extends WizardPage {
}
interface WizardPage_Update extends WizardPage {
}
interface WizardPage_Select {
  createdby_guid: WebAttribute<WizardPage_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<WizardPage_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<WizardPage_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  modifiedby_guid: WebAttribute<WizardPage_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<WizardPage_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<WizardPage_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  organizationid_guid: WebAttribute<WizardPage_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  pagedatatopost: WebAttribute<WizardPage_Select, { pagedatatopost: string | null }, {  }>;
  pagesequencenumber: WebAttribute<WizardPage_Select, { pagesequencenumber: number | null }, {  }>;
  pageurl: WebAttribute<WizardPage_Select, { pageurl: string | null }, {  }>;
  versionnumber: WebAttribute<WizardPage_Select, { versionnumber: number | null }, {  }>;
  webwizardid_guid: WebAttribute<WizardPage_Select, { webwizardid_guid: string | null }, { webwizardid_formatted?: string }>;
  wizardpageid: WebAttribute<WizardPage_Select, { wizardpageid: string | null }, {  }>;
}
interface WizardPage_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  organizationid_guid: XQW.Guid;
  pagedatatopost: string;
  pagesequencenumber: number;
  pageurl: string;
  versionnumber: number;
  webwizardid_guid: XQW.Guid;
  wizardpageid: XQW.Guid;
}
interface WizardPage_Expand {
  createdby: WebExpand<WizardPage_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<WizardPage_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<WizardPage_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<WizardPage_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  organizationid: WebExpand<WizardPage_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
  userentityinstancedata_wizardpage: WebExpand<WizardPage_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { userentityinstancedata_wizardpage: UserEntityInstanceData_Result[] }>;
  webwizardid: WebExpand<WizardPage_Expand, WebWizard_Select, WebWizard_Filter, { webwizardid: WebWizard_Result }>;
}
interface WizardPage_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  organizationid_formatted?: string;
  webwizardid_formatted?: string;
}
interface WizardPage_Result extends WizardPage_Base, WizardPage_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
  webwizardid_guid: string | null;
}
interface WizardPage_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
  webwizardid: WebMappingRetrieve<WebWizard_Select,WebWizard_Expand,WebWizard_Filter,WebWizard_Fixed,WebWizard_Result,WebWizard_FormattedResult>;
}
interface WizardPage_RelatedMany {
  userentityinstancedata_wizardpage: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  wizardpages: WebMappingRetrieve<WizardPage_Select,WizardPage_Expand,WizardPage_Filter,WizardPage_Fixed,WizardPage_Result,WizardPage_FormattedResult>;
}
interface WebEntitiesRelated {
  wizardpages: WebMappingRelated<WizardPage_RelatedOne,WizardPage_RelatedMany>;
}
interface WebEntitiesCUDA {
  wizardpages: WebMappingCUDA<WizardPage_Create,WizardPage_Update,WizardPage_Select>;
}
