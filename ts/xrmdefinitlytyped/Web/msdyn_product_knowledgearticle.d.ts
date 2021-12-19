interface msdyn_product_knowledgearticle_Base extends WebEntity {
  knowledgearticleid?: string | null;
  msdyn_product_knowledgearticleid?: string | null;
  productid?: string | null;
  versionnumber?: number | null;
}
interface msdyn_product_knowledgearticle_Relationships {
  navigationPropertyNameNotDefined?: KnowledgeArticle_Result[] | null;
}
interface msdyn_product_knowledgearticle extends msdyn_product_knowledgearticle_Base, msdyn_product_knowledgearticle_Relationships {
}
interface msdyn_product_knowledgearticle_Create extends msdyn_product_knowledgearticle {
}
interface msdyn_product_knowledgearticle_Update extends msdyn_product_knowledgearticle {
}
interface msdyn_product_knowledgearticle_Select {
  knowledgearticleid: WebAttribute<msdyn_product_knowledgearticle_Select, { knowledgearticleid: string | null }, {  }>;
  msdyn_product_knowledgearticleid: WebAttribute<msdyn_product_knowledgearticle_Select, { msdyn_product_knowledgearticleid: string | null }, {  }>;
  productid: WebAttribute<msdyn_product_knowledgearticle_Select, { productid: string | null }, {  }>;
  versionnumber: WebAttribute<msdyn_product_knowledgearticle_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_product_knowledgearticle_Filter {
  knowledgearticleid: XQW.Guid;
  msdyn_product_knowledgearticleid: XQW.Guid;
  productid: XQW.Guid;
  versionnumber: number;
}
interface msdyn_product_knowledgearticle_Expand {
  navigationPropertyNameNotDefined: WebExpand<msdyn_product_knowledgearticle_Expand, KnowledgeArticle_Select, KnowledgeArticle_Filter, { navigationPropertyNameNotDefined: KnowledgeArticle_Result[] }>;
}
interface msdyn_product_knowledgearticle_FormattedResult {
}
interface msdyn_product_knowledgearticle_Result extends msdyn_product_knowledgearticle_Base, msdyn_product_knowledgearticle_Relationships {
  "@odata.etag": string;
}
interface msdyn_product_knowledgearticle_RelatedOne {
}
interface msdyn_product_knowledgearticle_RelatedMany {
  navigationPropertyNameNotDefined: WebMappingRetrieve<KnowledgeArticle_Select,KnowledgeArticle_Expand,KnowledgeArticle_Filter,KnowledgeArticle_Fixed,KnowledgeArticle_Result,KnowledgeArticle_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_product_knowledgearticleset: WebMappingRetrieve<msdyn_product_knowledgearticle_Select,msdyn_product_knowledgearticle_Expand,msdyn_product_knowledgearticle_Filter,msdyn_product_knowledgearticle_Fixed,msdyn_product_knowledgearticle_Result,msdyn_product_knowledgearticle_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_product_knowledgearticleset: WebMappingRelated<msdyn_product_knowledgearticle_RelatedOne,msdyn_product_knowledgearticle_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_product_knowledgearticleset: WebMappingCUDA<msdyn_product_knowledgearticle_Create,msdyn_product_knowledgearticle_Update,msdyn_product_knowledgearticle_Select>;
}
