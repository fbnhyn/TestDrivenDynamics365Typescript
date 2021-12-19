interface msdyn_smartassistconfig_msdyn_appconfig_Base extends WebEntity {
  componentidunique?: string | null;
  componentstate?: componentstate | null;
  iscustomizable?: any | null;
  ismanaged?: boolean | null;
  msdyn_appconfigurationid?: string | null;
  msdyn_smartassistconfig_msdyn_appconfigid?: string | null;
  msdyn_smartassistconfigid?: string | null;
  overwritetime?: Date | null;
  solutionid?: string | null;
  supportingsolutionid?: string | null;
  versionnumber?: number | null;
}
interface msdyn_smartassistconfig_msdyn_appconfig_Relationships {
  msdyn_smartassistconfig_msdyn_appconfig?: msdyn_appconfiguration_Result[] | null;
}
interface msdyn_smartassistconfig_msdyn_appconfig extends msdyn_smartassistconfig_msdyn_appconfig_Base, msdyn_smartassistconfig_msdyn_appconfig_Relationships {
}
interface msdyn_smartassistconfig_msdyn_appconfig_Create extends msdyn_smartassistconfig_msdyn_appconfig {
}
interface msdyn_smartassistconfig_msdyn_appconfig_Update extends msdyn_smartassistconfig_msdyn_appconfig {
}
interface msdyn_smartassistconfig_msdyn_appconfig_Select {
  componentidunique: WebAttribute<msdyn_smartassistconfig_msdyn_appconfig_Select, { componentidunique: string | null }, {  }>;
  componentstate: WebAttribute<msdyn_smartassistconfig_msdyn_appconfig_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  iscustomizable: WebAttribute<msdyn_smartassistconfig_msdyn_appconfig_Select, { iscustomizable: any | null }, {  }>;
  ismanaged: WebAttribute<msdyn_smartassistconfig_msdyn_appconfig_Select, { ismanaged: boolean | null }, {  }>;
  msdyn_appconfigurationid: WebAttribute<msdyn_smartassistconfig_msdyn_appconfig_Select, { msdyn_appconfigurationid: string | null }, {  }>;
  msdyn_smartassistconfig_msdyn_appconfigid: WebAttribute<msdyn_smartassistconfig_msdyn_appconfig_Select, { msdyn_smartassistconfig_msdyn_appconfigid: string | null }, {  }>;
  msdyn_smartassistconfigid: WebAttribute<msdyn_smartassistconfig_msdyn_appconfig_Select, { msdyn_smartassistconfigid: string | null }, {  }>;
  overwritetime: WebAttribute<msdyn_smartassistconfig_msdyn_appconfig_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  solutionid: WebAttribute<msdyn_smartassistconfig_msdyn_appconfig_Select, { solutionid: string | null }, {  }>;
  supportingsolutionid: WebAttribute<msdyn_smartassistconfig_msdyn_appconfig_Select, { supportingsolutionid: string | null }, {  }>;
  versionnumber: WebAttribute<msdyn_smartassistconfig_msdyn_appconfig_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_smartassistconfig_msdyn_appconfig_Filter {
  componentidunique: XQW.Guid;
  componentstate: componentstate;
  iscustomizable: any;
  ismanaged: boolean;
  msdyn_appconfigurationid: XQW.Guid;
  msdyn_smartassistconfig_msdyn_appconfigid: XQW.Guid;
  msdyn_smartassistconfigid: XQW.Guid;
  overwritetime: Date;
  solutionid: XQW.Guid;
  supportingsolutionid: XQW.Guid;
  versionnumber: number;
}
interface msdyn_smartassistconfig_msdyn_appconfig_Expand {
  msdyn_smartassistconfig_msdyn_appconfig: WebExpand<msdyn_smartassistconfig_msdyn_appconfig_Expand, msdyn_appconfiguration_Select, msdyn_appconfiguration_Filter, { msdyn_smartassistconfig_msdyn_appconfig: msdyn_appconfiguration_Result[] }>;
}
interface msdyn_smartassistconfig_msdyn_appconfig_FormattedResult {
  componentstate_formatted?: string;
  overwritetime_formatted?: string;
}
interface msdyn_smartassistconfig_msdyn_appconfig_Result extends msdyn_smartassistconfig_msdyn_appconfig_Base, msdyn_smartassistconfig_msdyn_appconfig_Relationships {
  "@odata.etag": string;
}
interface msdyn_smartassistconfig_msdyn_appconfig_RelatedOne {
}
interface msdyn_smartassistconfig_msdyn_appconfig_RelatedMany {
  msdyn_smartassistconfig_msdyn_appconfig: WebMappingRetrieve<msdyn_appconfiguration_Select,msdyn_appconfiguration_Expand,msdyn_appconfiguration_Filter,msdyn_appconfiguration_Fixed,msdyn_appconfiguration_Result,msdyn_appconfiguration_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_smartassistconfig_msdyn_appconfigset: WebMappingRetrieve<msdyn_smartassistconfig_msdyn_appconfig_Select,msdyn_smartassistconfig_msdyn_appconfig_Expand,msdyn_smartassistconfig_msdyn_appconfig_Filter,msdyn_smartassistconfig_msdyn_appconfig_Fixed,msdyn_smartassistconfig_msdyn_appconfig_Result,msdyn_smartassistconfig_msdyn_appconfig_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_smartassistconfig_msdyn_appconfigset: WebMappingRelated<msdyn_smartassistconfig_msdyn_appconfig_RelatedOne,msdyn_smartassistconfig_msdyn_appconfig_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_smartassistconfig_msdyn_appconfigset: WebMappingCUDA<msdyn_smartassistconfig_msdyn_appconfig_Create,msdyn_smartassistconfig_msdyn_appconfig_Update,msdyn_smartassistconfig_msdyn_appconfig_Select>;
}
