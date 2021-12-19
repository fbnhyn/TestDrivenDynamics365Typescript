interface RuntimeDependency_Base extends WebEntity {
  createdtime?: Date | null;
  dependencyid?: string | null;
  dependentcomponentnodeid?: string | null;
  dependentcomponenttype?: number | null;
  ispublished?: any | null;
  requiredcomponentmodifiedtime?: Date | null;
  requiredcomponentnodeid?: string | null;
  requiredcomponenttype?: number | null;
}
interface RuntimeDependency_Relationships {
}
interface RuntimeDependency extends RuntimeDependency_Base, RuntimeDependency_Relationships {
}
interface RuntimeDependency_Create extends RuntimeDependency {
}
interface RuntimeDependency_Update extends RuntimeDependency {
}
interface RuntimeDependency_Select {
  createdtime: WebAttribute<RuntimeDependency_Select, { createdtime: Date | null }, { createdtime_formatted?: string }>;
  dependencyid: WebAttribute<RuntimeDependency_Select, { dependencyid: string | null }, {  }>;
  dependentcomponentnodeid: WebAttribute<RuntimeDependency_Select, { dependentcomponentnodeid: string | null }, {  }>;
  dependentcomponenttype: WebAttribute<RuntimeDependency_Select, { dependentcomponenttype: number | null }, {  }>;
  ispublished: WebAttribute<RuntimeDependency_Select, { ispublished: any | null }, {  }>;
  requiredcomponentmodifiedtime: WebAttribute<RuntimeDependency_Select, { requiredcomponentmodifiedtime: Date | null }, { requiredcomponentmodifiedtime_formatted?: string }>;
  requiredcomponentnodeid: WebAttribute<RuntimeDependency_Select, { requiredcomponentnodeid: string | null }, {  }>;
  requiredcomponenttype: WebAttribute<RuntimeDependency_Select, { requiredcomponenttype: number | null }, {  }>;
}
interface RuntimeDependency_Filter {
  createdtime: Date;
  dependencyid: XQW.Guid;
  dependentcomponentnodeid: XQW.Guid;
  dependentcomponenttype: number;
  ispublished: any;
  requiredcomponentmodifiedtime: Date;
  requiredcomponentnodeid: string;
  requiredcomponenttype: number;
}
interface RuntimeDependency_Expand {
}
interface RuntimeDependency_FormattedResult {
  createdtime_formatted?: string;
  requiredcomponentmodifiedtime_formatted?: string;
}
interface RuntimeDependency_Result extends RuntimeDependency_Base, RuntimeDependency_Relationships {
  "@odata.etag": string;
}
interface RuntimeDependency_RelatedOne {
}
interface RuntimeDependency_RelatedMany {
}
interface WebEntitiesRetrieve {
  runtimedependencies: WebMappingRetrieve<RuntimeDependency_Select,RuntimeDependency_Expand,RuntimeDependency_Filter,RuntimeDependency_Fixed,RuntimeDependency_Result,RuntimeDependency_FormattedResult>;
}
interface WebEntitiesRelated {
  runtimedependencies: WebMappingRelated<RuntimeDependency_RelatedOne,RuntimeDependency_RelatedMany>;
}
interface WebEntitiesCUDA {
  runtimedependencies: WebMappingCUDA<RuntimeDependency_Create,RuntimeDependency_Update,RuntimeDependency_Select>;
}
