interface Comment_Base extends WebEntity {
  anchor?: string | null;
  artifactid?: string | null;
  artifacttype?: comment_artifacttype | null;
  body?: string | null;
  commentid?: string | null;
  createdon?: Date | null;
  importsequencenumber?: number | null;
  kind?: comment_kind | null;
  modifiedon?: Date | null;
  name?: string | null;
  overriddencreatedon?: Date | null;
  state?: comment_state | null;
  statecode?: comment_statecode | null;
  statuscode?: comment_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface Comment_Relationships {
  AppModule?: AppModule_Result | null;
  Bot?: bot_Result | null;
  BotComponent?: botcomponent_Result | null;
  CanvasApp?: CanvasApp_Result | null;
  Comment_Container_Comment?: Comment_Result[] | null;
  Comment_Parent_Comment?: Comment_Result[] | null;
  Container?: Comment_Result | null;
  Parent?: Comment_Result | null;
  Workflow?: Workflow_Result | null;
  comment_AsyncOperations?: AsyncOperation_Result[] | null;
  comment_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  comment_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  comment_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  comment_ProcessSession?: ProcessSession_Result[] | null;
  comment_SyncErrors?: SyncError_Result[] | null;
  comment_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface Comment extends Comment_Base, Comment_Relationships {
  AppModule_bind$appmodules?: string | null;
  BotComponent_bind$botcomponents?: string | null;
  Bot_bind$bots?: string | null;
  CanvasApp_bind$canvasapps?: string | null;
  Container_bind$comments?: string | null;
  Parent_bind$comments?: string | null;
  Workflow_bind$workflows?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface Comment_Create extends Comment {
}
interface Comment_Update extends Comment {
}
interface Comment_Select {
  anchor: WebAttribute<Comment_Select, { anchor: string | null }, {  }>;
  artifactid: WebAttribute<Comment_Select, { artifactid: string | null }, {  }>;
  artifacttype: WebAttribute<Comment_Select, { artifacttype: comment_artifacttype | null }, { artifacttype_formatted?: string }>;
  body: WebAttribute<Comment_Select, { body: string | null }, {  }>;
  commentid: WebAttribute<Comment_Select, { commentid: string | null }, {  }>;
  container_guid: WebAttribute<Comment_Select, { container_guid: string | null }, { container_formatted?: string }>;
  createdby_guid: WebAttribute<Comment_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<Comment_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<Comment_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<Comment_Select, { importsequencenumber: number | null }, {  }>;
  kind: WebAttribute<Comment_Select, { kind: comment_kind | null }, { kind_formatted?: string }>;
  modifiedby_guid: WebAttribute<Comment_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<Comment_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<Comment_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  name: WebAttribute<Comment_Select, { name: string | null }, {  }>;
  overriddencreatedon: WebAttribute<Comment_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<Comment_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<Comment_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<Comment_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<Comment_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  parent_guid: WebAttribute<Comment_Select, { parent_guid: string | null }, { parent_formatted?: string }>;
  state: WebAttribute<Comment_Select, { state: comment_state | null }, { state_formatted?: string }>;
  statecode: WebAttribute<Comment_Select, { statecode: comment_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<Comment_Select, { statuscode: comment_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<Comment_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<Comment_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<Comment_Select, { versionnumber: number | null }, {  }>;
}
interface Comment_Filter {
  anchor: string;
  artifactid: string;
  artifacttype: comment_artifacttype;
  body: string;
  commentid: XQW.Guid;
  container_guid: XQW.Guid;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  kind: comment_kind;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  name: string;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  parent_guid: XQW.Guid;
  state: comment_state;
  statecode: comment_statecode;
  statuscode: comment_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface Comment_Expand {
  AppModule: WebExpand<Comment_Expand, AppModule_Select, AppModule_Filter, { AppModule: AppModule_Result }>;
  Bot: WebExpand<Comment_Expand, bot_Select, bot_Filter, { Bot: bot_Result }>;
  BotComponent: WebExpand<Comment_Expand, botcomponent_Select, botcomponent_Filter, { BotComponent: botcomponent_Result }>;
  CanvasApp: WebExpand<Comment_Expand, CanvasApp_Select, CanvasApp_Filter, { CanvasApp: CanvasApp_Result }>;
  Comment_Container_Comment: WebExpand<Comment_Expand, Comment_Select, Comment_Filter, { Comment_Container_Comment: Comment_Result[] }>;
  Comment_Parent_Comment: WebExpand<Comment_Expand, Comment_Select, Comment_Filter, { Comment_Parent_Comment: Comment_Result[] }>;
  Container: WebExpand<Comment_Expand, Comment_Select, Comment_Filter, { Container: Comment_Result }>;
  Parent: WebExpand<Comment_Expand, Comment_Select, Comment_Filter, { Parent: Comment_Result }>;
  Workflow: WebExpand<Comment_Expand, Workflow_Select, Workflow_Filter, { Workflow: Workflow_Result }>;
  comment_AsyncOperations: WebExpand<Comment_Expand, AsyncOperation_Select, AsyncOperation_Filter, { comment_AsyncOperations: AsyncOperation_Result[] }>;
  comment_BulkDeleteFailures: WebExpand<Comment_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { comment_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  comment_MailboxTrackingFolders: WebExpand<Comment_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { comment_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  comment_PrincipalObjectAttributeAccesses: WebExpand<Comment_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { comment_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  comment_ProcessSession: WebExpand<Comment_Expand, ProcessSession_Select, ProcessSession_Filter, { comment_ProcessSession: ProcessSession_Result[] }>;
  comment_SyncErrors: WebExpand<Comment_Expand, SyncError_Select, SyncError_Filter, { comment_SyncErrors: SyncError_Result[] }>;
  comment_UserEntityInstanceDatas: WebExpand<Comment_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { comment_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  createdby: WebExpand<Comment_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<Comment_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<Comment_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<Comment_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  ownerid: WebExpand<Comment_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<Comment_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<Comment_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<Comment_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface Comment_FormattedResult {
  artifacttype_formatted?: string;
  container_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  kind_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  parent_formatted?: string;
  state_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface Comment_Result extends Comment_Base, Comment_Relationships {
  "@odata.etag": string;
  container_guid: string | null;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
  parent_guid: string | null;
}
interface Comment_RelatedOne {
  AppModule: WebMappingRetrieve<AppModule_Select,AppModule_Expand,AppModule_Filter,AppModule_Fixed,AppModule_Result,AppModule_FormattedResult>;
  Bot: WebMappingRetrieve<bot_Select,bot_Expand,bot_Filter,bot_Fixed,bot_Result,bot_FormattedResult>;
  BotComponent: WebMappingRetrieve<botcomponent_Select,botcomponent_Expand,botcomponent_Filter,botcomponent_Fixed,botcomponent_Result,botcomponent_FormattedResult>;
  CanvasApp: WebMappingRetrieve<CanvasApp_Select,CanvasApp_Expand,CanvasApp_Filter,CanvasApp_Fixed,CanvasApp_Result,CanvasApp_FormattedResult>;
  Container: WebMappingRetrieve<Comment_Select,Comment_Expand,Comment_Filter,Comment_Fixed,Comment_Result,Comment_FormattedResult>;
  Parent: WebMappingRetrieve<Comment_Select,Comment_Expand,Comment_Filter,Comment_Fixed,Comment_Result,Comment_FormattedResult>;
  Workflow: WebMappingRetrieve<Workflow_Select,Workflow_Expand,Workflow_Filter,Workflow_Fixed,Workflow_Result,Workflow_FormattedResult>;
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface Comment_RelatedMany {
  Comment_Container_Comment: WebMappingRetrieve<Comment_Select,Comment_Expand,Comment_Filter,Comment_Fixed,Comment_Result,Comment_FormattedResult>;
  Comment_Parent_Comment: WebMappingRetrieve<Comment_Select,Comment_Expand,Comment_Filter,Comment_Fixed,Comment_Result,Comment_FormattedResult>;
  comment_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  comment_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  comment_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  comment_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  comment_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  comment_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  comment_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  comments: WebMappingRetrieve<Comment_Select,Comment_Expand,Comment_Filter,Comment_Fixed,Comment_Result,Comment_FormattedResult>;
}
interface WebEntitiesRelated {
  comments: WebMappingRelated<Comment_RelatedOne,Comment_RelatedMany>;
}
interface WebEntitiesCUDA {
  comments: WebMappingCUDA<Comment_Create,Comment_Update,Comment_Select>;
}
