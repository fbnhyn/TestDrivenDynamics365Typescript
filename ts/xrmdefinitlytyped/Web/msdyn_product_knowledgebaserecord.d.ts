interface msdyn_product_knowledgebaserecord_Base extends WebEntity {
  knowledgebaserecordid?: string | null;
  msdyn_product_knowledgebaserecordid?: string | null;
  productid?: string | null;
  versionnumber?: number | null;
}
interface msdyn_product_knowledgebaserecord_Relationships {
  navigationPropertyNameNotDefined?: KnowledgeBaseRecord_Result[] | null;
}
interface msdyn_product_knowledgebaserecord extends msdyn_product_knowledgebaserecord_Base, msdyn_product_knowledgebaserecord_Relationships {
}
interface msdyn_product_knowledgebaserecord_Create extends msdyn_product_knowledgebaserecord {
}
interface msdyn_product_knowledgebaserecord_Update extends msdyn_product_knowledgebaserecord {
}
interface msdyn_product_knowledgebaserecord_Select {
  knowledgebaserecordid: WebAttribute<msdyn_product_knowledgebaserecord_Select, { knowledgebaserecordid: string | null }, {  }>;
  msdyn_product_knowledgebaserecordid: WebAttribute<msdyn_product_knowledgebaserecord_Select, { msdyn_product_knowledgebaserecordid: string | null }, {  }>;
  productid: WebAttribute<msdyn_product_knowledgebaserecord_Select, { productid: string | null }, {  }>;
  versionnumber: WebAttribute<msdyn_product_knowledgebaserecord_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_product_knowledgebaserecord_Filter {
  knowledgebaserecordid: XQW.Guid;
  msdyn_product_knowledgebaserecordid: XQW.Guid;
  productid: XQW.Guid;
  versionnumber: number;
}
interface msdyn_product_knowledgebaserecord_Expand {
  navigationPropertyNameNotDefined: WebExpand<msdyn_product_knowledgebaserecord_Expand, KnowledgeBaseRecord_Select, KnowledgeBaseRecord_Filter, { navigationPropertyNameNotDefined: KnowledgeBaseRecord_Result[] }>;
}
interface msdyn_product_knowledgebaserecord_FormattedResult {
}
interface msdyn_product_knowledgebaserecord_Result extends msdyn_product_knowledgebaserecord_Base, msdyn_product_knowledgebaserecord_Relationships {
  "@odata.etag": string;
}
interface msdyn_product_knowledgebaserecord_RelatedOne {
}
interface msdyn_product_knowledgebaserecord_RelatedMany {
  navigationPropertyNameNotDefined: WebMappingRetrieve<KnowledgeBaseRecord_Select,KnowledgeBaseRecord_Expand,KnowledgeBaseRecord_Filter,KnowledgeBaseRecord_Fixed,KnowledgeBaseRecord_Result,KnowledgeBaseRecord_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_product_knowledgebaserecordset: WebMappingRetrieve<msdyn_product_knowledgebaserecord_Select,msdyn_product_knowledgebaserecord_Expand,msdyn_product_knowledgebaserecord_Filter,msdyn_product_knowledgebaserecord_Fixed,msdyn_product_knowledgebaserecord_Result,msdyn_product_knowledgebaserecord_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_product_knowledgebaserecordset: WebMappingRelated<msdyn_product_knowledgebaserecord_RelatedOne,msdyn_product_knowledgebaserecord_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_product_knowledgebaserecordset: WebMappingCUDA<msdyn_product_knowledgebaserecord_Create,msdyn_product_knowledgebaserecord_Update,msdyn_product_knowledgebaserecord_Select>;
}
