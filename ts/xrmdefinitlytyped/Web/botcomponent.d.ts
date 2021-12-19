interface botcomponent_Base extends WebEntity {
  accentcolor?: string | null;
  botcomponentid?: string | null;
  category?: string | null;
  componentidunique?: string | null;
  componentstate?: componentstate | null;
  componenttype?: botcomponent_componenttype | null;
  content?: string | null;
  createdon?: Date | null;
  data?: string | null;
  description?: string | null;
  helplink?: string | null;
  iconurl?: string | null;
  importsequencenumber?: number | null;
  iscustomizable?: any | null;
  ismanaged?: boolean | null;
  language?: chatbotlanguage | null;
  modifiedon?: Date | null;
  name?: string | null;
  overriddencreatedon?: Date | null;
  overwritetime?: Date | null;
  reusepolicy?: botcomponentreusepolicy | null;
  schemaname?: string | null;
  solutionid?: string | null;
  statecode?: botcomponent_statecode | null;
  statuscode?: botcomponent_statuscode | null;
  supportingsolutionid?: string | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface botcomponent_Relationships {
  Comment_Artifact_BotComponent?: Comment_Result[] | null;
  ParentBotComponentId?: botcomponent_Result | null;
  bot_botcomponent?: bot_Result[] | null;
  botcomponent_AsyncOperations?: AsyncOperation_Result[] | null;
  botcomponent_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  botcomponent_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  botcomponent_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  botcomponent_ProcessSession?: ProcessSession_Result[] | null;
  botcomponent_SyncErrors?: SyncError_Result[] | null;
  botcomponent_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  botcomponent_botcomponent?: botcomponent_Result[] | null;
  botcomponent_environmentvariabledefinition?: EnvironmentVariableDefinition_Result[] | null;
  botcomponent_parent_botcomponent?: botcomponent_Result[] | null;
  botcomponent_workflow?: Workflow_Result[] | null;
}
interface botcomponent extends botcomponent_Base, botcomponent_Relationships {
  ParentBotComponentId_bind$botcomponents?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface botcomponent_Create extends botcomponent {
}
interface botcomponent_Update extends botcomponent {
}
interface botcomponent_Select {
  accentcolor: WebAttribute<botcomponent_Select, { accentcolor: string | null }, {  }>;
  botcomponentid: WebAttribute<botcomponent_Select, { botcomponentid: string | null }, {  }>;
  category: WebAttribute<botcomponent_Select, { category: string | null }, {  }>;
  componentidunique: WebAttribute<botcomponent_Select, { componentidunique: string | null }, {  }>;
  componentstate: WebAttribute<botcomponent_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  componenttype: WebAttribute<botcomponent_Select, { componenttype: botcomponent_componenttype | null }, { componenttype_formatted?: string }>;
  content: WebAttribute<botcomponent_Select, { content: string | null }, {  }>;
  createdby_guid: WebAttribute<botcomponent_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<botcomponent_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<botcomponent_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  data: WebAttribute<botcomponent_Select, { data: string | null }, {  }>;
  description: WebAttribute<botcomponent_Select, { description: string | null }, {  }>;
  helplink: WebAttribute<botcomponent_Select, { helplink: string | null }, {  }>;
  iconurl: WebAttribute<botcomponent_Select, { iconurl: string | null }, {  }>;
  importsequencenumber: WebAttribute<botcomponent_Select, { importsequencenumber: number | null }, {  }>;
  iscustomizable: WebAttribute<botcomponent_Select, { iscustomizable: any | null }, {  }>;
  ismanaged: WebAttribute<botcomponent_Select, { ismanaged: boolean | null }, {  }>;
  language: WebAttribute<botcomponent_Select, { language: chatbotlanguage | null }, { language_formatted?: string }>;
  modifiedby_guid: WebAttribute<botcomponent_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<botcomponent_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<botcomponent_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  name: WebAttribute<botcomponent_Select, { name: string | null }, {  }>;
  overriddencreatedon: WebAttribute<botcomponent_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  overwritetime: WebAttribute<botcomponent_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  ownerid_guid: WebAttribute<botcomponent_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<botcomponent_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<botcomponent_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<botcomponent_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  parentbotcomponentid_guid: WebAttribute<botcomponent_Select, { parentbotcomponentid_guid: string | null }, { parentbotcomponentid_formatted?: string }>;
  reusepolicy: WebAttribute<botcomponent_Select, { reusepolicy: botcomponentreusepolicy | null }, { reusepolicy_formatted?: string }>;
  schemaname: WebAttribute<botcomponent_Select, { schemaname: string | null }, {  }>;
  solutionid: WebAttribute<botcomponent_Select, { solutionid: string | null }, {  }>;
  statecode: WebAttribute<botcomponent_Select, { statecode: botcomponent_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<botcomponent_Select, { statuscode: botcomponent_statuscode | null }, { statuscode_formatted?: string }>;
  supportingsolutionid: WebAttribute<botcomponent_Select, { supportingsolutionid: string | null }, {  }>;
  timezoneruleversionnumber: WebAttribute<botcomponent_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<botcomponent_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<botcomponent_Select, { versionnumber: number | null }, {  }>;
}
interface botcomponent_Filter {
  accentcolor: string;
  botcomponentid: XQW.Guid;
  category: string;
  componentidunique: XQW.Guid;
  componentstate: componentstate;
  componenttype: botcomponent_componenttype;
  content: string;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  data: string;
  description: string;
  helplink: string;
  iconurl: string;
  importsequencenumber: number;
  iscustomizable: any;
  ismanaged: boolean;
  language: chatbotlanguage;
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
  parentbotcomponentid_guid: XQW.Guid;
  reusepolicy: botcomponentreusepolicy;
  schemaname: string;
  solutionid: XQW.Guid;
  statecode: botcomponent_statecode;
  statuscode: botcomponent_statuscode;
  supportingsolutionid: XQW.Guid;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface botcomponent_Expand {
  Comment_Artifact_BotComponent: WebExpand<botcomponent_Expand, Comment_Select, Comment_Filter, { Comment_Artifact_BotComponent: Comment_Result[] }>;
  ParentBotComponentId: WebExpand<botcomponent_Expand, botcomponent_Select, botcomponent_Filter, { ParentBotComponentId: botcomponent_Result }>;
  bot_botcomponent: WebExpand<botcomponent_Expand, bot_Select, bot_Filter, { bot_botcomponent: bot_Result[] }>;
  botcomponent_AsyncOperations: WebExpand<botcomponent_Expand, AsyncOperation_Select, AsyncOperation_Filter, { botcomponent_AsyncOperations: AsyncOperation_Result[] }>;
  botcomponent_BulkDeleteFailures: WebExpand<botcomponent_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { botcomponent_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  botcomponent_MailboxTrackingFolders: WebExpand<botcomponent_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { botcomponent_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  botcomponent_PrincipalObjectAttributeAccesses: WebExpand<botcomponent_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { botcomponent_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  botcomponent_ProcessSession: WebExpand<botcomponent_Expand, ProcessSession_Select, ProcessSession_Filter, { botcomponent_ProcessSession: ProcessSession_Result[] }>;
  botcomponent_SyncErrors: WebExpand<botcomponent_Expand, SyncError_Select, SyncError_Filter, { botcomponent_SyncErrors: SyncError_Result[] }>;
  botcomponent_UserEntityInstanceDatas: WebExpand<botcomponent_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { botcomponent_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  botcomponent_botcomponent: WebExpand<botcomponent_Expand, botcomponent_Select, botcomponent_Filter, { botcomponent_botcomponent: botcomponent_Result[] }>;
  botcomponent_environmentvariabledefinition: WebExpand<botcomponent_Expand, EnvironmentVariableDefinition_Select, EnvironmentVariableDefinition_Filter, { botcomponent_environmentvariabledefinition: EnvironmentVariableDefinition_Result[] }>;
  botcomponent_parent_botcomponent: WebExpand<botcomponent_Expand, botcomponent_Select, botcomponent_Filter, { botcomponent_parent_botcomponent: botcomponent_Result[] }>;
  botcomponent_workflow: WebExpand<botcomponent_Expand, Workflow_Select, Workflow_Filter, { botcomponent_workflow: Workflow_Result[] }>;
  createdby: WebExpand<botcomponent_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<botcomponent_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<botcomponent_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<botcomponent_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  ownerid: WebExpand<botcomponent_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<botcomponent_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<botcomponent_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<botcomponent_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface botcomponent_FormattedResult {
  componentstate_formatted?: string;
  componenttype_formatted?: string;
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
  parentbotcomponentid_formatted?: string;
  reusepolicy_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface botcomponent_Result extends botcomponent_Base, botcomponent_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
  parentbotcomponentid_guid: string | null;
}
interface botcomponent_RelatedOne {
  ParentBotComponentId: WebMappingRetrieve<botcomponent_Select,botcomponent_Expand,botcomponent_Filter,botcomponent_Fixed,botcomponent_Result,botcomponent_FormattedResult>;
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface botcomponent_RelatedMany {
  Comment_Artifact_BotComponent: WebMappingRetrieve<Comment_Select,Comment_Expand,Comment_Filter,Comment_Fixed,Comment_Result,Comment_FormattedResult>;
  bot_botcomponent: WebMappingRetrieve<bot_Select,bot_Expand,bot_Filter,bot_Fixed,bot_Result,bot_FormattedResult>;
  botcomponent_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  botcomponent_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  botcomponent_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  botcomponent_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  botcomponent_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  botcomponent_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  botcomponent_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  botcomponent_botcomponent: WebMappingRetrieve<botcomponent_Select,botcomponent_Expand,botcomponent_Filter,botcomponent_Fixed,botcomponent_Result,botcomponent_FormattedResult>;
  botcomponent_environmentvariabledefinition: WebMappingRetrieve<EnvironmentVariableDefinition_Select,EnvironmentVariableDefinition_Expand,EnvironmentVariableDefinition_Filter,EnvironmentVariableDefinition_Fixed,EnvironmentVariableDefinition_Result,EnvironmentVariableDefinition_FormattedResult>;
  botcomponent_parent_botcomponent: WebMappingRetrieve<botcomponent_Select,botcomponent_Expand,botcomponent_Filter,botcomponent_Fixed,botcomponent_Result,botcomponent_FormattedResult>;
  botcomponent_workflow: WebMappingRetrieve<Workflow_Select,Workflow_Expand,Workflow_Filter,Workflow_Fixed,Workflow_Result,Workflow_FormattedResult>;
}
interface WebEntitiesRetrieve {
  botcomponents: WebMappingRetrieve<botcomponent_Select,botcomponent_Expand,botcomponent_Filter,botcomponent_Fixed,botcomponent_Result,botcomponent_FormattedResult>;
}
interface WebEntitiesRelated {
  botcomponents: WebMappingRelated<botcomponent_RelatedOne,botcomponent_RelatedMany>;
}
interface WebEntitiesCUDA {
  botcomponents: WebMappingCUDA<botcomponent_Create,botcomponent_Update,botcomponent_Select>;
}
