interface KnowledgeArticleIncident_Base extends WebEntity {
  createdon?: Date | null;
  exchangerate?: number | null;
  importsequencenumber?: number | null;
  issenttocustomer?: boolean | null;
  knowledgearticleincidentid?: string | null;
  knowledgeusage?: knowledgearticleincident_knowledgeusage | null;
  modifiedon?: Date | null;
  overriddencreatedon?: Date | null;
  statecode?: knowledgearticleincident_statecode | null;
  statuscode?: knowledgearticleincident_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface KnowledgeArticleIncident_Relationships {
  KnowledgeArticleIncident_SyncErrors?: SyncError_Result[] | null;
  knowledgearticleincident_AsyncOperations?: AsyncOperation_Result[] | null;
  knowledgearticleincident_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  knowledgearticleincident_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  knowledgearticleincident_ProcessSession?: ProcessSession_Result[] | null;
  knowledgearticleincident_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  knowledgearticleincident_principalobjectattributeaccess?: PrincipalObjectAttributeAccess_Result[] | null;
}
interface KnowledgeArticleIncident extends KnowledgeArticleIncident_Base, KnowledgeArticleIncident_Relationships {
  incidentid_bind$incidents?: string | null;
  knowledgearticleid_bind$knowledgearticles?: string | null;
}
interface KnowledgeArticleIncident_Create extends KnowledgeArticleIncident {
}
interface KnowledgeArticleIncident_Update extends KnowledgeArticleIncident {
}
interface KnowledgeArticleIncident_Select {
  createdby_guid: WebAttribute<KnowledgeArticleIncident_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<KnowledgeArticleIncident_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<KnowledgeArticleIncident_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  exchangerate: WebAttribute<KnowledgeArticleIncident_Select, { exchangerate: number | null }, {  }>;
  importsequencenumber: WebAttribute<KnowledgeArticleIncident_Select, { importsequencenumber: number | null }, {  }>;
  incidentid_guid: WebAttribute<KnowledgeArticleIncident_Select, { incidentid_guid: string | null }, { incidentid_formatted?: string }>;
  issenttocustomer: WebAttribute<KnowledgeArticleIncident_Select, { issenttocustomer: boolean | null }, {  }>;
  knowledgearticleid_guid: WebAttribute<KnowledgeArticleIncident_Select, { knowledgearticleid_guid: string | null }, { knowledgearticleid_formatted?: string }>;
  knowledgearticleincidentid: WebAttribute<KnowledgeArticleIncident_Select, { knowledgearticleincidentid: string | null }, {  }>;
  knowledgeusage: WebAttribute<KnowledgeArticleIncident_Select, { knowledgeusage: knowledgearticleincident_knowledgeusage | null }, { knowledgeusage_formatted?: string }>;
  modifiedby_guid: WebAttribute<KnowledgeArticleIncident_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<KnowledgeArticleIncident_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<KnowledgeArticleIncident_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  overriddencreatedon: WebAttribute<KnowledgeArticleIncident_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<KnowledgeArticleIncident_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<KnowledgeArticleIncident_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<KnowledgeArticleIncident_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<KnowledgeArticleIncident_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<KnowledgeArticleIncident_Select, { statecode: knowledgearticleincident_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<KnowledgeArticleIncident_Select, { statuscode: knowledgearticleincident_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<KnowledgeArticleIncident_Select, { timezoneruleversionnumber: number | null }, {  }>;
  transactioncurrencyid_guid: WebAttribute<KnowledgeArticleIncident_Select, { transactioncurrencyid_guid: string | null }, { transactioncurrencyid_formatted?: string }>;
  utcconversiontimezonecode: WebAttribute<KnowledgeArticleIncident_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<KnowledgeArticleIncident_Select, { versionnumber: number | null }, {  }>;
}
interface KnowledgeArticleIncident_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  exchangerate: any;
  importsequencenumber: number;
  incidentid_guid: XQW.Guid;
  issenttocustomer: boolean;
  knowledgearticleid_guid: XQW.Guid;
  knowledgearticleincidentid: XQW.Guid;
  knowledgeusage: knowledgearticleincident_knowledgeusage;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: knowledgearticleincident_statecode;
  statuscode: knowledgearticleincident_statuscode;
  timezoneruleversionnumber: number;
  transactioncurrencyid_guid: XQW.Guid;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface KnowledgeArticleIncident_Expand {
  KnowledgeArticleIncident_SyncErrors: WebExpand<KnowledgeArticleIncident_Expand, SyncError_Select, SyncError_Filter, { KnowledgeArticleIncident_SyncErrors: SyncError_Result[] }>;
  createdby: WebExpand<KnowledgeArticleIncident_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<KnowledgeArticleIncident_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  incidentid: WebExpand<KnowledgeArticleIncident_Expand, Incident_Select, Incident_Filter, { incidentid: Incident_Result }>;
  knowledgearticleid: WebExpand<KnowledgeArticleIncident_Expand, KnowledgeArticle_Select, KnowledgeArticle_Filter, { knowledgearticleid: KnowledgeArticle_Result }>;
  knowledgearticleincident_AsyncOperations: WebExpand<KnowledgeArticleIncident_Expand, AsyncOperation_Select, AsyncOperation_Filter, { knowledgearticleincident_AsyncOperations: AsyncOperation_Result[] }>;
  knowledgearticleincident_BulkDeleteFailures: WebExpand<KnowledgeArticleIncident_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { knowledgearticleincident_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  knowledgearticleincident_MailboxTrackingFolders: WebExpand<KnowledgeArticleIncident_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { knowledgearticleincident_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  knowledgearticleincident_ProcessSession: WebExpand<KnowledgeArticleIncident_Expand, ProcessSession_Select, ProcessSession_Filter, { knowledgearticleincident_ProcessSession: ProcessSession_Result[] }>;
  knowledgearticleincident_UserEntityInstanceDatas: WebExpand<KnowledgeArticleIncident_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { knowledgearticleincident_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  knowledgearticleincident_principalobjectattributeaccess: WebExpand<KnowledgeArticleIncident_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { knowledgearticleincident_principalobjectattributeaccess: PrincipalObjectAttributeAccess_Result[] }>;
  modifiedby: WebExpand<KnowledgeArticleIncident_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<KnowledgeArticleIncident_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  owningteam: WebExpand<KnowledgeArticleIncident_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<KnowledgeArticleIncident_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
  transactioncurrencyid: WebExpand<KnowledgeArticleIncident_Expand, TransactionCurrency_Select, TransactionCurrency_Filter, { transactioncurrencyid: TransactionCurrency_Result }>;
}
interface KnowledgeArticleIncident_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  incidentid_formatted?: string;
  knowledgearticleid_formatted?: string;
  knowledgeusage_formatted?: string;
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
  transactioncurrencyid_formatted?: string;
}
interface KnowledgeArticleIncident_Result extends KnowledgeArticleIncident_Base, KnowledgeArticleIncident_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  incidentid_guid: string | null;
  knowledgearticleid_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
  transactioncurrencyid_guid: string | null;
}
interface KnowledgeArticleIncident_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  incidentid: WebMappingRetrieve<Incident_Select,Incident_Expand,Incident_Filter,Incident_Fixed,Incident_Result,Incident_FormattedResult>;
  knowledgearticleid: WebMappingRetrieve<KnowledgeArticle_Select,KnowledgeArticle_Expand,KnowledgeArticle_Filter,KnowledgeArticle_Fixed,KnowledgeArticle_Result,KnowledgeArticle_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  transactioncurrencyid: WebMappingRetrieve<TransactionCurrency_Select,TransactionCurrency_Expand,TransactionCurrency_Filter,TransactionCurrency_Fixed,TransactionCurrency_Result,TransactionCurrency_FormattedResult>;
}
interface KnowledgeArticleIncident_RelatedMany {
  KnowledgeArticleIncident_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  knowledgearticleincident_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  knowledgearticleincident_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  knowledgearticleincident_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  knowledgearticleincident_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  knowledgearticleincident_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  knowledgearticleincident_principalobjectattributeaccess: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
}
interface WebEntitiesRetrieve {
  knowledgearticleincidents: WebMappingRetrieve<KnowledgeArticleIncident_Select,KnowledgeArticleIncident_Expand,KnowledgeArticleIncident_Filter,KnowledgeArticleIncident_Fixed,KnowledgeArticleIncident_Result,KnowledgeArticleIncident_FormattedResult>;
}
interface WebEntitiesRelated {
  knowledgearticleincidents: WebMappingRelated<KnowledgeArticleIncident_RelatedOne,KnowledgeArticleIncident_RelatedMany>;
}
interface WebEntitiesCUDA {
  knowledgearticleincidents: WebMappingCUDA<KnowledgeArticleIncident_Create,KnowledgeArticleIncident_Update,KnowledgeArticleIncident_Select>;
}
