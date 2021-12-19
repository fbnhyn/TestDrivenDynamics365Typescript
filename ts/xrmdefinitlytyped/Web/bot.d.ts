interface bot_Base extends WebEntity {
  accesscontrolpolicy?: bot_accesscontrolpolicy | null;
  applicationmanifestinformation?: string | null;
  authenticationmode?: bot_authenticationmode | null;
  authenticationtrigger?: bot_authenticationtrigger | null;
  authorizedsecuritygroupids?: string | null;
  botid?: string | null;
  componentidunique?: string | null;
  componentstate?: componentstate | null;
  configuration?: string | null;
  createdon?: Date | null;
  iconbase64?: string | null;
  importsequencenumber?: number | null;
  iscustomizable?: any | null;
  ismanaged?: boolean | null;
  language?: bot_language | null;
  modifiedon?: Date | null;
  name?: string | null;
  overriddencreatedon?: Date | null;
  overwritetime?: Date | null;
  publishedon?: Date | null;
  schemaname?: string | null;
  solutionid?: string | null;
  statecode?: bot_statecode | null;
  statuscode?: bot_statuscode | null;
  supportingsolutionid?: string | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface bot_Relationships {
  Comment_Artifact_Bot?: Comment_Result[] | null;
  bot_AsyncOperations?: AsyncOperation_Result[] | null;
  bot_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  bot_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  bot_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  bot_ProcessSession?: ProcessSession_Result[] | null;
  bot_SyncErrors?: SyncError_Result[] | null;
  bot_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  bot_botcomponent?: botcomponent_Result[] | null;
  bot_conversationtranscript?: conversationtranscript_Result[] | null;
  bot_environmentvariabledefinition?: EnvironmentVariableDefinition_Result[] | null;
}
interface bot extends bot_Base, bot_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
  publishedby_bind$systemusers?: string | null;
}
interface bot_Create extends bot {
}
interface bot_Update extends bot {
}
interface bot_Select {
  accesscontrolpolicy: WebAttribute<bot_Select, { accesscontrolpolicy: bot_accesscontrolpolicy | null }, { accesscontrolpolicy_formatted?: string }>;
  applicationmanifestinformation: WebAttribute<bot_Select, { applicationmanifestinformation: string | null }, {  }>;
  authenticationmode: WebAttribute<bot_Select, { authenticationmode: bot_authenticationmode | null }, { authenticationmode_formatted?: string }>;
  authenticationtrigger: WebAttribute<bot_Select, { authenticationtrigger: bot_authenticationtrigger | null }, { authenticationtrigger_formatted?: string }>;
  authorizedsecuritygroupids: WebAttribute<bot_Select, { authorizedsecuritygroupids: string | null }, {  }>;
  botid: WebAttribute<bot_Select, { botid: string | null }, {  }>;
  componentidunique: WebAttribute<bot_Select, { componentidunique: string | null }, {  }>;
  componentstate: WebAttribute<bot_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  configuration: WebAttribute<bot_Select, { configuration: string | null }, {  }>;
  createdby_guid: WebAttribute<bot_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<bot_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<bot_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  iconbase64: WebAttribute<bot_Select, { iconbase64: string | null }, {  }>;
  importsequencenumber: WebAttribute<bot_Select, { importsequencenumber: number | null }, {  }>;
  iscustomizable: WebAttribute<bot_Select, { iscustomizable: any | null }, {  }>;
  ismanaged: WebAttribute<bot_Select, { ismanaged: boolean | null }, {  }>;
  language: WebAttribute<bot_Select, { language: bot_language | null }, { language_formatted?: string }>;
  modifiedby_guid: WebAttribute<bot_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<bot_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<bot_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  name: WebAttribute<bot_Select, { name: string | null }, {  }>;
  overriddencreatedon: WebAttribute<bot_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  overwritetime: WebAttribute<bot_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  ownerid_guid: WebAttribute<bot_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<bot_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<bot_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<bot_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  publishedby_guid: WebAttribute<bot_Select, { publishedby_guid: string | null }, { publishedby_formatted?: string }>;
  publishedon: WebAttribute<bot_Select, { publishedon: Date | null }, { publishedon_formatted?: string }>;
  schemaname: WebAttribute<bot_Select, { schemaname: string | null }, {  }>;
  solutionid: WebAttribute<bot_Select, { solutionid: string | null }, {  }>;
  statecode: WebAttribute<bot_Select, { statecode: bot_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<bot_Select, { statuscode: bot_statuscode | null }, { statuscode_formatted?: string }>;
  supportingsolutionid: WebAttribute<bot_Select, { supportingsolutionid: string | null }, {  }>;
  timezoneruleversionnumber: WebAttribute<bot_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<bot_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<bot_Select, { versionnumber: number | null }, {  }>;
}
interface bot_Filter {
  accesscontrolpolicy: bot_accesscontrolpolicy;
  applicationmanifestinformation: string;
  authenticationmode: bot_authenticationmode;
  authenticationtrigger: bot_authenticationtrigger;
  authorizedsecuritygroupids: string;
  botid: XQW.Guid;
  componentidunique: XQW.Guid;
  componentstate: componentstate;
  configuration: string;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  iconbase64: string;
  importsequencenumber: number;
  iscustomizable: any;
  ismanaged: boolean;
  language: bot_language;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  name: string;
  overriddencreatedon: Date;
  overwritetime: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  publishedby_guid: XQW.Guid;
  publishedon: Date;
  schemaname: string;
  solutionid: XQW.Guid;
  statecode: bot_statecode;
  statuscode: bot_statuscode;
  supportingsolutionid: XQW.Guid;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface bot_Expand {
  Comment_Artifact_Bot: WebExpand<bot_Expand, Comment_Select, Comment_Filter, { Comment_Artifact_Bot: Comment_Result[] }>;
  bot_AsyncOperations: WebExpand<bot_Expand, AsyncOperation_Select, AsyncOperation_Filter, { bot_AsyncOperations: AsyncOperation_Result[] }>;
  bot_BulkDeleteFailures: WebExpand<bot_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { bot_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  bot_MailboxTrackingFolders: WebExpand<bot_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { bot_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  bot_PrincipalObjectAttributeAccesses: WebExpand<bot_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { bot_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  bot_ProcessSession: WebExpand<bot_Expand, ProcessSession_Select, ProcessSession_Filter, { bot_ProcessSession: ProcessSession_Result[] }>;
  bot_SyncErrors: WebExpand<bot_Expand, SyncError_Select, SyncError_Filter, { bot_SyncErrors: SyncError_Result[] }>;
  bot_UserEntityInstanceDatas: WebExpand<bot_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { bot_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  bot_botcomponent: WebExpand<bot_Expand, botcomponent_Select, botcomponent_Filter, { bot_botcomponent: botcomponent_Result[] }>;
  bot_conversationtranscript: WebExpand<bot_Expand, conversationtranscript_Select, conversationtranscript_Filter, { bot_conversationtranscript: conversationtranscript_Result[] }>;
  bot_environmentvariabledefinition: WebExpand<bot_Expand, EnvironmentVariableDefinition_Select, EnvironmentVariableDefinition_Filter, { bot_environmentvariabledefinition: EnvironmentVariableDefinition_Result[] }>;
  createdby: WebExpand<bot_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<bot_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<bot_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<bot_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  ownerid: WebExpand<bot_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<bot_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<bot_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<bot_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
  publishedby: WebExpand<bot_Expand, SystemUser_Select, SystemUser_Filter, { publishedby: SystemUser_Result }>;
}
interface bot_FormattedResult {
  accesscontrolpolicy_formatted?: string;
  authenticationmode_formatted?: string;
  authenticationtrigger_formatted?: string;
  componentstate_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  language_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  overriddencreatedon_formatted?: string;
  overwritetime_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  publishedby_formatted?: string;
  publishedon_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface bot_Result extends bot_Base, bot_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
  publishedby_guid: string | null;
}
interface bot_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  publishedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface bot_RelatedMany {
  Comment_Artifact_Bot: WebMappingRetrieve<Comment_Select,Comment_Expand,Comment_Filter,Comment_Fixed,Comment_Result,Comment_FormattedResult>;
  bot_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  bot_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  bot_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  bot_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  bot_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  bot_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  bot_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  bot_botcomponent: WebMappingRetrieve<botcomponent_Select,botcomponent_Expand,botcomponent_Filter,botcomponent_Fixed,botcomponent_Result,botcomponent_FormattedResult>;
  bot_conversationtranscript: WebMappingRetrieve<conversationtranscript_Select,conversationtranscript_Expand,conversationtranscript_Filter,conversationtranscript_Fixed,conversationtranscript_Result,conversationtranscript_FormattedResult>;
  bot_environmentvariabledefinition: WebMappingRetrieve<EnvironmentVariableDefinition_Select,EnvironmentVariableDefinition_Expand,EnvironmentVariableDefinition_Filter,EnvironmentVariableDefinition_Fixed,EnvironmentVariableDefinition_Result,EnvironmentVariableDefinition_FormattedResult>;
}
interface WebEntitiesRetrieve {
  bots: WebMappingRetrieve<bot_Select,bot_Expand,bot_Filter,bot_Fixed,bot_Result,bot_FormattedResult>;
}
interface WebEntitiesRelated {
  bots: WebMappingRelated<bot_RelatedOne,bot_RelatedMany>;
}
interface WebEntitiesCUDA {
  bots: WebMappingCUDA<bot_Create,bot_Update,bot_Select>;
}
