interface UII_audit_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  overriddencreatedon?: Date | null;
  statecode?: uii_audit_statecode | null;
  statuscode?: uii_audit_statuscode | null;
  timezoneruleversionnumber?: number | null;
  uii_actiondata?: string | null;
  uii_actionname?: string | null;
  uii_activityid?: number | null;
  uii_agentstate?: string | null;
  uii_auditid?: string | null;
  uii_clienttimezone?: number | null;
  uii_contextid?: string | null;
  uii_currenttime?: Date | null;
  uii_customerid?: string | null;
  uii_machinename?: string | null;
  uii_name?: string | null;
  uii_targetapplication?: string | null;
  uii_workflowstatus?: string | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface UII_audit_Relationships {
  uii_audit_AsyncOperations?: AsyncOperation_Result[] | null;
  uii_audit_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  uii_audit_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  uii_audit_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  uii_audit_ProcessSession?: ProcessSession_Result[] | null;
  uii_audit_SyncErrors?: SyncError_Result[] | null;
  uii_audit_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface UII_audit extends UII_audit_Base, UII_audit_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
  uii_applicationid_bind$uii_hostedapplications?: string | null;
  uii_workflowactivestepid_bind$uii_workflowsteps?: string | null;
  uii_workflowid_bind$uii_workflows?: string | null;
}
interface UII_audit_Create extends UII_audit {
}
interface UII_audit_Update extends UII_audit {
}
interface UII_audit_Select {
  createdby_guid: WebAttribute<UII_audit_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<UII_audit_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<UII_audit_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<UII_audit_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<UII_audit_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<UII_audit_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<UII_audit_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  overriddencreatedon: WebAttribute<UII_audit_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<UII_audit_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<UII_audit_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<UII_audit_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<UII_audit_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<UII_audit_Select, { statecode: uii_audit_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<UII_audit_Select, { statuscode: uii_audit_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<UII_audit_Select, { timezoneruleversionnumber: number | null }, {  }>;
  uii_actiondata: WebAttribute<UII_audit_Select, { uii_actiondata: string | null }, {  }>;
  uii_actionname: WebAttribute<UII_audit_Select, { uii_actionname: string | null }, {  }>;
  uii_activityid: WebAttribute<UII_audit_Select, { uii_activityid: number | null }, {  }>;
  uii_agentstate: WebAttribute<UII_audit_Select, { uii_agentstate: string | null }, {  }>;
  uii_applicationid_guid: WebAttribute<UII_audit_Select, { uii_applicationid_guid: string | null }, { uii_applicationid_formatted?: string }>;
  uii_auditid: WebAttribute<UII_audit_Select, { uii_auditid: string | null }, {  }>;
  uii_clienttimezone: WebAttribute<UII_audit_Select, { uii_clienttimezone: number | null }, {  }>;
  uii_contextid: WebAttribute<UII_audit_Select, { uii_contextid: string | null }, {  }>;
  uii_currenttime: WebAttribute<UII_audit_Select, { uii_currenttime: Date | null }, { uii_currenttime_formatted?: string }>;
  uii_customerid: WebAttribute<UII_audit_Select, { uii_customerid: string | null }, {  }>;
  uii_machinename: WebAttribute<UII_audit_Select, { uii_machinename: string | null }, {  }>;
  uii_name: WebAttribute<UII_audit_Select, { uii_name: string | null }, {  }>;
  uii_targetapplication: WebAttribute<UII_audit_Select, { uii_targetapplication: string | null }, {  }>;
  uii_workflowactivestepid_guid: WebAttribute<UII_audit_Select, { uii_workflowactivestepid_guid: string | null }, { uii_workflowactivestepid_formatted?: string }>;
  uii_workflowid_guid: WebAttribute<UII_audit_Select, { uii_workflowid_guid: string | null }, { uii_workflowid_formatted?: string }>;
  uii_workflowstatus: WebAttribute<UII_audit_Select, { uii_workflowstatus: string | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<UII_audit_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<UII_audit_Select, { versionnumber: number | null }, {  }>;
}
interface UII_audit_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: uii_audit_statecode;
  statuscode: uii_audit_statuscode;
  timezoneruleversionnumber: number;
  uii_actiondata: string;
  uii_actionname: string;
  uii_activityid: number;
  uii_agentstate: string;
  uii_applicationid_guid: XQW.Guid;
  uii_auditid: XQW.Guid;
  uii_clienttimezone: number;
  uii_contextid: string;
  uii_currenttime: Date;
  uii_customerid: string;
  uii_machinename: string;
  uii_name: string;
  uii_targetapplication: string;
  uii_workflowactivestepid_guid: XQW.Guid;
  uii_workflowid_guid: XQW.Guid;
  uii_workflowstatus: string;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface UII_audit_Expand {
  createdby: WebExpand<UII_audit_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<UII_audit_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<UII_audit_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<UII_audit_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  ownerid: WebExpand<UII_audit_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<UII_audit_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<UII_audit_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<UII_audit_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
  uii_applicationid: WebExpand<UII_audit_Expand, UII_hostedapplication_Select, UII_hostedapplication_Filter, { uii_applicationid: UII_hostedapplication_Result }>;
  uii_audit_AsyncOperations: WebExpand<UII_audit_Expand, AsyncOperation_Select, AsyncOperation_Filter, { uii_audit_AsyncOperations: AsyncOperation_Result[] }>;
  uii_audit_BulkDeleteFailures: WebExpand<UII_audit_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { uii_audit_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  uii_audit_MailboxTrackingFolders: WebExpand<UII_audit_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { uii_audit_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  uii_audit_PrincipalObjectAttributeAccesses: WebExpand<UII_audit_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { uii_audit_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  uii_audit_ProcessSession: WebExpand<UII_audit_Expand, ProcessSession_Select, ProcessSession_Filter, { uii_audit_ProcessSession: ProcessSession_Result[] }>;
  uii_audit_SyncErrors: WebExpand<UII_audit_Expand, SyncError_Select, SyncError_Filter, { uii_audit_SyncErrors: SyncError_Result[] }>;
  uii_audit_UserEntityInstanceDatas: WebExpand<UII_audit_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { uii_audit_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  uii_workflowactivestepid: WebExpand<UII_audit_Expand, UII_workflowstep_Select, UII_workflowstep_Filter, { uii_workflowactivestepid: UII_workflowstep_Result }>;
  uii_workflowid: WebExpand<UII_audit_Expand, UII_workflow_Select, UII_workflow_Filter, { uii_workflowid: UII_workflow_Result }>;
}
interface UII_audit_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
  uii_applicationid_formatted?: string;
  uii_currenttime_formatted?: string;
  uii_workflowactivestepid_formatted?: string;
  uii_workflowid_formatted?: string;
}
interface UII_audit_Result extends UII_audit_Base, UII_audit_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
  uii_applicationid_guid: string | null;
  uii_workflowactivestepid_guid: string | null;
  uii_workflowid_guid: string | null;
}
interface UII_audit_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  uii_applicationid: WebMappingRetrieve<UII_hostedapplication_Select,UII_hostedapplication_Expand,UII_hostedapplication_Filter,UII_hostedapplication_Fixed,UII_hostedapplication_Result,UII_hostedapplication_FormattedResult>;
  uii_workflowactivestepid: WebMappingRetrieve<UII_workflowstep_Select,UII_workflowstep_Expand,UII_workflowstep_Filter,UII_workflowstep_Fixed,UII_workflowstep_Result,UII_workflowstep_FormattedResult>;
  uii_workflowid: WebMappingRetrieve<UII_workflow_Select,UII_workflow_Expand,UII_workflow_Filter,UII_workflow_Fixed,UII_workflow_Result,UII_workflow_FormattedResult>;
}
interface UII_audit_RelatedMany {
  uii_audit_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  uii_audit_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  uii_audit_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  uii_audit_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  uii_audit_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  uii_audit_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  uii_audit_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  uii_audits: WebMappingRetrieve<UII_audit_Select,UII_audit_Expand,UII_audit_Filter,UII_audit_Fixed,UII_audit_Result,UII_audit_FormattedResult>;
}
interface WebEntitiesRelated {
  uii_audits: WebMappingRelated<UII_audit_RelatedOne,UII_audit_RelatedMany>;
}
interface WebEntitiesCUDA {
  uii_audits: WebMappingCUDA<UII_audit_Create,UII_audit_Update,UII_audit_Select>;
}
