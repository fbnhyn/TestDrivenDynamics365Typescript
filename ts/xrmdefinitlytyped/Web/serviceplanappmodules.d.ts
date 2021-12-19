interface ServicePlanAppModules_Base extends WebEntity {
  appmoduleid?: string | null;
  componentidunique?: string | null;
  componentstate?: componentstate | null;
  iscustomizable?: any | null;
  ismanaged?: boolean | null;
  overwritetime?: Date | null;
  serviceplanappmodulesid?: string | null;
  serviceplanid?: string | null;
  solutionid?: string | null;
  supportingsolutionid?: string | null;
  versionnumber?: number | null;
}
interface ServicePlanAppModules_Relationships {
  serviceplan_appmodule_association?: AppModule_Result[] | null;
}
interface ServicePlanAppModules extends ServicePlanAppModules_Base, ServicePlanAppModules_Relationships {
}
interface ServicePlanAppModules_Create extends ServicePlanAppModules {
}
interface ServicePlanAppModules_Update extends ServicePlanAppModules {
}
interface ServicePlanAppModules_Select {
  appmoduleid: WebAttribute<ServicePlanAppModules_Select, { appmoduleid: string | null }, {  }>;
  componentidunique: WebAttribute<ServicePlanAppModules_Select, { componentidunique: string | null }, {  }>;
  componentstate: WebAttribute<ServicePlanAppModules_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  iscustomizable: WebAttribute<ServicePlanAppModules_Select, { iscustomizable: any | null }, {  }>;
  ismanaged: WebAttribute<ServicePlanAppModules_Select, { ismanaged: boolean | null }, {  }>;
  overwritetime: WebAttribute<ServicePlanAppModules_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  serviceplanappmodulesid: WebAttribute<ServicePlanAppModules_Select, { serviceplanappmodulesid: string | null }, {  }>;
  serviceplanid: WebAttribute<ServicePlanAppModules_Select, { serviceplanid: string | null }, {  }>;
  solutionid: WebAttribute<ServicePlanAppModules_Select, { solutionid: string | null }, {  }>;
  supportingsolutionid: WebAttribute<ServicePlanAppModules_Select, { supportingsolutionid: string | null }, {  }>;
  versionnumber: WebAttribute<ServicePlanAppModules_Select, { versionnumber: number | null }, {  }>;
}
interface ServicePlanAppModules_Filter {
  appmoduleid: XQW.Guid;
  componentidunique: XQW.Guid;
  componentstate: componentstate;
  iscustomizable: any;
  ismanaged: boolean;
  overwritetime: Date;
  serviceplanappmodulesid: XQW.Guid;
  serviceplanid: XQW.Guid;
  solutionid: XQW.Guid;
  supportingsolutionid: XQW.Guid;
  versionnumber: number;
}
interface ServicePlanAppModules_Expand {
  serviceplan_appmodule_association: WebExpand<ServicePlanAppModules_Expand, AppModule_Select, AppModule_Filter, { serviceplan_appmodule_association: AppModule_Result[] }>;
}
interface ServicePlanAppModules_FormattedResult {
  componentstate_formatted?: string;
  overwritetime_formatted?: string;
}
interface ServicePlanAppModules_Result extends ServicePlanAppModules_Base, ServicePlanAppModules_Relationships {
  "@odata.etag": string;
}
interface ServicePlanAppModules_RelatedOne {
}
interface ServicePlanAppModules_RelatedMany {
  serviceplan_appmodule_association: WebMappingRetrieve<AppModule_Select,AppModule_Expand,AppModule_Filter,AppModule_Fixed,AppModule_Result,AppModule_FormattedResult>;
}
interface WebEntitiesRetrieve {
  serviceplanappmodulesset: WebMappingRetrieve<ServicePlanAppModules_Select,ServicePlanAppModules_Expand,ServicePlanAppModules_Filter,ServicePlanAppModules_Fixed,ServicePlanAppModules_Result,ServicePlanAppModules_FormattedResult>;
}
interface WebEntitiesRelated {
  serviceplanappmodulesset: WebMappingRelated<ServicePlanAppModules_RelatedOne,ServicePlanAppModules_RelatedMany>;
}
interface WebEntitiesCUDA {
  serviceplanappmodulesset: WebMappingCUDA<ServicePlanAppModules_Create,ServicePlanAppModules_Update,ServicePlanAppModules_Select>;
}
