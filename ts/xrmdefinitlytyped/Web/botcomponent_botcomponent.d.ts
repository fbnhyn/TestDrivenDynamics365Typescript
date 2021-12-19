interface botcomponent_botcomponent_Base extends WebEntity {
  botcomponent_botcomponentid?: string | null;
  botcomponentidone?: string | null;
  botcomponentidtwo?: string | null;
  componentidunique?: string | null;
  componentstate?: componentstate | null;
  iscustomizable?: any | null;
  ismanaged?: boolean | null;
  overwritetime?: Date | null;
  solutionid?: string | null;
  supportingsolutionid?: string | null;
  versionnumber?: number | null;
}
interface botcomponent_botcomponent_Relationships {
  botcomponent_botcomponent?: botcomponent_Result[] | null;
}
interface botcomponent_botcomponent extends botcomponent_botcomponent_Base, botcomponent_botcomponent_Relationships {
}
interface botcomponent_botcomponent_Create extends botcomponent_botcomponent {
}
interface botcomponent_botcomponent_Update extends botcomponent_botcomponent {
}
interface botcomponent_botcomponent_Select {
  botcomponent_botcomponentid: WebAttribute<botcomponent_botcomponent_Select, { botcomponent_botcomponentid: string | null }, {  }>;
  botcomponentidone: WebAttribute<botcomponent_botcomponent_Select, { botcomponentidone: string | null }, {  }>;
  botcomponentidtwo: WebAttribute<botcomponent_botcomponent_Select, { botcomponentidtwo: string | null }, {  }>;
  componentidunique: WebAttribute<botcomponent_botcomponent_Select, { componentidunique: string | null }, {  }>;
  componentstate: WebAttribute<botcomponent_botcomponent_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  iscustomizable: WebAttribute<botcomponent_botcomponent_Select, { iscustomizable: any | null }, {  }>;
  ismanaged: WebAttribute<botcomponent_botcomponent_Select, { ismanaged: boolean | null }, {  }>;
  overwritetime: WebAttribute<botcomponent_botcomponent_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  solutionid: WebAttribute<botcomponent_botcomponent_Select, { solutionid: string | null }, {  }>;
  supportingsolutionid: WebAttribute<botcomponent_botcomponent_Select, { supportingsolutionid: string | null }, {  }>;
  versionnumber: WebAttribute<botcomponent_botcomponent_Select, { versionnumber: number | null }, {  }>;
}
interface botcomponent_botcomponent_Filter {
  botcomponent_botcomponentid: XQW.Guid;
  botcomponentidone: XQW.Guid;
  botcomponentidtwo: XQW.Guid;
  componentidunique: XQW.Guid;
  componentstate: componentstate;
  iscustomizable: any;
  ismanaged: boolean;
  overwritetime: Date;
  solutionid: XQW.Guid;
  supportingsolutionid: XQW.Guid;
  versionnumber: number;
}
interface botcomponent_botcomponent_Expand {
  botcomponent_botcomponent: WebExpand<botcomponent_botcomponent_Expand, botcomponent_Select, botcomponent_Filter, { botcomponent_botcomponent: botcomponent_Result[] }>;
}
interface botcomponent_botcomponent_FormattedResult {
  componentstate_formatted?: string;
  overwritetime_formatted?: string;
}
interface botcomponent_botcomponent_Result extends botcomponent_botcomponent_Base, botcomponent_botcomponent_Relationships {
  "@odata.etag": string;
}
interface botcomponent_botcomponent_RelatedOne {
}
interface botcomponent_botcomponent_RelatedMany {
  botcomponent_botcomponent: WebMappingRetrieve<botcomponent_Select,botcomponent_Expand,botcomponent_Filter,botcomponent_Fixed,botcomponent_Result,botcomponent_FormattedResult>;
}
interface WebEntitiesRetrieve {
  botcomponent_botcomponentset: WebMappingRetrieve<botcomponent_botcomponent_Select,botcomponent_botcomponent_Expand,botcomponent_botcomponent_Filter,botcomponent_botcomponent_Fixed,botcomponent_botcomponent_Result,botcomponent_botcomponent_FormattedResult>;
}
interface WebEntitiesRelated {
  botcomponent_botcomponentset: WebMappingRelated<botcomponent_botcomponent_RelatedOne,botcomponent_botcomponent_RelatedMany>;
}
interface WebEntitiesCUDA {
  botcomponent_botcomponentset: WebMappingCUDA<botcomponent_botcomponent_Create,botcomponent_botcomponent_Update,botcomponent_botcomponent_Select>;
}
