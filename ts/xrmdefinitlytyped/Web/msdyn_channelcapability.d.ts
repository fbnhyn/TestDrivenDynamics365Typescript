interface msdyn_channelcapability_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_channelcapabilityid?: string | null;
  msdyn_escalationchannelmode?: msdyn_channelcapability_msdyn_escalationchannelmode | null;
  msdyn_name?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_channelcapability_statecode | null;
  statuscode?: msdyn_channelcapability_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_channelcapability_Relationships {
  msdyn_ConversationAction?: msdyn_conversationaction_Result | null;
  msdyn_Provider?: msdyn_provider_Result | null;
  msdyn_channelcapability_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_channelcapability_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_channelcapability_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_channelcapability_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_channelcapability_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_channelcapability_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_channelcapability_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_channelcapability_SyncErrors?: SyncError_Result[] | null;
  msdyn_channelcapability_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_channelcapability extends msdyn_channelcapability_Base, msdyn_channelcapability_Relationships {
  msdyn_ConversationAction_bind$msdyn_conversationactions?: string | null;
  msdyn_Provider_bind$msdyn_providers?: string | null;
}
interface msdyn_channelcapability_Create extends msdyn_channelcapability {
}
interface msdyn_channelcapability_Update extends msdyn_channelcapability {
}
interface msdyn_channelcapability_Select {
  createdby_guid: WebAttribute<msdyn_channelcapability_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_channelcapability_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_channelcapability_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_channelcapability_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_channelcapability_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_channelcapability_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_channelcapability_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_channelcapabilityid: WebAttribute<msdyn_channelcapability_Select, { msdyn_channelcapabilityid: string | null }, {  }>;
  msdyn_conversationaction_guid: WebAttribute<msdyn_channelcapability_Select, { msdyn_conversationaction_guid: string | null }, { msdyn_conversationaction_formatted?: string }>;
  msdyn_escalationchannelmode: WebAttribute<msdyn_channelcapability_Select, { msdyn_escalationchannelmode: msdyn_channelcapability_msdyn_escalationchannelmode | null }, { msdyn_escalationchannelmode_formatted?: string }>;
  msdyn_name: WebAttribute<msdyn_channelcapability_Select, { msdyn_name: string | null }, {  }>;
  msdyn_provider_guid: WebAttribute<msdyn_channelcapability_Select, { msdyn_provider_guid: string | null }, { msdyn_provider_formatted?: string }>;
  organizationid_guid: WebAttribute<msdyn_channelcapability_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_channelcapability_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  statecode: WebAttribute<msdyn_channelcapability_Select, { statecode: msdyn_channelcapability_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_channelcapability_Select, { statuscode: msdyn_channelcapability_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_channelcapability_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_channelcapability_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_channelcapability_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_channelcapability_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_channelcapabilityid: XQW.Guid;
  msdyn_conversationaction_guid: XQW.Guid;
  msdyn_escalationchannelmode: msdyn_channelcapability_msdyn_escalationchannelmode;
  msdyn_name: string;
  msdyn_provider_guid: XQW.Guid;
  organizationid_guid: XQW.Guid;
  overriddencreatedon: Date;
  statecode: msdyn_channelcapability_statecode;
  statuscode: msdyn_channelcapability_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_channelcapability_Expand {
  createdby: WebExpand<msdyn_channelcapability_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_channelcapability_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_channelcapability_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_channelcapability_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_ConversationAction: WebExpand<msdyn_channelcapability_Expand, msdyn_conversationaction_Select, msdyn_conversationaction_Filter, { msdyn_ConversationAction: msdyn_conversationaction_Result }>;
  msdyn_Provider: WebExpand<msdyn_channelcapability_Expand, msdyn_provider_Select, msdyn_provider_Filter, { msdyn_Provider: msdyn_provider_Result }>;
  msdyn_channelcapability_AsyncOperations: WebExpand<msdyn_channelcapability_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_channelcapability_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_channelcapability_BulkDeleteFailures: WebExpand<msdyn_channelcapability_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_channelcapability_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_channelcapability_DuplicateBaseRecord: WebExpand<msdyn_channelcapability_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_channelcapability_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_channelcapability_DuplicateMatchingRecord: WebExpand<msdyn_channelcapability_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_channelcapability_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_channelcapability_MailboxTrackingFolders: WebExpand<msdyn_channelcapability_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_channelcapability_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_channelcapability_PrincipalObjectAttributeAccesses: WebExpand<msdyn_channelcapability_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_channelcapability_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_channelcapability_ProcessSession: WebExpand<msdyn_channelcapability_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_channelcapability_ProcessSession: ProcessSession_Result[] }>;
  msdyn_channelcapability_SyncErrors: WebExpand<msdyn_channelcapability_Expand, SyncError_Select, SyncError_Filter, { msdyn_channelcapability_SyncErrors: SyncError_Result[] }>;
  msdyn_channelcapability_UserEntityInstanceDatas: WebExpand<msdyn_channelcapability_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_channelcapability_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  organizationid: WebExpand<msdyn_channelcapability_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
}
interface msdyn_channelcapability_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_conversationaction_formatted?: string;
  msdyn_escalationchannelmode_formatted?: string;
  msdyn_provider_formatted?: string;
  organizationid_formatted?: string;
  overriddencreatedon_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_channelcapability_Result extends msdyn_channelcapability_Base, msdyn_channelcapability_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_conversationaction_guid: string | null;
  msdyn_provider_guid: string | null;
  organizationid_guid: string | null;
}
interface msdyn_channelcapability_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_ConversationAction: WebMappingRetrieve<msdyn_conversationaction_Select,msdyn_conversationaction_Expand,msdyn_conversationaction_Filter,msdyn_conversationaction_Fixed,msdyn_conversationaction_Result,msdyn_conversationaction_FormattedResult>;
  msdyn_Provider: WebMappingRetrieve<msdyn_provider_Select,msdyn_provider_Expand,msdyn_provider_Filter,msdyn_provider_Fixed,msdyn_provider_Result,msdyn_provider_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
}
interface msdyn_channelcapability_RelatedMany {
  msdyn_channelcapability_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_channelcapability_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_channelcapability_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_channelcapability_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_channelcapability_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_channelcapability_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_channelcapability_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_channelcapability_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_channelcapability_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_channelcapabilities: WebMappingRetrieve<msdyn_channelcapability_Select,msdyn_channelcapability_Expand,msdyn_channelcapability_Filter,msdyn_channelcapability_Fixed,msdyn_channelcapability_Result,msdyn_channelcapability_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_channelcapabilities: WebMappingRelated<msdyn_channelcapability_RelatedOne,msdyn_channelcapability_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_channelcapabilities: WebMappingCUDA<msdyn_channelcapability_Create,msdyn_channelcapability_Update,msdyn_channelcapability_Select>;
}
