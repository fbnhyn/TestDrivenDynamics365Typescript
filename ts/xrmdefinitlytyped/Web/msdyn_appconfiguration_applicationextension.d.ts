interface msdyn_appconfiguration_applicationextension_Base extends WebEntity {
  componentidunique?: string | null;
  componentstate?: componentstate | null;
  iscustomizable?: any | null;
  ismanaged?: boolean | null;
  msdyn_appconfiguration_applicationextensionid?: string | null;
  msdyn_appconfigurationid?: string | null;
  msdyn_applicationextensionid?: string | null;
  overwritetime?: Date | null;
  solutionid?: string | null;
  supportingsolutionid?: string | null;
  versionnumber?: number | null;
}
interface msdyn_appconfiguration_applicationextension_Relationships {
  msdyn_appconfiguration_applicationextension?: msdyn_applicationextension_Result[] | null;
}
interface msdyn_appconfiguration_applicationextension extends msdyn_appconfiguration_applicationextension_Base, msdyn_appconfiguration_applicationextension_Relationships {
}
interface msdyn_appconfiguration_applicationextension_Create extends msdyn_appconfiguration_applicationextension {
}
interface msdyn_appconfiguration_applicationextension_Update extends msdyn_appconfiguration_applicationextension {
}
interface msdyn_appconfiguration_applicationextension_Select {
  componentidunique: WebAttribute<msdyn_appconfiguration_applicationextension_Select, { componentidunique: string | null }, {  }>;
  componentstate: WebAttribute<msdyn_appconfiguration_applicationextension_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  iscustomizable: WebAttribute<msdyn_appconfiguration_applicationextension_Select, { iscustomizable: any | null }, {  }>;
  ismanaged: WebAttribute<msdyn_appconfiguration_applicationextension_Select, { ismanaged: boolean | null }, {  }>;
  msdyn_appconfiguration_applicationextensionid: WebAttribute<msdyn_appconfiguration_applicationextension_Select, { msdyn_appconfiguration_applicationextensionid: string | null }, {  }>;
  msdyn_appconfigurationid: WebAttribute<msdyn_appconfiguration_applicationextension_Select, { msdyn_appconfigurationid: string | null }, {  }>;
  msdyn_applicationextensionid: WebAttribute<msdyn_appconfiguration_applicationextension_Select, { msdyn_applicationextensionid: string | null }, {  }>;
  overwritetime: WebAttribute<msdyn_appconfiguration_applicationextension_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  solutionid: WebAttribute<msdyn_appconfiguration_applicationextension_Select, { solutionid: string | null }, {  }>;
  supportingsolutionid: WebAttribute<msdyn_appconfiguration_applicationextension_Select, { supportingsolutionid: string | null }, {  }>;
  versionnumber: WebAttribute<msdyn_appconfiguration_applicationextension_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_appconfiguration_applicationextension_Filter {
  componentidunique: XQW.Guid;
  componentstate: componentstate;
  iscustomizable: any;
  ismanaged: boolean;
  msdyn_appconfiguration_applicationextensionid: XQW.Guid;
  msdyn_appconfigurationid: XQW.Guid;
  msdyn_applicationextensionid: XQW.Guid;
  overwritetime: Date;
  solutionid: XQW.Guid;
  supportingsolutionid: XQW.Guid;
  versionnumber: number;
}
interface msdyn_appconfiguration_applicationextension_Expand {
  msdyn_appconfiguration_applicationextension: WebExpand<msdyn_appconfiguration_applicationextension_Expand, msdyn_applicationextension_Select, msdyn_applicationextension_Filter, { msdyn_appconfiguration_applicationextension: msdyn_applicationextension_Result[] }>;
}
interface msdyn_appconfiguration_applicationextension_FormattedResult {
  componentstate_formatted?: string;
  overwritetime_formatted?: string;
}
interface msdyn_appconfiguration_applicationextension_Result extends msdyn_appconfiguration_applicationextension_Base, msdyn_appconfiguration_applicationextension_Relationships {
  "@odata.etag": string;
}
interface msdyn_appconfiguration_applicationextension_RelatedOne {
}
interface msdyn_appconfiguration_applicationextension_RelatedMany {
  msdyn_appconfiguration_applicationextension: WebMappingRetrieve<msdyn_applicationextension_Select,msdyn_applicationextension_Expand,msdyn_applicationextension_Filter,msdyn_applicationextension_Fixed,msdyn_applicationextension_Result,msdyn_applicationextension_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_appconfiguration_applicationextensionset: WebMappingRetrieve<msdyn_appconfiguration_applicationextension_Select,msdyn_appconfiguration_applicationextension_Expand,msdyn_appconfiguration_applicationextension_Filter,msdyn_appconfiguration_applicationextension_Fixed,msdyn_appconfiguration_applicationextension_Result,msdyn_appconfiguration_applicationextension_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_appconfiguration_applicationextensionset: WebMappingRelated<msdyn_appconfiguration_applicationextension_RelatedOne,msdyn_appconfiguration_applicationextension_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_appconfiguration_applicationextensionset: WebMappingCUDA<msdyn_appconfiguration_applicationextension_Create,msdyn_appconfiguration_applicationextension_Update,msdyn_appconfiguration_applicationextension_Select>;
}
