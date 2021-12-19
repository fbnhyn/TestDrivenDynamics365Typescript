interface appnotification_Base extends WebEntity {
  appnotificationid?: string | null;
  body?: string | null;
  createdon?: Date | null;
  data?: string | null;
  icontype?: notification_iconid | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  overriddencreatedon?: Date | null;
  partitionid?: string | null;
  priority?: notification_priority | null;
  timezoneruleversionnumber?: number | null;
  title?: string | null;
  toasttype?: notification_toasttype | null;
  ttlinseconds?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface appnotification_Relationships {
  AppModuleId?: AppModule_Result | null;
}
interface appnotification extends appnotification_Base, appnotification_Relationships {
  AppModuleId_bind$appmodules?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface appnotification_Create extends appnotification {
}
interface appnotification_Update extends appnotification {
}
interface appnotification_Select {
  appmoduleid_guid: WebAttribute<appnotification_Select, { appmoduleid_guid: string | null }, { appmoduleid_formatted?: string }>;
  appnotificationid: WebAttribute<appnotification_Select, { appnotificationid: string | null }, {  }>;
  body: WebAttribute<appnotification_Select, { body: string | null }, {  }>;
  createdby_guid: WebAttribute<appnotification_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<appnotification_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<appnotification_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  data: WebAttribute<appnotification_Select, { data: string | null }, {  }>;
  icontype: WebAttribute<appnotification_Select, { icontype: notification_iconid | null }, { icontype_formatted?: string }>;
  importsequencenumber: WebAttribute<appnotification_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<appnotification_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<appnotification_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<appnotification_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  overriddencreatedon: WebAttribute<appnotification_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<appnotification_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<appnotification_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<appnotification_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<appnotification_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  partitionid: WebAttribute<appnotification_Select, { partitionid: string | null }, {  }>;
  priority: WebAttribute<appnotification_Select, { priority: notification_priority | null }, { priority_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<appnotification_Select, { timezoneruleversionnumber: number | null }, {  }>;
  title: WebAttribute<appnotification_Select, { title: string | null }, {  }>;
  toasttype: WebAttribute<appnotification_Select, { toasttype: notification_toasttype | null }, { toasttype_formatted?: string }>;
  ttlinseconds: WebAttribute<appnotification_Select, { ttlinseconds: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<appnotification_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<appnotification_Select, { versionnumber: number | null }, {  }>;
}
interface appnotification_Filter {
  appmoduleid_guid: XQW.Guid;
  appnotificationid: XQW.Guid;
  body: string;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  data: string;
  icontype: notification_iconid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  partitionid: string;
  priority: notification_priority;
  timezoneruleversionnumber: number;
  title: string;
  toasttype: notification_toasttype;
  ttlinseconds: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface appnotification_Expand {
  AppModuleId: WebExpand<appnotification_Expand, AppModule_Select, AppModule_Filter, { AppModuleId: AppModule_Result }>;
  createdby: WebExpand<appnotification_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<appnotification_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<appnotification_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<appnotification_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  ownerid: WebExpand<appnotification_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<appnotification_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<appnotification_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<appnotification_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface appnotification_FormattedResult {
  appmoduleid_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  icontype_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  priority_formatted?: string;
  toasttype_formatted?: string;
}
interface appnotification_Result extends appnotification_Base, appnotification_Relationships {
  "@odata.etag": string;
  appmoduleid_guid: string | null;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface appnotification_RelatedOne {
  AppModuleId: WebMappingRetrieve<AppModule_Select,AppModule_Expand,AppModule_Filter,AppModule_Fixed,AppModule_Result,AppModule_FormattedResult>;
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface appnotification_RelatedMany {
}
interface WebEntitiesRetrieve {
  appnotifications: WebMappingRetrieve<appnotification_Select,appnotification_Expand,appnotification_Filter,appnotification_Fixed,appnotification_Result,appnotification_FormattedResult>;
}
interface WebEntitiesRelated {
  appnotifications: WebMappingRelated<appnotification_RelatedOne,appnotification_RelatedMany>;
}
interface WebEntitiesCUDA {
  appnotifications: WebMappingCUDA<appnotification_Create,appnotification_Update,appnotification_Select>;
}
