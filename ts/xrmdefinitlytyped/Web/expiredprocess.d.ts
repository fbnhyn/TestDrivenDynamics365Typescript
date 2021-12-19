interface ExpiredProcess_Base extends WebEntity {
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
  statecode?: expiredprocess_statecode | null;
  statuscode?: expiredprocess_statuscode | null;
  traversedpath?: string | null;
  versionnumber?: number | null;
}
interface ExpiredProcess_Relationships {
  ExpiredProcess_ProcessSessions?: ProcessSession_Result[] | null;
  ExpiredProcess_SyncErrors?: SyncError_Result[] | null;
  createdbyname?: SystemUser_Result | null;
  createdonbehalfbyname?: SystemUser_Result | null;
  modifiedbyname?: SystemUser_Result | null;
  modifiedonbehalfbyname?: SystemUser_Result | null;
  workflowlogs_expiredprocess?: WorkflowLog_Result[] | null;
}
interface ExpiredProcess extends ExpiredProcess_Base, ExpiredProcess_Relationships {
  activestageid_bind$processstages?: string | null;
  knowledgearticleid_bind$knowledgearticles?: string | null;
  processid_bind$workflows?: string | null;
  transactioncurrencyid_bind$transactioncurrencies?: string | null;
}
interface ExpiredProcess_Create extends ExpiredProcess {
}
interface ExpiredProcess_Update extends ExpiredProcess {
}
interface ExpiredProcess_Select {
  activestageid_guid: WebAttribute<ExpiredProcess_Select, { activestageid_guid: string | null }, { activestageid_formatted?: string }>;
  activestagestartedon: WebAttribute<ExpiredProcess_Select, { activestagestartedon: Date | null }, { activestagestartedon_formatted?: string }>;
  businessprocessflowinstanceid: WebAttribute<ExpiredProcess_Select, { businessprocessflowinstanceid: string | null }, {  }>;
  completedon: WebAttribute<ExpiredProcess_Select, { completedon: Date | null }, { completedon_formatted?: string }>;
  createdby_guid: WebAttribute<ExpiredProcess_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<ExpiredProcess_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<ExpiredProcess_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  duration: WebAttribute<ExpiredProcess_Select, { duration: number | null }, {  }>;
  exchangerate: WebAttribute<ExpiredProcess_Select, { exchangerate: number | null }, {  }>;
  importsequencenumber: WebAttribute<ExpiredProcess_Select, { importsequencenumber: number | null }, {  }>;
  knowledgearticleid_guid: WebAttribute<ExpiredProcess_Select, { knowledgearticleid_guid: string | null }, { knowledgearticleid_formatted?: string }>;
  modifiedby_guid: WebAttribute<ExpiredProcess_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<ExpiredProcess_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<ExpiredProcess_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  name: WebAttribute<ExpiredProcess_Select, { name: string | null }, {  }>;
  organizationid_guid: WebAttribute<ExpiredProcess_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overriddencreatedon: WebAttribute<ExpiredProcess_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  processid_guid: WebAttribute<ExpiredProcess_Select, { processid_guid: string | null }, { processid_formatted?: string }>;
  statecode: WebAttribute<ExpiredProcess_Select, { statecode: expiredprocess_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<ExpiredProcess_Select, { statuscode: expiredprocess_statuscode | null }, { statuscode_formatted?: string }>;
  transactioncurrencyid_guid: WebAttribute<ExpiredProcess_Select, { transactioncurrencyid_guid: string | null }, { transactioncurrencyid_formatted?: string }>;
  traversedpath: WebAttribute<ExpiredProcess_Select, { traversedpath: string | null }, {  }>;
  versionnumber: WebAttribute<ExpiredProcess_Select, { versionnumber: number | null }, {  }>;
}
interface ExpiredProcess_Filter {
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
  knowledgearticleid_guid: XQW.Guid;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  name: string;
  organizationid_guid: XQW.Guid;
  overriddencreatedon: Date;
  processid_guid: XQW.Guid;
  statecode: expiredprocess_statecode;
  statuscode: expiredprocess_statuscode;
  transactioncurrencyid_guid: XQW.Guid;
  traversedpath: string;
  versionnumber: number;
}
interface ExpiredProcess_Expand {
  ExpiredProcess_ProcessSessions: WebExpand<ExpiredProcess_Expand, ProcessSession_Select, ProcessSession_Filter, { ExpiredProcess_ProcessSessions: ProcessSession_Result[] }>;
  ExpiredProcess_SyncErrors: WebExpand<ExpiredProcess_Expand, SyncError_Select, SyncError_Filter, { ExpiredProcess_SyncErrors: SyncError_Result[] }>;
  activestageid: WebExpand<ExpiredProcess_Expand, ProcessStage_Select, ProcessStage_Filter, { activestageid: ProcessStage_Result }>;
  createdbyname: WebExpand<ExpiredProcess_Expand, SystemUser_Select, SystemUser_Filter, { createdbyname: SystemUser_Result }>;
  createdonbehalfbyname: WebExpand<ExpiredProcess_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfbyname: SystemUser_Result }>;
  knowledgearticleid: WebExpand<ExpiredProcess_Expand, KnowledgeArticle_Select, KnowledgeArticle_Filter, { knowledgearticleid: KnowledgeArticle_Result }>;
  modifiedbyname: WebExpand<ExpiredProcess_Expand, SystemUser_Select, SystemUser_Filter, { modifiedbyname: SystemUser_Result }>;
  modifiedonbehalfbyname: WebExpand<ExpiredProcess_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfbyname: SystemUser_Result }>;
  organizationid: WebExpand<ExpiredProcess_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
  processid: WebExpand<ExpiredProcess_Expand, Workflow_Select, Workflow_Filter, { processid: Workflow_Result }>;
  transactioncurrencyid: WebExpand<ExpiredProcess_Expand, TransactionCurrency_Select, TransactionCurrency_Filter, { transactioncurrencyid: TransactionCurrency_Result }>;
  workflowlogs_expiredprocess: WebExpand<ExpiredProcess_Expand, WorkflowLog_Select, WorkflowLog_Filter, { workflowlogs_expiredprocess: WorkflowLog_Result[] }>;
}
interface ExpiredProcess_FormattedResult {
  activestageid_formatted?: string;
  activestagestartedon_formatted?: string;
  completedon_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  knowledgearticleid_formatted?: string;
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
interface ExpiredProcess_Result extends ExpiredProcess_Base, ExpiredProcess_Relationships {
  "@odata.etag": string;
  activestageid_guid: string | null;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  knowledgearticleid_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
  processid_guid: string | null;
  transactioncurrencyid_guid: string | null;
}
interface ExpiredProcess_RelatedOne {
  activestageid: WebMappingRetrieve<ProcessStage_Select,ProcessStage_Expand,ProcessStage_Filter,ProcessStage_Fixed,ProcessStage_Result,ProcessStage_FormattedResult>;
  createdbyname: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfbyname: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  knowledgearticleid: WebMappingRetrieve<KnowledgeArticle_Select,KnowledgeArticle_Expand,KnowledgeArticle_Filter,KnowledgeArticle_Fixed,KnowledgeArticle_Result,KnowledgeArticle_FormattedResult>;
  modifiedbyname: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfbyname: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
  processid: WebMappingRetrieve<Workflow_Select,Workflow_Expand,Workflow_Filter,Workflow_Fixed,Workflow_Result,Workflow_FormattedResult>;
  transactioncurrencyid: WebMappingRetrieve<TransactionCurrency_Select,TransactionCurrency_Expand,TransactionCurrency_Filter,TransactionCurrency_Fixed,TransactionCurrency_Result,TransactionCurrency_FormattedResult>;
}
interface ExpiredProcess_RelatedMany {
  ExpiredProcess_ProcessSessions: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  ExpiredProcess_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  workflowlogs_expiredprocess: WebMappingRetrieve<WorkflowLog_Select,WorkflowLog_Expand,WorkflowLog_Filter,WorkflowLog_Fixed,WorkflowLog_Result,WorkflowLog_FormattedResult>;
}
interface WebEntitiesRetrieve {
  expiredprocesses: WebMappingRetrieve<ExpiredProcess_Select,ExpiredProcess_Expand,ExpiredProcess_Filter,ExpiredProcess_Fixed,ExpiredProcess_Result,ExpiredProcess_FormattedResult>;
}
interface WebEntitiesRelated {
  expiredprocesses: WebMappingRelated<ExpiredProcess_RelatedOne,ExpiredProcess_RelatedMany>;
}
interface WebEntitiesCUDA {
  expiredprocesses: WebMappingCUDA<ExpiredProcess_Create,ExpiredProcess_Update,ExpiredProcess_Select>;
}
