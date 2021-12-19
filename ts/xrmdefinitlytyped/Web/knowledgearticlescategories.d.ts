interface KnowledgeArticlesCategories_Base extends WebEntity {
  categoryid?: string | null;
  knowledgearticlecategoryid?: string | null;
  knowledgearticleid?: string | null;
  versionnumber?: number | null;
}
interface KnowledgeArticlesCategories_Relationships {
  knowledgearticle_category?: Category_Result[] | null;
}
interface KnowledgeArticlesCategories extends KnowledgeArticlesCategories_Base, KnowledgeArticlesCategories_Relationships {
}
interface KnowledgeArticlesCategories_Create extends KnowledgeArticlesCategories {
}
interface KnowledgeArticlesCategories_Update extends KnowledgeArticlesCategories {
}
interface KnowledgeArticlesCategories_Select {
  categoryid: WebAttribute<KnowledgeArticlesCategories_Select, { categoryid: string | null }, {  }>;
  knowledgearticlecategoryid: WebAttribute<KnowledgeArticlesCategories_Select, { knowledgearticlecategoryid: string | null }, {  }>;
  knowledgearticleid: WebAttribute<KnowledgeArticlesCategories_Select, { knowledgearticleid: string | null }, {  }>;
  versionnumber: WebAttribute<KnowledgeArticlesCategories_Select, { versionnumber: number | null }, {  }>;
}
interface KnowledgeArticlesCategories_Filter {
  categoryid: XQW.Guid;
  knowledgearticlecategoryid: XQW.Guid;
  knowledgearticleid: XQW.Guid;
  versionnumber: number;
}
interface KnowledgeArticlesCategories_Expand {
  knowledgearticle_category: WebExpand<KnowledgeArticlesCategories_Expand, Category_Select, Category_Filter, { knowledgearticle_category: Category_Result[] }>;
}
interface KnowledgeArticlesCategories_FormattedResult {
}
interface KnowledgeArticlesCategories_Result extends KnowledgeArticlesCategories_Base, KnowledgeArticlesCategories_Relationships {
  "@odata.etag": string;
}
interface KnowledgeArticlesCategories_RelatedOne {
}
interface KnowledgeArticlesCategories_RelatedMany {
  knowledgearticle_category: WebMappingRetrieve<Category_Select,Category_Expand,Category_Filter,Category_Fixed,Category_Result,Category_FormattedResult>;
}
interface WebEntitiesRetrieve {
  KnowledgeArticleCategories: WebMappingRetrieve<KnowledgeArticlesCategories_Select,KnowledgeArticlesCategories_Expand,KnowledgeArticlesCategories_Filter,KnowledgeArticlesCategories_Fixed,KnowledgeArticlesCategories_Result,KnowledgeArticlesCategories_FormattedResult>;
}
interface WebEntitiesRelated {
  KnowledgeArticleCategories: WebMappingRelated<KnowledgeArticlesCategories_RelatedOne,KnowledgeArticlesCategories_RelatedMany>;
}
interface WebEntitiesCUDA {
  KnowledgeArticleCategories: WebMappingCUDA<KnowledgeArticlesCategories_Create,KnowledgeArticlesCategories_Update,KnowledgeArticlesCategories_Select>;
}
