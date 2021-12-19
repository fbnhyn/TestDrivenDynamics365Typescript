interface msdyn_msdyn_incidenttype_knowledgebaserec_Base extends WebEntity {
  knowledgebaserecordid?: string | null;
  msdyn_incidenttypeid?: string | null;
  msdyn_msdyn_incidenttype_knowledgebaserecid?: string | null;
  versionnumber?: number | null;
}
interface msdyn_msdyn_incidenttype_knowledgebaserec_Relationships {
  navigationPropertyNameNotDefined?: KnowledgeBaseRecord_Result[] | null;
}
interface msdyn_msdyn_incidenttype_knowledgebaserec extends msdyn_msdyn_incidenttype_knowledgebaserec_Base, msdyn_msdyn_incidenttype_knowledgebaserec_Relationships {
}
interface msdyn_msdyn_incidenttype_knowledgebaserec_Create extends msdyn_msdyn_incidenttype_knowledgebaserec {
}
interface msdyn_msdyn_incidenttype_knowledgebaserec_Update extends msdyn_msdyn_incidenttype_knowledgebaserec {
}
interface msdyn_msdyn_incidenttype_knowledgebaserec_Select {
  knowledgebaserecordid: WebAttribute<msdyn_msdyn_incidenttype_knowledgebaserec_Select, { knowledgebaserecordid: string | null }, {  }>;
  msdyn_incidenttypeid: WebAttribute<msdyn_msdyn_incidenttype_knowledgebaserec_Select, { msdyn_incidenttypeid: string | null }, {  }>;
  msdyn_msdyn_incidenttype_knowledgebaserecid: WebAttribute<msdyn_msdyn_incidenttype_knowledgebaserec_Select, { msdyn_msdyn_incidenttype_knowledgebaserecid: string | null }, {  }>;
  versionnumber: WebAttribute<msdyn_msdyn_incidenttype_knowledgebaserec_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_msdyn_incidenttype_knowledgebaserec_Filter {
  knowledgebaserecordid: XQW.Guid;
  msdyn_incidenttypeid: XQW.Guid;
  msdyn_msdyn_incidenttype_knowledgebaserecid: XQW.Guid;
  versionnumber: number;
}
interface msdyn_msdyn_incidenttype_knowledgebaserec_Expand {
  navigationPropertyNameNotDefined: WebExpand<msdyn_msdyn_incidenttype_knowledgebaserec_Expand, KnowledgeBaseRecord_Select, KnowledgeBaseRecord_Filter, { navigationPropertyNameNotDefined: KnowledgeBaseRecord_Result[] }>;
}
interface msdyn_msdyn_incidenttype_knowledgebaserec_FormattedResult {
}
interface msdyn_msdyn_incidenttype_knowledgebaserec_Result extends msdyn_msdyn_incidenttype_knowledgebaserec_Base, msdyn_msdyn_incidenttype_knowledgebaserec_Relationships {
  "@odata.etag": string;
}
interface msdyn_msdyn_incidenttype_knowledgebaserec_RelatedOne {
}
interface msdyn_msdyn_incidenttype_knowledgebaserec_RelatedMany {
  navigationPropertyNameNotDefined: WebMappingRetrieve<KnowledgeBaseRecord_Select,KnowledgeBaseRecord_Expand,KnowledgeBaseRecord_Filter,KnowledgeBaseRecord_Fixed,KnowledgeBaseRecord_Result,KnowledgeBaseRecord_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_msdyn_incidenttype_knowledgebaserecset: WebMappingRetrieve<msdyn_msdyn_incidenttype_knowledgebaserec_Select,msdyn_msdyn_incidenttype_knowledgebaserec_Expand,msdyn_msdyn_incidenttype_knowledgebaserec_Filter,msdyn_msdyn_incidenttype_knowledgebaserec_Fixed,msdyn_msdyn_incidenttype_knowledgebaserec_Result,msdyn_msdyn_incidenttype_knowledgebaserec_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_msdyn_incidenttype_knowledgebaserecset: WebMappingRelated<msdyn_msdyn_incidenttype_knowledgebaserec_RelatedOne,msdyn_msdyn_incidenttype_knowledgebaserec_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_msdyn_incidenttype_knowledgebaserecset: WebMappingCUDA<msdyn_msdyn_incidenttype_knowledgebaserec_Create,msdyn_msdyn_incidenttype_knowledgebaserec_Update,msdyn_msdyn_incidenttype_knowledgebaserec_Select>;
}
