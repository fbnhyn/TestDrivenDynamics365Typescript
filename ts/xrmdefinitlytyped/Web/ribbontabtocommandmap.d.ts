interface RibbonTabToCommandMap_Base extends WebEntity {
  command?: string | null;
  componentstate?: componentstate | null;
  controlid?: string | null;
  entity?: string | null;
  ismanaged?: boolean | null;
  overwritetime?: Date | null;
  ribbontabtocommandmapid?: string | null;
  ribbontabtocommandmapuniqueid?: string | null;
  solutionid?: string | null;
  supportingsolutionid?: string | null;
  tabid?: string | null;
  versionnumber?: number | null;
}
interface RibbonTabToCommandMap_Relationships {
  userentityinstancedata_ribbontabtocommandmap?: UserEntityInstanceData_Result[] | null;
}
interface RibbonTabToCommandMap extends RibbonTabToCommandMap_Base, RibbonTabToCommandMap_Relationships {
}
interface RibbonTabToCommandMap_Create extends RibbonTabToCommandMap {
  ribbondiffid_bind$ribbondiffs?: string | null;
}
interface RibbonTabToCommandMap_Update extends RibbonTabToCommandMap {
}
interface RibbonTabToCommandMap_Select {
  command: WebAttribute<RibbonTabToCommandMap_Select, { command: string | null }, {  }>;
  componentstate: WebAttribute<RibbonTabToCommandMap_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  controlid: WebAttribute<RibbonTabToCommandMap_Select, { controlid: string | null }, {  }>;
  entity: WebAttribute<RibbonTabToCommandMap_Select, { entity: string | null }, {  }>;
  ismanaged: WebAttribute<RibbonTabToCommandMap_Select, { ismanaged: boolean | null }, {  }>;
  organizationid_guid: WebAttribute<RibbonTabToCommandMap_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overwritetime: WebAttribute<RibbonTabToCommandMap_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  ribbondiffid_guid: WebAttribute<RibbonTabToCommandMap_Select, { ribbondiffid_guid: string | null }, { ribbondiffid_formatted?: string }>;
  ribbontabtocommandmapid: WebAttribute<RibbonTabToCommandMap_Select, { ribbontabtocommandmapid: string | null }, {  }>;
  ribbontabtocommandmapuniqueid: WebAttribute<RibbonTabToCommandMap_Select, { ribbontabtocommandmapuniqueid: string | null }, {  }>;
  solutionid: WebAttribute<RibbonTabToCommandMap_Select, { solutionid: string | null }, {  }>;
  supportingsolutionid: WebAttribute<RibbonTabToCommandMap_Select, { supportingsolutionid: string | null }, {  }>;
  tabid: WebAttribute<RibbonTabToCommandMap_Select, { tabid: string | null }, {  }>;
  versionnumber: WebAttribute<RibbonTabToCommandMap_Select, { versionnumber: number | null }, {  }>;
}
interface RibbonTabToCommandMap_Filter {
  command: string;
  componentstate: componentstate;
  controlid: string;
  entity: string;
  ismanaged: boolean;
  organizationid_guid: XQW.Guid;
  overwritetime: Date;
  ribbondiffid_guid: XQW.Guid;
  ribbontabtocommandmapid: XQW.Guid;
  ribbontabtocommandmapuniqueid: XQW.Guid;
  solutionid: XQW.Guid;
  supportingsolutionid: XQW.Guid;
  tabid: string;
  versionnumber: number;
}
interface RibbonTabToCommandMap_Expand {
  organizationid: WebExpand<RibbonTabToCommandMap_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
  ribbondiffid: WebExpand<RibbonTabToCommandMap_Expand, RibbonDiff_Select, RibbonDiff_Filter, { ribbondiffid: RibbonDiff_Result }>;
  userentityinstancedata_ribbontabtocommandmap: WebExpand<RibbonTabToCommandMap_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { userentityinstancedata_ribbontabtocommandmap: UserEntityInstanceData_Result[] }>;
}
interface RibbonTabToCommandMap_FormattedResult {
  componentstate_formatted?: string;
  organizationid_formatted?: string;
  overwritetime_formatted?: string;
  ribbondiffid_formatted?: string;
}
interface RibbonTabToCommandMap_Result extends RibbonTabToCommandMap_Base, RibbonTabToCommandMap_Relationships {
  "@odata.etag": string;
  organizationid_guid: string | null;
  ribbondiffid_guid: string | null;
}
interface RibbonTabToCommandMap_RelatedOne {
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
  ribbondiffid: WebMappingRetrieve<RibbonDiff_Select,RibbonDiff_Expand,RibbonDiff_Filter,RibbonDiff_Fixed,RibbonDiff_Result,RibbonDiff_FormattedResult>;
}
interface RibbonTabToCommandMap_RelatedMany {
  userentityinstancedata_ribbontabtocommandmap: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  ribbontabtocommandmaps: WebMappingRetrieve<RibbonTabToCommandMap_Select,RibbonTabToCommandMap_Expand,RibbonTabToCommandMap_Filter,RibbonTabToCommandMap_Fixed,RibbonTabToCommandMap_Result,RibbonTabToCommandMap_FormattedResult>;
}
interface WebEntitiesRelated {
  ribbontabtocommandmaps: WebMappingRelated<RibbonTabToCommandMap_RelatedOne,RibbonTabToCommandMap_RelatedMany>;
}
interface WebEntitiesCUDA {
  ribbontabtocommandmaps: WebMappingCUDA<RibbonTabToCommandMap_Create,RibbonTabToCommandMap_Update,RibbonTabToCommandMap_Select>;
}
