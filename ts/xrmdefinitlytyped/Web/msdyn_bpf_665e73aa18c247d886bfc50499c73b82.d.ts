interface msdyn_bpf_665e73aa18c247d886bfc50499c73b82_Base extends WebEntity {
  activestagestartedon?: Date | null;
  bpf_duration?: number | null;
  bpf_name?: string | null;
  businessprocessflowinstanceid?: string | null;
  completedon?: Date | null;
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_bpf_665e73aa18c247d886bfc50499c73b82_statecode | null;
  statuscode?: msdyn_bpf_665e73aa18c247d886bfc50499c73b82_statuscode | null;
  timezoneruleversionnumber?: number | null;
  traversedpath?: string | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_bpf_665e73aa18c247d886bfc50499c73b82_Relationships {
  msdyn_bpf_665e73aa18c247d886bfc50499c73b82_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_bpf_665e73aa18c247d886bfc50499c73b82_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_bpf_665e73aa18c247d886bfc50499c73b82_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_bpf_665e73aa18c247d886bfc50499c73b82_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_bpf_665e73aa18c247d886bfc50499c73b82_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_bpf_665e73aa18c247d886bfc50499c73b82_SyncErrors?: SyncError_Result[] | null;
  msdyn_bpf_665e73aa18c247d886bfc50499c73b82_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  msdyn_bpf_665e73aa18c247d886bfc50499c73b82_WorkflowLogs?: WorkflowLog_Result[] | null;
}
interface msdyn_bpf_665e73aa18c247d886bfc50499c73b82 extends msdyn_bpf_665e73aa18c247d886bfc50499c73b82_Base, msdyn_bpf_665e73aa18c247d886bfc50499c73b82_Relationships {
  activestageid_bind$processstages?: string | null;
  bpf_msdyn_projectid_bind$msdyn_projects?: string | null;
  processid_bind$workflows?: string | null;
}
interface msdyn_bpf_665e73aa18c247d886bfc50499c73b82_Create extends msdyn_bpf_665e73aa18c247d886bfc50499c73b82 {
}
interface msdyn_bpf_665e73aa18c247d886bfc50499c73b82_Update extends msdyn_bpf_665e73aa18c247d886bfc50499c73b82 {
}
interface msdyn_bpf_665e73aa18c247d886bfc50499c73b82_Select {
  activestageid_guid: WebAttribute<msdyn_bpf_665e73aa18c247d886bfc50499c73b82_Select, { activestageid_guid: string | null }, { activestageid_formatted?: string }>;
  activestagestartedon: WebAttribute<msdyn_bpf_665e73aa18c247d886bfc50499c73b82_Select, { activestagestartedon: Date | null }, { activestagestartedon_formatted?: string }>;
  bpf_duration: WebAttribute<msdyn_bpf_665e73aa18c247d886bfc50499c73b82_Select, { bpf_duration: number | null }, {  }>;
  bpf_msdyn_projectid_guid: WebAttribute<msdyn_bpf_665e73aa18c247d886bfc50499c73b82_Select, { bpf_msdyn_projectid_guid: string | null }, { bpf_msdyn_projectid_formatted?: string }>;
  bpf_name: WebAttribute<msdyn_bpf_665e73aa18c247d886bfc50499c73b82_Select, { bpf_name: string | null }, {  }>;
  businessprocessflowinstanceid: WebAttribute<msdyn_bpf_665e73aa18c247d886bfc50499c73b82_Select, { businessprocessflowinstanceid: string | null }, {  }>;
  completedon: WebAttribute<msdyn_bpf_665e73aa18c247d886bfc50499c73b82_Select, { completedon: Date | null }, { completedon_formatted?: string }>;
  createdby_guid: WebAttribute<msdyn_bpf_665e73aa18c247d886bfc50499c73b82_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_bpf_665e73aa18c247d886bfc50499c73b82_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_bpf_665e73aa18c247d886bfc50499c73b82_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_bpf_665e73aa18c247d886bfc50499c73b82_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_bpf_665e73aa18c247d886bfc50499c73b82_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_bpf_665e73aa18c247d886bfc50499c73b82_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_bpf_665e73aa18c247d886bfc50499c73b82_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  organizationid_guid: WebAttribute<msdyn_bpf_665e73aa18c247d886bfc50499c73b82_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_bpf_665e73aa18c247d886bfc50499c73b82_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  processid_guid: WebAttribute<msdyn_bpf_665e73aa18c247d886bfc50499c73b82_Select, { processid_guid: string | null }, { processid_formatted?: string }>;
  statecode: WebAttribute<msdyn_bpf_665e73aa18c247d886bfc50499c73b82_Select, { statecode: msdyn_bpf_665e73aa18c247d886bfc50499c73b82_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_bpf_665e73aa18c247d886bfc50499c73b82_Select, { statuscode: msdyn_bpf_665e73aa18c247d886bfc50499c73b82_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_bpf_665e73aa18c247d886bfc50499c73b82_Select, { timezoneruleversionnumber: number | null }, {  }>;
  traversedpath: WebAttribute<msdyn_bpf_665e73aa18c247d886bfc50499c73b82_Select, { traversedpath: string | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_bpf_665e73aa18c247d886bfc50499c73b82_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_bpf_665e73aa18c247d886bfc50499c73b82_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_bpf_665e73aa18c247d886bfc50499c73b82_Filter {
  activestageid_guid: XQW.Guid;
  activestagestartedon: Date;
  bpf_duration: number;
  bpf_msdyn_projectid_guid: XQW.Guid;
  bpf_name: string;
  businessprocessflowinstanceid: XQW.Guid;
  completedon: Date;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  organizationid_guid: XQW.Guid;
  overriddencreatedon: Date;
  processid_guid: XQW.Guid;
  statecode: msdyn_bpf_665e73aa18c247d886bfc50499c73b82_statecode;
  statuscode: msdyn_bpf_665e73aa18c247d886bfc50499c73b82_statuscode;
  timezoneruleversionnumber: number;
  traversedpath: string;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_bpf_665e73aa18c247d886bfc50499c73b82_Expand {
  activestageid: WebExpand<msdyn_bpf_665e73aa18c247d886bfc50499c73b82_Expand, ProcessStage_Select, ProcessStage_Filter, { activestageid: ProcessStage_Result }>;
  bpf_msdyn_projectid: WebExpand<msdyn_bpf_665e73aa18c247d886bfc50499c73b82_Expand, msdyn_project_Select, msdyn_project_Filter, { bpf_msdyn_projectid: msdyn_project_Result }>;
  createdby: WebExpand<msdyn_bpf_665e73aa18c247d886bfc50499c73b82_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_bpf_665e73aa18c247d886bfc50499c73b82_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_bpf_665e73aa18c247d886bfc50499c73b82_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_bpf_665e73aa18c247d886bfc50499c73b82_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_bpf_665e73aa18c247d886bfc50499c73b82_AsyncOperations: WebExpand<msdyn_bpf_665e73aa18c247d886bfc50499c73b82_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_bpf_665e73aa18c247d886bfc50499c73b82_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_bpf_665e73aa18c247d886bfc50499c73b82_BulkDeleteFailures: WebExpand<msdyn_bpf_665e73aa18c247d886bfc50499c73b82_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_bpf_665e73aa18c247d886bfc50499c73b82_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_bpf_665e73aa18c247d886bfc50499c73b82_MailboxTrackingFolders: WebExpand<msdyn_bpf_665e73aa18c247d886bfc50499c73b82_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_bpf_665e73aa18c247d886bfc50499c73b82_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_bpf_665e73aa18c247d886bfc50499c73b82_PrincipalObjectAttributeAccesses: WebExpand<msdyn_bpf_665e73aa18c247d886bfc50499c73b82_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_bpf_665e73aa18c247d886bfc50499c73b82_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_bpf_665e73aa18c247d886bfc50499c73b82_ProcessSession: WebExpand<msdyn_bpf_665e73aa18c247d886bfc50499c73b82_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_bpf_665e73aa18c247d886bfc50499c73b82_ProcessSession: ProcessSession_Result[] }>;
  msdyn_bpf_665e73aa18c247d886bfc50499c73b82_SyncErrors: WebExpand<msdyn_bpf_665e73aa18c247d886bfc50499c73b82_Expand, SyncError_Select, SyncError_Filter, { msdyn_bpf_665e73aa18c247d886bfc50499c73b82_SyncErrors: SyncError_Result[] }>;
  msdyn_bpf_665e73aa18c247d886bfc50499c73b82_UserEntityInstanceDatas: WebExpand<msdyn_bpf_665e73aa18c247d886bfc50499c73b82_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_bpf_665e73aa18c247d886bfc50499c73b82_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_bpf_665e73aa18c247d886bfc50499c73b82_WorkflowLogs: WebExpand<msdyn_bpf_665e73aa18c247d886bfc50499c73b82_Expand, WorkflowLog_Select, WorkflowLog_Filter, { msdyn_bpf_665e73aa18c247d886bfc50499c73b82_WorkflowLogs: WorkflowLog_Result[] }>;
  organizationid: WebExpand<msdyn_bpf_665e73aa18c247d886bfc50499c73b82_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
  processid: WebExpand<msdyn_bpf_665e73aa18c247d886bfc50499c73b82_Expand, Workflow_Select, Workflow_Filter, { processid: Workflow_Result }>;
}
interface msdyn_bpf_665e73aa18c247d886bfc50499c73b82_FormattedResult {
  activestageid_formatted?: string;
  activestagestartedon_formatted?: string;
  bpf_msdyn_projectid_formatted?: string;
  completedon_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  organizationid_formatted?: string;
  overriddencreatedon_formatted?: string;
  processid_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_bpf_665e73aa18c247d886bfc50499c73b82_Result extends msdyn_bpf_665e73aa18c247d886bfc50499c73b82_Base, msdyn_bpf_665e73aa18c247d886bfc50499c73b82_Relationships {
  "@odata.etag": string;
  activestageid_guid: string | null;
  bpf_msdyn_projectid_guid: string | null;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
  processid_guid: string | null;
}
interface msdyn_bpf_665e73aa18c247d886bfc50499c73b82_RelatedOne {
  activestageid: WebMappingRetrieve<ProcessStage_Select,ProcessStage_Expand,ProcessStage_Filter,ProcessStage_Fixed,ProcessStage_Result,ProcessStage_FormattedResult>;
  bpf_msdyn_projectid: WebMappingRetrieve<msdyn_project_Select,msdyn_project_Expand,msdyn_project_Filter,msdyn_project_Fixed,msdyn_project_Result,msdyn_project_FormattedResult>;
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
  processid: WebMappingRetrieve<Workflow_Select,Workflow_Expand,Workflow_Filter,Workflow_Fixed,Workflow_Result,Workflow_FormattedResult>;
}
interface msdyn_bpf_665e73aa18c247d886bfc50499c73b82_RelatedMany {
  msdyn_bpf_665e73aa18c247d886bfc50499c73b82_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_bpf_665e73aa18c247d886bfc50499c73b82_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_bpf_665e73aa18c247d886bfc50499c73b82_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_bpf_665e73aa18c247d886bfc50499c73b82_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_bpf_665e73aa18c247d886bfc50499c73b82_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_bpf_665e73aa18c247d886bfc50499c73b82_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_bpf_665e73aa18c247d886bfc50499c73b82_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  msdyn_bpf_665e73aa18c247d886bfc50499c73b82_WorkflowLogs: WebMappingRetrieve<WorkflowLog_Select,WorkflowLog_Expand,WorkflowLog_Filter,WorkflowLog_Fixed,WorkflowLog_Result,WorkflowLog_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_bpf_665e73aa18c247d886bfc50499c73b82s: WebMappingRetrieve<msdyn_bpf_665e73aa18c247d886bfc50499c73b82_Select,msdyn_bpf_665e73aa18c247d886bfc50499c73b82_Expand,msdyn_bpf_665e73aa18c247d886bfc50499c73b82_Filter,msdyn_bpf_665e73aa18c247d886bfc50499c73b82_Fixed,msdyn_bpf_665e73aa18c247d886bfc50499c73b82_Result,msdyn_bpf_665e73aa18c247d886bfc50499c73b82_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_bpf_665e73aa18c247d886bfc50499c73b82s: WebMappingRelated<msdyn_bpf_665e73aa18c247d886bfc50499c73b82_RelatedOne,msdyn_bpf_665e73aa18c247d886bfc50499c73b82_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_bpf_665e73aa18c247d886bfc50499c73b82s: WebMappingCUDA<msdyn_bpf_665e73aa18c247d886bfc50499c73b82_Create,msdyn_bpf_665e73aa18c247d886bfc50499c73b82_Update,msdyn_bpf_665e73aa18c247d886bfc50499c73b82_Select>;
}
