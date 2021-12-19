interface msdyn_actioncardregarding_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_actioncardid?: string | null;
  msdyn_actioncardregardingid?: string | null;
  msdyn_name?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_actioncardregarding_statecode | null;
  statuscode?: msdyn_actioncardregarding_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_actioncardregarding_Relationships {
  msdyn_actioncardregarding_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_actioncardregarding_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_actioncardregarding_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_actioncardregarding_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_actioncardregarding_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_actioncardregarding_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_actioncardregarding_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_actioncardregarding_SyncErrors?: SyncError_Result[] | null;
  msdyn_actioncardregarding_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_actioncardregarding extends msdyn_actioncardregarding_Base, msdyn_actioncardregarding_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_actioncardregarding_Create extends msdyn_actioncardregarding {
}
interface msdyn_actioncardregarding_Update extends msdyn_actioncardregarding {
}
interface msdyn_actioncardregarding_Select {
  createdby_guid: WebAttribute<msdyn_actioncardregarding_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_actioncardregarding_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_actioncardregarding_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_actioncardregarding_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_actioncardregarding_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_actioncardregarding_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_actioncardregarding_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_actioncardid: WebAttribute<msdyn_actioncardregarding_Select, { msdyn_actioncardid: string | null }, {  }>;
  msdyn_actioncardregardingid: WebAttribute<msdyn_actioncardregarding_Select, { msdyn_actioncardregardingid: string | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_actioncardregarding_Select, { msdyn_name: string | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_actioncardregarding_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_actioncardregarding_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_actioncardregarding_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_actioncardregarding_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_actioncardregarding_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_actioncardregarding_Select, { statecode: msdyn_actioncardregarding_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_actioncardregarding_Select, { statuscode: msdyn_actioncardregarding_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_actioncardregarding_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_actioncardregarding_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_actioncardregarding_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_actioncardregarding_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_actioncardid: string;
  msdyn_actioncardregardingid: XQW.Guid;
  msdyn_name: string;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_actioncardregarding_statecode;
  statuscode: msdyn_actioncardregarding_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_actioncardregarding_Expand {
  createdby: WebExpand<msdyn_actioncardregarding_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_actioncardregarding_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_actioncardregarding_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_actioncardregarding_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_actioncardregarding_AsyncOperations: WebExpand<msdyn_actioncardregarding_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_actioncardregarding_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_actioncardregarding_BulkDeleteFailures: WebExpand<msdyn_actioncardregarding_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_actioncardregarding_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_actioncardregarding_DuplicateBaseRecord: WebExpand<msdyn_actioncardregarding_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_actioncardregarding_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_actioncardregarding_DuplicateMatchingRecord: WebExpand<msdyn_actioncardregarding_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_actioncardregarding_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_actioncardregarding_MailboxTrackingFolders: WebExpand<msdyn_actioncardregarding_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_actioncardregarding_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_actioncardregarding_PrincipalObjectAttributeAccesses: WebExpand<msdyn_actioncardregarding_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_actioncardregarding_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_actioncardregarding_ProcessSession: WebExpand<msdyn_actioncardregarding_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_actioncardregarding_ProcessSession: ProcessSession_Result[] }>;
  msdyn_actioncardregarding_SyncErrors: WebExpand<msdyn_actioncardregarding_Expand, SyncError_Select, SyncError_Filter, { msdyn_actioncardregarding_SyncErrors: SyncError_Result[] }>;
  msdyn_actioncardregarding_UserEntityInstanceDatas: WebExpand<msdyn_actioncardregarding_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_actioncardregarding_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  ownerid: WebExpand<msdyn_actioncardregarding_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_actioncardregarding_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_actioncardregarding_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_actioncardregarding_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_actioncardregarding_FormattedResult {
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
interface msdyn_actioncardregarding_Result extends msdyn_actioncardregarding_Base, msdyn_actioncardregarding_Relationships {
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
interface msdyn_actioncardregarding_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_actioncardregarding_RelatedMany {
  msdyn_actioncardregarding_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_actioncardregarding_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_actioncardregarding_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_actioncardregarding_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_actioncardregarding_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_actioncardregarding_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_actioncardregarding_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_actioncardregarding_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_actioncardregarding_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_actioncardregardings: WebMappingRetrieve<msdyn_actioncardregarding_Select,msdyn_actioncardregarding_Expand,msdyn_actioncardregarding_Filter,msdyn_actioncardregarding_Fixed,msdyn_actioncardregarding_Result,msdyn_actioncardregarding_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_actioncardregardings: WebMappingRelated<msdyn_actioncardregarding_RelatedOne,msdyn_actioncardregarding_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_actioncardregardings: WebMappingCUDA<msdyn_actioncardregarding_Create,msdyn_actioncardregarding_Update,msdyn_actioncardregarding_Select>;
}
