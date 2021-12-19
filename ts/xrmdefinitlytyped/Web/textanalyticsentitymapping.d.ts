interface TextAnalyticsEntityMapping_Base extends WebEntity {
  componentstate?: componentstate | null;
  entity?: string | null;
  entitydisplayname?: string | null;
  entitypicklist?: textanalyticsentitymapping_entity | null;
  field?: string | null;
  fielddisplayname?: string | null;
  fieldpicklist?: textanalyticsentitymapping_fields | null;
  ismanaged?: boolean | null;
  istextmatchmapping?: boolean | null;
  modeltype?: number | null;
  overwritetime?: Date | null;
  relationshipname?: string | null;
  solutionid?: string | null;
  supportingsolutionid?: string | null;
  textanalyticsentitymappingid?: string | null;
  textanalyticsentitymappingidunique?: string | null;
}
interface TextAnalyticsEntityMapping_Relationships {
}
interface TextAnalyticsEntityMapping extends TextAnalyticsEntityMapping_Base, TextAnalyticsEntityMapping_Relationships {
  advancedsimilarityruleid_bind$advancedsimilarityrules?: string | null;
  knowledgesearchmodelid_bind$knowledgesearchmodels?: string | null;
  similarityruleid_bind$similarityrules?: string | null;
  topicmodelconfigurationid_bind$topicmodelconfigurations?: string | null;
}
interface TextAnalyticsEntityMapping_Create extends TextAnalyticsEntityMapping {
}
interface TextAnalyticsEntityMapping_Update extends TextAnalyticsEntityMapping {
}
interface TextAnalyticsEntityMapping_Select {
  advancedsimilarityruleid_guid: WebAttribute<TextAnalyticsEntityMapping_Select, { advancedsimilarityruleid_guid: string | null }, { advancedsimilarityruleid_formatted?: string }>;
  componentstate: WebAttribute<TextAnalyticsEntityMapping_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  entity: WebAttribute<TextAnalyticsEntityMapping_Select, { entity: string | null }, {  }>;
  entitydisplayname: WebAttribute<TextAnalyticsEntityMapping_Select, { entitydisplayname: string | null }, {  }>;
  entitypicklist: WebAttribute<TextAnalyticsEntityMapping_Select, { entitypicklist: textanalyticsentitymapping_entity | null }, { entitypicklist_formatted?: string }>;
  field: WebAttribute<TextAnalyticsEntityMapping_Select, { field: string | null }, {  }>;
  fielddisplayname: WebAttribute<TextAnalyticsEntityMapping_Select, { fielddisplayname: string | null }, {  }>;
  fieldpicklist: WebAttribute<TextAnalyticsEntityMapping_Select, { fieldpicklist: textanalyticsentitymapping_fields | null }, { fieldpicklist_formatted?: string }>;
  ismanaged: WebAttribute<TextAnalyticsEntityMapping_Select, { ismanaged: boolean | null }, {  }>;
  istextmatchmapping: WebAttribute<TextAnalyticsEntityMapping_Select, { istextmatchmapping: boolean | null }, {  }>;
  knowledgesearchmodelid_guid: WebAttribute<TextAnalyticsEntityMapping_Select, { knowledgesearchmodelid_guid: string | null }, { knowledgesearchmodelid_formatted?: string }>;
  modeltype: WebAttribute<TextAnalyticsEntityMapping_Select, { modeltype: number | null }, {  }>;
  organizationid_guid: WebAttribute<TextAnalyticsEntityMapping_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overwritetime: WebAttribute<TextAnalyticsEntityMapping_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  relationshipname: WebAttribute<TextAnalyticsEntityMapping_Select, { relationshipname: string | null }, {  }>;
  similarityruleid_guid: WebAttribute<TextAnalyticsEntityMapping_Select, { similarityruleid_guid: string | null }, { similarityruleid_formatted?: string }>;
  solutionid: WebAttribute<TextAnalyticsEntityMapping_Select, { solutionid: string | null }, {  }>;
  supportingsolutionid: WebAttribute<TextAnalyticsEntityMapping_Select, { supportingsolutionid: string | null }, {  }>;
  textanalyticsentitymappingid: WebAttribute<TextAnalyticsEntityMapping_Select, { textanalyticsentitymappingid: string | null }, {  }>;
  textanalyticsentitymappingidunique: WebAttribute<TextAnalyticsEntityMapping_Select, { textanalyticsentitymappingidunique: string | null }, {  }>;
  topicmodelconfigurationid_guid: WebAttribute<TextAnalyticsEntityMapping_Select, { topicmodelconfigurationid_guid: string | null }, { topicmodelconfigurationid_formatted?: string }>;
}
interface TextAnalyticsEntityMapping_Filter {
  advancedsimilarityruleid_guid: XQW.Guid;
  componentstate: componentstate;
  entity: string;
  entitydisplayname: string;
  entitypicklist: textanalyticsentitymapping_entity;
  field: string;
  fielddisplayname: string;
  fieldpicklist: textanalyticsentitymapping_fields;
  ismanaged: boolean;
  istextmatchmapping: boolean;
  knowledgesearchmodelid_guid: XQW.Guid;
  modeltype: number;
  organizationid_guid: XQW.Guid;
  overwritetime: Date;
  relationshipname: string;
  similarityruleid_guid: XQW.Guid;
  solutionid: XQW.Guid;
  supportingsolutionid: XQW.Guid;
  textanalyticsentitymappingid: XQW.Guid;
  textanalyticsentitymappingidunique: XQW.Guid;
  topicmodelconfigurationid_guid: XQW.Guid;
}
interface TextAnalyticsEntityMapping_Expand {
  advancedsimilarityruleid: WebExpand<TextAnalyticsEntityMapping_Expand, AdvancedSimilarityRule_Select, AdvancedSimilarityRule_Filter, { advancedsimilarityruleid: AdvancedSimilarityRule_Result }>;
  knowledgesearchmodelid: WebExpand<TextAnalyticsEntityMapping_Expand, KnowledgeSearchModel_Select, KnowledgeSearchModel_Filter, { knowledgesearchmodelid: KnowledgeSearchModel_Result }>;
  organizationid: WebExpand<TextAnalyticsEntityMapping_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
  similarityruleid: WebExpand<TextAnalyticsEntityMapping_Expand, SimilarityRule_Select, SimilarityRule_Filter, { similarityruleid: SimilarityRule_Result }>;
  topicmodelconfigurationid: WebExpand<TextAnalyticsEntityMapping_Expand, TopicModelConfiguration_Select, TopicModelConfiguration_Filter, { topicmodelconfigurationid: TopicModelConfiguration_Result }>;
}
interface TextAnalyticsEntityMapping_FormattedResult {
  advancedsimilarityruleid_formatted?: string;
  componentstate_formatted?: string;
  entitypicklist_formatted?: string;
  fieldpicklist_formatted?: string;
  knowledgesearchmodelid_formatted?: string;
  organizationid_formatted?: string;
  overwritetime_formatted?: string;
  similarityruleid_formatted?: string;
  topicmodelconfigurationid_formatted?: string;
}
interface TextAnalyticsEntityMapping_Result extends TextAnalyticsEntityMapping_Base, TextAnalyticsEntityMapping_Relationships {
  "@odata.etag": string;
  advancedsimilarityruleid_guid: string | null;
  knowledgesearchmodelid_guid: string | null;
  organizationid_guid: string | null;
  similarityruleid_guid: string | null;
  topicmodelconfigurationid_guid: string | null;
}
interface TextAnalyticsEntityMapping_RelatedOne {
  advancedsimilarityruleid: WebMappingRetrieve<AdvancedSimilarityRule_Select,AdvancedSimilarityRule_Expand,AdvancedSimilarityRule_Filter,AdvancedSimilarityRule_Fixed,AdvancedSimilarityRule_Result,AdvancedSimilarityRule_FormattedResult>;
  knowledgesearchmodelid: WebMappingRetrieve<KnowledgeSearchModel_Select,KnowledgeSearchModel_Expand,KnowledgeSearchModel_Filter,KnowledgeSearchModel_Fixed,KnowledgeSearchModel_Result,KnowledgeSearchModel_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
  similarityruleid: WebMappingRetrieve<SimilarityRule_Select,SimilarityRule_Expand,SimilarityRule_Filter,SimilarityRule_Fixed,SimilarityRule_Result,SimilarityRule_FormattedResult>;
  topicmodelconfigurationid: WebMappingRetrieve<TopicModelConfiguration_Select,TopicModelConfiguration_Expand,TopicModelConfiguration_Filter,TopicModelConfiguration_Fixed,TopicModelConfiguration_Result,TopicModelConfiguration_FormattedResult>;
}
interface TextAnalyticsEntityMapping_RelatedMany {
}
interface WebEntitiesRetrieve {
  textanalyticsentitymappings: WebMappingRetrieve<TextAnalyticsEntityMapping_Select,TextAnalyticsEntityMapping_Expand,TextAnalyticsEntityMapping_Filter,TextAnalyticsEntityMapping_Fixed,TextAnalyticsEntityMapping_Result,TextAnalyticsEntityMapping_FormattedResult>;
}
interface WebEntitiesRelated {
  textanalyticsentitymappings: WebMappingRelated<TextAnalyticsEntityMapping_RelatedOne,TextAnalyticsEntityMapping_RelatedMany>;
}
interface WebEntitiesCUDA {
  textanalyticsentitymappings: WebMappingCUDA<TextAnalyticsEntityMapping_Create,TextAnalyticsEntityMapping_Update,TextAnalyticsEntityMapping_Select>;
}
