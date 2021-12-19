interface KbArticleComment_Base extends WebEntity {
  commenttext?: string | null;
  createdon?: Date | null;
  kbarticlecommentid?: string | null;
  modifiedon?: Date | null;
  organizationid?: string | null;
  title?: string | null;
  versionnumber?: number | null;
}
interface KbArticleComment_Relationships {
  KbArticleComment_AsyncOperations?: AsyncOperation_Result[] | null;
  KbArticleComment_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  KbArticleComment_ProcessSessions?: ProcessSession_Result[] | null;
  userentityinstancedata_kbarticlecomment?: UserEntityInstanceData_Result[] | null;
}
interface KbArticleComment extends KbArticleComment_Base, KbArticleComment_Relationships {
  kbarticleid_bind$kbarticles?: string | null;
}
interface KbArticleComment_Create extends KbArticleComment {
}
interface KbArticleComment_Update extends KbArticleComment {
}
interface KbArticleComment_Select {
  commenttext: WebAttribute<KbArticleComment_Select, { commenttext: string | null }, {  }>;
  createdby_guid: WebAttribute<KbArticleComment_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<KbArticleComment_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<KbArticleComment_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  kbarticlecommentid: WebAttribute<KbArticleComment_Select, { kbarticlecommentid: string | null }, {  }>;
  kbarticleid_guid: WebAttribute<KbArticleComment_Select, { kbarticleid_guid: string | null }, { kbarticleid_formatted?: string }>;
  modifiedby_guid: WebAttribute<KbArticleComment_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<KbArticleComment_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<KbArticleComment_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  organizationid: WebAttribute<KbArticleComment_Select, { organizationid: string | null }, {  }>;
  title: WebAttribute<KbArticleComment_Select, { title: string | null }, {  }>;
  versionnumber: WebAttribute<KbArticleComment_Select, { versionnumber: number | null }, {  }>;
}
interface KbArticleComment_Filter {
  commenttext: string;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  kbarticlecommentid: XQW.Guid;
  kbarticleid_guid: XQW.Guid;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  organizationid: XQW.Guid;
  title: string;
  versionnumber: number;
}
interface KbArticleComment_Expand {
  KbArticleComment_AsyncOperations: WebExpand<KbArticleComment_Expand, AsyncOperation_Select, AsyncOperation_Filter, { KbArticleComment_AsyncOperations: AsyncOperation_Result[] }>;
  KbArticleComment_BulkDeleteFailures: WebExpand<KbArticleComment_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { KbArticleComment_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  KbArticleComment_ProcessSessions: WebExpand<KbArticleComment_Expand, ProcessSession_Select, ProcessSession_Filter, { KbArticleComment_ProcessSessions: ProcessSession_Result[] }>;
  createdby: WebExpand<KbArticleComment_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<KbArticleComment_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  kbarticleid: WebExpand<KbArticleComment_Expand, KbArticle_Select, KbArticle_Filter, { kbarticleid: KbArticle_Result }>;
  modifiedby: WebExpand<KbArticleComment_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<KbArticleComment_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  userentityinstancedata_kbarticlecomment: WebExpand<KbArticleComment_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { userentityinstancedata_kbarticlecomment: UserEntityInstanceData_Result[] }>;
}
interface KbArticleComment_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  kbarticleid_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
}
interface KbArticleComment_Result extends KbArticleComment_Base, KbArticleComment_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  kbarticleid_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
}
interface KbArticleComment_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  kbarticleid: WebMappingRetrieve<KbArticle_Select,KbArticle_Expand,KbArticle_Filter,KbArticle_Fixed,KbArticle_Result,KbArticle_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface KbArticleComment_RelatedMany {
  KbArticleComment_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  KbArticleComment_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  KbArticleComment_ProcessSessions: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  userentityinstancedata_kbarticlecomment: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  kbarticlecomments: WebMappingRetrieve<KbArticleComment_Select,KbArticleComment_Expand,KbArticleComment_Filter,KbArticleComment_Fixed,KbArticleComment_Result,KbArticleComment_FormattedResult>;
}
interface WebEntitiesRelated {
  kbarticlecomments: WebMappingRelated<KbArticleComment_RelatedOne,KbArticleComment_RelatedMany>;
}
interface WebEntitiesCUDA {
  kbarticlecomments: WebMappingCUDA<KbArticleComment_Create,KbArticleComment_Update,KbArticleComment_Select>;
}
