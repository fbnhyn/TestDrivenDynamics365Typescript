interface msdyn_knowledgearticletemplate_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_LanguageLocaleIdName?: string | null;
  msdyn_content?: string | null;
  msdyn_description?: string | null;
  msdyn_isinternal?: boolean | null;
  msdyn_keywords?: string | null;
  msdyn_knowledgearticletemplateid?: string | null;
  msdyn_languagelocaleid?: string | null;
  msdyn_name?: string | null;
  msdyn_title?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_knowledgearticletemplate_statecode | null;
  statuscode?: msdyn_knowledgearticletemplate_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_knowledgearticletemplate_Relationships {
  msdyn_knowledgearticletemplate_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_knowledgearticletemplate_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_knowledgearticletemplate_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_knowledgearticletemplate_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_knowledgearticletemplate_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_knowledgearticletemplate_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_knowledgearticletemplate_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_knowledgearticletemplate_QueueItems?: QueueItem_Result[] | null;
  msdyn_knowledgearticletemplate_SharePointDocumentLocations?: SharePointDocumentLocation_Result[] | null;
  msdyn_knowledgearticletemplate_SharePointDocuments?: SharePointDocument_Result[] | null;
  msdyn_knowledgearticletemplate_SyncErrors?: SyncError_Result[] | null;
  msdyn_knowledgearticletemplate_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_knowledgearticletemplate extends msdyn_knowledgearticletemplate_Base, msdyn_knowledgearticletemplate_Relationships {
  msdyn_subjectid_bind$subjects?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_knowledgearticletemplate_Create extends msdyn_knowledgearticletemplate {
}
interface msdyn_knowledgearticletemplate_Update extends msdyn_knowledgearticletemplate {
}
interface msdyn_knowledgearticletemplate_Select {
  createdby_guid: WebAttribute<msdyn_knowledgearticletemplate_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_knowledgearticletemplate_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_knowledgearticletemplate_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_knowledgearticletemplate_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_knowledgearticletemplate_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_knowledgearticletemplate_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_knowledgearticletemplate_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_LanguageLocaleIdName: WebAttribute<msdyn_knowledgearticletemplate_Select, { msdyn_LanguageLocaleIdName: string | null }, {  }>;
  msdyn_content: WebAttribute<msdyn_knowledgearticletemplate_Select, { msdyn_content: string | null }, {  }>;
  msdyn_description: WebAttribute<msdyn_knowledgearticletemplate_Select, { msdyn_description: string | null }, {  }>;
  msdyn_isinternal: WebAttribute<msdyn_knowledgearticletemplate_Select, { msdyn_isinternal: boolean | null }, {  }>;
  msdyn_keywords: WebAttribute<msdyn_knowledgearticletemplate_Select, { msdyn_keywords: string | null }, {  }>;
  msdyn_knowledgearticletemplateid: WebAttribute<msdyn_knowledgearticletemplate_Select, { msdyn_knowledgearticletemplateid: string | null }, {  }>;
  msdyn_languagelocaleid: WebAttribute<msdyn_knowledgearticletemplate_Select, { msdyn_languagelocaleid: string | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_knowledgearticletemplate_Select, { msdyn_name: string | null }, {  }>;
  msdyn_subjectid_guid: WebAttribute<msdyn_knowledgearticletemplate_Select, { msdyn_subjectid_guid: string | null }, { msdyn_subjectid_formatted?: string }>;
  msdyn_title: WebAttribute<msdyn_knowledgearticletemplate_Select, { msdyn_title: string | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_knowledgearticletemplate_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_knowledgearticletemplate_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_knowledgearticletemplate_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_knowledgearticletemplate_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_knowledgearticletemplate_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_knowledgearticletemplate_Select, { statecode: msdyn_knowledgearticletemplate_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_knowledgearticletemplate_Select, { statuscode: msdyn_knowledgearticletemplate_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_knowledgearticletemplate_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_knowledgearticletemplate_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_knowledgearticletemplate_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_knowledgearticletemplate_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_LanguageLocaleIdName: string;
  msdyn_content: string;
  msdyn_description: string;
  msdyn_isinternal: boolean;
  msdyn_keywords: string;
  msdyn_knowledgearticletemplateid: XQW.Guid;
  msdyn_languagelocaleid: string;
  msdyn_name: string;
  msdyn_subjectid_guid: XQW.Guid;
  msdyn_title: string;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_knowledgearticletemplate_statecode;
  statuscode: msdyn_knowledgearticletemplate_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_knowledgearticletemplate_Expand {
  createdby: WebExpand<msdyn_knowledgearticletemplate_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_knowledgearticletemplate_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_knowledgearticletemplate_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_knowledgearticletemplate_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_knowledgearticletemplate_AsyncOperations: WebExpand<msdyn_knowledgearticletemplate_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_knowledgearticletemplate_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_knowledgearticletemplate_BulkDeleteFailures: WebExpand<msdyn_knowledgearticletemplate_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_knowledgearticletemplate_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_knowledgearticletemplate_DuplicateBaseRecord: WebExpand<msdyn_knowledgearticletemplate_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_knowledgearticletemplate_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_knowledgearticletemplate_DuplicateMatchingRecord: WebExpand<msdyn_knowledgearticletemplate_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_knowledgearticletemplate_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_knowledgearticletemplate_MailboxTrackingFolders: WebExpand<msdyn_knowledgearticletemplate_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_knowledgearticletemplate_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_knowledgearticletemplate_PrincipalObjectAttributeAccesses: WebExpand<msdyn_knowledgearticletemplate_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_knowledgearticletemplate_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_knowledgearticletemplate_ProcessSession: WebExpand<msdyn_knowledgearticletemplate_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_knowledgearticletemplate_ProcessSession: ProcessSession_Result[] }>;
  msdyn_knowledgearticletemplate_QueueItems: WebExpand<msdyn_knowledgearticletemplate_Expand, QueueItem_Select, QueueItem_Filter, { msdyn_knowledgearticletemplate_QueueItems: QueueItem_Result[] }>;
  msdyn_knowledgearticletemplate_SharePointDocumentLocations: WebExpand<msdyn_knowledgearticletemplate_Expand, SharePointDocumentLocation_Select, SharePointDocumentLocation_Filter, { msdyn_knowledgearticletemplate_SharePointDocumentLocations: SharePointDocumentLocation_Result[] }>;
  msdyn_knowledgearticletemplate_SharePointDocuments: WebExpand<msdyn_knowledgearticletemplate_Expand, SharePointDocument_Select, SharePointDocument_Filter, { msdyn_knowledgearticletemplate_SharePointDocuments: SharePointDocument_Result[] }>;
  msdyn_knowledgearticletemplate_SyncErrors: WebExpand<msdyn_knowledgearticletemplate_Expand, SyncError_Select, SyncError_Filter, { msdyn_knowledgearticletemplate_SyncErrors: SyncError_Result[] }>;
  msdyn_knowledgearticletemplate_UserEntityInstanceDatas: WebExpand<msdyn_knowledgearticletemplate_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_knowledgearticletemplate_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_subjectid: WebExpand<msdyn_knowledgearticletemplate_Expand, Subject_Select, Subject_Filter, { msdyn_subjectid: Subject_Result }>;
  ownerid: WebExpand<msdyn_knowledgearticletemplate_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_knowledgearticletemplate_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_knowledgearticletemplate_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_knowledgearticletemplate_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_knowledgearticletemplate_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_subjectid_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_knowledgearticletemplate_Result extends msdyn_knowledgearticletemplate_Base, msdyn_knowledgearticletemplate_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_subjectid_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_knowledgearticletemplate_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_subjectid: WebMappingRetrieve<Subject_Select,Subject_Expand,Subject_Filter,Subject_Fixed,Subject_Result,Subject_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_knowledgearticletemplate_RelatedMany {
  msdyn_knowledgearticletemplate_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_knowledgearticletemplate_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_knowledgearticletemplate_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_knowledgearticletemplate_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_knowledgearticletemplate_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_knowledgearticletemplate_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_knowledgearticletemplate_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_knowledgearticletemplate_QueueItems: WebMappingRetrieve<QueueItem_Select,QueueItem_Expand,QueueItem_Filter,QueueItem_Fixed,QueueItem_Result,QueueItem_FormattedResult>;
  msdyn_knowledgearticletemplate_SharePointDocumentLocations: WebMappingRetrieve<SharePointDocumentLocation_Select,SharePointDocumentLocation_Expand,SharePointDocumentLocation_Filter,SharePointDocumentLocation_Fixed,SharePointDocumentLocation_Result,SharePointDocumentLocation_FormattedResult>;
  msdyn_knowledgearticletemplate_SharePointDocuments: WebMappingRetrieve<SharePointDocument_Select,SharePointDocument_Expand,SharePointDocument_Filter,SharePointDocument_Fixed,SharePointDocument_Result,SharePointDocument_FormattedResult>;
  msdyn_knowledgearticletemplate_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_knowledgearticletemplate_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_knowledgearticletemplates: WebMappingRetrieve<msdyn_knowledgearticletemplate_Select,msdyn_knowledgearticletemplate_Expand,msdyn_knowledgearticletemplate_Filter,msdyn_knowledgearticletemplate_Fixed,msdyn_knowledgearticletemplate_Result,msdyn_knowledgearticletemplate_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_knowledgearticletemplates: WebMappingRelated<msdyn_knowledgearticletemplate_RelatedOne,msdyn_knowledgearticletemplate_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_knowledgearticletemplates: WebMappingCUDA<msdyn_knowledgearticletemplate_Create,msdyn_knowledgearticletemplate_Update,msdyn_knowledgearticletemplate_Select>;
}
