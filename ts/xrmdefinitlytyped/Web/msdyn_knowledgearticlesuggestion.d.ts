interface msdyn_knowledgearticlesuggestion_Base extends WebEntity {
  msdyn_additionalcontext?: string | null;
  msdyn_confidencescore?: number | null;
  msdyn_keyphrases?: string | null;
  msdyn_knowledgearticlesuggestionid?: string | null;
  msdyn_name?: string | null;
  msdyn_rank?: number | null;
  msdyn_suggestionforentitylogicalname?: string | null;
  msdyn_suggestionforid?: string | null;
}
interface msdyn_knowledgearticlesuggestion_Relationships {
}
interface msdyn_knowledgearticlesuggestion extends msdyn_knowledgearticlesuggestion_Base, msdyn_knowledgearticlesuggestion_Relationships {
  msdyn_suggestedentity_bind$knowledgearticles?: string | null;
}
interface msdyn_knowledgearticlesuggestion_Create extends msdyn_knowledgearticlesuggestion {
}
interface msdyn_knowledgearticlesuggestion_Update extends msdyn_knowledgearticlesuggestion {
}
interface msdyn_knowledgearticlesuggestion_Select {
  msdyn_additionalcontext: WebAttribute<msdyn_knowledgearticlesuggestion_Select, { msdyn_additionalcontext: string | null }, {  }>;
  msdyn_confidencescore: WebAttribute<msdyn_knowledgearticlesuggestion_Select, { msdyn_confidencescore: number | null }, {  }>;
  msdyn_keyphrases: WebAttribute<msdyn_knowledgearticlesuggestion_Select, { msdyn_keyphrases: string | null }, {  }>;
  msdyn_knowledgearticlesuggestionid: WebAttribute<msdyn_knowledgearticlesuggestion_Select, { msdyn_knowledgearticlesuggestionid: string | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_knowledgearticlesuggestion_Select, { msdyn_name: string | null }, {  }>;
  msdyn_rank: WebAttribute<msdyn_knowledgearticlesuggestion_Select, { msdyn_rank: number | null }, {  }>;
  msdyn_suggestedentity_guid: WebAttribute<msdyn_knowledgearticlesuggestion_Select, { msdyn_suggestedentity_guid: string | null }, { msdyn_suggestedentity_formatted?: string }>;
  msdyn_suggestionforentitylogicalname: WebAttribute<msdyn_knowledgearticlesuggestion_Select, { msdyn_suggestionforentitylogicalname: string | null }, {  }>;
  msdyn_suggestionforid: WebAttribute<msdyn_knowledgearticlesuggestion_Select, { msdyn_suggestionforid: string | null }, {  }>;
}
interface msdyn_knowledgearticlesuggestion_Filter {
  msdyn_additionalcontext: string;
  msdyn_confidencescore: any;
  msdyn_keyphrases: string;
  msdyn_knowledgearticlesuggestionid: XQW.Guid;
  msdyn_name: string;
  msdyn_rank: number;
  msdyn_suggestedentity_guid: XQW.Guid;
  msdyn_suggestionforentitylogicalname: string;
  msdyn_suggestionforid: string;
}
interface msdyn_knowledgearticlesuggestion_Expand {
  msdyn_suggestedentity: WebExpand<msdyn_knowledgearticlesuggestion_Expand, KnowledgeArticle_Select, KnowledgeArticle_Filter, { msdyn_suggestedentity: KnowledgeArticle_Result }>;
}
interface msdyn_knowledgearticlesuggestion_FormattedResult {
  msdyn_suggestedentity_formatted?: string;
}
interface msdyn_knowledgearticlesuggestion_Result extends msdyn_knowledgearticlesuggestion_Base, msdyn_knowledgearticlesuggestion_Relationships {
  "@odata.etag": string;
  msdyn_suggestedentity_guid: string | null;
}
interface msdyn_knowledgearticlesuggestion_RelatedOne {
  msdyn_suggestedentity: WebMappingRetrieve<KnowledgeArticle_Select,KnowledgeArticle_Expand,KnowledgeArticle_Filter,KnowledgeArticle_Fixed,KnowledgeArticle_Result,KnowledgeArticle_FormattedResult>;
}
interface msdyn_knowledgearticlesuggestion_RelatedMany {
}
interface WebEntitiesRetrieve {
  msdyn_knowledgearticlesuggestions: WebMappingRetrieve<msdyn_knowledgearticlesuggestion_Select,msdyn_knowledgearticlesuggestion_Expand,msdyn_knowledgearticlesuggestion_Filter,msdyn_knowledgearticlesuggestion_Fixed,msdyn_knowledgearticlesuggestion_Result,msdyn_knowledgearticlesuggestion_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_knowledgearticlesuggestions: WebMappingRelated<msdyn_knowledgearticlesuggestion_RelatedOne,msdyn_knowledgearticlesuggestion_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_knowledgearticlesuggestions: WebMappingCUDA<msdyn_knowledgearticlesuggestion_Create,msdyn_knowledgearticlesuggestion_Update,msdyn_knowledgearticlesuggestion_Select>;
}
