interface msdyn_msdyn_customerasset_knowledgearticl_Base extends WebEntity {
  knowledgearticleid?: string | null;
  msdyn_customerassetid?: string | null;
  msdyn_msdyn_customerasset_knowledgearticlid?: string | null;
  versionnumber?: number | null;
}
interface msdyn_msdyn_customerasset_knowledgearticl_Relationships {
  navigationPropertyNameNotDefined?: KnowledgeArticle_Result[] | null;
}
interface msdyn_msdyn_customerasset_knowledgearticl extends msdyn_msdyn_customerasset_knowledgearticl_Base, msdyn_msdyn_customerasset_knowledgearticl_Relationships {
}
interface msdyn_msdyn_customerasset_knowledgearticl_Create extends msdyn_msdyn_customerasset_knowledgearticl {
}
interface msdyn_msdyn_customerasset_knowledgearticl_Update extends msdyn_msdyn_customerasset_knowledgearticl {
}
interface msdyn_msdyn_customerasset_knowledgearticl_Select {
  knowledgearticleid: WebAttribute<msdyn_msdyn_customerasset_knowledgearticl_Select, { knowledgearticleid: string | null }, {  }>;
  msdyn_customerassetid: WebAttribute<msdyn_msdyn_customerasset_knowledgearticl_Select, { msdyn_customerassetid: string | null }, {  }>;
  msdyn_msdyn_customerasset_knowledgearticlid: WebAttribute<msdyn_msdyn_customerasset_knowledgearticl_Select, { msdyn_msdyn_customerasset_knowledgearticlid: string | null }, {  }>;
  versionnumber: WebAttribute<msdyn_msdyn_customerasset_knowledgearticl_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_msdyn_customerasset_knowledgearticl_Filter {
  knowledgearticleid: XQW.Guid;
  msdyn_customerassetid: XQW.Guid;
  msdyn_msdyn_customerasset_knowledgearticlid: XQW.Guid;
  versionnumber: number;
}
interface msdyn_msdyn_customerasset_knowledgearticl_Expand {
  navigationPropertyNameNotDefined: WebExpand<msdyn_msdyn_customerasset_knowledgearticl_Expand, KnowledgeArticle_Select, KnowledgeArticle_Filter, { navigationPropertyNameNotDefined: KnowledgeArticle_Result[] }>;
}
interface msdyn_msdyn_customerasset_knowledgearticl_FormattedResult {
}
interface msdyn_msdyn_customerasset_knowledgearticl_Result extends msdyn_msdyn_customerasset_knowledgearticl_Base, msdyn_msdyn_customerasset_knowledgearticl_Relationships {
  "@odata.etag": string;
}
interface msdyn_msdyn_customerasset_knowledgearticl_RelatedOne {
}
interface msdyn_msdyn_customerasset_knowledgearticl_RelatedMany {
  navigationPropertyNameNotDefined: WebMappingRetrieve<KnowledgeArticle_Select,KnowledgeArticle_Expand,KnowledgeArticle_Filter,KnowledgeArticle_Fixed,KnowledgeArticle_Result,KnowledgeArticle_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_msdyn_customerasset_knowledgearticlset: WebMappingRetrieve<msdyn_msdyn_customerasset_knowledgearticl_Select,msdyn_msdyn_customerasset_knowledgearticl_Expand,msdyn_msdyn_customerasset_knowledgearticl_Filter,msdyn_msdyn_customerasset_knowledgearticl_Fixed,msdyn_msdyn_customerasset_knowledgearticl_Result,msdyn_msdyn_customerasset_knowledgearticl_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_msdyn_customerasset_knowledgearticlset: WebMappingRelated<msdyn_msdyn_customerasset_knowledgearticl_RelatedOne,msdyn_msdyn_customerasset_knowledgearticl_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_msdyn_customerasset_knowledgearticlset: WebMappingCUDA<msdyn_msdyn_customerasset_knowledgearticl_Create,msdyn_msdyn_customerasset_knowledgearticl_Update,msdyn_msdyn_customerasset_knowledgearticl_Select>;
}
