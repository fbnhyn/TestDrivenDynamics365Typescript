interface AppModuleMetadataDependency_Base extends WebEntity {
  appmodulemetadatadependencyid?: string | null;
  createdon?: Date | null;
  dependentcomponentid?: string | null;
  modifiedon?: Date | null;
  requiredcomponentid?: string | null;
  requiredcomponentinternalid?: string | null;
  requiredcomponentsubtype?: number | null;
  requiredcomponenttype?: number | null;
  requiredcomponentversion?: number | null;
  state?: number | null;
}
interface AppModuleMetadataDependency_Relationships {
}
interface AppModuleMetadataDependency extends AppModuleMetadataDependency_Base, AppModuleMetadataDependency_Relationships {
}
interface AppModuleMetadataDependency_Create extends AppModuleMetadataDependency {
}
interface AppModuleMetadataDependency_Update extends AppModuleMetadataDependency {
}
interface AppModuleMetadataDependency_Select {
  appmodulemetadatadependencyid: WebAttribute<AppModuleMetadataDependency_Select, { appmodulemetadatadependencyid: string | null }, {  }>;
  createdon: WebAttribute<AppModuleMetadataDependency_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  dependentcomponentid: WebAttribute<AppModuleMetadataDependency_Select, { dependentcomponentid: string | null }, {  }>;
  modifiedon: WebAttribute<AppModuleMetadataDependency_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  requiredcomponentid: WebAttribute<AppModuleMetadataDependency_Select, { requiredcomponentid: string | null }, {  }>;
  requiredcomponentinternalid: WebAttribute<AppModuleMetadataDependency_Select, { requiredcomponentinternalid: string | null }, {  }>;
  requiredcomponentsubtype: WebAttribute<AppModuleMetadataDependency_Select, { requiredcomponentsubtype: number | null }, {  }>;
  requiredcomponenttype: WebAttribute<AppModuleMetadataDependency_Select, { requiredcomponenttype: number | null }, {  }>;
  requiredcomponentversion: WebAttribute<AppModuleMetadataDependency_Select, { requiredcomponentversion: number | null }, {  }>;
  state: WebAttribute<AppModuleMetadataDependency_Select, { state: number | null }, {  }>;
}
interface AppModuleMetadataDependency_Filter {
  appmodulemetadatadependencyid: XQW.Guid;
  createdon: Date;
  dependentcomponentid: XQW.Guid;
  modifiedon: Date;
  requiredcomponentid: XQW.Guid;
  requiredcomponentinternalid: string;
  requiredcomponentsubtype: number;
  requiredcomponenttype: number;
  requiredcomponentversion: number;
  state: number;
}
interface AppModuleMetadataDependency_Expand {
}
interface AppModuleMetadataDependency_FormattedResult {
  createdon_formatted?: string;
  modifiedon_formatted?: string;
}
interface AppModuleMetadataDependency_Result extends AppModuleMetadataDependency_Base, AppModuleMetadataDependency_Relationships {
  "@odata.etag": string;
}
interface AppModuleMetadataDependency_RelatedOne {
}
interface AppModuleMetadataDependency_RelatedMany {
}
interface WebEntitiesRetrieve {
  appmodulemetadatadependencycollection: WebMappingRetrieve<AppModuleMetadataDependency_Select,AppModuleMetadataDependency_Expand,AppModuleMetadataDependency_Filter,AppModuleMetadataDependency_Fixed,AppModuleMetadataDependency_Result,AppModuleMetadataDependency_FormattedResult>;
}
interface WebEntitiesRelated {
  appmodulemetadatadependencycollection: WebMappingRelated<AppModuleMetadataDependency_RelatedOne,AppModuleMetadataDependency_RelatedMany>;
}
interface WebEntitiesCUDA {
  appmodulemetadatadependencycollection: WebMappingCUDA<AppModuleMetadataDependency_Create,AppModuleMetadataDependency_Update,AppModuleMetadataDependency_Select>;
}
