interface msdyusd_ucisettings_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyusd_name?: string | null;
  msdyusd_theme?: msdyusd_ucisettings_msdyusd_theme | null;
  msdyusd_uciapp?: string | null;
  msdyusd_uciappid?: string | null;
  msdyusd_ucisettingsid?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyusd_ucisettings_statecode | null;
  statuscode?: msdyusd_ucisettings_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyusd_ucisettings_Relationships {
  msdyusd_ucisettings_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyusd_ucisettings_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyusd_ucisettings_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyusd_ucisettings_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyusd_ucisettings_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyusd_ucisettings_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyusd_ucisettings_ProcessSession?: ProcessSession_Result[] | null;
  msdyusd_ucisettings_SyncErrors?: SyncError_Result[] | null;
  msdyusd_ucisettings_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  msdyusd_ucisettings_configuration?: msdyusd_configuration_Result[] | null;
}
interface msdyusd_ucisettings extends msdyusd_ucisettings_Base, msdyusd_ucisettings_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyusd_ucisettings_Create extends msdyusd_ucisettings {
}
interface msdyusd_ucisettings_Update extends msdyusd_ucisettings {
}
interface msdyusd_ucisettings_Select {
  createdby_guid: WebAttribute<msdyusd_ucisettings_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyusd_ucisettings_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyusd_ucisettings_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyusd_ucisettings_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyusd_ucisettings_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyusd_ucisettings_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyusd_ucisettings_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyusd_name: WebAttribute<msdyusd_ucisettings_Select, { msdyusd_name: string | null }, {  }>;
  msdyusd_theme: WebAttribute<msdyusd_ucisettings_Select, { msdyusd_theme: msdyusd_ucisettings_msdyusd_theme | null }, { msdyusd_theme_formatted?: string }>;
  msdyusd_uciapp: WebAttribute<msdyusd_ucisettings_Select, { msdyusd_uciapp: string | null }, {  }>;
  msdyusd_uciappid: WebAttribute<msdyusd_ucisettings_Select, { msdyusd_uciappid: string | null }, {  }>;
  msdyusd_ucisettingsid: WebAttribute<msdyusd_ucisettings_Select, { msdyusd_ucisettingsid: string | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyusd_ucisettings_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyusd_ucisettings_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyusd_ucisettings_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyusd_ucisettings_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyusd_ucisettings_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyusd_ucisettings_Select, { statecode: msdyusd_ucisettings_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyusd_ucisettings_Select, { statuscode: msdyusd_ucisettings_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyusd_ucisettings_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyusd_ucisettings_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyusd_ucisettings_Select, { versionnumber: number | null }, {  }>;
}
interface msdyusd_ucisettings_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyusd_name: string;
  msdyusd_theme: msdyusd_ucisettings_msdyusd_theme;
  msdyusd_uciapp: string;
  msdyusd_uciappid: string;
  msdyusd_ucisettingsid: XQW.Guid;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyusd_ucisettings_statecode;
  statuscode: msdyusd_ucisettings_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyusd_ucisettings_Expand {
  createdby: WebExpand<msdyusd_ucisettings_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyusd_ucisettings_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyusd_ucisettings_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyusd_ucisettings_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyusd_ucisettings_AsyncOperations: WebExpand<msdyusd_ucisettings_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyusd_ucisettings_AsyncOperations: AsyncOperation_Result[] }>;
  msdyusd_ucisettings_BulkDeleteFailures: WebExpand<msdyusd_ucisettings_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyusd_ucisettings_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyusd_ucisettings_DuplicateBaseRecord: WebExpand<msdyusd_ucisettings_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyusd_ucisettings_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyusd_ucisettings_DuplicateMatchingRecord: WebExpand<msdyusd_ucisettings_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyusd_ucisettings_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyusd_ucisettings_MailboxTrackingFolders: WebExpand<msdyusd_ucisettings_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyusd_ucisettings_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyusd_ucisettings_PrincipalObjectAttributeAccesses: WebExpand<msdyusd_ucisettings_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyusd_ucisettings_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyusd_ucisettings_ProcessSession: WebExpand<msdyusd_ucisettings_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyusd_ucisettings_ProcessSession: ProcessSession_Result[] }>;
  msdyusd_ucisettings_SyncErrors: WebExpand<msdyusd_ucisettings_Expand, SyncError_Select, SyncError_Filter, { msdyusd_ucisettings_SyncErrors: SyncError_Result[] }>;
  msdyusd_ucisettings_UserEntityInstanceDatas: WebExpand<msdyusd_ucisettings_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyusd_ucisettings_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyusd_ucisettings_configuration: WebExpand<msdyusd_ucisettings_Expand, msdyusd_configuration_Select, msdyusd_configuration_Filter, { msdyusd_ucisettings_configuration: msdyusd_configuration_Result[] }>;
  ownerid: WebExpand<msdyusd_ucisettings_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyusd_ucisettings_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyusd_ucisettings_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyusd_ucisettings_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyusd_ucisettings_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyusd_theme_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyusd_ucisettings_Result extends msdyusd_ucisettings_Base, msdyusd_ucisettings_Relationships {
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
interface msdyusd_ucisettings_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyusd_ucisettings_RelatedMany {
  msdyusd_ucisettings_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyusd_ucisettings_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyusd_ucisettings_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyusd_ucisettings_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyusd_ucisettings_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyusd_ucisettings_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyusd_ucisettings_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyusd_ucisettings_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyusd_ucisettings_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  msdyusd_ucisettings_configuration: WebMappingRetrieve<msdyusd_configuration_Select,msdyusd_configuration_Expand,msdyusd_configuration_Filter,msdyusd_configuration_Fixed,msdyusd_configuration_Result,msdyusd_configuration_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyusd_ucisettingses: WebMappingRetrieve<msdyusd_ucisettings_Select,msdyusd_ucisettings_Expand,msdyusd_ucisettings_Filter,msdyusd_ucisettings_Fixed,msdyusd_ucisettings_Result,msdyusd_ucisettings_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyusd_ucisettingses: WebMappingRelated<msdyusd_ucisettings_RelatedOne,msdyusd_ucisettings_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyusd_ucisettingses: WebMappingCUDA<msdyusd_ucisettings_Create,msdyusd_ucisettings_Update,msdyusd_ucisettings_Select>;
}
