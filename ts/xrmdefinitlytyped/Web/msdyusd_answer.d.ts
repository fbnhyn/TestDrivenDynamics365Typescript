interface msdyusd_answer_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyusd_answerid?: string | null;
  msdyusd_answertext?: string | null;
  msdyusd_enabledcondition?: string | null;
  msdyusd_name?: string | null;
  msdyusd_order?: number | null;
  msdyusd_visiblecondition?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyusd_answer_statecode | null;
  statuscode?: msdyusd_answer_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyusd_answer_Relationships {
  msdyusd_LinkedTask?: msdyusd_task_Result | null;
  msdyusd_ShowTab?: UII_hostedapplication_Result | null;
  msdyusd_answer_Annotations?: Annotation_Result[] | null;
  msdyusd_answer_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyusd_answer_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyusd_answer_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyusd_answer_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyusd_answer_ProcessSession?: ProcessSession_Result[] | null;
  msdyusd_answer_SyncErrors?: SyncError_Result[] | null;
  msdyusd_answer_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  msdyusd_answer_agentscriptaction?: msdyusd_agentscriptaction_Result[] | null;
  msdyusd_task_answer?: msdyusd_task_Result[] | null;
}
interface msdyusd_answer extends msdyusd_answer_Base, msdyusd_answer_Relationships {
  msdyusd_LinkedTask_bind$msdyusd_tasks?: string | null;
  msdyusd_ShowTab_bind$uii_hostedapplications?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyusd_answer_Create extends msdyusd_answer {
}
interface msdyusd_answer_Update extends msdyusd_answer {
}
interface msdyusd_answer_Select {
  createdby_guid: WebAttribute<msdyusd_answer_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyusd_answer_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyusd_answer_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyusd_answer_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyusd_answer_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyusd_answer_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyusd_answer_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyusd_answerid: WebAttribute<msdyusd_answer_Select, { msdyusd_answerid: string | null }, {  }>;
  msdyusd_answertext: WebAttribute<msdyusd_answer_Select, { msdyusd_answertext: string | null }, {  }>;
  msdyusd_enabledcondition: WebAttribute<msdyusd_answer_Select, { msdyusd_enabledcondition: string | null }, {  }>;
  msdyusd_linkedtask_guid: WebAttribute<msdyusd_answer_Select, { msdyusd_linkedtask_guid: string | null }, { msdyusd_linkedtask_formatted?: string }>;
  msdyusd_name: WebAttribute<msdyusd_answer_Select, { msdyusd_name: string | null }, {  }>;
  msdyusd_order: WebAttribute<msdyusd_answer_Select, { msdyusd_order: number | null }, {  }>;
  msdyusd_showtab_guid: WebAttribute<msdyusd_answer_Select, { msdyusd_showtab_guid: string | null }, { msdyusd_showtab_formatted?: string }>;
  msdyusd_visiblecondition: WebAttribute<msdyusd_answer_Select, { msdyusd_visiblecondition: string | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyusd_answer_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyusd_answer_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyusd_answer_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyusd_answer_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyusd_answer_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyusd_answer_Select, { statecode: msdyusd_answer_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyusd_answer_Select, { statuscode: msdyusd_answer_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyusd_answer_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyusd_answer_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyusd_answer_Select, { versionnumber: number | null }, {  }>;
}
interface msdyusd_answer_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyusd_answerid: XQW.Guid;
  msdyusd_answertext: string;
  msdyusd_enabledcondition: string;
  msdyusd_linkedtask_guid: XQW.Guid;
  msdyusd_name: string;
  msdyusd_order: number;
  msdyusd_showtab_guid: XQW.Guid;
  msdyusd_visiblecondition: string;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyusd_answer_statecode;
  statuscode: msdyusd_answer_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyusd_answer_Expand {
  createdby: WebExpand<msdyusd_answer_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyusd_answer_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyusd_answer_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyusd_answer_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyusd_LinkedTask: WebExpand<msdyusd_answer_Expand, msdyusd_task_Select, msdyusd_task_Filter, { msdyusd_LinkedTask: msdyusd_task_Result }>;
  msdyusd_ShowTab: WebExpand<msdyusd_answer_Expand, UII_hostedapplication_Select, UII_hostedapplication_Filter, { msdyusd_ShowTab: UII_hostedapplication_Result }>;
  msdyusd_answer_Annotations: WebExpand<msdyusd_answer_Expand, Annotation_Select, Annotation_Filter, { msdyusd_answer_Annotations: Annotation_Result[] }>;
  msdyusd_answer_AsyncOperations: WebExpand<msdyusd_answer_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyusd_answer_AsyncOperations: AsyncOperation_Result[] }>;
  msdyusd_answer_BulkDeleteFailures: WebExpand<msdyusd_answer_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyusd_answer_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyusd_answer_MailboxTrackingFolders: WebExpand<msdyusd_answer_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyusd_answer_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyusd_answer_PrincipalObjectAttributeAccesses: WebExpand<msdyusd_answer_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyusd_answer_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyusd_answer_ProcessSession: WebExpand<msdyusd_answer_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyusd_answer_ProcessSession: ProcessSession_Result[] }>;
  msdyusd_answer_SyncErrors: WebExpand<msdyusd_answer_Expand, SyncError_Select, SyncError_Filter, { msdyusd_answer_SyncErrors: SyncError_Result[] }>;
  msdyusd_answer_UserEntityInstanceDatas: WebExpand<msdyusd_answer_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyusd_answer_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyusd_answer_agentscriptaction: WebExpand<msdyusd_answer_Expand, msdyusd_agentscriptaction_Select, msdyusd_agentscriptaction_Filter, { msdyusd_answer_agentscriptaction: msdyusd_agentscriptaction_Result[] }>;
  msdyusd_task_answer: WebExpand<msdyusd_answer_Expand, msdyusd_task_Select, msdyusd_task_Filter, { msdyusd_task_answer: msdyusd_task_Result[] }>;
  ownerid: WebExpand<msdyusd_answer_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyusd_answer_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyusd_answer_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyusd_answer_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyusd_answer_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyusd_linkedtask_formatted?: string;
  msdyusd_showtab_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyusd_answer_Result extends msdyusd_answer_Base, msdyusd_answer_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyusd_linkedtask_guid: string | null;
  msdyusd_showtab_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyusd_answer_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyusd_LinkedTask: WebMappingRetrieve<msdyusd_task_Select,msdyusd_task_Expand,msdyusd_task_Filter,msdyusd_task_Fixed,msdyusd_task_Result,msdyusd_task_FormattedResult>;
  msdyusd_ShowTab: WebMappingRetrieve<UII_hostedapplication_Select,UII_hostedapplication_Expand,UII_hostedapplication_Filter,UII_hostedapplication_Fixed,UII_hostedapplication_Result,UII_hostedapplication_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyusd_answer_RelatedMany {
  msdyusd_answer_Annotations: WebMappingRetrieve<Annotation_Select,Annotation_Expand,Annotation_Filter,Annotation_Fixed,Annotation_Result,Annotation_FormattedResult>;
  msdyusd_answer_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyusd_answer_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyusd_answer_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyusd_answer_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyusd_answer_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyusd_answer_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyusd_answer_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  msdyusd_answer_agentscriptaction: WebMappingRetrieve<msdyusd_agentscriptaction_Select,msdyusd_agentscriptaction_Expand,msdyusd_agentscriptaction_Filter,msdyusd_agentscriptaction_Fixed,msdyusd_agentscriptaction_Result,msdyusd_agentscriptaction_FormattedResult>;
  msdyusd_task_answer: WebMappingRetrieve<msdyusd_task_Select,msdyusd_task_Expand,msdyusd_task_Filter,msdyusd_task_Fixed,msdyusd_task_Result,msdyusd_task_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyusd_answers: WebMappingRetrieve<msdyusd_answer_Select,msdyusd_answer_Expand,msdyusd_answer_Filter,msdyusd_answer_Fixed,msdyusd_answer_Result,msdyusd_answer_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyusd_answers: WebMappingRelated<msdyusd_answer_RelatedOne,msdyusd_answer_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyusd_answers: WebMappingCUDA<msdyusd_answer_Create,msdyusd_answer_Update,msdyusd_answer_Select>;
}
