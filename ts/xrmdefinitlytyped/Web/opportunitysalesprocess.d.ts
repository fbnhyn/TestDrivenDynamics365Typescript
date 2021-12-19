interface OpportunitySalesProcess_Base extends WebEntity {
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
  statecode?: opportunitysalesprocess_statecode | null;
  statuscode?: opportunitysalesprocess_statuscode | null;
  timezoneruleversionnumber?: number | null;
  traversedpath?: string | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface OpportunitySalesProcess_Relationships {
  OpportunitySalesProcess_SyncErrors?: SyncError_Result[] | null;
  createdbyname?: SystemUser_Result | null;
  createdonbehalfbyname?: SystemUser_Result | null;
  modifiedbyname?: SystemUser_Result | null;
  modifiedonbehalfbyname?: SystemUser_Result | null;
  opportunitysalesprocess_AsyncOperations?: AsyncOperation_Result[] | null;
  opportunitysalesprocess_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  opportunitysalesprocess_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  opportunitysalesprocess_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  opportunitysalesprocess_ProcessSession?: ProcessSession_Result[] | null;
  opportunitysalesprocess_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  workflowlogs_opportunitysalesprocess?: WorkflowLog_Result[] | null;
}
interface OpportunitySalesProcess extends OpportunitySalesProcess_Base, OpportunitySalesProcess_Relationships {
  activestageid_bind$processstages?: string | null;
  bpf_quoteid_bind$quotes?: string | null;
  bpf_salesorderid_bind$salesorders?: string | null;
  opportunityid_bind$opportunities?: string | null;
  processid_bind$workflows?: string | null;
  quoteid_bind$quotes?: string | null;
  salesorderid_bind$salesorders?: string | null;
  transactioncurrencyid_bind$transactioncurrencies?: string | null;
}
interface OpportunitySalesProcess_Create extends OpportunitySalesProcess {
}
interface OpportunitySalesProcess_Update extends OpportunitySalesProcess {
}
interface OpportunitySalesProcess_Select {
  activestageid_guid: WebAttribute<OpportunitySalesProcess_Select, { activestageid_guid: string | null }, { activestageid_formatted?: string }>;
  activestagestartedon: WebAttribute<OpportunitySalesProcess_Select, { activestagestartedon: Date | null }, { activestagestartedon_formatted?: string }>;
  bpf_quoteid_guid: WebAttribute<OpportunitySalesProcess_Select, { bpf_quoteid_guid: string | null }, { bpf_quoteid_formatted?: string }>;
  bpf_salesorderid_guid: WebAttribute<OpportunitySalesProcess_Select, { bpf_salesorderid_guid: string | null }, { bpf_salesorderid_formatted?: string }>;
  businessprocessflowinstanceid: WebAttribute<OpportunitySalesProcess_Select, { businessprocessflowinstanceid: string | null }, {  }>;
  completedon: WebAttribute<OpportunitySalesProcess_Select, { completedon: Date | null }, { completedon_formatted?: string }>;
  createdby_guid: WebAttribute<OpportunitySalesProcess_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<OpportunitySalesProcess_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<OpportunitySalesProcess_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  duration: WebAttribute<OpportunitySalesProcess_Select, { duration: number | null }, {  }>;
  exchangerate: WebAttribute<OpportunitySalesProcess_Select, { exchangerate: number | null }, {  }>;
  importsequencenumber: WebAttribute<OpportunitySalesProcess_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<OpportunitySalesProcess_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<OpportunitySalesProcess_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<OpportunitySalesProcess_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  name: WebAttribute<OpportunitySalesProcess_Select, { name: string | null }, {  }>;
  opportunityid_guid: WebAttribute<OpportunitySalesProcess_Select, { opportunityid_guid: string | null }, { opportunityid_formatted?: string }>;
  organizationid_guid: WebAttribute<OpportunitySalesProcess_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overriddencreatedon: WebAttribute<OpportunitySalesProcess_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  processid_guid: WebAttribute<OpportunitySalesProcess_Select, { processid_guid: string | null }, { processid_formatted?: string }>;
  quoteid_guid: WebAttribute<OpportunitySalesProcess_Select, { quoteid_guid: string | null }, { quoteid_formatted?: string }>;
  salesorderid_guid: WebAttribute<OpportunitySalesProcess_Select, { salesorderid_guid: string | null }, { salesorderid_formatted?: string }>;
  statecode: WebAttribute<OpportunitySalesProcess_Select, { statecode: opportunitysalesprocess_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<OpportunitySalesProcess_Select, { statuscode: opportunitysalesprocess_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<OpportunitySalesProcess_Select, { timezoneruleversionnumber: number | null }, {  }>;
  transactioncurrencyid_guid: WebAttribute<OpportunitySalesProcess_Select, { transactioncurrencyid_guid: string | null }, { transactioncurrencyid_formatted?: string }>;
  traversedpath: WebAttribute<OpportunitySalesProcess_Select, { traversedpath: string | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<OpportunitySalesProcess_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<OpportunitySalesProcess_Select, { versionnumber: number | null }, {  }>;
}
interface OpportunitySalesProcess_Filter {
  activestageid_guid: XQW.Guid;
  activestagestartedon: Date;
  bpf_quoteid_guid: XQW.Guid;
  bpf_salesorderid_guid: XQW.Guid;
  businessprocessflowinstanceid: XQW.Guid;
  completedon: Date;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  duration: number;
  exchangerate: any;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  name: string;
  opportunityid_guid: XQW.Guid;
  organizationid_guid: XQW.Guid;
  overriddencreatedon: Date;
  processid_guid: XQW.Guid;
  quoteid_guid: XQW.Guid;
  salesorderid_guid: XQW.Guid;
  statecode: opportunitysalesprocess_statecode;
  statuscode: opportunitysalesprocess_statuscode;
  timezoneruleversionnumber: number;
  transactioncurrencyid_guid: XQW.Guid;
  traversedpath: string;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface OpportunitySalesProcess_Expand {
  OpportunitySalesProcess_SyncErrors: WebExpand<OpportunitySalesProcess_Expand, SyncError_Select, SyncError_Filter, { OpportunitySalesProcess_SyncErrors: SyncError_Result[] }>;
  activestageid: WebExpand<OpportunitySalesProcess_Expand, ProcessStage_Select, ProcessStage_Filter, { activestageid: ProcessStage_Result }>;
  bpf_quoteid: WebExpand<OpportunitySalesProcess_Expand, Quote_Select, Quote_Filter, { bpf_quoteid: Quote_Result }>;
  bpf_salesorderid: WebExpand<OpportunitySalesProcess_Expand, SalesOrder_Select, SalesOrder_Filter, { bpf_salesorderid: SalesOrder_Result }>;
  createdbyname: WebExpand<OpportunitySalesProcess_Expand, SystemUser_Select, SystemUser_Filter, { createdbyname: SystemUser_Result }>;
  createdonbehalfbyname: WebExpand<OpportunitySalesProcess_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfbyname: SystemUser_Result }>;
  modifiedbyname: WebExpand<OpportunitySalesProcess_Expand, SystemUser_Select, SystemUser_Filter, { modifiedbyname: SystemUser_Result }>;
  modifiedonbehalfbyname: WebExpand<OpportunitySalesProcess_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfbyname: SystemUser_Result }>;
  opportunityid: WebExpand<OpportunitySalesProcess_Expand, Opportunity_Select, Opportunity_Filter, { opportunityid: Opportunity_Result }>;
  opportunitysalesprocess_AsyncOperations: WebExpand<OpportunitySalesProcess_Expand, AsyncOperation_Select, AsyncOperation_Filter, { opportunitysalesprocess_AsyncOperations: AsyncOperation_Result[] }>;
  opportunitysalesprocess_BulkDeleteFailures: WebExpand<OpportunitySalesProcess_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { opportunitysalesprocess_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  opportunitysalesprocess_MailboxTrackingFolders: WebExpand<OpportunitySalesProcess_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { opportunitysalesprocess_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  opportunitysalesprocess_PrincipalObjectAttributeAccesses: WebExpand<OpportunitySalesProcess_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { opportunitysalesprocess_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  opportunitysalesprocess_ProcessSession: WebExpand<OpportunitySalesProcess_Expand, ProcessSession_Select, ProcessSession_Filter, { opportunitysalesprocess_ProcessSession: ProcessSession_Result[] }>;
  opportunitysalesprocess_UserEntityInstanceDatas: WebExpand<OpportunitySalesProcess_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { opportunitysalesprocess_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  organizationid: WebExpand<OpportunitySalesProcess_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
  processid: WebExpand<OpportunitySalesProcess_Expand, Workflow_Select, Workflow_Filter, { processid: Workflow_Result }>;
  quoteid: WebExpand<OpportunitySalesProcess_Expand, Quote_Select, Quote_Filter, { quoteid: Quote_Result }>;
  salesorderid: WebExpand<OpportunitySalesProcess_Expand, SalesOrder_Select, SalesOrder_Filter, { salesorderid: SalesOrder_Result }>;
  transactioncurrencyid: WebExpand<OpportunitySalesProcess_Expand, TransactionCurrency_Select, TransactionCurrency_Filter, { transactioncurrencyid: TransactionCurrency_Result }>;
  workflowlogs_opportunitysalesprocess: WebExpand<OpportunitySalesProcess_Expand, WorkflowLog_Select, WorkflowLog_Filter, { workflowlogs_opportunitysalesprocess: WorkflowLog_Result[] }>;
}
interface OpportunitySalesProcess_FormattedResult {
  activestageid_formatted?: string;
  activestagestartedon_formatted?: string;
  bpf_quoteid_formatted?: string;
  bpf_salesorderid_formatted?: string;
  completedon_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  opportunityid_formatted?: string;
  organizationid_formatted?: string;
  overriddencreatedon_formatted?: string;
  processid_formatted?: string;
  quoteid_formatted?: string;
  salesorderid_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
  transactioncurrencyid_formatted?: string;
}
interface OpportunitySalesProcess_Result extends OpportunitySalesProcess_Base, OpportunitySalesProcess_Relationships {
  "@odata.etag": string;
  activestageid_guid: string | null;
  bpf_quoteid_guid: string | null;
  bpf_salesorderid_guid: string | null;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  opportunityid_guid: string | null;
  organizationid_guid: string | null;
  processid_guid: string | null;
  quoteid_guid: string | null;
  salesorderid_guid: string | null;
  transactioncurrencyid_guid: string | null;
}
interface OpportunitySalesProcess_RelatedOne {
  activestageid: WebMappingRetrieve<ProcessStage_Select,ProcessStage_Expand,ProcessStage_Filter,ProcessStage_Fixed,ProcessStage_Result,ProcessStage_FormattedResult>;
  bpf_quoteid: WebMappingRetrieve<Quote_Select,Quote_Expand,Quote_Filter,Quote_Fixed,Quote_Result,Quote_FormattedResult>;
  bpf_salesorderid: WebMappingRetrieve<SalesOrder_Select,SalesOrder_Expand,SalesOrder_Filter,SalesOrder_Fixed,SalesOrder_Result,SalesOrder_FormattedResult>;
  createdbyname: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfbyname: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedbyname: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfbyname: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  opportunityid: WebMappingRetrieve<Opportunity_Select,Opportunity_Expand,Opportunity_Filter,Opportunity_Fixed,Opportunity_Result,Opportunity_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
  processid: WebMappingRetrieve<Workflow_Select,Workflow_Expand,Workflow_Filter,Workflow_Fixed,Workflow_Result,Workflow_FormattedResult>;
  quoteid: WebMappingRetrieve<Quote_Select,Quote_Expand,Quote_Filter,Quote_Fixed,Quote_Result,Quote_FormattedResult>;
  salesorderid: WebMappingRetrieve<SalesOrder_Select,SalesOrder_Expand,SalesOrder_Filter,SalesOrder_Fixed,SalesOrder_Result,SalesOrder_FormattedResult>;
  transactioncurrencyid: WebMappingRetrieve<TransactionCurrency_Select,TransactionCurrency_Expand,TransactionCurrency_Filter,TransactionCurrency_Fixed,TransactionCurrency_Result,TransactionCurrency_FormattedResult>;
}
interface OpportunitySalesProcess_RelatedMany {
  OpportunitySalesProcess_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  opportunitysalesprocess_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  opportunitysalesprocess_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  opportunitysalesprocess_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  opportunitysalesprocess_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  opportunitysalesprocess_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  opportunitysalesprocess_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  workflowlogs_opportunitysalesprocess: WebMappingRetrieve<WorkflowLog_Select,WorkflowLog_Expand,WorkflowLog_Filter,WorkflowLog_Fixed,WorkflowLog_Result,WorkflowLog_FormattedResult>;
}
interface WebEntitiesRetrieve {
  opportunitysalesprocesses: WebMappingRetrieve<OpportunitySalesProcess_Select,OpportunitySalesProcess_Expand,OpportunitySalesProcess_Filter,OpportunitySalesProcess_Fixed,OpportunitySalesProcess_Result,OpportunitySalesProcess_FormattedResult>;
}
interface WebEntitiesRelated {
  opportunitysalesprocesses: WebMappingRelated<OpportunitySalesProcess_RelatedOne,OpportunitySalesProcess_RelatedMany>;
}
interface WebEntitiesCUDA {
  opportunitysalesprocesses: WebMappingCUDA<OpportunitySalesProcess_Create,OpportunitySalesProcess_Update,OpportunitySalesProcess_Select>;
}
