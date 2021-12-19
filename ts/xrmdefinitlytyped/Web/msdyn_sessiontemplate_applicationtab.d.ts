interface msdyn_sessiontemplate_applicationtab_Base extends WebEntity {
  componentidunique?: string | null;
  componentstate?: componentstate | null;
  iscustomizable?: any | null;
  ismanaged?: boolean | null;
  msdyn_applicationtabtemplateid?: string | null;
  msdyn_sessiontemplate_applicationtabid?: string | null;
  msdyn_sessiontemplateid?: string | null;
  overwritetime?: Date | null;
  solutionid?: string | null;
  supportingsolutionid?: string | null;
  versionnumber?: number | null;
}
interface msdyn_sessiontemplate_applicationtab_Relationships {
  msdyn_sessiontemplate_applicationtab?: msdyn_applicationtabtemplate_Result[] | null;
}
interface msdyn_sessiontemplate_applicationtab extends msdyn_sessiontemplate_applicationtab_Base, msdyn_sessiontemplate_applicationtab_Relationships {
}
interface msdyn_sessiontemplate_applicationtab_Create extends msdyn_sessiontemplate_applicationtab {
}
interface msdyn_sessiontemplate_applicationtab_Update extends msdyn_sessiontemplate_applicationtab {
}
interface msdyn_sessiontemplate_applicationtab_Select {
  componentidunique: WebAttribute<msdyn_sessiontemplate_applicationtab_Select, { componentidunique: string | null }, {  }>;
  componentstate: WebAttribute<msdyn_sessiontemplate_applicationtab_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  iscustomizable: WebAttribute<msdyn_sessiontemplate_applicationtab_Select, { iscustomizable: any | null }, {  }>;
  ismanaged: WebAttribute<msdyn_sessiontemplate_applicationtab_Select, { ismanaged: boolean | null }, {  }>;
  msdyn_applicationtabtemplateid: WebAttribute<msdyn_sessiontemplate_applicationtab_Select, { msdyn_applicationtabtemplateid: string | null }, {  }>;
  msdyn_sessiontemplate_applicationtabid: WebAttribute<msdyn_sessiontemplate_applicationtab_Select, { msdyn_sessiontemplate_applicationtabid: string | null }, {  }>;
  msdyn_sessiontemplateid: WebAttribute<msdyn_sessiontemplate_applicationtab_Select, { msdyn_sessiontemplateid: string | null }, {  }>;
  overwritetime: WebAttribute<msdyn_sessiontemplate_applicationtab_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  solutionid: WebAttribute<msdyn_sessiontemplate_applicationtab_Select, { solutionid: string | null }, {  }>;
  supportingsolutionid: WebAttribute<msdyn_sessiontemplate_applicationtab_Select, { supportingsolutionid: string | null }, {  }>;
  versionnumber: WebAttribute<msdyn_sessiontemplate_applicationtab_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_sessiontemplate_applicationtab_Filter {
  componentidunique: XQW.Guid;
  componentstate: componentstate;
  iscustomizable: any;
  ismanaged: boolean;
  msdyn_applicationtabtemplateid: XQW.Guid;
  msdyn_sessiontemplate_applicationtabid: XQW.Guid;
  msdyn_sessiontemplateid: XQW.Guid;
  overwritetime: Date;
  solutionid: XQW.Guid;
  supportingsolutionid: XQW.Guid;
  versionnumber: number;
}
interface msdyn_sessiontemplate_applicationtab_Expand {
  msdyn_sessiontemplate_applicationtab: WebExpand<msdyn_sessiontemplate_applicationtab_Expand, msdyn_applicationtabtemplate_Select, msdyn_applicationtabtemplate_Filter, { msdyn_sessiontemplate_applicationtab: msdyn_applicationtabtemplate_Result[] }>;
}
interface msdyn_sessiontemplate_applicationtab_FormattedResult {
  componentstate_formatted?: string;
  overwritetime_formatted?: string;
}
interface msdyn_sessiontemplate_applicationtab_Result extends msdyn_sessiontemplate_applicationtab_Base, msdyn_sessiontemplate_applicationtab_Relationships {
  "@odata.etag": string;
}
interface msdyn_sessiontemplate_applicationtab_RelatedOne {
}
interface msdyn_sessiontemplate_applicationtab_RelatedMany {
  msdyn_sessiontemplate_applicationtab: WebMappingRetrieve<msdyn_applicationtabtemplate_Select,msdyn_applicationtabtemplate_Expand,msdyn_applicationtabtemplate_Filter,msdyn_applicationtabtemplate_Fixed,msdyn_applicationtabtemplate_Result,msdyn_applicationtabtemplate_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_sessiontemplate_applicationtabset: WebMappingRetrieve<msdyn_sessiontemplate_applicationtab_Select,msdyn_sessiontemplate_applicationtab_Expand,msdyn_sessiontemplate_applicationtab_Filter,msdyn_sessiontemplate_applicationtab_Fixed,msdyn_sessiontemplate_applicationtab_Result,msdyn_sessiontemplate_applicationtab_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_sessiontemplate_applicationtabset: WebMappingRelated<msdyn_sessiontemplate_applicationtab_RelatedOne,msdyn_sessiontemplate_applicationtab_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_sessiontemplate_applicationtabset: WebMappingCUDA<msdyn_sessiontemplate_applicationtab_Create,msdyn_sessiontemplate_applicationtab_Update,msdyn_sessiontemplate_applicationtab_Select>;
}
