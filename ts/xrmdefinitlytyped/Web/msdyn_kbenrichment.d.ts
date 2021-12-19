interface msdyn_kbenrichment_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_kbenrichmentid?: string | null;
  msdyn_name?: string | null;
  msdyn_summary?: string | null;
  msdyn_tags?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_kbenrichment_statecode | null;
  statuscode?: msdyn_kbenrichment_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_kbenrichment_Relationships {
  msdyn_kbenrichment_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_kbenrichment_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_kbenrichment_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_kbenrichment_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_kbenrichment_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_kbenrichment_SyncErrors?: SyncError_Result[] | null;
  msdyn_kbenrichment_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_kbenrichment extends msdyn_kbenrichment_Base, msdyn_kbenrichment_Relationships {
  msdyn_kbid_bind$knowledgearticles?: string | null;
}
interface msdyn_kbenrichment_Create extends msdyn_kbenrichment {
}
interface msdyn_kbenrichment_Update extends msdyn_kbenrichment {
}
interface msdyn_kbenrichment_Select {
  createdby_guid: WebAttribute<msdyn_kbenrichment_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_kbenrichment_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_kbenrichment_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_kbenrichment_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_kbenrichment_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_kbenrichment_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_kbenrichment_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_kbenrichmentid: WebAttribute<msdyn_kbenrichment_Select, { msdyn_kbenrichmentid: string | null }, {  }>;
  msdyn_kbid_guid: WebAttribute<msdyn_kbenrichment_Select, { msdyn_kbid_guid: string | null }, { msdyn_kbid_formatted?: string }>;
  msdyn_name: WebAttribute<msdyn_kbenrichment_Select, { msdyn_name: string | null }, {  }>;
  msdyn_summary: WebAttribute<msdyn_kbenrichment_Select, { msdyn_summary: string | null }, {  }>;
  msdyn_tags: WebAttribute<msdyn_kbenrichment_Select, { msdyn_tags: string | null }, {  }>;
  organizationid_guid: WebAttribute<msdyn_kbenrichment_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_kbenrichment_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  statecode: WebAttribute<msdyn_kbenrichment_Select, { statecode: msdyn_kbenrichment_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_kbenrichment_Select, { statuscode: msdyn_kbenrichment_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_kbenrichment_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_kbenrichment_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_kbenrichment_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_kbenrichment_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_kbenrichmentid: XQW.Guid;
  msdyn_kbid_guid: XQW.Guid;
  msdyn_name: string;
  msdyn_summary: string;
  msdyn_tags: string;
  organizationid_guid: XQW.Guid;
  overriddencreatedon: Date;
  statecode: msdyn_kbenrichment_statecode;
  statuscode: msdyn_kbenrichment_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_kbenrichment_Expand {
  createdby: WebExpand<msdyn_kbenrichment_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_kbenrichment_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_kbenrichment_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_kbenrichment_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_kbenrichment_AsyncOperations: WebExpand<msdyn_kbenrichment_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_kbenrichment_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_kbenrichment_BulkDeleteFailures: WebExpand<msdyn_kbenrichment_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_kbenrichment_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_kbenrichment_MailboxTrackingFolders: WebExpand<msdyn_kbenrichment_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_kbenrichment_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_kbenrichment_PrincipalObjectAttributeAccesses: WebExpand<msdyn_kbenrichment_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_kbenrichment_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_kbenrichment_ProcessSession: WebExpand<msdyn_kbenrichment_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_kbenrichment_ProcessSession: ProcessSession_Result[] }>;
  msdyn_kbenrichment_SyncErrors: WebExpand<msdyn_kbenrichment_Expand, SyncError_Select, SyncError_Filter, { msdyn_kbenrichment_SyncErrors: SyncError_Result[] }>;
  msdyn_kbenrichment_UserEntityInstanceDatas: WebExpand<msdyn_kbenrichment_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_kbenrichment_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_kbid: WebExpand<msdyn_kbenrichment_Expand, KnowledgeArticle_Select, KnowledgeArticle_Filter, { msdyn_kbid: KnowledgeArticle_Result }>;
  organizationid: WebExpand<msdyn_kbenrichment_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
}
interface msdyn_kbenrichment_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_kbid_formatted?: string;
  organizationid_formatted?: string;
  overriddencreatedon_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_kbenrichment_Result extends msdyn_kbenrichment_Base, msdyn_kbenrichment_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_kbid_guid: string | null;
  organizationid_guid: string | null;
}
interface msdyn_kbenrichment_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_kbid: WebMappingRetrieve<KnowledgeArticle_Select,KnowledgeArticle_Expand,KnowledgeArticle_Filter,KnowledgeArticle_Fixed,KnowledgeArticle_Result,KnowledgeArticle_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
}
interface msdyn_kbenrichment_RelatedMany {
  msdyn_kbenrichment_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_kbenrichment_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_kbenrichment_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_kbenrichment_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_kbenrichment_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_kbenrichment_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_kbenrichment_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_kbenrichments: WebMappingRetrieve<msdyn_kbenrichment_Select,msdyn_kbenrichment_Expand,msdyn_kbenrichment_Filter,msdyn_kbenrichment_Fixed,msdyn_kbenrichment_Result,msdyn_kbenrichment_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_kbenrichments: WebMappingRelated<msdyn_kbenrichment_RelatedOne,msdyn_kbenrichment_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_kbenrichments: WebMappingCUDA<msdyn_kbenrichment_Create,msdyn_kbenrichment_Update,msdyn_kbenrichment_Select>;
}
