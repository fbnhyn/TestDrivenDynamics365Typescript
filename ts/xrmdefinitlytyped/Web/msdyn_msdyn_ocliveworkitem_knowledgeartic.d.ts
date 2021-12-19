interface msdyn_msdyn_ocliveworkitem_knowledgeartic_Base extends WebEntity {
  activityid?: string | null;
  knowledgearticleid?: string | null;
  msdyn_msdyn_ocliveworkitem_knowledgearticid?: string | null;
  versionnumber?: number | null;
}
interface msdyn_msdyn_ocliveworkitem_knowledgeartic_Relationships {
  navigationPropertyNameNotDefined?: KnowledgeArticle_Result[] | null;
}
interface msdyn_msdyn_ocliveworkitem_knowledgeartic extends msdyn_msdyn_ocliveworkitem_knowledgeartic_Base, msdyn_msdyn_ocliveworkitem_knowledgeartic_Relationships {
}
interface msdyn_msdyn_ocliveworkitem_knowledgeartic_Create extends msdyn_msdyn_ocliveworkitem_knowledgeartic {
}
interface msdyn_msdyn_ocliveworkitem_knowledgeartic_Update extends msdyn_msdyn_ocliveworkitem_knowledgeartic {
}
interface msdyn_msdyn_ocliveworkitem_knowledgeartic_Select {
  activityid: WebAttribute<msdyn_msdyn_ocliveworkitem_knowledgeartic_Select, { activityid: string | null }, {  }>;
  knowledgearticleid: WebAttribute<msdyn_msdyn_ocliveworkitem_knowledgeartic_Select, { knowledgearticleid: string | null }, {  }>;
  msdyn_msdyn_ocliveworkitem_knowledgearticid: WebAttribute<msdyn_msdyn_ocliveworkitem_knowledgeartic_Select, { msdyn_msdyn_ocliveworkitem_knowledgearticid: string | null }, {  }>;
  versionnumber: WebAttribute<msdyn_msdyn_ocliveworkitem_knowledgeartic_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_msdyn_ocliveworkitem_knowledgeartic_Filter {
  activityid: XQW.Guid;
  knowledgearticleid: XQW.Guid;
  msdyn_msdyn_ocliveworkitem_knowledgearticid: XQW.Guid;
  versionnumber: number;
}
interface msdyn_msdyn_ocliveworkitem_knowledgeartic_Expand {
  navigationPropertyNameNotDefined: WebExpand<msdyn_msdyn_ocliveworkitem_knowledgeartic_Expand, KnowledgeArticle_Select, KnowledgeArticle_Filter, { navigationPropertyNameNotDefined: KnowledgeArticle_Result[] }>;
}
interface msdyn_msdyn_ocliveworkitem_knowledgeartic_FormattedResult {
}
interface msdyn_msdyn_ocliveworkitem_knowledgeartic_Result extends msdyn_msdyn_ocliveworkitem_knowledgeartic_Base, msdyn_msdyn_ocliveworkitem_knowledgeartic_Relationships {
  "@odata.etag": string;
}
interface msdyn_msdyn_ocliveworkitem_knowledgeartic_RelatedOne {
}
interface msdyn_msdyn_ocliveworkitem_knowledgeartic_RelatedMany {
  navigationPropertyNameNotDefined: WebMappingRetrieve<KnowledgeArticle_Select,KnowledgeArticle_Expand,KnowledgeArticle_Filter,KnowledgeArticle_Fixed,KnowledgeArticle_Result,KnowledgeArticle_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_msdyn_ocliveworkitem_knowledgearticset: WebMappingRetrieve<msdyn_msdyn_ocliveworkitem_knowledgeartic_Select,msdyn_msdyn_ocliveworkitem_knowledgeartic_Expand,msdyn_msdyn_ocliveworkitem_knowledgeartic_Filter,msdyn_msdyn_ocliveworkitem_knowledgeartic_Fixed,msdyn_msdyn_ocliveworkitem_knowledgeartic_Result,msdyn_msdyn_ocliveworkitem_knowledgeartic_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_msdyn_ocliveworkitem_knowledgearticset: WebMappingRelated<msdyn_msdyn_ocliveworkitem_knowledgeartic_RelatedOne,msdyn_msdyn_ocliveworkitem_knowledgeartic_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_msdyn_ocliveworkitem_knowledgearticset: WebMappingCUDA<msdyn_msdyn_ocliveworkitem_knowledgeartic_Create,msdyn_msdyn_ocliveworkitem_knowledgeartic_Update,msdyn_msdyn_ocliveworkitem_knowledgeartic_Select>;
}
