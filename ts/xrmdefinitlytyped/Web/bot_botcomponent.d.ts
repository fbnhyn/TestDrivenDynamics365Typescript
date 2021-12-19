interface bot_botcomponent_Base extends WebEntity {
  bot_botcomponentid?: string | null;
  botcomponentid?: string | null;
  botid?: string | null;
  componentidunique?: string | null;
  componentstate?: componentstate | null;
  iscustomizable?: any | null;
  ismanaged?: boolean | null;
  overwritetime?: Date | null;
  solutionid?: string | null;
  supportingsolutionid?: string | null;
  versionnumber?: number | null;
}
interface bot_botcomponent_Relationships {
  bot_botcomponent?: botcomponent_Result[] | null;
}
interface bot_botcomponent extends bot_botcomponent_Base, bot_botcomponent_Relationships {
}
interface bot_botcomponent_Create extends bot_botcomponent {
}
interface bot_botcomponent_Update extends bot_botcomponent {
}
interface bot_botcomponent_Select {
  bot_botcomponentid: WebAttribute<bot_botcomponent_Select, { bot_botcomponentid: string | null }, {  }>;
  botcomponentid: WebAttribute<bot_botcomponent_Select, { botcomponentid: string | null }, {  }>;
  botid: WebAttribute<bot_botcomponent_Select, { botid: string | null }, {  }>;
  componentidunique: WebAttribute<bot_botcomponent_Select, { componentidunique: string | null }, {  }>;
  componentstate: WebAttribute<bot_botcomponent_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  iscustomizable: WebAttribute<bot_botcomponent_Select, { iscustomizable: any | null }, {  }>;
  ismanaged: WebAttribute<bot_botcomponent_Select, { ismanaged: boolean | null }, {  }>;
  overwritetime: WebAttribute<bot_botcomponent_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  solutionid: WebAttribute<bot_botcomponent_Select, { solutionid: string | null }, {  }>;
  supportingsolutionid: WebAttribute<bot_botcomponent_Select, { supportingsolutionid: string | null }, {  }>;
  versionnumber: WebAttribute<bot_botcomponent_Select, { versionnumber: number | null }, {  }>;
}
interface bot_botcomponent_Filter {
  bot_botcomponentid: XQW.Guid;
  botcomponentid: XQW.Guid;
  botid: XQW.Guid;
  componentidunique: XQW.Guid;
  componentstate: componentstate;
  iscustomizable: any;
  ismanaged: boolean;
  overwritetime: Date;
  solutionid: XQW.Guid;
  supportingsolutionid: XQW.Guid;
  versionnumber: number;
}
interface bot_botcomponent_Expand {
  bot_botcomponent: WebExpand<bot_botcomponent_Expand, botcomponent_Select, botcomponent_Filter, { bot_botcomponent: botcomponent_Result[] }>;
}
interface bot_botcomponent_FormattedResult {
  componentstate_formatted?: string;
  overwritetime_formatted?: string;
}
interface bot_botcomponent_Result extends bot_botcomponent_Base, bot_botcomponent_Relationships {
  "@odata.etag": string;
}
interface bot_botcomponent_RelatedOne {
}
interface bot_botcomponent_RelatedMany {
  bot_botcomponent: WebMappingRetrieve<botcomponent_Select,botcomponent_Expand,botcomponent_Filter,botcomponent_Fixed,botcomponent_Result,botcomponent_FormattedResult>;
}
interface WebEntitiesRetrieve {
  bot_botcomponentset: WebMappingRetrieve<bot_botcomponent_Select,bot_botcomponent_Expand,bot_botcomponent_Filter,bot_botcomponent_Fixed,bot_botcomponent_Result,bot_botcomponent_FormattedResult>;
}
interface WebEntitiesRelated {
  bot_botcomponentset: WebMappingRelated<bot_botcomponent_RelatedOne,bot_botcomponent_RelatedMany>;
}
interface WebEntitiesCUDA {
  bot_botcomponentset: WebMappingCUDA<bot_botcomponent_Create,bot_botcomponent_Update,bot_botcomponent_Select>;
}
