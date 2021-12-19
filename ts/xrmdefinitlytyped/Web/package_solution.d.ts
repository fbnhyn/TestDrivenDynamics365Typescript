interface package_solution_Base extends WebEntity {
  package_solutionid?: string | null;
  packageid?: string | null;
  solutionid?: string | null;
  versionnumber?: number | null;
}
interface package_solution_Relationships {
  package_solution?: Solution_Result[] | null;
}
interface package_solution extends package_solution_Base, package_solution_Relationships {
}
interface package_solution_Create extends package_solution {
}
interface package_solution_Update extends package_solution {
}
interface package_solution_Select {
  package_solutionid: WebAttribute<package_solution_Select, { package_solutionid: string | null }, {  }>;
  packageid: WebAttribute<package_solution_Select, { packageid: string | null }, {  }>;
  solutionid: WebAttribute<package_solution_Select, { solutionid: string | null }, {  }>;
  versionnumber: WebAttribute<package_solution_Select, { versionnumber: number | null }, {  }>;
}
interface package_solution_Filter {
  package_solutionid: XQW.Guid;
  packageid: XQW.Guid;
  solutionid: XQW.Guid;
  versionnumber: number;
}
interface package_solution_Expand {
  package_solution: WebExpand<package_solution_Expand, Solution_Select, Solution_Filter, { package_solution: Solution_Result[] }>;
}
interface package_solution_FormattedResult {
}
interface package_solution_Result extends package_solution_Base, package_solution_Relationships {
  "@odata.etag": string;
}
interface package_solution_RelatedOne {
}
interface package_solution_RelatedMany {
  package_solution: WebMappingRetrieve<Solution_Select,Solution_Expand,Solution_Filter,Solution_Fixed,Solution_Result,Solution_FormattedResult>;
}
interface WebEntitiesRetrieve {
  package_solutionset: WebMappingRetrieve<package_solution_Select,package_solution_Expand,package_solution_Filter,package_solution_Fixed,package_solution_Result,package_solution_FormattedResult>;
}
interface WebEntitiesRelated {
  package_solutionset: WebMappingRelated<package_solution_RelatedOne,package_solution_RelatedMany>;
}
interface WebEntitiesCUDA {
  package_solutionset: WebMappingCUDA<package_solution_Create,package_solution_Update,package_solution_Select>;
}
