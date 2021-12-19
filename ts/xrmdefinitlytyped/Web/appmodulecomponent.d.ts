interface AppModuleComponent_Base extends WebEntity {
  appmodulecomponentid?: string | null;
  appmodulecomponentidunique?: string | null;
  componenttype?: appmodulecomponent_componenttype | null;
  createdon?: Date | null;
  exchangerate?: number | null;
  introducedversion?: string | null;
  isdefault?: boolean | null;
  ismetadata?: boolean | null;
  modifiedon?: Date | null;
  objectid?: string | null;
  overwritetime?: Date | null;
  rootappmodulecomponentid?: string | null;
  rootcomponentbehavior?: appmodulecomponent_rootcomponentbehavior | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface AppModuleComponent_Relationships {
  appmodulecomponent_createdby?: SystemUser_Result | null;
  appmodulecomponent_modifiedby?: SystemUser_Result | null;
  appmoduleid?: AppModule_Result | null;
}
interface AppModuleComponent extends AppModuleComponent_Base, AppModuleComponent_Relationships {
  appmoduleid_bind$appmodules?: string | null;
}
interface AppModuleComponent_Create extends AppModuleComponent {
}
interface AppModuleComponent_Update extends AppModuleComponent {
}
interface AppModuleComponent_Select {
  appmodulecomponentid: WebAttribute<AppModuleComponent_Select, { appmodulecomponentid: string | null }, {  }>;
  appmodulecomponentidunique: WebAttribute<AppModuleComponent_Select, { appmodulecomponentidunique: string | null }, {  }>;
  appmoduleidunique_guid: WebAttribute<AppModuleComponent_Select, { appmoduleidunique_guid: string | null }, { appmoduleidunique_formatted?: string }>;
  componenttype: WebAttribute<AppModuleComponent_Select, { componenttype: appmodulecomponent_componenttype | null }, { componenttype_formatted?: string }>;
  createdby_guid: WebAttribute<AppModuleComponent_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<AppModuleComponent_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<AppModuleComponent_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  exchangerate: WebAttribute<AppModuleComponent_Select, { exchangerate: number | null }, {  }>;
  introducedversion: WebAttribute<AppModuleComponent_Select, { introducedversion: string | null }, {  }>;
  isdefault: WebAttribute<AppModuleComponent_Select, { isdefault: boolean | null }, {  }>;
  ismetadata: WebAttribute<AppModuleComponent_Select, { ismetadata: boolean | null }, {  }>;
  modifiedby_guid: WebAttribute<AppModuleComponent_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<AppModuleComponent_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<AppModuleComponent_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  objectid: WebAttribute<AppModuleComponent_Select, { objectid: string | null }, {  }>;
  overwritetime: WebAttribute<AppModuleComponent_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  rootappmodulecomponentid: WebAttribute<AppModuleComponent_Select, { rootappmodulecomponentid: string | null }, {  }>;
  rootcomponentbehavior: WebAttribute<AppModuleComponent_Select, { rootcomponentbehavior: appmodulecomponent_rootcomponentbehavior | null }, { rootcomponentbehavior_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<AppModuleComponent_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<AppModuleComponent_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<AppModuleComponent_Select, { versionnumber: number | null }, {  }>;
}
interface AppModuleComponent_Filter {
  appmodulecomponentid: XQW.Guid;
  appmodulecomponentidunique: XQW.Guid;
  appmoduleidunique_guid: XQW.Guid;
  componenttype: appmodulecomponent_componenttype;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  exchangerate: any;
  introducedversion: string;
  isdefault: boolean;
  ismetadata: boolean;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  objectid: XQW.Guid;
  overwritetime: Date;
  rootappmodulecomponentid: XQW.Guid;
  rootcomponentbehavior: appmodulecomponent_rootcomponentbehavior;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface AppModuleComponent_Expand {
  appmodulecomponent_createdby: WebExpand<AppModuleComponent_Expand, SystemUser_Select, SystemUser_Filter, { appmodulecomponent_createdby: SystemUser_Result }>;
  appmodulecomponent_modifiedby: WebExpand<AppModuleComponent_Expand, SystemUser_Select, SystemUser_Filter, { appmodulecomponent_modifiedby: SystemUser_Result }>;
  appmoduleid: WebExpand<AppModuleComponent_Expand, AppModule_Select, AppModule_Filter, { appmoduleid: AppModule_Result }>;
  createdonbehalfby: WebExpand<AppModuleComponent_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<AppModuleComponent_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
}
interface AppModuleComponent_FormattedResult {
  appmoduleidunique_formatted?: string;
  componenttype_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  overwritetime_formatted?: string;
  rootcomponentbehavior_formatted?: string;
}
interface AppModuleComponent_Result extends AppModuleComponent_Base, AppModuleComponent_Relationships {
  "@odata.etag": string;
  appmoduleidunique_guid: string | null;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
}
interface AppModuleComponent_RelatedOne {
  appmodulecomponent_createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  appmodulecomponent_modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  appmoduleid: WebMappingRetrieve<AppModule_Select,AppModule_Expand,AppModule_Filter,AppModule_Fixed,AppModule_Result,AppModule_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface AppModuleComponent_RelatedMany {
}
interface WebEntitiesRetrieve {
  appmodulecomponents: WebMappingRetrieve<AppModuleComponent_Select,AppModuleComponent_Expand,AppModuleComponent_Filter,AppModuleComponent_Fixed,AppModuleComponent_Result,AppModuleComponent_FormattedResult>;
}
interface WebEntitiesRelated {
  appmodulecomponents: WebMappingRelated<AppModuleComponent_RelatedOne,AppModuleComponent_RelatedMany>;
}
interface WebEntitiesCUDA {
  appmodulecomponents: WebMappingCUDA<AppModuleComponent_Create,AppModuleComponent_Update,AppModuleComponent_Select>;
}
