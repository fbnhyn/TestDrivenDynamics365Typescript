interface KbArticleTemplate_Base extends WebEntity {
  componentstate?: componentstate | null;
  createdon?: Date | null;
  description?: string | null;
  formatxml?: string | null;
  importsequencenumber?: number | null;
  introducedversion?: string | null;
  isactive?: boolean | null;
  iscustomizable?: any | null;
  ismanaged?: boolean | null;
  kbarticletemplateid?: string | null;
  kbarticletemplateidunique?: string | null;
  languagecode?: number | null;
  modifiedon?: Date | null;
  overriddencreatedon?: Date | null;
  overwritetime?: Date | null;
  solutionid?: string | null;
  structurexml?: string | null;
  supportingsolutionid?: string | null;
  title?: string | null;
  versionnumber?: number | null;
}
interface KbArticleTemplate_Relationships {
  KbArticleTemplate_AsyncOperations?: AsyncOperation_Result[] | null;
  KbArticleTemplate_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  KbArticleTemplate_ProcessSessions?: ProcessSession_Result[] | null;
  KbArticleTemplate_SyncErrors?: SyncError_Result[] | null;
  kb_article_template_kb_articles?: KbArticle_Result[] | null;
  userentityinstancedata_kbarticletemplate?: UserEntityInstanceData_Result[] | null;
}
interface KbArticleTemplate extends KbArticleTemplate_Base, KbArticleTemplate_Relationships {
}
interface KbArticleTemplate_Create extends KbArticleTemplate {
}
interface KbArticleTemplate_Update extends KbArticleTemplate {
}
interface KbArticleTemplate_Select {
  componentstate: WebAttribute<KbArticleTemplate_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  createdby_guid: WebAttribute<KbArticleTemplate_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<KbArticleTemplate_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<KbArticleTemplate_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  description: WebAttribute<KbArticleTemplate_Select, { description: string | null }, {  }>;
  formatxml: WebAttribute<KbArticleTemplate_Select, { formatxml: string | null }, {  }>;
  importsequencenumber: WebAttribute<KbArticleTemplate_Select, { importsequencenumber: number | null }, {  }>;
  introducedversion: WebAttribute<KbArticleTemplate_Select, { introducedversion: string | null }, {  }>;
  isactive: WebAttribute<KbArticleTemplate_Select, { isactive: boolean | null }, {  }>;
  iscustomizable: WebAttribute<KbArticleTemplate_Select, { iscustomizable: any | null }, {  }>;
  ismanaged: WebAttribute<KbArticleTemplate_Select, { ismanaged: boolean | null }, {  }>;
  kbarticletemplateid: WebAttribute<KbArticleTemplate_Select, { kbarticletemplateid: string | null }, {  }>;
  kbarticletemplateidunique: WebAttribute<KbArticleTemplate_Select, { kbarticletemplateidunique: string | null }, {  }>;
  languagecode: WebAttribute<KbArticleTemplate_Select, { languagecode: number | null }, {  }>;
  modifiedby_guid: WebAttribute<KbArticleTemplate_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<KbArticleTemplate_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<KbArticleTemplate_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  organizationid_guid: WebAttribute<KbArticleTemplate_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overriddencreatedon: WebAttribute<KbArticleTemplate_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  overwritetime: WebAttribute<KbArticleTemplate_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  solutionid: WebAttribute<KbArticleTemplate_Select, { solutionid: string | null }, {  }>;
  structurexml: WebAttribute<KbArticleTemplate_Select, { structurexml: string | null }, {  }>;
  supportingsolutionid: WebAttribute<KbArticleTemplate_Select, { supportingsolutionid: string | null }, {  }>;
  title: WebAttribute<KbArticleTemplate_Select, { title: string | null }, {  }>;
  versionnumber: WebAttribute<KbArticleTemplate_Select, { versionnumber: number | null }, {  }>;
}
interface KbArticleTemplate_Filter {
  componentstate: componentstate;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  description: string;
  formatxml: string;
  importsequencenumber: number;
  introducedversion: string;
  isactive: boolean;
  iscustomizable: any;
  ismanaged: boolean;
  kbarticletemplateid: XQW.Guid;
  kbarticletemplateidunique: XQW.Guid;
  languagecode: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  organizationid_guid: XQW.Guid;
  overriddencreatedon: Date;
  overwritetime: Date;
  solutionid: XQW.Guid;
  structurexml: string;
  supportingsolutionid: XQW.Guid;
  title: string;
  versionnumber: number;
}
interface KbArticleTemplate_Expand {
  KbArticleTemplate_AsyncOperations: WebExpand<KbArticleTemplate_Expand, AsyncOperation_Select, AsyncOperation_Filter, { KbArticleTemplate_AsyncOperations: AsyncOperation_Result[] }>;
  KbArticleTemplate_BulkDeleteFailures: WebExpand<KbArticleTemplate_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { KbArticleTemplate_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  KbArticleTemplate_ProcessSessions: WebExpand<KbArticleTemplate_Expand, ProcessSession_Select, ProcessSession_Filter, { KbArticleTemplate_ProcessSessions: ProcessSession_Result[] }>;
  KbArticleTemplate_SyncErrors: WebExpand<KbArticleTemplate_Expand, SyncError_Select, SyncError_Filter, { KbArticleTemplate_SyncErrors: SyncError_Result[] }>;
  createdby: WebExpand<KbArticleTemplate_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<KbArticleTemplate_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  kb_article_template_kb_articles: WebExpand<KbArticleTemplate_Expand, KbArticle_Select, KbArticle_Filter, { kb_article_template_kb_articles: KbArticle_Result[] }>;
  modifiedby: WebExpand<KbArticleTemplate_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<KbArticleTemplate_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  organizationid: WebExpand<KbArticleTemplate_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
  userentityinstancedata_kbarticletemplate: WebExpand<KbArticleTemplate_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { userentityinstancedata_kbarticletemplate: UserEntityInstanceData_Result[] }>;
}
interface KbArticleTemplate_FormattedResult {
  componentstate_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  organizationid_formatted?: string;
  overriddencreatedon_formatted?: string;
  overwritetime_formatted?: string;
}
interface KbArticleTemplate_Result extends KbArticleTemplate_Base, KbArticleTemplate_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
}
interface KbArticleTemplate_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
}
interface KbArticleTemplate_RelatedMany {
  KbArticleTemplate_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  KbArticleTemplate_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  KbArticleTemplate_ProcessSessions: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  KbArticleTemplate_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  kb_article_template_kb_articles: WebMappingRetrieve<KbArticle_Select,KbArticle_Expand,KbArticle_Filter,KbArticle_Fixed,KbArticle_Result,KbArticle_FormattedResult>;
  userentityinstancedata_kbarticletemplate: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  kbarticletemplates: WebMappingRetrieve<KbArticleTemplate_Select,KbArticleTemplate_Expand,KbArticleTemplate_Filter,KbArticleTemplate_Fixed,KbArticleTemplate_Result,KbArticleTemplate_FormattedResult>;
}
interface WebEntitiesRelated {
  kbarticletemplates: WebMappingRelated<KbArticleTemplate_RelatedOne,KbArticleTemplate_RelatedMany>;
}
interface WebEntitiesCUDA {
  kbarticletemplates: WebMappingCUDA<KbArticleTemplate_Create,KbArticleTemplate_Update,KbArticleTemplate_Select>;
}
