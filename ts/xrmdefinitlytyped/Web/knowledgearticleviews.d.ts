interface KnowledgeArticleViews_Base extends WebEntity {
  createdon?: Date | null;
  exchangerate?: number | null;
  importsequencenumber?: number | null;
  knowledgearticleview?: number | null;
  knowledgearticleviewsid?: string | null;
  location?: knowledgearticleviews_location | null;
  modifiedon?: Date | null;
  overriddencreatedon?: Date | null;
  owningbusinessunit?: string | null;
  owninguser?: string | null;
  statecode?: knowledgearticleviews_statecode | null;
  statuscode?: knowledgearticleviews_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
  viewdate?: Date | null;
}
interface KnowledgeArticleViews_Relationships {
  KnowledgeArticleViews_SyncErrors?: SyncError_Result[] | null;
  knowledgearticleviews_principalobjectattributeaccess?: PrincipalObjectAttributeAccess_Result[] | null;
}
interface KnowledgeArticleViews extends KnowledgeArticleViews_Base, KnowledgeArticleViews_Relationships {
  knowledgearticleid_bind$knowledgearticles?: string | null;
}
interface KnowledgeArticleViews_Create extends KnowledgeArticleViews {
}
interface KnowledgeArticleViews_Update extends KnowledgeArticleViews {
}
interface KnowledgeArticleViews_Select {
  createdby_guid: WebAttribute<KnowledgeArticleViews_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<KnowledgeArticleViews_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<KnowledgeArticleViews_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  exchangerate: WebAttribute<KnowledgeArticleViews_Select, { exchangerate: number | null }, {  }>;
  importsequencenumber: WebAttribute<KnowledgeArticleViews_Select, { importsequencenumber: number | null }, {  }>;
  knowledgearticleid_guid: WebAttribute<KnowledgeArticleViews_Select, { knowledgearticleid_guid: string | null }, { knowledgearticleid_formatted?: string }>;
  knowledgearticleview: WebAttribute<KnowledgeArticleViews_Select, { knowledgearticleview: number | null }, {  }>;
  knowledgearticleviewsid: WebAttribute<KnowledgeArticleViews_Select, { knowledgearticleviewsid: string | null }, {  }>;
  location: WebAttribute<KnowledgeArticleViews_Select, { location: knowledgearticleviews_location | null }, { location_formatted?: string }>;
  modifiedby_guid: WebAttribute<KnowledgeArticleViews_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<KnowledgeArticleViews_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<KnowledgeArticleViews_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  overriddencreatedon: WebAttribute<KnowledgeArticleViews_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<KnowledgeArticleViews_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit: WebAttribute<KnowledgeArticleViews_Select, { owningbusinessunit: string | null }, {  }>;
  owninguser: WebAttribute<KnowledgeArticleViews_Select, { owninguser: string | null }, {  }>;
  statecode: WebAttribute<KnowledgeArticleViews_Select, { statecode: knowledgearticleviews_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<KnowledgeArticleViews_Select, { statuscode: knowledgearticleviews_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<KnowledgeArticleViews_Select, { timezoneruleversionnumber: number | null }, {  }>;
  transactioncurrencyid_guid: WebAttribute<KnowledgeArticleViews_Select, { transactioncurrencyid_guid: string | null }, { transactioncurrencyid_formatted?: string }>;
  utcconversiontimezonecode: WebAttribute<KnowledgeArticleViews_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<KnowledgeArticleViews_Select, { versionnumber: number | null }, {  }>;
  viewdate: WebAttribute<KnowledgeArticleViews_Select, { viewdate: Date | null }, { viewdate_formatted?: string }>;
}
interface KnowledgeArticleViews_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  exchangerate: any;
  importsequencenumber: number;
  knowledgearticleid_guid: XQW.Guid;
  knowledgearticleview: number;
  knowledgearticleviewsid: XQW.Guid;
  location: knowledgearticleviews_location;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit: XQW.Guid;
  owninguser: XQW.Guid;
  statecode: knowledgearticleviews_statecode;
  statuscode: knowledgearticleviews_statuscode;
  timezoneruleversionnumber: number;
  transactioncurrencyid_guid: XQW.Guid;
  utcconversiontimezonecode: number;
  versionnumber: number;
  viewdate: Date;
}
interface KnowledgeArticleViews_Expand {
  KnowledgeArticleViews_SyncErrors: WebExpand<KnowledgeArticleViews_Expand, SyncError_Select, SyncError_Filter, { KnowledgeArticleViews_SyncErrors: SyncError_Result[] }>;
  createdby: WebExpand<KnowledgeArticleViews_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<KnowledgeArticleViews_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  knowledgearticleid: WebExpand<KnowledgeArticleViews_Expand, KnowledgeArticle_Select, KnowledgeArticle_Filter, { knowledgearticleid: KnowledgeArticle_Result }>;
  knowledgearticleviews_principalobjectattributeaccess: WebExpand<KnowledgeArticleViews_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { knowledgearticleviews_principalobjectattributeaccess: PrincipalObjectAttributeAccess_Result[] }>;
  modifiedby: WebExpand<KnowledgeArticleViews_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<KnowledgeArticleViews_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  transactioncurrencyid: WebExpand<KnowledgeArticleViews_Expand, TransactionCurrency_Select, TransactionCurrency_Filter, { transactioncurrencyid: TransactionCurrency_Result }>;
}
interface KnowledgeArticleViews_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  knowledgearticleid_formatted?: string;
  location_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
  transactioncurrencyid_formatted?: string;
  viewdate_formatted?: string;
}
interface KnowledgeArticleViews_Result extends KnowledgeArticleViews_Base, KnowledgeArticleViews_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  knowledgearticleid_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  ownerid_guid: string | null;
  transactioncurrencyid_guid: string | null;
}
interface KnowledgeArticleViews_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  knowledgearticleid: WebMappingRetrieve<KnowledgeArticle_Select,KnowledgeArticle_Expand,KnowledgeArticle_Filter,KnowledgeArticle_Fixed,KnowledgeArticle_Result,KnowledgeArticle_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  transactioncurrencyid: WebMappingRetrieve<TransactionCurrency_Select,TransactionCurrency_Expand,TransactionCurrency_Filter,TransactionCurrency_Fixed,TransactionCurrency_Result,TransactionCurrency_FormattedResult>;
}
interface KnowledgeArticleViews_RelatedMany {
  KnowledgeArticleViews_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  knowledgearticleviews_principalobjectattributeaccess: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
}
interface WebEntitiesRetrieve {
  knowledgearticleviews: WebMappingRetrieve<KnowledgeArticleViews_Select,KnowledgeArticleViews_Expand,KnowledgeArticleViews_Filter,KnowledgeArticleViews_Fixed,KnowledgeArticleViews_Result,KnowledgeArticleViews_FormattedResult>;
}
interface WebEntitiesRelated {
  knowledgearticleviews: WebMappingRelated<KnowledgeArticleViews_RelatedOne,KnowledgeArticleViews_RelatedMany>;
}
interface WebEntitiesCUDA {
  knowledgearticleviews: WebMappingCUDA<KnowledgeArticleViews_Create,KnowledgeArticleViews_Update,KnowledgeArticleViews_Select>;
}
