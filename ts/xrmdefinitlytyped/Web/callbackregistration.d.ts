interface CallbackRegistration_Base extends WebEntity {
  callbackregistrationid?: string | null;
  createdon?: Date | null;
  entityname?: string | null;
  filterexpression?: string | null;
  filteringattributes?: string | null;
  message?: callbackregistration_message | null;
  modifiedon?: Date | null;
  name?: string | null;
  postponeuntil?: string | null;
  runas?: callbackregistration_runas | null;
  runtimeintegrationproperties?: string | null;
  scope?: callbackregistration_scope | null;
  sdkmessagename?: string | null;
  softdeletestatus?: number | null;
  url?: string | null;
  version?: callbackregistration_version | null;
}
interface CallbackRegistration_Relationships {
  callbackregistration_createdby?: SystemUser_Result | null;
  callbackregistration_createdonbehalfby?: SystemUser_Result | null;
  callbackregistration_modifiedby?: SystemUser_Result | null;
  callbackregistration_modifiedonbehalfby?: SystemUser_Result | null;
}
interface CallbackRegistration extends CallbackRegistration_Base, CallbackRegistration_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface CallbackRegistration_Create extends CallbackRegistration {
}
interface CallbackRegistration_Update extends CallbackRegistration {
}
interface CallbackRegistration_Select {
  callbackregistrationid: WebAttribute<CallbackRegistration_Select, { callbackregistrationid: string | null }, {  }>;
  createdby_guid: WebAttribute<CallbackRegistration_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<CallbackRegistration_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<CallbackRegistration_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  entityname: WebAttribute<CallbackRegistration_Select, { entityname: string | null }, {  }>;
  filterexpression: WebAttribute<CallbackRegistration_Select, { filterexpression: string | null }, {  }>;
  filteringattributes: WebAttribute<CallbackRegistration_Select, { filteringattributes: string | null }, {  }>;
  message: WebAttribute<CallbackRegistration_Select, { message: callbackregistration_message | null }, { message_formatted?: string }>;
  modifiedby_guid: WebAttribute<CallbackRegistration_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<CallbackRegistration_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<CallbackRegistration_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  name: WebAttribute<CallbackRegistration_Select, { name: string | null }, {  }>;
  ownerid_guid: WebAttribute<CallbackRegistration_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<CallbackRegistration_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<CallbackRegistration_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<CallbackRegistration_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  postponeuntil: WebAttribute<CallbackRegistration_Select, { postponeuntil: string | null }, {  }>;
  runas: WebAttribute<CallbackRegistration_Select, { runas: callbackregistration_runas | null }, { runas_formatted?: string }>;
  runtimeintegrationproperties: WebAttribute<CallbackRegistration_Select, { runtimeintegrationproperties: string | null }, {  }>;
  scope: WebAttribute<CallbackRegistration_Select, { scope: callbackregistration_scope | null }, { scope_formatted?: string }>;
  sdkmessagename: WebAttribute<CallbackRegistration_Select, { sdkmessagename: string | null }, {  }>;
  softdeletestatus: WebAttribute<CallbackRegistration_Select, { softdeletestatus: number | null }, {  }>;
  url: WebAttribute<CallbackRegistration_Select, { url: string | null }, {  }>;
  version: WebAttribute<CallbackRegistration_Select, { version: callbackregistration_version | null }, { version_formatted?: string }>;
}
interface CallbackRegistration_Filter {
  callbackregistrationid: XQW.Guid;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  entityname: string;
  filterexpression: string;
  filteringattributes: string;
  message: callbackregistration_message;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  name: string;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  postponeuntil: string;
  runas: callbackregistration_runas;
  runtimeintegrationproperties: string;
  scope: callbackregistration_scope;
  sdkmessagename: string;
  softdeletestatus: number;
  url: string;
  version: callbackregistration_version;
}
interface CallbackRegistration_Expand {
  callbackregistration_createdby: WebExpand<CallbackRegistration_Expand, SystemUser_Select, SystemUser_Filter, { callbackregistration_createdby: SystemUser_Result }>;
  callbackregistration_createdonbehalfby: WebExpand<CallbackRegistration_Expand, SystemUser_Select, SystemUser_Filter, { callbackregistration_createdonbehalfby: SystemUser_Result }>;
  callbackregistration_modifiedby: WebExpand<CallbackRegistration_Expand, SystemUser_Select, SystemUser_Filter, { callbackregistration_modifiedby: SystemUser_Result }>;
  callbackregistration_modifiedonbehalfby: WebExpand<CallbackRegistration_Expand, SystemUser_Select, SystemUser_Filter, { callbackregistration_modifiedonbehalfby: SystemUser_Result }>;
  ownerid: WebExpand<CallbackRegistration_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<CallbackRegistration_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
}
interface CallbackRegistration_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  message_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  runas_formatted?: string;
  scope_formatted?: string;
  version_formatted?: string;
}
interface CallbackRegistration_Result extends CallbackRegistration_Base, CallbackRegistration_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface CallbackRegistration_RelatedOne {
  callbackregistration_createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  callbackregistration_createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  callbackregistration_modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  callbackregistration_modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
}
interface CallbackRegistration_RelatedMany {
}
interface WebEntitiesRetrieve {
  callbackregistrations: WebMappingRetrieve<CallbackRegistration_Select,CallbackRegistration_Expand,CallbackRegistration_Filter,CallbackRegistration_Fixed,CallbackRegistration_Result,CallbackRegistration_FormattedResult>;
}
interface WebEntitiesRelated {
  callbackregistrations: WebMappingRelated<CallbackRegistration_RelatedOne,CallbackRegistration_RelatedMany>;
}
interface WebEntitiesCUDA {
  callbackregistrations: WebMappingCUDA<CallbackRegistration_Create,CallbackRegistration_Update,CallbackRegistration_Select>;
}
