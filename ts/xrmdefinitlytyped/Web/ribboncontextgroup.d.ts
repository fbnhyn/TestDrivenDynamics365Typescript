interface RibbonContextGroup_Base extends WebEntity {
  componentstate?: componentstate | null;
  contextgroupid?: string | null;
  contextgroupxml?: string | null;
  entity?: string | null;
  ismanaged?: boolean | null;
  overwritetime?: Date | null;
  ribboncontextgroupid?: string | null;
  ribboncontextgroupuniqueid?: string | null;
  solutionid?: string | null;
  supportingsolutionid?: string | null;
  versionnumber?: number | null;
}
interface RibbonContextGroup_Relationships {
  userentityinstancedata_ribboncontextgroup?: UserEntityInstanceData_Result[] | null;
}
interface RibbonContextGroup extends RibbonContextGroup_Base, RibbonContextGroup_Relationships {
}
interface RibbonContextGroup_Create extends RibbonContextGroup {
  ribboncustomizationid_bind$ribboncustomizations?: string | null;
}
interface RibbonContextGroup_Update extends RibbonContextGroup {
}
interface RibbonContextGroup_Select {
  componentstate: WebAttribute<RibbonContextGroup_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  contextgroupid: WebAttribute<RibbonContextGroup_Select, { contextgroupid: string | null }, {  }>;
  contextgroupxml: WebAttribute<RibbonContextGroup_Select, { contextgroupxml: string | null }, {  }>;
  entity: WebAttribute<RibbonContextGroup_Select, { entity: string | null }, {  }>;
  ismanaged: WebAttribute<RibbonContextGroup_Select, { ismanaged: boolean | null }, {  }>;
  organizationid_guid: WebAttribute<RibbonContextGroup_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overwritetime: WebAttribute<RibbonContextGroup_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  ribboncontextgroupid: WebAttribute<RibbonContextGroup_Select, { ribboncontextgroupid: string | null }, {  }>;
  ribboncontextgroupuniqueid: WebAttribute<RibbonContextGroup_Select, { ribboncontextgroupuniqueid: string | null }, {  }>;
  ribboncustomizationid_guid: WebAttribute<RibbonContextGroup_Select, { ribboncustomizationid_guid: string | null }, { ribboncustomizationid_formatted?: string }>;
  solutionid: WebAttribute<RibbonContextGroup_Select, { solutionid: string | null }, {  }>;
  supportingsolutionid: WebAttribute<RibbonContextGroup_Select, { supportingsolutionid: string | null }, {  }>;
  versionnumber: WebAttribute<RibbonContextGroup_Select, { versionnumber: number | null }, {  }>;
}
interface RibbonContextGroup_Filter {
  componentstate: componentstate;
  contextgroupid: string;
  contextgroupxml: string;
  entity: string;
  ismanaged: boolean;
  organizationid_guid: XQW.Guid;
  overwritetime: Date;
  ribboncontextgroupid: XQW.Guid;
  ribboncontextgroupuniqueid: XQW.Guid;
  ribboncustomizationid_guid: XQW.Guid;
  solutionid: XQW.Guid;
  supportingsolutionid: XQW.Guid;
  versionnumber: number;
}
interface RibbonContextGroup_Expand {
  organizationid: WebExpand<RibbonContextGroup_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
  ribboncustomizationid: WebExpand<RibbonContextGroup_Expand, RibbonCustomization_Select, RibbonCustomization_Filter, { ribboncustomizationid: RibbonCustomization_Result }>;
  userentityinstancedata_ribboncontextgroup: WebExpand<RibbonContextGroup_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { userentityinstancedata_ribboncontextgroup: UserEntityInstanceData_Result[] }>;
}
interface RibbonContextGroup_FormattedResult {
  componentstate_formatted?: string;
  organizationid_formatted?: string;
  overwritetime_formatted?: string;
  ribboncustomizationid_formatted?: string;
}
interface RibbonContextGroup_Result extends RibbonContextGroup_Base, RibbonContextGroup_Relationships {
  "@odata.etag": string;
  organizationid_guid: string | null;
  ribboncustomizationid_guid: string | null;
}
interface RibbonContextGroup_RelatedOne {
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
  ribboncustomizationid: WebMappingRetrieve<RibbonCustomization_Select,RibbonCustomization_Expand,RibbonCustomization_Filter,RibbonCustomization_Fixed,RibbonCustomization_Result,RibbonCustomization_FormattedResult>;
}
interface RibbonContextGroup_RelatedMany {
  userentityinstancedata_ribboncontextgroup: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  ribboncontextgroups: WebMappingRetrieve<RibbonContextGroup_Select,RibbonContextGroup_Expand,RibbonContextGroup_Filter,RibbonContextGroup_Fixed,RibbonContextGroup_Result,RibbonContextGroup_FormattedResult>;
}
interface WebEntitiesRelated {
  ribboncontextgroups: WebMappingRelated<RibbonContextGroup_RelatedOne,RibbonContextGroup_RelatedMany>;
}
interface WebEntitiesCUDA {
  ribboncontextgroups: WebMappingCUDA<RibbonContextGroup_Create,RibbonContextGroup_Update,RibbonContextGroup_Select>;
}
