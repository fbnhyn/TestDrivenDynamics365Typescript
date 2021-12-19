interface msdyn_omnichannelsyncconfig_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_configjson?: string | null;
  msdyn_name?: string | null;
  msdyn_omnichannelsyncconfigid?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_omnichannelsyncconfig_statecode | null;
  statuscode?: msdyn_omnichannelsyncconfig_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_omnichannelsyncconfig_Relationships {
  msdyn_omnichannelsyncconfig_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_omnichannelsyncconfig_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_omnichannelsyncconfig_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_omnichannelsyncconfig_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_omnichannelsyncconfig_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_omnichannelsyncconfig_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_omnichannelsyncconfig_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_omnichannelsyncconfig_SyncErrors?: SyncError_Result[] | null;
  msdyn_omnichannelsyncconfig_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_omnichannelsyncconfig extends msdyn_omnichannelsyncconfig_Base, msdyn_omnichannelsyncconfig_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_omnichannelsyncconfig_Create extends msdyn_omnichannelsyncconfig {
}
interface msdyn_omnichannelsyncconfig_Update extends msdyn_omnichannelsyncconfig {
}
interface msdyn_omnichannelsyncconfig_Select {
  createdby_guid: WebAttribute<msdyn_omnichannelsyncconfig_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_omnichannelsyncconfig_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_omnichannelsyncconfig_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_omnichannelsyncconfig_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_omnichannelsyncconfig_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_omnichannelsyncconfig_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_omnichannelsyncconfig_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_configjson: WebAttribute<msdyn_omnichannelsyncconfig_Select, { msdyn_configjson: string | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_omnichannelsyncconfig_Select, { msdyn_name: string | null }, {  }>;
  msdyn_omnichannelsyncconfigid: WebAttribute<msdyn_omnichannelsyncconfig_Select, { msdyn_omnichannelsyncconfigid: string | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_omnichannelsyncconfig_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_omnichannelsyncconfig_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_omnichannelsyncconfig_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_omnichannelsyncconfig_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_omnichannelsyncconfig_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_omnichannelsyncconfig_Select, { statecode: msdyn_omnichannelsyncconfig_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_omnichannelsyncconfig_Select, { statuscode: msdyn_omnichannelsyncconfig_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_omnichannelsyncconfig_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_omnichannelsyncconfig_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_omnichannelsyncconfig_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_omnichannelsyncconfig_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_configjson: string;
  msdyn_name: string;
  msdyn_omnichannelsyncconfigid: XQW.Guid;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_omnichannelsyncconfig_statecode;
  statuscode: msdyn_omnichannelsyncconfig_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_omnichannelsyncconfig_Expand {
  createdby: WebExpand<msdyn_omnichannelsyncconfig_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_omnichannelsyncconfig_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_omnichannelsyncconfig_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_omnichannelsyncconfig_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_omnichannelsyncconfig_AsyncOperations: WebExpand<msdyn_omnichannelsyncconfig_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_omnichannelsyncconfig_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_omnichannelsyncconfig_BulkDeleteFailures: WebExpand<msdyn_omnichannelsyncconfig_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_omnichannelsyncconfig_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_omnichannelsyncconfig_DuplicateBaseRecord: WebExpand<msdyn_omnichannelsyncconfig_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_omnichannelsyncconfig_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_omnichannelsyncconfig_DuplicateMatchingRecord: WebExpand<msdyn_omnichannelsyncconfig_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_omnichannelsyncconfig_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_omnichannelsyncconfig_MailboxTrackingFolders: WebExpand<msdyn_omnichannelsyncconfig_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_omnichannelsyncconfig_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_omnichannelsyncconfig_PrincipalObjectAttributeAccesses: WebExpand<msdyn_omnichannelsyncconfig_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_omnichannelsyncconfig_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_omnichannelsyncconfig_ProcessSession: WebExpand<msdyn_omnichannelsyncconfig_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_omnichannelsyncconfig_ProcessSession: ProcessSession_Result[] }>;
  msdyn_omnichannelsyncconfig_SyncErrors: WebExpand<msdyn_omnichannelsyncconfig_Expand, SyncError_Select, SyncError_Filter, { msdyn_omnichannelsyncconfig_SyncErrors: SyncError_Result[] }>;
  msdyn_omnichannelsyncconfig_UserEntityInstanceDatas: WebExpand<msdyn_omnichannelsyncconfig_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_omnichannelsyncconfig_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  ownerid: WebExpand<msdyn_omnichannelsyncconfig_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_omnichannelsyncconfig_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_omnichannelsyncconfig_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_omnichannelsyncconfig_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_omnichannelsyncconfig_FormattedResult {
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
interface msdyn_omnichannelsyncconfig_Result extends msdyn_omnichannelsyncconfig_Base, msdyn_omnichannelsyncconfig_Relationships {
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
interface msdyn_omnichannelsyncconfig_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_omnichannelsyncconfig_RelatedMany {
  msdyn_omnichannelsyncconfig_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_omnichannelsyncconfig_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_omnichannelsyncconfig_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_omnichannelsyncconfig_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_omnichannelsyncconfig_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_omnichannelsyncconfig_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_omnichannelsyncconfig_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_omnichannelsyncconfig_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_omnichannelsyncconfig_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_omnichannelsyncconfigs: WebMappingRetrieve<msdyn_omnichannelsyncconfig_Select,msdyn_omnichannelsyncconfig_Expand,msdyn_omnichannelsyncconfig_Filter,msdyn_omnichannelsyncconfig_Fixed,msdyn_omnichannelsyncconfig_Result,msdyn_omnichannelsyncconfig_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_omnichannelsyncconfigs: WebMappingRelated<msdyn_omnichannelsyncconfig_RelatedOne,msdyn_omnichannelsyncconfig_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_omnichannelsyncconfigs: WebMappingCUDA<msdyn_omnichannelsyncconfig_Create,msdyn_omnichannelsyncconfig_Update,msdyn_omnichannelsyncconfig_Select>;
}
