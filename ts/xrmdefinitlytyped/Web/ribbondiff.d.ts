interface RibbonDiff_Base extends WebEntity {
  componentstate?: componentstate | null;
  contextgroupid?: string | null;
  diffid?: string | null;
  difftype?: ribbondiff_difftype | null;
  entity?: string | null;
  isappaware?: boolean | null;
  ismanaged?: boolean | null;
  overwritetime?: Date | null;
  rdx?: string | null;
  ribbondiffid?: string | null;
  ribbondiffuniqueid?: string | null;
  sequence?: number | null;
  solutionid?: string | null;
  supportingsolutionid?: string | null;
  tabid?: string | null;
  versionnumber?: number | null;
}
interface RibbonDiff_Relationships {
  RibbonDiff_RibbonTabToCommandMap?: RibbonTabToCommandMap_Result[] | null;
  userentityinstancedata_ribbondiff?: UserEntityInstanceData_Result[] | null;
}
interface RibbonDiff extends RibbonDiff_Base, RibbonDiff_Relationships {
}
interface RibbonDiff_Create extends RibbonDiff {
  ribboncustomizationid_bind$ribboncustomizations?: string | null;
}
interface RibbonDiff_Update extends RibbonDiff {
}
interface RibbonDiff_Select {
  componentstate: WebAttribute<RibbonDiff_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  contextgroupid: WebAttribute<RibbonDiff_Select, { contextgroupid: string | null }, {  }>;
  diffid: WebAttribute<RibbonDiff_Select, { diffid: string | null }, {  }>;
  difftype: WebAttribute<RibbonDiff_Select, { difftype: ribbondiff_difftype | null }, { difftype_formatted?: string }>;
  entity: WebAttribute<RibbonDiff_Select, { entity: string | null }, {  }>;
  isappaware: WebAttribute<RibbonDiff_Select, { isappaware: boolean | null }, {  }>;
  ismanaged: WebAttribute<RibbonDiff_Select, { ismanaged: boolean | null }, {  }>;
  organizationid_guid: WebAttribute<RibbonDiff_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overwritetime: WebAttribute<RibbonDiff_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  rdx: WebAttribute<RibbonDiff_Select, { rdx: string | null }, {  }>;
  ribboncustomizationid_guid: WebAttribute<RibbonDiff_Select, { ribboncustomizationid_guid: string | null }, { ribboncustomizationid_formatted?: string }>;
  ribbondiffid: WebAttribute<RibbonDiff_Select, { ribbondiffid: string | null }, {  }>;
  ribbondiffuniqueid: WebAttribute<RibbonDiff_Select, { ribbondiffuniqueid: string | null }, {  }>;
  sequence: WebAttribute<RibbonDiff_Select, { sequence: number | null }, {  }>;
  solutionid: WebAttribute<RibbonDiff_Select, { solutionid: string | null }, {  }>;
  supportingsolutionid: WebAttribute<RibbonDiff_Select, { supportingsolutionid: string | null }, {  }>;
  tabid: WebAttribute<RibbonDiff_Select, { tabid: string | null }, {  }>;
  versionnumber: WebAttribute<RibbonDiff_Select, { versionnumber: number | null }, {  }>;
}
interface RibbonDiff_Filter {
  componentstate: componentstate;
  contextgroupid: XQW.Guid;
  diffid: string;
  difftype: ribbondiff_difftype;
  entity: string;
  isappaware: boolean;
  ismanaged: boolean;
  organizationid_guid: XQW.Guid;
  overwritetime: Date;
  rdx: string;
  ribboncustomizationid_guid: XQW.Guid;
  ribbondiffid: XQW.Guid;
  ribbondiffuniqueid: XQW.Guid;
  sequence: number;
  solutionid: XQW.Guid;
  supportingsolutionid: XQW.Guid;
  tabid: string;
  versionnumber: number;
}
interface RibbonDiff_Expand {
  RibbonDiff_RibbonTabToCommandMap: WebExpand<RibbonDiff_Expand, RibbonTabToCommandMap_Select, RibbonTabToCommandMap_Filter, { RibbonDiff_RibbonTabToCommandMap: RibbonTabToCommandMap_Result[] }>;
  organizationid: WebExpand<RibbonDiff_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
  ribboncustomizationid: WebExpand<RibbonDiff_Expand, RibbonCustomization_Select, RibbonCustomization_Filter, { ribboncustomizationid: RibbonCustomization_Result }>;
  userentityinstancedata_ribbondiff: WebExpand<RibbonDiff_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { userentityinstancedata_ribbondiff: UserEntityInstanceData_Result[] }>;
}
interface RibbonDiff_FormattedResult {
  componentstate_formatted?: string;
  difftype_formatted?: string;
  organizationid_formatted?: string;
  overwritetime_formatted?: string;
  ribboncustomizationid_formatted?: string;
}
interface RibbonDiff_Result extends RibbonDiff_Base, RibbonDiff_Relationships {
  "@odata.etag": string;
  organizationid_guid: string | null;
  ribboncustomizationid_guid: string | null;
}
interface RibbonDiff_RelatedOne {
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
  ribboncustomizationid: WebMappingRetrieve<RibbonCustomization_Select,RibbonCustomization_Expand,RibbonCustomization_Filter,RibbonCustomization_Fixed,RibbonCustomization_Result,RibbonCustomization_FormattedResult>;
}
interface RibbonDiff_RelatedMany {
  RibbonDiff_RibbonTabToCommandMap: WebMappingRetrieve<RibbonTabToCommandMap_Select,RibbonTabToCommandMap_Expand,RibbonTabToCommandMap_Filter,RibbonTabToCommandMap_Fixed,RibbonTabToCommandMap_Result,RibbonTabToCommandMap_FormattedResult>;
  userentityinstancedata_ribbondiff: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  ribbondiffs: WebMappingRetrieve<RibbonDiff_Select,RibbonDiff_Expand,RibbonDiff_Filter,RibbonDiff_Fixed,RibbonDiff_Result,RibbonDiff_FormattedResult>;
}
interface WebEntitiesRelated {
  ribbondiffs: WebMappingRelated<RibbonDiff_RelatedOne,RibbonDiff_RelatedMany>;
}
interface WebEntitiesCUDA {
  ribbondiffs: WebMappingCUDA<RibbonDiff_Create,RibbonDiff_Update,RibbonDiff_Select>;
}
