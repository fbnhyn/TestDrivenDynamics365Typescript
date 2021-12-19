interface msdyn_msdyn_customerasset_knowledgebasere_Base extends WebEntity {
  knowledgebaserecordid?: string | null;
  msdyn_customerassetid?: string | null;
  msdyn_msdyn_customerasset_knowledgebasereid?: string | null;
  versionnumber?: number | null;
}
interface msdyn_msdyn_customerasset_knowledgebasere_Relationships {
  navigationPropertyNameNotDefined?: KnowledgeBaseRecord_Result[] | null;
}
interface msdyn_msdyn_customerasset_knowledgebasere extends msdyn_msdyn_customerasset_knowledgebasere_Base, msdyn_msdyn_customerasset_knowledgebasere_Relationships {
}
interface msdyn_msdyn_customerasset_knowledgebasere_Create extends msdyn_msdyn_customerasset_knowledgebasere {
}
interface msdyn_msdyn_customerasset_knowledgebasere_Update extends msdyn_msdyn_customerasset_knowledgebasere {
}
interface msdyn_msdyn_customerasset_knowledgebasere_Select {
  knowledgebaserecordid: WebAttribute<msdyn_msdyn_customerasset_knowledgebasere_Select, { knowledgebaserecordid: string | null }, {  }>;
  msdyn_customerassetid: WebAttribute<msdyn_msdyn_customerasset_knowledgebasere_Select, { msdyn_customerassetid: string | null }, {  }>;
  msdyn_msdyn_customerasset_knowledgebasereid: WebAttribute<msdyn_msdyn_customerasset_knowledgebasere_Select, { msdyn_msdyn_customerasset_knowledgebasereid: string | null }, {  }>;
  versionnumber: WebAttribute<msdyn_msdyn_customerasset_knowledgebasere_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_msdyn_customerasset_knowledgebasere_Filter {
  knowledgebaserecordid: XQW.Guid;
  msdyn_customerassetid: XQW.Guid;
  msdyn_msdyn_customerasset_knowledgebasereid: XQW.Guid;
  versionnumber: number;
}
interface msdyn_msdyn_customerasset_knowledgebasere_Expand {
  navigationPropertyNameNotDefined: WebExpand<msdyn_msdyn_customerasset_knowledgebasere_Expand, KnowledgeBaseRecord_Select, KnowledgeBaseRecord_Filter, { navigationPropertyNameNotDefined: KnowledgeBaseRecord_Result[] }>;
}
interface msdyn_msdyn_customerasset_knowledgebasere_FormattedResult {
}
interface msdyn_msdyn_customerasset_knowledgebasere_Result extends msdyn_msdyn_customerasset_knowledgebasere_Base, msdyn_msdyn_customerasset_knowledgebasere_Relationships {
  "@odata.etag": string;
}
interface msdyn_msdyn_customerasset_knowledgebasere_RelatedOne {
}
interface msdyn_msdyn_customerasset_knowledgebasere_RelatedMany {
  navigationPropertyNameNotDefined: WebMappingRetrieve<KnowledgeBaseRecord_Select,KnowledgeBaseRecord_Expand,KnowledgeBaseRecord_Filter,KnowledgeBaseRecord_Fixed,KnowledgeBaseRecord_Result,KnowledgeBaseRecord_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_msdyn_customerasset_knowledgebasereset: WebMappingRetrieve<msdyn_msdyn_customerasset_knowledgebasere_Select,msdyn_msdyn_customerasset_knowledgebasere_Expand,msdyn_msdyn_customerasset_knowledgebasere_Filter,msdyn_msdyn_customerasset_knowledgebasere_Fixed,msdyn_msdyn_customerasset_knowledgebasere_Result,msdyn_msdyn_customerasset_knowledgebasere_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_msdyn_customerasset_knowledgebasereset: WebMappingRelated<msdyn_msdyn_customerasset_knowledgebasere_RelatedOne,msdyn_msdyn_customerasset_knowledgebasere_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_msdyn_customerasset_knowledgebasereset: WebMappingCUDA<msdyn_msdyn_customerasset_knowledgebasere_Create,msdyn_msdyn_customerasset_knowledgebasere_Update,msdyn_msdyn_customerasset_knowledgebasere_Select>;
}
