interface msdyn_msdyn_incidenttype_knowledgearticle_Base extends WebEntity {
  knowledgearticleid?: string | null;
  msdyn_incidenttypeid?: string | null;
  msdyn_msdyn_incidenttype_knowledgearticleid?: string | null;
  versionnumber?: number | null;
}
interface msdyn_msdyn_incidenttype_knowledgearticle_Relationships {
  navigationPropertyNameNotDefined?: KnowledgeArticle_Result[] | null;
}
interface msdyn_msdyn_incidenttype_knowledgearticle extends msdyn_msdyn_incidenttype_knowledgearticle_Base, msdyn_msdyn_incidenttype_knowledgearticle_Relationships {
}
interface msdyn_msdyn_incidenttype_knowledgearticle_Create extends msdyn_msdyn_incidenttype_knowledgearticle {
}
interface msdyn_msdyn_incidenttype_knowledgearticle_Update extends msdyn_msdyn_incidenttype_knowledgearticle {
}
interface msdyn_msdyn_incidenttype_knowledgearticle_Select {
  knowledgearticleid: WebAttribute<msdyn_msdyn_incidenttype_knowledgearticle_Select, { knowledgearticleid: string | null }, {  }>;
  msdyn_incidenttypeid: WebAttribute<msdyn_msdyn_incidenttype_knowledgearticle_Select, { msdyn_incidenttypeid: string | null }, {  }>;
  msdyn_msdyn_incidenttype_knowledgearticleid: WebAttribute<msdyn_msdyn_incidenttype_knowledgearticle_Select, { msdyn_msdyn_incidenttype_knowledgearticleid: string | null }, {  }>;
  versionnumber: WebAttribute<msdyn_msdyn_incidenttype_knowledgearticle_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_msdyn_incidenttype_knowledgearticle_Filter {
  knowledgearticleid: XQW.Guid;
  msdyn_incidenttypeid: XQW.Guid;
  msdyn_msdyn_incidenttype_knowledgearticleid: XQW.Guid;
  versionnumber: number;
}
interface msdyn_msdyn_incidenttype_knowledgearticle_Expand {
  navigationPropertyNameNotDefined: WebExpand<msdyn_msdyn_incidenttype_knowledgearticle_Expand, KnowledgeArticle_Select, KnowledgeArticle_Filter, { navigationPropertyNameNotDefined: KnowledgeArticle_Result[] }>;
}
interface msdyn_msdyn_incidenttype_knowledgearticle_FormattedResult {
}
interface msdyn_msdyn_incidenttype_knowledgearticle_Result extends msdyn_msdyn_incidenttype_knowledgearticle_Base, msdyn_msdyn_incidenttype_knowledgearticle_Relationships {
  "@odata.etag": string;
}
interface msdyn_msdyn_incidenttype_knowledgearticle_RelatedOne {
}
interface msdyn_msdyn_incidenttype_knowledgearticle_RelatedMany {
  navigationPropertyNameNotDefined: WebMappingRetrieve<KnowledgeArticle_Select,KnowledgeArticle_Expand,KnowledgeArticle_Filter,KnowledgeArticle_Fixed,KnowledgeArticle_Result,KnowledgeArticle_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_msdyn_incidenttype_knowledgearticleset: WebMappingRetrieve<msdyn_msdyn_incidenttype_knowledgearticle_Select,msdyn_msdyn_incidenttype_knowledgearticle_Expand,msdyn_msdyn_incidenttype_knowledgearticle_Filter,msdyn_msdyn_incidenttype_knowledgearticle_Fixed,msdyn_msdyn_incidenttype_knowledgearticle_Result,msdyn_msdyn_incidenttype_knowledgearticle_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_msdyn_incidenttype_knowledgearticleset: WebMappingRelated<msdyn_msdyn_incidenttype_knowledgearticle_RelatedOne,msdyn_msdyn_incidenttype_knowledgearticle_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_msdyn_incidenttype_knowledgearticleset: WebMappingCUDA<msdyn_msdyn_incidenttype_knowledgearticle_Create,msdyn_msdyn_incidenttype_knowledgearticle_Update,msdyn_msdyn_incidenttype_knowledgearticle_Select>;
}
