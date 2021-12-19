interface DependencyNode_Base extends WebEntity {
  componenttype?: componenttype | null;
  dependencynodeid?: string | null;
  introducedversion?: number | null;
  issharedcomponent?: boolean | null;
  objectid?: string | null;
  parentid?: string | null;
  versionnumber?: number | null;
}
interface DependencyNode_Relationships {
  dependencynode_ancestor_dependency?: Dependency_Result[] | null;
  dependencynode_descendent_dependency?: Dependency_Result[] | null;
  userentityinstancedata_dependencynode?: UserEntityInstanceData_Result[] | null;
}
interface DependencyNode extends DependencyNode_Base, DependencyNode_Relationships {
}
interface DependencyNode_Create extends DependencyNode {
}
interface DependencyNode_Update extends DependencyNode {
}
interface DependencyNode_Select {
  basesolutionid_guid: WebAttribute<DependencyNode_Select, { basesolutionid_guid: string | null }, { basesolutionid_formatted?: string }>;
  componenttype: WebAttribute<DependencyNode_Select, { componenttype: componenttype | null }, { componenttype_formatted?: string }>;
  dependencynodeid: WebAttribute<DependencyNode_Select, { dependencynodeid: string | null }, {  }>;
  introducedversion: WebAttribute<DependencyNode_Select, { introducedversion: number | null }, {  }>;
  issharedcomponent: WebAttribute<DependencyNode_Select, { issharedcomponent: boolean | null }, {  }>;
  objectid: WebAttribute<DependencyNode_Select, { objectid: string | null }, {  }>;
  parentid: WebAttribute<DependencyNode_Select, { parentid: string | null }, {  }>;
  topsolutionid_guid: WebAttribute<DependencyNode_Select, { topsolutionid_guid: string | null }, { topsolutionid_formatted?: string }>;
  versionnumber: WebAttribute<DependencyNode_Select, { versionnumber: number | null }, {  }>;
}
interface DependencyNode_Filter {
  basesolutionid_guid: XQW.Guid;
  componenttype: componenttype;
  dependencynodeid: XQW.Guid;
  introducedversion: number;
  issharedcomponent: boolean;
  objectid: XQW.Guid;
  parentid: XQW.Guid;
  topsolutionid_guid: XQW.Guid;
  versionnumber: number;
}
interface DependencyNode_Expand {
  basesolutionid: WebExpand<DependencyNode_Expand, Solution_Select, Solution_Filter, { basesolutionid: Solution_Result }>;
  dependencynode_ancestor_dependency: WebExpand<DependencyNode_Expand, Dependency_Select, Dependency_Filter, { dependencynode_ancestor_dependency: Dependency_Result[] }>;
  dependencynode_descendent_dependency: WebExpand<DependencyNode_Expand, Dependency_Select, Dependency_Filter, { dependencynode_descendent_dependency: Dependency_Result[] }>;
  topsolutionid: WebExpand<DependencyNode_Expand, Solution_Select, Solution_Filter, { topsolutionid: Solution_Result }>;
  userentityinstancedata_dependencynode: WebExpand<DependencyNode_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { userentityinstancedata_dependencynode: UserEntityInstanceData_Result[] }>;
}
interface DependencyNode_FormattedResult {
  basesolutionid_formatted?: string;
  componenttype_formatted?: string;
  topsolutionid_formatted?: string;
}
interface DependencyNode_Result extends DependencyNode_Base, DependencyNode_Relationships {
  "@odata.etag": string;
  basesolutionid_guid: string | null;
  topsolutionid_guid: string | null;
}
interface DependencyNode_RelatedOne {
  basesolutionid: WebMappingRetrieve<Solution_Select,Solution_Expand,Solution_Filter,Solution_Fixed,Solution_Result,Solution_FormattedResult>;
  topsolutionid: WebMappingRetrieve<Solution_Select,Solution_Expand,Solution_Filter,Solution_Fixed,Solution_Result,Solution_FormattedResult>;
}
interface DependencyNode_RelatedMany {
  dependencynode_ancestor_dependency: WebMappingRetrieve<Dependency_Select,Dependency_Expand,Dependency_Filter,Dependency_Fixed,Dependency_Result,Dependency_FormattedResult>;
  dependencynode_descendent_dependency: WebMappingRetrieve<Dependency_Select,Dependency_Expand,Dependency_Filter,Dependency_Fixed,Dependency_Result,Dependency_FormattedResult>;
  userentityinstancedata_dependencynode: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  dependencynodes: WebMappingRetrieve<DependencyNode_Select,DependencyNode_Expand,DependencyNode_Filter,DependencyNode_Fixed,DependencyNode_Result,DependencyNode_FormattedResult>;
}
interface WebEntitiesRelated {
  dependencynodes: WebMappingRelated<DependencyNode_RelatedOne,DependencyNode_RelatedMany>;
}
interface WebEntitiesCUDA {
  dependencynodes: WebMappingCUDA<DependencyNode_Create,DependencyNode_Update,DependencyNode_Select>;
}
