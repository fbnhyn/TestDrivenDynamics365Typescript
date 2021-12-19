interface RibbonRule_Base extends WebEntity {
  componentstate?: componentstate | null;
  createdon?: Date | null;
  entity?: string | null;
  ismanaged?: boolean | null;
  modifiedon?: Date | null;
  overwritetime?: Date | null;
  ribbonruleid?: string | null;
  ribbonruleuniqueid?: string | null;
  ruledefinition?: string | null;
  ruleid?: string | null;
  ruletype?: ribbonrule_ruletype | null;
  solutionid?: string | null;
  supportingsolutionid?: string | null;
  versionnumber?: number | null;
}
interface RibbonRule_Relationships {
  userentityinstancedata_ribbonrule?: UserEntityInstanceData_Result[] | null;
}
interface RibbonRule extends RibbonRule_Base, RibbonRule_Relationships {
}
interface RibbonRule_Create extends RibbonRule {
  ribboncustomizationid_bind$ribboncustomizations?: string | null;
}
interface RibbonRule_Update extends RibbonRule {
}
interface RibbonRule_Select {
  componentstate: WebAttribute<RibbonRule_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  createdby_guid: WebAttribute<RibbonRule_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<RibbonRule_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<RibbonRule_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  entity: WebAttribute<RibbonRule_Select, { entity: string | null }, {  }>;
  ismanaged: WebAttribute<RibbonRule_Select, { ismanaged: boolean | null }, {  }>;
  modifiedby_guid: WebAttribute<RibbonRule_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<RibbonRule_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<RibbonRule_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  organizationid_guid: WebAttribute<RibbonRule_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overwritetime: WebAttribute<RibbonRule_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  ribboncustomizationid_guid: WebAttribute<RibbonRule_Select, { ribboncustomizationid_guid: string | null }, { ribboncustomizationid_formatted?: string }>;
  ribbonruleid: WebAttribute<RibbonRule_Select, { ribbonruleid: string | null }, {  }>;
  ribbonruleuniqueid: WebAttribute<RibbonRule_Select, { ribbonruleuniqueid: string | null }, {  }>;
  ruledefinition: WebAttribute<RibbonRule_Select, { ruledefinition: string | null }, {  }>;
  ruleid: WebAttribute<RibbonRule_Select, { ruleid: string | null }, {  }>;
  ruletype: WebAttribute<RibbonRule_Select, { ruletype: ribbonrule_ruletype | null }, { ruletype_formatted?: string }>;
  solutionid: WebAttribute<RibbonRule_Select, { solutionid: string | null }, {  }>;
  supportingsolutionid: WebAttribute<RibbonRule_Select, { supportingsolutionid: string | null }, {  }>;
  versionnumber: WebAttribute<RibbonRule_Select, { versionnumber: number | null }, {  }>;
}
interface RibbonRule_Filter {
  componentstate: componentstate;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  entity: string;
  ismanaged: boolean;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  organizationid_guid: XQW.Guid;
  overwritetime: Date;
  ribboncustomizationid_guid: XQW.Guid;
  ribbonruleid: XQW.Guid;
  ribbonruleuniqueid: XQW.Guid;
  ruledefinition: string;
  ruleid: string;
  ruletype: ribbonrule_ruletype;
  solutionid: XQW.Guid;
  supportingsolutionid: XQW.Guid;
  versionnumber: number;
}
interface RibbonRule_Expand {
  createdby: WebExpand<RibbonRule_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<RibbonRule_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<RibbonRule_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<RibbonRule_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  organizationid: WebExpand<RibbonRule_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
  ribboncustomizationid: WebExpand<RibbonRule_Expand, RibbonCustomization_Select, RibbonCustomization_Filter, { ribboncustomizationid: RibbonCustomization_Result }>;
  userentityinstancedata_ribbonrule: WebExpand<RibbonRule_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { userentityinstancedata_ribbonrule: UserEntityInstanceData_Result[] }>;
}
interface RibbonRule_FormattedResult {
  componentstate_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  organizationid_formatted?: string;
  overwritetime_formatted?: string;
  ribboncustomizationid_formatted?: string;
  ruletype_formatted?: string;
}
interface RibbonRule_Result extends RibbonRule_Base, RibbonRule_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
  ribboncustomizationid_guid: string | null;
}
interface RibbonRule_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
  ribboncustomizationid: WebMappingRetrieve<RibbonCustomization_Select,RibbonCustomization_Expand,RibbonCustomization_Filter,RibbonCustomization_Fixed,RibbonCustomization_Result,RibbonCustomization_FormattedResult>;
}
interface RibbonRule_RelatedMany {
  userentityinstancedata_ribbonrule: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  ribbonrules: WebMappingRetrieve<RibbonRule_Select,RibbonRule_Expand,RibbonRule_Filter,RibbonRule_Fixed,RibbonRule_Result,RibbonRule_FormattedResult>;
}
interface WebEntitiesRelated {
  ribbonrules: WebMappingRelated<RibbonRule_RelatedOne,RibbonRule_RelatedMany>;
}
interface WebEntitiesCUDA {
  ribbonrules: WebMappingCUDA<RibbonRule_Create,RibbonRule_Update,RibbonRule_Select>;
}
