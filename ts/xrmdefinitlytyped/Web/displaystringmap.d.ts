interface DisplayStringMap_Base extends WebEntity {
  componentstate?: componentstate | null;
  displaystringid?: string | null;
  displaystringmapid?: string | null;
  displaystringmapidunique?: string | null;
  ismanaged?: boolean | null;
  objecttypecode?: string | null;
  overwritetime?: Date | null;
  solutionid?: string | null;
  supportingsolutionid?: string | null;
}
interface DisplayStringMap_Relationships {
  displaystringid_displaystring?: DisplayString_Result | null;
  userentityinstancedata_displaystringmap?: UserEntityInstanceData_Result[] | null;
}
interface DisplayStringMap extends DisplayStringMap_Base, DisplayStringMap_Relationships {
  displaystringid_displaystring_bind$displaystrings?: string | null;
}
interface DisplayStringMap_Create extends DisplayStringMap {
}
interface DisplayStringMap_Update extends DisplayStringMap {
}
interface DisplayStringMap_Select {
  componentstate: WebAttribute<DisplayStringMap_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  displaystringid: WebAttribute<DisplayStringMap_Select, { displaystringid: string | null }, {  }>;
  displaystringmapid: WebAttribute<DisplayStringMap_Select, { displaystringmapid: string | null }, {  }>;
  displaystringmapidunique: WebAttribute<DisplayStringMap_Select, { displaystringmapidunique: string | null }, {  }>;
  ismanaged: WebAttribute<DisplayStringMap_Select, { ismanaged: boolean | null }, {  }>;
  objecttypecode: WebAttribute<DisplayStringMap_Select, { objecttypecode: string | null }, {  }>;
  overwritetime: WebAttribute<DisplayStringMap_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  solutionid: WebAttribute<DisplayStringMap_Select, { solutionid: string | null }, {  }>;
  supportingsolutionid: WebAttribute<DisplayStringMap_Select, { supportingsolutionid: string | null }, {  }>;
}
interface DisplayStringMap_Filter {
  componentstate: componentstate;
  displaystringid: XQW.Guid;
  displaystringmapid: XQW.Guid;
  displaystringmapidunique: XQW.Guid;
  ismanaged: boolean;
  objecttypecode: string;
  overwritetime: Date;
  solutionid: XQW.Guid;
  supportingsolutionid: XQW.Guid;
}
interface DisplayStringMap_Expand {
  displaystringid_displaystring: WebExpand<DisplayStringMap_Expand, DisplayString_Select, DisplayString_Filter, { displaystringid_displaystring: DisplayString_Result }>;
  userentityinstancedata_displaystringmap: WebExpand<DisplayStringMap_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { userentityinstancedata_displaystringmap: UserEntityInstanceData_Result[] }>;
}
interface DisplayStringMap_FormattedResult {
  componentstate_formatted?: string;
  overwritetime_formatted?: string;
}
interface DisplayStringMap_Result extends DisplayStringMap_Base, DisplayStringMap_Relationships {
  "@odata.etag": string;
}
interface DisplayStringMap_RelatedOne {
  displaystringid_displaystring: WebMappingRetrieve<DisplayString_Select,DisplayString_Expand,DisplayString_Filter,DisplayString_Fixed,DisplayString_Result,DisplayString_FormattedResult>;
}
interface DisplayStringMap_RelatedMany {
  userentityinstancedata_displaystringmap: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  displaystringmaps: WebMappingRetrieve<DisplayStringMap_Select,DisplayStringMap_Expand,DisplayStringMap_Filter,DisplayStringMap_Fixed,DisplayStringMap_Result,DisplayStringMap_FormattedResult>;
}
interface WebEntitiesRelated {
  displaystringmaps: WebMappingRelated<DisplayStringMap_RelatedOne,DisplayStringMap_RelatedMany>;
}
interface WebEntitiesCUDA {
  displaystringmaps: WebMappingCUDA<DisplayStringMap_Create,DisplayStringMap_Update,DisplayStringMap_Select>;
}
