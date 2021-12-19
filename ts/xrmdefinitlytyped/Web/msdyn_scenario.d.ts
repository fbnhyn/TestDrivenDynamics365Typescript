interface msdyn_scenario_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_displayname?: string | null;
  msdyn_name?: string | null;
  msdyn_scenarioid?: string | null;
  msdyn_type?: boolean | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_scenario_statecode | null;
  statuscode?: msdyn_scenario_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_scenario_Relationships {
  msdyn_ChannelId?: msdyn_channel_Result | null;
  msdyn_NotificationTemplate?: msdyn_consoleapplicationnotificationtemplate_Result | null;
  msdyn_ParentScenarioId?: msdyn_scenario_Result | null;
  msdyn_SessionTemplate?: msdyn_consoleapplicationsessiontemplate_Result | null;
  msdyn_WorkStreamId?: msdyn_liveworkstream_Result | null;
  msdyn_msdyn_scenario_msdyn_scenario?: msdyn_scenario_Result[] | null;
  msdyn_scenario_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_scenario_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_scenario_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_scenario_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_scenario_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_scenario_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_scenario_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_scenario_SyncErrors?: SyncError_Result[] | null;
  msdyn_scenario_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_scenario extends msdyn_scenario_Base, msdyn_scenario_Relationships {
  msdyn_ChannelId_bind$msdyn_channels?: string | null;
  msdyn_NotificationTemplate_bind$msdyn_consoleapplicationnotificationtemplates?: string | null;
  msdyn_ParentScenarioId_bind$msdyn_scenarios?: string | null;
  msdyn_SessionTemplate_bind$msdyn_consoleapplicationsessiontemplates?: string | null;
  msdyn_WorkStreamId_bind$msdyn_liveworkstreams?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_scenario_Create extends msdyn_scenario {
}
interface msdyn_scenario_Update extends msdyn_scenario {
}
interface msdyn_scenario_Select {
  createdby_guid: WebAttribute<msdyn_scenario_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_scenario_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_scenario_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_scenario_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_scenario_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_scenario_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_scenario_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_channelid_guid: WebAttribute<msdyn_scenario_Select, { msdyn_channelid_guid: string | null }, { msdyn_channelid_formatted?: string }>;
  msdyn_displayname: WebAttribute<msdyn_scenario_Select, { msdyn_displayname: string | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_scenario_Select, { msdyn_name: string | null }, {  }>;
  msdyn_notificationtemplate_guid: WebAttribute<msdyn_scenario_Select, { msdyn_notificationtemplate_guid: string | null }, { msdyn_notificationtemplate_formatted?: string }>;
  msdyn_parentscenarioid_guid: WebAttribute<msdyn_scenario_Select, { msdyn_parentscenarioid_guid: string | null }, { msdyn_parentscenarioid_formatted?: string }>;
  msdyn_scenarioid: WebAttribute<msdyn_scenario_Select, { msdyn_scenarioid: string | null }, {  }>;
  msdyn_sessiontemplate_guid: WebAttribute<msdyn_scenario_Select, { msdyn_sessiontemplate_guid: string | null }, { msdyn_sessiontemplate_formatted?: string }>;
  msdyn_type: WebAttribute<msdyn_scenario_Select, { msdyn_type: boolean | null }, {  }>;
  msdyn_workstreamid_guid: WebAttribute<msdyn_scenario_Select, { msdyn_workstreamid_guid: string | null }, { msdyn_workstreamid_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_scenario_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_scenario_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_scenario_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_scenario_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_scenario_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_scenario_Select, { statecode: msdyn_scenario_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_scenario_Select, { statuscode: msdyn_scenario_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_scenario_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_scenario_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_scenario_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_scenario_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_channelid_guid: XQW.Guid;
  msdyn_displayname: string;
  msdyn_name: string;
  msdyn_notificationtemplate_guid: XQW.Guid;
  msdyn_parentscenarioid_guid: XQW.Guid;
  msdyn_scenarioid: XQW.Guid;
  msdyn_sessiontemplate_guid: XQW.Guid;
  msdyn_type: boolean;
  msdyn_workstreamid_guid: XQW.Guid;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_scenario_statecode;
  statuscode: msdyn_scenario_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_scenario_Expand {
  createdby: WebExpand<msdyn_scenario_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_scenario_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_scenario_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_scenario_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_ChannelId: WebExpand<msdyn_scenario_Expand, msdyn_channel_Select, msdyn_channel_Filter, { msdyn_ChannelId: msdyn_channel_Result }>;
  msdyn_NotificationTemplate: WebExpand<msdyn_scenario_Expand, msdyn_consoleapplicationnotificationtemplate_Select, msdyn_consoleapplicationnotificationtemplate_Filter, { msdyn_NotificationTemplate: msdyn_consoleapplicationnotificationtemplate_Result }>;
  msdyn_ParentScenarioId: WebExpand<msdyn_scenario_Expand, msdyn_scenario_Select, msdyn_scenario_Filter, { msdyn_ParentScenarioId: msdyn_scenario_Result }>;
  msdyn_SessionTemplate: WebExpand<msdyn_scenario_Expand, msdyn_consoleapplicationsessiontemplate_Select, msdyn_consoleapplicationsessiontemplate_Filter, { msdyn_SessionTemplate: msdyn_consoleapplicationsessiontemplate_Result }>;
  msdyn_WorkStreamId: WebExpand<msdyn_scenario_Expand, msdyn_liveworkstream_Select, msdyn_liveworkstream_Filter, { msdyn_WorkStreamId: msdyn_liveworkstream_Result }>;
  msdyn_msdyn_scenario_msdyn_scenario: WebExpand<msdyn_scenario_Expand, msdyn_scenario_Select, msdyn_scenario_Filter, { msdyn_msdyn_scenario_msdyn_scenario: msdyn_scenario_Result[] }>;
  msdyn_scenario_AsyncOperations: WebExpand<msdyn_scenario_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_scenario_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_scenario_BulkDeleteFailures: WebExpand<msdyn_scenario_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_scenario_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_scenario_DuplicateBaseRecord: WebExpand<msdyn_scenario_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_scenario_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_scenario_DuplicateMatchingRecord: WebExpand<msdyn_scenario_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_scenario_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_scenario_MailboxTrackingFolders: WebExpand<msdyn_scenario_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_scenario_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_scenario_PrincipalObjectAttributeAccesses: WebExpand<msdyn_scenario_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_scenario_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_scenario_ProcessSession: WebExpand<msdyn_scenario_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_scenario_ProcessSession: ProcessSession_Result[] }>;
  msdyn_scenario_SyncErrors: WebExpand<msdyn_scenario_Expand, SyncError_Select, SyncError_Filter, { msdyn_scenario_SyncErrors: SyncError_Result[] }>;
  msdyn_scenario_UserEntityInstanceDatas: WebExpand<msdyn_scenario_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_scenario_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  ownerid: WebExpand<msdyn_scenario_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_scenario_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_scenario_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_scenario_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_scenario_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_channelid_formatted?: string;
  msdyn_notificationtemplate_formatted?: string;
  msdyn_parentscenarioid_formatted?: string;
  msdyn_sessiontemplate_formatted?: string;
  msdyn_workstreamid_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_scenario_Result extends msdyn_scenario_Base, msdyn_scenario_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_channelid_guid: string | null;
  msdyn_notificationtemplate_guid: string | null;
  msdyn_parentscenarioid_guid: string | null;
  msdyn_sessiontemplate_guid: string | null;
  msdyn_workstreamid_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_scenario_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_ChannelId: WebMappingRetrieve<msdyn_channel_Select,msdyn_channel_Expand,msdyn_channel_Filter,msdyn_channel_Fixed,msdyn_channel_Result,msdyn_channel_FormattedResult>;
  msdyn_NotificationTemplate: WebMappingRetrieve<msdyn_consoleapplicationnotificationtemplate_Select,msdyn_consoleapplicationnotificationtemplate_Expand,msdyn_consoleapplicationnotificationtemplate_Filter,msdyn_consoleapplicationnotificationtemplate_Fixed,msdyn_consoleapplicationnotificationtemplate_Result,msdyn_consoleapplicationnotificationtemplate_FormattedResult>;
  msdyn_ParentScenarioId: WebMappingRetrieve<msdyn_scenario_Select,msdyn_scenario_Expand,msdyn_scenario_Filter,msdyn_scenario_Fixed,msdyn_scenario_Result,msdyn_scenario_FormattedResult>;
  msdyn_SessionTemplate: WebMappingRetrieve<msdyn_consoleapplicationsessiontemplate_Select,msdyn_consoleapplicationsessiontemplate_Expand,msdyn_consoleapplicationsessiontemplate_Filter,msdyn_consoleapplicationsessiontemplate_Fixed,msdyn_consoleapplicationsessiontemplate_Result,msdyn_consoleapplicationsessiontemplate_FormattedResult>;
  msdyn_WorkStreamId: WebMappingRetrieve<msdyn_liveworkstream_Select,msdyn_liveworkstream_Expand,msdyn_liveworkstream_Filter,msdyn_liveworkstream_Fixed,msdyn_liveworkstream_Result,msdyn_liveworkstream_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_scenario_RelatedMany {
  msdyn_msdyn_scenario_msdyn_scenario: WebMappingRetrieve<msdyn_scenario_Select,msdyn_scenario_Expand,msdyn_scenario_Filter,msdyn_scenario_Fixed,msdyn_scenario_Result,msdyn_scenario_FormattedResult>;
  msdyn_scenario_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_scenario_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_scenario_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_scenario_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_scenario_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_scenario_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_scenario_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_scenario_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_scenario_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_scenarios: WebMappingRetrieve<msdyn_scenario_Select,msdyn_scenario_Expand,msdyn_scenario_Filter,msdyn_scenario_Fixed,msdyn_scenario_Result,msdyn_scenario_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_scenarios: WebMappingRelated<msdyn_scenario_RelatedOne,msdyn_scenario_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_scenarios: WebMappingCUDA<msdyn_scenario_Create,msdyn_scenario_Update,msdyn_scenario_Select>;
}
