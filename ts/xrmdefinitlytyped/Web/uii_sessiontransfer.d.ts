interface UII_sessiontransfer_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  overriddencreatedon?: Date | null;
  statecode?: uii_sessiontransfer_statecode | null;
  statuscode?: uii_sessiontransfer_statuscode | null;
  timezoneruleversionnumber?: number | null;
  uii_name?: string | null;
  uii_sessioninformation?: string | null;
  uii_sessiontransferid?: string | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface UII_sessiontransfer_Relationships {
  uii_sessiontransfer_AsyncOperations?: AsyncOperation_Result[] | null;
  uii_sessiontransfer_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  uii_sessiontransfer_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  uii_sessiontransfer_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  uii_sessiontransfer_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  uii_sessiontransfer_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  uii_sessiontransfer_ProcessSession?: ProcessSession_Result[] | null;
  uii_sessiontransfer_SyncErrors?: SyncError_Result[] | null;
  uii_sessiontransfer_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface UII_sessiontransfer extends UII_sessiontransfer_Base, UII_sessiontransfer_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
  uii_toagentid_bind$systemusers?: string | null;
}
interface UII_sessiontransfer_Create extends UII_sessiontransfer {
}
interface UII_sessiontransfer_Update extends UII_sessiontransfer {
}
interface UII_sessiontransfer_Select {
  createdby_guid: WebAttribute<UII_sessiontransfer_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<UII_sessiontransfer_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<UII_sessiontransfer_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<UII_sessiontransfer_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<UII_sessiontransfer_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<UII_sessiontransfer_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<UII_sessiontransfer_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  overriddencreatedon: WebAttribute<UII_sessiontransfer_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<UII_sessiontransfer_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<UII_sessiontransfer_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<UII_sessiontransfer_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<UII_sessiontransfer_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<UII_sessiontransfer_Select, { statecode: uii_sessiontransfer_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<UII_sessiontransfer_Select, { statuscode: uii_sessiontransfer_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<UII_sessiontransfer_Select, { timezoneruleversionnumber: number | null }, {  }>;
  uii_name: WebAttribute<UII_sessiontransfer_Select, { uii_name: string | null }, {  }>;
  uii_sessioninformation: WebAttribute<UII_sessiontransfer_Select, { uii_sessioninformation: string | null }, {  }>;
  uii_sessiontransferid: WebAttribute<UII_sessiontransfer_Select, { uii_sessiontransferid: string | null }, {  }>;
  uii_toagentid_guid: WebAttribute<UII_sessiontransfer_Select, { uii_toagentid_guid: string | null }, { uii_toagentid_formatted?: string }>;
  utcconversiontimezonecode: WebAttribute<UII_sessiontransfer_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<UII_sessiontransfer_Select, { versionnumber: number | null }, {  }>;
}
interface UII_sessiontransfer_Filter {
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
  statecode: uii_sessiontransfer_statecode;
  statuscode: uii_sessiontransfer_statuscode;
  timezoneruleversionnumber: number;
  uii_name: string;
  uii_sessioninformation: string;
  uii_sessiontransferid: XQW.Guid;
  uii_toagentid_guid: XQW.Guid;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface UII_sessiontransfer_Expand {
  createdby: WebExpand<UII_sessiontransfer_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<UII_sessiontransfer_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<UII_sessiontransfer_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<UII_sessiontransfer_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  ownerid: WebExpand<UII_sessiontransfer_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<UII_sessiontransfer_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<UII_sessiontransfer_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<UII_sessiontransfer_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
  uii_sessiontransfer_AsyncOperations: WebExpand<UII_sessiontransfer_Expand, AsyncOperation_Select, AsyncOperation_Filter, { uii_sessiontransfer_AsyncOperations: AsyncOperation_Result[] }>;
  uii_sessiontransfer_BulkDeleteFailures: WebExpand<UII_sessiontransfer_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { uii_sessiontransfer_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  uii_sessiontransfer_DuplicateBaseRecord: WebExpand<UII_sessiontransfer_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { uii_sessiontransfer_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  uii_sessiontransfer_DuplicateMatchingRecord: WebExpand<UII_sessiontransfer_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { uii_sessiontransfer_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  uii_sessiontransfer_MailboxTrackingFolders: WebExpand<UII_sessiontransfer_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { uii_sessiontransfer_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  uii_sessiontransfer_PrincipalObjectAttributeAccesses: WebExpand<UII_sessiontransfer_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { uii_sessiontransfer_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  uii_sessiontransfer_ProcessSession: WebExpand<UII_sessiontransfer_Expand, ProcessSession_Select, ProcessSession_Filter, { uii_sessiontransfer_ProcessSession: ProcessSession_Result[] }>;
  uii_sessiontransfer_SyncErrors: WebExpand<UII_sessiontransfer_Expand, SyncError_Select, SyncError_Filter, { uii_sessiontransfer_SyncErrors: SyncError_Result[] }>;
  uii_sessiontransfer_UserEntityInstanceDatas: WebExpand<UII_sessiontransfer_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { uii_sessiontransfer_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  uii_toagentid: WebExpand<UII_sessiontransfer_Expand, SystemUser_Select, SystemUser_Filter, { uii_toagentid: SystemUser_Result }>;
}
interface UII_sessiontransfer_FormattedResult {
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
  uii_toagentid_formatted?: string;
}
interface UII_sessiontransfer_Result extends UII_sessiontransfer_Base, UII_sessiontransfer_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
  uii_toagentid_guid: string | null;
}
interface UII_sessiontransfer_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  uii_toagentid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface UII_sessiontransfer_RelatedMany {
  uii_sessiontransfer_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  uii_sessiontransfer_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  uii_sessiontransfer_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  uii_sessiontransfer_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  uii_sessiontransfer_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  uii_sessiontransfer_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  uii_sessiontransfer_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  uii_sessiontransfer_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  uii_sessiontransfer_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  uii_sessiontransfers: WebMappingRetrieve<UII_sessiontransfer_Select,UII_sessiontransfer_Expand,UII_sessiontransfer_Filter,UII_sessiontransfer_Fixed,UII_sessiontransfer_Result,UII_sessiontransfer_FormattedResult>;
}
interface WebEntitiesRelated {
  uii_sessiontransfers: WebMappingRelated<UII_sessiontransfer_RelatedOne,UII_sessiontransfer_RelatedMany>;
}
interface WebEntitiesCUDA {
  uii_sessiontransfers: WebMappingCUDA<UII_sessiontransfer_Create,UII_sessiontransfer_Update,UII_sessiontransfer_Select>;
}
