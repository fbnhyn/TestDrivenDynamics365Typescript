interface botcomponent_environmentvariabledefinition_Base extends WebEntity {
  botcomponent_environmentvariabledefinitionid?: string | null;
  botcomponentid?: string | null;
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
interface botcomponent_environmentvariabledefinition_Relationships {
  botcomponent_environmentvariabledefinition?: EnvironmentVariableDefinition_Result[] | null;
}
interface botcomponent_environmentvariabledefinition extends botcomponent_environmentvariabledefinition_Base, botcomponent_environmentvariabledefinition_Relationships {
}
interface botcomponent_environmentvariabledefinition_Create extends botcomponent_environmentvariabledefinition {
}
interface botcomponent_environmentvariabledefinition_Update extends botcomponent_environmentvariabledefinition {
}
interface botcomponent_environmentvariabledefinition_Select {
  botcomponent_environmentvariabledefinitionid: WebAttribute<botcomponent_environmentvariabledefinition_Select, { botcomponent_environmentvariabledefinitionid: string | null }, {  }>;
  botcomponentid: WebAttribute<botcomponent_environmentvariabledefinition_Select, { botcomponentid: string | null }, {  }>;
  componentidunique: WebAttribute<botcomponent_environmentvariabledefinition_Select, { componentidunique: string | null }, {  }>;
  componentstate: WebAttribute<botcomponent_environmentvariabledefinition_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  environmentvariabledefinitionid: WebAttribute<botcomponent_environmentvariabledefinition_Select, { environmentvariabledefinitionid: string | null }, {  }>;
  iscustomizable: WebAttribute<botcomponent_environmentvariabledefinition_Select, { iscustomizable: any | null }, {  }>;
  ismanaged: WebAttribute<botcomponent_environmentvariabledefinition_Select, { ismanaged: boolean | null }, {  }>;
  overwritetime: WebAttribute<botcomponent_environmentvariabledefinition_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  solutionid: WebAttribute<botcomponent_environmentvariabledefinition_Select, { solutionid: string | null }, {  }>;
  supportingsolutionid: WebAttribute<botcomponent_environmentvariabledefinition_Select, { supportingsolutionid: string | null }, {  }>;
  versionnumber: WebAttribute<botcomponent_environmentvariabledefinition_Select, { versionnumber: number | null }, {  }>;
}
interface botcomponent_environmentvariabledefinition_Filter {
  botcomponent_environmentvariabledefinitionid: XQW.Guid;
  botcomponentid: XQW.Guid;
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
interface botcomponent_environmentvariabledefinition_Expand {
  botcomponent_environmentvariabledefinition: WebExpand<botcomponent_environmentvariabledefinition_Expand, EnvironmentVariableDefinition_Select, EnvironmentVariableDefinition_Filter, { botcomponent_environmentvariabledefinition: EnvironmentVariableDefinition_Result[] }>;
}
interface botcomponent_environmentvariabledefinition_FormattedResult {
  componentstate_formatted?: string;
  overwritetime_formatted?: string;
}
interface botcomponent_environmentvariabledefinition_Result extends botcomponent_environmentvariabledefinition_Base, botcomponent_environmentvariabledefinition_Relationships {
  "@odata.etag": string;
}
interface botcomponent_environmentvariabledefinition_RelatedOne {
}
interface botcomponent_environmentvariabledefinition_RelatedMany {
  botcomponent_environmentvariabledefinition: WebMappingRetrieve<EnvironmentVariableDefinition_Select,EnvironmentVariableDefinition_Expand,EnvironmentVariableDefinition_Filter,EnvironmentVariableDefinition_Fixed,EnvironmentVariableDefinition_Result,EnvironmentVariableDefinition_FormattedResult>;
}
interface WebEntitiesRetrieve {
  botcomponent_environmentvariabledefinitionset: WebMappingRetrieve<botcomponent_environmentvariabledefinition_Select,botcomponent_environmentvariabledefinition_Expand,botcomponent_environmentvariabledefinition_Filter,botcomponent_environmentvariabledefinition_Fixed,botcomponent_environmentvariabledefinition_Result,botcomponent_environmentvariabledefinition_FormattedResult>;
}
interface WebEntitiesRelated {
  botcomponent_environmentvariabledefinitionset: WebMappingRelated<botcomponent_environmentvariabledefinition_RelatedOne,botcomponent_environmentvariabledefinition_RelatedMany>;
}
interface WebEntitiesCUDA {
  botcomponent_environmentvariabledefinitionset: WebMappingCUDA<botcomponent_environmentvariabledefinition_Create,botcomponent_environmentvariabledefinition_Update,botcomponent_environmentvariabledefinition_Select>;
}
