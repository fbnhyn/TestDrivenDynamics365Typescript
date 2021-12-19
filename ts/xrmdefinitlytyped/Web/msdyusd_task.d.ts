interface msdyusd_task_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyusd_description?: string | null;
  msdyusd_instructions?: string | null;
  msdyusd_name?: string | null;
  msdyusd_scripttext?: string | null;
  msdyusd_starttask?: boolean | null;
  msdyusd_taskid?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyusd_task_statecode | null;
  statuscode?: msdyusd_task_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyusd_task_Relationships {
  msdyusd_Category?: msdyusd_agentscripttaskcategory_Result | null;
  msdyusd_ShowTab?: UII_hostedapplication_Result | null;
  msdyusd_configuration_agentscript?: msdyusd_configuration_Result[] | null;
  msdyusd_task_Annotations?: Annotation_Result[] | null;
  msdyusd_task_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyusd_task_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyusd_task_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyusd_task_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyusd_task_ProcessSession?: ProcessSession_Result[] | null;
  msdyusd_task_SyncErrors?: SyncError_Result[] | null;
  msdyusd_task_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  msdyusd_task_agentscriptaction?: msdyusd_agentscriptaction_Result[] | null;
  msdyusd_task_answer?: msdyusd_answer_Result[] | null;
  msdyusd_task_msdyusd_answer_LinkedTask?: msdyusd_answer_Result[] | null;
  msdyusd_task_scripttasktrigger?: msdyusd_scripttasktrigger_Result[] | null;
}
interface msdyusd_task extends msdyusd_task_Base, msdyusd_task_Relationships {
  msdyusd_Category_bind$msdyusd_agentscripttaskcategories?: string | null;
  msdyusd_ShowTab_bind$uii_hostedapplications?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyusd_task_Create extends msdyusd_task {
}
interface msdyusd_task_Update extends msdyusd_task {
}
interface msdyusd_task_Select {
  createdby_guid: WebAttribute<msdyusd_task_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyusd_task_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyusd_task_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyusd_task_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyusd_task_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyusd_task_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyusd_task_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyusd_category_guid: WebAttribute<msdyusd_task_Select, { msdyusd_category_guid: string | null }, { msdyusd_category_formatted?: string }>;
  msdyusd_description: WebAttribute<msdyusd_task_Select, { msdyusd_description: string | null }, {  }>;
  msdyusd_instructions: WebAttribute<msdyusd_task_Select, { msdyusd_instructions: string | null }, {  }>;
  msdyusd_name: WebAttribute<msdyusd_task_Select, { msdyusd_name: string | null }, {  }>;
  msdyusd_scripttext: WebAttribute<msdyusd_task_Select, { msdyusd_scripttext: string | null }, {  }>;
  msdyusd_showtab_guid: WebAttribute<msdyusd_task_Select, { msdyusd_showtab_guid: string | null }, { msdyusd_showtab_formatted?: string }>;
  msdyusd_starttask: WebAttribute<msdyusd_task_Select, { msdyusd_starttask: boolean | null }, {  }>;
  msdyusd_taskid: WebAttribute<msdyusd_task_Select, { msdyusd_taskid: string | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyusd_task_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyusd_task_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyusd_task_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyusd_task_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyusd_task_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyusd_task_Select, { statecode: msdyusd_task_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyusd_task_Select, { statuscode: msdyusd_task_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyusd_task_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyusd_task_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyusd_task_Select, { versionnumber: number | null }, {  }>;
}
interface msdyusd_task_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyusd_category_guid: XQW.Guid;
  msdyusd_description: string;
  msdyusd_instructions: string;
  msdyusd_name: string;
  msdyusd_scripttext: string;
  msdyusd_showtab_guid: XQW.Guid;
  msdyusd_starttask: boolean;
  msdyusd_taskid: XQW.Guid;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyusd_task_statecode;
  statuscode: msdyusd_task_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyusd_task_Expand {
  createdby: WebExpand<msdyusd_task_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyusd_task_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyusd_task_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyusd_task_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyusd_Category: WebExpand<msdyusd_task_Expand, msdyusd_agentscripttaskcategory_Select, msdyusd_agentscripttaskcategory_Filter, { msdyusd_Category: msdyusd_agentscripttaskcategory_Result }>;
  msdyusd_ShowTab: WebExpand<msdyusd_task_Expand, UII_hostedapplication_Select, UII_hostedapplication_Filter, { msdyusd_ShowTab: UII_hostedapplication_Result }>;
  msdyusd_configuration_agentscript: WebExpand<msdyusd_task_Expand, msdyusd_configuration_Select, msdyusd_configuration_Filter, { msdyusd_configuration_agentscript: msdyusd_configuration_Result[] }>;
  msdyusd_task_Annotations: WebExpand<msdyusd_task_Expand, Annotation_Select, Annotation_Filter, { msdyusd_task_Annotations: Annotation_Result[] }>;
  msdyusd_task_AsyncOperations: WebExpand<msdyusd_task_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyusd_task_AsyncOperations: AsyncOperation_Result[] }>;
  msdyusd_task_BulkDeleteFailures: WebExpand<msdyusd_task_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyusd_task_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyusd_task_MailboxTrackingFolders: WebExpand<msdyusd_task_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyusd_task_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyusd_task_PrincipalObjectAttributeAccesses: WebExpand<msdyusd_task_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyusd_task_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyusd_task_ProcessSession: WebExpand<msdyusd_task_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyusd_task_ProcessSession: ProcessSession_Result[] }>;
  msdyusd_task_SyncErrors: WebExpand<msdyusd_task_Expand, SyncError_Select, SyncError_Filter, { msdyusd_task_SyncErrors: SyncError_Result[] }>;
  msdyusd_task_UserEntityInstanceDatas: WebExpand<msdyusd_task_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyusd_task_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyusd_task_agentscriptaction: WebExpand<msdyusd_task_Expand, msdyusd_agentscriptaction_Select, msdyusd_agentscriptaction_Filter, { msdyusd_task_agentscriptaction: msdyusd_agentscriptaction_Result[] }>;
  msdyusd_task_answer: WebExpand<msdyusd_task_Expand, msdyusd_answer_Select, msdyusd_answer_Filter, { msdyusd_task_answer: msdyusd_answer_Result[] }>;
  msdyusd_task_msdyusd_answer_LinkedTask: WebExpand<msdyusd_task_Expand, msdyusd_answer_Select, msdyusd_answer_Filter, { msdyusd_task_msdyusd_answer_LinkedTask: msdyusd_answer_Result[] }>;
  msdyusd_task_scripttasktrigger: WebExpand<msdyusd_task_Expand, msdyusd_scripttasktrigger_Select, msdyusd_scripttasktrigger_Filter, { msdyusd_task_scripttasktrigger: msdyusd_scripttasktrigger_Result[] }>;
  ownerid: WebExpand<msdyusd_task_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyusd_task_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyusd_task_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyusd_task_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyusd_task_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyusd_category_formatted?: string;
  msdyusd_showtab_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyusd_task_Result extends msdyusd_task_Base, msdyusd_task_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyusd_category_guid: string | null;
  msdyusd_showtab_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyusd_task_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyusd_Category: WebMappingRetrieve<msdyusd_agentscripttaskcategory_Select,msdyusd_agentscripttaskcategory_Expand,msdyusd_agentscripttaskcategory_Filter,msdyusd_agentscripttaskcategory_Fixed,msdyusd_agentscripttaskcategory_Result,msdyusd_agentscripttaskcategory_FormattedResult>;
  msdyusd_ShowTab: WebMappingRetrieve<UII_hostedapplication_Select,UII_hostedapplication_Expand,UII_hostedapplication_Filter,UII_hostedapplication_Fixed,UII_hostedapplication_Result,UII_hostedapplication_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyusd_task_RelatedMany {
  msdyusd_configuration_agentscript: WebMappingRetrieve<msdyusd_configuration_Select,msdyusd_configuration_Expand,msdyusd_configuration_Filter,msdyusd_configuration_Fixed,msdyusd_configuration_Result,msdyusd_configuration_FormattedResult>;
  msdyusd_task_Annotations: WebMappingRetrieve<Annotation_Select,Annotation_Expand,Annotation_Filter,Annotation_Fixed,Annotation_Result,Annotation_FormattedResult>;
  msdyusd_task_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyusd_task_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyusd_task_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyusd_task_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyusd_task_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyusd_task_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyusd_task_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  msdyusd_task_agentscriptaction: WebMappingRetrieve<msdyusd_agentscriptaction_Select,msdyusd_agentscriptaction_Expand,msdyusd_agentscriptaction_Filter,msdyusd_agentscriptaction_Fixed,msdyusd_agentscriptaction_Result,msdyusd_agentscriptaction_FormattedResult>;
  msdyusd_task_answer: WebMappingRetrieve<msdyusd_answer_Select,msdyusd_answer_Expand,msdyusd_answer_Filter,msdyusd_answer_Fixed,msdyusd_answer_Result,msdyusd_answer_FormattedResult>;
  msdyusd_task_msdyusd_answer_LinkedTask: WebMappingRetrieve<msdyusd_answer_Select,msdyusd_answer_Expand,msdyusd_answer_Filter,msdyusd_answer_Fixed,msdyusd_answer_Result,msdyusd_answer_FormattedResult>;
  msdyusd_task_scripttasktrigger: WebMappingRetrieve<msdyusd_scripttasktrigger_Select,msdyusd_scripttasktrigger_Expand,msdyusd_scripttasktrigger_Filter,msdyusd_scripttasktrigger_Fixed,msdyusd_scripttasktrigger_Result,msdyusd_scripttasktrigger_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyusd_tasks: WebMappingRetrieve<msdyusd_task_Select,msdyusd_task_Expand,msdyusd_task_Filter,msdyusd_task_Fixed,msdyusd_task_Result,msdyusd_task_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyusd_tasks: WebMappingRelated<msdyusd_task_RelatedOne,msdyusd_task_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyusd_tasks: WebMappingCUDA<msdyusd_task_Create,msdyusd_task_Update,msdyusd_task_Select>;
}
