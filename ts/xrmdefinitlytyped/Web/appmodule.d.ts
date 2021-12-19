interface AppModule_Base extends WebEntity {
  appmoduleid?: string | null;
  appmoduleidunique?: string | null;
  appmoduleversion?: string | null;
  appmodulexmlmanaged?: string | null;
  clienttype?: number | null;
  componentstate?: componentstate | null;
  configxml?: string | null;
  createdon?: Date | null;
  description?: string | null;
  descriptor?: string | null;
  eventhandlers?: string | null;
  formfactor?: number | null;
  importsequencenumber?: number | null;
  introducedversion?: string | null;
  isdefault?: boolean | null;
  isfeatured?: boolean | null;
  ismanaged?: boolean | null;
  modifiedon?: Date | null;
  name?: string | null;
  navigationtype?: appmodule_navigationtype | null;
  optimizedfor?: string | null;
  overriddencreatedon?: Date | null;
  overwritetime?: Date | null;
  publishedon?: Date | null;
  solutionid?: string | null;
  statecode?: appmodule_statecode | null;
  statuscode?: appmodule_statuscode | null;
  supportingsolutionid?: string | null;
  uniquename?: string | null;
  url?: string | null;
  versionnumber?: number | null;
  webresourceid?: string | null;
  welcomepageid?: string | null;
}
interface AppModule_Relationships {
  Comment_Artifact_AppModule?: Comment_Result[] | null;
  appmodule_appaction_appmoduleid?: appaction_Result[] | null;
  appmodule_appconfig?: AppConfig_Result[] | null;
  appmodule_appelement_parentappmoduleid?: AppElement_Result[] | null;
  appmodule_appmodulecomponent?: AppModuleComponent_Result[] | null;
  appmodule_appnotification_app?: appnotification_Result[] | null;
  appmodule_appsetting_parentappmoduleid?: AppSetting_Result[] | null;
  appmodule_appusersetting_parentappmoduleid?: AppUserSetting_Result[] | null;
  appmodule_createdby?: SystemUser_Result | null;
  appmodule_createdonbehalfby?: SystemUser_Result | null;
  appmodule_modifiedby?: SystemUser_Result | null;
  appmodule_modifiedonbehalfby?: SystemUser_Result | null;
  appmoduleroles_association?: Role_Result[] | null;
  organization_appmodule_appmodule?: Organization_Result | null;
  publisher_appmodule_appmodule?: Publisher_Result | null;
  serviceplan_appmodule_association?: ServicePlan_Result[] | null;
}
interface AppModule extends AppModule_Base, AppModule_Relationships {
  publisher_appmodule_appmodule_bind$publishers?: string | null;
}
interface AppModule_Create extends AppModule {
}
interface AppModule_Update extends AppModule {
}
interface AppModule_Select {
  appmoduleid: WebAttribute<AppModule_Select, { appmoduleid: string | null }, {  }>;
  appmoduleidunique: WebAttribute<AppModule_Select, { appmoduleidunique: string | null }, {  }>;
  appmoduleversion: WebAttribute<AppModule_Select, { appmoduleversion: string | null }, {  }>;
  appmodulexmlmanaged: WebAttribute<AppModule_Select, { appmodulexmlmanaged: string | null }, {  }>;
  clienttype: WebAttribute<AppModule_Select, { clienttype: number | null }, {  }>;
  componentstate: WebAttribute<AppModule_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  configxml: WebAttribute<AppModule_Select, { configxml: string | null }, {  }>;
  createdby_guid: WebAttribute<AppModule_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<AppModule_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<AppModule_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  description: WebAttribute<AppModule_Select, { description: string | null }, {  }>;
  descriptor: WebAttribute<AppModule_Select, { descriptor: string | null }, {  }>;
  eventhandlers: WebAttribute<AppModule_Select, { eventhandlers: string | null }, {  }>;
  formfactor: WebAttribute<AppModule_Select, { formfactor: number | null }, {  }>;
  importsequencenumber: WebAttribute<AppModule_Select, { importsequencenumber: number | null }, {  }>;
  introducedversion: WebAttribute<AppModule_Select, { introducedversion: string | null }, {  }>;
  isdefault: WebAttribute<AppModule_Select, { isdefault: boolean | null }, {  }>;
  isfeatured: WebAttribute<AppModule_Select, { isfeatured: boolean | null }, {  }>;
  ismanaged: WebAttribute<AppModule_Select, { ismanaged: boolean | null }, {  }>;
  modifiedby_guid: WebAttribute<AppModule_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<AppModule_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<AppModule_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  name: WebAttribute<AppModule_Select, { name: string | null }, {  }>;
  navigationtype: WebAttribute<AppModule_Select, { navigationtype: appmodule_navigationtype | null }, { navigationtype_formatted?: string }>;
  optimizedfor: WebAttribute<AppModule_Select, { optimizedfor: string | null }, {  }>;
  organizationid_guid: WebAttribute<AppModule_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overriddencreatedon: WebAttribute<AppModule_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  overwritetime: WebAttribute<AppModule_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  publishedon: WebAttribute<AppModule_Select, { publishedon: Date | null }, { publishedon_formatted?: string }>;
  publisherid_guid: WebAttribute<AppModule_Select, { publisherid_guid: string | null }, { publisherid_formatted?: string }>;
  solutionid: WebAttribute<AppModule_Select, { solutionid: string | null }, {  }>;
  statecode: WebAttribute<AppModule_Select, { statecode: appmodule_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<AppModule_Select, { statuscode: appmodule_statuscode | null }, { statuscode_formatted?: string }>;
  supportingsolutionid: WebAttribute<AppModule_Select, { supportingsolutionid: string | null }, {  }>;
  uniquename: WebAttribute<AppModule_Select, { uniquename: string | null }, {  }>;
  url: WebAttribute<AppModule_Select, { url: string | null }, {  }>;
  versionnumber: WebAttribute<AppModule_Select, { versionnumber: number | null }, {  }>;
  webresourceid: WebAttribute<AppModule_Select, { webresourceid: string | null }, {  }>;
  welcomepageid: WebAttribute<AppModule_Select, { welcomepageid: string | null }, {  }>;
}
interface AppModule_Filter {
  appmoduleid: XQW.Guid;
  appmoduleidunique: XQW.Guid;
  appmoduleversion: string;
  appmodulexmlmanaged: string;
  clienttype: number;
  componentstate: componentstate;
  configxml: string;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  description: string;
  descriptor: string;
  eventhandlers: string;
  formfactor: number;
  importsequencenumber: number;
  introducedversion: string;
  isdefault: boolean;
  isfeatured: boolean;
  ismanaged: boolean;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  name: string;
  navigationtype: appmodule_navigationtype;
  optimizedfor: string;
  organizationid_guid: XQW.Guid;
  overriddencreatedon: Date;
  overwritetime: Date;
  publishedon: Date;
  publisherid_guid: XQW.Guid;
  solutionid: XQW.Guid;
  statecode: appmodule_statecode;
  statuscode: appmodule_statuscode;
  supportingsolutionid: XQW.Guid;
  uniquename: string;
  url: string;
  versionnumber: number;
  webresourceid: XQW.Guid;
  welcomepageid: XQW.Guid;
}
interface AppModule_Expand {
  Comment_Artifact_AppModule: WebExpand<AppModule_Expand, Comment_Select, Comment_Filter, { Comment_Artifact_AppModule: Comment_Result[] }>;
  appmodule_appaction_appmoduleid: WebExpand<AppModule_Expand, appaction_Select, appaction_Filter, { appmodule_appaction_appmoduleid: appaction_Result[] }>;
  appmodule_appconfig: WebExpand<AppModule_Expand, AppConfig_Select, AppConfig_Filter, { appmodule_appconfig: AppConfig_Result[] }>;
  appmodule_appelement_parentappmoduleid: WebExpand<AppModule_Expand, AppElement_Select, AppElement_Filter, { appmodule_appelement_parentappmoduleid: AppElement_Result[] }>;
  appmodule_appmodulecomponent: WebExpand<AppModule_Expand, AppModuleComponent_Select, AppModuleComponent_Filter, { appmodule_appmodulecomponent: AppModuleComponent_Result[] }>;
  appmodule_appnotification_app: WebExpand<AppModule_Expand, appnotification_Select, appnotification_Filter, { appmodule_appnotification_app: appnotification_Result[] }>;
  appmodule_appsetting_parentappmoduleid: WebExpand<AppModule_Expand, AppSetting_Select, AppSetting_Filter, { appmodule_appsetting_parentappmoduleid: AppSetting_Result[] }>;
  appmodule_appusersetting_parentappmoduleid: WebExpand<AppModule_Expand, AppUserSetting_Select, AppUserSetting_Filter, { appmodule_appusersetting_parentappmoduleid: AppUserSetting_Result[] }>;
  appmodule_createdby: WebExpand<AppModule_Expand, SystemUser_Select, SystemUser_Filter, { appmodule_createdby: SystemUser_Result }>;
  appmodule_createdonbehalfby: WebExpand<AppModule_Expand, SystemUser_Select, SystemUser_Filter, { appmodule_createdonbehalfby: SystemUser_Result }>;
  appmodule_modifiedby: WebExpand<AppModule_Expand, SystemUser_Select, SystemUser_Filter, { appmodule_modifiedby: SystemUser_Result }>;
  appmodule_modifiedonbehalfby: WebExpand<AppModule_Expand, SystemUser_Select, SystemUser_Filter, { appmodule_modifiedonbehalfby: SystemUser_Result }>;
  appmoduleroles_association: WebExpand<AppModule_Expand, Role_Select, Role_Filter, { appmoduleroles_association: Role_Result[] }>;
  organization_appmodule_appmodule: WebExpand<AppModule_Expand, Organization_Select, Organization_Filter, { organization_appmodule_appmodule: Organization_Result }>;
  publisher_appmodule_appmodule: WebExpand<AppModule_Expand, Publisher_Select, Publisher_Filter, { publisher_appmodule_appmodule: Publisher_Result }>;
  serviceplan_appmodule_association: WebExpand<AppModule_Expand, ServicePlan_Select, ServicePlan_Filter, { serviceplan_appmodule_association: ServicePlan_Result[] }>;
}
interface AppModule_FormattedResult {
  componentstate_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  navigationtype_formatted?: string;
  organizationid_formatted?: string;
  overriddencreatedon_formatted?: string;
  overwritetime_formatted?: string;
  publishedon_formatted?: string;
  publisherid_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface AppModule_Result extends AppModule_Base, AppModule_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
  publisherid_guid: string | null;
}
interface AppModule_RelatedOne {
  appmodule_createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  appmodule_createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  appmodule_modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  appmodule_modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  organization_appmodule_appmodule: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
  publisher_appmodule_appmodule: WebMappingRetrieve<Publisher_Select,Publisher_Expand,Publisher_Filter,Publisher_Fixed,Publisher_Result,Publisher_FormattedResult>;
}
interface AppModule_RelatedMany {
  Comment_Artifact_AppModule: WebMappingRetrieve<Comment_Select,Comment_Expand,Comment_Filter,Comment_Fixed,Comment_Result,Comment_FormattedResult>;
  appmodule_appaction_appmoduleid: WebMappingRetrieve<appaction_Select,appaction_Expand,appaction_Filter,appaction_Fixed,appaction_Result,appaction_FormattedResult>;
  appmodule_appconfig: WebMappingRetrieve<AppConfig_Select,AppConfig_Expand,AppConfig_Filter,AppConfig_Fixed,AppConfig_Result,AppConfig_FormattedResult>;
  appmodule_appelement_parentappmoduleid: WebMappingRetrieve<AppElement_Select,AppElement_Expand,AppElement_Filter,AppElement_Fixed,AppElement_Result,AppElement_FormattedResult>;
  appmodule_appmodulecomponent: WebMappingRetrieve<AppModuleComponent_Select,AppModuleComponent_Expand,AppModuleComponent_Filter,AppModuleComponent_Fixed,AppModuleComponent_Result,AppModuleComponent_FormattedResult>;
  appmodule_appnotification_app: WebMappingRetrieve<appnotification_Select,appnotification_Expand,appnotification_Filter,appnotification_Fixed,appnotification_Result,appnotification_FormattedResult>;
  appmodule_appsetting_parentappmoduleid: WebMappingRetrieve<AppSetting_Select,AppSetting_Expand,AppSetting_Filter,AppSetting_Fixed,AppSetting_Result,AppSetting_FormattedResult>;
  appmodule_appusersetting_parentappmoduleid: WebMappingRetrieve<AppUserSetting_Select,AppUserSetting_Expand,AppUserSetting_Filter,AppUserSetting_Fixed,AppUserSetting_Result,AppUserSetting_FormattedResult>;
  appmoduleroles_association: WebMappingRetrieve<Role_Select,Role_Expand,Role_Filter,Role_Fixed,Role_Result,Role_FormattedResult>;
  serviceplan_appmodule_association: WebMappingRetrieve<ServicePlan_Select,ServicePlan_Expand,ServicePlan_Filter,ServicePlan_Fixed,ServicePlan_Result,ServicePlan_FormattedResult>;
}
interface WebEntitiesRetrieve {
  appmodules: WebMappingRetrieve<AppModule_Select,AppModule_Expand,AppModule_Filter,AppModule_Fixed,AppModule_Result,AppModule_FormattedResult>;
}
interface WebEntitiesRelated {
  appmodules: WebMappingRelated<AppModule_RelatedOne,AppModule_RelatedMany>;
}
interface WebEntitiesCUDA {
  appmodules: WebMappingCUDA<AppModule_Create,AppModule_Update,AppModule_Select>;
}
