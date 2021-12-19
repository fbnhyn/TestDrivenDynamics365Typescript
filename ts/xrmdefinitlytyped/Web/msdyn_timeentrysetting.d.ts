interface msdyn_timeentrysetting_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_isdefault?: boolean | null;
  msdyn_name?: string | null;
  msdyn_sourcetype?: msdyn_timeentrysourcetype | null;
  msdyn_timeentrysettingid?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_timeentrysetting_statecode | null;
  statuscode?: msdyn_timeentrysetting_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_timeentrysetting_Relationships {
  msdyn_msdyn_timeentrysetting_msdyn_timeentry?: msdyn_timeentry_Result[] | null;
  msdyn_timeentrysetting_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_timeentrysetting_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_timeentrysetting_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_timeentrysetting_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_timeentrysetting_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_timeentrysetting_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_timeentrysetting_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_timeentrysetting_SyncErrors?: SyncError_Result[] | null;
  msdyn_timeentrysetting_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_timeentrysetting extends msdyn_timeentrysetting_Base, msdyn_timeentrysetting_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_timeentrysetting_Create extends msdyn_timeentrysetting {
}
interface msdyn_timeentrysetting_Update extends msdyn_timeentrysetting {
}
interface msdyn_timeentrysetting_Select {
  createdby_guid: WebAttribute<msdyn_timeentrysetting_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_timeentrysetting_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_timeentrysetting_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_timeentrysetting_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_timeentrysetting_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_timeentrysetting_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_timeentrysetting_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_isdefault: WebAttribute<msdyn_timeentrysetting_Select, { msdyn_isdefault: boolean | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_timeentrysetting_Select, { msdyn_name: string | null }, {  }>;
  msdyn_sourcetype: WebAttribute<msdyn_timeentrysetting_Select, { msdyn_sourcetype: msdyn_timeentrysourcetype | null }, { msdyn_sourcetype_formatted?: string }>;
  msdyn_timeentrysettingid: WebAttribute<msdyn_timeentrysetting_Select, { msdyn_timeentrysettingid: string | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_timeentrysetting_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_timeentrysetting_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_timeentrysetting_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_timeentrysetting_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_timeentrysetting_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_timeentrysetting_Select, { statecode: msdyn_timeentrysetting_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_timeentrysetting_Select, { statuscode: msdyn_timeentrysetting_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_timeentrysetting_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_timeentrysetting_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_timeentrysetting_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_timeentrysetting_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_isdefault: boolean;
  msdyn_name: string;
  msdyn_sourcetype: msdyn_timeentrysourcetype;
  msdyn_timeentrysettingid: XQW.Guid;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_timeentrysetting_statecode;
  statuscode: msdyn_timeentrysetting_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_timeentrysetting_Expand {
  createdby: WebExpand<msdyn_timeentrysetting_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_timeentrysetting_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_timeentrysetting_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_timeentrysetting_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_msdyn_timeentrysetting_msdyn_timeentry: WebExpand<msdyn_timeentrysetting_Expand, msdyn_timeentry_Select, msdyn_timeentry_Filter, { msdyn_msdyn_timeentrysetting_msdyn_timeentry: msdyn_timeentry_Result[] }>;
  msdyn_timeentrysetting_AsyncOperations: WebExpand<msdyn_timeentrysetting_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_timeentrysetting_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_timeentrysetting_BulkDeleteFailures: WebExpand<msdyn_timeentrysetting_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_timeentrysetting_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_timeentrysetting_DuplicateBaseRecord: WebExpand<msdyn_timeentrysetting_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_timeentrysetting_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_timeentrysetting_DuplicateMatchingRecord: WebExpand<msdyn_timeentrysetting_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_timeentrysetting_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_timeentrysetting_MailboxTrackingFolders: WebExpand<msdyn_timeentrysetting_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_timeentrysetting_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_timeentrysetting_PrincipalObjectAttributeAccesses: WebExpand<msdyn_timeentrysetting_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_timeentrysetting_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_timeentrysetting_ProcessSession: WebExpand<msdyn_timeentrysetting_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_timeentrysetting_ProcessSession: ProcessSession_Result[] }>;
  msdyn_timeentrysetting_SyncErrors: WebExpand<msdyn_timeentrysetting_Expand, SyncError_Select, SyncError_Filter, { msdyn_timeentrysetting_SyncErrors: SyncError_Result[] }>;
  msdyn_timeentrysetting_UserEntityInstanceDatas: WebExpand<msdyn_timeentrysetting_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_timeentrysetting_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  ownerid: WebExpand<msdyn_timeentrysetting_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_timeentrysetting_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_timeentrysetting_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_timeentrysetting_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_timeentrysetting_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_sourcetype_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_timeentrysetting_Result extends msdyn_timeentrysetting_Base, msdyn_timeentrysetting_Relationships {
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
interface msdyn_timeentrysetting_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_timeentrysetting_RelatedMany {
  msdyn_msdyn_timeentrysetting_msdyn_timeentry: WebMappingRetrieve<msdyn_timeentry_Select,msdyn_timeentry_Expand,msdyn_timeentry_Filter,msdyn_timeentry_Fixed,msdyn_timeentry_Result,msdyn_timeentry_FormattedResult>;
  msdyn_timeentrysetting_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_timeentrysetting_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_timeentrysetting_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_timeentrysetting_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_timeentrysetting_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_timeentrysetting_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_timeentrysetting_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_timeentrysetting_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_timeentrysetting_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_timeentrysettings: WebMappingRetrieve<msdyn_timeentrysetting_Select,msdyn_timeentrysetting_Expand,msdyn_timeentrysetting_Filter,msdyn_timeentrysetting_Fixed,msdyn_timeentrysetting_Result,msdyn_timeentrysetting_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_timeentrysettings: WebMappingRelated<msdyn_timeentrysetting_RelatedOne,msdyn_timeentrysetting_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_timeentrysettings: WebMappingCUDA<msdyn_timeentrysetting_Create,msdyn_timeentrysetting_Update,msdyn_timeentrysetting_Select>;
}
