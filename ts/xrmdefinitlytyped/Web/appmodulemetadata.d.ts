interface AppModuleMetadata_Base extends WebEntity {
  appmoduleid?: string | null;
  appmodulemetadataid?: string | null;
  componentid?: string | null;
  componentisdefault?: boolean | null;
  componentisquickfindquery?: boolean | null;
  componentistabletenabled?: boolean | null;
  componentisuserchart?: boolean | null;
  componentisuserform?: boolean | null;
  componentisuserview?: boolean | null;
  componentstatecode?: number | null;
  componentsubtype?: number | null;
  componenttype?: number | null;
  componentversion?: number | null;
  createdon?: Date | null;
  modifiedon?: Date | null;
  parentcomponentid?: string | null;
  state?: number | null;
}
interface AppModuleMetadata_Relationships {
}
interface AppModuleMetadata extends AppModuleMetadata_Base, AppModuleMetadata_Relationships {
}
interface AppModuleMetadata_Create extends AppModuleMetadata {
}
interface AppModuleMetadata_Update extends AppModuleMetadata {
}
interface AppModuleMetadata_Select {
  appmoduleid: WebAttribute<AppModuleMetadata_Select, { appmoduleid: string | null }, {  }>;
  appmodulemetadataid: WebAttribute<AppModuleMetadata_Select, { appmodulemetadataid: string | null }, {  }>;
  componentid: WebAttribute<AppModuleMetadata_Select, { componentid: string | null }, {  }>;
  componentisdefault: WebAttribute<AppModuleMetadata_Select, { componentisdefault: boolean | null }, {  }>;
  componentisquickfindquery: WebAttribute<AppModuleMetadata_Select, { componentisquickfindquery: boolean | null }, {  }>;
  componentistabletenabled: WebAttribute<AppModuleMetadata_Select, { componentistabletenabled: boolean | null }, {  }>;
  componentisuserchart: WebAttribute<AppModuleMetadata_Select, { componentisuserchart: boolean | null }, {  }>;
  componentisuserform: WebAttribute<AppModuleMetadata_Select, { componentisuserform: boolean | null }, {  }>;
  componentisuserview: WebAttribute<AppModuleMetadata_Select, { componentisuserview: boolean | null }, {  }>;
  componentstatecode: WebAttribute<AppModuleMetadata_Select, { componentstatecode: number | null }, {  }>;
  componentsubtype: WebAttribute<AppModuleMetadata_Select, { componentsubtype: number | null }, {  }>;
  componenttype: WebAttribute<AppModuleMetadata_Select, { componenttype: number | null }, {  }>;
  componentversion: WebAttribute<AppModuleMetadata_Select, { componentversion: number | null }, {  }>;
  createdon: WebAttribute<AppModuleMetadata_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  modifiedon: WebAttribute<AppModuleMetadata_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  parentcomponentid: WebAttribute<AppModuleMetadata_Select, { parentcomponentid: string | null }, {  }>;
  state: WebAttribute<AppModuleMetadata_Select, { state: number | null }, {  }>;
}
interface AppModuleMetadata_Filter {
  appmoduleid: XQW.Guid;
  appmodulemetadataid: XQW.Guid;
  componentid: XQW.Guid;
  componentisdefault: boolean;
  componentisquickfindquery: boolean;
  componentistabletenabled: boolean;
  componentisuserchart: boolean;
  componentisuserform: boolean;
  componentisuserview: boolean;
  componentstatecode: number;
  componentsubtype: number;
  componenttype: number;
  componentversion: number;
  createdon: Date;
  modifiedon: Date;
  parentcomponentid: XQW.Guid;
  state: number;
}
interface AppModuleMetadata_Expand {
}
interface AppModuleMetadata_FormattedResult {
  createdon_formatted?: string;
  modifiedon_formatted?: string;
}
interface AppModuleMetadata_Result extends AppModuleMetadata_Base, AppModuleMetadata_Relationships {
  "@odata.etag": string;
}
interface AppModuleMetadata_RelatedOne {
}
interface AppModuleMetadata_RelatedMany {
}
interface WebEntitiesRetrieve {
  appmodulemetadatacollection: WebMappingRetrieve<AppModuleMetadata_Select,AppModuleMetadata_Expand,AppModuleMetadata_Filter,AppModuleMetadata_Fixed,AppModuleMetadata_Result,AppModuleMetadata_FormattedResult>;
}
interface WebEntitiesRelated {
  appmodulemetadatacollection: WebMappingRelated<AppModuleMetadata_RelatedOne,AppModuleMetadata_RelatedMany>;
}
interface WebEntitiesCUDA {
  appmodulemetadatacollection: WebMappingCUDA<AppModuleMetadata_Create,AppModuleMetadata_Update,AppModuleMetadata_Select>;
}
