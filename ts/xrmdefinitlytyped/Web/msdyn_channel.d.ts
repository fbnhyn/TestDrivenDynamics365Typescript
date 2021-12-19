interface msdyn_channel_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_channelid?: string | null;
  msdyn_displayname?: string | null;
  msdyn_name?: string | null;
  msdyn_notificationscenarioplaceholder?: string | null;
  msdyn_sessionscenarioplaceholder?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_channel_statecode | null;
  statuscode?: msdyn_channel_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_channel_Relationships {
  msdyn_ChannelProviderId?: msdyn_ciprovider_Result | null;
  msdyn_channel_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_channel_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_channel_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_channel_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_channel_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_channel_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_channel_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_channel_SyncErrors?: SyncError_Result[] | null;
  msdyn_channel_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  msdyn_msdyn_channel_msdyn_scenario?: msdyn_scenario_Result[] | null;
}
interface msdyn_channel extends msdyn_channel_Base, msdyn_channel_Relationships {
  msdyn_ChannelProviderId_bind$msdyn_ciproviders?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_channel_Create extends msdyn_channel {
}
interface msdyn_channel_Update extends msdyn_channel {
}
interface msdyn_channel_Select {
  createdby_guid: WebAttribute<msdyn_channel_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_channel_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_channel_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_channel_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_channel_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_channel_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_channel_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_channelid: WebAttribute<msdyn_channel_Select, { msdyn_channelid: string | null }, {  }>;
  msdyn_channelproviderid_guid: WebAttribute<msdyn_channel_Select, { msdyn_channelproviderid_guid: string | null }, { msdyn_channelproviderid_formatted?: string }>;
  msdyn_displayname: WebAttribute<msdyn_channel_Select, { msdyn_displayname: string | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_channel_Select, { msdyn_name: string | null }, {  }>;
  msdyn_notificationscenarioplaceholder: WebAttribute<msdyn_channel_Select, { msdyn_notificationscenarioplaceholder: string | null }, {  }>;
  msdyn_sessionscenarioplaceholder: WebAttribute<msdyn_channel_Select, { msdyn_sessionscenarioplaceholder: string | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_channel_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_channel_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_channel_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_channel_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_channel_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_channel_Select, { statecode: msdyn_channel_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_channel_Select, { statuscode: msdyn_channel_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_channel_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_channel_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_channel_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_channel_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_channelid: XQW.Guid;
  msdyn_channelproviderid_guid: XQW.Guid;
  msdyn_displayname: string;
  msdyn_name: string;
  msdyn_notificationscenarioplaceholder: string;
  msdyn_sessionscenarioplaceholder: string;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_channel_statecode;
  statuscode: msdyn_channel_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_channel_Expand {
  createdby: WebExpand<msdyn_channel_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_channel_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_channel_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_channel_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_ChannelProviderId: WebExpand<msdyn_channel_Expand, msdyn_ciprovider_Select, msdyn_ciprovider_Filter, { msdyn_ChannelProviderId: msdyn_ciprovider_Result }>;
  msdyn_channel_AsyncOperations: WebExpand<msdyn_channel_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_channel_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_channel_BulkDeleteFailures: WebExpand<msdyn_channel_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_channel_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_channel_DuplicateBaseRecord: WebExpand<msdyn_channel_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_channel_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_channel_DuplicateMatchingRecord: WebExpand<msdyn_channel_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_channel_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_channel_MailboxTrackingFolders: WebExpand<msdyn_channel_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_channel_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_channel_PrincipalObjectAttributeAccesses: WebExpand<msdyn_channel_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_channel_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_channel_ProcessSession: WebExpand<msdyn_channel_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_channel_ProcessSession: ProcessSession_Result[] }>;
  msdyn_channel_SyncErrors: WebExpand<msdyn_channel_Expand, SyncError_Select, SyncError_Filter, { msdyn_channel_SyncErrors: SyncError_Result[] }>;
  msdyn_channel_UserEntityInstanceDatas: WebExpand<msdyn_channel_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_channel_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_msdyn_channel_msdyn_scenario: WebExpand<msdyn_channel_Expand, msdyn_scenario_Select, msdyn_scenario_Filter, { msdyn_msdyn_channel_msdyn_scenario: msdyn_scenario_Result[] }>;
  ownerid: WebExpand<msdyn_channel_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_channel_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_channel_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_channel_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_channel_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_channelproviderid_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_channel_Result extends msdyn_channel_Base, msdyn_channel_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_channelproviderid_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_channel_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_ChannelProviderId: WebMappingRetrieve<msdyn_ciprovider_Select,msdyn_ciprovider_Expand,msdyn_ciprovider_Filter,msdyn_ciprovider_Fixed,msdyn_ciprovider_Result,msdyn_ciprovider_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_channel_RelatedMany {
  msdyn_channel_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_channel_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_channel_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_channel_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_channel_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_channel_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_channel_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_channel_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_channel_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  msdyn_msdyn_channel_msdyn_scenario: WebMappingRetrieve<msdyn_scenario_Select,msdyn_scenario_Expand,msdyn_scenario_Filter,msdyn_scenario_Fixed,msdyn_scenario_Result,msdyn_scenario_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_channels: WebMappingRetrieve<msdyn_channel_Select,msdyn_channel_Expand,msdyn_channel_Filter,msdyn_channel_Fixed,msdyn_channel_Result,msdyn_channel_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_channels: WebMappingRelated<msdyn_channel_RelatedOne,msdyn_channel_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_channels: WebMappingCUDA<msdyn_channel_Create,msdyn_channel_Update,msdyn_channel_Select>;
}
