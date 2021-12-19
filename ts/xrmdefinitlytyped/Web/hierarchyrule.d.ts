interface HierarchyRule_Base extends WebEntity {
  componentstate?: componentstate | null;
  description?: string | null;
  hierarchyruleid?: string | null;
  hierarchyruleidunique?: string | null;
  introducedversion?: string | null;
  iscustomizable?: any | null;
  ismanaged?: boolean | null;
  name?: string | null;
  overwritetime?: Date | null;
  primaryentityformid?: string | null;
  primaryentitylogicalname?: string | null;
  publishedon?: Date | null;
  relatedentityformid?: string | null;
  relatedentitylogicalname?: string | null;
  showdisabled?: boolean | null;
  solutionid?: string | null;
  sortby?: string | null;
  supportingsolutionid?: string | null;
  versionnumber?: number | null;
}
interface HierarchyRule_Relationships {
}
interface HierarchyRule extends HierarchyRule_Base, HierarchyRule_Relationships {
}
interface HierarchyRule_Create extends HierarchyRule {
}
interface HierarchyRule_Update extends HierarchyRule {
}
interface HierarchyRule_Select {
  componentstate: WebAttribute<HierarchyRule_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  description: WebAttribute<HierarchyRule_Select, { description: string | null }, {  }>;
  hierarchyruleid: WebAttribute<HierarchyRule_Select, { hierarchyruleid: string | null }, {  }>;
  hierarchyruleidunique: WebAttribute<HierarchyRule_Select, { hierarchyruleidunique: string | null }, {  }>;
  introducedversion: WebAttribute<HierarchyRule_Select, { introducedversion: string | null }, {  }>;
  iscustomizable: WebAttribute<HierarchyRule_Select, { iscustomizable: any | null }, {  }>;
  ismanaged: WebAttribute<HierarchyRule_Select, { ismanaged: boolean | null }, {  }>;
  name: WebAttribute<HierarchyRule_Select, { name: string | null }, {  }>;
  organizationid_guid: WebAttribute<HierarchyRule_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overwritetime: WebAttribute<HierarchyRule_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  primaryentityformid: WebAttribute<HierarchyRule_Select, { primaryentityformid: string | null }, {  }>;
  primaryentitylogicalname: WebAttribute<HierarchyRule_Select, { primaryentitylogicalname: string | null }, {  }>;
  publishedon: WebAttribute<HierarchyRule_Select, { publishedon: Date | null }, { publishedon_formatted?: string }>;
  relatedentityformid: WebAttribute<HierarchyRule_Select, { relatedentityformid: string | null }, {  }>;
  relatedentitylogicalname: WebAttribute<HierarchyRule_Select, { relatedentitylogicalname: string | null }, {  }>;
  showdisabled: WebAttribute<HierarchyRule_Select, { showdisabled: boolean | null }, {  }>;
  solutionid: WebAttribute<HierarchyRule_Select, { solutionid: string | null }, {  }>;
  sortby: WebAttribute<HierarchyRule_Select, { sortby: string | null }, {  }>;
  supportingsolutionid: WebAttribute<HierarchyRule_Select, { supportingsolutionid: string | null }, {  }>;
  versionnumber: WebAttribute<HierarchyRule_Select, { versionnumber: number | null }, {  }>;
}
interface HierarchyRule_Filter {
  componentstate: componentstate;
  description: string;
  hierarchyruleid: XQW.Guid;
  hierarchyruleidunique: XQW.Guid;
  introducedversion: string;
  iscustomizable: any;
  ismanaged: boolean;
  name: string;
  organizationid_guid: XQW.Guid;
  overwritetime: Date;
  primaryentityformid: XQW.Guid;
  primaryentitylogicalname: string;
  publishedon: Date;
  relatedentityformid: XQW.Guid;
  relatedentitylogicalname: string;
  showdisabled: boolean;
  solutionid: XQW.Guid;
  sortby: XQW.Guid;
  supportingsolutionid: XQW.Guid;
  versionnumber: number;
}
interface HierarchyRule_Expand {
  organizationid: WebExpand<HierarchyRule_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
}
interface HierarchyRule_FormattedResult {
  componentstate_formatted?: string;
  organizationid_formatted?: string;
  overwritetime_formatted?: string;
  publishedon_formatted?: string;
}
interface HierarchyRule_Result extends HierarchyRule_Base, HierarchyRule_Relationships {
  "@odata.etag": string;
  organizationid_guid: string | null;
}
interface HierarchyRule_RelatedOne {
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
}
interface HierarchyRule_RelatedMany {
}
interface WebEntitiesRetrieve {
  hierarchyrules: WebMappingRetrieve<HierarchyRule_Select,HierarchyRule_Expand,HierarchyRule_Filter,HierarchyRule_Fixed,HierarchyRule_Result,HierarchyRule_FormattedResult>;
}
interface WebEntitiesRelated {
  hierarchyrules: WebMappingRelated<HierarchyRule_RelatedOne,HierarchyRule_RelatedMany>;
}
interface WebEntitiesCUDA {
  hierarchyrules: WebMappingCUDA<HierarchyRule_Create,HierarchyRule_Update,HierarchyRule_Select>;
}
