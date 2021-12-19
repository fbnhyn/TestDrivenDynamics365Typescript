interface DependencyFeature_Base extends WebEntity {
  componentstate?: componentstate | null;
  dependencyfeatureid?: string | null;
  dependencyfeatureidunique?: string | null;
  introducedversion?: string | null;
  ismanaged?: boolean | null;
  overwritetime?: Date | null;
  solutionid?: string | null;
  supportingsolutionid?: string | null;
}
interface DependencyFeature_Relationships {
}
interface DependencyFeature extends DependencyFeature_Base, DependencyFeature_Relationships {
}
interface DependencyFeature_Create extends DependencyFeature {
}
interface DependencyFeature_Update extends DependencyFeature {
}
interface DependencyFeature_Select {
  componentstate: WebAttribute<DependencyFeature_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  dependencyfeatureid: WebAttribute<DependencyFeature_Select, { dependencyfeatureid: string | null }, {  }>;
  dependencyfeatureidunique: WebAttribute<DependencyFeature_Select, { dependencyfeatureidunique: string | null }, {  }>;
  introducedversion: WebAttribute<DependencyFeature_Select, { introducedversion: string | null }, {  }>;
  ismanaged: WebAttribute<DependencyFeature_Select, { ismanaged: boolean | null }, {  }>;
  overwritetime: WebAttribute<DependencyFeature_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  solutionid: WebAttribute<DependencyFeature_Select, { solutionid: string | null }, {  }>;
  supportingsolutionid: WebAttribute<DependencyFeature_Select, { supportingsolutionid: string | null }, {  }>;
}
interface DependencyFeature_Filter {
  componentstate: componentstate;
  dependencyfeatureid: XQW.Guid;
  dependencyfeatureidunique: XQW.Guid;
  introducedversion: string;
  ismanaged: boolean;
  overwritetime: Date;
  solutionid: XQW.Guid;
  supportingsolutionid: XQW.Guid;
}
interface DependencyFeature_Expand {
}
interface DependencyFeature_FormattedResult {
  componentstate_formatted?: string;
  overwritetime_formatted?: string;
}
interface DependencyFeature_Result extends DependencyFeature_Base, DependencyFeature_Relationships {
  "@odata.etag": string;
}
interface DependencyFeature_RelatedOne {
}
interface DependencyFeature_RelatedMany {
}
interface WebEntitiesRetrieve {
  dependencyfeatures: WebMappingRetrieve<DependencyFeature_Select,DependencyFeature_Expand,DependencyFeature_Filter,DependencyFeature_Fixed,DependencyFeature_Result,DependencyFeature_FormattedResult>;
}
interface WebEntitiesRelated {
  dependencyfeatures: WebMappingRelated<DependencyFeature_RelatedOne,DependencyFeature_RelatedMany>;
}
interface WebEntitiesCUDA {
  dependencyfeatures: WebMappingCUDA<DependencyFeature_Create,DependencyFeature_Update,DependencyFeature_Select>;
}
