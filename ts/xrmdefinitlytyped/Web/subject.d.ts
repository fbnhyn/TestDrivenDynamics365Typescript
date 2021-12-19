interface Subject_Base extends WebEntity {
  createdon?: Date | null;
  description?: string | null;
  featuremask?: number | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  overriddencreatedon?: Date | null;
  subjectid?: string | null;
  title?: string | null;
  versionnumber?: number | null;
}
interface Subject_Relationships {
  CreatedByExternalParty?: ExternalParty_Result | null;
  ModifiedByExternalParty?: ExternalParty_Result | null;
  Subject_AsyncOperations?: AsyncOperation_Result[] | null;
  Subject_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  Subject_ProcessSessions?: ProcessSession_Result[] | null;
  Subject_SyncErrors?: SyncError_Result[] | null;
  is_primary_subject_for?: DocumentIndex_Result[] | null;
  msdyn_subject_knowledgearticletemplate_subjectid?: msdyn_knowledgearticletemplate_Result[] | null;
  subject_incidents?: Incident_Result[] | null;
  subject_kb_articles?: KbArticle_Result[] | null;
  subject_knowledgearticles?: KnowledgeArticle_Result[] | null;
  subject_parent_subject?: Subject_Result[] | null;
  subject_products?: Product_Result[] | null;
  subject_sales_literature?: SalesLiterature_Result[] | null;
  userentityinstancedata_subject?: UserEntityInstanceData_Result[] | null;
}
interface Subject extends Subject_Base, Subject_Relationships {
  parentsubject_bind$subjects?: string | null;
}
interface Subject_Create extends Subject {
}
interface Subject_Update extends Subject {
}
interface Subject_Select {
  createdby_guid: WebAttribute<Subject_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdbyexternalparty_guid: WebAttribute<Subject_Select, { createdbyexternalparty_guid: string | null }, { createdbyexternalparty_formatted?: string }>;
  createdon: WebAttribute<Subject_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<Subject_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  description: WebAttribute<Subject_Select, { description: string | null }, {  }>;
  featuremask: WebAttribute<Subject_Select, { featuremask: number | null }, {  }>;
  importsequencenumber: WebAttribute<Subject_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<Subject_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedbyexternalparty_guid: WebAttribute<Subject_Select, { modifiedbyexternalparty_guid: string | null }, { modifiedbyexternalparty_formatted?: string }>;
  modifiedon: WebAttribute<Subject_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<Subject_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  organizationid_guid: WebAttribute<Subject_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overriddencreatedon: WebAttribute<Subject_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  parentsubject_guid: WebAttribute<Subject_Select, { parentsubject_guid: string | null }, { parentsubject_formatted?: string }>;
  subjectid: WebAttribute<Subject_Select, { subjectid: string | null }, {  }>;
  title: WebAttribute<Subject_Select, { title: string | null }, {  }>;
  versionnumber: WebAttribute<Subject_Select, { versionnumber: number | null }, {  }>;
}
interface Subject_Filter {
  createdby_guid: XQW.Guid;
  createdbyexternalparty_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  description: string;
  featuremask: number;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedbyexternalparty_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  organizationid_guid: XQW.Guid;
  overriddencreatedon: Date;
  parentsubject_guid: XQW.Guid;
  subjectid: XQW.Guid;
  title: string;
  versionnumber: number;
}
interface Subject_Expand {
  CreatedByExternalParty: WebExpand<Subject_Expand, ExternalParty_Select, ExternalParty_Filter, { CreatedByExternalParty: ExternalParty_Result }>;
  ModifiedByExternalParty: WebExpand<Subject_Expand, ExternalParty_Select, ExternalParty_Filter, { ModifiedByExternalParty: ExternalParty_Result }>;
  Subject_AsyncOperations: WebExpand<Subject_Expand, AsyncOperation_Select, AsyncOperation_Filter, { Subject_AsyncOperations: AsyncOperation_Result[] }>;
  Subject_BulkDeleteFailures: WebExpand<Subject_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { Subject_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  Subject_ProcessSessions: WebExpand<Subject_Expand, ProcessSession_Select, ProcessSession_Filter, { Subject_ProcessSessions: ProcessSession_Result[] }>;
  Subject_SyncErrors: WebExpand<Subject_Expand, SyncError_Select, SyncError_Filter, { Subject_SyncErrors: SyncError_Result[] }>;
  createdby: WebExpand<Subject_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<Subject_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  is_primary_subject_for: WebExpand<Subject_Expand, DocumentIndex_Select, DocumentIndex_Filter, { is_primary_subject_for: DocumentIndex_Result[] }>;
  modifiedby: WebExpand<Subject_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<Subject_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_subject_knowledgearticletemplate_subjectid: WebExpand<Subject_Expand, msdyn_knowledgearticletemplate_Select, msdyn_knowledgearticletemplate_Filter, { msdyn_subject_knowledgearticletemplate_subjectid: msdyn_knowledgearticletemplate_Result[] }>;
  organizationid: WebExpand<Subject_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
  parentsubject: WebExpand<Subject_Expand, Subject_Select, Subject_Filter, { parentsubject: Subject_Result }>;
  subject_incidents: WebExpand<Subject_Expand, Incident_Select, Incident_Filter, { subject_incidents: Incident_Result[] }>;
  subject_kb_articles: WebExpand<Subject_Expand, KbArticle_Select, KbArticle_Filter, { subject_kb_articles: KbArticle_Result[] }>;
  subject_knowledgearticles: WebExpand<Subject_Expand, KnowledgeArticle_Select, KnowledgeArticle_Filter, { subject_knowledgearticles: KnowledgeArticle_Result[] }>;
  subject_parent_subject: WebExpand<Subject_Expand, Subject_Select, Subject_Filter, { subject_parent_subject: Subject_Result[] }>;
  subject_products: WebExpand<Subject_Expand, Product_Select, Product_Filter, { subject_products: Product_Result[] }>;
  subject_sales_literature: WebExpand<Subject_Expand, SalesLiterature_Select, SalesLiterature_Filter, { subject_sales_literature: SalesLiterature_Result[] }>;
  userentityinstancedata_subject: WebExpand<Subject_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { userentityinstancedata_subject: UserEntityInstanceData_Result[] }>;
}
interface Subject_FormattedResult {
  createdby_formatted?: string;
  createdbyexternalparty_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedbyexternalparty_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  organizationid_formatted?: string;
  overriddencreatedon_formatted?: string;
  parentsubject_formatted?: string;
}
interface Subject_Result extends Subject_Base, Subject_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdbyexternalparty_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedbyexternalparty_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
  parentsubject_guid: string | null;
}
interface Subject_RelatedOne {
  CreatedByExternalParty: WebMappingRetrieve<ExternalParty_Select,ExternalParty_Expand,ExternalParty_Filter,ExternalParty_Fixed,ExternalParty_Result,ExternalParty_FormattedResult>;
  ModifiedByExternalParty: WebMappingRetrieve<ExternalParty_Select,ExternalParty_Expand,ExternalParty_Filter,ExternalParty_Fixed,ExternalParty_Result,ExternalParty_FormattedResult>;
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
  parentsubject: WebMappingRetrieve<Subject_Select,Subject_Expand,Subject_Filter,Subject_Fixed,Subject_Result,Subject_FormattedResult>;
}
interface Subject_RelatedMany {
  Subject_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  Subject_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  Subject_ProcessSessions: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  Subject_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  is_primary_subject_for: WebMappingRetrieve<DocumentIndex_Select,DocumentIndex_Expand,DocumentIndex_Filter,DocumentIndex_Fixed,DocumentIndex_Result,DocumentIndex_FormattedResult>;
  msdyn_subject_knowledgearticletemplate_subjectid: WebMappingRetrieve<msdyn_knowledgearticletemplate_Select,msdyn_knowledgearticletemplate_Expand,msdyn_knowledgearticletemplate_Filter,msdyn_knowledgearticletemplate_Fixed,msdyn_knowledgearticletemplate_Result,msdyn_knowledgearticletemplate_FormattedResult>;
  subject_incidents: WebMappingRetrieve<Incident_Select,Incident_Expand,Incident_Filter,Incident_Fixed,Incident_Result,Incident_FormattedResult>;
  subject_kb_articles: WebMappingRetrieve<KbArticle_Select,KbArticle_Expand,KbArticle_Filter,KbArticle_Fixed,KbArticle_Result,KbArticle_FormattedResult>;
  subject_knowledgearticles: WebMappingRetrieve<KnowledgeArticle_Select,KnowledgeArticle_Expand,KnowledgeArticle_Filter,KnowledgeArticle_Fixed,KnowledgeArticle_Result,KnowledgeArticle_FormattedResult>;
  subject_parent_subject: WebMappingRetrieve<Subject_Select,Subject_Expand,Subject_Filter,Subject_Fixed,Subject_Result,Subject_FormattedResult>;
  subject_products: WebMappingRetrieve<Product_Select,Product_Expand,Product_Filter,Product_Fixed,Product_Result,Product_FormattedResult>;
  subject_sales_literature: WebMappingRetrieve<SalesLiterature_Select,SalesLiterature_Expand,SalesLiterature_Filter,SalesLiterature_Fixed,SalesLiterature_Result,SalesLiterature_FormattedResult>;
  userentityinstancedata_subject: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  subjects: WebMappingRetrieve<Subject_Select,Subject_Expand,Subject_Filter,Subject_Fixed,Subject_Result,Subject_FormattedResult>;
}
interface WebEntitiesRelated {
  subjects: WebMappingRelated<Subject_RelatedOne,Subject_RelatedMany>;
}
interface WebEntitiesCUDA {
  subjects: WebMappingCUDA<Subject_Create,Subject_Update,Subject_Select>;
}
