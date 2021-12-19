interface PhoneToCaseProcess_Base extends WebEntity {
  activestagestartedon?: Date | null;
  businessprocessflowinstanceid?: string | null;
  completedon?: Date | null;
  createdon?: Date | null;
  duration?: number | null;
  exchangerate?: number | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  name?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: phonetocaseprocess_statecode | null;
  statuscode?: phonetocaseprocess_statuscode | null;
  timezoneruleversionnumber?: number | null;
  traversedpath?: string | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface PhoneToCaseProcess_Relationships {
  PhoneToCaseProcess_SyncErrors?: SyncError_Result[] | null;
  createdbyname?: SystemUser_Result | null;
  createdonbehalfbyname?: SystemUser_Result | null;
  modifiedbyname?: SystemUser_Result | null;
  modifiedonbehalfbyname?: SystemUser_Result | null;
  phonetocaseprocess_AsyncOperations?: AsyncOperation_Result[] | null;
  phonetocaseprocess_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  phonetocaseprocess_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  phonetocaseprocess_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  phonetocaseprocess_ProcessSession?: ProcessSession_Result[] | null;
  phonetocaseprocess_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  workflowlogs_phonetocaseprocess?: WorkflowLog_Result[] | null;
}
interface PhoneToCaseProcess extends PhoneToCaseProcess_Base, PhoneToCaseProcess_Relationships {
  activestageid_bind$processstages?: string | null;
  incidentid_bind$incidents?: string | null;
  processid_bind$workflows?: string | null;
  transactioncurrencyid_bind$transactioncurrencies?: string | null;
}
interface PhoneToCaseProcess_Create extends PhoneToCaseProcess {
}
interface PhoneToCaseProcess_Update extends PhoneToCaseProcess {
}
interface PhoneToCaseProcess_Select {
  activestageid_guid: WebAttribute<PhoneToCaseProcess_Select, { activestageid_guid: string | null }, { activestageid_formatted?: string }>;
  activestagestartedon: WebAttribute<PhoneToCaseProcess_Select, { activestagestartedon: Date | null }, { activestagestartedon_formatted?: string }>;
  businessprocessflowinstanceid: WebAttribute<PhoneToCaseProcess_Select, { businessprocessflowinstanceid: string | null }, {  }>;
  completedon: WebAttribute<PhoneToCaseProcess_Select, { completedon: Date | null }, { completedon_formatted?: string }>;
  createdby_guid: WebAttribute<PhoneToCaseProcess_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<PhoneToCaseProcess_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<PhoneToCaseProcess_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  duration: WebAttribute<PhoneToCaseProcess_Select, { duration: number | null }, {  }>;
  exchangerate: WebAttribute<PhoneToCaseProcess_Select, { exchangerate: number | null }, {  }>;
  importsequencenumber: WebAttribute<PhoneToCaseProcess_Select, { importsequencenumber: number | null }, {  }>;
  incidentid_guid: WebAttribute<PhoneToCaseProcess_Select, { incidentid_guid: string | null }, { incidentid_formatted?: string }>;
  modifiedby_guid: WebAttribute<PhoneToCaseProcess_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<PhoneToCaseProcess_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<PhoneToCaseProcess_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  name: WebAttribute<PhoneToCaseProcess_Select, { name: string | null }, {  }>;
  organizationid_guid: WebAttribute<PhoneToCaseProcess_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overriddencreatedon: WebAttribute<PhoneToCaseProcess_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  processid_guid: WebAttribute<PhoneToCaseProcess_Select, { processid_guid: string | null }, { processid_formatted?: string }>;
  statecode: WebAttribute<PhoneToCaseProcess_Select, { statecode: phonetocaseprocess_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<PhoneToCaseProcess_Select, { statuscode: phonetocaseprocess_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<PhoneToCaseProcess_Select, { timezoneruleversionnumber: number | null }, {  }>;
  transactioncurrencyid_guid: WebAttribute<PhoneToCaseProcess_Select, { transactioncurrencyid_guid: string | null }, { transactioncurrencyid_formatted?: string }>;
  traversedpath: WebAttribute<PhoneToCaseProcess_Select, { traversedpath: string | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<PhoneToCaseProcess_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<PhoneToCaseProcess_Select, { versionnumber: number | null }, {  }>;
}
interface PhoneToCaseProcess_Filter {
  activestageid_guid: XQW.Guid;
  activestagestartedon: Date;
  businessprocessflowinstanceid: XQW.Guid;
  completedon: Date;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  duration: number;
  exchangerate: any;
  importsequencenumber: number;
  incidentid_guid: XQW.Guid;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  name: string;
  organizationid_guid: XQW.Guid;
  overriddencreatedon: Date;
  processid_guid: XQW.Guid;
  statecode: phonetocaseprocess_statecode;
  statuscode: phonetocaseprocess_statuscode;
  timezoneruleversionnumber: number;
  transactioncurrencyid_guid: XQW.Guid;
  traversedpath: string;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface PhoneToCaseProcess_Expand {
  PhoneToCaseProcess_SyncErrors: WebExpand<PhoneToCaseProcess_Expand, SyncError_Select, SyncError_Filter, { PhoneToCaseProcess_SyncErrors: SyncError_Result[] }>;
  activestageid: WebExpand<PhoneToCaseProcess_Expand, ProcessStage_Select, ProcessStage_Filter, { activestageid: ProcessStage_Result }>;
  createdbyname: WebExpand<PhoneToCaseProcess_Expand, SystemUser_Select, SystemUser_Filter, { createdbyname: SystemUser_Result }>;
  createdonbehalfbyname: WebExpand<PhoneToCaseProcess_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfbyname: SystemUser_Result }>;
  incidentid: WebExpand<PhoneToCaseProcess_Expand, Incident_Select, Incident_Filter, { incidentid: Incident_Result }>;
  modifiedbyname: WebExpand<PhoneToCaseProcess_Expand, SystemUser_Select, SystemUser_Filter, { modifiedbyname: SystemUser_Result }>;
  modifiedonbehalfbyname: WebExpand<PhoneToCaseProcess_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfbyname: SystemUser_Result }>;
  organizationid: WebExpand<PhoneToCaseProcess_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
  phonetocaseprocess_AsyncOperations: WebExpand<PhoneToCaseProcess_Expand, AsyncOperation_Select, AsyncOperation_Filter, { phonetocaseprocess_AsyncOperations: AsyncOperation_Result[] }>;
  phonetocaseprocess_BulkDeleteFailures: WebExpand<PhoneToCaseProcess_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { phonetocaseprocess_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  phonetocaseprocess_MailboxTrackingFolders: WebExpand<PhoneToCaseProcess_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { phonetocaseprocess_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  phonetocaseprocess_PrincipalObjectAttributeAccesses: WebExpand<PhoneToCaseProcess_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { phonetocaseprocess_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  phonetocaseprocess_ProcessSession: WebExpand<PhoneToCaseProcess_Expand, ProcessSession_Select, ProcessSession_Filter, { phonetocaseprocess_ProcessSession: ProcessSession_Result[] }>;
  phonetocaseprocess_UserEntityInstanceDatas: WebExpand<PhoneToCaseProcess_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { phonetocaseprocess_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  processid: WebExpand<PhoneToCaseProcess_Expand, Workflow_Select, Workflow_Filter, { processid: Workflow_Result }>;
  transactioncurrencyid: WebExpand<PhoneToCaseProcess_Expand, TransactionCurrency_Select, TransactionCurrency_Filter, { transactioncurrencyid: TransactionCurrency_Result }>;
  workflowlogs_phonetocaseprocess: WebExpand<PhoneToCaseProcess_Expand, WorkflowLog_Select, WorkflowLog_Filter, { workflowlogs_phonetocaseprocess: WorkflowLog_Result[] }>;
}
interface PhoneToCaseProcess_FormattedResult {
  activestageid_formatted?: string;
  activestagestartedon_formatted?: string;
  completedon_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  incidentid_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  organizationid_formatted?: string;
  overriddencreatedon_formatted?: string;
  processid_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
  transactioncurrencyid_formatted?: string;
}
interface PhoneToCaseProcess_Result extends PhoneToCaseProcess_Base, PhoneToCaseProcess_Relationships {
  "@odata.etag": string;
  activestageid_guid: string | null;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  incidentid_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
  processid_guid: string | null;
  transactioncurrencyid_guid: string | null;
}
interface PhoneToCaseProcess_RelatedOne {
  activestageid: WebMappingRetrieve<ProcessStage_Select,ProcessStage_Expand,ProcessStage_Filter,ProcessStage_Fixed,ProcessStage_Result,ProcessStage_FormattedResult>;
  createdbyname: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfbyname: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  incidentid: WebMappingRetrieve<Incident_Select,Incident_Expand,Incident_Filter,Incident_Fixed,Incident_Result,Incident_FormattedResult>;
  modifiedbyname: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfbyname: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
  processid: WebMappingRetrieve<Workflow_Select,Workflow_Expand,Workflow_Filter,Workflow_Fixed,Workflow_Result,Workflow_FormattedResult>;
  transactioncurrencyid: WebMappingRetrieve<TransactionCurrency_Select,TransactionCurrency_Expand,TransactionCurrency_Filter,TransactionCurrency_Fixed,TransactionCurrency_Result,TransactionCurrency_FormattedResult>;
}
interface PhoneToCaseProcess_RelatedMany {
  PhoneToCaseProcess_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  phonetocaseprocess_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  phonetocaseprocess_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  phonetocaseprocess_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  phonetocaseprocess_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  phonetocaseprocess_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  phonetocaseprocess_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  workflowlogs_phonetocaseprocess: WebMappingRetrieve<WorkflowLog_Select,WorkflowLog_Expand,WorkflowLog_Filter,WorkflowLog_Fixed,WorkflowLog_Result,WorkflowLog_FormattedResult>;
}
interface WebEntitiesRetrieve {
  phonetocaseprocesses: WebMappingRetrieve<PhoneToCaseProcess_Select,PhoneToCaseProcess_Expand,PhoneToCaseProcess_Filter,PhoneToCaseProcess_Fixed,PhoneToCaseProcess_Result,PhoneToCaseProcess_FormattedResult>;
}
interface WebEntitiesRelated {
  phonetocaseprocesses: WebMappingRelated<PhoneToCaseProcess_RelatedOne,PhoneToCaseProcess_RelatedMany>;
}
interface WebEntitiesCUDA {
  phonetocaseprocesses: WebMappingCUDA<PhoneToCaseProcess_Create,PhoneToCaseProcess_Update,PhoneToCaseProcess_Select>;
}
