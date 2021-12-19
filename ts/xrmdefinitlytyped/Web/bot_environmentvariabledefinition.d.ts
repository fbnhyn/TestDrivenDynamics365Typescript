interface bot_environmentvariabledefinition_Base extends WebEntity {
  bot_environmentvariabledefinitionid?: string | null;
  botid?: string | null;
  componentidunique?: string | null;
  componentstate?: componentstate | null;
  environmentvariabledefinitionid?: string | null;
  iscustomizable?: any | null;
  ismanaged?: boolean | null;
  overwritetime?: Date | null;
  solutionid?: string | null;
  supportingsolutionid?: string | null;
  versionnumber?: number | null;
}
interface bot_environmentvariabledefinition_Relationships {
  bot_environmentvariabledefinition?: EnvironmentVariableDefinition_Result[] | null;
}
interface bot_environmentvariabledefinition extends bot_environmentvariabledefinition_Base, bot_environmentvariabledefinition_Relationships {
}
interface bot_environmentvariabledefinition_Create extends bot_environmentvariabledefinition {
}
interface bot_environmentvariabledefinition_Update extends bot_environmentvariabledefinition {
}
interface bot_environmentvariabledefinition_Select {
  bot_environmentvariabledefinitionid: WebAttribute<bot_environmentvariabledefinition_Select, { bot_environmentvariabledefinitionid: string | null }, {  }>;
  botid: WebAttribute<bot_environmentvariabledefinition_Select, { botid: string | null }, {  }>;
  componentidunique: WebAttribute<bot_environmentvariabledefinition_Select, { componentidunique: string | null }, {  }>;
  componentstate: WebAttribute<bot_environmentvariabledefinition_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  environmentvariabledefinitionid: WebAttribute<bot_environmentvariabledefinition_Select, { environmentvariabledefinitionid: string | null }, {  }>;
  iscustomizable: WebAttribute<bot_environmentvariabledefinition_Select, { iscustomizable: any | null }, {  }>;
  ismanaged: WebAttribute<bot_environmentvariabledefinition_Select, { ismanaged: boolean | null }, {  }>;
  overwritetime: WebAttribute<bot_environmentvariabledefinition_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  solutionid: WebAttribute<bot_environmentvariabledefinition_Select, { solutionid: string | null }, {  }>;
  supportingsolutionid: WebAttribute<bot_environmentvariabledefinition_Select, { supportingsolutionid: string | null }, {  }>;
  versionnumber: WebAttribute<bot_environmentvariabledefinition_Select, { versionnumber: number | null }, {  }>;
}
interface bot_environmentvariabledefinition_Filter {
  bot_environmentvariabledefinitionid: XQW.Guid;
  botid: XQW.Guid;
  componentidunique: XQW.Guid;
  componentstate: componentstate;
  environmentvariabledefinitionid: XQW.Guid;
  iscustomizable: any;
  ismanaged: boolean;
  overwritetime: Date;
  solutionid: XQW.Guid;
  supportingsolutionid: XQW.Guid;
  versionnumber: number;
}
interface bot_environmentvariabledefinition_Expand {
  bot_environmentvariabledefinition: WebExpand<bot_environmentvariabledefinition_Expand, EnvironmentVariableDefinition_Select, EnvironmentVariableDefinition_Filter, { bot_environmentvariabledefinition: EnvironmentVariableDefinition_Result[] }>;
}
interface bot_environmentvariabledefinition_FormattedResult {
  componentstate_formatted?: string;
  overwritetime_formatted?: string;
}
interface bot_environmentvariabledefinition_Result extends bot_environmentvariabledefinition_Base, bot_environmentvariabledefinition_Relationships {
  "@odata.etag": string;
}
interface bot_environmentvariabledefinition_RelatedOne {
}
interface bot_environmentvariabledefinition_RelatedMany {
  bot_environmentvariabledefinition: WebMappingRetrieve<EnvironmentVariableDefinition_Select,EnvironmentVariableDefinition_Expand,EnvironmentVariableDefinition_Filter,EnvironmentVariableDefinition_Fixed,EnvironmentVariableDefinition_Result,EnvironmentVariableDefinition_FormattedResult>;
}
interface WebEntitiesRetrieve {
  bot_environmentvariabledefinitionset: WebMappingRetrieve<bot_environmentvariabledefinition_Select,bot_environmentvariabledefinition_Expand,bot_environmentvariabledefinition_Filter,bot_environmentvariabledefinition_Fixed,bot_environmentvariabledefinition_Result,bot_environmentvariabledefinition_FormattedResult>;
}
interface WebEntitiesRelated {
  bot_environmentvariabledefinitionset: WebMappingRelated<bot_environmentvariabledefinition_RelatedOne,bot_environmentvariabledefinition_RelatedMany>;
}
interface WebEntitiesCUDA {
  bot_environmentvariabledefinitionset: WebMappingCUDA<bot_environmentvariabledefinition_Create,bot_environmentvariabledefinition_Update,bot_environmentvariabledefinition_Select>;
}
