interface ComplexControl_Base extends WebEntity {
  complexcontrolid?: string | null;
  complexcontrolidunique?: string | null;
  complexcontrolxml?: string | null;
  componentstate?: componentstate | null;
  description?: string | null;
  introducedversion?: string | null;
  ismanaged?: boolean | null;
  name?: string | null;
  overwritetime?: Date | null;
  solutionid?: string | null;
  supportingsolutionid?: string | null;
  type?: complexcontrol_type | null;
  version?: number | null;
  versionnumber?: number | null;
}
interface ComplexControl_Relationships {
}
interface ComplexControl extends ComplexControl_Base, ComplexControl_Relationships {
}
interface ComplexControl_Create extends ComplexControl {
}
interface ComplexControl_Update extends ComplexControl {
}
interface ComplexControl_Select {
  complexcontrolid: WebAttribute<ComplexControl_Select, { complexcontrolid: string | null }, {  }>;
  complexcontrolidunique: WebAttribute<ComplexControl_Select, { complexcontrolidunique: string | null }, {  }>;
  complexcontrolxml: WebAttribute<ComplexControl_Select, { complexcontrolxml: string | null }, {  }>;
  componentstate: WebAttribute<ComplexControl_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  description: WebAttribute<ComplexControl_Select, { description: string | null }, {  }>;
  introducedversion: WebAttribute<ComplexControl_Select, { introducedversion: string | null }, {  }>;
  ismanaged: WebAttribute<ComplexControl_Select, { ismanaged: boolean | null }, {  }>;
  name: WebAttribute<ComplexControl_Select, { name: string | null }, {  }>;
  organizationid_guid: WebAttribute<ComplexControl_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overwritetime: WebAttribute<ComplexControl_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  solutionid: WebAttribute<ComplexControl_Select, { solutionid: string | null }, {  }>;
  supportingsolutionid: WebAttribute<ComplexControl_Select, { supportingsolutionid: string | null }, {  }>;
  type: WebAttribute<ComplexControl_Select, { type: complexcontrol_type | null }, { type_formatted?: string }>;
  version: WebAttribute<ComplexControl_Select, { version: number | null }, {  }>;
  versionnumber: WebAttribute<ComplexControl_Select, { versionnumber: number | null }, {  }>;
}
interface ComplexControl_Filter {
  complexcontrolid: XQW.Guid;
  complexcontrolidunique: XQW.Guid;
  complexcontrolxml: string;
  componentstate: componentstate;
  description: string;
  introducedversion: string;
  ismanaged: boolean;
  name: string;
  organizationid_guid: XQW.Guid;
  overwritetime: Date;
  solutionid: XQW.Guid;
  supportingsolutionid: XQW.Guid;
  type: complexcontrol_type;
  version: number;
  versionnumber: number;
}
interface ComplexControl_Expand {
  organizationid: WebExpand<ComplexControl_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
}
interface ComplexControl_FormattedResult {
  componentstate_formatted?: string;
  organizationid_formatted?: string;
  overwritetime_formatted?: string;
  type_formatted?: string;
}
interface ComplexControl_Result extends ComplexControl_Base, ComplexControl_Relationships {
  "@odata.etag": string;
  organizationid_guid: string | null;
}
interface ComplexControl_RelatedOne {
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
}
interface ComplexControl_RelatedMany {
}
interface WebEntitiesRetrieve {
  complexcontrols: WebMappingRetrieve<ComplexControl_Select,ComplexControl_Expand,ComplexControl_Filter,ComplexControl_Fixed,ComplexControl_Result,ComplexControl_FormattedResult>;
}
interface WebEntitiesRelated {
  complexcontrols: WebMappingRelated<ComplexControl_RelatedOne,ComplexControl_RelatedMany>;
}
interface WebEntitiesCUDA {
  complexcontrols: WebMappingCUDA<ComplexControl_Create,ComplexControl_Update,ComplexControl_Select>;
}
