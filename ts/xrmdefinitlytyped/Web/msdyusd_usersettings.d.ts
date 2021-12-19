interface msdyusd_usersettings_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyusd_name?: string | null;
  msdyusd_settingvalue?: string | null;
  msdyusd_usersettingsid?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyusd_usersettings_statecode | null;
  statuscode?: msdyusd_usersettings_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyusd_usersettings_Relationships {
  msdyusd_User?: SystemUser_Result | null;
  msdyusd_usersettings_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyusd_usersettings_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyusd_usersettings_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyusd_usersettings_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyusd_usersettings_ProcessSession?: ProcessSession_Result[] | null;
  msdyusd_usersettings_SyncErrors?: SyncError_Result[] | null;
  msdyusd_usersettings_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyusd_usersettings extends msdyusd_usersettings_Base, msdyusd_usersettings_Relationships {
  msdyusd_User_bind$systemusers?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyusd_usersettings_Create extends msdyusd_usersettings {
}
interface msdyusd_usersettings_Update extends msdyusd_usersettings {
}
interface msdyusd_usersettings_Select {
  createdby_guid: WebAttribute<msdyusd_usersettings_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyusd_usersettings_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyusd_usersettings_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyusd_usersettings_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyusd_usersettings_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyusd_usersettings_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyusd_usersettings_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyusd_name: WebAttribute<msdyusd_usersettings_Select, { msdyusd_name: string | null }, {  }>;
  msdyusd_settingvalue: WebAttribute<msdyusd_usersettings_Select, { msdyusd_settingvalue: string | null }, {  }>;
  msdyusd_user_guid: WebAttribute<msdyusd_usersettings_Select, { msdyusd_user_guid: string | null }, { msdyusd_user_formatted?: string }>;
  msdyusd_usersettingsid: WebAttribute<msdyusd_usersettings_Select, { msdyusd_usersettingsid: string | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyusd_usersettings_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyusd_usersettings_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyusd_usersettings_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyusd_usersettings_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyusd_usersettings_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyusd_usersettings_Select, { statecode: msdyusd_usersettings_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyusd_usersettings_Select, { statuscode: msdyusd_usersettings_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyusd_usersettings_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyusd_usersettings_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyusd_usersettings_Select, { versionnumber: number | null }, {  }>;
}
interface msdyusd_usersettings_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyusd_name: string;
  msdyusd_settingvalue: string;
  msdyusd_user_guid: XQW.Guid;
  msdyusd_usersettingsid: XQW.Guid;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyusd_usersettings_statecode;
  statuscode: msdyusd_usersettings_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyusd_usersettings_Expand {
  createdby: WebExpand<msdyusd_usersettings_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyusd_usersettings_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyusd_usersettings_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyusd_usersettings_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyusd_User: WebExpand<msdyusd_usersettings_Expand, SystemUser_Select, SystemUser_Filter, { msdyusd_User: SystemUser_Result }>;
  msdyusd_usersettings_AsyncOperations: WebExpand<msdyusd_usersettings_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyusd_usersettings_AsyncOperations: AsyncOperation_Result[] }>;
  msdyusd_usersettings_BulkDeleteFailures: WebExpand<msdyusd_usersettings_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyusd_usersettings_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyusd_usersettings_MailboxTrackingFolders: WebExpand<msdyusd_usersettings_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyusd_usersettings_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyusd_usersettings_PrincipalObjectAttributeAccesses: WebExpand<msdyusd_usersettings_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyusd_usersettings_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyusd_usersettings_ProcessSession: WebExpand<msdyusd_usersettings_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyusd_usersettings_ProcessSession: ProcessSession_Result[] }>;
  msdyusd_usersettings_SyncErrors: WebExpand<msdyusd_usersettings_Expand, SyncError_Select, SyncError_Filter, { msdyusd_usersettings_SyncErrors: SyncError_Result[] }>;
  msdyusd_usersettings_UserEntityInstanceDatas: WebExpand<msdyusd_usersettings_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyusd_usersettings_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  ownerid: WebExpand<msdyusd_usersettings_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyusd_usersettings_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyusd_usersettings_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyusd_usersettings_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyusd_usersettings_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyusd_user_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyusd_usersettings_Result extends msdyusd_usersettings_Base, msdyusd_usersettings_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyusd_user_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyusd_usersettings_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyusd_User: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyusd_usersettings_RelatedMany {
  msdyusd_usersettings_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyusd_usersettings_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyusd_usersettings_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyusd_usersettings_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyusd_usersettings_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyusd_usersettings_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyusd_usersettings_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyusd_usersettingses: WebMappingRetrieve<msdyusd_usersettings_Select,msdyusd_usersettings_Expand,msdyusd_usersettings_Filter,msdyusd_usersettings_Fixed,msdyusd_usersettings_Result,msdyusd_usersettings_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyusd_usersettingses: WebMappingRelated<msdyusd_usersettings_RelatedOne,msdyusd_usersettings_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyusd_usersettingses: WebMappingCUDA<msdyusd_usersettings_Create,msdyusd_usersettings_Update,msdyusd_usersettings_Select>;
}
