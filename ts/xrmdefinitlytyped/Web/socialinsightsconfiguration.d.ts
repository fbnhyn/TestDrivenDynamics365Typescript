interface SocialInsightsConfiguration_Base extends WebEntity {
  controlid?: string | null;
  createdon?: Date | null;
  modifiedon?: Date | null;
  socialdataitemid?: string | null;
  socialdataitemtype?: socialinsightsconfiguration_dataitemtype | null;
  socialdataparameters?: string | null;
  socialinsightsconfigurationid?: string | null;
}
interface SocialInsightsConfiguration_Relationships {
  formid_systemform?: SystemForm_Result | null;
  formid_userform?: UserForm_Result | null;
}
interface SocialInsightsConfiguration extends SocialInsightsConfiguration_Base, SocialInsightsConfiguration_Relationships {
  formid_systemform_bind$systemforms?: string | null;
  formid_userform_bind$userforms?: string | null;
}
interface SocialInsightsConfiguration_Create extends SocialInsightsConfiguration {
}
interface SocialInsightsConfiguration_Update extends SocialInsightsConfiguration {
}
interface SocialInsightsConfiguration_Select {
  controlid: WebAttribute<SocialInsightsConfiguration_Select, { controlid: string | null }, {  }>;
  createdby_guid: WebAttribute<SocialInsightsConfiguration_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<SocialInsightsConfiguration_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<SocialInsightsConfiguration_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  formid_guid: WebAttribute<SocialInsightsConfiguration_Select, { formid_guid: string | null }, { formid_formatted?: string }>;
  modifiedby_guid: WebAttribute<SocialInsightsConfiguration_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<SocialInsightsConfiguration_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<SocialInsightsConfiguration_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  organizationid_guid: WebAttribute<SocialInsightsConfiguration_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  regardingobjectid_guid: WebAttribute<SocialInsightsConfiguration_Select, { regardingobjectid_guid: string | null }, { regardingobjectid_formatted?: string }>;
  socialdataitemid: WebAttribute<SocialInsightsConfiguration_Select, { socialdataitemid: string | null }, {  }>;
  socialdataitemtype: WebAttribute<SocialInsightsConfiguration_Select, { socialdataitemtype: socialinsightsconfiguration_dataitemtype | null }, { socialdataitemtype_formatted?: string }>;
  socialdataparameters: WebAttribute<SocialInsightsConfiguration_Select, { socialdataparameters: string | null }, {  }>;
  socialinsightsconfigurationid: WebAttribute<SocialInsightsConfiguration_Select, { socialinsightsconfigurationid: string | null }, {  }>;
}
interface SocialInsightsConfiguration_Filter {
  controlid: string;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  formid_guid: XQW.Guid;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  organizationid_guid: XQW.Guid;
  regardingobjectid_guid: XQW.Guid;
  socialdataitemid: string;
  socialdataitemtype: socialinsightsconfiguration_dataitemtype;
  socialdataparameters: string;
  socialinsightsconfigurationid: XQW.Guid;
}
interface SocialInsightsConfiguration_Expand {
  createdby: WebExpand<SocialInsightsConfiguration_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<SocialInsightsConfiguration_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  formid_systemform: WebExpand<SocialInsightsConfiguration_Expand, SystemForm_Select, SystemForm_Filter, { formid_systemform: SystemForm_Result }>;
  formid_userform: WebExpand<SocialInsightsConfiguration_Expand, UserForm_Select, UserForm_Filter, { formid_userform: UserForm_Result }>;
  modifiedby: WebExpand<SocialInsightsConfiguration_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<SocialInsightsConfiguration_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  regardingobjectid: WebExpand<SocialInsightsConfiguration_Expand, Organization_Select, Organization_Filter, { regardingobjectid: Organization_Result }>;
}
interface SocialInsightsConfiguration_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  formid_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  organizationid_formatted?: string;
  regardingobjectid_formatted?: string;
  socialdataitemtype_formatted?: string;
}
interface SocialInsightsConfiguration_Result extends SocialInsightsConfiguration_Base, SocialInsightsConfiguration_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  formid_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
  regardingobjectid_guid: string | null;
}
interface SocialInsightsConfiguration_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  formid_systemform: WebMappingRetrieve<SystemForm_Select,SystemForm_Expand,SystemForm_Filter,SystemForm_Fixed,SystemForm_Result,SystemForm_FormattedResult>;
  formid_userform: WebMappingRetrieve<UserForm_Select,UserForm_Expand,UserForm_Filter,UserForm_Fixed,UserForm_Result,UserForm_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  regardingobjectid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
}
interface SocialInsightsConfiguration_RelatedMany {
}
interface WebEntitiesRetrieve {
  socialinsightsconfigurations: WebMappingRetrieve<SocialInsightsConfiguration_Select,SocialInsightsConfiguration_Expand,SocialInsightsConfiguration_Filter,SocialInsightsConfiguration_Fixed,SocialInsightsConfiguration_Result,SocialInsightsConfiguration_FormattedResult>;
}
interface WebEntitiesRelated {
  socialinsightsconfigurations: WebMappingRelated<SocialInsightsConfiguration_RelatedOne,SocialInsightsConfiguration_RelatedMany>;
}
interface WebEntitiesCUDA {
  socialinsightsconfigurations: WebMappingCUDA<SocialInsightsConfiguration_Create,SocialInsightsConfiguration_Update,SocialInsightsConfiguration_Select>;
}
