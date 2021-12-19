interface TranslationProcess_Base extends WebEntity {
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
  statecode?: translationprocess_statecode | null;
  statuscode?: translationprocess_statuscode | null;
  traversedpath?: string | null;
  versionnumber?: number | null;
}
interface TranslationProcess_Relationships {
  TranslationProcess_ProcessSessions?: ProcessSession_Result[] | null;
  TranslationProcess_SyncErrors?: SyncError_Result[] | null;
  createdbyname?: SystemUser_Result | null;
  createdonbehalfbyname?: SystemUser_Result | null;
  modifiedbyname?: SystemUser_Result | null;
  modifiedonbehalfbyname?: SystemUser_Result | null;
  workflowlogs_translationprocess?: WorkflowLog_Result[] | null;
}
interface TranslationProcess extends TranslationProcess_Base, TranslationProcess_Relationships {
  activestageid_bind$processstages?: string | null;
  knowledgearticleid_bind$knowledgearticles?: string | null;
  processid_bind$workflows?: string | null;
  transactioncurrencyid_bind$transactioncurrencies?: string | null;
}
interface TranslationProcess_Create extends TranslationProcess {
}
interface TranslationProcess_Update extends TranslationProcess {
}
interface TranslationProcess_Select {
  activestageid_guid: WebAttribute<TranslationProcess_Select, { activestageid_guid: string | null }, { activestageid_formatted?: string }>;
  activestagestartedon: WebAttribute<TranslationProcess_Select, { activestagestartedon: Date | null }, { activestagestartedon_formatted?: string }>;
  businessprocessflowinstanceid: WebAttribute<TranslationProcess_Select, { businessprocessflowinstanceid: string | null }, {  }>;
  completedon: WebAttribute<TranslationProcess_Select, { completedon: Date | null }, { completedon_formatted?: string }>;
  createdby_guid: WebAttribute<TranslationProcess_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<TranslationProcess_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<TranslationProcess_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  duration: WebAttribute<TranslationProcess_Select, { duration: number | null }, {  }>;
  exchangerate: WebAttribute<TranslationProcess_Select, { exchangerate: number | null }, {  }>;
  importsequencenumber: WebAttribute<TranslationProcess_Select, { importsequencenumber: number | null }, {  }>;
  knowledgearticleid_guid: WebAttribute<TranslationProcess_Select, { knowledgearticleid_guid: string | null }, { knowledgearticleid_formatted?: string }>;
  modifiedby_guid: WebAttribute<TranslationProcess_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<TranslationProcess_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<TranslationProcess_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  name: WebAttribute<TranslationProcess_Select, { name: string | null }, {  }>;
  organizationid_guid: WebAttribute<TranslationProcess_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overriddencreatedon: WebAttribute<TranslationProcess_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  processid_guid: WebAttribute<TranslationProcess_Select, { processid_guid: string | null }, { processid_formatted?: string }>;
  statecode: WebAttribute<TranslationProcess_Select, { statecode: translationprocess_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<TranslationProcess_Select, { statuscode: translationprocess_statuscode | null }, { statuscode_formatted?: string }>;
  transactioncurrencyid_guid: WebAttribute<TranslationProcess_Select, { transactioncurrencyid_guid: string | null }, { transactioncurrencyid_formatted?: string }>;
  traversedpath: WebAttribute<TranslationProcess_Select, { traversedpath: string | null }, {  }>;
  versionnumber: WebAttribute<TranslationProcess_Select, { versionnumber: number | null }, {  }>;
}
interface TranslationProcess_Filter {
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
  statecode: translationprocess_statecode;
  statuscode: translationprocess_statuscode;
  transactioncurrencyid_guid: XQW.Guid;
  traversedpath: string;
  versionnumber: number;
}
interface TranslationProcess_Expand {
  TranslationProcess_ProcessSessions: WebExpand<TranslationProcess_Expand, ProcessSession_Select, ProcessSession_Filter, { TranslationProcess_ProcessSessions: ProcessSession_Result[] }>;
  TranslationProcess_SyncErrors: WebExpand<TranslationProcess_Expand, SyncError_Select, SyncError_Filter, { TranslationProcess_SyncErrors: SyncError_Result[] }>;
  activestageid: WebExpand<TranslationProcess_Expand, ProcessStage_Select, ProcessStage_Filter, { activestageid: ProcessStage_Result }>;
  createdbyname: WebExpand<TranslationProcess_Expand, SystemUser_Select, SystemUser_Filter, { createdbyname: SystemUser_Result }>;
  createdonbehalfbyname: WebExpand<TranslationProcess_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfbyname: SystemUser_Result }>;
  knowledgearticleid: WebExpand<TranslationProcess_Expand, KnowledgeArticle_Select, KnowledgeArticle_Filter, { knowledgearticleid: KnowledgeArticle_Result }>;
  modifiedbyname: WebExpand<TranslationProcess_Expand, SystemUser_Select, SystemUser_Filter, { modifiedbyname: SystemUser_Result }>;
  modifiedonbehalfbyname: WebExpand<TranslationProcess_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfbyname: SystemUser_Result }>;
  organizationid: WebExpand<TranslationProcess_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
  processid: WebExpand<TranslationProcess_Expand, Workflow_Select, Workflow_Filter, { processid: Workflow_Result }>;
  transactioncurrencyid: WebExpand<TranslationProcess_Expand, TransactionCurrency_Select, TransactionCurrency_Filter, { transactioncurrencyid: TransactionCurrency_Result }>;
  workflowlogs_translationprocess: WebExpand<TranslationProcess_Expand, WorkflowLog_Select, WorkflowLog_Filter, { workflowlogs_translationprocess: WorkflowLog_Result[] }>;
}
interface TranslationProcess_FormattedResult {
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
interface TranslationProcess_Result extends TranslationProcess_Base, TranslationProcess_Relationships {
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
interface TranslationProcess_RelatedOne {
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
interface TranslationProcess_RelatedMany {
  TranslationProcess_ProcessSessions: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  TranslationProcess_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  workflowlogs_translationprocess: WebMappingRetrieve<WorkflowLog_Select,WorkflowLog_Expand,WorkflowLog_Filter,WorkflowLog_Fixed,WorkflowLog_Result,WorkflowLog_FormattedResult>;
}
interface WebEntitiesRetrieve {
  translationprocesses: WebMappingRetrieve<TranslationProcess_Select,TranslationProcess_Expand,TranslationProcess_Filter,TranslationProcess_Fixed,TranslationProcess_Result,TranslationProcess_FormattedResult>;
}
interface WebEntitiesRelated {
  translationprocesses: WebMappingRelated<TranslationProcess_RelatedOne,TranslationProcess_RelatedMany>;
}
interface WebEntitiesCUDA {
  translationprocesses: WebMappingCUDA<TranslationProcess_Create,TranslationProcess_Update,TranslationProcess_Select>;
}
