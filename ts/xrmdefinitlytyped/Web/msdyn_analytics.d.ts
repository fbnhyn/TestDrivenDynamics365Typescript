interface msdyn_analytics_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_analyticsid?: string | null;
  msdyn_ispaasenabled?: boolean | null;
  msdyn_keyvaulturi?: string | null;
  msdyn_nativeappid?: string | null;
  msdyn_ocanalyticspreviewenable?: boolean | null;
  msdyn_title?: string | null;
  msdyn_workspaceid?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_analytics_statecode | null;
  statuscode?: msdyn_analytics_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_analytics_Relationships {
  msdyn_analytics_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_analytics_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_analytics_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_analytics_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_analytics_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_analytics_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_analytics_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_analytics_SyncErrors?: SyncError_Result[] | null;
  msdyn_analytics_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_analytics extends msdyn_analytics_Base, msdyn_analytics_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_analytics_Create extends msdyn_analytics {
}
interface msdyn_analytics_Update extends msdyn_analytics {
}
interface msdyn_analytics_Select {
  createdby_guid: WebAttribute<msdyn_analytics_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_analytics_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_analytics_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_analytics_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_analytics_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_analytics_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_analytics_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_analyticsid: WebAttribute<msdyn_analytics_Select, { msdyn_analyticsid: string | null }, {  }>;
  msdyn_ispaasenabled: WebAttribute<msdyn_analytics_Select, { msdyn_ispaasenabled: boolean | null }, {  }>;
  msdyn_keyvaulturi: WebAttribute<msdyn_analytics_Select, { msdyn_keyvaulturi: string | null }, {  }>;
  msdyn_nativeappid: WebAttribute<msdyn_analytics_Select, { msdyn_nativeappid: string | null }, {  }>;
  msdyn_ocanalyticspreviewenable: WebAttribute<msdyn_analytics_Select, { msdyn_ocanalyticspreviewenable: boolean | null }, {  }>;
  msdyn_title: WebAttribute<msdyn_analytics_Select, { msdyn_title: string | null }, {  }>;
  msdyn_workspaceid: WebAttribute<msdyn_analytics_Select, { msdyn_workspaceid: string | null }, {  }>;
  organizationid_guid: WebAttribute<msdyn_analytics_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_analytics_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_analytics_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_analytics_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_analytics_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_analytics_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_analytics_Select, { statecode: msdyn_analytics_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_analytics_Select, { statuscode: msdyn_analytics_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_analytics_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_analytics_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_analytics_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_analytics_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_analyticsid: XQW.Guid;
  msdyn_ispaasenabled: boolean;
  msdyn_keyvaulturi: string;
  msdyn_nativeappid: string;
  msdyn_ocanalyticspreviewenable: boolean;
  msdyn_title: string;
  msdyn_workspaceid: string;
  organizationid_guid: XQW.Guid;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_analytics_statecode;
  statuscode: msdyn_analytics_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_analytics_Expand {
  createdby: WebExpand<msdyn_analytics_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_analytics_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_analytics_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_analytics_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_analytics_AsyncOperations: WebExpand<msdyn_analytics_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_analytics_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_analytics_BulkDeleteFailures: WebExpand<msdyn_analytics_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_analytics_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_analytics_DuplicateBaseRecord: WebExpand<msdyn_analytics_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_analytics_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_analytics_DuplicateMatchingRecord: WebExpand<msdyn_analytics_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_analytics_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_analytics_MailboxTrackingFolders: WebExpand<msdyn_analytics_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_analytics_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_analytics_PrincipalObjectAttributeAccesses: WebExpand<msdyn_analytics_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_analytics_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_analytics_ProcessSession: WebExpand<msdyn_analytics_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_analytics_ProcessSession: ProcessSession_Result[] }>;
  msdyn_analytics_SyncErrors: WebExpand<msdyn_analytics_Expand, SyncError_Select, SyncError_Filter, { msdyn_analytics_SyncErrors: SyncError_Result[] }>;
  msdyn_analytics_UserEntityInstanceDatas: WebExpand<msdyn_analytics_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_analytics_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  ownerid: WebExpand<msdyn_analytics_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_analytics_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_analytics_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_analytics_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_analytics_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  organizationid_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_analytics_Result extends msdyn_analytics_Base, msdyn_analytics_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_analytics_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_analytics_RelatedMany {
  msdyn_analytics_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_analytics_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_analytics_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_analytics_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_analytics_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_analytics_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_analytics_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_analytics_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_analytics_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_analyticses: WebMappingRetrieve<msdyn_analytics_Select,msdyn_analytics_Expand,msdyn_analytics_Filter,msdyn_analytics_Fixed,msdyn_analytics_Result,msdyn_analytics_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_analyticses: WebMappingRelated<msdyn_analytics_RelatedOne,msdyn_analytics_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_analyticses: WebMappingCUDA<msdyn_analytics_Create,msdyn_analytics_Update,msdyn_analytics_Select>;
}
