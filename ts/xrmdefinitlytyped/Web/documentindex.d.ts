interface DocumentIndex_Base extends WebEntity {
  createdon?: Date | null;
  documentindexid?: string | null;
  documenttypecode?: documentindex_documenttypecode | null;
  islatestversion?: boolean | null;
  ispublished?: boolean | null;
  keywords?: string | null;
  location?: string | null;
  modifiedon?: Date | null;
  number?: string | null;
  searchtext?: string | null;
  title?: string | null;
  versionnumber?: number | null;
}
interface DocumentIndex_Relationships {
  knowledgearticle_documentindex?: KnowledgeArticle_Result | null;
  userentityinstancedata_documentindex?: UserEntityInstanceData_Result[] | null;
}
interface DocumentIndex extends DocumentIndex_Base, DocumentIndex_Relationships {
  documentid_bind$kbarticles?: string | null;
  knowledgearticle_documentindex_bind$knowledgearticles?: string | null;
  subjectid_bind$subjects?: string | null;
}
interface DocumentIndex_Create extends DocumentIndex {
}
interface DocumentIndex_Update extends DocumentIndex {
}
interface DocumentIndex_Select {
  createdby_guid: WebAttribute<DocumentIndex_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<DocumentIndex_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<DocumentIndex_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  documentid_guid: WebAttribute<DocumentIndex_Select, { documentid_guid: string | null }, { documentid_formatted?: string }>;
  documentindexid: WebAttribute<DocumentIndex_Select, { documentindexid: string | null }, {  }>;
  documenttypecode: WebAttribute<DocumentIndex_Select, { documenttypecode: documentindex_documenttypecode | null }, { documenttypecode_formatted?: string }>;
  islatestversion: WebAttribute<DocumentIndex_Select, { islatestversion: boolean | null }, {  }>;
  ispublished: WebAttribute<DocumentIndex_Select, { ispublished: boolean | null }, {  }>;
  keywords: WebAttribute<DocumentIndex_Select, { keywords: string | null }, {  }>;
  location: WebAttribute<DocumentIndex_Select, { location: string | null }, {  }>;
  modifiedby_guid: WebAttribute<DocumentIndex_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<DocumentIndex_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<DocumentIndex_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  number: WebAttribute<DocumentIndex_Select, { number: string | null }, {  }>;
  organizationid_guid: WebAttribute<DocumentIndex_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  searchtext: WebAttribute<DocumentIndex_Select, { searchtext: string | null }, {  }>;
  subjectid_guid: WebAttribute<DocumentIndex_Select, { subjectid_guid: string | null }, { subjectid_formatted?: string }>;
  title: WebAttribute<DocumentIndex_Select, { title: string | null }, {  }>;
  versionnumber: WebAttribute<DocumentIndex_Select, { versionnumber: number | null }, {  }>;
}
interface DocumentIndex_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  documentid_guid: XQW.Guid;
  documentindexid: XQW.Guid;
  documenttypecode: documentindex_documenttypecode;
  islatestversion: boolean;
  ispublished: boolean;
  keywords: string;
  location: string;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  number: string;
  organizationid_guid: XQW.Guid;
  searchtext: string;
  subjectid_guid: XQW.Guid;
  title: string;
  versionnumber: number;
}
interface DocumentIndex_Expand {
  createdby: WebExpand<DocumentIndex_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<DocumentIndex_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  documentid: WebExpand<DocumentIndex_Expand, KbArticle_Select, KbArticle_Filter, { documentid: KbArticle_Result }>;
  knowledgearticle_documentindex: WebExpand<DocumentIndex_Expand, KnowledgeArticle_Select, KnowledgeArticle_Filter, { knowledgearticle_documentindex: KnowledgeArticle_Result }>;
  modifiedby: WebExpand<DocumentIndex_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<DocumentIndex_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  organizationid: WebExpand<DocumentIndex_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
  subjectid: WebExpand<DocumentIndex_Expand, Subject_Select, Subject_Filter, { subjectid: Subject_Result }>;
  userentityinstancedata_documentindex: WebExpand<DocumentIndex_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { userentityinstancedata_documentindex: UserEntityInstanceData_Result[] }>;
}
interface DocumentIndex_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  documentid_formatted?: string;
  documenttypecode_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  organizationid_formatted?: string;
  subjectid_formatted?: string;
}
interface DocumentIndex_Result extends DocumentIndex_Base, DocumentIndex_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  documentid_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
  subjectid_guid: string | null;
}
interface DocumentIndex_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  documentid: WebMappingRetrieve<KbArticle_Select,KbArticle_Expand,KbArticle_Filter,KbArticle_Fixed,KbArticle_Result,KbArticle_FormattedResult>;
  knowledgearticle_documentindex: WebMappingRetrieve<KnowledgeArticle_Select,KnowledgeArticle_Expand,KnowledgeArticle_Filter,KnowledgeArticle_Fixed,KnowledgeArticle_Result,KnowledgeArticle_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
  subjectid: WebMappingRetrieve<Subject_Select,Subject_Expand,Subject_Filter,Subject_Fixed,Subject_Result,Subject_FormattedResult>;
}
interface DocumentIndex_RelatedMany {
  userentityinstancedata_documentindex: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  documentindexes: WebMappingRetrieve<DocumentIndex_Select,DocumentIndex_Expand,DocumentIndex_Filter,DocumentIndex_Fixed,DocumentIndex_Result,DocumentIndex_FormattedResult>;
}
interface WebEntitiesRelated {
  documentindexes: WebMappingRelated<DocumentIndex_RelatedOne,DocumentIndex_RelatedMany>;
}
interface WebEntitiesCUDA {
  documentindexes: WebMappingCUDA<DocumentIndex_Create,DocumentIndex_Update,DocumentIndex_Select>;
}
