interface LeadToOpportunitySalesProcess_Base extends WebEntity {
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
  statecode?: leadtoopportunitysalesprocess_statecode | null;
  statuscode?: leadtoopportunitysalesprocess_statuscode | null;
  timezoneruleversionnumber?: number | null;
  traversedpath?: string | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface LeadToOpportunitySalesProcess_Relationships {
  LeadToOpportunitySalesProcess_SyncErrors?: SyncError_Result[] | null;
  createdbyname?: SystemUser_Result | null;
  createdonbehalfbyname?: SystemUser_Result | null;
  leadId?: Lead_Result | null;
  leadtoopportunitysalesprocess_AsyncOperations?: AsyncOperation_Result[] | null;
  leadtoopportunitysalesprocess_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  leadtoopportunitysalesprocess_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  leadtoopportunitysalesprocess_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  leadtoopportunitysalesprocess_ProcessSession?: ProcessSession_Result[] | null;
  leadtoopportunitysalesprocess_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  modifiedbyname?: SystemUser_Result | null;
  modifiedonbehalfbyname?: SystemUser_Result | null;
  opportunityId?: Opportunity_Result | null;
  workflowlogs_leadtoopportunitysalesprocess?: WorkflowLog_Result[] | null;
}
interface LeadToOpportunitySalesProcess extends LeadToOpportunitySalesProcess_Base, LeadToOpportunitySalesProcess_Relationships {
  activestageid_bind$processstages?: string | null;
  leadId_bind$leads?: string | null;
  opportunityId_bind$opportunities?: string | null;
  processid_bind$workflows?: string | null;
  transactioncurrencyid_bind$transactioncurrencies?: string | null;
}
interface LeadToOpportunitySalesProcess_Create extends LeadToOpportunitySalesProcess {
}
interface LeadToOpportunitySalesProcess_Update extends LeadToOpportunitySalesProcess {
}
interface LeadToOpportunitySalesProcess_Select {
  activestageid_guid: WebAttribute<LeadToOpportunitySalesProcess_Select, { activestageid_guid: string | null }, { activestageid_formatted?: string }>;
  activestagestartedon: WebAttribute<LeadToOpportunitySalesProcess_Select, { activestagestartedon: Date | null }, { activestagestartedon_formatted?: string }>;
  businessprocessflowinstanceid: WebAttribute<LeadToOpportunitySalesProcess_Select, { businessprocessflowinstanceid: string | null }, {  }>;
  completedon: WebAttribute<LeadToOpportunitySalesProcess_Select, { completedon: Date | null }, { completedon_formatted?: string }>;
  createdby_guid: WebAttribute<LeadToOpportunitySalesProcess_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<LeadToOpportunitySalesProcess_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<LeadToOpportunitySalesProcess_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  duration: WebAttribute<LeadToOpportunitySalesProcess_Select, { duration: number | null }, {  }>;
  exchangerate: WebAttribute<LeadToOpportunitySalesProcess_Select, { exchangerate: number | null }, {  }>;
  importsequencenumber: WebAttribute<LeadToOpportunitySalesProcess_Select, { importsequencenumber: number | null }, {  }>;
  leadid_guid: WebAttribute<LeadToOpportunitySalesProcess_Select, { leadid_guid: string | null }, { leadid_formatted?: string }>;
  modifiedby_guid: WebAttribute<LeadToOpportunitySalesProcess_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<LeadToOpportunitySalesProcess_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<LeadToOpportunitySalesProcess_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  name: WebAttribute<LeadToOpportunitySalesProcess_Select, { name: string | null }, {  }>;
  opportunityid_guid: WebAttribute<LeadToOpportunitySalesProcess_Select, { opportunityid_guid: string | null }, { opportunityid_formatted?: string }>;
  organizationid_guid: WebAttribute<LeadToOpportunitySalesProcess_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overriddencreatedon: WebAttribute<LeadToOpportunitySalesProcess_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  processid_guid: WebAttribute<LeadToOpportunitySalesProcess_Select, { processid_guid: string | null }, { processid_formatted?: string }>;
  statecode: WebAttribute<LeadToOpportunitySalesProcess_Select, { statecode: leadtoopportunitysalesprocess_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<LeadToOpportunitySalesProcess_Select, { statuscode: leadtoopportunitysalesprocess_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<LeadToOpportunitySalesProcess_Select, { timezoneruleversionnumber: number | null }, {  }>;
  transactioncurrencyid_guid: WebAttribute<LeadToOpportunitySalesProcess_Select, { transactioncurrencyid_guid: string | null }, { transactioncurrencyid_formatted?: string }>;
  traversedpath: WebAttribute<LeadToOpportunitySalesProcess_Select, { traversedpath: string | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<LeadToOpportunitySalesProcess_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<LeadToOpportunitySalesProcess_Select, { versionnumber: number | null }, {  }>;
}
interface LeadToOpportunitySalesProcess_Filter {
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
  leadid_guid: XQW.Guid;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  name: string;
  opportunityid_guid: XQW.Guid;
  organizationid_guid: XQW.Guid;
  overriddencreatedon: Date;
  processid_guid: XQW.Guid;
  statecode: leadtoopportunitysalesprocess_statecode;
  statuscode: leadtoopportunitysalesprocess_statuscode;
  timezoneruleversionnumber: number;
  transactioncurrencyid_guid: XQW.Guid;
  traversedpath: string;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface LeadToOpportunitySalesProcess_Expand {
  LeadToOpportunitySalesProcess_SyncErrors: WebExpand<LeadToOpportunitySalesProcess_Expand, SyncError_Select, SyncError_Filter, { LeadToOpportunitySalesProcess_SyncErrors: SyncError_Result[] }>;
  activestageid: WebExpand<LeadToOpportunitySalesProcess_Expand, ProcessStage_Select, ProcessStage_Filter, { activestageid: ProcessStage_Result }>;
  createdbyname: WebExpand<LeadToOpportunitySalesProcess_Expand, SystemUser_Select, SystemUser_Filter, { createdbyname: SystemUser_Result }>;
  createdonbehalfbyname: WebExpand<LeadToOpportunitySalesProcess_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfbyname: SystemUser_Result }>;
  leadId: WebExpand<LeadToOpportunitySalesProcess_Expand, Lead_Select, Lead_Filter, { leadId: Lead_Result }>;
  leadtoopportunitysalesprocess_AsyncOperations: WebExpand<LeadToOpportunitySalesProcess_Expand, AsyncOperation_Select, AsyncOperation_Filter, { leadtoopportunitysalesprocess_AsyncOperations: AsyncOperation_Result[] }>;
  leadtoopportunitysalesprocess_BulkDeleteFailures: WebExpand<LeadToOpportunitySalesProcess_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { leadtoopportunitysalesprocess_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  leadtoopportunitysalesprocess_MailboxTrackingFolders: WebExpand<LeadToOpportunitySalesProcess_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { leadtoopportunitysalesprocess_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  leadtoopportunitysalesprocess_PrincipalObjectAttributeAccesses: WebExpand<LeadToOpportunitySalesProcess_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { leadtoopportunitysalesprocess_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  leadtoopportunitysalesprocess_ProcessSession: WebExpand<LeadToOpportunitySalesProcess_Expand, ProcessSession_Select, ProcessSession_Filter, { leadtoopportunitysalesprocess_ProcessSession: ProcessSession_Result[] }>;
  leadtoopportunitysalesprocess_UserEntityInstanceDatas: WebExpand<LeadToOpportunitySalesProcess_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { leadtoopportunitysalesprocess_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  modifiedbyname: WebExpand<LeadToOpportunitySalesProcess_Expand, SystemUser_Select, SystemUser_Filter, { modifiedbyname: SystemUser_Result }>;
  modifiedonbehalfbyname: WebExpand<LeadToOpportunitySalesProcess_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfbyname: SystemUser_Result }>;
  opportunityId: WebExpand<LeadToOpportunitySalesProcess_Expand, Opportunity_Select, Opportunity_Filter, { opportunityId: Opportunity_Result }>;
  organizationid: WebExpand<LeadToOpportunitySalesProcess_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
  processid: WebExpand<LeadToOpportunitySalesProcess_Expand, Workflow_Select, Workflow_Filter, { processid: Workflow_Result }>;
  transactioncurrencyid: WebExpand<LeadToOpportunitySalesProcess_Expand, TransactionCurrency_Select, TransactionCurrency_Filter, { transactioncurrencyid: TransactionCurrency_Result }>;
  workflowlogs_leadtoopportunitysalesprocess: WebExpand<LeadToOpportunitySalesProcess_Expand, WorkflowLog_Select, WorkflowLog_Filter, { workflowlogs_leadtoopportunitysalesprocess: WorkflowLog_Result[] }>;
}
interface LeadToOpportunitySalesProcess_FormattedResult {
  activestageid_formatted?: string;
  activestagestartedon_formatted?: string;
  completedon_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  leadid_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  opportunityid_formatted?: string;
  organizationid_formatted?: string;
  overriddencreatedon_formatted?: string;
  processid_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
  transactioncurrencyid_formatted?: string;
}
interface LeadToOpportunitySalesProcess_Result extends LeadToOpportunitySalesProcess_Base, LeadToOpportunitySalesProcess_Relationships {
  "@odata.etag": string;
  activestageid_guid: string | null;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  leadid_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  opportunityid_guid: string | null;
  organizationid_guid: string | null;
  processid_guid: string | null;
  transactioncurrencyid_guid: string | null;
}
interface LeadToOpportunitySalesProcess_RelatedOne {
  activestageid: WebMappingRetrieve<ProcessStage_Select,ProcessStage_Expand,ProcessStage_Filter,ProcessStage_Fixed,ProcessStage_Result,ProcessStage_FormattedResult>;
  createdbyname: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfbyname: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  leadId: WebMappingRetrieve<Lead_Select,Lead_Expand,Lead_Filter,Lead_Fixed,Lead_Result,Lead_FormattedResult>;
  modifiedbyname: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfbyname: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  opportunityId: WebMappingRetrieve<Opportunity_Select,Opportunity_Expand,Opportunity_Filter,Opportunity_Fixed,Opportunity_Result,Opportunity_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
  processid: WebMappingRetrieve<Workflow_Select,Workflow_Expand,Workflow_Filter,Workflow_Fixed,Workflow_Result,Workflow_FormattedResult>;
  transactioncurrencyid: WebMappingRetrieve<TransactionCurrency_Select,TransactionCurrency_Expand,TransactionCurrency_Filter,TransactionCurrency_Fixed,TransactionCurrency_Result,TransactionCurrency_FormattedResult>;
}
interface LeadToOpportunitySalesProcess_RelatedMany {
  LeadToOpportunitySalesProcess_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  leadtoopportunitysalesprocess_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  leadtoopportunitysalesprocess_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  leadtoopportunitysalesprocess_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  leadtoopportunitysalesprocess_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  leadtoopportunitysalesprocess_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  leadtoopportunitysalesprocess_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  workflowlogs_leadtoopportunitysalesprocess: WebMappingRetrieve<WorkflowLog_Select,WorkflowLog_Expand,WorkflowLog_Filter,WorkflowLog_Fixed,WorkflowLog_Result,WorkflowLog_FormattedResult>;
}
interface WebEntitiesRetrieve {
  leadtoopportunitysalesprocesses: WebMappingRetrieve<LeadToOpportunitySalesProcess_Select,LeadToOpportunitySalesProcess_Expand,LeadToOpportunitySalesProcess_Filter,LeadToOpportunitySalesProcess_Fixed,LeadToOpportunitySalesProcess_Result,LeadToOpportunitySalesProcess_FormattedResult>;
}
interface WebEntitiesRelated {
  leadtoopportunitysalesprocesses: WebMappingRelated<LeadToOpportunitySalesProcess_RelatedOne,LeadToOpportunitySalesProcess_RelatedMany>;
}
interface WebEntitiesCUDA {
  leadtoopportunitysalesprocesses: WebMappingCUDA<LeadToOpportunitySalesProcess_Create,LeadToOpportunitySalesProcess_Update,LeadToOpportunitySalesProcess_Select>;
}
