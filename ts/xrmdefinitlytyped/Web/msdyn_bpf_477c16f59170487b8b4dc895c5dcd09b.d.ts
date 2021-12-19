interface msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_Base extends WebEntity {
  activestagestartedon?: Date | null;
  bpf_duration?: number | null;
  bpf_name?: string | null;
  businessprocessflowinstanceid?: string | null;
  completedon?: Date | null;
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_statecode | null;
  statuscode?: msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_statuscode | null;
  timezoneruleversionnumber?: number | null;
  traversedpath?: string | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_Relationships {
  msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_SyncErrors?: SyncError_Result[] | null;
  msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_WorkflowLogs?: WorkflowLog_Result[] | null;
}
interface msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b extends msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_Base, msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_Relationships {
  activestageid_bind$processstages?: string | null;
  bpf_incidentid_bind$incidents?: string | null;
  bpf_msdyn_iotalertid_bind$msdyn_iotalerts?: string | null;
  bpf_msdyn_workorderid_bind$msdyn_workorders?: string | null;
  processid_bind$workflows?: string | null;
}
interface msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_Create extends msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b {
}
interface msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_Update extends msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b {
}
interface msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_Select {
  activestageid_guid: WebAttribute<msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_Select, { activestageid_guid: string | null }, { activestageid_formatted?: string }>;
  activestagestartedon: WebAttribute<msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_Select, { activestagestartedon: Date | null }, { activestagestartedon_formatted?: string }>;
  bpf_duration: WebAttribute<msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_Select, { bpf_duration: number | null }, {  }>;
  bpf_incidentid_guid: WebAttribute<msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_Select, { bpf_incidentid_guid: string | null }, { bpf_incidentid_formatted?: string }>;
  bpf_msdyn_iotalertid_guid: WebAttribute<msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_Select, { bpf_msdyn_iotalertid_guid: string | null }, { bpf_msdyn_iotalertid_formatted?: string }>;
  bpf_msdyn_workorderid_guid: WebAttribute<msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_Select, { bpf_msdyn_workorderid_guid: string | null }, { bpf_msdyn_workorderid_formatted?: string }>;
  bpf_name: WebAttribute<msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_Select, { bpf_name: string | null }, {  }>;
  businessprocessflowinstanceid: WebAttribute<msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_Select, { businessprocessflowinstanceid: string | null }, {  }>;
  completedon: WebAttribute<msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_Select, { completedon: Date | null }, { completedon_formatted?: string }>;
  createdby_guid: WebAttribute<msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  organizationid_guid: WebAttribute<msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  processid_guid: WebAttribute<msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_Select, { processid_guid: string | null }, { processid_formatted?: string }>;
  statecode: WebAttribute<msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_Select, { statecode: msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_Select, { statuscode: msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_Select, { timezoneruleversionnumber: number | null }, {  }>;
  traversedpath: WebAttribute<msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_Select, { traversedpath: string | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_Filter {
  activestageid_guid: XQW.Guid;
  activestagestartedon: Date;
  bpf_duration: number;
  bpf_incidentid_guid: XQW.Guid;
  bpf_msdyn_iotalertid_guid: XQW.Guid;
  bpf_msdyn_workorderid_guid: XQW.Guid;
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
  statecode: msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_statecode;
  statuscode: msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_statuscode;
  timezoneruleversionnumber: number;
  traversedpath: string;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_Expand {
  activestageid: WebExpand<msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_Expand, ProcessStage_Select, ProcessStage_Filter, { activestageid: ProcessStage_Result }>;
  bpf_incidentid: WebExpand<msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_Expand, Incident_Select, Incident_Filter, { bpf_incidentid: Incident_Result }>;
  bpf_msdyn_iotalertid: WebExpand<msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_Expand, msdyn_iotalert_Select, msdyn_iotalert_Filter, { bpf_msdyn_iotalertid: msdyn_iotalert_Result }>;
  bpf_msdyn_workorderid: WebExpand<msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_Expand, msdyn_workorder_Select, msdyn_workorder_Filter, { bpf_msdyn_workorderid: msdyn_workorder_Result }>;
  createdby: WebExpand<msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_AsyncOperations: WebExpand<msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_BulkDeleteFailures: WebExpand<msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_MailboxTrackingFolders: WebExpand<msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_PrincipalObjectAttributeAccesses: WebExpand<msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_ProcessSession: WebExpand<msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_ProcessSession: ProcessSession_Result[] }>;
  msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_SyncErrors: WebExpand<msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_Expand, SyncError_Select, SyncError_Filter, { msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_SyncErrors: SyncError_Result[] }>;
  msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_UserEntityInstanceDatas: WebExpand<msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_WorkflowLogs: WebExpand<msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_Expand, WorkflowLog_Select, WorkflowLog_Filter, { msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_WorkflowLogs: WorkflowLog_Result[] }>;
  organizationid: WebExpand<msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
  processid: WebExpand<msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_Expand, Workflow_Select, Workflow_Filter, { processid: Workflow_Result }>;
}
interface msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_FormattedResult {
  activestageid_formatted?: string;
  activestagestartedon_formatted?: string;
  bpf_incidentid_formatted?: string;
  bpf_msdyn_iotalertid_formatted?: string;
  bpf_msdyn_workorderid_formatted?: string;
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
interface msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_Result extends msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_Base, msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_Relationships {
  "@odata.etag": string;
  activestageid_guid: string | null;
  bpf_incidentid_guid: string | null;
  bpf_msdyn_iotalertid_guid: string | null;
  bpf_msdyn_workorderid_guid: string | null;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
  processid_guid: string | null;
}
interface msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_RelatedOne {
  activestageid: WebMappingRetrieve<ProcessStage_Select,ProcessStage_Expand,ProcessStage_Filter,ProcessStage_Fixed,ProcessStage_Result,ProcessStage_FormattedResult>;
  bpf_incidentid: WebMappingRetrieve<Incident_Select,Incident_Expand,Incident_Filter,Incident_Fixed,Incident_Result,Incident_FormattedResult>;
  bpf_msdyn_iotalertid: WebMappingRetrieve<msdyn_iotalert_Select,msdyn_iotalert_Expand,msdyn_iotalert_Filter,msdyn_iotalert_Fixed,msdyn_iotalert_Result,msdyn_iotalert_FormattedResult>;
  bpf_msdyn_workorderid: WebMappingRetrieve<msdyn_workorder_Select,msdyn_workorder_Expand,msdyn_workorder_Filter,msdyn_workorder_Fixed,msdyn_workorder_Result,msdyn_workorder_FormattedResult>;
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
  processid: WebMappingRetrieve<Workflow_Select,Workflow_Expand,Workflow_Filter,Workflow_Fixed,Workflow_Result,Workflow_FormattedResult>;
}
interface msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_RelatedMany {
  msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_WorkflowLogs: WebMappingRetrieve<WorkflowLog_Select,WorkflowLog_Expand,WorkflowLog_Filter,WorkflowLog_Fixed,WorkflowLog_Result,WorkflowLog_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_bpf_477c16f59170487b8b4dc895c5dcd09bs: WebMappingRetrieve<msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_Select,msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_Expand,msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_Filter,msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_Fixed,msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_Result,msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_bpf_477c16f59170487b8b4dc895c5dcd09bs: WebMappingRelated<msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_RelatedOne,msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_bpf_477c16f59170487b8b4dc895c5dcd09bs: WebMappingCUDA<msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_Create,msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_Update,msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_Select>;
}
