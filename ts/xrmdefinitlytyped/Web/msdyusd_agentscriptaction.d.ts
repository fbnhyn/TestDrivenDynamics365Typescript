interface msdyusd_agentscriptaction_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyusd_actiondata?: string | null;
  msdyusd_agentscriptactionid?: string | null;
  msdyusd_condition?: string | null;
  msdyusd_launchifdynamic?: boolean | null;
  msdyusd_name?: string | null;
  msdyusd_order?: number | null;
  msdyusd_shortcutkey?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyusd_agentscriptaction_statecode | null;
  statuscode?: msdyusd_agentscriptaction_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyusd_agentscriptaction_Relationships {
  msdyusd_Action?: UII_action_Result | null;
  msdyusd_Application?: UII_hostedapplication_Result | null;
  msdyusd_agentscriptaction_Annotations?: Annotation_Result[] | null;
  msdyusd_agentscriptaction_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyusd_agentscriptaction_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyusd_agentscriptaction_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyusd_agentscriptaction_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyusd_agentscriptaction_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyusd_agentscriptaction_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyusd_agentscriptaction_ProcessSession?: ProcessSession_Result[] | null;
  msdyusd_agentscriptaction_SyncErrors?: SyncError_Result[] | null;
  msdyusd_agentscriptaction_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  msdyusd_agentscriptaction_windowroute_ApplicationAction?: msdyusd_windowroute_Result[] | null;
  msdyusd_agentscriptaction_windowroute_MultipleMatches?: msdyusd_windowroute_Result[] | null;
  msdyusd_agentscriptaction_windowroute_NoMatchesAction?: msdyusd_windowroute_Result[] | null;
  msdyusd_agentscriptaction_windowroute_SingleMatchAction?: msdyusd_windowroute_Result[] | null;
  msdyusd_answer_agentscriptaction?: msdyusd_answer_Result[] | null;
  msdyusd_configuration_actioncalls?: msdyusd_configuration_Result[] | null;
  msdyusd_subactioncalls?: msdyusd_agentscriptaction_Result[] | null;
  msdyusd_task_agentscriptaction?: msdyusd_task_Result[] | null;
  msdyusd_toolbarbutton_agentscriptaction?: msdyusd_toolbarbutton_Result[] | null;
  msdyusd_uiievent_agentscriptaction?: msdyusd_uiievent_Result[] | null;
  msdyusd_windowroute_agentscriptaction?: msdyusd_windowroute_Result[] | null;
}
interface msdyusd_agentscriptaction extends msdyusd_agentscriptaction_Base, msdyusd_agentscriptaction_Relationships {
  msdyusd_Action_bind$uii_actions?: string | null;
  msdyusd_Application_bind$uii_hostedapplications?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyusd_agentscriptaction_Create extends msdyusd_agentscriptaction {
}
interface msdyusd_agentscriptaction_Update extends msdyusd_agentscriptaction {
}
interface msdyusd_agentscriptaction_Select {
  createdby_guid: WebAttribute<msdyusd_agentscriptaction_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyusd_agentscriptaction_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyusd_agentscriptaction_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyusd_agentscriptaction_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyusd_agentscriptaction_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyusd_agentscriptaction_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyusd_agentscriptaction_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyusd_action_guid: WebAttribute<msdyusd_agentscriptaction_Select, { msdyusd_action_guid: string | null }, { msdyusd_action_formatted?: string }>;
  msdyusd_actiondata: WebAttribute<msdyusd_agentscriptaction_Select, { msdyusd_actiondata: string | null }, {  }>;
  msdyusd_agentscriptactionid: WebAttribute<msdyusd_agentscriptaction_Select, { msdyusd_agentscriptactionid: string | null }, {  }>;
  msdyusd_application_guid: WebAttribute<msdyusd_agentscriptaction_Select, { msdyusd_application_guid: string | null }, { msdyusd_application_formatted?: string }>;
  msdyusd_condition: WebAttribute<msdyusd_agentscriptaction_Select, { msdyusd_condition: string | null }, {  }>;
  msdyusd_launchifdynamic: WebAttribute<msdyusd_agentscriptaction_Select, { msdyusd_launchifdynamic: boolean | null }, {  }>;
  msdyusd_name: WebAttribute<msdyusd_agentscriptaction_Select, { msdyusd_name: string | null }, {  }>;
  msdyusd_order: WebAttribute<msdyusd_agentscriptaction_Select, { msdyusd_order: number | null }, {  }>;
  msdyusd_shortcutkey: WebAttribute<msdyusd_agentscriptaction_Select, { msdyusd_shortcutkey: string | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyusd_agentscriptaction_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyusd_agentscriptaction_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyusd_agentscriptaction_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyusd_agentscriptaction_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyusd_agentscriptaction_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyusd_agentscriptaction_Select, { statecode: msdyusd_agentscriptaction_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyusd_agentscriptaction_Select, { statuscode: msdyusd_agentscriptaction_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyusd_agentscriptaction_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyusd_agentscriptaction_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyusd_agentscriptaction_Select, { versionnumber: number | null }, {  }>;
}
interface msdyusd_agentscriptaction_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyusd_action_guid: XQW.Guid;
  msdyusd_actiondata: string;
  msdyusd_agentscriptactionid: XQW.Guid;
  msdyusd_application_guid: XQW.Guid;
  msdyusd_condition: string;
  msdyusd_launchifdynamic: boolean;
  msdyusd_name: string;
  msdyusd_order: number;
  msdyusd_shortcutkey: string;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyusd_agentscriptaction_statecode;
  statuscode: msdyusd_agentscriptaction_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyusd_agentscriptaction_Expand {
  createdby: WebExpand<msdyusd_agentscriptaction_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyusd_agentscriptaction_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyusd_agentscriptaction_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyusd_agentscriptaction_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyusd_Action: WebExpand<msdyusd_agentscriptaction_Expand, UII_action_Select, UII_action_Filter, { msdyusd_Action: UII_action_Result }>;
  msdyusd_Application: WebExpand<msdyusd_agentscriptaction_Expand, UII_hostedapplication_Select, UII_hostedapplication_Filter, { msdyusd_Application: UII_hostedapplication_Result }>;
  msdyusd_agentscriptaction_Annotations: WebExpand<msdyusd_agentscriptaction_Expand, Annotation_Select, Annotation_Filter, { msdyusd_agentscriptaction_Annotations: Annotation_Result[] }>;
  msdyusd_agentscriptaction_AsyncOperations: WebExpand<msdyusd_agentscriptaction_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyusd_agentscriptaction_AsyncOperations: AsyncOperation_Result[] }>;
  msdyusd_agentscriptaction_BulkDeleteFailures: WebExpand<msdyusd_agentscriptaction_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyusd_agentscriptaction_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyusd_agentscriptaction_DuplicateBaseRecord: WebExpand<msdyusd_agentscriptaction_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyusd_agentscriptaction_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyusd_agentscriptaction_DuplicateMatchingRecord: WebExpand<msdyusd_agentscriptaction_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyusd_agentscriptaction_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyusd_agentscriptaction_MailboxTrackingFolders: WebExpand<msdyusd_agentscriptaction_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyusd_agentscriptaction_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyusd_agentscriptaction_PrincipalObjectAttributeAccesses: WebExpand<msdyusd_agentscriptaction_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyusd_agentscriptaction_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyusd_agentscriptaction_ProcessSession: WebExpand<msdyusd_agentscriptaction_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyusd_agentscriptaction_ProcessSession: ProcessSession_Result[] }>;
  msdyusd_agentscriptaction_SyncErrors: WebExpand<msdyusd_agentscriptaction_Expand, SyncError_Select, SyncError_Filter, { msdyusd_agentscriptaction_SyncErrors: SyncError_Result[] }>;
  msdyusd_agentscriptaction_UserEntityInstanceDatas: WebExpand<msdyusd_agentscriptaction_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyusd_agentscriptaction_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyusd_agentscriptaction_windowroute_ApplicationAction: WebExpand<msdyusd_agentscriptaction_Expand, msdyusd_windowroute_Select, msdyusd_windowroute_Filter, { msdyusd_agentscriptaction_windowroute_ApplicationAction: msdyusd_windowroute_Result[] }>;
  msdyusd_agentscriptaction_windowroute_MultipleMatches: WebExpand<msdyusd_agentscriptaction_Expand, msdyusd_windowroute_Select, msdyusd_windowroute_Filter, { msdyusd_agentscriptaction_windowroute_MultipleMatches: msdyusd_windowroute_Result[] }>;
  msdyusd_agentscriptaction_windowroute_NoMatchesAction: WebExpand<msdyusd_agentscriptaction_Expand, msdyusd_windowroute_Select, msdyusd_windowroute_Filter, { msdyusd_agentscriptaction_windowroute_NoMatchesAction: msdyusd_windowroute_Result[] }>;
  msdyusd_agentscriptaction_windowroute_SingleMatchAction: WebExpand<msdyusd_agentscriptaction_Expand, msdyusd_windowroute_Select, msdyusd_windowroute_Filter, { msdyusd_agentscriptaction_windowroute_SingleMatchAction: msdyusd_windowroute_Result[] }>;
  msdyusd_answer_agentscriptaction: WebExpand<msdyusd_agentscriptaction_Expand, msdyusd_answer_Select, msdyusd_answer_Filter, { msdyusd_answer_agentscriptaction: msdyusd_answer_Result[] }>;
  msdyusd_configuration_actioncalls: WebExpand<msdyusd_agentscriptaction_Expand, msdyusd_configuration_Select, msdyusd_configuration_Filter, { msdyusd_configuration_actioncalls: msdyusd_configuration_Result[] }>;
  msdyusd_subactioncalls: WebExpand<msdyusd_agentscriptaction_Expand, msdyusd_agentscriptaction_Select, msdyusd_agentscriptaction_Filter, { msdyusd_subactioncalls: msdyusd_agentscriptaction_Result[] }>;
  msdyusd_task_agentscriptaction: WebExpand<msdyusd_agentscriptaction_Expand, msdyusd_task_Select, msdyusd_task_Filter, { msdyusd_task_agentscriptaction: msdyusd_task_Result[] }>;
  msdyusd_toolbarbutton_agentscriptaction: WebExpand<msdyusd_agentscriptaction_Expand, msdyusd_toolbarbutton_Select, msdyusd_toolbarbutton_Filter, { msdyusd_toolbarbutton_agentscriptaction: msdyusd_toolbarbutton_Result[] }>;
  msdyusd_uiievent_agentscriptaction: WebExpand<msdyusd_agentscriptaction_Expand, msdyusd_uiievent_Select, msdyusd_uiievent_Filter, { msdyusd_uiievent_agentscriptaction: msdyusd_uiievent_Result[] }>;
  msdyusd_windowroute_agentscriptaction: WebExpand<msdyusd_agentscriptaction_Expand, msdyusd_windowroute_Select, msdyusd_windowroute_Filter, { msdyusd_windowroute_agentscriptaction: msdyusd_windowroute_Result[] }>;
  ownerid: WebExpand<msdyusd_agentscriptaction_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyusd_agentscriptaction_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyusd_agentscriptaction_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyusd_agentscriptaction_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyusd_agentscriptaction_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyusd_action_formatted?: string;
  msdyusd_application_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyusd_agentscriptaction_Result extends msdyusd_agentscriptaction_Base, msdyusd_agentscriptaction_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyusd_action_guid: string | null;
  msdyusd_application_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyusd_agentscriptaction_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyusd_Action: WebMappingRetrieve<UII_action_Select,UII_action_Expand,UII_action_Filter,UII_action_Fixed,UII_action_Result,UII_action_FormattedResult>;
  msdyusd_Application: WebMappingRetrieve<UII_hostedapplication_Select,UII_hostedapplication_Expand,UII_hostedapplication_Filter,UII_hostedapplication_Fixed,UII_hostedapplication_Result,UII_hostedapplication_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyusd_agentscriptaction_RelatedMany {
  msdyusd_agentscriptaction_Annotations: WebMappingRetrieve<Annotation_Select,Annotation_Expand,Annotation_Filter,Annotation_Fixed,Annotation_Result,Annotation_FormattedResult>;
  msdyusd_agentscriptaction_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyusd_agentscriptaction_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyusd_agentscriptaction_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyusd_agentscriptaction_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyusd_agentscriptaction_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyusd_agentscriptaction_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyusd_agentscriptaction_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyusd_agentscriptaction_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyusd_agentscriptaction_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  msdyusd_agentscriptaction_windowroute_ApplicationAction: WebMappingRetrieve<msdyusd_windowroute_Select,msdyusd_windowroute_Expand,msdyusd_windowroute_Filter,msdyusd_windowroute_Fixed,msdyusd_windowroute_Result,msdyusd_windowroute_FormattedResult>;
  msdyusd_agentscriptaction_windowroute_MultipleMatches: WebMappingRetrieve<msdyusd_windowroute_Select,msdyusd_windowroute_Expand,msdyusd_windowroute_Filter,msdyusd_windowroute_Fixed,msdyusd_windowroute_Result,msdyusd_windowroute_FormattedResult>;
  msdyusd_agentscriptaction_windowroute_NoMatchesAction: WebMappingRetrieve<msdyusd_windowroute_Select,msdyusd_windowroute_Expand,msdyusd_windowroute_Filter,msdyusd_windowroute_Fixed,msdyusd_windowroute_Result,msdyusd_windowroute_FormattedResult>;
  msdyusd_agentscriptaction_windowroute_SingleMatchAction: WebMappingRetrieve<msdyusd_windowroute_Select,msdyusd_windowroute_Expand,msdyusd_windowroute_Filter,msdyusd_windowroute_Fixed,msdyusd_windowroute_Result,msdyusd_windowroute_FormattedResult>;
  msdyusd_answer_agentscriptaction: WebMappingRetrieve<msdyusd_answer_Select,msdyusd_answer_Expand,msdyusd_answer_Filter,msdyusd_answer_Fixed,msdyusd_answer_Result,msdyusd_answer_FormattedResult>;
  msdyusd_configuration_actioncalls: WebMappingRetrieve<msdyusd_configuration_Select,msdyusd_configuration_Expand,msdyusd_configuration_Filter,msdyusd_configuration_Fixed,msdyusd_configuration_Result,msdyusd_configuration_FormattedResult>;
  msdyusd_subactioncalls: WebMappingRetrieve<msdyusd_agentscriptaction_Select,msdyusd_agentscriptaction_Expand,msdyusd_agentscriptaction_Filter,msdyusd_agentscriptaction_Fixed,msdyusd_agentscriptaction_Result,msdyusd_agentscriptaction_FormattedResult>;
  msdyusd_task_agentscriptaction: WebMappingRetrieve<msdyusd_task_Select,msdyusd_task_Expand,msdyusd_task_Filter,msdyusd_task_Fixed,msdyusd_task_Result,msdyusd_task_FormattedResult>;
  msdyusd_toolbarbutton_agentscriptaction: WebMappingRetrieve<msdyusd_toolbarbutton_Select,msdyusd_toolbarbutton_Expand,msdyusd_toolbarbutton_Filter,msdyusd_toolbarbutton_Fixed,msdyusd_toolbarbutton_Result,msdyusd_toolbarbutton_FormattedResult>;
  msdyusd_uiievent_agentscriptaction: WebMappingRetrieve<msdyusd_uiievent_Select,msdyusd_uiievent_Expand,msdyusd_uiievent_Filter,msdyusd_uiievent_Fixed,msdyusd_uiievent_Result,msdyusd_uiievent_FormattedResult>;
  msdyusd_windowroute_agentscriptaction: WebMappingRetrieve<msdyusd_windowroute_Select,msdyusd_windowroute_Expand,msdyusd_windowroute_Filter,msdyusd_windowroute_Fixed,msdyusd_windowroute_Result,msdyusd_windowroute_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyusd_agentscriptactions: WebMappingRetrieve<msdyusd_agentscriptaction_Select,msdyusd_agentscriptaction_Expand,msdyusd_agentscriptaction_Filter,msdyusd_agentscriptaction_Fixed,msdyusd_agentscriptaction_Result,msdyusd_agentscriptaction_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyusd_agentscriptactions: WebMappingRelated<msdyusd_agentscriptaction_RelatedOne,msdyusd_agentscriptaction_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyusd_agentscriptactions: WebMappingCUDA<msdyusd_agentscriptaction_Create,msdyusd_agentscriptaction_Update,msdyusd_agentscriptaction_Select>;
}
