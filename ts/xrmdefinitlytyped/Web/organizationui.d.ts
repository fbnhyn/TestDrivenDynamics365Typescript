interface OrganizationUI_Base extends WebEntity {
  componentstate?: componentstate | null;
  fieldxml?: string | null;
  formid?: string | null;
  formidunique?: string | null;
  formxml?: string | null;
  gridicon?: string | null;
  iscustomizable?: any | null;
  ismanaged?: boolean | null;
  largeentityicon?: string | null;
  objecttypecode?: string | null;
  outlookshortcuticon?: string | null;
  overwritetime?: Date | null;
  previewcolumnsetxml?: string | null;
  previewxml?: string | null;
  solutionid?: string | null;
  supportingsolutionid?: string | null;
  version?: number | null;
  versionnumber?: number | null;
}
interface OrganizationUI_Relationships {
}
interface OrganizationUI extends OrganizationUI_Base, OrganizationUI_Relationships {
}
interface OrganizationUI_Create extends OrganizationUI {
}
interface OrganizationUI_Update extends OrganizationUI {
}
interface OrganizationUI_Select {
  componentstate: WebAttribute<OrganizationUI_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  fieldxml: WebAttribute<OrganizationUI_Select, { fieldxml: string | null }, {  }>;
  formid: WebAttribute<OrganizationUI_Select, { formid: string | null }, {  }>;
  formidunique: WebAttribute<OrganizationUI_Select, { formidunique: string | null }, {  }>;
  formxml: WebAttribute<OrganizationUI_Select, { formxml: string | null }, {  }>;
  gridicon: WebAttribute<OrganizationUI_Select, { gridicon: string | null }, {  }>;
  iscustomizable: WebAttribute<OrganizationUI_Select, { iscustomizable: any | null }, {  }>;
  ismanaged: WebAttribute<OrganizationUI_Select, { ismanaged: boolean | null }, {  }>;
  largeentityicon: WebAttribute<OrganizationUI_Select, { largeentityicon: string | null }, {  }>;
  objecttypecode: WebAttribute<OrganizationUI_Select, { objecttypecode: string | null }, {  }>;
  organizationid_guid: WebAttribute<OrganizationUI_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  outlookshortcuticon: WebAttribute<OrganizationUI_Select, { outlookshortcuticon: string | null }, {  }>;
  overwritetime: WebAttribute<OrganizationUI_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  previewcolumnsetxml: WebAttribute<OrganizationUI_Select, { previewcolumnsetxml: string | null }, {  }>;
  previewxml: WebAttribute<OrganizationUI_Select, { previewxml: string | null }, {  }>;
  solutionid: WebAttribute<OrganizationUI_Select, { solutionid: string | null }, {  }>;
  supportingsolutionid: WebAttribute<OrganizationUI_Select, { supportingsolutionid: string | null }, {  }>;
  version: WebAttribute<OrganizationUI_Select, { version: number | null }, {  }>;
  versionnumber: WebAttribute<OrganizationUI_Select, { versionnumber: number | null }, {  }>;
}
interface OrganizationUI_Filter {
  componentstate: componentstate;
  fieldxml: string;
  formid: XQW.Guid;
  formidunique: XQW.Guid;
  formxml: string;
  gridicon: string;
  iscustomizable: any;
  ismanaged: boolean;
  largeentityicon: string;
  objecttypecode: string;
  organizationid_guid: XQW.Guid;
  outlookshortcuticon: string;
  overwritetime: Date;
  previewcolumnsetxml: string;
  previewxml: string;
  solutionid: XQW.Guid;
  supportingsolutionid: XQW.Guid;
  version: number;
  versionnumber: number;
}
interface OrganizationUI_Expand {
  organizationid: WebExpand<OrganizationUI_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
}
interface OrganizationUI_FormattedResult {
  componentstate_formatted?: string;
  organizationid_formatted?: string;
  overwritetime_formatted?: string;
}
interface OrganizationUI_Result extends OrganizationUI_Base, OrganizationUI_Relationships {
  "@odata.etag": string;
  organizationid_guid: string | null;
}
interface OrganizationUI_RelatedOne {
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
}
interface OrganizationUI_RelatedMany {
}
interface WebEntitiesRetrieve {
  organizationuis: WebMappingRetrieve<OrganizationUI_Select,OrganizationUI_Expand,OrganizationUI_Filter,OrganizationUI_Fixed,OrganizationUI_Result,OrganizationUI_FormattedResult>;
}
interface WebEntitiesRelated {
  organizationuis: WebMappingRelated<OrganizationUI_RelatedOne,OrganizationUI_RelatedMany>;
}
interface WebEntitiesCUDA {
  organizationuis: WebMappingCUDA<OrganizationUI_Create,OrganizationUI_Update,OrganizationUI_Select>;
}
