interface msdyn_appconfiguration_sessiontemplate_Base extends WebEntity {
  componentidunique?: string | null;
  componentstate?: componentstate | null;
  iscustomizable?: any | null;
  ismanaged?: boolean | null;
  msdyn_appconfiguration_sessiontemplateid?: string | null;
  msdyn_appconfigurationid?: string | null;
  msdyn_sessiontemplateid?: string | null;
  overwritetime?: Date | null;
  solutionid?: string | null;
  supportingsolutionid?: string | null;
  versionnumber?: number | null;
}
interface msdyn_appconfiguration_sessiontemplate_Relationships {
  msdyn_appconfiguration_sessiontemplate?: msdyn_sessiontemplate_Result[] | null;
}
interface msdyn_appconfiguration_sessiontemplate extends msdyn_appconfiguration_sessiontemplate_Base, msdyn_appconfiguration_sessiontemplate_Relationships {
}
interface msdyn_appconfiguration_sessiontemplate_Create extends msdyn_appconfiguration_sessiontemplate {
}
interface msdyn_appconfiguration_sessiontemplate_Update extends msdyn_appconfiguration_sessiontemplate {
}
interface msdyn_appconfiguration_sessiontemplate_Select {
  componentidunique: WebAttribute<msdyn_appconfiguration_sessiontemplate_Select, { componentidunique: string | null }, {  }>;
  componentstate: WebAttribute<msdyn_appconfiguration_sessiontemplate_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  iscustomizable: WebAttribute<msdyn_appconfiguration_sessiontemplate_Select, { iscustomizable: any | null }, {  }>;
  ismanaged: WebAttribute<msdyn_appconfiguration_sessiontemplate_Select, { ismanaged: boolean | null }, {  }>;
  msdyn_appconfiguration_sessiontemplateid: WebAttribute<msdyn_appconfiguration_sessiontemplate_Select, { msdyn_appconfiguration_sessiontemplateid: string | null }, {  }>;
  msdyn_appconfigurationid: WebAttribute<msdyn_appconfiguration_sessiontemplate_Select, { msdyn_appconfigurationid: string | null }, {  }>;
  msdyn_sessiontemplateid: WebAttribute<msdyn_appconfiguration_sessiontemplate_Select, { msdyn_sessiontemplateid: string | null }, {  }>;
  overwritetime: WebAttribute<msdyn_appconfiguration_sessiontemplate_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  solutionid: WebAttribute<msdyn_appconfiguration_sessiontemplate_Select, { solutionid: string | null }, {  }>;
  supportingsolutionid: WebAttribute<msdyn_appconfiguration_sessiontemplate_Select, { supportingsolutionid: string | null }, {  }>;
  versionnumber: WebAttribute<msdyn_appconfiguration_sessiontemplate_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_appconfiguration_sessiontemplate_Filter {
  componentidunique: XQW.Guid;
  componentstate: componentstate;
  iscustomizable: any;
  ismanaged: boolean;
  msdyn_appconfiguration_sessiontemplateid: XQW.Guid;
  msdyn_appconfigurationid: XQW.Guid;
  msdyn_sessiontemplateid: XQW.Guid;
  overwritetime: Date;
  solutionid: XQW.Guid;
  supportingsolutionid: XQW.Guid;
  versionnumber: number;
}
interface msdyn_appconfiguration_sessiontemplate_Expand {
  msdyn_appconfiguration_sessiontemplate: WebExpand<msdyn_appconfiguration_sessiontemplate_Expand, msdyn_sessiontemplate_Select, msdyn_sessiontemplate_Filter, { msdyn_appconfiguration_sessiontemplate: msdyn_sessiontemplate_Result[] }>;
}
interface msdyn_appconfiguration_sessiontemplate_FormattedResult {
  componentstate_formatted?: string;
  overwritetime_formatted?: string;
}
interface msdyn_appconfiguration_sessiontemplate_Result extends msdyn_appconfiguration_sessiontemplate_Base, msdyn_appconfiguration_sessiontemplate_Relationships {
  "@odata.etag": string;
}
interface msdyn_appconfiguration_sessiontemplate_RelatedOne {
}
interface msdyn_appconfiguration_sessiontemplate_RelatedMany {
  msdyn_appconfiguration_sessiontemplate: WebMappingRetrieve<msdyn_sessiontemplate_Select,msdyn_sessiontemplate_Expand,msdyn_sessiontemplate_Filter,msdyn_sessiontemplate_Fixed,msdyn_sessiontemplate_Result,msdyn_sessiontemplate_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_appconfiguration_sessiontemplateset: WebMappingRetrieve<msdyn_appconfiguration_sessiontemplate_Select,msdyn_appconfiguration_sessiontemplate_Expand,msdyn_appconfiguration_sessiontemplate_Filter,msdyn_appconfiguration_sessiontemplate_Fixed,msdyn_appconfiguration_sessiontemplate_Result,msdyn_appconfiguration_sessiontemplate_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_appconfiguration_sessiontemplateset: WebMappingRelated<msdyn_appconfiguration_sessiontemplate_RelatedOne,msdyn_appconfiguration_sessiontemplate_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_appconfiguration_sessiontemplateset: WebMappingCUDA<msdyn_appconfiguration_sessiontemplate_Create,msdyn_appconfiguration_sessiontemplate_Update,msdyn_appconfiguration_sessiontemplate_Select>;
}
