interface NewProcess_Base extends WebEntity {
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
  statecode?: newprocess_statecode | null;
  statuscode?: newprocess_statuscode | null;
  traversedpath?: string | null;
  versionnumber?: number | null;
}
interface NewProcess_Relationships {
  NewProcess_ProcessSessions?: ProcessSession_Result[] | null;
  NewProcess_SyncErrors?: SyncError_Result[] | null;
  createdbyname?: SystemUser_Result | null;
  createdonbehalfbyname?: SystemUser_Result | null;
  modifiedbyname?: SystemUser_Result | null;
  modifiedonbehalfbyname?: SystemUser_Result | null;
  workflowlogs_newprocess?: WorkflowLog_Result[] | null;
}
interface NewProcess extends NewProcess_Base, NewProcess_Relationships {
  activestageid_bind$processstages?: string | null;
  knowledgearticleid_bind$knowledgearticles?: string | null;
  processid_bind$workflows?: string | null;
  transactioncurrencyid_bind$transactioncurrencies?: string | null;
}
interface NewProcess_Create extends NewProcess {
}
interface NewProcess_Update extends NewProcess {
}
interface NewProcess_Select {
  activestageid_guid: WebAttribute<NewProcess_Select, { activestageid_guid: string | null }, { activestageid_formatted?: string }>;
  activestagestartedon: WebAttribute<NewProcess_Select, { activestagestartedon: Date | null }, { activestagestartedon_formatted?: string }>;
  businessprocessflowinstanceid: WebAttribute<NewProcess_Select, { businessprocessflowinstanceid: string | null }, {  }>;
  completedon: WebAttribute<NewProcess_Select, { completedon: Date | null }, { completedon_formatted?: string }>;
  createdby_guid: WebAttribute<NewProcess_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<NewProcess_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<NewProcess_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  duration: WebAttribute<NewProcess_Select, { duration: number | null }, {  }>;
  exchangerate: WebAttribute<NewProcess_Select, { exchangerate: number | null }, {  }>;
  importsequencenumber: WebAttribute<NewProcess_Select, { importsequencenumber: number | null }, {  }>;
  knowledgearticleid_guid: WebAttribute<NewProcess_Select, { knowledgearticleid_guid: string | null }, { knowledgearticleid_formatted?: string }>;
  modifiedby_guid: WebAttribute<NewProcess_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<NewProcess_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<NewProcess_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  name: WebAttribute<NewProcess_Select, { name: string | null }, {  }>;
  organizationid_guid: WebAttribute<NewProcess_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overriddencreatedon: WebAttribute<NewProcess_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  processid_guid: WebAttribute<NewProcess_Select, { processid_guid: string | null }, { processid_formatted?: string }>;
  statecode: WebAttribute<NewProcess_Select, { statecode: newprocess_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<NewProcess_Select, { statuscode: newprocess_statuscode | null }, { statuscode_formatted?: string }>;
  transactioncurrencyid_guid: WebAttribute<NewProcess_Select, { transactioncurrencyid_guid: string | null }, { transactioncurrencyid_formatted?: string }>;
  traversedpath: WebAttribute<NewProcess_Select, { traversedpath: string | null }, {  }>;
  versionnumber: WebAttribute<NewProcess_Select, { versionnumber: number | null }, {  }>;
}
interface NewProcess_Filter {
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
  statecode: newprocess_statecode;
  statuscode: newprocess_statuscode;
  transactioncurrencyid_guid: XQW.Guid;
  traversedpath: string;
  versionnumber: number;
}
interface NewProcess_Expand {
  NewProcess_ProcessSessions: WebExpand<NewProcess_Expand, ProcessSession_Select, ProcessSession_Filter, { NewProcess_ProcessSessions: ProcessSession_Result[] }>;
  NewProcess_SyncErrors: WebExpand<NewProcess_Expand, SyncError_Select, SyncError_Filter, { NewProcess_SyncErrors: SyncError_Result[] }>;
  activestageid: WebExpand<NewProcess_Expand, ProcessStage_Select, ProcessStage_Filter, { activestageid: ProcessStage_Result }>;
  createdbyname: WebExpand<NewProcess_Expand, SystemUser_Select, SystemUser_Filter, { createdbyname: SystemUser_Result }>;
  createdonbehalfbyname: WebExpand<NewProcess_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfbyname: SystemUser_Result }>;
  knowledgearticleid: WebExpand<NewProcess_Expand, KnowledgeArticle_Select, KnowledgeArticle_Filter, { knowledgearticleid: KnowledgeArticle_Result }>;
  modifiedbyname: WebExpand<NewProcess_Expand, SystemUser_Select, SystemUser_Filter, { modifiedbyname: SystemUser_Result }>;
  modifiedonbehalfbyname: WebExpand<NewProcess_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfbyname: SystemUser_Result }>;
  organizationid: WebExpand<NewProcess_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
  processid: WebExpand<NewProcess_Expand, Workflow_Select, Workflow_Filter, { processid: Workflow_Result }>;
  transactioncurrencyid: WebExpand<NewProcess_Expand, TransactionCurrency_Select, TransactionCurrency_Filter, { transactioncurrencyid: TransactionCurrency_Result }>;
  workflowlogs_newprocess: WebExpand<NewProcess_Expand, WorkflowLog_Select, WorkflowLog_Filter, { workflowlogs_newprocess: WorkflowLog_Result[] }>;
}
interface NewProcess_FormattedResult {
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
interface NewProcess_Result extends NewProcess_Base, NewProcess_Relationships {
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
interface NewProcess_RelatedOne {
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
interface NewProcess_RelatedMany {
  NewProcess_ProcessSessions: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  NewProcess_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  workflowlogs_newprocess: WebMappingRetrieve<WorkflowLog_Select,WorkflowLog_Expand,WorkflowLog_Filter,WorkflowLog_Fixed,WorkflowLog_Result,WorkflowLog_FormattedResult>;
}
interface WebEntitiesRetrieve {
  newprocesses: WebMappingRetrieve<NewProcess_Select,NewProcess_Expand,NewProcess_Filter,NewProcess_Fixed,NewProcess_Result,NewProcess_FormattedResult>;
}
interface WebEntitiesRelated {
  newprocesses: WebMappingRelated<NewProcess_RelatedOne,NewProcess_RelatedMany>;
}
interface WebEntitiesCUDA {
  newprocesses: WebMappingCUDA<NewProcess_Create,NewProcess_Update,NewProcess_Select>;
}
