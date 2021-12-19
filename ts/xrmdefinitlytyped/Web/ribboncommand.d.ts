interface RibbonCommand_Base extends WebEntity {
  command?: string | null;
  commanddefinition?: string | null;
  componentstate?: componentstate | null;
  createdon?: Date | null;
  entity?: string | null;
  ismanaged?: boolean | null;
  modifiedon?: Date | null;
  overwritetime?: Date | null;
  ribboncommandid?: string | null;
  ribboncommanduniqueid?: string | null;
  solutionid?: string | null;
  supportingsolutionid?: string | null;
  versionnumber?: number | null;
}
interface RibbonCommand_Relationships {
  userentityinstancedata_ribboncommand?: UserEntityInstanceData_Result[] | null;
}
interface RibbonCommand extends RibbonCommand_Base, RibbonCommand_Relationships {
}
interface RibbonCommand_Create extends RibbonCommand {
  ribboncustomizationid_bind$ribboncustomizations?: string | null;
}
interface RibbonCommand_Update extends RibbonCommand {
}
interface RibbonCommand_Select {
  command: WebAttribute<RibbonCommand_Select, { command: string | null }, {  }>;
  commanddefinition: WebAttribute<RibbonCommand_Select, { commanddefinition: string | null }, {  }>;
  componentstate: WebAttribute<RibbonCommand_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  createdby_guid: WebAttribute<RibbonCommand_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<RibbonCommand_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<RibbonCommand_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  entity: WebAttribute<RibbonCommand_Select, { entity: string | null }, {  }>;
  ismanaged: WebAttribute<RibbonCommand_Select, { ismanaged: boolean | null }, {  }>;
  modifiedby_guid: WebAttribute<RibbonCommand_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<RibbonCommand_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<RibbonCommand_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  organizationid_guid: WebAttribute<RibbonCommand_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overwritetime: WebAttribute<RibbonCommand_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  ribboncommandid: WebAttribute<RibbonCommand_Select, { ribboncommandid: string | null }, {  }>;
  ribboncommanduniqueid: WebAttribute<RibbonCommand_Select, { ribboncommanduniqueid: string | null }, {  }>;
  ribboncustomizationid_guid: WebAttribute<RibbonCommand_Select, { ribboncustomizationid_guid: string | null }, { ribboncustomizationid_formatted?: string }>;
  solutionid: WebAttribute<RibbonCommand_Select, { solutionid: string | null }, {  }>;
  supportingsolutionid: WebAttribute<RibbonCommand_Select, { supportingsolutionid: string | null }, {  }>;
  versionnumber: WebAttribute<RibbonCommand_Select, { versionnumber: number | null }, {  }>;
}
interface RibbonCommand_Filter {
  command: string;
  commanddefinition: string;
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
  ribboncommandid: XQW.Guid;
  ribboncommanduniqueid: XQW.Guid;
  ribboncustomizationid_guid: XQW.Guid;
  solutionid: XQW.Guid;
  supportingsolutionid: XQW.Guid;
  versionnumber: number;
}
interface RibbonCommand_Expand {
  createdby: WebExpand<RibbonCommand_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<RibbonCommand_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<RibbonCommand_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<RibbonCommand_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  organizationid: WebExpand<RibbonCommand_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
  ribboncustomizationid: WebExpand<RibbonCommand_Expand, RibbonCustomization_Select, RibbonCustomization_Filter, { ribboncustomizationid: RibbonCustomization_Result }>;
  userentityinstancedata_ribboncommand: WebExpand<RibbonCommand_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { userentityinstancedata_ribboncommand: UserEntityInstanceData_Result[] }>;
}
interface RibbonCommand_FormattedResult {
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
}
interface RibbonCommand_Result extends RibbonCommand_Base, RibbonCommand_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
  ribboncustomizationid_guid: string | null;
}
interface RibbonCommand_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
  ribboncustomizationid: WebMappingRetrieve<RibbonCustomization_Select,RibbonCustomization_Expand,RibbonCustomization_Filter,RibbonCustomization_Fixed,RibbonCustomization_Result,RibbonCustomization_FormattedResult>;
}
interface RibbonCommand_RelatedMany {
  userentityinstancedata_ribboncommand: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  ribboncommands: WebMappingRetrieve<RibbonCommand_Select,RibbonCommand_Expand,RibbonCommand_Filter,RibbonCommand_Fixed,RibbonCommand_Result,RibbonCommand_FormattedResult>;
}
interface WebEntitiesRelated {
  ribboncommands: WebMappingRelated<RibbonCommand_RelatedOne,RibbonCommand_RelatedMany>;
}
interface WebEntitiesCUDA {
  ribboncommands: WebMappingCUDA<RibbonCommand_Create,RibbonCommand_Update,RibbonCommand_Select>;
}
