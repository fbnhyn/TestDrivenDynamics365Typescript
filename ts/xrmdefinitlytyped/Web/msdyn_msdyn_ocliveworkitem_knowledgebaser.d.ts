interface msdyn_msdyn_ocliveworkitem_knowledgebaser_Base extends WebEntity {
  activityid?: string | null;
  knowledgebaserecordid?: string | null;
  msdyn_msdyn_ocliveworkitem_knowledgebaserid?: string | null;
  versionnumber?: number | null;
}
interface msdyn_msdyn_ocliveworkitem_knowledgebaser_Relationships {
  navigationPropertyNameNotDefined?: KnowledgeBaseRecord_Result[] | null;
}
interface msdyn_msdyn_ocliveworkitem_knowledgebaser extends msdyn_msdyn_ocliveworkitem_knowledgebaser_Base, msdyn_msdyn_ocliveworkitem_knowledgebaser_Relationships {
}
interface msdyn_msdyn_ocliveworkitem_knowledgebaser_Create extends msdyn_msdyn_ocliveworkitem_knowledgebaser {
}
interface msdyn_msdyn_ocliveworkitem_knowledgebaser_Update extends msdyn_msdyn_ocliveworkitem_knowledgebaser {
}
interface msdyn_msdyn_ocliveworkitem_knowledgebaser_Select {
  activityid: WebAttribute<msdyn_msdyn_ocliveworkitem_knowledgebaser_Select, { activityid: string | null }, {  }>;
  knowledgebaserecordid: WebAttribute<msdyn_msdyn_ocliveworkitem_knowledgebaser_Select, { knowledgebaserecordid: string | null }, {  }>;
  msdyn_msdyn_ocliveworkitem_knowledgebaserid: WebAttribute<msdyn_msdyn_ocliveworkitem_knowledgebaser_Select, { msdyn_msdyn_ocliveworkitem_knowledgebaserid: string | null }, {  }>;
  versionnumber: WebAttribute<msdyn_msdyn_ocliveworkitem_knowledgebaser_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_msdyn_ocliveworkitem_knowledgebaser_Filter {
  activityid: XQW.Guid;
  knowledgebaserecordid: XQW.Guid;
  msdyn_msdyn_ocliveworkitem_knowledgebaserid: XQW.Guid;
  versionnumber: number;
}
interface msdyn_msdyn_ocliveworkitem_knowledgebaser_Expand {
  navigationPropertyNameNotDefined: WebExpand<msdyn_msdyn_ocliveworkitem_knowledgebaser_Expand, KnowledgeBaseRecord_Select, KnowledgeBaseRecord_Filter, { navigationPropertyNameNotDefined: KnowledgeBaseRecord_Result[] }>;
}
interface msdyn_msdyn_ocliveworkitem_knowledgebaser_FormattedResult {
}
interface msdyn_msdyn_ocliveworkitem_knowledgebaser_Result extends msdyn_msdyn_ocliveworkitem_knowledgebaser_Base, msdyn_msdyn_ocliveworkitem_knowledgebaser_Relationships {
  "@odata.etag": string;
}
interface msdyn_msdyn_ocliveworkitem_knowledgebaser_RelatedOne {
}
interface msdyn_msdyn_ocliveworkitem_knowledgebaser_RelatedMany {
  navigationPropertyNameNotDefined: WebMappingRetrieve<KnowledgeBaseRecord_Select,KnowledgeBaseRecord_Expand,KnowledgeBaseRecord_Filter,KnowledgeBaseRecord_Fixed,KnowledgeBaseRecord_Result,KnowledgeBaseRecord_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_msdyn_ocliveworkitem_knowledgebaserset: WebMappingRetrieve<msdyn_msdyn_ocliveworkitem_knowledgebaser_Select,msdyn_msdyn_ocliveworkitem_knowledgebaser_Expand,msdyn_msdyn_ocliveworkitem_knowledgebaser_Filter,msdyn_msdyn_ocliveworkitem_knowledgebaser_Fixed,msdyn_msdyn_ocliveworkitem_knowledgebaser_Result,msdyn_msdyn_ocliveworkitem_knowledgebaser_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_msdyn_ocliveworkitem_knowledgebaserset: WebMappingRelated<msdyn_msdyn_ocliveworkitem_knowledgebaser_RelatedOne,msdyn_msdyn_ocliveworkitem_knowledgebaser_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_msdyn_ocliveworkitem_knowledgebaserset: WebMappingCUDA<msdyn_msdyn_ocliveworkitem_knowledgebaser_Create,msdyn_msdyn_ocliveworkitem_knowledgebaser_Update,msdyn_msdyn_ocliveworkitem_knowledgebaser_Select>;
}
