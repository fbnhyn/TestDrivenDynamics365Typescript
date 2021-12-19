interface RibbonCustomization_Base extends WebEntity {
  componentstate?: componentstate | null;
  entity?: string | null;
  ismanaged?: boolean | null;
  overwritetime?: Date | null;
  publishedon?: Date | null;
  ribboncustomizationid?: string | null;
  ribboncustomizationuniqueid?: string | null;
  solutionid?: string | null;
  supportingsolutionid?: string | null;
  versionnumber?: number | null;
}
interface RibbonCustomization_Relationships {
  RibbonCustomization_RibbonCommand?: RibbonCommand_Result[] | null;
  RibbonCustomization_RibbonContextGroup?: RibbonContextGroup_Result[] | null;
  RibbonCustomization_RibbonDiff?: RibbonDiff_Result[] | null;
  RibbonCustomization_RibbonRule?: RibbonRule_Result[] | null;
  userentityinstancedata_ribboncustomization?: UserEntityInstanceData_Result[] | null;
}
interface RibbonCustomization extends RibbonCustomization_Base, RibbonCustomization_Relationships {
}
interface RibbonCustomization_Create extends RibbonCustomization {
}
interface RibbonCustomization_Update extends RibbonCustomization {
}
interface RibbonCustomization_Select {
  componentstate: WebAttribute<RibbonCustomization_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  entity: WebAttribute<RibbonCustomization_Select, { entity: string | null }, {  }>;
  ismanaged: WebAttribute<RibbonCustomization_Select, { ismanaged: boolean | null }, {  }>;
  organizationid_guid: WebAttribute<RibbonCustomization_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overwritetime: WebAttribute<RibbonCustomization_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  publishedon: WebAttribute<RibbonCustomization_Select, { publishedon: Date | null }, { publishedon_formatted?: string }>;
  ribboncustomizationid: WebAttribute<RibbonCustomization_Select, { ribboncustomizationid: string | null }, {  }>;
  ribboncustomizationuniqueid: WebAttribute<RibbonCustomization_Select, { ribboncustomizationuniqueid: string | null }, {  }>;
  solutionid: WebAttribute<RibbonCustomization_Select, { solutionid: string | null }, {  }>;
  supportingsolutionid: WebAttribute<RibbonCustomization_Select, { supportingsolutionid: string | null }, {  }>;
  versionnumber: WebAttribute<RibbonCustomization_Select, { versionnumber: number | null }, {  }>;
}
interface RibbonCustomization_Filter {
  componentstate: componentstate;
  entity: string;
  ismanaged: boolean;
  organizationid_guid: XQW.Guid;
  overwritetime: Date;
  publishedon: Date;
  ribboncustomizationid: XQW.Guid;
  ribboncustomizationuniqueid: XQW.Guid;
  solutionid: XQW.Guid;
  supportingsolutionid: XQW.Guid;
  versionnumber: number;
}
interface RibbonCustomization_Expand {
  RibbonCustomization_RibbonCommand: WebExpand<RibbonCustomization_Expand, RibbonCommand_Select, RibbonCommand_Filter, { RibbonCustomization_RibbonCommand: RibbonCommand_Result[] }>;
  RibbonCustomization_RibbonContextGroup: WebExpand<RibbonCustomization_Expand, RibbonContextGroup_Select, RibbonContextGroup_Filter, { RibbonCustomization_RibbonContextGroup: RibbonContextGroup_Result[] }>;
  RibbonCustomization_RibbonDiff: WebExpand<RibbonCustomization_Expand, RibbonDiff_Select, RibbonDiff_Filter, { RibbonCustomization_RibbonDiff: RibbonDiff_Result[] }>;
  RibbonCustomization_RibbonRule: WebExpand<RibbonCustomization_Expand, RibbonRule_Select, RibbonRule_Filter, { RibbonCustomization_RibbonRule: RibbonRule_Result[] }>;
  organizationid: WebExpand<RibbonCustomization_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
  userentityinstancedata_ribboncustomization: WebExpand<RibbonCustomization_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { userentityinstancedata_ribboncustomization: UserEntityInstanceData_Result[] }>;
}
interface RibbonCustomization_FormattedResult {
  componentstate_formatted?: string;
  organizationid_formatted?: string;
  overwritetime_formatted?: string;
  publishedon_formatted?: string;
}
interface RibbonCustomization_Result extends RibbonCustomization_Base, RibbonCustomization_Relationships {
  "@odata.etag": string;
  organizationid_guid: string | null;
}
interface RibbonCustomization_RelatedOne {
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
}
interface RibbonCustomization_RelatedMany {
  RibbonCustomization_RibbonCommand: WebMappingRetrieve<RibbonCommand_Select,RibbonCommand_Expand,RibbonCommand_Filter,RibbonCommand_Fixed,RibbonCommand_Result,RibbonCommand_FormattedResult>;
  RibbonCustomization_RibbonContextGroup: WebMappingRetrieve<RibbonContextGroup_Select,RibbonContextGroup_Expand,RibbonContextGroup_Filter,RibbonContextGroup_Fixed,RibbonContextGroup_Result,RibbonContextGroup_FormattedResult>;
  RibbonCustomization_RibbonDiff: WebMappingRetrieve<RibbonDiff_Select,RibbonDiff_Expand,RibbonDiff_Filter,RibbonDiff_Fixed,RibbonDiff_Result,RibbonDiff_FormattedResult>;
  RibbonCustomization_RibbonRule: WebMappingRetrieve<RibbonRule_Select,RibbonRule_Expand,RibbonRule_Filter,RibbonRule_Fixed,RibbonRule_Result,RibbonRule_FormattedResult>;
  userentityinstancedata_ribboncustomization: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  ribboncustomizations: WebMappingRetrieve<RibbonCustomization_Select,RibbonCustomization_Expand,RibbonCustomization_Filter,RibbonCustomization_Fixed,RibbonCustomization_Result,RibbonCustomization_FormattedResult>;
}
interface WebEntitiesRelated {
  ribboncustomizations: WebMappingRelated<RibbonCustomization_RelatedOne,RibbonCustomization_RelatedMany>;
}
interface WebEntitiesCUDA {
  ribboncustomizations: WebMappingCUDA<RibbonCustomization_Create,RibbonCustomization_Update,RibbonCustomization_Select>;
}
