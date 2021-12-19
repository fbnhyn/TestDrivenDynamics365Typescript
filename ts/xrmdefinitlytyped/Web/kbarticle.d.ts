interface KbArticle_Base extends WebEntity {
  articlexml?: string | null;
  comments?: string | null;
  content?: string | null;
  createdon?: Date | null;
  description?: string | null;
  entityimageid?: string | null;
  exchangerate?: number | null;
  importsequencenumber?: number | null;
  kbarticleid?: string | null;
  keywords?: string | null;
  languagecode?: number | null;
  modifiedon?: Date | null;
  number?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: kbarticle_statecode | null;
  statuscode?: kbarticle_statuscode | null;
  title?: string | null;
  versionnumber?: number | null;
}
interface KbArticle_Relationships {
  KbArticle_Annotation?: Annotation_Result[] | null;
  KbArticle_AsyncOperations?: AsyncOperation_Result[] | null;
  KbArticle_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  KbArticle_DocumentIndex?: DocumentIndex_Result[] | null;
  KbArticle_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  KbArticle_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  KbArticle_ProcessSessions?: ProcessSession_Result[] | null;
  KbArticle_SharepointDocument?: SharePointDocument_Result[] | null;
  KbArticle_SharepointDocumentLocation?: SharePointDocumentLocation_Result[] | null;
  KbArticle_SyncErrors?: SyncError_Result[] | null;
  entityimageid_imagedescriptor?: ImageDescriptor_Result | null;
  kbarticle_comments?: KbArticleComment_Result[] | null;
  kbarticle_incidents?: Incident_Result[] | null;
  kbarticle_principalobjectattributeaccess?: PrincipalObjectAttributeAccess_Result[] | null;
  userentityinstancedata_kbarticle?: UserEntityInstanceData_Result[] | null;
}
interface KbArticle extends KbArticle_Base, KbArticle_Relationships {
  kbarticletemplateid_bind$kbarticletemplates?: string | null;
  subjectid_bind$subjects?: string | null;
  transactioncurrencyid_bind$transactioncurrencies?: string | null;
}
interface KbArticle_Create extends KbArticle {
}
interface KbArticle_Update extends KbArticle {
}
interface KbArticle_Select {
  articlexml: WebAttribute<KbArticle_Select, { articlexml: string | null }, {  }>;
  comments: WebAttribute<KbArticle_Select, { comments: string | null }, {  }>;
  content: WebAttribute<KbArticle_Select, { content: string | null }, {  }>;
  createdby_guid: WebAttribute<KbArticle_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<KbArticle_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<KbArticle_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  description: WebAttribute<KbArticle_Select, { description: string | null }, {  }>;
  entityimageid: WebAttribute<KbArticle_Select, { entityimageid: string | null }, {  }>;
  exchangerate: WebAttribute<KbArticle_Select, { exchangerate: number | null }, {  }>;
  importsequencenumber: WebAttribute<KbArticle_Select, { importsequencenumber: number | null }, {  }>;
  kbarticleid: WebAttribute<KbArticle_Select, { kbarticleid: string | null }, {  }>;
  kbarticletemplateid_guid: WebAttribute<KbArticle_Select, { kbarticletemplateid_guid: string | null }, { kbarticletemplateid_formatted?: string }>;
  keywords: WebAttribute<KbArticle_Select, { keywords: string | null }, {  }>;
  languagecode: WebAttribute<KbArticle_Select, { languagecode: number | null }, {  }>;
  modifiedby_guid: WebAttribute<KbArticle_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<KbArticle_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<KbArticle_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  number: WebAttribute<KbArticle_Select, { number: string | null }, {  }>;
  organizationid_guid: WebAttribute<KbArticle_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overriddencreatedon: WebAttribute<KbArticle_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  statecode: WebAttribute<KbArticle_Select, { statecode: kbarticle_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<KbArticle_Select, { statuscode: kbarticle_statuscode | null }, { statuscode_formatted?: string }>;
  subjectid_guid: WebAttribute<KbArticle_Select, { subjectid_guid: string | null }, { subjectid_formatted?: string }>;
  title: WebAttribute<KbArticle_Select, { title: string | null }, {  }>;
  transactioncurrencyid_guid: WebAttribute<KbArticle_Select, { transactioncurrencyid_guid: string | null }, { transactioncurrencyid_formatted?: string }>;
  versionnumber: WebAttribute<KbArticle_Select, { versionnumber: number | null }, {  }>;
}
interface KbArticle_Filter {
  articlexml: string;
  comments: string;
  content: string;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  description: string;
  entityimageid: XQW.Guid;
  exchangerate: any;
  importsequencenumber: number;
  kbarticleid: XQW.Guid;
  kbarticletemplateid_guid: XQW.Guid;
  keywords: string;
  languagecode: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  number: string;
  organizationid_guid: XQW.Guid;
  overriddencreatedon: Date;
  statecode: kbarticle_statecode;
  statuscode: kbarticle_statuscode;
  subjectid_guid: XQW.Guid;
  title: string;
  transactioncurrencyid_guid: XQW.Guid;
  versionnumber: number;
}
interface KbArticle_Expand {
  KbArticle_Annotation: WebExpand<KbArticle_Expand, Annotation_Select, Annotation_Filter, { KbArticle_Annotation: Annotation_Result[] }>;
  KbArticle_AsyncOperations: WebExpand<KbArticle_Expand, AsyncOperation_Select, AsyncOperation_Filter, { KbArticle_AsyncOperations: AsyncOperation_Result[] }>;
  KbArticle_BulkDeleteFailures: WebExpand<KbArticle_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { KbArticle_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  KbArticle_DocumentIndex: WebExpand<KbArticle_Expand, DocumentIndex_Select, DocumentIndex_Filter, { KbArticle_DocumentIndex: DocumentIndex_Result[] }>;
  KbArticle_DuplicateBaseRecord: WebExpand<KbArticle_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { KbArticle_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  KbArticle_DuplicateMatchingRecord: WebExpand<KbArticle_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { KbArticle_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  KbArticle_ProcessSessions: WebExpand<KbArticle_Expand, ProcessSession_Select, ProcessSession_Filter, { KbArticle_ProcessSessions: ProcessSession_Result[] }>;
  KbArticle_SharepointDocument: WebExpand<KbArticle_Expand, SharePointDocument_Select, SharePointDocument_Filter, { KbArticle_SharepointDocument: SharePointDocument_Result[] }>;
  KbArticle_SharepointDocumentLocation: WebExpand<KbArticle_Expand, SharePointDocumentLocation_Select, SharePointDocumentLocation_Filter, { KbArticle_SharepointDocumentLocation: SharePointDocumentLocation_Result[] }>;
  KbArticle_SyncErrors: WebExpand<KbArticle_Expand, SyncError_Select, SyncError_Filter, { KbArticle_SyncErrors: SyncError_Result[] }>;
  createdby: WebExpand<KbArticle_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<KbArticle_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  entityimageid_imagedescriptor: WebExpand<KbArticle_Expand, ImageDescriptor_Select, ImageDescriptor_Filter, { entityimageid_imagedescriptor: ImageDescriptor_Result }>;
  kbarticle_comments: WebExpand<KbArticle_Expand, KbArticleComment_Select, KbArticleComment_Filter, { kbarticle_comments: KbArticleComment_Result[] }>;
  kbarticle_incidents: WebExpand<KbArticle_Expand, Incident_Select, Incident_Filter, { kbarticle_incidents: Incident_Result[] }>;
  kbarticle_principalobjectattributeaccess: WebExpand<KbArticle_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { kbarticle_principalobjectattributeaccess: PrincipalObjectAttributeAccess_Result[] }>;
  kbarticletemplateid: WebExpand<KbArticle_Expand, KbArticleTemplate_Select, KbArticleTemplate_Filter, { kbarticletemplateid: KbArticleTemplate_Result }>;
  modifiedby: WebExpand<KbArticle_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<KbArticle_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  organizationid: WebExpand<KbArticle_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
  subjectid: WebExpand<KbArticle_Expand, Subject_Select, Subject_Filter, { subjectid: Subject_Result }>;
  transactioncurrencyid: WebExpand<KbArticle_Expand, TransactionCurrency_Select, TransactionCurrency_Filter, { transactioncurrencyid: TransactionCurrency_Result }>;
  userentityinstancedata_kbarticle: WebExpand<KbArticle_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { userentityinstancedata_kbarticle: UserEntityInstanceData_Result[] }>;
}
interface KbArticle_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  kbarticletemplateid_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  organizationid_formatted?: string;
  overriddencreatedon_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
  subjectid_formatted?: string;
  transactioncurrencyid_formatted?: string;
}
interface KbArticle_Result extends KbArticle_Base, KbArticle_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  kbarticletemplateid_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
  subjectid_guid: string | null;
  transactioncurrencyid_guid: string | null;
}
interface KbArticle_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  entityimageid_imagedescriptor: WebMappingRetrieve<ImageDescriptor_Select,ImageDescriptor_Expand,ImageDescriptor_Filter,ImageDescriptor_Fixed,ImageDescriptor_Result,ImageDescriptor_FormattedResult>;
  kbarticletemplateid: WebMappingRetrieve<KbArticleTemplate_Select,KbArticleTemplate_Expand,KbArticleTemplate_Filter,KbArticleTemplate_Fixed,KbArticleTemplate_Result,KbArticleTemplate_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
  subjectid: WebMappingRetrieve<Subject_Select,Subject_Expand,Subject_Filter,Subject_Fixed,Subject_Result,Subject_FormattedResult>;
  transactioncurrencyid: WebMappingRetrieve<TransactionCurrency_Select,TransactionCurrency_Expand,TransactionCurrency_Filter,TransactionCurrency_Fixed,TransactionCurrency_Result,TransactionCurrency_FormattedResult>;
}
interface KbArticle_RelatedMany {
  KbArticle_Annotation: WebMappingRetrieve<Annotation_Select,Annotation_Expand,Annotation_Filter,Annotation_Fixed,Annotation_Result,Annotation_FormattedResult>;
  KbArticle_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  KbArticle_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  KbArticle_DocumentIndex: WebMappingRetrieve<DocumentIndex_Select,DocumentIndex_Expand,DocumentIndex_Filter,DocumentIndex_Fixed,DocumentIndex_Result,DocumentIndex_FormattedResult>;
  KbArticle_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  KbArticle_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  KbArticle_ProcessSessions: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  KbArticle_SharepointDocument: WebMappingRetrieve<SharePointDocument_Select,SharePointDocument_Expand,SharePointDocument_Filter,SharePointDocument_Fixed,SharePointDocument_Result,SharePointDocument_FormattedResult>;
  KbArticle_SharepointDocumentLocation: WebMappingRetrieve<SharePointDocumentLocation_Select,SharePointDocumentLocation_Expand,SharePointDocumentLocation_Filter,SharePointDocumentLocation_Fixed,SharePointDocumentLocation_Result,SharePointDocumentLocation_FormattedResult>;
  KbArticle_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  kbarticle_comments: WebMappingRetrieve<KbArticleComment_Select,KbArticleComment_Expand,KbArticleComment_Filter,KbArticleComment_Fixed,KbArticleComment_Result,KbArticleComment_FormattedResult>;
  kbarticle_incidents: WebMappingRetrieve<Incident_Select,Incident_Expand,Incident_Filter,Incident_Fixed,Incident_Result,Incident_FormattedResult>;
  kbarticle_principalobjectattributeaccess: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  userentityinstancedata_kbarticle: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  kbarticles: WebMappingRetrieve<KbArticle_Select,KbArticle_Expand,KbArticle_Filter,KbArticle_Fixed,KbArticle_Result,KbArticle_FormattedResult>;
}
interface WebEntitiesRelated {
  kbarticles: WebMappingRelated<KbArticle_RelatedOne,KbArticle_RelatedMany>;
}
interface WebEntitiesCUDA {
  kbarticles: WebMappingCUDA<KbArticle_Create,KbArticle_Update,KbArticle_Select>;
}
