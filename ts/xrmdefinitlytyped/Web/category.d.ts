interface Category_Base extends WebEntity {
  categoryid?: string | null;
  categorynumber?: string | null;
  createdon?: Date | null;
  description?: string | null;
  exchangerate?: number | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  overriddencreatedon?: Date | null;
  sequencenumber?: number | null;
  title?: string | null;
  versionnumber?: number | null;
}
interface Category_Relationships {
  Category_SyncErrors?: SyncError_Result[] | null;
  category_parent_category?: Category_Result[] | null;
  knowledgearticle_category?: KnowledgeArticle_Result[] | null;
  lk_category_createdby?: SystemUser_Result | null;
  lk_category_createdonbehalfby?: SystemUser_Result | null;
  lk_category_modifiedby?: SystemUser_Result | null;
  lk_category_modifiedonbehalfby?: SystemUser_Result | null;
}
interface Category extends Category_Base, Category_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
  parentcategoryid_bind$categories?: string | null;
  transactioncurrencyid_bind$transactioncurrencies?: string | null;
}
interface Category_Create extends Category {
}
interface Category_Update extends Category {
}
interface Category_Select {
  categoryid: WebAttribute<Category_Select, { categoryid: string | null }, {  }>;
  categorynumber: WebAttribute<Category_Select, { categorynumber: string | null }, {  }>;
  createdby_guid: WebAttribute<Category_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<Category_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<Category_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  description: WebAttribute<Category_Select, { description: string | null }, {  }>;
  exchangerate: WebAttribute<Category_Select, { exchangerate: number | null }, {  }>;
  importsequencenumber: WebAttribute<Category_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<Category_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<Category_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<Category_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  overriddencreatedon: WebAttribute<Category_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<Category_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<Category_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<Category_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<Category_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  parentcategoryid_guid: WebAttribute<Category_Select, { parentcategoryid_guid: string | null }, { parentcategoryid_formatted?: string }>;
  sequencenumber: WebAttribute<Category_Select, { sequencenumber: number | null }, {  }>;
  title: WebAttribute<Category_Select, { title: string | null }, {  }>;
  transactioncurrencyid_guid: WebAttribute<Category_Select, { transactioncurrencyid_guid: string | null }, { transactioncurrencyid_formatted?: string }>;
  versionnumber: WebAttribute<Category_Select, { versionnumber: number | null }, {  }>;
}
interface Category_Filter {
  categoryid: XQW.Guid;
  categorynumber: string;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  description: string;
  exchangerate: any;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  parentcategoryid_guid: XQW.Guid;
  sequencenumber: number;
  title: string;
  transactioncurrencyid_guid: XQW.Guid;
  versionnumber: number;
}
interface Category_Expand {
  Category_SyncErrors: WebExpand<Category_Expand, SyncError_Select, SyncError_Filter, { Category_SyncErrors: SyncError_Result[] }>;
  category_parent_category: WebExpand<Category_Expand, Category_Select, Category_Filter, { category_parent_category: Category_Result[] }>;
  knowledgearticle_category: WebExpand<Category_Expand, KnowledgeArticle_Select, KnowledgeArticle_Filter, { knowledgearticle_category: KnowledgeArticle_Result[] }>;
  lk_category_createdby: WebExpand<Category_Expand, SystemUser_Select, SystemUser_Filter, { lk_category_createdby: SystemUser_Result }>;
  lk_category_createdonbehalfby: WebExpand<Category_Expand, SystemUser_Select, SystemUser_Filter, { lk_category_createdonbehalfby: SystemUser_Result }>;
  lk_category_modifiedby: WebExpand<Category_Expand, SystemUser_Select, SystemUser_Filter, { lk_category_modifiedby: SystemUser_Result }>;
  lk_category_modifiedonbehalfby: WebExpand<Category_Expand, SystemUser_Select, SystemUser_Filter, { lk_category_modifiedonbehalfby: SystemUser_Result }>;
  ownerid: WebExpand<Category_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<Category_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  parentcategoryid: WebExpand<Category_Expand, Category_Select, Category_Filter, { parentcategoryid: Category_Result }>;
  transactioncurrencyid: WebExpand<Category_Expand, TransactionCurrency_Select, TransactionCurrency_Filter, { transactioncurrencyid: TransactionCurrency_Result }>;
}
interface Category_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  parentcategoryid_formatted?: string;
  transactioncurrencyid_formatted?: string;
}
interface Category_Result extends Category_Base, Category_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
  parentcategoryid_guid: string | null;
  transactioncurrencyid_guid: string | null;
}
interface Category_RelatedOne {
  lk_category_createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  lk_category_createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  lk_category_modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  lk_category_modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  parentcategoryid: WebMappingRetrieve<Category_Select,Category_Expand,Category_Filter,Category_Fixed,Category_Result,Category_FormattedResult>;
  transactioncurrencyid: WebMappingRetrieve<TransactionCurrency_Select,TransactionCurrency_Expand,TransactionCurrency_Filter,TransactionCurrency_Fixed,TransactionCurrency_Result,TransactionCurrency_FormattedResult>;
}
interface Category_RelatedMany {
  Category_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  category_parent_category: WebMappingRetrieve<Category_Select,Category_Expand,Category_Filter,Category_Fixed,Category_Result,Category_FormattedResult>;
  knowledgearticle_category: WebMappingRetrieve<KnowledgeArticle_Select,KnowledgeArticle_Expand,KnowledgeArticle_Filter,KnowledgeArticle_Fixed,KnowledgeArticle_Result,KnowledgeArticle_FormattedResult>;
}
interface WebEntitiesRetrieve {
  categories: WebMappingRetrieve<Category_Select,Category_Expand,Category_Filter,Category_Fixed,Category_Result,Category_FormattedResult>;
}
interface WebEntitiesRelated {
  categories: WebMappingRelated<Category_RelatedOne,Category_RelatedMany>;
}
interface WebEntitiesCUDA {
  categories: WebMappingCUDA<Category_Create,Category_Update,Category_Select>;
}
