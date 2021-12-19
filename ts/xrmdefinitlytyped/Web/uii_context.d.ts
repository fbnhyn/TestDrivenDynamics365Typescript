interface UII_context_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  overriddencreatedon?: Date | null;
  statecode?: uii_context_statecode | null;
  statuscode?: uii_context_statuscode | null;
  timezoneruleversionnumber?: number | null;
  uii_contextid?: string | null;
  uii_customerinformation?: string | null;
  uii_name?: string | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface UII_context_Relationships {
  uii_context_AsyncOperations?: AsyncOperation_Result[] | null;
  uii_context_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  uii_context_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  uii_context_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  uii_context_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  uii_context_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  uii_context_ProcessSession?: ProcessSession_Result[] | null;
  uii_context_SyncErrors?: SyncError_Result[] | null;
  uii_context_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface UII_context extends UII_context_Base, UII_context_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface UII_context_Create extends UII_context {
}
interface UII_context_Update extends UII_context {
}
interface UII_context_Select {
  createdby_guid: WebAttribute<UII_context_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<UII_context_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<UII_context_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<UII_context_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<UII_context_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<UII_context_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<UII_context_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  overriddencreatedon: WebAttribute<UII_context_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<UII_context_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<UII_context_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<UII_context_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<UII_context_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<UII_context_Select, { statecode: uii_context_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<UII_context_Select, { statuscode: uii_context_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<UII_context_Select, { timezoneruleversionnumber: number | null }, {  }>;
  uii_contextid: WebAttribute<UII_context_Select, { uii_contextid: string | null }, {  }>;
  uii_customerinformation: WebAttribute<UII_context_Select, { uii_customerinformation: string | null }, {  }>;
  uii_name: WebAttribute<UII_context_Select, { uii_name: string | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<UII_context_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<UII_context_Select, { versionnumber: number | null }, {  }>;
}
interface UII_context_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: uii_context_statecode;
  statuscode: uii_context_statuscode;
  timezoneruleversionnumber: number;
  uii_contextid: XQW.Guid;
  uii_customerinformation: string;
  uii_name: string;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface UII_context_Expand {
  createdby: WebExpand<UII_context_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<UII_context_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<UII_context_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<UII_context_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  ownerid: WebExpand<UII_context_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<UII_context_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<UII_context_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<UII_context_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
  uii_context_AsyncOperations: WebExpand<UII_context_Expand, AsyncOperation_Select, AsyncOperation_Filter, { uii_context_AsyncOperations: AsyncOperation_Result[] }>;
  uii_context_BulkDeleteFailures: WebExpand<UII_context_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { uii_context_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  uii_context_DuplicateBaseRecord: WebExpand<UII_context_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { uii_context_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  uii_context_DuplicateMatchingRecord: WebExpand<UII_context_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { uii_context_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  uii_context_MailboxTrackingFolders: WebExpand<UII_context_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { uii_context_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  uii_context_PrincipalObjectAttributeAccesses: WebExpand<UII_context_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { uii_context_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  uii_context_ProcessSession: WebExpand<UII_context_Expand, ProcessSession_Select, ProcessSession_Filter, { uii_context_ProcessSession: ProcessSession_Result[] }>;
  uii_context_SyncErrors: WebExpand<UII_context_Expand, SyncError_Select, SyncError_Filter, { uii_context_SyncErrors: SyncError_Result[] }>;
  uii_context_UserEntityInstanceDatas: WebExpand<UII_context_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { uii_context_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
}
interface UII_context_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface UII_context_Result extends UII_context_Base, UII_context_Relationships {
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
interface UII_context_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface UII_context_RelatedMany {
  uii_context_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  uii_context_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  uii_context_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  uii_context_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  uii_context_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  uii_context_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  uii_context_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  uii_context_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  uii_context_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  uii_contexts: WebMappingRetrieve<UII_context_Select,UII_context_Expand,UII_context_Filter,UII_context_Fixed,UII_context_Result,UII_context_FormattedResult>;
}
interface WebEntitiesRelated {
  uii_contexts: WebMappingRelated<UII_context_RelatedOne,UII_context_RelatedMany>;
}
interface WebEntitiesCUDA {
  uii_contexts: WebMappingCUDA<UII_context_Create,UII_context_Update,UII_context_Select>;
}
