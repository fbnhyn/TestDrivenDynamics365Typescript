interface msdyusd_search_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyusd_direction?: msdyusd_search_msdyusd_direction | null;
  msdyusd_fetchxml?: string | null;
  msdyusd_name?: string | null;
  msdyusd_searchid?: string | null;
  msdyusd_searchorder?: number | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyusd_search_statecode | null;
  statuscode?: msdyusd_search_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyusd_search_Relationships {
  msdyusd_search_Annotations?: Annotation_Result[] | null;
  msdyusd_search_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyusd_search_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyusd_search_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyusd_search_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyusd_search_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyusd_search_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyusd_search_ProcessSession?: ProcessSession_Result[] | null;
  msdyusd_search_SyncErrors?: SyncError_Result[] | null;
  msdyusd_search_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  msdyusd_windowroute_ctisearch?: msdyusd_windowroute_Result[] | null;
}
interface msdyusd_search extends msdyusd_search_Base, msdyusd_search_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyusd_search_Create extends msdyusd_search {
}
interface msdyusd_search_Update extends msdyusd_search {
}
interface msdyusd_search_Select {
  createdby_guid: WebAttribute<msdyusd_search_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyusd_search_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyusd_search_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyusd_search_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyusd_search_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyusd_search_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyusd_search_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyusd_direction: WebAttribute<msdyusd_search_Select, { msdyusd_direction: msdyusd_search_msdyusd_direction | null }, { msdyusd_direction_formatted?: string }>;
  msdyusd_fetchxml: WebAttribute<msdyusd_search_Select, { msdyusd_fetchxml: string | null }, {  }>;
  msdyusd_name: WebAttribute<msdyusd_search_Select, { msdyusd_name: string | null }, {  }>;
  msdyusd_searchid: WebAttribute<msdyusd_search_Select, { msdyusd_searchid: string | null }, {  }>;
  msdyusd_searchorder: WebAttribute<msdyusd_search_Select, { msdyusd_searchorder: number | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyusd_search_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyusd_search_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyusd_search_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyusd_search_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyusd_search_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyusd_search_Select, { statecode: msdyusd_search_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyusd_search_Select, { statuscode: msdyusd_search_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyusd_search_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyusd_search_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyusd_search_Select, { versionnumber: number | null }, {  }>;
}
interface msdyusd_search_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyusd_direction: msdyusd_search_msdyusd_direction;
  msdyusd_fetchxml: string;
  msdyusd_name: string;
  msdyusd_searchid: XQW.Guid;
  msdyusd_searchorder: number;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyusd_search_statecode;
  statuscode: msdyusd_search_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyusd_search_Expand {
  createdby: WebExpand<msdyusd_search_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyusd_search_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyusd_search_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyusd_search_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyusd_search_Annotations: WebExpand<msdyusd_search_Expand, Annotation_Select, Annotation_Filter, { msdyusd_search_Annotations: Annotation_Result[] }>;
  msdyusd_search_AsyncOperations: WebExpand<msdyusd_search_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyusd_search_AsyncOperations: AsyncOperation_Result[] }>;
  msdyusd_search_BulkDeleteFailures: WebExpand<msdyusd_search_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyusd_search_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyusd_search_DuplicateBaseRecord: WebExpand<msdyusd_search_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyusd_search_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyusd_search_DuplicateMatchingRecord: WebExpand<msdyusd_search_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyusd_search_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyusd_search_MailboxTrackingFolders: WebExpand<msdyusd_search_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyusd_search_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyusd_search_PrincipalObjectAttributeAccesses: WebExpand<msdyusd_search_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyusd_search_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyusd_search_ProcessSession: WebExpand<msdyusd_search_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyusd_search_ProcessSession: ProcessSession_Result[] }>;
  msdyusd_search_SyncErrors: WebExpand<msdyusd_search_Expand, SyncError_Select, SyncError_Filter, { msdyusd_search_SyncErrors: SyncError_Result[] }>;
  msdyusd_search_UserEntityInstanceDatas: WebExpand<msdyusd_search_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyusd_search_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyusd_windowroute_ctisearch: WebExpand<msdyusd_search_Expand, msdyusd_windowroute_Select, msdyusd_windowroute_Filter, { msdyusd_windowroute_ctisearch: msdyusd_windowroute_Result[] }>;
  ownerid: WebExpand<msdyusd_search_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyusd_search_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyusd_search_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyusd_search_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyusd_search_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyusd_direction_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyusd_search_Result extends msdyusd_search_Base, msdyusd_search_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyusd_search_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyusd_search_RelatedMany {
  msdyusd_search_Annotations: WebMappingRetrieve<Annotation_Select,Annotation_Expand,Annotation_Filter,Annotation_Fixed,Annotation_Result,Annotation_FormattedResult>;
  msdyusd_search_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyusd_search_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyusd_search_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyusd_search_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyusd_search_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyusd_search_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyusd_search_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyusd_search_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyusd_search_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  msdyusd_windowroute_ctisearch: WebMappingRetrieve<msdyusd_windowroute_Select,msdyusd_windowroute_Expand,msdyusd_windowroute_Filter,msdyusd_windowroute_Fixed,msdyusd_windowroute_Result,msdyusd_windowroute_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyusd_searchs: WebMappingRetrieve<msdyusd_search_Select,msdyusd_search_Expand,msdyusd_search_Filter,msdyusd_search_Fixed,msdyusd_search_Result,msdyusd_search_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyusd_searchs: WebMappingRelated<msdyusd_search_RelatedOne,msdyusd_search_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyusd_searchs: WebMappingCUDA<msdyusd_search_Create,msdyusd_search_Update,msdyusd_search_Select>;
}
