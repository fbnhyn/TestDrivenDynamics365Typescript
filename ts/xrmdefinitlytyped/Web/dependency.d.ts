interface Dependency_Base extends WebEntity {
  dependencyid?: string | null;
  dependencytype?: dependencytype | null;
  dependentcomponentbasesolutionid?: string | null;
  dependentcomponentobjectid?: string | null;
  dependentcomponentparentid?: string | null;
  dependentcomponenttype?: componenttype | null;
  requiredcomponentbasesolutionid?: string | null;
  requiredcomponentintroducedversion?: number | null;
  requiredcomponentobjectid?: string | null;
  requiredcomponentparentid?: string | null;
  requiredcomponenttype?: componenttype | null;
  versionnumber?: number | null;
}
interface Dependency_Relationships {
  userentityinstancedata_dependency?: UserEntityInstanceData_Result[] | null;
}
interface Dependency extends Dependency_Base, Dependency_Relationships {
}
interface Dependency_Create extends Dependency {
}
interface Dependency_Update extends Dependency {
}
interface Dependency_Select {
  dependencyid: WebAttribute<Dependency_Select, { dependencyid: string | null }, {  }>;
  dependencytype: WebAttribute<Dependency_Select, { dependencytype: dependencytype | null }, { dependencytype_formatted?: string }>;
  dependentcomponentbasesolutionid: WebAttribute<Dependency_Select, { dependentcomponentbasesolutionid: string | null }, {  }>;
  dependentcomponentnodeid_guid: WebAttribute<Dependency_Select, { dependentcomponentnodeid_guid: string | null }, { dependentcomponentnodeid_formatted?: string }>;
  dependentcomponentobjectid: WebAttribute<Dependency_Select, { dependentcomponentobjectid: string | null }, {  }>;
  dependentcomponentparentid: WebAttribute<Dependency_Select, { dependentcomponentparentid: string | null }, {  }>;
  dependentcomponenttype: WebAttribute<Dependency_Select, { dependentcomponenttype: componenttype | null }, { dependentcomponenttype_formatted?: string }>;
  requiredcomponentbasesolutionid: WebAttribute<Dependency_Select, { requiredcomponentbasesolutionid: string | null }, {  }>;
  requiredcomponentintroducedversion: WebAttribute<Dependency_Select, { requiredcomponentintroducedversion: number | null }, {  }>;
  requiredcomponentnodeid_guid: WebAttribute<Dependency_Select, { requiredcomponentnodeid_guid: string | null }, { requiredcomponentnodeid_formatted?: string }>;
  requiredcomponentobjectid: WebAttribute<Dependency_Select, { requiredcomponentobjectid: string | null }, {  }>;
  requiredcomponentparentid: WebAttribute<Dependency_Select, { requiredcomponentparentid: string | null }, {  }>;
  requiredcomponenttype: WebAttribute<Dependency_Select, { requiredcomponenttype: componenttype | null }, { requiredcomponenttype_formatted?: string }>;
  versionnumber: WebAttribute<Dependency_Select, { versionnumber: number | null }, {  }>;
}
interface Dependency_Filter {
  dependencyid: XQW.Guid;
  dependencytype: dependencytype;
  dependentcomponentbasesolutionid: XQW.Guid;
  dependentcomponentnodeid_guid: XQW.Guid;
  dependentcomponentobjectid: XQW.Guid;
  dependentcomponentparentid: XQW.Guid;
  dependentcomponenttype: componenttype;
  requiredcomponentbasesolutionid: XQW.Guid;
  requiredcomponentintroducedversion: number;
  requiredcomponentnodeid_guid: XQW.Guid;
  requiredcomponentobjectid: XQW.Guid;
  requiredcomponentparentid: XQW.Guid;
  requiredcomponenttype: componenttype;
  versionnumber: number;
}
interface Dependency_Expand {
  dependentcomponentnodeid: WebExpand<Dependency_Expand, DependencyNode_Select, DependencyNode_Filter, { dependentcomponentnodeid: DependencyNode_Result }>;
  requiredcomponentnodeid: WebExpand<Dependency_Expand, DependencyNode_Select, DependencyNode_Filter, { requiredcomponentnodeid: DependencyNode_Result }>;
  userentityinstancedata_dependency: WebExpand<Dependency_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { userentityinstancedata_dependency: UserEntityInstanceData_Result[] }>;
}
interface Dependency_FormattedResult {
  dependencytype_formatted?: string;
  dependentcomponentnodeid_formatted?: string;
  dependentcomponenttype_formatted?: string;
  requiredcomponentnodeid_formatted?: string;
  requiredcomponenttype_formatted?: string;
}
interface Dependency_Result extends Dependency_Base, Dependency_Relationships {
  "@odata.etag": string;
  dependentcomponentnodeid_guid: string | null;
  requiredcomponentnodeid_guid: string | null;
}
interface Dependency_RelatedOne {
  dependentcomponentnodeid: WebMappingRetrieve<DependencyNode_Select,DependencyNode_Expand,DependencyNode_Filter,DependencyNode_Fixed,DependencyNode_Result,DependencyNode_FormattedResult>;
  requiredcomponentnodeid: WebMappingRetrieve<DependencyNode_Select,DependencyNode_Expand,DependencyNode_Filter,DependencyNode_Fixed,DependencyNode_Result,DependencyNode_FormattedResult>;
}
interface Dependency_RelatedMany {
  userentityinstancedata_dependency: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  dependencies: WebMappingRetrieve<Dependency_Select,Dependency_Expand,Dependency_Filter,Dependency_Fixed,Dependency_Result,Dependency_FormattedResult>;
}
interface WebEntitiesRelated {
  dependencies: WebMappingRelated<Dependency_RelatedOne,Dependency_RelatedMany>;
}
interface WebEntitiesCUDA {
  dependencies: WebMappingCUDA<Dependency_Create,Dependency_Update,Dependency_Select>;
}
