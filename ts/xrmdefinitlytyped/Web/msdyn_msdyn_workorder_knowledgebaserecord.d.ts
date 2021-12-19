interface msdyn_msdyn_workorder_knowledgebaserecord_Base extends WebEntity {
  knowledgebaserecordid?: string | null;
  msdyn_msdyn_workorder_knowledgebaserecordid?: string | null;
  msdyn_workorderid?: string | null;
  versionnumber?: number | null;
}
interface msdyn_msdyn_workorder_knowledgebaserecord_Relationships {
  navigationPropertyNameNotDefined?: KnowledgeBaseRecord_Result[] | null;
}
interface msdyn_msdyn_workorder_knowledgebaserecord extends msdyn_msdyn_workorder_knowledgebaserecord_Base, msdyn_msdyn_workorder_knowledgebaserecord_Relationships {
}
interface msdyn_msdyn_workorder_knowledgebaserecord_Create extends msdyn_msdyn_workorder_knowledgebaserecord {
}
interface msdyn_msdyn_workorder_knowledgebaserecord_Update extends msdyn_msdyn_workorder_knowledgebaserecord {
}
interface msdyn_msdyn_workorder_knowledgebaserecord_Select {
  knowledgebaserecordid: WebAttribute<msdyn_msdyn_workorder_knowledgebaserecord_Select, { knowledgebaserecordid: string | null }, {  }>;
  msdyn_msdyn_workorder_knowledgebaserecordid: WebAttribute<msdyn_msdyn_workorder_knowledgebaserecord_Select, { msdyn_msdyn_workorder_knowledgebaserecordid: string | null }, {  }>;
  msdyn_workorderid: WebAttribute<msdyn_msdyn_workorder_knowledgebaserecord_Select, { msdyn_workorderid: string | null }, {  }>;
  versionnumber: WebAttribute<msdyn_msdyn_workorder_knowledgebaserecord_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_msdyn_workorder_knowledgebaserecord_Filter {
  knowledgebaserecordid: XQW.Guid;
  msdyn_msdyn_workorder_knowledgebaserecordid: XQW.Guid;
  msdyn_workorderid: XQW.Guid;
  versionnumber: number;
}
interface msdyn_msdyn_workorder_knowledgebaserecord_Expand {
  navigationPropertyNameNotDefined: WebExpand<msdyn_msdyn_workorder_knowledgebaserecord_Expand, KnowledgeBaseRecord_Select, KnowledgeBaseRecord_Filter, { navigationPropertyNameNotDefined: KnowledgeBaseRecord_Result[] }>;
}
interface msdyn_msdyn_workorder_knowledgebaserecord_FormattedResult {
}
interface msdyn_msdyn_workorder_knowledgebaserecord_Result extends msdyn_msdyn_workorder_knowledgebaserecord_Base, msdyn_msdyn_workorder_knowledgebaserecord_Relationships {
  "@odata.etag": string;
}
interface msdyn_msdyn_workorder_knowledgebaserecord_RelatedOne {
}
interface msdyn_msdyn_workorder_knowledgebaserecord_RelatedMany {
  navigationPropertyNameNotDefined: WebMappingRetrieve<KnowledgeBaseRecord_Select,KnowledgeBaseRecord_Expand,KnowledgeBaseRecord_Filter,KnowledgeBaseRecord_Fixed,KnowledgeBaseRecord_Result,KnowledgeBaseRecord_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_msdyn_workorder_knowledgebaserecordset: WebMappingRetrieve<msdyn_msdyn_workorder_knowledgebaserecord_Select,msdyn_msdyn_workorder_knowledgebaserecord_Expand,msdyn_msdyn_workorder_knowledgebaserecord_Filter,msdyn_msdyn_workorder_knowledgebaserecord_Fixed,msdyn_msdyn_workorder_knowledgebaserecord_Result,msdyn_msdyn_workorder_knowledgebaserecord_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_msdyn_workorder_knowledgebaserecordset: WebMappingRelated<msdyn_msdyn_workorder_knowledgebaserecord_RelatedOne,msdyn_msdyn_workorder_knowledgebaserecord_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_msdyn_workorder_knowledgebaserecordset: WebMappingCUDA<msdyn_msdyn_workorder_knowledgebaserecord_Create,msdyn_msdyn_workorder_knowledgebaserecord_Update,msdyn_msdyn_workorder_knowledgebaserecord_Select>;
}
