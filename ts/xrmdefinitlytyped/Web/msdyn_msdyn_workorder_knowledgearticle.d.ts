interface msdyn_msdyn_workorder_knowledgearticle_Base extends WebEntity {
  knowledgearticleid?: string | null;
  msdyn_msdyn_workorder_knowledgearticleid?: string | null;
  msdyn_workorderid?: string | null;
  versionnumber?: number | null;
}
interface msdyn_msdyn_workorder_knowledgearticle_Relationships {
  navigationPropertyNameNotDefined?: KnowledgeArticle_Result[] | null;
}
interface msdyn_msdyn_workorder_knowledgearticle extends msdyn_msdyn_workorder_knowledgearticle_Base, msdyn_msdyn_workorder_knowledgearticle_Relationships {
}
interface msdyn_msdyn_workorder_knowledgearticle_Create extends msdyn_msdyn_workorder_knowledgearticle {
}
interface msdyn_msdyn_workorder_knowledgearticle_Update extends msdyn_msdyn_workorder_knowledgearticle {
}
interface msdyn_msdyn_workorder_knowledgearticle_Select {
  knowledgearticleid: WebAttribute<msdyn_msdyn_workorder_knowledgearticle_Select, { knowledgearticleid: string | null }, {  }>;
  msdyn_msdyn_workorder_knowledgearticleid: WebAttribute<msdyn_msdyn_workorder_knowledgearticle_Select, { msdyn_msdyn_workorder_knowledgearticleid: string | null }, {  }>;
  msdyn_workorderid: WebAttribute<msdyn_msdyn_workorder_knowledgearticle_Select, { msdyn_workorderid: string | null }, {  }>;
  versionnumber: WebAttribute<msdyn_msdyn_workorder_knowledgearticle_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_msdyn_workorder_knowledgearticle_Filter {
  knowledgearticleid: XQW.Guid;
  msdyn_msdyn_workorder_knowledgearticleid: XQW.Guid;
  msdyn_workorderid: XQW.Guid;
  versionnumber: number;
}
interface msdyn_msdyn_workorder_knowledgearticle_Expand {
  navigationPropertyNameNotDefined: WebExpand<msdyn_msdyn_workorder_knowledgearticle_Expand, KnowledgeArticle_Select, KnowledgeArticle_Filter, { navigationPropertyNameNotDefined: KnowledgeArticle_Result[] }>;
}
interface msdyn_msdyn_workorder_knowledgearticle_FormattedResult {
}
interface msdyn_msdyn_workorder_knowledgearticle_Result extends msdyn_msdyn_workorder_knowledgearticle_Base, msdyn_msdyn_workorder_knowledgearticle_Relationships {
  "@odata.etag": string;
}
interface msdyn_msdyn_workorder_knowledgearticle_RelatedOne {
}
interface msdyn_msdyn_workorder_knowledgearticle_RelatedMany {
  navigationPropertyNameNotDefined: WebMappingRetrieve<KnowledgeArticle_Select,KnowledgeArticle_Expand,KnowledgeArticle_Filter,KnowledgeArticle_Fixed,KnowledgeArticle_Result,KnowledgeArticle_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_msdyn_workorder_knowledgearticleset: WebMappingRetrieve<msdyn_msdyn_workorder_knowledgearticle_Select,msdyn_msdyn_workorder_knowledgearticle_Expand,msdyn_msdyn_workorder_knowledgearticle_Filter,msdyn_msdyn_workorder_knowledgearticle_Fixed,msdyn_msdyn_workorder_knowledgearticle_Result,msdyn_msdyn_workorder_knowledgearticle_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_msdyn_workorder_knowledgearticleset: WebMappingRelated<msdyn_msdyn_workorder_knowledgearticle_RelatedOne,msdyn_msdyn_workorder_knowledgearticle_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_msdyn_workorder_knowledgearticleset: WebMappingCUDA<msdyn_msdyn_workorder_knowledgearticle_Create,msdyn_msdyn_workorder_knowledgearticle_Update,msdyn_msdyn_workorder_knowledgearticle_Select>;
}
