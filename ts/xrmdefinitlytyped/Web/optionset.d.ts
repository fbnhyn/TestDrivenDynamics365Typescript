interface OptionSet_Base extends WebEntity {
  componentstate?: componentstate | null;
  name?: string | null;
  optionsetid?: string | null;
  overwritetime?: Date | null;
  solutionid?: string | null;
}
interface OptionSet_Relationships {
}
interface OptionSet extends OptionSet_Base, OptionSet_Relationships {
}
interface OptionSet_Create extends OptionSet {
}
interface OptionSet_Update extends OptionSet {
}
interface OptionSet_Select {
  componentstate: WebAttribute<OptionSet_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  name: WebAttribute<OptionSet_Select, { name: string | null }, {  }>;
  optionsetid: WebAttribute<OptionSet_Select, { optionsetid: string | null }, {  }>;
  overwritetime: WebAttribute<OptionSet_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  solutionid: WebAttribute<OptionSet_Select, { solutionid: string | null }, {  }>;
}
interface OptionSet_Filter {
  componentstate: componentstate;
  name: string;
  optionsetid: XQW.Guid;
  overwritetime: Date;
  solutionid: XQW.Guid;
}
interface OptionSet_Expand {
}
interface OptionSet_FormattedResult {
  componentstate_formatted?: string;
  overwritetime_formatted?: string;
}
interface OptionSet_Result extends OptionSet_Base, OptionSet_Relationships {
  "@odata.etag": string;
}
interface OptionSet_RelatedOne {
}
interface OptionSet_RelatedMany {
}
interface WebEntitiesRetrieve {
  optionsets: WebMappingRetrieve<OptionSet_Select,OptionSet_Expand,OptionSet_Filter,OptionSet_Fixed,OptionSet_Result,OptionSet_FormattedResult>;
}
interface WebEntitiesRelated {
  optionsets: WebMappingRelated<OptionSet_RelatedOne,OptionSet_RelatedMany>;
}
interface WebEntitiesCUDA {
  optionsets: WebMappingCUDA<OptionSet_Create,OptionSet_Update,OptionSet_Select>;
}
